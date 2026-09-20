(function () {
  const stages = [
    ['aware', 'Aware', 'The need for AI support is visible.', 'Name the work, risk, and evidence gap before choosing a tool.'],
    ['exploring', 'Exploring', 'AI is being tried in limited cases.', 'Run a bounded use case with a clear owner and stop condition.'],
    ['experimenting', 'Experimenting', 'Useful patterns are beginning to repeat.', 'Document the pattern, test variation, and measure correction load.'],
    ['integrating', 'Integrating', 'AI is becoming part of the workflow.', 'Make grounding, validation, ownership, and handoffs routine.'],
    ['leading', 'Leading', 'The practice is strong enough to teach and spread.', 'Transfer the method without losing quality or accountability.'],
    ['augmenting', 'Augmenting', 'Human expertise and AI operate as a durable partnership.', 'Renew the controls, evidence, and capability as context changes.'],
  ];

  const createLens = (title, focus, tools, examples) => ({
    title,
    stages: Object.fromEntries(stages.map(([key, label, headline, next], index) => ({
      [key]: {
        label,
        headline,
        summary: `${focus[index]} ${headline.toLowerCase()}`,
        looksLike: examples[index],
        tools: tools[index],
        focus: next,
        watchOut: index < 3 ? 'Do not let speed or polished output replace qualified review.' : 'Do not scale the practice faster than its evidence and controls.',
        posture: 'Keep the responsible professional accountable for the outcome, evidence, and unresolved risk.',
        stageNumber: index + 1,
      },
    }))),
  });

  window.AA_DOMAIN_LENS_DATA = {
    'legal-professional': createLens('Legal Professional', [
      'Matter boundaries and source requirements are becoming visible as',
      'Research, drafting, and review experiments show where',
      'Reusable authority-checking and drafting patterns show that',
      'Grounding, validation, and confidentiality controls are part of',
      'The professional can teach a defensible practice because',
      'The professional can adapt AI assistance while',
    ], [
      'Matter boundary checklist and approved research tools',
      'Bounded research prompts and authority verification checklist',
      'Reusable drafting pattern, source trail, and review checklist',
      'Legal Work Integrity Packet and consequence-matched validation',
      'Practice standard, examples, and peer coaching',
      'Continuous review of authorities, tools, risk, and correction load',
    ], [
      'The professional can identify a matter, authority, confidentiality boundary, and final decision owner.',
      'AI is used for limited research or drafting, while citations and facts are checked independently.',
      'A pattern works across representative matters but still needs explicit review and refinement.',
      'The workflow carries assumptions, sources, validation status, ownership, and risk into the final work product.',
      'Other professionals can use the pattern without losing authority checking or professional judgment.',
      'AI assistance improves durable practice without replacing responsibility for advice or work product.',
    ]),
    'legal-team': createLens('Legal Team', [
      'The team can see a shared need for better matter context and handoffs.',
      'People try AI in pockets and learn where shared confidentiality and review standards are needed.',
      'Handoff and decision-brief patterns repeat, although quality still depends on the participants.',
      'Shared matter context, validation, ownership, and escalation are part of normal work.',
      'The team can teach the method and absorb normal variation without losing quality.',
      'The team operates a dependable, transferable human-AI workflow across matters.',
    ], [
      'Matter intake and confidentiality boundary',
      'Shared source set and handoff checklist',
      'Decision brief and review queue',
      'Team Integrity Packet and validation ownership matrix',
      'Team standard, coaching, and handoff return-rate measure',
      'Reusable workflow pattern, exception log, and continuous improvement review',
    ], [
      'The team can name the client objective, source context, owner, and missing information.',
      'AI use appears in selected tasks, but handoff status and review expectations vary by person.',
      'A matter handoff or decision brief repeats in parts of the workflow.',
      'Receivers can act safely because context, evidence, validation, and next ownership travel together.',
      'The team can transfer the practice to new matters and people without relying on one champion.',
      'The workflow remains reliable while tools, staffing, and matter conditions change.',
    ]),
    'legal-firm': createLens('Firm Leader', [
      'Leadership can see that AI affects professional obligations and client work.',
      'The firm is testing tools and learning where policy, access, and risk boundaries must exist.',
      'Repeatable practices appear in pockets while adoption and control stability remain uneven.',
      'Governance, approved use, validation, training, and measurement are connected.',
      'The firm can standardize and teach the method across practices without losing control.',
      'The firm scales by evidence, with durable professional accountability and auditability.',
    ], [
      'Governance question and bounded use-case register',
      'Approved-tool review and policy experiment',
      'Pilot controls, training record, and evidence sample',
      'Firm Integrity Packet standard and Gate Steward roles',
      'Cross-practice operating standard and control dashboard',
      'Scale decision, drift review, and exception-and-risk playbook',
    ], [
      'Leadership recognizes the strategic and professional issue but has not built a coherent operating response.',
      'Pilots are underway, with open questions about confidentiality, client duties, and review ownership.',
      'Some practices have standards, but the firm cannot yet assume consistent quality across functions.',
      'Policy, workflow, evidence, training, and accountability reinforce one another.',
      'The firm can spread a defensible practice while preserving local expertise and client trust.',
      'Scaling decisions are backed by control coverage, validation evidence, and explicit residual-risk acceptance.',
    ]),
    'medical-clinician': createLens('Clinician', [
      'The clinician can see where information preparation or coordination may help.',
      'AI is tried for limited preparation while clinical boundaries are being learned.',
      'Useful documentation or information-comparison patterns begin to repeat.',
      'Approved use, clinical validation, and patient-safety review are routine.',
      'The clinician can coach others while protecting professional judgment and patient safety.',
      'AI supports durable practice without replacing clinical interpretation or responsibility.',
    ], [
      'Approved-use boundary and patient-data checklist',
      'Bounded preparation prompt and source verification checklist',
      'Clinical workflow pattern and correction log',
      'Clinical Integrity Packet and consequence-matched review',
      'Peer coaching, safety review, and exception learning',
      'Drift monitoring, outcome evidence, and renewed clinical signoff',
    ], [
      'The clinician can identify a bounded information task and the decision that remains human.',
      'AI supports preparation or question formation, but important details require deliberate verification.',
      'A useful pattern repeats while omissions, bias, and patient-specific fit still require close review.',
      'Approved tools, patient context, evidence, validation status, and accountable clinician are visible.',
      'The practice can be taught without reducing the depth of clinical judgment or safety review.',
      'The partnership improves care work while preserving patient safety, professional accountability, and recoverability.',
    ]),
    'medical-care-team': createLens('Care Team', [
      'The team can see where shared context and handoff quality affect care.',
      'People test AI in coordination tasks and discover where common boundaries are needed.',
      'Handoff and follow-through patterns begin to repeat across selected workflows.',
      'Context, validation, ownership, and escalation are routine across the team.',
      'The team can teach and transfer the method without losing care quality.',
      'The care workflow is dependable, auditable, and resilient across changing conditions.',
    ], [
      'Minimum-necessary context and handoff checklist',
      'Shared care-summary experiment and role map',
      'Decision brief and follow-through tracker',
      'Care Handoff Integrity Packet and escalation matrix',
      'Team standard, coaching, and missed-context measure',
      'Transferable workflow, exception log, and safety renewal review',
    ], [
      'The team can identify the care goal, open questions, next action, and accountable professional.',
      'AI is used in selected coordination tasks, but review and escalation vary across handoffs.',
      'A handoff pattern repeats while quality still depends on the people involved.',
      'Receiving teams can act safely because context, evidence, review status, and ownership travel together.',
      'The team can spread the pattern while preserving clinical escalation and patient privacy.',
      'The partnership remains reliable as staffing, systems, and care conditions change.',
    ]),
    'medical-organization': createLens('Health Organization', [
      'Leadership can see that AI affects safety, privacy, workforce, and operations.',
      'The organization is testing use cases and learning where governance and support boundaries belong.',
      'Repeatable practices appear in pockets while implementation and evidence remain uneven.',
      'Clinical safety, privacy, security, workflow, and measurement are connected.',
      'The organization can standardize and teach responsible practice across functions.',
      'The organization scales by evidence with durable safety controls and accountable ownership.',
    ], [
      'Use-case inventory and risk question',
      'Bounded pilot and data-access review',
      'Pilot evidence, safety review, and workforce feedback',
      'Health AI Governance Integrity Packet and validation matrix',
      'Operating standard, monitoring dashboard, and training coverage',
      'Scale decision, drift audit, exception playbook, and renewal cycle',
    ], [
      'Leadership recognizes the issue but has not built a coherent health AI operating response.',
      'Pilots are underway with open questions about data, safety, workforce impact, and ownership.',
      'Some practices repeat, but the organization cannot yet assume consistent safety or control coverage.',
      'Governance, clinical review, workflow integration, support, and measurement reinforce one another.',
      'The organization can coordinate across functions without hiding local risk or expertise.',
      'Scale decisions preserve patient safety, privacy, evidence, and explicit accountability over time.',
    ]),
  };

  window.AA_LENS_DATA = Object.assign({}, window.AA_LENS_DATA || {}, window.AA_DOMAIN_LENS_DATA);
}());
