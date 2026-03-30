# Agents Guide — Portfolio Website

> **Note:** The *Components*, *API Routes*, and *Key Dependencies* sections below are auto-maintained by the [Maintain agents.md](.github/workflows/maintain-agents.yml) GitHub Actions workflow. Do **not** edit those sections manually — your changes will be overwritten on the next workflow run.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Repository Layout](#repository-layout)
3. [Components](#components)
4. [API Routes](#api-routes)
5. [Key Dependencies](#key-dependencies)
6. [Development Conventions](#development-conventions)
7. [Agent Instructions](#agent-instructions)

---

## Project Overview

A modern personal portfolio website built with **React 18 + TypeScript + Vite**. It showcases work experience (timeline), skills, projects, certifications, and a contact form. Animations are powered by **Framer Motion**; styling is done entirely with **Tailwind CSS** utility classes.

---

## Repository Layout

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── maintain-agents.yml   # Agentic workflow that keeps this file up-to-date
├── api/                          # Vercel serverless API routes
├── src/
│   ├── components/               # All UI components (see §Components)
│   ├── data.ts                   # Static data (experience, projects, skills, certs)
│   ├── types.ts                  # Shared TypeScript interfaces
│   ├── utils/                    # Utility helpers
│   ├── App.tsx                   # Root component / page assembly
│   └── main.tsx                  # React entry point
├── agents.md                     # This file
├── GEMINI.md                     # AI coding-assistant context file
├── package.json
└── vite.config.ts
```

---

<!-- COMPONENTS_START -->
## Components

| Path | Description |
|------|-------------|
| `src/components/AnimatedBackground.tsx` | Animated canvas/WebGL background |
| `src/components/BorderAnimation.tsx` | Decorative animated border effect |
| `src/components/Contact.tsx` | Contact section with form |
| `src/components/Hero.tsx` | Hero / landing section |
| `src/components/LiveStatus.tsx` | Real-time availability badge |
| `src/components/Projects.tsx` | Projects showcase section |
| `src/components/ScrollToTop.tsx` | Floating scroll-to-top button |
| `src/components/Skills.tsx` | Skills overview section |
| `src/components/certifications/certificateCard.tsx` | Individual certification card |
| `src/components/certifications/certifications.tsx` | Certifications section |
| `src/components/creativeTextAnimation.tsx` | Typewriter / creative text effect |
| `src/components/floatingNavbar.tsx` | Floating navigation bar |
| `src/components/footer.tsx` | Page footer |
| `src/components/skills/gradeIcon.tsx` | Skill proficiency icon |
| `src/components/skills/progressBar.tsx` | Animated skill progress bar |
| `src/components/skills/skillCategory.tsx` | Skill category group |
| `src/components/skills/skillItem.tsx` | Individual skill item |
| `src/components/terminal/TerminalLine.tsx` | Single line in terminal UI |
| `src/components/terminal/TerminalWindow.tsx` | Terminal-style card component |
| `src/components/timeline/Timeline.tsx` | Work experience timeline |
| `src/components/timeline/TimelineDot.tsx` | Timeline connector dot |
| `src/components/timeline/TimelineItem.tsx` | Single timeline entry |
| `src/components/timeline/TimelineLine.tsx` | Connecting line between entries |
| `src/components/timeline/browserstackLogo.tsx` | BrowserStack company logo |
| `src/components/timeline/talkdeskLogo.tsx` | Talkdesk company logo |
| `src/components/timeline/twilioLogo.tsx` | Twilio company logo |
| `src/components/ui/Button.tsx` | Reusable button component |
| `src/components/ui/HighlightedText.tsx` | Highlighted / accented text span |
| `src/components/ui/badge.tsx` | Badge / pill component (shadcn) |
| `src/components/ui/card.tsx` | Card component (shadcn) |
| `src/components/ui/shineOverlay.tsx` | Shine hover overlay effect |
| `src/components/ui/text-effect.tsx` | Text reveal animation |
| `src/components/ui/text-shimmer.tsx` | Shimmer text animation |
<!-- COMPONENTS_END -->

---

<!-- API_ROUTES_START -->
## API Routes

| File | Endpoint | Purpose |
|------|----------|---------|
| `api/anime.ts` | `/api/anime` | Anime-related data proxy |
| `api/steam.ts` | `/api/steam` | Steam profile / gaming data proxy |
<!-- API_ROUTES_END -->

---

<!-- DEPENDENCIES_START -->
## Key Dependencies

| Package | Version | Role |
|---------|---------|------|
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | React DOM renderer |
| `framer-motion` | ^11.15.0 | Animations |
| `tailwindcss` | ^3.4.17 | Utility-first CSS |
| `vite` | ^5.4.2 | Build tool & dev server |
| `typescript` | ^5.5.3 | Type safety |
| `@react-three/fiber` | ^8.17.10 | React renderer for Three.js |
| `@react-three/drei` | ^9.120.4 | Three.js helpers |
| `lucide-react` | ^0.344.0 | Icon library |
| `react-icons` | ^5.4.0 | Additional icons |
| `react-intersection-observer` | ^9.8.1 | Scroll-triggered visibility |
| `styled-components` | ^6.1.13 | CSS-in-JS (legacy use) |
| `@vercel/analytics` | ^1.4.1 | Analytics |
<!-- DEPENDENCIES_END -->

---

## Development Conventions

- **Styling:** Tailwind CSS utility classes only — avoid custom CSS files unless component-scoped (`.module.css`).
- **Components:** One component per file; place in `src/components/` under the appropriate sub-folder.
- **Types:** Shared TypeScript interfaces live in `src/types.ts`; local interfaces stay in their component file.
- **Data:** All static content (experience, projects, skills, certifications) is centralised in `src/data.ts`.
- **Animations:** Use Framer Motion (`motion.*` components + `variants`) — avoid raw CSS transitions for interactive elements.
- **Naming:** PascalCase for component files; camelCase for utilities and hooks.
- **No default exports from barrel files** — import directly from the component file.

---

## Agent Instructions

The following guidance is intended for AI coding agents (GitHub Copilot, Gemini, Claude, etc.) working in this repository.

### Goals

- Preserve the existing visual design and animation style.
- Keep all user-facing text inside `src/data.ts` — do **not** hard-code strings inside components.
- Every new component must be fully typed with TypeScript (no `any`).
- New UI primitives should be placed in `src/components/ui/`.

### Adding a New Section

1. Create a new component file in `src/components/`.
2. Add the corresponding data shape to `src/types.ts` and data to `src/data.ts`.
3. Import and render it in `src/App.tsx` in the logical visual order.
4. Animate entrance with a `motion.div` + `viewport={{ once: true }}` so it only triggers once.

### Modifying Styles

- Prefer composing existing Tailwind classes.
- Dark/light mode is handled via the `dark:` variant — always provide both variants for colour-sensitive properties.

### Running Locally

```bash
npm install       # install deps
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build → dist/
npm run lint      # ESLint check
```

### Workflow Automation

The [maintain-agents.yml](.github/workflows/maintain-agents.yml) workflow keeps this file accurate by:

- Scanning `src/components/**/*.tsx` and regenerating the **Components** table.
- Reading `api/*.ts` and regenerating the **API Routes** table.
- Parsing `package.json` and regenerating the **Key Dependencies** table.

It runs on every push to `main` that touches `src/components/**`, `api/`, or `package.json`, and also on a weekly schedule. The workflow authenticates with `COPILOT_GITHUB_TOKEN` and calls the **GitHub Models API** (`gpt-4o-mini`) to read actual source files and generate accurate descriptions — no hardcoded lookup tables. If anything drifts, it auto-commits directly on `main`.
