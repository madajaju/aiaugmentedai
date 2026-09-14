import fs from 'fs';

const checks = [
  ['First-time visitor', ['site/index.html', 'site/find-your-path/index.html', 'site/assessment/index.html', 'site/lens/individual/index.html']],
  ['IUC attendee', ['site/education/index.html', 'site/lens/student/index.html', 'site/lens/teacher/index.html', 'site/lens/education-administrator/index.html']],
  ['Apply to Augment', ['site/apply/index.html', 'site/augment/index.html']],
  ['Resources to newsletter', ['site/resources/index.html', 'site/newsletter/index.html']],
  ['Returning user', ['site/assessment/index.html', 'site/lens/student/experimenting/index.html', 'site/resources/index.html']],
];
const failures = [];
for (const [name, files] of checks) {
  for (const file of files) if (!fs.existsSync(file)) failures.push(`${name}: missing ${file}`);
}
const homepage = fs.readFileSync('site/index.html', 'utf8');
if (!homepage.includes('href="/find-your-path/"')) failures.push('First-time visitor: homepage has no Find Your Path link');
const assessment = fs.readFileSync('site/assets/site.js', 'utf8');
for (const event of ['aa_home_find_path', 'aa_lens_selected', 'aa_assessment_start', 'aa_assessment_complete', 'aa_recommended_action_click', 'aa_learn_to_apply', 'aa_apply_to_augment', 'aa_return_later_stage']) {
  if (!assessment.includes(event)) failures.push(`Measurement: missing ${event}`);
}
const returningStage = fs.readFileSync('site/lens/student/experimenting/index.html', 'utf8');
const resources = fs.readFileSync('site/resources/index.html', 'utf8');
if (!assessment.includes('writeJourneyState({') || !assessment.includes('stageHref')) failures.push('Returning user: assessment does not save and link to a stage');
if (!returningStage.includes('Continue Your Path') || !returningStage.includes('/lens/student/integrating/')) failures.push('Returning user: stage page has no progression link');
if (!resources.includes('data-resource-recommendation') || !assessment.includes('Do This Next')) failures.push('Returning user: recommendations are not available');
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`UX journey checks passed for ${checks.length} journeys and 8 progression events.`);
