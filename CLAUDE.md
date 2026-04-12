# CLAUDE.md — m-chastain.com Portfolio

## Project Overview
Personal portfolio site for M. Chastain Flournoy. React + React-Bootstrap,
deployed at m-chastain.com. Living site — content and code evolve together.

## Owner
M. Chastain Flournoy (they/she). Senior Business Technology Analyst and QA 
lead. Content authority lives in the Claude chat session, not here.

## Tech Stack
- React (CRA), React-Bootstrap, React-Router v6
- tsparticles (particle background)
- react-pdf (resume viewer)
- Self-Care 8 Ball nested app at /self-care-8-ball

## Key Files
- `src/components/Home/Home.js` — hero
- `src/components/Home/Home2.js` — What Excites Me + social links
- `src/components/Home/Type.js` — typewriter strings
- `src/components/About/AboutCard.js` — JOURNEY prose
- `src/components/About/Techstack.js` — skill icons
- `src/components/About/Toolstack.js` — tool icons
- `src/components/Projects/Projects.js` — project cards
- `src/components/Resume/ResumeNew.js` — resume viewer (PDF placeholder)

## Content Rules
- All copy is drafted and approved in Claude chat. Do not rewrite prose.
- If copy is ambiguous, ask before assuming.
- Resume PDF link is a placeholder. Do not touch until asset provided.

## Do Not Touch
- Hubert the octopus CSS — intentional, leave it alone
- Any unapproved copy

## CC Workflow
- Parallel tool calls for independent file edits
- TodoWrite at session start
- Pre-commit lint hook to catch errors before they land
- Batch related changes into single commits
- Commit prefixes: `feat:` `content:` `fix:` `style:`

## Commit Convention
content: — copy changes
feat: — new functionality  
fix: — bug fixes
style: — css/layout only, no logic changes

## Testing
- Playwright for UI/e2e tests
- Test files live in `tests/`
- Run: `npx playwright test`
- Install: `npm init playwright@latest`
