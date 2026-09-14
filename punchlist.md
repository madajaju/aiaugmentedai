# AI-Augmented.ai Website Punch List

## Purpose

This punch list prepares **ai-augmented.ai** for the IUC conference and establishes a cleaner long-term information architecture for the AI-Augmented Movement.

The immediate goal is not to redesign the entire site.

The priority is to make the site:

1. Immediately understandable to first-time IUC visitors.
2. Ready for traffic arriving through the `/education` QR code.
3. Consistent in terminology and navigation.
4. Effective at moving visitors toward a useful next action.
5. Credible enough for CIOs, provosts, faculty, administrators, students, and institutional leaders.
6. Architecturally clean enough to support future content, assessments, products, workshops, credentials, and services.

---

# Guiding Architecture

The site should consistently communicate five separate concepts: Lens, Maturity, AAOS, Learn / Apply / Augment, and Context.

## 1. Lens = WHO

A lens identifies the role of the visitor. Context identifies the domain in which the work occurs.

Current lenses:

* Individual
* Team Leader
* Organization Leader
* Student
* Teacher
* Education Leader

## 2. Context = DOMAIN

A context identifies the domain in which the framework is applied, such as education, healthcare, legal, or government. Contexts contain relevant lenses; they are not lenses themselves.

Current context:

* Education

Future contexts may include:

* Healthcare
* Legal
* Government

## 3. Maturity = WHERE

Maturity describes the visitor's current level of AI augmentation.

Current maturity stages:

1. Aware
2. Exploring
3. Experimenting
4. Integrating
5. Leading
6. Augmenting

Do not refer to these as AAOS stages.

## 4. AAOS = HOW

The AI-Augmented Operating System provides the method for advancing capability.

Current AAOS stages:

1. Diagnose
2. Activate
3. Controls
4. Execute
5. Measure
6. Scale

Do not refer to maturity stages as AAOS stages.

## 5. Learn / Apply / Augment = LEVEL OF SUPPORT

This is the engagement model.

### Learn

Understand the concepts through free educational material.

### Apply

Use tools, frameworks, assessments, playbooks, workbooks, templates, and other assets to apply the concepts.

### Augment

Work directly with experts through workshops, advisory services, organizational engagements, speaking, coaching, or facilitated transformation.

---

# IUC Readiness Priorities

These tasks must be completed first.

---

# P0 ? CRITICAL BEFORE IUC

## P0.1 ? Build `/education` as the canonical education landing page

### Objective

The IUC keynote, breakout, cards, slides, and QR codes are directing visitors to:

`https://ai-augmented.ai/education`

This URL must provide an excellent first experience.

### Requirements

Create or update:

`/education/`

The page should not simply redirect directly to the Education Leader lens.

It should function as the main gateway for AI-Augmented Education.

### Hero

Use messaging approximately equivalent to:

**AI-Augmented Education**

**Preparing students, educators, and institutions for an AI-shaped future.**

Supporting copy should communicate that AI-Augmented Education helps institutions expand human capability while preserving judgment, integrity, agency, and responsible use of AI.

Primary CTA:

`Find Your Path`

Secondary CTA:

`Explore AI-Augmented Education`

### Role Selection

Immediately below the hero provide three clear paths.

#### Student

Headline:

**Learn, think, create, and work effectively with AI.**

CTA:

`Explore the Student Path`

Link to:

`/lens/student/`

#### Teacher

Headline:

**Design learning experiences that build capability instead of dependency.**

CTA:

`Explore the Teacher Path`

Link to the canonical teacher lens.

#### Education Leader

Headline:

**Build institutional AI capability across academics, operations, governance, research, and student success.**

CTA:

`Explore the Education Leader Path`

Link to:

`/lens/education-administrator/`

or the canonical renamed path if changed.

### Learn / Apply / Augment Section

Add a section showing how education visitors can engage.

#### Learn

Examples:

* Articles
* Podcasts
* Videos
* Guides
* Frameworks
* Case studies

#### Apply

Examples:

* Assessments
* Workbooks
* Playbooks
* Templates
* Toolkits
* Institutional planning resources

#### Augment

Examples:

* Workshops
* Executive briefings
* Faculty development
* Institutional assessments
* AI strategy engagements
* Keynotes
* Advisory services

### Education Domains

For institutional leaders show major application domains:

* Executive Leadership
* Academic Affairs
* Teaching and Learning
* Student Success
* Research
* Administration and Operations
* Workforce Development
* Governance
* Risk and Responsible AI

### IUC Context

Do not make the page dependent on IUC.

However, it is acceptable to add a temporary section such as:

**Joining us from IUC? Start here.**

Provide three choices:

* Student
* Educator
* Institutional Leader

This section should be removable after the conference without changing the overall page architecture.

### Metadata

Ensure:

* canonical URL points to `/education/`
* page title includes AI-Augmented Education
* meta description mentions students, educators, institutions, and responsible AI capability
* OpenGraph metadata exists
* Twitter/X metadata exists
* structured data is valid

### Acceptance Criteria

A new visitor arriving through the IUC QR code should understand within approximately five seconds:

1. What AI-Augmented Education is.
2. That it applies to them.
3. Which path they should select.
4. What they can do next.

---

## P0.2 ? Make `/education` visible in primary navigation

Keep Education as a clear top-level navigation path during the IUC campaign so the QR journey remains direct. When additional contexts are ready, replace this permanent category with an **Explore by Context** entry.

Recommended navigation structure:

* Home
* Find Your Path
* Education
* Framework
* Resources
* About

Avoid overloading the top navigation with product or book-specific links.

If responsive navigation behaves differently on mobile, verify that Education remains directly accessible.

---

## P0.3 ? Simplify homepage hero messaging

The homepage must explain the movement before introducing specialized concepts.

Current specialized concepts such as Hallucination Debt should not carry the primary burden of explaining the movement.

### Replace the primary proposition with something close to:

**The AI-Augmented Movement**

**Expand human capability in the age of AI.**

Supporting copy:

AI-Augmented helps individuals, teams, organizations, students, educators, and institutions build reliable AI capability while preserving human judgment, agency, and responsibility.

### Primary CTA

`Find Your Path`

### Secondary CTA

`Take the Assessment`

or

`Explore the Framework`

depending on what currently exists and works correctly.

### Hallucination Debt

Retain Hallucination Debt as an important concept, but move it below the primary orientation content.

It should be presented as a problem AI-Augmented practices help solve.

---

## P0.4 ? Add a simple "How It Works" architecture section

Add a highly visible section to the homepage.

Headline:

**How AI-Augmented Works**

Show four steps.

### 1. Choose Your Lens

**Who are you?**

Individual, Team Leader, Organization Leader, Student, Teacher, or Education Leader.

### 2. Understand Your Maturity

**Where are you today?**

Determine whether you are Aware, Exploring, Experimenting, Integrating, Leading, or Augmenting.

### 3. Use AAOS

**How do you improve?**

Use Diagnose, Activate, Controls, Execute, Measure, and Scale to build reliable capability.

### 4. Choose Your Level of Support

**How much help do you want?**

Learn, Apply, or Augment.

### Important

Do not visually imply that these are four different maturity frameworks.

They are different dimensions of the overall system.

---

## P0.5 ? Correct all terminology collisions

Perform a repository-wide search for terminology involving:

* maturity
* stages
* AAOS
* framework
* operating system
* lens
* Learn
* Apply
* Augment

Correct places where maturity stages are described as AAOS stages.

### Canonical language

Use:

**AI-Augmented Maturity**

for:

* Aware
* Exploring
* Experimenting
* Integrating
* Leading
* Augmenting

Use:

**AAOS stages**

for:

* Diagnose
* Activate
* Controls
* Execute
* Measure
* Scale

Use:

**Lens**

for role/context.

Use:

**Learn / Apply / Augment**

for engagement/support level.

---

## P0.6 ? Standardize "Education Leader" terminology

The user-facing terminology should normally be:

**Education Leader**

Avoid unnecessary switching among:

* Education Administrator
* Higher Education Administrator
* Education Executive
* Institution Leader
* Education Leader

The internal URL may remain:

`/lens/education-administrator/`

if changing it creates migration risk before IUC.

However, all visitor-facing labels should use:

**Education Leader**

If the URL is changed later, create permanent redirects.

---

## P0.7 ? Run full editorial cleanup

Perform a repository-wide proofreading pass.

Fix:

* spelling errors
* grammar errors
* duplicate punctuation
* inconsistent capitalization
* incomplete sentences
* incorrect articles
* inconsistent singular/plural usage
* inconsistent hyphenation of AI-Augmented
* inconsistent AAOS capitalization
* inconsistent stage names

Known examples that must be checked:

* `Team Empowerement` ? `Team Empowerment`
* `a education administrator` ? `an education administrator`
* duplicate punctuation such as `..`

Also inspect generated stage pages for repeated templating errors.

---

## P0.8 ? Verify every QR-code destination used for IUC

Verify the following URL:

`https://ai-augmented.ai/education`

Also inspect all URLs currently used in:

* keynote slides
* breakout slides
* pass-along cards
* posters
* conference handouts
* book inserts if applicable
* business cards if applicable

Requirements:

* HTTP 200
* HTTPS works
* no redirect loops
* page loads on mobile
* no broken assets
* no horizontal scrolling
* CTA buttons work
* no development placeholders
* no temporary copy
* no missing images

---

## P0.9 ? Optimize `/education` for mobile

Most conference QR traffic will arrive on phones.

Test at common mobile widths.

Requirements:

* hero readable without zooming
* role cards stack correctly
* no clipped text
* no overly large hero image
* buttons are finger-friendly
* no overlapping navigation
* no tiny labels
* adequate spacing
* reasonable initial page weight
* important CTA appears before excessive scrolling

---

## P0.10 ? Add obvious next actions to education pages

Every education lens and maturity page should provide a next action.

At minimum include:

* `Continue Your Path`
* `Explore Resources`
* `Take the Assessment`

Where relevant also include:

* `Learn`
* `Apply`
* `Augment`

Avoid dead-end informational pages.

---

# P1 ? HIGH PRIORITY BEFORE IUC

## P1.1 ? Reduce homepage length

The homepage currently attempts to explain too much.

Refactor into a simpler sequence.

Recommended structure:

1. Hero
2. Choose Your Lens
3. How AI-Augmented Works
4. Why AI-Augmented
5. Learn / Apply / Augment
6. Proof / Reach / Testimonials
7. Featured Resources
8. Join the Movement

Move detailed explanations to secondary pages.

Do not delete valuable content unless duplicated.

Prefer relocating it.

---

## P1.2 ? Make "Find Your Path" the dominant conversion action

Across the site, prioritize contextual next actions over newsletter subscription.

Recommended CTA hierarchy:

### Primary

`Find Your Path`

### Secondary

`Take the Assessment`

### Tertiary

`Explore Resources`

### Supporting

`Join the Movement`

Newsletter subscription should remain available but should not dominate the experience.

---

## P1.3 ? Improve the Find Your Path page

The page should quickly help visitors choose among six lenses.

Each lens card should answer:

* Who is this for?
* What outcome will I get?
* Where will this take me?

Keep descriptions short.

Suggested lens ordering:

### Work and Leadership

* Individual
* Team Leader
* Organization Leader

### Education

* Student
* Teacher
* Education Leader

This visual grouping reinforces the expanding scope of the movement.

---

## P1.4 ? Make Learn / Apply / Augment visible on the homepage

Add a concise version of this model.

### Learn

**Build understanding.**

Free education and foundational resources.

### Apply

**Put the framework to work.**

Assessments, playbooks, templates, workbooks, and toolkits.

### Augment

**Accelerate with expert support.**

Workshops, advisory services, speaking, and organizational engagements.

Link to the full page.

---

## P1.5 ? Keep Augment traffic within the AI-Augmented ecosystem

Avoid sending users directly from the conceptual journey to an unrelated-looking external site without context.

Create:

`/augment/`

or equivalent.

This page should describe ways visitors can receive expert assistance.

Possible sections:

* Executive Briefings
* Keynotes
* Workshops
* Team Enablement
* Organizational Assessments
* AI Readiness
* Education Transformation
* Advisory Services
* Faculty Development
* Strategic Planning

From there, booking or commercial CTAs may route to Paidar Systems or DrDarrenSpeaks as appropriate.

The AI-Augmented site should remain the conceptual front door.

---

## P1.6 ? Add stronger Education proof points

On `/education/`, include credible evidence where supported.

Possible categories:

* universities engaged
* faculty workshops
* student programs
* higher-education leadership sessions
* AI workforce development
* institutional AI strategy engagements
* keynote experience
* relevant research or published work

Do not invent metrics.

Only use numbers or institutional claims backed by evidence.

---

## P1.7 ? Verify homepage metrics

Review all prominent metrics.

Examples currently or previously used include:

* podcast downloads
* podcast episodes
* YouTube subscribers
* organizations or institutions engaged

Confirm each against an authoritative source.

Add a lightweight data mechanism so these numbers can be updated centrally rather than embedded in multiple pages.

Recommended implementation:

`data/metrics.json`

or equivalent.

Example:

```json
{
  "podcastMonthlyDownloads": {
    "display": "1M+",
    "source": "internal",
    "lastVerified": "YYYY-MM-DD"
  },
  "youtubeSubscribers": {
    "display": "200K+",
    "source": "YouTube",
    "lastVerified": "YYYY-MM-DD"
  }
}
```

Do not expose internal source notes publicly unless intentionally desired.

---

## P1.8 ? Clarify movement vs. framework vs. operating system

Create canonical definitions that can be reused across pages.

### AI-Augmented Movement

A movement focused on expanding human capability through disciplined partnership with AI.

### AI-Augmented Framework

The conceptual model connecting lenses, maturity, methods, and engagement paths.

### AI-Augmented Operating System ? AAOS

The repeatable operating model used to build and scale reliable AI-augmented capability.

### AI-Augmented Maturity

A progression describing how deeply AI is integrated into judgment, workflows, teams, or institutions.

Centralize these definitions where feasible.

---

## P1.9 ? Improve conference visitor orientation

Add optional query-aware or contextual handling for visitors from IUC.

Possible campaign URL:

`/education/?src=iuc`

or:

`/education/?utm_source=iuc`

Do not require this for the page to work.

Potential temporary callout:

**Welcome, IUC attendees**

Explore the AI-Augmented Education framework, select your role, and continue the work from today's keynote.

Keep this subtle and removable.

---

# P2 ? SEO / AEO / DISCOVERABILITY

## P2.1 ? Review homepage title tag

The homepage title should represent the movement, not only AI governance and operating models.

Evaluate options such as:

**The AI-Augmented Movement | Human Capability in the Age of AI**

or:

**AI-Augmented | Human Capability, Leadership & Education**

Keep title length within reasonable SEO limits.

---

## P2.2 ? Optimize `/education` title and description

Suggested title:

**AI-Augmented Education | Students, Educators & Institutions**

Suggested description:

**Build responsible AI capability across students, educators, academic leadership, research, operations, governance, and institutional transformation with the AI-Augmented framework.**

Adjust for final character length.

---

## P2.3 ? Add structured data

Review and implement appropriate JSON-LD.

Possible schema types:

* Organization
* WebSite
* WebPage
* BreadcrumbList
* FAQPage
* Article
* Person where appropriate
* Book where appropriate
* Event when applicable
* Course only if pages truly meet course semantics

Do not misuse schema types simply for SEO.

---

## P2.4 ? Preserve FAQ content

The existing FAQ-style content is valuable for answer engines.

Ensure the homepage or framework pages clearly answer questions such as:

* What does AI-Augmented mean?
* What is AAOS?
* What is AI-Augmented maturity?
* What is an AI-Augmented team?
* What is AI-Augmented education?
* How should students use AI responsibly?
* How should teachers adapt to AI?
* How should universities govern AI?
* What is Hallucination Debt?
* How is AI-Augmented different from simply using AI tools?

Keep answers concise and explicit.

---

## P2.5 ? Improve internal linking

Each major page should link semantically to related concepts.

Example:

Education Leader page should link to:

* education hub
* institutional maturity
* AAOS
* assessment
* governance resources
* workshops
* relevant books/resources

Student pages should link to:

* student maturity
* responsible use
* study workflows
* learning resources

Teacher pages should link to:

* teaching resources
* academic integrity
* classroom AI practices
* faculty development

---

## P2.6 ? Generate and validate sitemap

Ensure the sitemap contains all canonical public pages.

Exclude:

* development pages
* duplicate test pages
* obsolete URLs
* temporary build artifacts
* alternate generated URLs that should not be indexed

Submit or verify the sitemap through the appropriate search tooling outside the repository as needed.

---

## P2.7 ? Check robots directives

Verify:

* production pages are indexable
* staging or development paths are excluded
* canonical pages are not accidentally blocked
* assets needed for rendering are accessible

---

## P2.8 ? Audit canonical links

Every page should point to its preferred URL.

Pay special attention to:

* trailing slash consistency
* `www` vs non-`www`
* HTTP vs HTTPS
* renamed lenses
* generated maturity pages
* `/education`
* query-string campaign URLs

---

# P3 ? UX AND INFORMATION ARCHITECTURE

## P3.1 — Establish primary site taxonomy

Use a coherent site-level hierarchy that separates visitor roles from the context in which they work. Education, healthcare, legal, and government are contexts; Student, Teacher, and Education Leader are lenses within the education context.

Recommended conceptual structure:

```text
/
├── movement/
├── framework/
│   ├── aaos/
│   ├── maturity/
│   └── learn-apply-augment/
├── paths/
│   ├── individual/
│   ├── team-leader/
│   └── organization-leader/
├── contexts/
│   └── education/
│       ├── student/
│       ├── teacher/
│       └── education-leader/
├── resources/
├── assessments/
├── augment/
└── about/
```

Do not migrate current URLs solely to match this conceptual structure before redirects, canonical updates, and deployment support are ready. Existing routes such as `/education/` and `/lens/student/` may remain stable while the broader context model is developed.

Use **Contexts** as the internal architecture term. A future public navigation label can be **Explore by Context** if testing confirms that visitors understand it. Avoid making Education a permanent top-level navigation category once multiple contexts are available.

The site model is:

```text
WHO                 Lens: Individual, Team Leader, Organization Leader, Student, Teacher, Education Leader
WHERE               Maturity: Aware through Augmenting
HOW                 AAOS: Diagnose, Activate, Controls, Execute, Measure, Scale
LEVEL OF SUPPORT    Learn, Apply, Augment
CONTEXT             Education, Healthcare, Legal, Government, and future domains
```
## P3.2 ? Add breadcrumbs to deeper pages

For example:

`Explore by Context > Education > Education Leader > Exploring`

or:

`Find Your Path > Student > Experimenting`

Breadcrumbs should:

* be visually unobtrusive
* help orientation
* use structured data
* link back to meaningful parent pages

---

## P3.3 ? Improve maturity page progression

Each maturity page should clearly show:

**Previous Stage ? Current Stage ? Next Stage**

Also show:

**Your goal at this stage**

**What good looks like**

**What to do next**

**What not to do**

**Recommended resources**

**Exit criteria**

This is already present in parts of the site; standardize it.

---

## P3.4 ? Create consistent CTA system

Define button styles and semantic purposes.

### Primary CTA

Used for the most important next action.

### Secondary CTA

Used for exploration.

### Tertiary text link

Used for supporting navigation.

Avoid pages with three or four equally prominent actions.

---

## P3.5 ? Add site-wide footer taxonomy

Footer should provide clear access to:

### Movement

* About
* Framework
* Find Your Path
* Explore by Context

### Paths

* Individual
* Team Leader
* Organization Leader
* Student
* Teacher
* Education Leader

### Resources

* Resources
* Assessments
* Books
* Podcast
* Videos

### Engage

* Learn
* Apply
* Augment

### Legal

* Privacy
* Terms
* Copyright

---

# P4 ? BRAND AND AUTHORITY

## P4.1 ? Define brand ontology in the repository

Create a reusable source of truth.

Recommended file:

`docs/brand-ontology.md`

Include definitions for:

* AI-Augmented
* AI-Augmented Movement
* AAOS
* AI-Augmented Maturity
* Lens
* Learn
* Apply
* Augment
* AI-Augmented Education
* AI-Augmented Institute if used
* Hallucination Debt

Codex should use this document when generating new site content.

---

## P4.2 ? Keep product brands subordinate to the movement

The AI-Augmented website should primarily own:

* the idea
* the framework
* education
* assessments
* progression
* resources
* movement/community

Other entities can handle commercial execution.

### Paidar Systems

Implementation, consulting, workshops, organizational transformation.

### Paidar Press

Books, publishing, intellectual property products.

### DrDarrenSpeaks

Speaking and personal brand.

### AI-Augmented Institute

Research, education, stewardship, credentials, and standards if/when formally established.

Do not turn the AI-Augmented homepage into a directory of companies.

---

## P4.3 ? Improve author/founder attribution

Ensure visitors can understand who created the framework without making the site feel like a personal promotional site.

Use language such as:

**Developed by Dr. Darren Pulsipher and the AI-Augmented community**

only if that matches the intended governance model.

Provide clear links to biography and credibility.

Avoid excessive founder promotion on the homepage.

---

# P5 ? PERFORMANCE AND TECHNICAL QUALITY

## P5.1 ? Run broken-link audit

Check all internal links.

Check all external links.

Flag:

* 404
* 403
* redirect chains
* redirect loops
* malformed anchors
* links to old domains
* missing images
* relative path failures

Generate a report.

---

## P5.2 ? Run orphan-page audit

Identify pages that:

* exist in the repository
* are publicly deployable
* have no meaningful internal links

Determine whether each should be:

* linked
* redirected
* archived
* removed from deployment
* intentionally retained but excluded from indexing

---

## P5.3 ? Check image optimization

For each image:

* ensure appropriate dimensions
* use modern format where reasonable
* compress without visible degradation
* set width and height
* add meaningful alt text
* lazy load non-critical images
* avoid loading oversized hero images on mobile

---

## P5.4 ? Check Core Web Vitals fundamentals

Focus on obvious causes of poor experience:

* excessive JavaScript
* render-blocking CSS
* font loading
* oversized hero assets
* layout shift
* slow external scripts
* large embedded videos

Do not over-engineer performance immediately before IUC.

Fix high-impact problems first.

---

## P5.5 ? Validate responsive layouts

Test:

* 320px
* 375px
* 390px
* 430px
* 768px
* 1024px
* desktop widescreen

Pay particular attention to:

* navigation
* lens cards
* maturity diagrams
* Learn / Apply / Augment blocks
* tables
* CTA groups
* QR-related landing pages

---

## P5.6 ? Run accessibility baseline

Check:

* keyboard navigation
* focus indicators
* semantic heading order
* form labels
* image alt attributes
* contrast
* button names
* link names
* skip navigation
* landmark elements
* form error states

Target WCAG 2.2 AA where reasonably achievable.

---

# P6 ? CONTENT SYSTEM IMPROVEMENTS

## P6.1 ? Centralize stage definitions

Create structured data for maturity stages.

Example:

`data/maturity.json`

Each stage should contain:

* id
* name
* shortDescription
* longDescription
* objective
* commonBehaviors
* risks
* milestone
* exitCriteria

Generate repeated UI from this source where appropriate.

---

## P6.2 ? Centralize AAOS definitions

Create:

`data/aaos.json`

Include:

* Diagnose
* Activate
* Controls
* Execute
* Measure
* Scale

Each should include:

* purpose
* inputs
* activities
* outputs
* exit gate
* example

Avoid hardcoding multiple inconsistent definitions.

---

## P6.3 ? Centralize lens definitions

Create:

`data/lenses.json`

Include:

* id
* publicName
* shortDescription
* audience
* outcome
* route
* icon
* category

Example category values:

* personal
* leadership
* education

---

## P6.4 ? Centralize Learn / Apply / Augment content

Create:

`data/engagement.json`

Each level should include:

* name
* description
* audience
* typical assets
* CTA
* route

---

# P7 ? POST-IUC STRATEGIC IMPROVEMENTS

These items should not block conference readiness.

## P7.1 ? Evaluate canonical URL migration

Consider replacing:

`/lens/education-administrator/`

with:

`/lens/education-leader/`

Only do this with permanent redirects and canonical updates.

---

## P7.2 ? Build dedicated Augment marketplace/engagement page

Allow visitors to discover services by need rather than company.

Examples:

* AI Readiness
* Leadership Workshop
* Faculty Development
* Team Enablement
* Organizational Transformation
* Governance
* Education Strategy
* Executive Briefing
* Keynote

---

## P7.3 ? Build Apply catalog

Create a structured page for self-service assets.

Examples:

* assessments
* playbooks
* workbooks
* decision guides
* templates
* maturity tools
* workshop materials
* educational resources

Each asset should indicate:

* audience
* maturity level
* lens
* relevant AAOS stage
* free/paid
* expected outcome

---

## P7.4 ? Build stronger movement/community experience

Possible future capabilities:

* newsletter
* community
* events
* research
* contributors
* stories
* institutional partners
* certifications
* credentials
* chapters
* ambassador program

Do not implement these merely to add features.

They should support adoption of the AI-Augmented framework.

---

## P7.5 ? Build institutional education journey

Create a guided institutional journey such as:

```text
Discover
? Assess
? Diagnose
? Prioritize
? Pilot
? Govern
? Measure
? Scale
? Augment
```

This may eventually become a commercial or credentialed institutional program.

Ensure it remains conceptually compatible with AAOS.

---

# Automated Checks Codex Should Add

Where practical, create automated validation.

## Link Check

Detect broken internal links during CI.

## Content Lint

Check for prohibited or incorrect terminology patterns.

Examples:

Flag:

`AAOS maturity stages`

when referring to Aware through Augmenting.

Flag:

`Education Administrator`

in public-facing navigation if Education Leader is canonical.

Flag misspellings such as:

`Empowerement`

## Metadata Check

Validate:

* title
* description
* canonical
* OpenGraph title
* OpenGraph description
* OpenGraph image

for major pages.

## Heading Check

Verify there is one primary H1 per page.

## Image Check

Detect images without alt text.

## Sitemap Check

Verify public canonical pages appear in the sitemap.

---

# Repository Documentation

Create or update:

```text
docs/
├── brand-ontology.md
├── information-architecture.md
├── seo-guidelines.md
├── content-guidelines.md
└── iuc-readiness.md
```

---

# `docs/brand-ontology.md`

Must define:

* AI-Augmented
* AI-Augmented Movement
* Lens
* Maturity
* AAOS
* Learn / Apply / Augment
* Hallucination Debt
* AI-Augmented Education

---

# `docs/information-architecture.md`

Document:

```text
WHO
Lens

WHERE
Maturity

HOW
AAOS

LEVEL OF SUPPORT
Learn / Apply / Augment
```

All future pages should fit into this architecture.

---

# `docs/content-guidelines.md`

Include:

## Voice

* practical
* clear
* optimistic
* evidence-oriented
* human-centered
* non-hyped

Avoid:

* excessive AI hype
* fear-driven messaging
* vague transformational claims
* unnecessary technical jargon
* unverified performance claims

## Core Principle

AI augmentation should be described as increasing human capability rather than replacing human responsibility.

---

# `docs/iuc-readiness.md`

Create a final checklist that can be manually verified immediately before IUC.

Include:

* `/education` works
* QR tested from physical print
* mobile tested
* navigation tested
* all education role links tested
* forms tested
* assessment tested
* analytics working
* no placeholder copy
* no obvious spelling errors
* hero correct
* conference CTA correct
* canonical URLs correct

---

# Final IUC Smoke Test

Before declaring the work complete, perform the following journey manually.

## Journey 1 ? CIO

1. Open `/education`.
2. Understand the proposition.
3. Choose Education Leader.
4. Understand current maturity.
5. Understand AAOS.
6. Find an institutional next step.
7. Find a way to engage.

## Journey 2 ? Provost

1. Open `/education`.
2. Identify relevance to academics.
3. Find teacher/faculty implications.
4. Find governance implications.
5. Find institutional actions.
6. Reach an Apply or Augment path.

## Journey 3 ? Faculty Member

1. Open `/education`.
2. Select Teacher.
3. Understand what AI augmentation means for teaching.
4. Find practical resources.
5. Identify their current maturity.
6. Get a concrete next action.

## Journey 4 ? Student

1. Open `/education`.
2. Select Student.
3. Understand that the message is about capability rather than shortcutting work.
4. Find practical learning guidance.
5. Identify current maturity.
6. Find a next action.

## Journey 5 ? Conference Attendee with 30 seconds

1. Scan QR.
2. Page loads quickly.
3. Understand AI-Augmented Education.
4. See the three education roles.
5. Choose one.
6. Save or continue exploring.

If this journey fails, simplify the landing page further.

---

# Definition of Done for IUC

The website is considered IUC-ready when all P0 tasks are complete and the following are true:

* `https://ai-augmented.ai/education` is the canonical education gateway.
* The page works exceptionally well on mobile.
* Student, Teacher, and Education Leader journeys are obvious.
* The homepage clearly communicates the AI-Augmented Movement.
* Lens, Maturity, AAOS, and Learn / Apply / Augment are not conflated.
* Education Leader terminology is consistent.
* All conference QR destinations work.
* No obvious spelling or grammar errors remain.
* Every major education page has a meaningful next action.
* Users can move from learning to applying to engaging expert help.
* The movement remains the primary brand rather than becoming a book, consulting, or personal speaking site.

---

# Recommended Execution Order

Codex should implement changes in this exact sequence unless repository dependencies require a minor adjustment:

1. Build/fix `/education`.
2. Verify `/education` mobile experience.
3. Add Education to primary navigation.
4. Simplify homepage hero.
5. Add homepage "How AI-Augmented Works" section.
6. Correct Maturity vs AAOS terminology.
7. Standardize Education Leader terminology.
8. Run editorial cleanup.
9. Verify IUC links and QR destinations.
10. Improve education CTAs.
11. Improve Find Your Path.
12. Surface Learn / Apply / Augment on homepage.
13. Reduce homepage duplication/length.
14. Verify metrics and authority claims.
15. Improve metadata and canonical tags.
16. Run broken-link audit.
17. Run responsive/accessibility checks.
18. Add structured data validation.
19. Centralize framework content in structured data.
20. Complete post-IUC architectural cleanup.

---

# Important Constraints

Do not:

* invent institutional adoption numbers
* invent testimonials
* invent customer names
* invent research citations
* rename URLs immediately before IUC if redirects cannot be guaranteed
* remove useful content merely to shorten pages
* change the six maturity stages
* change the six AAOS stages
* merge maturity and AAOS
* redefine Learn / Apply / Augment as maturity
* turn the homepage into a consulting sales page
* turn the homepage into a book sales page
* make the website dependent on Darren's personal brand

Preserve the core idea:

> AI augmentation expands human capability through disciplined partnership with AI while preserving human judgment, agency, and responsibility.

The AI-Augmented website should be the canonical home of that idea.





