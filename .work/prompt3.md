# Task: Populate Business and Education

The shared global foundation is now complete.

Populate the two active domains:

```text
/business/
/education/
```

Use:

1. canonical AAOS corpus
2. current ai-augmented.ai content
3. migration map
4. approved static layouts

in that order of authority.

Canonical corpus:

```text
C:\Users\darre\IdeaProjects\paidar-press\aaos-corpus\canon
```

## Domain hierarchy

### Business

```text
/business/
├── individual/
│   ├── learn/
│   ├── apply/
│   └── augment/
├── team/
│   ├── learn/
│   ├── apply/
│   └── augment/
└── organization/
    ├── learn/
    ├── apply/
    └── augment/
```

### Education

```text
/education/
├── student/
│   ├── learn/
│   ├── apply/
│   └── augment/
├── teacher/
│   ├── learn/
│   ├── apply/
│   └── augment/
└── leader/
    ├── learn/
    ├── apply/
    └── augment/
```

## Role mapping

Map current content approximately as:

```text
Individual
→ /business/individual/
```

```text
Team Leader
→ /business/team/
```

```text
Organization Leader
→ /business/organization/
```

```text
Student
→ /education/student/
```

```text
Teacher
→ /education/teacher/
```

```text
Education Leader / Education Administrator
→ /education/leader/
```

Use the migration map as the final authority.

## Domain pages

Use the **Domain Landing layout**.

Each domain page should:

1. define what AI-Augmented means in that context
2. explain what is changing
3. present only the three relevant roles
4. show several concrete practice examples
5. briefly explain progression
6. introduce Learn / Apply / Augment
7. use contextual proof where supported
8. provide one clear next step

Do not expose roles from other domains.

## Role pages

Use the **Role Landing layout**.

Each should contain:

1. role-specific hero
2. narrative about what is changing
3. approximately three key capabilities
4. concrete practice examples
5. maturity/assessment entry
6. short AAOS transition
7. Learn / Apply / Augment
8. role-appropriate final CTA

Do not paste the same generic copy across roles.

Preserve strong existing role-specific content where available.

## Support pages

Use the **Support Landing layout**.

### Learn

Focus on:

* concepts
* explanations
* books
* articles
* podcasts
* guides
* examples

### Apply

Focus on:

* assessments
* templates
* workbooks
* playbooks
* workflow guides
* practical tools
* practice examples

### Augment

Focus on guided assistance.

Routing must respect the broader ecosystem:

#### Speaking / Darren-led keynote or signature workshop

Route to:

```text
drdarrenspeaks.com
```

#### Organizational implementation, assessments, advisory, governance, operating models, architecture

Route to:

```text
paidar.ai
```

Do not collapse all Augment traffic into one destination.

## Practice pages

Create or migrate concrete practice examples where source material supports them.

Prioritize examples across all six active roles.

Use the **Editorial / Practice layout**.

Practice page structure:

```text
Problem
Human Role
Where AI Helps
Where Human Judgment Stays
Workflow
AAOS Mapping
Common Failure Modes
What Good Looks Like
Next Step
```

Do not fabricate customer case studies.

Generic illustrative workflows are acceptable when clearly presented as examples and grounded in corpus/current-site material.

## Maturity

Do not create role-specific maturity directories.

Use the shared maturity model.

Role pages can interpret maturity in context.

## AAOS

Do not duplicate the AAOS framework physically into each domain.

Use global AAOS pages.

Domain pages may provide contextual examples.

## Content quality

Avoid current-site problems such as:

* repetitive paragraphs
* vertical slide-deck rhythm
* excessive cards
* generic CTAs
* organization-centric CTA on Student pages
* book-first CTA on Education Leader pages
* framework terminology overload

## Static requirement

Every page must be a real:

```text
index.html
```

No dynamically generated routes.

## SEO / AEO

Optimize pages for their actual audience.

Examples:

```text
AI-Augmented Teaching
AI-Augmented Learning for Students
AI-Augmented Teams
AI-Augmented Organizations
AI in Higher Education Leadership
```

Do not make all titles enterprise-oriented.

## Redirect preparation

Update:

```text
docs/redirect-map.md
```

with the final mappings from old lens URLs to new routes.

Do not remove legacy content until every redirected destination exists.

## Final output

At completion report:

* Business pages populated
* Education pages populated
* practice examples created/migrated
* content gaps remaining
* redirects required
* any corpus/current-site conflicts found

Do not populate Legal or Medical beyond their existing placeholders.
