# AI-Augmented.ai Pure Static Strawman

This repository contains only static website files.

There is:
- no `src/`
- no static-site generator requirement
- no runtime server logic
- no client-side router

Every canonical route is represented by a physical `index.html` file.

## Core public hierarchy

**Domain → Role → Support**

Maturity and AAOS remain global framework concepts and metadata, not URL hierarchy.

## Maintenance

Codex can migrate the current site into this structure by editing the static HTML files directly and reusing the shared CSS/JS assets.

The `/docs/` directory contains maintenance guidance and is not intended to be published as public site content.
