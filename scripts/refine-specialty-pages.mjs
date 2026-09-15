import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const specialties = {
  legal: {
    professional: ['Legal Professional', 'legal professionals', 'research, drafting, authority checking, and matter-specific judgment', 'Verify authorities and facts, protect confidential information, and keep the responsible professional in control of advice and work product.', 'Use a bounded research, drafting, or review workflow with a visible source trail.', '/practice/business/individual/workflow-review/'],
    team: ['Legal Team', 'legal teams', 'shared matter context, reliable handoffs, review, and client responsibility', 'Preserve matter confidentiality, make handoff status visible, and set review expectations before work reaches a client or decision maker.', 'Use a matter handoff or decision brief to make context, ownership, and unresolved issues explicit.', '/practice/business/team/decision-brief/'],
    firm: ['Firm Leader', 'firm leaders', 'confidentiality, governance, quality standards, and operating models', 'Connect AI use to professional obligations, firm policy, access controls, quality review, and clear accountability for client work.', 'Start with a governance brief that identifies permitted use, ownership, review, and evidence.', '/practice/business/organization/governance-brief/']
  },
  medical: {
    clinician: ['Clinician', 'clinicians', 'clinical context, information preparation, question formation, and professional review', 'Use approved workflows, protect patient information, verify important details, and keep qualified clinical judgment responsible for decisions.', 'Use AI for a bounded preparation task and define the clinical review point before relying on the result.', '/practice/business/individual/workflow-review/'],
    'care-team': ['Care Team', 'care teams', 'shared patient context, coordination, handoffs, and follow-through', 'Keep sensitive information protected, preserve open issues across handoffs, and make the accountable professional and review status visible.', 'Use a handoff or decision brief to clarify context, next action, owner, and escalation.', '/practice/business/team/decision-brief/'],
    'health-organization': ['Health Organization', 'health organization leaders', 'privacy, safety, governance, capability, and operating discipline', 'Connect adoption to approved data practices, safety review, accountability, workforce capability, and evidence that supports a scale decision.', 'Start with a bounded use case and a governance brief that identifies controls and evidence.', '/practice/business/organization/governance-brief/']
  }
};

function main(domain, role, mode) {
  const d = specialties[domain][role];
  const label = mode ? mode[0].toUpperCase() + mode.slice(1) : d[0];
  const intro = mode === 'learn'
    ? `Build a working understanding of ${d[2]} in the context of ${d[1]} work.`
    : mode === 'apply'
      ? d[4]
      : mode === 'augment'
        ? `Get guided support when ${d[1]} need help designing, reviewing, or governing a more complex AI-supported workflow.`
        : `AI can support ${d[2]}, while qualified people remain responsible for interpretation, review, and outcomes.`;
  const body = mode === 'learn'
    ? `<h2>Foundations for ${d[1]}</h2><div class="card-grid three-up"><article class="card"><h3>Context</h3><p>Define the purpose, relevant information, constraints, and consequence of the work.</p></article><article class="card"><h3>Review</h3><p>Match verification and professional review to the importance of the decision or deliverable.</p></article><article class="card"><h3>Responsibility</h3><p>${d[3]}</p></article></div><h2>Learn through a bounded workflow</h2><p>Choose one recurring task, identify where AI may assist, and write down what a qualified person must check before the work continues.</p>`
    : mode === 'apply'
      ? `<h2>Apply the method in four steps</h2><ol><li><strong>Define:</strong> name the task, outcome, people, source context, and constraints.</li><li><strong>Assist:</strong> use AI for a limited part of the workflow.</li><li><strong>Review:</strong> verify the result against the relevant professional standard.</li><li><strong>Record:</strong> capture ownership, open questions, and the next decision.</li></ol><p>${d[3]} ${d[4]}</p>`
      : mode === 'augment'
        ? `<h2>When guided support helps</h2><div class="card-grid three-up"><article class="card"><h3>The workflow carries consequence</h3><p>The work affects clients, patients, professional decisions, or institutional trust.</p></article><article class="card"><h3>Responsibilities cross boundaries</h3><p>Several people, roles, systems, or approval steps must work together.</p></article><article class="card"><h3>The practice must be explainable</h3><p>You need a clear record of context, controls, review, ownership, and evidence.</p></article></div><h2>Prepare for the conversation</h2><p>Bring the workflow, the people affected, known constraints, and the questions that remain open. ${d[3]}</p>`
        : `<h2>What responsible use requires</h2><p>${d[3]}</p><div class="card-grid three-up"><article class="card"><h3>Purpose</h3><p>Start with a real workflow and a defined outcome.</p></article><article class="card"><h3>Controls</h3><p>Use approved information, access, privacy, and review practices.</p></article><article class="card"><h3>Evidence</h3><p>Check the result and record what supports the next decision.</p></article></div>`;
  const next = mode === 'learn' ? 'Apply the ideas' : mode === 'apply' ? 'Get guided support' : mode === 'augment' ? 'See a practice example' : 'Take the assessment';
  const href = mode === 'learn' ? `/${domain}/${role}/apply/` : mode === 'apply' ? `/${domain}/${role}/augment/` : mode === 'augment' ? d[5] : '/assessment/';
  return `<main><section class="hero"><div class="container prose"><p class="breadcrumb"><a href="/${domain}/">${domain[0].toUpperCase() + domain.slice(1)}</a> &rarr; <a href="/${domain}/${role}/">${d[0]}</a>${mode ? ` &rarr; ${label}` : ''}</p><h1>${mode ? `${label}: ${d[0]}` : d[0]}</h1><p>${intro}</p>${mode ? '' : '<a class="button primary" href="/assessment/">Understand where you are</a>'}</div></section><section class="section"><div class="container prose">${body}</div></section><section class="section surface"><div class="container prose"><h2>Continue your path</h2><p>${d[3]}</p><div class="cta-row"><a class="button primary" href="${href}">${next}</a><a class="button secondary" href="/assessment/">Take the assessment</a></div></div></section></main>`;
}

for (const domain of Object.keys(specialties)) {
  for (const role of Object.keys(specialties[domain])) {
    for (const mode of [null, 'learn', 'apply', 'augment']) {
      const route = `/${domain}/${role}/${mode ? `${mode}/` : ''}`;
      const pagePath = path.join(root, 'sitenew', route.slice(1), 'index.html');
      if (!fs.existsSync(pagePath)) throw new Error(`Missing page: ${route}`);
      let html = fs.readFileSync(pagePath, 'utf8').replace(/<main>[\s\S]*?<\/main>/, main(domain, role, mode));
      const d = specialties[domain][role];
      const title = mode ? `${mode[0].toUpperCase() + mode.slice(1)} ${d[0]} AI Work | AI-Augmented` : `${d[0]} AI Work | AI-Augmented`;
      const description = mode ? `${mode[0].toUpperCase() + mode.slice(1)} guidance for ${d[1]} using AI with context, judgment, and responsibility.` : `Practical AI guidance for ${d[1]} with context, judgment, review, and responsibility.`;
      html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`).replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`);
      fs.writeFileSync(pagePath, html);
    }
  }
}
console.log('Refined Legal and Medical role pages.');
