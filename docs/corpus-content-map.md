# Canonical Corpus Content Map

Source: `C:/Users/darre/IdeaProjects/paidar-press/aaos-corpus/canon`

The corpus contains 391 files: 308 AsciiDoc files, 55 Markdown files, 20 SVG diagrams, 7 PlantUML diagrams, and 1 PNG. The map below summarizes the source groups and identifies where their concepts can support the static site. It does not copy corpus prose.

## Source groups

| Corpus source | Contents | Website use |
| --- | --- | --- |
| `aaos-definition.adoc` | Definition, problem statement, Capability / Controls / Workflow components, grounding, validation, workflow integration, Integrity Packet requirements, success conditions, and boundaries | `/framework/`, `/framework/aaos/`, `/practice/`, shared explanations |
| `aaos-vocabulary-guide.adoc` | Controlled terms, usage guidance, preferred term map, tiered concepts, individual/team/organization scope | All page copy, metadata, navigation labels, SEO/AEO wording |
| `aaos-model-map.adoc` | Six-layer dependency map, model-to-layer relationships, transitions, and distinctions between posture, capability, review, adoption, and reliability | `/framework/aaos/`, framework cross-links, practice explanations |
| `models/maturity-model/index.adoc` | Shared maturity interpretation, six levels, diagnostic signals, how to read the model, separation from Hex Model | `/framework/maturity/`, assessment result explanations |
| `models/ai-augmented-maturity.adoc` | Public-facing maturity name and six levels: Aware, Exploring, Experimenting, Integrating, Leading, Augmenting | Public maturity headings, descriptions, assessment metadata |
| `models/maturity-model/{individual,student,education-administrator}.adoc` and related lens files | Lens-specific meaning and observable signs for maturity levels | Role landing pages, role-specific assessment interpretation, support recommendations |
| `assessments/*.adoc` | Individual, team, organization, student, teacher, education administrator maturity assessments; posture matrices; readiness and intervention material | `/assessment/`, role-specific assessment flows, future structured results |
| `stages/diagnose/` | Posture diagnosis, AI Posture Matrix, assessments, gap and workflow analysis | `/framework/aaos/diagnose/`, `/practice/`, assessment guidance |
| `stages/activate/` | Capability Pillars, targeted intervention, capability and learning plans | `/framework/aaos/activate/`, role and organization support pages |
| `stages/controls/` | Operating Disciplines, Grounding, Validation, Gate Stewards, Validation Ladder, governance, Control Coverage, Integrity Packet | `/framework/aaos/controls/`, practice pages, organizational support |
| `stages/execute/` | Integration Loop, Stage Flow, Integrity Packet Flow, handoffs, exceptions, workflow integration | `/framework/aaos/execute/`, `/practice/`, team and organization pages |
| `stages/measure/` | Operating Dashboard, correction load, trust velocity, drift, review cadence, outcome confidence | `/framework/aaos/measure/`, practice and organization measurement content |
| `stages/scale/` | Hex Model, scale readiness, expand / hold / pause decisions, replication and redesign | `/framework/aaos/scale/`, organization and leadership support pages |
| `lens/individual/`, `lens/team/`, `lens/organization/` | Lens purpose, models, stage overviews, detailed operating models, handoff matrices, and organization-specific models | `/business/`, business role pages, `/practice/`, future framework deep dives |
| `lens/student/`, `lens/educator/`, `lens/education-administrator/` | Learning, teaching, institutional lenses, models, stage overviews, and role-specific maturity interpretations | `/education/`, education role pages, education practice pages |
| `lens/*/models/` | Role and organization models such as capability, governance, decision rights, learning loops, operating dashboards, and readiness | Curated framework references and future deep-dive pages; avoid publishing the whole corpus as a directory |
| `aaos.svg`, maturity diagrams, stage diagrams, and model diagrams | Canonical visual representations of AAOS, maturity, and stage-specific models | Reuse selectively in framework and practice pages with accessible text alternatives |
| `workflow.md` | Required understand → map → normalize → refactor → validate process and CONTROL / EXECUTE integration requirements | Internal migration method; not public page copy |

## Canonical terminology

The corpus establishes these distinctions:

- **AI-Augmented** is the target posture for reliable AI-assisted work, combining domain depth, AI fluency, and operating disciplines.
- **AAOS** is the operating model for reliable, accountable, and scalable AI-assisted work across individuals, teams, and organizations. The corpus also calls it a professional operating standard in `aaos-definition.adoc`.
- **AAOS stages** are the operating sequence: Diagnose, Activate, Controls, Execute, Measure, Scale. Some corpus files use the singular transition name **Control**, and the Hex Model stage file uses **Amplify** for Stage 2; these require an explicit canon decision before public migration.
- **AI-Augmented Maturity** is the public name for the six maturity levels: Aware, Exploring, Experimenting, Integrating, Leading, Augmenting.
- Maturity describes the condition of a person, team, organization, student, teacher, or education lens. AAOS stages describe sequence. They must not be substituted for one another.
- **Capability** consists of AI Skills, SME Skills, Core Skills, and Meta-Skills.
- **Controls** consist of Grounding, Validation, and Workflow Integration / Control Coverage as the relevant operating disciplines.
- **Integrity Packet** is the canonical evidence and accountability artifact for consequential work.
- **Validation Ladder** matches review depth to consequence and names Prepared By, Validated By, and Approved By roles where required.
- **Gate Steward** is the named owner responsible for control depth and decision authority at a critical gate.
- **Integration Loop** is the execution sequence: Draft, Ground, Validate, Approve or Deliver, Handoff, Learn.
- **Learn, Apply, Augment** are engagement modes, not maturity levels. The corpus provides extensive support for learning, applied tools, and guided work, but does not establish them as a separate maturity ladder.

## Corpus conflicts requiring an editorial decision

1. `aaos-definition.adoc` defines AAOS as an **operating model** and later calls it a **professional operating standard**, while the current site and UX guidance prefer **operating system**. The migration must follow the corpus or record an approved public-language alias; it should not silently replace the canonical wording.
2. The model map uses **Controls** as the layer, while transition language uses **Control** and some files use **Validation Tier Ladder** even though the vocabulary guide prefers **Validation Ladder**.
3. The Hex Model includes a Stage 2 file named `02-amplify.adoc`, while the public site currently uses **Activate**. The vocabulary and model map identify Activate as the canonical layer name, but the source file discrepancy needs confirmation.
4. Some corpus content uses organization-specific claims, named institutions, or book-specific framing. Those claims require source review before publication and must not be generalized into site-wide proof points.

## Source authority for migration

Use the corpus for framework definitions, distinctions, and named models. Use the current site for useful prose, examples, testimonials, book references, resource descriptions, images, and CTAs only after checking them against the corpus and evidence available in the repository. Use `../site` for route hierarchy and layout constraints. When sources disagree, record the disagreement in the migration notes and resolve it before rewriting.
