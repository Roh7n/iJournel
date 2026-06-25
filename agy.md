# Antigravity (agy)

# READ THIS FIRST. Every agent session starts here.

## Project Overview

- **Name**: iJournel
- **Framework**: Next.js
- **Environment**: Windows

## Agent Info

- **Agent Name**: Antigravity (`agy`)
- **Status**: Active and ready to build

## Mini Context

This is a Next.js 16 (App Router) project with a brutalism themed showcase design oriented project

## Key Commands

```bash
npm run dev      # Dev server on :3000
npm run build    # Production build
npm run lint     # ESLint
```

# Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (PostCSS plugin)
- **motion/react** library for animations

## Files Index

```
app/
  about/               — About page route (currently empty placeholder)
  work/                — Work portfolio page route (currently empty placeholder)
  globals.css          — Tailwind CSS v4 setup, design tokens, custom font faces
  layout.tsx           — Root layout wrapping application with Geist fonts
  page.tsx             — Homepage with brutalist grid showcase & motion animations

components/            — Modular React components (currently empty directories)
  forms/               — Reusable input and form handling components
  layout/              — Global layout elements (header, footer)
  sections/            — Page-level blocks (hero grids, info cards)
  ui/                  — Atomic design system elements (buttons, badges)

public/assets/
  fonts/               — Custom web fonts (Thick Thinks, Space Grotesk)
  images/              — Static showcase images (brutalist1.png, hero-bg.webp)

next.config.ts         — Next.js build and runtime configuration
package.json           — Project manifest, script commands & dependency versions
tsconfig.json          — TypeScript compiler configuration
agy.md                 — Workspace helper and documentation file (this file)

```

## Design Rules (Non-Negotiable)

### Typography

- Do not apply font sizes inline or within individual components.
- All typography scales (headings, font-size, body text, captions, labels, etc.) are defined centrally in `globals.css`.
- Use the predefined typography utility classes and design tokens exclusively.
- Any new font size requirements must be added to the global typography system rather than implemented locally.

### Layout & Scrolling

- The application is designed as a fixed, single-screen experience.
- The viewport height must remain within `100vh` at all times.
- Global page scrolling is disabled.
- Avoid layouts that introduce vertical or horizontal overflow.
- Components must be designed to fit within the available viewport space using responsive sizing and layout techniques.
- Scrollable regions are only permitted when explicitly approved as part of the design specification.
- The browser scrollbar must remain hidden throughout the application.

## Agent Modes

### ENGINEER MODE

Trigger: "add", "build", "implement", "create"

- Read `ARCHITECTURE.md` → relevant component files first
- Check design rules above before touching visual components

### DEBUG MODE

Trigger: "bug", "broken", "fix", "not working"

- you are a senior level tester with deep expertise in coding and identifying issues, youre job is to find and fix issues

### EXPLORE MODE

Trigger: "how does X work", "explain", "understand"

- Read files, do not modify anything
- Reference exact file paths and line numbers in your answer
