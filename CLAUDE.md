# CLAUDE.md — m-chastain.com Portfolio

## Project Overview
Personal portfolio site for M. Chastain Flournoy. React + React-Bootstrap, 
deployed at m-chastain.com. This is a living site — content and code evolve together.

## Architecture
- React (CRA), React-Bootstrap, React-Router v6
- Particle background via tsparticles
- PDF viewer via react-pdf
- Self-Care 8 Ball embedded as a nested app at /self-care-8-ball

## Key Files
- `src/components/Home/Home.js` — hero section
- `src/components/Home/Home2.js` — "What Excites Me" + social links
- `src/components/Home/Type.js` — typewriter strings
- `src/components/About/AboutCard.js` — JOURNEY prose card
- `src/components/About/Techstack.js` — skill icons
- `src/components/Projects/Projects.js` — project cards
- `src/components/Resume/ResumeNew.js` — resume viewer (PDF link placeholder)

## Content Authority
Content (copy, tone, wording) is drafted and approved in the Claude chat session.
Do not rewrite prose — implement exactly what is provided.
If copy is ambiguous, ask before assuming.

## CC Workflow Conventions
- Use parallel tool calls for independent file edits (e.g. AboutCard + Type.js 
  can be done simultaneously — they don't touch each other)
- Use TodoWrite at session start to track open items
- Use git hooks (pre-commit) to catch lint errors before they land
- Batch related changes: content updates to one page = one commit
- Commit messages: `feat:`, `content:`, `fix:`, `style:` prefixes

## Do Not Touch
- Hubert the octopus CSS (src/style.css octopus section) — intentional, leave it
- Any copy not yet approved in Claude chat
- Resume PDF link is a placeholder — do not touch until asset is provided
## Open Issues (track in todo)
- Resume PDF link is a placeholder — do not touch until asset is provided
