# AOPA Digital Prototype

This is a proof-of-concept for a modern editorial publishing platform built on a performant, component-driven Jamstack architecture. It combines structured design, headless content, and scalable frontend tooling to support rich, typography-driven storytelling.

## Tech Stack

### Content Layer
- **WordPress (Headless)** – Primary CMS
- **WPGraphQL** – GraphQL API for querying WP content
- **WPGraphQL ACF** – Adds support for Advanced Custom Fields in GraphQL
- **WPGraphQL Smart Cache** – Adds persisted queries and caching for performance

### Frontend
- **Astro** – Static site builder optimized for speed and partial hydration
- **Preact (via Astro Islands)** – Interactive components powered by Preact and Hooks
- **TypeScript / TSX** – Strictly typed components and logic
- **Tailwind CSS** – Utility-first styling with support for dark mode, prose styling, and design tokens
- **Design System** – Modular component system for layout, cards, typography, badges, etc.
- **Typography System** – Custom font families (Knockout, Mercury, Gotham), editorial prose classes, and layout scale

### Architecture
- **Jamstack** – Static-first architecture with decoupled frontend and CMS
- **Fully clientless** – No runtime backend, 100% static output (with optional hydration)
- **GraphQL-driven UI** – All content sourced via structured GraphQL queries

---

If you want a PDF or want to inline a diagram, let me know. Otherwise, you can drop this directly into the repo root or README.md.

Big Credit to ChatGPT and Copilot, prototyping visual and technical simultaneously is hard to do quickly. On my own it would've taken double the time.