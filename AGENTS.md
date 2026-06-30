# Agent Instructions (iJournel)

Welcome to the iJournel project. You are operating as **Antigravity (agy)**.

## 1. Project Overview

- **Name**: iJournel
- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 (PostCSS plugin)
- **Animation**: motion/react (Framer Motion)
- **Environment**: Windows
- **Theme**: Brutalism-themed showcase design

**Context**: This is a Next.js 16 (App Router) project with a brutalism-themed showcase design. The main content is an internet journal (iJournel) which consists of an 'About' page with a lobby section, and a 'Logs' page where blogs are published.

## 2. Key Commands

```bash
npm run dev      # Dev server on :3000
npm run build    # Production build
npm run lint     # ESLint
```

## 3. Core Design Rules (Non-Negotiable)

### Typography
- **No inline font sizes**: Do not apply font sizes inline or within individual components.
- **Global scales only**: All typography scales (headings, font-size, body text, captions, labels, etc.) are centrally defined in `globals.css`.
- **Use tokens**: Use the predefined typography utility classes and design tokens exclusively. Any new font size requirements must be added to the global typography system rather than implemented locally.

### Layout & Scrolling
- **Fixed viewport**: The application is a fixed, single-screen experience. Viewport height must remain within `100vh` at all times.
- **No global scrolling**: Global page scrolling is disabled. Avoid layouts that introduce vertical or horizontal overflow.
- **Responsive fit**: Components must fit within the available viewport space using responsive sizing and layout techniques.
- **Hidden scrollbars**: The browser scrollbar must remain hidden throughout the application. Scrollable regions are permitted only when explicitly approved as part of the design specification.

## 4. File Structure

```text
app/
  about/               — About page route (currently empty placeholder)
  work/                — Work portfolio page route (currently empty placeholder)
  globals.css          — Tailwind CSS v4 setup, design tokens, custom font faces
  layout.tsx           — Root layout wrapping application with Geist fonts
  page.tsx             — Homepage with brutalist grid showcase & motion animations

components/            — Modular React components
  forms/               — Reusable input and form handling components
  layout/              — Global layout elements (header, footer)
  sections/            — Page-level blocks (hero grids, info cards)
  ui/                  — Atomic design system elements (buttons, badges)

public/assets/
  fonts/               — Custom web fonts (Thick Thinks, Space Grotesk)
  images/              — Static showcase images (brutalist1.png, hero-bg.webp)
```

## 5. Agent Modes

Adapt your approach based on the intent of the prompt:

### 🛠 ENGINEER MODE
**Triggers**: "add", "build", "implement", "create", "refactor"
- Review this document and the relevant component files first.
- Strict adherence to the design rules (Typography, Layout, Viewport constraints) before touching visual components.
- Focus on clean architecture and maintainability.

### 🐛 DEBUG MODE
**Triggers**: "bug", "broken", "fix", "not working", "error"
- Act as a senior-level tester with deep expertise in identifying and resolving issues.
- Investigate systematically (logs, network, component state).

### 🔍 EXPLORE MODE
**Triggers**: "how does X work", "explain", "understand", "read"
- Read files, do not modify anything.
- Reference exact file paths and line numbers in your explanations.

## 6. Available Agent Skills

You have specialized skill files available in `.agents/skills/`. When performing tasks that fall into these domains, refer to these documents for detailed heuristics:

- **Code Critic** (`.agents/skills/code-critic/SKILL.md`): Rigorous engineering reviews, architecture evaluation, and long-term quality checks.
- **Senior Frontend Engineer** (`.agents/skills/senior-frontend-engineer/SKILL.md`): Architecting UI, component composition, state management, and production-quality Next.js/React development.
- **Motion UX Designer** (`.agents/skills/motion-ux-designer/SKILL.md`): Using `motion/react` to design meaningful, cohesive, and performant animations/interactions.
- **Frontend Performance Engineer** (`.agents/skills/frontend-performance-engineer/SKILL.md`): Profiling rendering performance, Core Web Vitals, bundle size, and resolving layout shifts.
