import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const excluded = new Set(['/privacy/', '/terms/']);

function wordCount(html) {
  const visible = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return visible ? visible.split(' ').length : 0;
}

function routeFor(file) {
  const relative = path.relative(path.join(root, 'sitenew'), file).replaceAll(path.sep, '/');
  return relative === 'index.html' ? '/' : `/${relative.replace(/\/index\.html$/, '')}/`;
}

function content(route) {
  if (route.startsWith('/framework/aaos/') && route.split('/').filter(Boolean).length === 3) {
    return ['Use this stage in practice', 'Bring the current workflow, its owner, and the evidence already available. Ask what must be true before the work can move forward, and record the smallest useful output from this stage. Use that output to guide the next AAOS stage; return to Diagnose when the context changes.', '/framework/aaos/'];
  }
  if (route.startsWith('/framework/maturity/') && route.split('/').filter(Boolean).length === 3) {
    return ['Look for evidence in live work', 'Use this level to compare what people actually do with the capability you want. Look for repeated behavior, visible review, clear ownership, and evidence of outcomes. Then choose one intervention that fits the current condition instead of trying to change everything at once.', '/assessment/'];
  }
  if (route.startsWith('/framework/')) {
    return ['Turn understanding into a next action', 'Use the framework with a real workflow. First describe the current condition, then choose the AAOS stage that addresses the limiting factor. Keep the next action small enough to review and specific enough for a person to own.', '/assessment/'];
  }
  if (route.startsWith('/legal/')) {
    return ['Apply this guidance with professional review', 'Use the page to frame a workflow and the questions it raises. Confirm authorities, confidentiality requirements, access rules, client responsibilities, and review expectations with the qualified professional responsible for the work. This site provides general practice guidance rather than legal advice.', '/assessment/'];
  }
  if (route.startsWith('/medical/')) {
    return ['Apply this guidance within approved practice', 'Use the page to frame a workflow and its safety questions. Follow applicable clinical, privacy, security, and organizational requirements, and keep qualified professionals responsible for interpretation and decisions. This site provides general practice guidance rather than medical advice.', '/assessment/'];
  }
  if (route.startsWith('/education/')) {
    return ['Connect the page to your next learning decision', 'Choose one role, workflow, or learning goal that needs attention. Name the evidence of understanding, the human judgment required, and the point where review must occur. Then use the role path or practice example to continue.', '/assessment/'];
  }
  if (route.startsWith('/practice/')) {
    return ['Adapt the pattern to your context', 'Read the example as a working pattern. Identify the problem, human responsibility, AI contribution, controls, handoffs, failure modes, and evidence. Change the workflow to fit your context before using it in consequential work.', '/assessment/'];
  }
  if (route === '/newsletter/') {
    return ['What to expect', 'Updates are occasional and focused on practical capability, framework language, applied examples, and useful resources. Subscribe only when you are comfortable receiving these messages, and use the links below to review how your information is handled.', '/resources/'];
  }
  if (route === '/resources/') {
    return ['Choose a resource by the decision ahead', 'Use Learn when you need language or background, Apply when you have a defined workflow, and Augment when the work needs facilitation or guided support. Start with one question and follow the links that match your context.', '/assessment/'];
  }
  if (route === '/movement/') {
    return ['Begin with one responsible practice', 'Choose a workflow where AI could help and write down the purpose, human owner, review point, and evidence of a useful result. Use the assessment to identify the capability that will make the next experiment more valuable.', '/assessment/'];
  }
  return ['Make the next step concrete', 'Start with the work that matters, define the outcome, and keep human responsibility visible. Use the assessment to choose a practical capability, then move to the linked practice or support path when you are ready.', '/assessment/'];
}

let added = 0;
for (const entry of fs.readdirSync(path.join(root, 'sitenew'), { withFileTypes: true })) {
  // Walk below through a small recursive helper so every physical route is checked.
}
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name === 'index.html') {
      const route = routeFor(file);
      if (excluded.has(route)) continue;
      let html = fs.readFileSync(file, 'utf8');
      if (wordCount(html) >= 180 || html.includes('data-content-sufficiency')) continue;
      const [heading, text, href] = content(route);
      html = html.replace('</main>', `<section class="section surface" data-content-sufficiency><div class="container prose"><h2>${heading}</h2><p>${text}</p><a class="button primary" href="${href}">${href === '/assessment/' ? 'Take the assessment' : 'Continue'}</a></div></section></main>`);
      fs.writeFileSync(file, html);
      added += 1;
    }
  }
}
walk(path.join(root, 'sitenew'));
console.log(`Added journey guidance to ${added} pages.`);
