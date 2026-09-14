# AI-Augmented SEO and AEO guidelines

## Page basics

Every public HTML page should have:

- One specific, readable `<title>`.
- A useful meta description that describes the page's answer or outcome.
- One canonical URL using HTTPS and the non-`www` domain.
- Open Graph title, description, image, and URL.
- One H1 that states the page topic.
- Descriptive internal links and meaningful image alt text.

## Answer-oriented content

Lead with a direct answer, then provide context and practical next steps. Use descriptive H2 and H3 headings. Preserve visible FAQ answers when they help visitors understand the framework.

## Structured data

Use JSON-LD only when it describes visible page content. Use WebPage, CollectionPage, BreadcrumbList, Article, Book, Person, FAQPage, Organization, and WebSite where appropriate. Do not use Course, Event, Product, or Review schema without matching content and facts.

## Technical discovery

Keep `robots.txt` permissive for production content and declare the sitemap. Keep the sitemap synchronized with canonical public pages. Run `npm.cmd run check:site` and `npm.cmd run check:links` before publishing.

## Claims

Do not invent adoption numbers, testimonials, customer names, research citations, or performance claims. Mark uncertain claims for verification before publication.
