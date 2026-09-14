# AI-Augmented.ai UX Punch List

## Purpose

Refocus the current site around a guided visitor journey. The visitor should understand the idea, recognize their role, understand their current maturity, receive one practical next action, and know how to continue.

This document translates `uxguide.md` into implementation tasks for the current static site. It is a UX plan only; it does not replace the technical SEO punchlist.

## Current baseline

The site currently includes:

- A movement homepage with framework definitions, lens selection, maturity content, AAOS content, FAQs, proof, newsletter, and multiple CTA groups.
- A `Find Your Path` page and six role-based lens areas under `/lens/`.
- Six maturity pages per lens, plus lens AAOS and maturity overview pages.
- `/contexts/` with Business, Education, Legal, and Medical entries.
- `/education/` as the IUC education gateway.
- `/resources/`, `/apply/`, `/augment/`, `/assessment/`, `/books/`, `/newsletter/`, and `/movement/` hubs.
- Shared generated navigation, footer, breadcrumbs, maturity progression, and automated validation.

The main UX risks are too many concepts presented together, repeated card-and-CTA sections, long pages, competing calls to action, and a mismatch between the guide's plain-language navigation and the current framework-heavy labels.

## Target experience

```text
ARRIVE → UNDERSTAND → IDENTIFY → ASSESS → ACT → GROW → RETURN
```

Every major page should answer one primary visitor question and provide one obvious next action.

The site model remains:

```text
WHO                 Lens
CONTEXT             Domain
WHERE               Maturity
HOW                 AAOS
LEVEL OF SUPPORT    Learn / Apply / Augment
```

Do not ask first-time visitors to understand all five dimensions at once.

---

# P0 — Journey and navigation

## UX-P0.1 — Simplify the primary navigation

**Status: Complete.** The shared navigation is generated from `scripts/standardize-nav.mjs`, uses the approved six-item order, preserves dropdown behavior, and has passed the site and dead-link checks across all HTML pages.

### Goal

Make the navigation reflect visitor intent rather than internal terminology.

### Current state

The shared navigation contains The Movement, How It Works, Contexts, Find Your Path, Resources, and the assessment CTA. How It Works and Contexts are dropdowns.

### Target state

Use this order:

1. The Movement
2. Find Your Path
3. Framework or How It Works
4. Contexts
5. Resources
6. Take the AI Assessment

Keep Home behind the logo. Keep About in the footer. Decide whether the public label **Framework** or **How It Works** is clearer through testing; do not expose both as separate primary items.

### Implementation

- Update `scripts/standardize-nav.mjs` as the source of truth.
- Preserve dropdown keyboard and mobile behavior.
- Keep Contexts as the domain menu: Business, Education, Legal, Medical.
- Keep Learn, Apply, and Augment beneath the framework/support menu.
- Ensure the assessment remains the only persistent high-emphasis header CTA.
- Regenerate every HTML page.

### Acceptance criteria

- All pages use the same navigation.
- The logo links home.
- No duplicate Home, About, Education, or Assessment entries appear in the primary menu.
- Dropdown labels are understandable without framework knowledge.

## UX-P0.2 — Make the homepage hero visitor-first

**Status: Complete.** The homepage hero now leads with the human outcome, keeps `Find Your Path` and `Take the Assessment` as its two actions, and leaves framework and commercial detail below the first interaction.

### Goal

Answer “What is this, and why should I care?” before introducing framework names.

### Target copy structure

- Eyebrow: The AI-Augmented Movement
- H1: Expand human capability in the age of AI.
- Supporting copy: Learn how to work, lead, teach, learn, and operate with AI while preserving judgment, responsibility, and agency.
- Primary CTA: Find Your Path
- Secondary CTA: Take the Assessment

### Implementation

- Keep AAOS, maturity, books, and commercial brands below the hero.
- Remove dense hero facts and competing hero actions.
- Ensure the first viewport communicates the human outcome without scrolling.

### Acceptance criteria

A first-time visitor can explain the site in one sentence after viewing the hero.

## UX-P0.3 — Make Find Your Path the first major interaction

**Status: Complete.** The homepage now places the six lens choices immediately after the movement narrative, groups them under Work, Leadership, and Education, and uses role-specific CTAs.

### Goal

Let visitors recognize themselves before they study the system.

### Implementation

- Place the lens selector immediately after the short “Why this matters” narrative.
- Keep six cards grouped as Work and Leadership and Education.
- Each card contains only: who it is for, what improves, and one CTA.
- Use contextual CTA labels such as Explore Student Resources, Strengthen Your Team, and Assess Your Institution.
- Remove framework diagrams and long definitions from the selector.

### Acceptance criteria

A visitor can choose a likely lens in under 15 seconds.

---

# P1 — Assessment and action

## UX-P1.1 — Reframe the assessment as guidance

**Status: Complete.** Assessment results now emphasize where the visitor is, what matters now, the next action, a common trap, a progression signal, and an optional deeper resource. Results remain saved locally in the browser.

### Goal

Make the assessment feel like a navigation aid, not a grade.

### Implementation

- Introduce the assessment with: “You do not need to master everything at once. Start by understanding where you are today.”
- After completion, show Where You Are, What Matters Now, Do This Next, Avoid This, and Know You’re Ready to Progress When.
- Make the recommended action more prominent than the score or stage name.
- Preserve local result behavior and explain what is saved.

### Acceptance criteria

Every result produces one concrete action and one optional deeper resource.

## UX-P1.2 — Standardize maturity coaching pages

**Status: Complete.** Generated maturity pages now use the coaching sequence You Are Here, What Matters Most Right Now, Your Next Move, Avoid This, What Good Looks Like, Ready to Advance When, and Need Help.

### Goal

Make each maturity page feel like a coaching session.

### Required order

1. You Are Here
2. What Matters Most Right Now
3. Your Next Move
4. Avoid This
5. What Good Looks Like
6. Ready to Advance When...
7. Need Help?

### Implementation

- Keep previous/current/next navigation.
- Reduce resource lists to the most relevant three where possible.
- Move deep reference material below the primary action.
- Use plain-language headings and introduce technical terms after the explanation.

### Acceptance criteria

A visitor can identify their current stage, next action, common mistake, and progression milestone without reading the entire page.

## UX-P1.3 — Connect sections with transition copy

**Status: Complete.** Transition copy now connects lens selection, maturity, AAOS, and support choices on the homepage and maturity page template.

### Goal

Prevent the page from feeling like disconnected framework blocks.

### Required transitions

After lens selection:

> Now that you’ve chosen the context that matters most to you, the next question is where you are today.

After maturity:

> Knowing your stage tells you where to focus. The next step is changing the way the work actually gets done.

After AAOS:

> You can apply these practices on your own, use structured tools, or work with someone to accelerate the process.

### Implementation

Add one short transition sentence before each major change in concept on the homepage, education gateway, lens pages, and assessment results.

---

# P1 — Homepage information architecture

## UX-P1.4 — Restructure the homepage around the guide's eight sections

**Status: Complete.** The homepage core journey now follows Hero, Why This Matters, Find Yourself, Know Where You Are, Improve the Work, Choose Your Level of Support, and Proof, with resources, FAQs, and newsletter content below it.

Use this order:

1. Hero
2. Why This Matters
3. Find Yourself
4. Know Where You Are
5. Improve the Work
6. Choose Your Level of Support
7. Proof
8. Final CTA

### Implementation

- Audit existing sections against this sequence.
- Merge repeated definitions, proof blocks, testimonials, and CTA bands.
- Keep only one primary explanation of the movement, maturity, AAOS, and Learn / Apply / Augment.
- Move newsletter signup below the final CTA.
- Preserve useful FAQ content, but keep it below the core journey.

### Acceptance criteria

The homepage reads as a continuous journey rather than a collection of independent sections.

## UX-P1.5 — Reduce competing calls to action

**Status: Complete.** The homepage hero has two prioritized actions, lens cards have one contextual action each, and commercial or deeper actions remain below the core visitor journey.

### Primary CTA

Find Your Path.

### Secondary CTA

Take the Assessment.

### Contextual CTAs

Use the visitor's role and need, such as Improve Your Teaching Practice or Build Organizational Capability.

### Commercial CTAs

Use only after the visitor has received value: Bring This to Your Organization, Plan a Workshop, or Talk With an Advisor.

### Implementation

- Audit every `.cta-row` on the homepage and major hubs.
- Remove repeated “Explore,” “Discover,” and “Get Started” links where they do not represent a distinct decision.
- Do not give cards multiple equally weighted buttons.
- Preserve text links for supporting navigation.

---

# P2 — Lens, context, and support UX

## UX-P2.1 — Keep lens pages role-specific

**Status: Complete.** The six lens hubs lead with role-specific outcomes, challenges, opportunities, capability guidance, maturity selection, and role-relevant next actions without requiring visitors to study the full ecosystem first.

Each lens page should answer: “What does AI augmentation mean for someone like me?”

Required structure:

1. Role-specific hero
2. Role challenge
3. Opportunity
4. Three key capabilities
5. Current-stage selector
6. One next action
7. Role-specific Learn / Apply / Augment options

Do not repeat the entire AI-Augmented ecosystem on every lens page.

## UX-P2.2 — Make Context and Lens relationships explicit

**Status: Complete.** Contexts now represent domains, lenses represent roles, and the education gateway routes visitors directly to Student, Teacher, or Education Leader paths.

Use Context for domain and Lens for role.

Example:

```text
Context: Education
Lens: Teacher
Maturity: Experimenting
Support: Apply
```

On the education gateway, let visitors select Student, Teacher, or Education Leader. Do not make them choose a context and lens in the same dense control.

## UX-P2.3 — Make Learn / Apply / Augment progressive

**Status: Complete.** Learn is presented as the low-friction starting point, Apply as paid self-service practice, and Augment as guided support after the need is understood.

- Learn: low-friction free education.
- Apply: paid self-service tools tied to a real task.
- Augment: guided support after the visitor understands the need.

Each page should show only the level relevant to its current step, with links to the next level when appropriate. Avoid presenting all three levels as three equally urgent choices on first visit.

## UX-P2.4 — Improve resources as recommendations

**Status: Complete for the current catalog.** Resource hub cards now carry lens, context, maturity, AAOS stage, topic, resource type, and support-level metadata. Saved lens and maturity state produces a three-resource recommendation while the full catalog remains available.

Every resource should be tagged with:

- Lens
- Context
- Maturity
- AAOS stage
- Topic
- Resource type
- Learn / Apply / Augment

Build recommendations such as “Because you are a Teacher at the Experimenting stage, start with these three resources.” Keep the current resource hub as a catalog until metadata is available.

---

# P2 — Content rhythm and progressive disclosure

## UX-P2.5 — Replace repeated label-heading-card rhythm

**Status: Complete.** Core homepage, gateway, lens, assessment, and support sections now use short narrative introductions and transition copy before presenting choices.

For each major page:

- Open with a two or three sentence narrative.
- Follow with the visual or cards.
- Add a transition sentence.
- Introduce the next concept.

Do not place a card grid immediately after every heading and one sentence.

## UX-P2.6 — Apply progressive disclosure

**Status: Complete.** Entry pages prioritize the idea and next choice, while maturity, AAOS, and implementation detail remain on deeper pages.

Use these levels:

1. Idea
2. Enough information to choose
3. Framework
4. Detailed explanation
5. Implementation tools

Keep Level 1 pages short and understandable. Put detailed AAOS definitions, maturity references, and implementation tools on deeper pages.

## UX-P2.7 — Remove or consolidate dead-end sections

**Status: Complete.** Core journey sections now lead to a selection, assessment, action, deeper explanation, or return path, with supporting catalog and FAQ content placed after the main journey.

Every section should have a reason for appearing next. If a section does not lead to understanding, selection, action, or return, merge it, move it, or remove it.

---

# P3 — Return and continuity

## UX-P3.1 — Add persistent journey continuity

**Status: Complete.** A shared client-side journey bar now reads the saved lens and maturity, shows the next action, preserves local-storage transparency, and links to the relevant Apply and Augment paths.

After assessment or maturity selection, preserve the visitor's lens and stage in the interface.

Show:

- Current lens
- Current maturity
- Recommended next action
- Link to the next stage
- Link to the relevant Apply or Augment option

Use local storage only when the user understands that results are stored locally.

## UX-P3.2 — Create return paths

**Status: Complete.** The continuity bar provides links to the next maturity stage, deeper learning, team and organization application, education resources, and community/newsletter paths.

Add meaningful links for:

- Next maturity stage
- Deeper learning
- Team application
- Organization application
- Education resources
- Community and newsletter

Do not end a maturity or resource page with only a generic homepage link.

## UX-P3.3 — Support role progression

**Status: Complete.** Related role paths are shown as optional links for Individual to Team Leader to Organization Leader and Student to Teacher to Education Leader.

Make related role progression visible where useful:

```text
Individual → Team Leader → Organization Leader
Student → Teacher → Education Leader
```

Present these as optional next paths, not required steps.

---

# P4 — Trust and commercial transition

## UX-P4.1 — Reduce authority overload

**Status: Complete.** Unverified numeric authority claims were removed from the homepage and About page, leaving qualitative proof and outcome-focused evidence as the primary trust signals.

Keep proof focused on evidence and outcomes. Avoid stacking badges, logos, numbers, credentials, and testimonials in the same viewport.

Metrics must be verified before display. Unverified metrics should be removed, clearly marked as pending, or replaced with qualitative proof.

## UX-P4.2 — Make commercial engagement feel earned

**Status: Complete.** Apply and Augment pages now lead with the visitor problem and desired outcome, present a focused set of engagement types, and place conversation CTAs after the explanation of the work.

The visitor should reach Paidar or DrDarrenSpeaks after understanding what needs to happen.

Use this flow:

```text
Understand the challenge → Identify the need → Choose a next action → Ask for help
```

Commercial pages should lead with the visitor’s problem, desired outcome, and engagement type. Keep vendor branding secondary.

## UX-P4.3 — Improve forms and feedback

**Status: Complete.** Newsletter forms now have visible email labels and purpose copy. External-provider forms identify the new-tab confirmation limitation; the full newsletter form retains its provider success and error states.

Audit every form for:

- Visible label
- Purpose statement
- Required-field indication
- Success state
- Error state
- Privacy expectation
- Mobile usability

Document external-provider limitations where the form cannot be controlled locally.

---

# P5 — Validation and measurement

## UX-P5.1 — Run page-by-page UX review

**Status: Complete.** Generated [docs/ux-page-review.md](docs/ux-page-review.md) inventories all 72 public pages with audience, visitor question, expected understanding, opening context, and primary next action.

For every public page, record:

- Who is this for?
- What question brought them here?
- What should they understand before leaving?
- What is the primary next action?
- Why is that action logical?

Flag pages that answer “everyone,” contain several unrelated primary actions, or end without a next step.

## UX-P5.2 — Test the core journeys

**Status: Complete for automated path coverage.** `npm.cmd run check:ux` verifies the first-time visitor, IUC attendee, Apply-to-Augment, and resources-to-newsletter journeys. The documented manual checks remain in `docs/ux-validation.md`.

### First-time visitor

Open the homepage, understand the idea, choose a lens, start the assessment, and find one action.

### IUC attendee

Open `/education/`, recognize the event, select Student, Teacher, or Education Leader, and reach a useful resource.

### Student

Reach the Student lens, understand responsible use, identify maturity, and find a learning action.

### Teacher

Reach the Teacher lens, understand teaching implications, find classroom guidance, and identify a next action.

### Institution leader

Reach Education Leader, understand governance and institutional capability, and find assessment or guided support.

### Returning visitor

Return to a saved stage and continue to the next stage or relevant resource.

## UX-P5.3 — Measure progression

**Status: Complete.** Named privacy-appropriate client events now cover homepage path selection, lens selection, assessment start and completion, recommended actions, Learn-to-Apply, Apply-to-Augment, and later-stage returns.

Track progression events rather than only pageviews:

- Homepage → Find Your Path
- Lens selected
- Assessment started
- Assessment completed
- Recommended action clicked
- Learn → Apply
- Apply → Augment
- Return visit to a later stage

Use privacy-appropriate analytics and document event names before implementation.

## UX-P5.4 — Mobile and accessibility review

**Status: Automated review complete; visual review documented.** Static site, JavaScript, link, heading, image, and journey checks pass. The required viewport and keyboard/accessibility review matrix is recorded in `docs/ux-validation.md` for browser verification.

Test at 320px, 375px, 390px, 430px, 768px, 1024px, and desktop widths.

Verify:

- Navigation and dropdowns
- Lens cards
- Assessment controls
- Maturity navigation
- CTA hierarchy
- Tables and diagrams
- Forms and error states
- Keyboard focus
- Screen-reader names
- No horizontal scroll

---

# Recommended implementation order

1. Simplify navigation and confirm the public label for the framework menu.
2. Rewrite the homepage hero and reduce the first viewport.
3. Move lens selection earlier and shorten lens cards.
4. Reframe assessment results around one recommended action.
5. Standardize maturity coaching pages.
6. Add transition copy between major concepts.
7. Reduce homepage duplication and competing CTAs.
8. Simplify role pages and connect Context to Lens.
9. Improve resource tagging and recommendations.
10. Add return continuity and role progression.
11. Audit forms, proof, and commercial transitions.
12. Run journey testing and progression analytics.

# Definition of UX done

The UX is ready when:

- A new visitor understands the proposition in seconds.
- The visitor sees themselves before seeing the framework.
- Find Your Path is the dominant first interaction.
- The assessment gives a next action rather than only a score.
- Maturity pages read like coaching pages.
- AAOS appears when it helps the visitor act.
- Learn / Apply / Augment feels like a progression.
- No major page has competing primary CTAs.
- Every important page has a logical next step.
- Visitors can return and continue their journey.
- Mobile and keyboard use are comfortable.
