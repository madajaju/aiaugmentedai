# Domain asset lists

The 36 domain, category, and level pages contain a shared asset-list mount point. The site loads `assets/data/domain-assets.json` by default and selects the list for the current page using this key:

```text
domain/category/level
```

The JSON can be replaced during deployment, or an injected script can point the pages to another same-origin or CORS-enabled JSON file:

```html
<script>
  window.AI_AUGMENTED_ASSETS_URL = 'https://content.example.com/domain-assets.json';
</script>
```

The expected shape is nested by page context:

```json
{
  "business": {
    "team": {
      "apply": [
        {
          "title": "Team decision brief",
          "url": "/practice/business/team/decision-brief/",
          "description": "A reusable brief for making a consequential team decision."
        }
      ]
    }
  }
}
```

The loader also accepts a top-level `assets` object or flat context keys such as `business/team/apply`. Items with a missing title, URL, or safe HTTP(S) URL are skipped. An injected `window.AI_AUGMENTED_ASSETS` object may be used instead of fetching a URL.
