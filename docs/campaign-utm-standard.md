# AI-Augmented Campaign UTM Standard

Use the same parameter names on every campaign link so traffic and conversion events can be compared across channels. Keep values lowercase, use hyphens instead of spaces, and do not put personal information in a URL.

## Parameters

- `utm_source`: the distribution channel, such as `amazon`, `linkedin`, `meta`, `podcast`, `hootsuite`, `speaking-qr`, `newsletter`, or `paidar`.
- `utm_medium`: the delivery type, such as `referral`, `organic-social`, `paid-social`, `podcast`, `email`, `qr`, or `book`.
- `utm_campaign`: the campaign or promotion, such as `ai-augmented-series-2026` or `starter-kit-2026`.
- `utm_content`: the specific placement or creative, such as `book-description`, `speaker-bio`, `episode-show-notes`, or `homepage-cta`.
- `utm_term`: optional; use only for paid search or a deliberate audience/keyword distinction.

## Examples

```text
https://ai-augmented.ai/books/?utm_source=amazon&utm_medium=referral&utm_campaign=ai-augmented-series-2026&utm_content=book-description
https://ai-augmented.ai/starter-kit/?utm_source=linkedin&utm_medium=organic-social&utm_campaign=starter-kit-2026&utm_content=founder-post
https://ai-augmented.ai/assessment/?utm_source=meta&utm_medium=paid-social&utm_campaign=assessment-2026&utm_content=role-audience-a
https://ai-augmented.ai/books/?utm_source=podcast&utm_medium=podcast&utm_campaign=ai-augmented-series-2026&utm_content=episode-12-show-notes
https://ai-augmented.ai/starter-kit/?utm_source=hootsuite&utm_medium=organic-social&utm_campaign=starter-kit-2026&utm_content=week-1
https://ai-augmented.ai/assessment/?utm_source=speaking-qr&utm_medium=qr&utm_campaign=conference-2026&utm_content=closing-slide
https://paidar.ai/assessment/individual/free/?utm_source=ai-augmented&utm_medium=referral&utm_campaign=assessment-2026&utm_content=individual-free
https://paidar.ai/assessment/team/free/?utm_source=ai-augmented&utm_medium=referral&utm_campaign=assessment-2026&utm_content=team-free
https://paidar.ai/assessment/organization/free/?utm_source=ai-augmented&utm_medium=referral&utm_campaign=assessment-2026&utm_content=organization-free
```

The site preserves `utm_*` values on its vendor-neutral analytics events. At minimum, review `book_view`, `book_buy_click`, `assessment_start`, `assessment_complete`, `starter_kit_download`, `email_signup`, and `paidar_click` by source and campaign.
