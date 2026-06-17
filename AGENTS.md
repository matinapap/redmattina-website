# RedMattina Website Agent Guide

This file is the source of truth for coding agents working in this repository.

## Project Overview

- Framework: Next.js App Router with TypeScript.
- Styling: Tailwind CSS for utility classes plus CSS Modules for route/feature-specific layout.
- Package manager: npm.
- Main purpose: RedMattina portfolio site with a responsive home flipbook and artwork gallery.

## Commands

- Install dependencies: `npm install`
- Start local dev server: `npm run dev`
- Production build: `npm run build`
- Lint: `npm run lint`

## Architecture

- `src/app`: route segments, route layouts, route-level CSS Modules, and metadata.
- `src/components/layout`: shared page chrome such as `Header` and `Footer`.
- `src/components/portfolio`: reusable portfolio UI components.
- `src/features/flipbook`: the interactive sketchbook flipbook feature.
- `src/data`: content/config that should be reused across pages and components.
- `public`: static image/icon assets served by Next.js.

Keep `src/app` focused on routing. Move reusable UI into `src/components`, feature-specific client components into `src/features`, and shared content into `src/data`.

## Code Style

- Prefer Server Components by default. Add `"use client"` only for components that need browser APIs, state, refs, or client-only libraries.
- Keep route pages thin: import data and compose components instead of defining content arrays in route files.
- Use the `@/` path alias for imports from `src`.
- Use `next/image` for rendered images when practical, with meaningful `alt`, known `width`/`height`, and `sizes` for responsive images.
- Keep CSS Modules near the route or feature that owns the layout behavior.
- Do not duplicate artwork, navigation, social-link, or sketchbook data outside `src/data`.

## Flipbook Notes

- The home flipbook uses `react-pageflip`, backed by `page-flip`.
- Page dimensions are based on a single page: `754 x 1124`, half of the primary `1508 x 1124` spread image.
- Keep the home page first viewport free of vertical scroll unless the user explicitly requests otherwise.

## Git And Safety

- The worktree may already contain user changes. Do not revert unrelated changes.
- Avoid destructive git commands unless the user explicitly asks for them.
- Before finishing code work, run `npm run build` and `npm run lint` when feasible.
