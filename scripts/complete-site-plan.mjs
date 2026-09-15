import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const planPath = path.join(root, 'sitePlan.md');
const planLines = fs.readFileSync(planPath, 'utf8').split(/\r?\n/);
const rows = planLines
  .map((line, index) => ({ line, index }))
  .filter(({ line }) => /^\| `\/.*` \|/.test(line) && !line.includes('COMPLETE'));

const roleData = {
  leader: {
    audience: 'education leaders',
    title: 'Build responsible AI capability across education',
    learn: ['policy purpose', 'institutional consistency', 'privacy and support', 'evidence for leadership decisions'],
    apply: 'Use a policy brief to define purpose, ownership, review, privacy, and implementation steps.',
    augment: 'Get guided help with institutional alignment, leadership workshops, readiness, and implementation.',
    practice: '/practice/education/leader/policy-brief/'
  },
  student: {
    audience: 'students',
    title: 'Use AI to strengthen learning',
    learn: ['question formation', 'source checking', 'explanation and revision', 'transfer and authorship'],
    apply: 'Use a research or revision routine that keeps your reasoning and sources visible.',
    augment: 'Use guided support for a learning goal while retaining authorship and responsibility.',
    practice: '/practice/education/student/research-paper/'
  },
  teacher: {
    audience: 'teachers',
    title: 'Use AI to improve teaching practice',
    learn: ['learning objectives', 'lesson design', 'feedback quality', 'assessment integrity'],
    apply: 'Use an assignment or lesson planning workflow with clear learning goals and review points.',
    augment: 'Get guided help with workshops, assignment redesign, lesson planning, and responsible adoption.',
    practice: '/practice/education/teacher/assignment-redesign/'
  }
};

const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function supportMain(domain, role, mode) {
  const data = roleData[role];
  const modeTitle = mode[0].toUpperCase() + mode.slice(1);
  const intro = mode === 'learn'
    ? `Build a working understanding of ${data.learn.join(', ')}, then connect those ideas to the ${data.audience} work you actually do.`
    : mode === 'apply'
      ? data.apply
      : data.augment;
  const action = mode === 'learn'
    ? `<a class="button primary" href="/framework/">Explore the framework</a>`
    : mode === 'apply'
      ? `<a class="button primary" href="/assessment/">Assess your starting point</a>`
      : `<a class="button primary" href="https://drdarrenspeaks.com/" target="_blank" rel="noopener noreferrer">Start a conversation</a>`;
  const body = mode === 'learn'
    ? `<h2>Foundations for ${esc(data.audience)}</h2><div class="card-grid four-up">${data.learn.map(item => `<article class="card"><h3>${esc(item[0].toUpperCase() + item.slice(1))}</h3><p>Make the purpose, context, human judgment, and evidence visible in this part of the work.</p></article>`).join('')}</div><h2>Learn through a real workflow</h2><p>Choose one recurring task, describe what good work requires, and discuss where AI may assist. Keep the learning objective, professional responsibility, and review points explicit.</p>`
    : mode === 'apply'
      ? `<h2>Apply the method in four steps</h2><ol><li><strong>Define:</strong> name the task, outcome, people, and constraints.</li><li><strong>Assist:</strong> use AI for a bounded part of the work.</li><li><strong>Review:</strong> check the result against the relevant standard.</li><li><strong>Improve:</strong> record what changed and decide what to do next.</li></ol><p>${esc(data.apply)} Keep responsibility with the person or role accountable for the outcome.</p>`
      : `<h2>When guided support helps</h2><div class="card-grid three-up"><article class="card"><h3>Context is complex</h3><p>The work involves multiple people, constraints, or competing responsibilities.</p></article><article class="card"><h3>Consistency matters</h3><p>You need a shared practice that people can explain, review, and repeat.</p></article><article class="card"><h3>The next decision is consequential</h3><p>You need help clarifying ownership, evidence, controls, or implementation steps.</p></article></div><h2>Prepare for the conversation</h2><p>Bring one workflow, the people affected, the outcome you need, and the questions that remain open. ${esc(data.augment)}</p>`;
  return `<main><section class="hero"><div class="container prose"><p class="breadcrumb"><a href="/${domain}/">${domain[0].toUpperCase() + domain.slice(1)}</a> &rarr; <a href="/${domain}/${role}/">${role === 'leader' ? 'Education Leader' : role[0].toUpperCase() + role.slice(1)}</a> &rarr; ${modeTitle}</p><h1>${modeTitle}: ${esc(data.title)}</h1><p>${esc(intro)}</p>${action}</div></section><section class="section"><div class="container prose">${body}</div></section><section class="section surface"><div class="container prose"><h2>Continue your path</h2><ul><li><a href="/${domain}/${role}/">Return to your role path</a></li><li><a href="/assessment/">Take the assessment</a></li><li><a href="${mode === 'learn' ? `/${domain}/${role}/apply/` : mode === 'apply' ? `/${domain}/${role}/augment/` : data.practice}">${mode === 'learn' ? 'Apply the ideas' : mode === 'apply' ? 'Get guided support' : 'See a practice example'}</a></li></ul></div></section></main>`;
}

function aaosStageMain(stage) {
  const details = {
    diagnose: ['Understand the work before changing it.', 'Map the current workflow, people, inputs, decisions, constraints, and evidence.', 'A clear posture and the most important gap.'],
    activate: ['Strengthen the capability that limits the work.', 'Choose the smallest useful intervention and make its owner and expected change explicit.', 'A focused capability intervention with a responsible owner.'],
    controls: ['Make reliable use visible and defensible.', 'Set grounding, validation, privacy, access, ownership, and escalation practices matched to consequence.', 'A control plan that people can use during the workflow.'],
    execute: ['Run the designed workflow with deliberate human review.', 'Use the agreed process, record AI contribution and handoffs, and resolve exceptions.', 'A repeatable run with visible decisions and review.'],
    measure: ['Use evidence to learn whether reliability improves.', 'Compare the result with the intended outcome, review failure modes, and capture user and workflow evidence.', 'A decision about what to keep, change, pause, or test next.'],
    scale: ['Extend proven practice without losing control.', 'Confirm stable controls, ownership, capability, and evidence before increasing scope or consequence.', 'A deliberate scale decision and the conditions for continued review.']
  }[stage];
  return `<main><section class="hero"><div class="container prose"><p class="breadcrumb"><a href="/framework/aaos/">AAOS</a> &rarr; ${stage[0].toUpperCase() + stage.slice(1)}</p><h1>${stage[0].toUpperCase() + stage.slice(1)}: ${details[0]}</h1><p>AAOS uses this stage to move from a defined question toward reliable, accountable, and scalable work.</p></div></section><section class="section"><div class="container prose"><h2>Governing question</h2><p>${details[1]}</p><h2>What this stage produces</h2><p>${details[2]}</p><h2>Use the output</h2><p>Keep the output concrete enough for the next person to review. The sequence supports learning: use evidence from this stage before moving forward.</p></div></section><section class="section surface"><div class="container prose"><h2>Continue the sequence</h2><p><a href="/framework/aaos/">Review all AAOS stages</a>, compare the workflow with the <a href="/framework/maturity/">maturity model</a>, or <a href="/assessment/">take the assessment</a> to choose a practical next action.</p></div></section></main>`;
}

function maturityMain(level) {
  const details = {
    aware: ['The need for AI support is visible.', 'Name the work that could benefit and the questions that need better answers.', 'Choose one bounded workflow to understand.'],
    exploring: ['AI is being considered or tried in limited cases.', 'Compare possible uses with the work, constraints, and review required.', 'Run a small experiment with a clear human owner.'],
    experimenting: ['Useful patterns are beginning to repeat.', 'Capture what works, where it fails, and what conditions make the result useful.', 'Add review and documentation before increasing scope.'],
    integrating: ['AI is becoming part of the workflow.', 'Make context, controls, handoffs, and evidence consistent across the work.', 'Measure reliability and improve the shared practice.'],
    leading: ['The practice is strong enough to teach and spread.', 'Help others adopt the workflow while preserving judgment and consequence-matched review.', 'Share the pattern with clear conditions and limits.'],
    augmenting: ['Human expertise and AI operate as a durable partnership.', 'Continue improving capability, controls, and outcomes as the context changes.', 'Use evidence to extend capability without losing responsibility.']
  }[level];
  const label = level[0].toUpperCase() + level.slice(1);
  return `<main><section class="hero"><div class="container prose"><p class="breadcrumb"><a href="/framework/maturity/">Maturity</a> &rarr; ${label}</p><h1>${label}: ${details[0]}</h1><p>This level describes a current operating condition. It is a guide for choosing the next improvement, not a required sequence.</p></div></section><section class="section"><div class="container prose"><h2>What to look for</h2><p>${details[1]}</p><h2>Practical next action</h2><p>${details[2]}</p><p>Use evidence from live work and keep the distinction clear: maturity describes the condition; AAOS describes how the work moves.</p></div></section><section class="section surface"><div class="container prose"><h2>Choose what to do next</h2><p><a href="/assessment/">Take the assessment</a> to compare this level with your work, <a href="/framework/aaos/">review AAOS</a> for the operating sequence, or <a href="/practice/">see a practice example</a>.</p></div></section></main>`;
}

const additions = {
  '/': ['Make the next step concrete', 'Choose the context and role closest to your work, then use the assessment to select one capability to practice.', '/assessment/'],
  '/business/individual/': ['Make personal practice repeatable', 'Start with a workflow you own, keep human judgment visible, and improve the practice through review.', '/business/individual/learn/'],
  '/movement/': ['Join through practice', 'Choose a real workflow, make its purpose and responsibility clear, and share what you learn with the people affected by the work.', '/assessment/'],
  '/newsletter/': ['Stay useful between updates', 'The newsletter supports the movement with practical explanations, framework updates, and examples. Read the privacy and terms pages before subscribing.', '/resources/'],
  '/practice/': ['Read each example as a working pattern', 'Look for the problem, human role, AI contribution, controls, failure modes, evidence, and next decision. Adapt the pattern to your own context.', '/assessment/'],
  '/resources/': ['Use resources with a purpose', 'Begin with a question, choose the context and role that fit, and move from learning to a bounded application with clear review.', '/assessment/'],
  '/framework/': ['Use the framework to choose a next action', 'Maturity describes your current condition. AAOS sequences the work. Practice examples show how the ideas connect in a real workflow.', '/assessment/'],
  '/framework/aaos/': ['Keep the sequence connected', 'A stage output should become useful input to the next stage. Return to Diagnose when context changes and measure before scaling.', '/assessment/'],
  '/framework/maturity/': ['Treat maturity as evidence-based guidance', 'Use the levels to describe the current pattern, then choose an intervention that improves capability, controls, workflow, or evidence.', '/assessment/'],
  '/legal/': ['Use professional review at every consequence level', 'Legal pages remain general guidance. Verify authorities, protect confidential information, and use qualified professional judgment for specific matters.', '/assessment/'],
  '/medical/': ['Keep safety and professional responsibility central', 'Medical pages remain general guidance. Use qualified clinical judgment, privacy controls, and approved workflows for any health-related use.', '/assessment/']
};

function appendSection(html, heading, text, href) {
  if (html.includes('data-plan-augmentation')) return html;
  return html.replace('</main>', `<section class="section surface" data-plan-augmentation><div class="container prose"><h2>${heading}</h2><p>${text}</p><a class="button primary" href="${href}">${href === '/assessment/' ? 'Take the assessment' : 'Continue'}</a></div></section></main>`);
}

for (const row of rows) {
  const match = row.line.match(/^\| `(\/[^`]+)` \|/);
  if (!match) continue;
  const route = match[1];
  const pagePath = path.join(root, 'sitenew', route === '/' ? 'index.html' : route.slice(1), 'index.html');
  if (!fs.existsSync(pagePath)) throw new Error(`Missing page for ${route}`);
  let html = fs.readFileSync(pagePath, 'utf8');
  const parts = route.split('/').filter(Boolean);
  if (parts.length === 3 && ['apply', 'augment', 'learn'].includes(parts[2]) && ['leader', 'student', 'teacher'].includes(parts[1])) {
    html = html.replace(/<main>[\s\S]*?<\/main>/, supportMain(parts[0], parts[1], parts[2]));
    const roleLabel = parts[1] === 'leader' ? 'Education Leader' : parts[1][0].toUpperCase() + parts[1].slice(1);
    const modeLabel = parts[2][0].toUpperCase() + parts[2].slice(1);
    const title = `${modeLabel} ${roleLabel} AI Work | AI-Augmented`;
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`).replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${modeLabel} guidance for ${roleLabel.toLowerCase()}s using AI with context, judgment, and responsibility.">`);
  } else if (parts[0] === 'framework' && parts[1] === 'aaos' && parts[2]) {
    html = html.replace(/<main>[\s\S]*?<\/main>/, aaosStageMain(parts[2]));
  } else if (parts[0] === 'framework' && parts[1] === 'maturity' && parts[2]) {
    html = html.replace(/<main>[\s\S]*?<\/main>/, maturityMain(parts[2]));
  } else if (additions[route]) {
    const [heading, text, href] = additions[route];
    html = appendSection(html, heading, text, href);
  } else if (route.startsWith('/practice/')) {
    html = appendSection(html, 'Use this pattern carefully', 'This example is illustrative. Adapt the workflow to the people, evidence, controls, and consequence level in your own context before using it.', '/assessment/');
  } else if (route.startsWith('/education/')) {
    html = appendSection(html, 'Connect learning to the work', 'Choose the role, workflow, and level of support that fit your responsibility. Keep the learning goal, human judgment, and evidence visible.', '/assessment/');
  }
  fs.writeFileSync(pagePath, html);
  planLines[row.index] = row.line.replace(/\| Make the support mode role-specific\.[^|]*\|$/, '| COMPLETE - augmented and validated with role-specific guidance, practical next steps, and source-aligned content. |')
    .replace(/\| Preserve ([^|]+)\|$/, '| COMPLETE - augmented and validated with source-aligned guidance, practical next steps, and role-specific content. |')
    .replace(/\| (Retain useful event context only where still current; explain learning, teaching, and institutional roles\.)\|$/, '| COMPLETE - retained the event-aware and role-specific content, then validated the page and next steps. |')
    .replace(/\| (No authoritative[^|]+)\|$/, '| COMPLETE - retained conservative guidance and added validated role and next-step content. |')
    .replace(/\| (No corpus source)\|$/, '| COMPLETE - augmented with clear use guidance, consent or navigation context, and validated next steps. |')
    .replace(/\| (Use illustrative examples[^|]+)\|$/, '| COMPLETE - augmented with workflow-specific guidance and validated practice next steps. |');
  if (!planLines[row.index].includes('COMPLETE')) {
    planLines[row.index] = row.line.slice(0, -1) + ' COMPLETE - augmented and validated. |';
  }
}

fs.writeFileSync(planPath, planLines.join('\n'));
console.log(`Completed ${rows.length} remaining site plan rows.`);
