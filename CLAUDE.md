# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build to `/dist` |
| `npm run lint` | ESLint (flat config v9) on all files |
| `npm run preview` | Preview production build locally |

No testing framework is configured.

## Stack

React 19 + Vite 8 + Tailwind CSS 3 + Framer Motion. Pure JSX (no TypeScript compiler). Icons via lucide-react. Deploy target: Vercel.

ESLint flat config ignores `motion` and `ALL_CAPS` variables (`varsIgnorePattern`). Browser globals are set for component files, Node globals only for `vite.config.js`.

## Architecture

### Token-Driven Design System

`src/theme/tokens.js` is the **single source of truth** for colors, fonts, and layout constants. The flow:

1. `tailwind.config.js` imports `tailwindThemeExtend` from tokens → generates utility classes (`text-fg-muted`, `bg-accent`, `border-border-subtle`)
2. `ThemeProvider` (wraps `<App />` in `main.jsx`) calls `applyDocumentCssVars(theme)` → writes `--color-*` CSS vars to `:root`
3. `index.css` uses `var(--color-*, fallback)` for body, scrollbar, focus rings
4. `useTheme()` hook exposes tokens in JS for animation values or non-CSS contexts

Use Tailwind classes for styles. Only use `useTheme()` when you need the value in JavaScript. To add a token: edit `tokens.js` only — Tailwind picks it up automatically.

### Motion Presets

`src/theme/motion.js` centralizes Framer Motion durations, stagger configs, springs, and viewport triggers. Components import presets — never hardcode animation values. `prefers-reduced-motion` is respected via `useReducedMotion()` throughout.

### Data Layer

Content lives in `src/data/*.js` (projects, experience, stack). Project objects **must** pass through `normalizePortfolioProject()` which:
- Maps CMS alias `featured` → `highlight`
- Defaults `status` to `'online'`
- No inline Tailwind classes in data files — only text, URLs, and flags

### Component Conventions

- Semantic Tailwind classes from theme tokens (e.g., `text-fg-muted`, not `text-white/50`)
- Section layout: use `theme.layout.section` from tokens (`py-32 px-6 max-w-4xl mx-auto`)
- External links: `target="_blank" rel="noreferrer"`
- UI primitives in `src/components/ui/` (CtaLink, MagneticAnchor, TapIconLink, AnimatedNavLink)
- Single-page with smooth-scroll anchor navigation — no router

### Mockups

`src/mokups/` is for experiments that intentionally break design system rules. Nothing there is published until integrated into `components/` with proper tokens.

## Key Files

| File | Role |
|------|------|
| `src/theme/tokens.js` | Design tokens (colors, fonts, layout) — edit here first |
| `src/theme/motion.js` | Framer Motion presets (durations, stagger, springs) |
| `src/data/projects.js` | Project content (main + more projects) |
| `src/data/normalizePortfolioProject.js` | CMS field normalization |
| `docs/design-system.md` | Full design system documentation |
| `vite.config.js` | Custom `html-site-url` plugin replaces `__SITE_URL__` from `VITE_SITE_URL` env |
| `index.html` | SEO metadata, Open Graph, JSON-LD structured data |
