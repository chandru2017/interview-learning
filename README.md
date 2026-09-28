# Frontend Interview Prep

## Project Overview

A production-style interview preparation dashboard for **Senior Frontend Engineers** and **Frontend Architects**. Practice questions by topic with structured answers, progress tracking, search, and dark mode.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- ESLint, Prettier, Husky, lint-staged, Commitlint
- pnpm

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
pnpm format:check
pnpm typecheck
```

## Features

- Sticky header with search, progress, and theme toggle
- Collapsible sidebar (desktop) + drawer (mobile)
- Topic question lists with status badges
- Question detail with 5 explanation sections
- Previous / Next navigation
- Progress persisted in `localStorage`
- Dark mode persisted in `localStorage`
- Accessibility: skip link, landmarks, labels, focus rings, keyboard search

## Routes

```text
/                         Dashboard
/[topic]                  Topic question list
/[topic]/[questionId]     Question detail
```

## Architecture

```text
src/
├── app/                 # App Router pages
├── components/          # Header, Sidebar, Question views, providers, ui
├── lib/data.ts          # Mock topics + questions
└── types/               # Shared TypeScript types
```
