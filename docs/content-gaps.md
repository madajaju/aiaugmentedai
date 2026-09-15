# Content Gaps

This register identifies what is missing or insufficient for the approved static architecture. It does not draft the missing content.

## Migration gaps

| Gap | Evidence | Needed destination | Priority |
| --- | --- | --- | --- |
| Domain-specific legal content | Current `/contexts/` page only has a coming-soon Legal card; there are no current legal role pages. | `/legal/`, `/legal/professional/`, `/legal/team/`, `/legal/firm/` | High |
| Domain-specific medical content | Current `/contexts/` page only has a coming-soon Medical card; there are no current medical role pages. | `/medical/`, `/medical/clinician/`, `/medical/care-team/`, `/medical/health-organization/` | High |
| Business domain composition | Current content is organized around lenses rather than `/business/` and role/support routes. | `/business/` and its role/support pages | High |
| Education domain composition | Current education material is split between `/education/` and the education administrator lens. | `/education/`, `/education/student/`, `/education/teacher/`, `/education/leader/` | High |
| Practice examples | Current site has no equivalent for the three new practice routes. | `/practice/` and its example routes | Medium |
| Support-level page content | Current `/apply/` and `/augment/` pages are global and not consistently domain/role-specific. | Domain → role → `learn`, `apply`, `augment` pages | High |
| Framework deep-dive content | Current site has one global AAOS page and role roadmaps; it does not cover the full corpus model library. | `/framework/aaos/` and selected editorial pages | Medium |
| Resource metadata | Current resources have recommendation behavior, but corpus-aligned metadata is incomplete or not verified for every resource. | `/resources/` data and cards | Medium |

## Corpus-supported gaps

The corpus contains enough authoritative material to support these pages, but the material still needs editorial selection and static composition:

- A complete global AAOS explanation covering Capability, Controls, Workflow, the six stages, and the Integrity Packet.
- A clear AI-Augmented Maturity page covering the six levels and its separation from AAOS sequence.
- Assessment explanations for individual, team, organization, student, teacher, and education administrator lenses.
- AAOS stage pages for Diagnose, Activate, Controls, Execute, Measure, and Scale.
- Selected pages for Grounding, Validation, Validation Ladder, Gate Stewards, Control Coverage, Integration Loop, handoff integrity, correction load, trust velocity, and scale readiness.
- Role-specific pages for individual, team, organization, student, educator, and education administrator interpretations.
- Education-specific content on learning integrity, lesson design, policy, support, privacy, assessment integrity, and institutional consistency.
- Organization-specific models such as governance, decision rights, operating dashboard, capability deployment, and scale readiness.
- Canonical diagrams with accessible explanations and alt text.

## New editorial gaps

These needs are implied by the new architecture but are not adequately supplied by either the current site or the corpus:

- A defensible homepage and domain landing narrative that introduces the system without teaching the entire framework first.
- Clear domain landing copy for Legal and Medical that has no current evidence base in the repository.
- Role-specific Learn / Apply / Augment descriptions for new Legal and Medical roles.
- Practice examples with concrete, approved scenarios for each domain; no new customer or outcome claims should be invented.
- A final decision on whether public copy uses “operating model,” “operating system,” or an approved relationship between the two.
- A final decision on the canonical name for AAOS Stage 2, because the corpus contains both Activate and Amplify.
- Verified customer proof, testimonials, research citations, and outcome claims for any new conversion copy.
- Privacy and terms copy appropriate for the final deployment and any assessment data storage behavior.

## Deferred or restricted content

- The `/education/` page is currently tied to the IUC event and should remain separately managed until the event is complete.
- The corpus contains many organization models and stage subpages. Publishing all of them would violate the curated static-site UX; select only the pages that answer a user question or support a route.
- Internal workflow instructions in `workflow.md` belong to the migration process, not public site content.
