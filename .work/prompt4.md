# Task: Finalize the AI-Augmented.ai Static Migration

Business and Education are now populated.

Perform the final migration and launch-readiness pass.

## 1. Legacy URL redirects

Using:

```text
docs/redirect-map.md
```

implement permanent redirects for all migrated legacy routes.

Examples may include:

```text
/lens/individual/
/lens/team-leader/
/lens/organization-leader/
/lens/student/
/lens/teacher/
/lens/education-administrator/
/aaos/
/start-here/
/contexts/
/learn-apply-augment/
```

Use the hosting platform's supported static redirect mechanism.

Do not use client-side JavaScript redirects if a platform-level 301 is available.

## 2. Canonical audit

Recursively inspect every HTML page.

Every canonical must use:

```text
https://ai-augmented.ai/
```

Never:

```text
https://aiaugmented.ai/
```

Verify no stale canonical values remain.

## 3. Navigation audit

Ensure one consistent:

* domain selector
* global header
* footer

across every page.

No legacy template variants.

## 4. Sitemap

Regenerate:

```text
sitemap.xml
```

Include all canonical indexable static pages.

Do not include:

* redirects
* duplicate legacy pages
* temporary files
* internal docs

## 5. Robots

Verify:

```text
robots.txt
```

points to the correct sitemap and does not block canonical pages.

## 6. SEO audit

For every page verify:

* unique title
* meaningful meta description
* one H1
* correct canonical
* useful internal links
* breadcrumbs where appropriate
* meaningful text in initial HTML
* image alt text
* OpenGraph metadata

## 7. AEO audit

Ensure major pages answer likely questions directly.

Examples:

### Domain

```text
What does AI-Augmented mean in education?
```

### Role

```text
How should teachers use AI?
```

### Framework

```text
What is AAOS?
```

```text
What is AI-Augmented Maturity?
```

### Practice

```text
How can a teacher redesign an assignment for AI?
```

Use concise explanatory passages rather than keyword stuffing.

## 8. Structured data

Use appropriate JSON-LD where justified.

Potential types:

* WebSite
* Organization
* Person
* WebPage
* Article
* BreadcrumbList
* Book
* FAQPage only when the page genuinely contains FAQ content

Do not misuse schema for rankings.

## 9. Social previews

Ensure OpenGraph images use broadly supported formats.

Prefer:

```text
PNG
JPG
```

Do not rely only on SVG social preview images.

## 10. Asset audit

Fix:

* broken images
* wrong book covers
* duplicate placeholder images
* missing alt text
* oversized files
* bad paths

## 11. Proof audit

Review:

* testimonials
* reach numbers
* institution counts
* podcast numbers
* subscribers
* adoption claims

Do not invent or inflate proof.

If a claim cannot be supported from existing sources, either qualify it or remove it.

## 12. Legal/privacy

Verify newsletter and any forms have:

* privacy page
* terms where needed
* appropriate disclosure
* working links

Do not leave language saying policies will be added later.

## 13. Readability audit

Check every major landing page for:

* excessive headings
* excessive cards
* repeated arguments
* paragraphs that are too wide
* abrupt section transitions
* duplicate CTAs

Use the four approved layouts.

## 14. Mobile audit

Test representative pages at:

```text
320px
375px
390px
430px
768px
1024px
desktop
```

At minimum inspect:

```text
/
/business/
/business/team/
/business/team/apply/
/education/
/education/student/
/education/teacher/
/education/leader/
/education/teacher/apply/
/framework/
/framework/aaos/
/practice/
/assessment/
```

## 15. Accessibility

Check:

* keyboard navigation
* visible focus
* semantic headings
* landmark elements
* alt text
* form labels
* link names
* contrast
* tap targets

Target WCAG 2.2 AA where practical.

## 16. Corpus conformance audit

Before declaring completion, compare all framework terminology against:

```text
C:\Users\darre\IdeaProjects\paidar-press\aaos-corpus\canon
```

Confirm:

* no AAOS stage drift
* no maturity stage drift
* no invented canonical concepts
* human responsibility language remains consistent
* corpus terminology is preserved where authoritative

Create:

```text
docs/corpus-conformance-report.md
```

Document any remaining deliberate deviations.

## 17. Final journey tests

Test:

### First-time visitor

```text
Homepage
→ domain
→ role
→ assessment
→ support
```

### Student

```text
Education
→ Student
→ Learn or Apply
```

### Teacher

```text
Education
→ Teacher
→ assessment
→ Apply
→ practice example
```

### Education leader

```text
Education
→ Leader
→ assessment
→ Augment
→ appropriate Paidar/DrDarren route
```

### Business organization

```text
Business
→ Organization
→ Apply/Augment
→ implementation path
```

## Completion report

At the end provide:

1. page count
2. redirect count
3. unresolved broken links
4. unresolved content gaps
5. SEO/AEO issues remaining
6. accessibility issues remaining
7. corpus conformance issues
8. launch blockers

Do not call the migration complete if launch blockers remain.
