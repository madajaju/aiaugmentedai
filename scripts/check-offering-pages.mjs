import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve('site');
const registry=JSON.parse(fs.readFileSync(path.join(root,'offerings-registry.json'),'utf8'));
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');
const errors=[],seen=new Set();
if(!Array.isArray(registry.offerings)||!registry.offerings.length)errors.push('Offering registry is empty');
for(const offering of registry.offerings||[]){
  if(!/^[a-z0-9_-]+(?::[a-z0-9_-]+)+$/.test(offering.id)||!offering.id.includes(':offering:'))errors.push('Invalid offering identity: '+offering.id);
  const route='/o/'+offering.id.split(':').join('/')+'/';
  const url='https://ai-augmented.ai'+route;
  if(offering.url!==url)errors.push('Registry URL mismatch: '+offering.id);
  if(seen.has(route))errors.push('Duplicate offering route: '+route);
  seen.add(route);
  const filename=path.join(root,route.slice(1),'index.html');
  if(!fs.existsSync(filename)){errors.push('Missing page: '+route);continue;}
  const html=fs.readFileSync(filename,'utf8');
  if((html.match(/<h1\b/gi)||[]).length!==1)errors.push('Invalid h1: '+route);
  for(const test of ['rel="canonical" href="'+url+'"','name="description"','property="og:title"','property="og:description"','property="og:image"','Who it is for','Benefits','Access this offering']){
    if(!html.includes(test))errors.push('Missing '+test+' in '+route);
  }
  if(!sitemap.includes('<loc>'+url+'</loc>'))errors.push('Missing sitemap URL: '+route);
  if(offering.availability!=='available'&&(/>Buy now<|>Download now<|>Book now</i).test(html))errors.push('Unverified CTA: '+route);
}
if(!fs.existsSync(path.join(root,'offerings','index.html')))errors.push('Missing offerings directory');
const report={offeringPages:seen.size,errors:errors.length,issues:errors};
console.log(JSON.stringify(report,null,2));
if(errors.length)process.exitCode=1;
