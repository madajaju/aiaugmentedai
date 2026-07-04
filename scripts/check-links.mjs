import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(__dirname, '../site');

function getFiles(dir, ext) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath, ext));
    } else if (file.endsWith(ext)) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getFiles(siteRoot, '.html');
const deadLinks = [];
const checkedLinks = new Map();

async function checkExternalLink(link) {
  if (checkedLinks.has(link)) {
    return checkedLinks.get(link);
  }

  try {
    const response = await fetch(link, { 
      method: 'HEAD',
      signal: AbortSignal.timeout(5000)
    });
    
    // Some sites return 405 Method Not Allowed for HEAD, try GET with limited bytes
    if (response.status === 405 || response.status === 404 || response.status === 403) {
        const getResponse = await fetch(link, {
            method: 'GET',
            headers: { 'Range': 'bytes=0-0' },
            signal: AbortSignal.timeout(5000)
        });
        const ok = getResponse.ok || getResponse.status === 206 || getResponse.status === 403; // 403 sometimes returned even if up
        checkedLinks.set(link, ok);
        return ok;
    }

    const ok = response.ok;
    checkedLinks.set(link, ok);
    return ok;
  } catch (err) {
    checkedLinks.set(link, false);
    return false;
  }
}

async function checkLink(sourceFile, link) {
  if (!link || link.startsWith('javascript:') || link.startsWith('mailto:') || link.startsWith('tel:')) {
    return;
  }

  // Handle external links
  if (link.startsWith('http://') || link.startsWith('https://') || link.startsWith('//')) {
    if (link.includes('ai-augmented.ai')) {
        // Treat as internal
        let internalPath = link.split('ai-augmented.ai')[1];
        if (internalPath === '') internalPath = '/';
        return checkLink(sourceFile, internalPath);
    }
    const fullUrl = link.startsWith('//') ? 'https:' + link : link;
    const isOk = await checkExternalLink(fullUrl);
    if (!isOk) {
        deadLinks.push({ source: sourceFile, link, reason: 'External link failed' });
    }
    return;
  }

  // Handle hash-only links
  if (link.startsWith('#')) {
    // Check if ID exists in sourceFile
    const content = fs.readFileSync(sourceFile, 'utf-8');
    const id = link.substring(1);
    if (!content.includes(`id="${id}"`) && !content.includes(`name="${id}"`)) {
        deadLinks.push({ source: sourceFile, link, reason: 'ID not found in file' });
    }
    return;
  }

  // Resolve link path
  let targetPath;
  let hash = '';
  if (link.includes('#')) {
    [link, hash] = link.split('#');
  }

  if (link === '') {
      // It was just a hash, already handled.
      return;
  }

  if (link.startsWith('/')) {
    targetPath = path.join(siteRoot, link);
  } else {
    targetPath = path.resolve(path.dirname(sourceFile), link);
  }

  // Normalize and check directory index
  if (!fs.existsSync(targetPath)) {
    // Maybe it's a directory? Check for index.html
    const indexPath = path.join(targetPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      targetPath = indexPath;
    } else {
        // Maybe it's missing .html extension?
        if (fs.existsSync(targetPath + '.html')) {
            targetPath = targetPath + '.html';
        } else {
            deadLinks.push({ source: sourceFile, link, reason: 'File does not exist' });
            return;
        }
    }
  } else {
    // It exists. If it's a directory, use index.html
    const stat = fs.statSync(targetPath);
    if (stat.isDirectory()) {
      const indexPath = path.join(targetPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        targetPath = indexPath;
      } else {
        deadLinks.push({ source: sourceFile, link, reason: 'Directory exists but has no index.html' });
        return;
      }
    }
  }

  // If there's a hash, check the target file
  if (hash) {
      if (targetPath.endsWith('.html')) {
          const targetContent = fs.readFileSync(targetPath, 'utf-8');
          if (!targetContent.includes(`id="${hash}"`) && !targetContent.includes(`name="${hash}"`)) {
              deadLinks.push({ source: sourceFile, link: `${link}#${hash}`, reason: 'Hash ID not found in target file' });
          }
      }
  }
}

const linkRegex = /(?:href|src)=["'](.*?)["']/g;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const link = match[1];
    await checkLink(file, link);
  }
}

if (deadLinks.length > 0) {
  console.log('Dead links found:');
  deadLinks.forEach(dl => {
    console.log(`- Source: ${path.relative(siteRoot, dl.source)}`);
    console.log(`  Link:   ${dl.link}`);
    console.log(`  Reason: ${dl.reason}`);
  });
} else {
  console.log('No dead links found.');
}
