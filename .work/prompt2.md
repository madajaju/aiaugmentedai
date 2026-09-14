# Task: Migrate the Shared AI-Augmented Site Foundation

Use the completed migration documents from Prompt 1.

Before changing content, reread:

```text
docs/corpus-content-map.md
docs/current-site-inventory.md
docs/migration-map.md
docs/content-gaps.md
docs/layout-templates.md
docs/static-seo-aeo-requirements.md
```

Also consult the canonical corpus whenever framework wording is required:

```text
C:\Users\darre\IdeaProjects\paidar-press\aaos-corpus\canon
```

## Goal

Populate the **global static-site foundation** before migrating domain-specific pages.

Do not work on Business/Education role content yet except where needed for links.

## 1. Shared site shell

Establish one consistent static shell across all pages.

Ensure every page uses consistent:

* domain selector
* primary navigation
* footer
* CSS
* typography
* content width
* cards
* buttons
* breadcrumbs
* spacing
* metadata patterns

Do not create multiple legacy-style header/footer variants.

## 2. Domain selector

Implement the persistent static navigation:

```text
AI-Augmented for:
Business | Education | Legal | Medical
```

Each option must be a normal static link.

Do not require JavaScript.

JavaScript may optionally remember a selected domain as progressive enhancement.

## 3. Global navigation

Use the approved global model:

```text
Movement
Framework
Practice
Resources
Assessment
About
```

Do not globally expose every role.

Roles belong inside domains.

## 4. Homepage

Rebuild the homepage using the approved readability rules.

The homepage should remain universal.

Its primary job is:

```text
Understand the movement
↓
Choose a domain
↓
Continue into a contextual journey
```

Do not turn the homepage into:

* an enterprise consulting page
* a book sales page
* a complete AAOS manual
* a giant resource directory

Keep the current core positioning:

```text
Expand human capability in the age of AI.
```

Use current-site content and corpus-supported concepts to populate the page.

Do not invent statistics or proof.

## 5. Movement

Populate:

```text
/movement/
```

Keep it focused on:

* why the movement exists
* what AI-Augmented means
* core beliefs
* who participates
* how people can engage

Remove internal operating-process material that does not belong on a public movement page.

## 6. Framework

Populate:

```text
/framework/
/framework/maturity/
/framework/maturity/*
/framework/aaos/
/framework/aaos/*
```

Use the corpus as the authority.

Canonical maturity:

```text
Aware
Exploring
Experimenting
Integrating
Leading
Augmenting
```

Canonical AAOS:

```text
Diagnose
Activate
Controls
Execute
Measure
Scale
```

Do not confuse maturity with AAOS.

Do not redefine AAOS.

Keep global framework pages domain-neutral, while including a small number of contextual examples where useful.

## 7. Practice

Populate:

```text
/practice/
```

This is the entry point for:

```text
AI-Augmented in Practice
```

Explain that practice pages demonstrate:

* the problem
* the human role
* where AI helps
* where human judgment remains
* the workflow
* relevant AAOS stages
* what good looks like

Do not create fake case studies.

Use examples from current content and corpus where supported.

## 8. Resources

Populate:

```text
/resources/
```

This should be a discoverable global resource directory.

Do not duplicate entire resources across domain pages.

Domain and role pages may link to resources contextually.

## 9. Assessment

Populate:

```text
/assessment/
```

Keep this as a global assessment entry point.

The user should be able to choose or arrive with:

* domain
* role

Do not make maturity part of URL hierarchy.

## 10. About

Rebuild:

```text
/about/
```

Focus on:

* why the movement exists
* what it believes
* who it serves
* who is behind it
* how to participate

Remove internal governance/process documentation from the public page.

## 11. Legal pages

Populate:

```text
/privacy/
/terms/
```

Use existing policy content if available.

If legally sufficient language does not exist in repository sources, create a clearly marked draft rather than pretending it has been legally reviewed.

## 12. SEO/AEO

Every page must have:

* static HTML
* unique title
* unique meta description
* canonical URL using `https://ai-augmented.ai`
* H1
* meaningful initial HTML content
* internal links
* OpenGraph metadata
* sitemap inclusion

Fix any old canonical references to:

```text
aiaugmented.ai
```

The correct domain is:

```text
ai-augmented.ai
```

## 13. Readability

Follow the agreed rules:

* 65–75 character prose measure
* fewer cards
* cards primarily for choices
* narrative transition between major sections
* approximately 6–8 major sections maximum on landing pages
* mobile-first
* one main decision per screen

## Final verification

Before stopping:

* validate internal links
* validate canonical URLs
* update sitemap
* ensure no required content depends on JavaScript
* confirm all changed files remain static HTML

Do not migrate domain role/support pages in this pass.

Stop after the global foundation is complete.
