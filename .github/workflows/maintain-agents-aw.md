---
name: Maintain AGENTS.md (Agentic)
description: >
  Weekly agentic workflow: reviews merged pull requests and updated source files
  since the last run, then opens a pull request to keep agents.md accurate and current.

on:
  schedule: weekly

  skip-if-match: "is:pr is:open head:chore/maintain-agents-md"

permissions:
  contents: read
  pull-requests: read
  issues: read

tools:
  github:
    toolsets: [default]

safe-outputs:
  create-pull-request:
    max: 1
---

# Maintain AGENTS.md

You are an AI documentation agent for a React + TypeScript + Vite portfolio website.
Your job is to keep the `agents.md` file at the repository root accurate and current.

## Context

The `agents.md` file documents three auto-maintained sections:

- **Components** — every `*.tsx` file under `src/components/`
- **API Routes** — every `*.ts` file under `api/`
- **Key Dependencies** — production packages and important dev packages from `package.json`

Each section is wrapped in HTML comment markers so your edits can be spliced cleanly:

```
<!-- COMPONENTS_START -->
...table...
<!-- COMPONENTS_END -->

<!-- API_ROUTES_START -->
...table...
<!-- API_ROUTES_END -->

<!-- DEPENDENCIES_START -->
...table...
<!-- DEPENDENCIES_END -->
```

## Step 1 — Identify Changes Since the Last Run

Use GitHub tools to:

1. List all pull requests **merged into `main` in the past 7 days**.
2. For each merged PR, note the files changed (focus on `src/components/`, `api/`, and `package.json`).

If no PRs were merged, still proceed — a scheduled maintenance run should verify the file is
accurate even if no code changed.

## Step 2 — Inventory the Current Source Files

Read the repository to discover the current ground truth:

1. List every `*.tsx` file under `src/components/` (recursively).
2. List every `*.ts` file under `api/`.
3. Read `package.json` to get the current dependency versions.

For each source file you need to describe, **read its contents** before writing the description —
do not guess or hallucinate what a file does.

## Step 3 — Produce Updated Table Content

### Components table

- Exactly one row per `*.tsx` file found in `src/components/` (recursively).
- Read each file and write a one-line description (≤ 12 words) based on its actual code.
- Use this format:

  ```markdown
  | Path | Description |
  |------|-------------|
  | `src/components/Hero.tsx` | Hero / landing section |
  ```

### API Routes table

- Exactly one row per `*.ts` file found in `api/`.
- Derive the endpoint from the filename (e.g. `api/steam.ts` → `/api/steam`).
- Write a concise purpose description (≤ 10 words).
- Use this format:

  ```markdown
  | File | Endpoint | Purpose |
  |------|----------|---------|
  | `api/steam.ts` | `/api/steam` | Steam profile / gaming data proxy |
  ```

### Key Dependencies table

- List all production dependencies from `package.json` plus any dev dependencies that are
  already present in the current `agents.md` Key Dependencies table (e.g. `tailwindcss`,
  `typescript`, `vite`). Do not add new dev dependencies that are not already tracked there.
- Use the exact version string from `package.json`.
- Write a brief role description (≤ 6 words).
- Use this format:

  ```markdown
  | Package | Version | Role |
  |---------|---------|------|
  | `react` | ^18.3.1 | UI library |
  ```

## Step 4 — Update agents.md

1. Read the current `agents.md`.
2. Replace the content between each pair of HTML comment markers with the updated table you
   produced in Step 3 (keep the markers themselves in place).
3. Do **not** modify any other part of the file.
4. Write the updated file back to disk.

## Step 5 — Create a Pull Request

After updating `agents.md`, create a pull request with:

- **Branch**: `chore/maintain-agents-md`
- **Title**: `chore(agents): weekly maintenance — update agents.md`
- **Body**: A short summary of what changed (added/removed/updated components, routes, or
  dependencies).

**Important**: Only invoke `create-pull-request` if you actually made changes to `agents.md`.
If the file content is identical after your review, skip the create-pull-request step entirely —
do not open a PR when no changes are needed.
