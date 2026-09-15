# Migration Map

This map covers the 72 current HTML pages under `site/`. The new wireframe has 79 physical `index.html` routes under `sitenew/`. No migration is performed by this document.

| Current URL / content | Purpose | New destination | Action | Source authority | Rewrite needed? | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Broad orientation, route selection, framework introduction, proof, newsletter | `/` | REWRITE | Current site + corpus + wireframe | Yes | Keep one clear journey and route users to a domain or assessment. |
| `/find-your-path/` | Role/lens selector | Domain and role landings; primary links to `/business/`, `/education/`, `/legal/`, `/medical/` | MOVE | Wireframe + current site | Yes | Preserve six current role lenses where they fit the four-domain model. |
| `/start-here/` | Older orientation and entry sequence | `/` or `/find-your-path/` | MERGE + REDIRECT | UX guidance + current site | Yes | Retire the competing entry sequence after homepage routing is confirmed. |
| `/contexts/` | Business, education, legal, and medical context selector | Domain roots | MERGE + REDIRECT | Wireframe + current site | Yes | Its legal and medical cards are currently placeholders; retain only as routing content. |
| `/lens/individual/` | Individual role overview | `/business/individual/` | MOVE + REDIRECT | Current site + corpus individual lens | Yes | Preserve personal workflow and capability content. |
| `/lens/team-leader/` | Team leader role overview | `/business/team/` | MOVE + REDIRECT | Current site + corpus team lens | Yes | Preserve shared workflow, handoff, and team practice content. |
| `/lens/organization-leader/` | Organization leader role overview | `/business/organization/` | MOVE + REDIRECT | Current site + corpus organization lens | Yes | Preserve governance, scale, and organizational capability content. |
| `/lens/student/` | Student role overview | `/education/student/` | MOVE + REDIRECT | Current site + corpus student lens | Yes | Keep learning integrity, explanation, revision, and transfer material. |
| `/lens/teacher/` | Teacher role overview | `/education/teacher/` | MOVE + REDIRECT | Current site + corpus educator lens | Yes | Keep lesson design, feedback, assessment, and classroom practice. |
| `/lens/education-administrator/` | Education leader role overview | `/education/leader/` | MOVE + REDIRECT | Current site + corpus education administrator lens | Yes | Normalize the public role name to Education Leader while retaining corpus source mapping. |
| `/lens/{role}/aaos/` for all six roles | Role-specific AAOS roadmap | `/framework/aaos/` plus role metadata on the role/support pages | MERGE + REDIRECT | Corpus model map + current site | Yes | AAOS is global framework content; do not preserve role as a framework directory. |
| `/lens/{role}/maturity/` for all six roles | Role-specific maturity overview | `/framework/maturity/` plus role landing/support context | MERGE + REDIRECT | Corpus maturity model + current site | Yes | Maturity is a framework dimension, not a directory hierarchy. |
| `/lens/{role}/{aware,exploring,experimenting,integrating,leading,augmenting}/` for all six roles | 36 role-specific maturity stage pages | Role landing and `/learn/`, `/apply/`, or `/augment/` destinations with stage metadata | MERGE + REDIRECT | Corpus lens stages + current site | Yes | Keep authored stage guidance and route users by domain → role → support. Do not create stage directories in the new architecture. |
| `/aaos/` | Global AAOS explanation, role links, six operating stages, maturity reference | `/framework/aaos/` | MOVE + REDIRECT | Corpus `aaos-definition.adoc` and model map | Yes | Resolve corpus naming conflicts before final copy. |
| `/learn-apply-augment/` | Engagement model | `/framework/` or shared links from role/support pages | MOVE + REDIRECT | Current site + wireframe | Yes | Explain that Learn, Apply, and Augment describe engagement, not maturity. |
| `/assessment/` | Lens and maturity assessment with result routing | `/assessment/` | KEEP + REWRITE | Corpus assessments + current site | Yes | Preserve static question copy and improve result mapping; keep results out of URL hierarchy. |
| `/apply/` | Paid tools, workbooks, playbooks, templates | Support landing pages under applicable domain/role paths and `/resources/` | MOVE + MERGE | Current site + wireframe | Yes | Curate by role, domain, and support level. |
| `/augment/` | Guided workshops, briefings, advisory support | `/business/*/augment/`, `/education/*/augment/`, `/legal/*/augment/`, `/medical/*/augment/` | MOVE + MERGE | Current site + wireframe | Yes | Preserve commercial CTA and scope-specific language; do not make it the only next step. |
| `/resources/` | Resource library, recommendations, newsletter routing | `/resources/` | KEEP + REWRITE | Current site + wireframe | Yes | Keep curated resource metadata and contextual recommendations. |
| `/books/` | Book series and external book destinations | `/resources/` and possibly `/about/` | MOVE + MERGE | Current site + verified book references | Yes | Keep useful book references; avoid making books the primary path. |
| `/articles/` | Article index | `/resources/` or editorial routes | MOVE + MERGE | Current site + wireframe | Yes | Preserve article SEO value with redirects and canonical editorial destinations. |
| `/articles/ai-adoption-framework-aaos/` | AAOS article | `/framework/aaos/` or an editorial child route | MOVE + REDIRECT | Corpus + current article | Yes | Use corpus definitions and retain article-specific explanation where distinct. |
| `/articles/understanding-ai-maturity-model/` | Maturity article | `/framework/maturity/` or an editorial child route | MOVE + REDIRECT | Corpus maturity model + current article | Yes | Keep explanatory value and align stage/level terms. |
| `/about/` | Mission, beliefs, framework context, founder, participation | `/about/` | KEEP + REWRITE | Current site + wireframe | Yes | Keep public purpose and participation; remove internal governance language. |
| `/movement/` | Movement explanation and community CTA | `/movement/` | KEEP + REWRITE | Current site | Yes | Keep evidence-backed movement explanation and avoid unsupported claims. |
| `/newsletter/` | Newsletter signup and recap content | `/newsletter/` | KEEP + REWRITE | Current site | Yes | Consolidate signup paths and preserve consent/form behavior. |
| `/education/` | IUC 2026 event page, education role routing, books, institutional content | `/education/` | KEEP FOR EVENT + LATER REWRITE | Current site + education content | Yes | Event content is time-sensitive and should be handled separately after the event. |
| `/` through `/education/` image and brand assets | Logos, AAOS graphic, book covers, workshops, author image | Shared static assets; selected use in new layouts | KEEP / CURATE | Current repository | Usually | Preserve alt text, dimensions, licenses, and source attribution where available. |

## Coverage

All 72 current HTML pages are represented above, either individually or through an explicitly quantified route family. The map produces these high-level outcomes:

- **72 source pages mapped to a destination or disposition.**
- **At least 36 current stage pages consolidated** into role/support experiences rather than copied into new stage routes.
- **Six role overview pages moved** into the domain/role hierarchy.
- **Global framework pages moved or merged** under `/framework/`.
- **One event page retained temporarily** because its purpose is tied to IUC 2026.
- **Primary merge candidates:** `/start-here/`, `/contexts/`, `/learn-apply-augment/`, `/apply/`, `/books/`, and `/articles/`.
- **Primary retire candidates:** the old role-specific AAOS and maturity URL families after their content is merged and redirects are live.

## Rules applied

The new filesystem hierarchy remains **Domain → Role → Support**. Maturity, AAOS stage, topic, resource type, and outcome remain metadata or conceptual dimensions. No destination in this map creates a route such as `/education/teacher/experimenting/controls/apply/`.
