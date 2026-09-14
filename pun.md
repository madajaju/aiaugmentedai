# AI-Augmented.ai UX Punch List — Round 2

## Purpose

This punch list focuses specifically on the **user experience and readability** of `ai-augmented.ai`.

The site now has a strong conceptual architecture. The next work is to make that architecture **feel invisible to the user**.

The desired experience is:

> **I understand what this is.
> I see how it applies to me.
> I know where I am.
> I know what to do next.
> I know where to get help.**

The site should feel like a guide, not a framework manual.

---

# UX North Star

The primary user journey should be:

```text
UNDERSTAND
↓
IDENTIFY
↓
ASSESS
↓
ACT
↓
GROW
```

In plain language:

```text
What is this?
↓
Where do I fit?
↓
Where am I today?
↓
What should I do next?
↓
How much help do I need?
```

The supporting architecture is:

```text
Lens = Who
Maturity = Where
AAOS = How
Learn / Apply / Augment = Level of Support
```

Do not require the user to learn this architecture before receiving value.

---

# P0 — MUST FIX

## P0.1 — Remove Duplicate Journey Explanations on Homepage

The homepage currently explains the journey in more than one way.

Examples include:

```text
Lens → Assessment → AAOS → Resources → Next Step
```

and:

```text
Lens = Who
Maturity = Where
AAOS = How
Support = What Next
```

Choose one primary explanatory model.

Recommended:

# One System. Four Questions.

### Who am I?

Choose your lens.

### Where am I?

Understand your maturity.

### How do I improve?

Use AAOS.

### How much support do I need?

Learn, Apply, or Augment.

Use the click-path elsewhere.

Do not show two competing diagrams near the top of the homepage.

---

## P0.2 — Reduce Homepage Length

Reduce the homepage by approximately 20–30%.

Do not delete important ideas.

Move deeper material to the pages that own those concepts.

Recommended homepage flow:

```text
Hero
↓
Why This Matters
↓
Choose Your Lens
↓
Understand Where You Are
↓
How You Improve
↓
Learn / Apply / Augment
↓
Proof
↓
Final CTA
```

Move or reduce:

* detailed framework explanations
* repeated book promotion
* duplicate resource sections
* repeated newsletter blocks
* excessive FAQ content
* repeated explanations of the movement
* long framework benefit sections

The homepage should orient and route.

It should not fully document the system.

---

## P0.3 — Make Find Your Path the Canonical Starting Point

`Find Your Path` should be the primary starting experience.

Review `/start-here/`.

Avoid having two different pages that both claim to be the starting point.

Preferred approach:

* Keep `Find Your Path` as the canonical user journey.
* Either redirect `/start-here/` to `Find Your Path`
* or simplify `/start-here/` into a short orientation page whose primary CTA is `Find Your Path`.

Do not maintain competing sequences such as:

```text
Assessment → Book → Movement
```

versus:

```text
Lens → Assessment → AAOS
```

---

## P0.4 — Fix AAOS Terminology

Use:

**AI-Augmented Operating System**

Consistently.

Do not describe AAOS as:

* operating model
* professional operating standard
* shared standard

unless those are explicitly separate defined concepts.

Canonical language:

> **AAOS is the repeatable operating system used to build reliable AI-Augmented capability.**

---

## P0.5 — Fix Maturity vs AAOS Terminology

Canonical maturity stages:

1. Aware
2. Exploring
3. Experimenting
4. Integrating
5. Leading
6. Augmenting

Canonical AAOS stages:

1. Diagnose
2. Activate
3. Controls
4. Execute
5. Measure
6. Scale

Do not refer to maturity stages as:

* AAOS maturity stages
* AAOS stages
* AAOS maturity ladder

Preferred:

**AI-Augmented Maturity**

or:

**AI-Augmented Maturity Ladder**

AAOS provides the method for advancing capability.

---

## P0.6 — Fix Learn / Apply / Augment Page

Update language so that:

> Learn, Apply, and Augment describe how a user engages with the work.

Add a short statement:

> **They are not maturity levels.**

Replace:

> AAOS provides the operating model underneath Learn, Apply, and Augment.

with:

> **AAOS provides the operating system underneath Learn, Apply, and Augment.**

Correct any references that call:

Aware → Augmenting

AAOS stages.

---

## P0.7 — Fix Role-Specific CTAs

Role pages should remain role-specific all the way through.

### Student

Do not lead with:

`Bring AI-Augmented practice to your organization`

Recommended CTA sequence:

* Take the Student Assessment
* See Your Maturity
* Explore Student Resources
* Continue Your Learning Path

Optional secondary:

* Bring This to Your School

### Teacher

Recommended:

* Take the Teacher Assessment
* Explore Teaching Resources
* Improve Your Teaching Practice
* Bring AI-Augmented Learning to Your Classroom

Institutional workshop CTAs should be secondary.

### Education Leader

Recommended:

* Assess Your Institution
* Explore the Institutional Framework
* Bring AI-Augmented Education to Your Institution

Do not make the book the primary conversion.

---

## P0.8 — Fix Encoding Problems

Search all source content and generated HTML for malformed punctuation.

Known visible patterns include:

```text
?
�
â
Ã
I?ve
won?t
Intel?s
Lens ? Who
```

Check:

* smart apostrophes
* em dashes
* arrows
* UTF-8 conversion
* copied content
* generated markdown/HTML
* JSON content files

Prefer simple UTF-8-safe punctuation where needed.

Example:

```text
Lens → Who
```

or:

```text
Lens: Who
```

---

## P0.9 — Standardize Navigation

Use the clearest current navigation model consistently:

```text
Movement
Find Your Path
Framework
Education
Resources
Assessment
```

Avoid older ambiguous labels such as:

* Contexts
* How It Works

unless they are clearly useful.

Ensure mobile navigation uses the same mental model.

---

# P1 — NARRATIVE FLOW

## P1.1 — Reduce Choppiness

Avoid repeated patterns such as:

```text
LABEL

HEADING

ONE SENTENCE

CARDS

LABEL

HEADING

ONE SENTENCE

CARDS
```

Use:

```text
HEADING

2–3 sentence narrative

Visual / cards

Transition sentence
```

Every major section should contain enough prose to connect the ideas naturally.

---

## P1.2 — Add Transition Copy

Every major section should explain why the next section follows.

### Lens → Maturity

Example:

> Now that you have chosen the context that matters most to you, the next question is where you are today.

### Maturity → AAOS

Example:

> Knowing your stage tells you where to focus. The next step is improving how the work actually gets done.

### AAOS → Learn / Apply / Augment

Example:

> You can build these practices independently, use structured tools, or work with experts to accelerate the process.

Transitions should make the journey feel continuous.

---

## P1.3 — Rewrite Framework-First Headings

Prefer user-centered headings.

Replace headings like:

**The Core Principles of AI-Augmented Practice**

with:

**What it means to work well with AI**

Replace:

**The Movement Is The Public Expression Of A Shared Standard**

with:

**Why this matters now**

Replace:

**Why People Use This Framework**

with:

**What this helps you do**

Replace:

**Find Your Current Augmentation Maturity**

with:

**Understand where you are today**

Replace:

**The Framework**

with:

**Build a better way of working with AI**

---

## P1.4 — Use More Natural Paragraphs

Avoid excessive sequences of short declarative statements.

Bad pattern:

```text
Build capability.

Preserve judgment.

Scale responsibly.

Measure outcomes.
```

Use natural prose:

> AI augmentation is not about inserting AI into every task. It is about identifying where AI can improve judgment, speed, consistency, or access to expertise while keeping people responsible for the decisions that matter.

Use short statements for emphasis, not as the primary writing style.

---

# P2 — HOMEPAGE REFINEMENT

## P2.1 — Simplify Hero CTA Set

Preferred:

Primary:

**Find Your Path**

Secondary:

**Take the Assessment**

Optional tertiary text link:

**Explore the Framework**

Do not put too many equal-weight actions in the hero.

---

## P2.2 — Keep One Strong “Why This Matters” Section

Use a short narrative.

Recommended concept:

> AI is already changing how people work, learn, teach, decide, and lead. The challenge is no longer access to AI. The challenge is learning how to use it without weakening judgment, responsibility, or human capability.

Do not immediately follow this with another section repeating the same premise.

---

## P2.3 — Make Lens Selection the First Major Interaction

The user should quickly reach:

# Where does AI show up in your world?

Then show:

### Work & Leadership

* Individual
* Team Leader
* Organization Leader

### Education

* Student
* Teacher
* Education Leader

Each card should have:

* one sentence describing who it is for
* one sentence describing the desired outcome
* one CTA

Avoid detailed framework content inside the selector.

---

## P2.4 — Simplify Maturity Introduction

Use:

> You do not need to master everything at once. Start by understanding where you are today.

Then:

**Take the Assessment**

Do not over-explain all six maturity levels on the homepage.

A compact visual is enough.

---

## P2.5 — Simplify AAOS Introduction

Use narrative first:

> Once you know where you are, the next step is improving how the work gets done. AAOS provides a repeatable way to diagnose the work, activate AI where it adds value, establish controls, execute reliably, measure results, and scale what works.

Then show the six stages.

Do not make the homepage a full AAOS reference page.

---

## P2.6 — Consolidate Newsletter CTAs

Keep one strong newsletter/community CTA near the bottom.

Do not interrupt the journey repeatedly with newsletter signup blocks.

Primary conversion should remain:

**Find Your Path**

---

# P3 — FIND YOUR PATH

## P3.1 — Shorten the Page

This page should be one of the fastest pages on the site.

Preferred structure:

1. Short intro
2. Six lenses
3. One line describing what happens next

Avoid explaining:

Lens → Assessment → AAOS

multiple times.

---

## P3.2 — Make Role Selection Obvious

Group visually:

### Work & Leadership

* Individual
* Team Leader
* Organization Leader

### Education

* Student
* Teacher
* Education Leader

Make cards visually scannable.

---

# P4 — ROLE PAGES

## P4.1 — Remove Repetition

Review all role pages for repeated ideas.

Known examples:

* Student repeats judgment/capability themes.
* Teacher repeats “not automating education” language.
* Education Leader repeats institutional capability concepts.

Rule:

> Every section must move the user forward.

If a paragraph does not add new meaning, remove or merge it.

---

## P4.2 — Use a Standard Role Page Structure

Recommended:

```text
Hero
↓
The Challenge
↓
The Opportunity
↓
Three Key Capabilities
↓
Understand Where You Are
↓
What To Do Next
↓
Learn / Apply / Augment
```

Do not add every possible resource, book, bio, and service to every role page.

---

## P4.3 — Reduce Education Leader Page

Target approximately 25–35% reduction in visible content.

Preferred structure:

### Hero

### Institutional Challenge

### Three to Six Key Institutional Outcomes

### Assess Your Institution

### Where AI Creates Value

### Learn / Apply / Augment

### Final CTA

Move:

* full Darren bio
* detailed book promotion
* extended resource catalog
* deep framework definitions

to supporting pages.

---

# P5 — MATURITY PAGE UX

## P5.1 — Make Maturity Pages Coaching Pages

Use this structure:

# You Are Here

Short description.

## What Matters Most Right Now

One clear priority.

## Your Next Move

One concrete action.

## Avoid This

One common mistake.

## What Good Looks Like

One observable outcome.

## Ready to Advance When...

Capability-based criteria.

## Need More Help?

Learn / Apply / Augment.

---

## P5.2 — Remove Mechanically Generated Language

Review every generated maturity page.

Fix unnatural phrases such as:

* `a education administrator`
* `Focus on scale with consistency...`
* double periods
* awkward imperative fragments
* possessive errors
* templated repetition

Each page should sound authored, not generated.

---

## P5.3 — Make Milestones Capability-Based

Avoid arbitrary milestones such as:

* present at a conference
* try two different AI tools

Prefer capability evidence.

Example:

> Multiple departments can independently apply the institution's AI practices while maintaining consistent governance and outcomes.

Measure maturity by behavior and capability, not activity completion.

---

## P5.4 — Reduce Resource Overload

Do not show large directories on maturity pages.

Use:

### Do This Next

1–2 recommended actions.

### Go Deeper

Maximum 3 optional resources.

Recommendations should feel curated.

---

# P6 — ABOUT PAGE

## P6.1 — Remove Internal Governance Content

Move internal operating rules out of the public About page.

Examples of content to move:

* execution cadence
* no channel may conflict with...
* workstream operating rules
* internal governance language
* launch discipline
* content production rules

Put these in internal documentation.

---

## P6.2 — Simplify About Page

Preferred structure:

### Why the movement exists

### What we believe

### Who it serves

### How the framework works

### Who created it

### How to participate

The page should feel human and purposeful.

---

# P7 — RESOURCES UX

## P7.1 — Move Toward Contextual Recommendations

Do not rely only on a large resource library.

Where possible, recommend based on:

* Lens
* Maturity
* AAOS stage
* Learn / Apply / Augment
* Topic

Desired experience:

> Because you are a Teacher at the Experimenting stage, these are the three resources most useful right now.

---

## P7.2 — Tag Resource Metadata

Where practical, add metadata such as:

```json
{
  "lens": ["teacher"],
  "maturity": ["experimenting"],
  "aaosStage": ["activate", "controls"],
  "engagement": "learn",
  "topic": ["education", "academic-integrity"]
}
```

This can support contextual recommendation later.

---

# P8 — CTA SYSTEM

## P8.1 — Define CTA Hierarchy

### Primary Site CTA

**Find Your Path**

### Secondary

**Take the Assessment**

### Role-Specific

Examples:

Student:

**Continue Your Learning Path**

Teacher:

**Improve Your Teaching Practice**

Education Leader:

**Assess Your Institution**

Team Leader:

**Strengthen Your Team**

Organization Leader:

**Build Organizational Capability**

### Commercial / Augment

Examples:

**Bring This to Your Organization**

**Plan a Workshop**

**Talk With an Advisor**

---

## P8.2 — Avoid Generic CTAs

Reduce repetitive:

* Learn More
* Explore
* Discover
* Get Started

Prefer action-specific language.

---

# P9 — TECHNICAL UX QA

## P9.1 — Run Responsive Review

Test:

* 320px
* 375px
* 390px
* 430px
* 768px
* 1024px
* desktop widescreen

Focus on:

* navigation
* lens cards
* AAOS diagrams
* maturity visuals
* CTA groups
* long headings
* Learn / Apply / Augment cards

---

## P9.2 — Check Section Spacing

Ensure the user can distinguish major ideas without excessive vertical whitespace.

Avoid both:

* cramped card stacks
* huge empty spaces between sections

Use consistent spacing rhythm.

---

## P9.3 — Check Heading Hierarchy

Each page should have:

* one H1
* logical H2 sections
* H3 only when necessary

Do not use headings merely for visual styling.

---

## P9.4 — Accessibility Baseline

Check:

* contrast
* keyboard navigation
* focus indicators
* semantic landmarks
* button labels
* link text
* alt text
* form labels
* mobile tap targets

Target WCAG 2.2 AA where practical.

---

# P10 — CONTENT STYLE RULES

## P10.1 — Write for the User First

Prefer:

> Understand where you are today.

over:

> Assess maturity.

Prefer:

> Improve how the work gets done.

over:

> Operationalize AAOS.

Prefer:

> Choose how much help you need.

over:

> Select an engagement model.

---

## P10.2 — Explain Before Naming

Preferred:

> Start by understanding how effectively you use AI today. We call this your AI-Augmented Maturity.

Not:

> Assess your AI-Augmented Maturity.

Plain language first.

Framework term second.

---

## P10.3 — One Primary Idea Per Section

Every section should answer one question.

Avoid sections that simultaneously explain:

* framework
* maturity
* resources
* services
* books

Break them apart or remove detail.

---

# P11 — FINAL USER JOURNEY TESTS

## Journey 1 — First-Time Visitor

1. Open homepage.
2. Understand AI-Augmented within 5 seconds.
3. Know what primary action to take.
4. Find relevant lens.
5. Reach assessment.
6. Understand next action.

Pass condition:

The visitor does not need to understand the whole framework first.

---

## Journey 2 — Student

1. Choose Student.
2. Understand why AI-Augmented matters.
3. Identify maturity.
4. Get a concrete next action.
5. Find student-specific resources.

Pass condition:

No organization-centric CTA interrupts the journey.

---

## Journey 3 — Teacher

1. Choose Teacher.
2. Understand teaching relevance.
3. Assess current practice.
4. Find practical resources.
5. See classroom-specific next steps.

Pass condition:

No unnecessary institutional sales flow dominates the page.

---

## Journey 4 — Education Leader

1. Enter from `/education`.
2. Understand institutional relevance.
3. Assess current state.
4. See priority areas.
5. Understand next action.
6. Choose Learn / Apply / Augment.

Pass condition:

The page does not feel like a long brochure.

---

## Journey 5 — Returning User

1. Return after taking assessment.
2. Find maturity stage quickly.
3. See recommended next actions.
4. Access appropriate resources.
5. Progress to next stage.

Pass condition:

The user does not need to restart from the homepage.

---

# Definition of Done

The UX round is complete when:

* homepage has one clear journey model
* homepage is noticeably shorter
* Find Your Path is the canonical entry journey
* role pages remain role-specific throughout
* Student and Teacher CTAs are appropriate
* Education Leader page is streamlined
* AAOS terminology is consistent
* maturity terminology is consistent
* Learn / Apply / Augment is clearly separated from maturity
* malformed characters are gone
* deep pages read naturally
* maturity pages feel like coaching pages
* resources are curated rather than overwhelming
* navigation is consistent
* the site feels like a continuous guided journey rather than a vertical slide deck

---

# Execution Order

Implement in this order:

1. Fix AAOS and maturity terminology.
2. Fix malformed characters / encoding.
3. Remove duplicate homepage journey explanation.
4. Reduce homepage sections.
5. Make Find Your Path canonical.
6. Standardize navigation.
7. Fix Student CTAs.
8. Fix Teacher CTAs.
9. Reduce Education Leader page.
10. Rewrite maturity page templates.
11. Add transition copy.
12. Rewrite framework-first headings.
13. Reduce repetitive prose.
14. Simplify About page.
15. Consolidate newsletter blocks.
16. Improve resource recommendations.
17. Run responsive and accessibility QA.
18. Run all final user journey tests.

---

# Final Principle

The user should not leave saying:

> I understand the AI-Augmented framework.

The stronger outcome is:

> **I understand where I am, what I should do next, and how this site can help me get there.**

That is the target experience.
