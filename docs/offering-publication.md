# Permanent offering pages — website integration

The customer-facing offering identity and content are held in [`paidar-press/offering.ai-augmented`](https://github.com/paidar-press/offering.ai-augmented). Canonical `asset.json` records never receive public offering pages.

## Public pages

- Permanent route: `/o/<all colon-separated offering ID segments>/`.
- Example: `paidar:offering:ai-augmented-starter-kit` → `/o/paidar/offering/ai-augmented-starter-kit/`.
- Each registered offering or bundle has an overview page regardless of sales/fulfillment status.
- `/offerings/` is the generated offerings directory. The resources index links to it.
- Pages display the offering overview, audience, benefits (or an editorial placeholder), and a safe access state.
- `Buy now`, `Download now`, or `Book now` is only shown when the source `marketing.actions` explicitly identifies a verified, fulfillable destination.
- `marketing.relatedOfferingIds` only accepts other customer-facing offering IDs; canonical assets cannot be Related Resources.

## Synchronization

`.github/workflows/sync-offering-pages.yml` checks out the private offering repository, runs its `scripts/generate-offering-public-pages.js` into the `site/` directory, regenerates `site/sitemap.xml`, and opens a review PR. The `offering/create` publication workflow in `paidar-press/workflow.content` can also register these pages before Shopify fulfillment.

**Repository setup prerequisite:** configure the website repository's `OFFERINGS_REPO_TOKEN` secret with minimum read permission on the private `paidar-press/offering.ai-augmented` repository. Without the secret the cross-repository checkout may fail. Do not embed tokens in the generated pages.

A merged site PR still requires the site's normal deployment process. The GitHub commit is not proof the URL is live; verify public HTTP 200 URLs after deployment. Avoid assuming a verified CTA until an external purchase/download/booking path and fulfillment have been tested.

## Build checks

The website sync workflow checks that all generated offering pages are valid, regenerates the sitemap so each new canonical URL is discoverable, and runs site checks. The source catalog generator validates ID collisions, offering-only related references, and the required action metadata.

See [the offering page standard](https://github.com/paidar-press/offering.ai-augmented/blob/main/docs/standards/offering-public-pages.md) for the detailed content and routing contract.
