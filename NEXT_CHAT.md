# Handoff for the next chat

Written 2026-11-02. Read this first, then `PROJECT_NOTES.md` for older decisions. Where they disagree, this file wins.

## The goal

The user is studying for ACCA FA (F3). This folder is their study website, built from `Kaplan Study Text.pdf` and `Kaplan Exam Kit.pdf`. It runs locally from `file://` and may go public later.

## Where things stand

- All 20 chapters are built. Every Exam Kit question 1-550 is rewritten exactly once (a test checks this).
- 16 Section B case questions (Kit MTQ 1-16) are in `data/section-b.js`: 15 marks each, tasks tagged by chapter.
- Mock exam at `#/exam`: 35 two-mark questions spread across chapters by size, plus one single-company or cash-flow case and one group case. 2-hour timer, marks-based result with a chapter breakdown, kept in localStorage (`acca-fa-exam`) so it survives reloads.
- Redesign done. Name "Balanced". Two themes saved in `acca-fa-theme`: Naruto (default: night navy, orange, chakra glow) and Clean (paper, ink, one blue). All seal, dojo, mission, rank and kanji items are gone; `rankFor` became `bandFor`.
- Number answers can carry `unit` (`%`, `:1`, `days`, `times`); the parser accepts those typed.
- `node --test "tests/*.test.mjs"`: 244 pass. Never run `node --test tests/`.
- Checked in the browser at desktop and phone width, both themes; no console errors, no sideways scroll. The preview runs from `.claude/launch.json` (`acca-site`), whose server script lives in the old scratchpad; rewrite it if that folder is gone.

## Still unverified or open

- No independent accuracy review yet of chapters 3, 4, 11-20 or the Section B cases. Answers were computed by script and checked by hand, but a second check against the books is the next most valuable step.
- Russian and Uzbek have not been read by a fluent speaker.
- The specimen exam in the Kit is not used separately; the mock exam is built from the rewritten questions instead.
- Before going public: trademark check on the "Naruto" theme name and footer.
- `ACCA-FA-site.zip` in the folder is untracked and was left alone.

## Rules that still apply

See PROJECT_NOTES.md: plain HTML/CSS/JS, no build, plain script tags, content through `el()` never innerHTML, every label in three languages, questions in English with trilingual explanations, Madina's Mart examples, copyright (original wording, new numbers, `kitRef`), PDFs never committed. Commits end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
