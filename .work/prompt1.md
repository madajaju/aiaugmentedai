# Task: Build the AI-Augmented.ai Migration Map

You are working on the next generation of `ai-augmented.ai`.

Do **not** begin migrating or rewriting pages yet.

Your first job is to understand the new static-site architecture, study the canonical AAOS corpus, inventory the current site content, and produce a migration plan.

## Source hierarchy

Use sources in this order of authority:

### 1. Canonical AAOS corpus

The canonical corpus is located at:

```text
C:\Users\darre\IdeaProjects\paidar-press\aaos-corpus\canon
```

Study this corpus before making terminology or framework decisions.

The corpus is authoritative for:

* AI-Augmented terminology
* AAOS definition
* AAOS stages
* maturity definitions
* human/AI responsibility
* concepts and principles
* framework relationships
* domain-independent language
* canonical intellectual property

Do not silently change, reinterpret, or invent canonical concepts.

If the current website conflicts with the corpus, flag the conflict and prefer the corpus.

### 2. Current ai-augmented.ai content

Inventory all existing site content available in the repository (site folder) and, if available to you, the currently deployed site.

Preserve useful:

* prose
* examples
* testimonials
* proof points
* book references
* resource descriptions
* assessments
* articles
* images
* calls to action
* role-specific material

Do not invent missing customer claims, testimonials, adoption statistics, research citations, or outcomes.

### 3. New static-site wireframe

The current repository contains the approved static-site wireframe.

Treat the new directory structure and UX documentation as authoritative for where content should live.

The core user-facing hierarchy is:

```text
Domain
↓
Role
↓
Support
```

Domains:

```text
business
education
legal
medical
```

Support levels:

```text
learn
apply
augment
```

Maturity and AAOS are **not** directory hierarchy.

They are framework dimensions and metadata/context.

## Architecture principles

The site must remain a pure static website.

Every canonical route must resolve to a real:

```text
index.html
```

Do not introduce:

* React
* Vue
* Angular
* SPA routing
* client-side generated primary content
* runtime page generation
* database dependencies
* server-side application frameworks

JavaScript may enhance the static pages but must not be required to render primary content.

## Approved page layouts

Study the UX/layout documentation already in the repository.

Use only these primary layouts:

1. Domain Landing
2. Role Landing
3. Support Landing
4. Editorial / Practice / Framework

Do not invent additional page architectures unless there is a clear structural need.

## Step 1 — Inspect the new wireframe

Document:

* existing directories
* existing static routes
* global pages
* domain pages
* role pages
* support pages
* framework pages
* practice pages
* resource structure
* shared CSS/JS
* UX/layout documentation

Do not modify anything yet.

## Step 2 — Study the corpus

Recursively inspect:

```text
C:\Users\darre\IdeaProjects\paidar-press\aaos-corpus\canon
```

Build an internal understanding of:

* canonical definition of AI-Augmented
* AAOS
* maturity
* key principles
* stage definitions
* human judgment / responsibility concepts
* Learn / Apply / Augment if present
* domain-related concepts if present
* terminology that must not drift

Create:

```text
docs/corpus-content-map.md
```

This should document:

* source files
* major concepts contained in each
* canonical terminology
* which website sections those concepts can support

Do not copy large amounts of corpus prose into this document.

Summarize and map.

## Step 3 — Inventory current website content

Create:

```text
docs/current-site-inventory.md
```

For each current page identify:

* current URL
* title
* purpose
* intended audience
* important content blocks
* useful assets
* CTAs
* testimonials/proof
* framework concepts used
* obvious duplication
* outdated or conflicting terminology
* technical problems if visible

## Step 4 — Build the migration map

Create:

```text
docs/migration-map.md
```

Use a table like:

| Current URL / Content | Purpose | New Destination | Action | Source Authority | Rewrite Needed? | Notes |
| --------------------- | ------- | --------------- | ------ | ---------------- | --------------- | ----- |

Allowed actions:

```text
KEEP
MOVE
MERGE
REDIRECT
RETIRE
REWRITE
```

Examples:

```text
/lens/teacher/
→ /education/teacher/
MOVE + REDIRECT
```

```text
/lens/education-administrator/
→ /education/leader/
MOVE + REDIRECT
```

```text
/aaos/
→ /framework/aaos/
MOVE + REDIRECT
```

```text
/start-here/
→ merge into homepage/domain journey
RETIRE + REDIRECT
```

## Step 5 — Build a redirect plan

Create:

```text
docs/redirect-map.md
```

Do not implement redirects yet.

List every legacy URL that should permanently redirect to a new URL.

Preserve SEO value.

## Step 6 — Identify gaps

Create:

```text
docs/content-gaps.md
```

Categorize missing content as:

### Migration gap

Content exists on the old site but has not yet been mapped.

### Corpus-supported gap

The corpus contains enough canonical information to create the needed page.

### New editorial gap

The site architecture needs content that neither the current site nor corpus adequately supports.

Do **not** invent the missing content.

Flag it for later drafting.

## Important distinction

The filesystem represents:

```text
Domain → Role → Support
```

The following should normally remain conceptual/metadata dimensions:

* maturity
* AAOS stage
* topic
* resource type
* outcome

Do not create routes such as:

```text
/education/teacher/experimenting/controls/apply/
```

## Final output

Do not migrate content during this pass.

Only create/update:

```text
docs/corpus-content-map.md
docs/current-site-inventory.md
docs/migration-map.md
docs/redirect-map.md
docs/content-gaps.md
```

At the end, provide a concise summary of:

1. number of current pages inventoried
2. number mapped to new routes
3. pages to merge
4. pages to retire
5. unresolved content gaps
6. terminology conflicts between the current site and corpus
7. any architecture issues discovered

Stop after completing this analysis.
