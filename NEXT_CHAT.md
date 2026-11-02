# Handoff for the next chat

Written 2026-11-02. Read this first, then `PROJECT_NOTES.md` for older decisions. Where they disagree, this file wins.

## The goal

The user is studying for ACCA FA (F3). This folder is their study website, built from `Kaplan Study Text.pdf` and `Kaplan Exam Kit.pdf`. It runs locally from `file://` and may go public later.

## Where things stand

- All 20 chapters are built. Every Exam Kit question 1-550 is rewritten exactly once (a test checks this).
- 16 Section B case questions (Kit MTQ 1-16) are in `data/section-b.js`: 15 marks each, tasks tagged by chapter.
- Mock exam at `#/exam`: 35 two-mark questions spread across chapters by size, plus one single-company or cash-flow case and one group case. 2-hour timer, marks-based result with a chapter breakdown, kept in localStorage (`acca-fa-exam`) so it survives reloads.
- Design: name "Balanced". One theme, "clean", with light and dark modes behind a single sun/moon toggle (`#mode-toggle`). The dark mode is the orange/navy look; the user asked to keep it exactly. Mode is saved in `acca-fa-mode`, the theme family in `acca-fa-theme`; with nothing saved it follows the device. HTML carries `data-theme="clean"` and `data-mode`.
- The user plans to add their own Naruto theme later as a second theme. To add it: list it in `THEMES` in `js/theme.js`, style it under `[data-theme="naruto"]` in `style.css`, and add a way to pick it. Do not restyle the existing modes without being asked.
- Number answers can carry `unit` (`%`, `:1`, `days`, `times`); the parser accepts those typed.
- `node --test "tests/*.test.mjs"`: 246 pass. Never run `node --test tests/`.
- Checked in the browser at desktop and phone width, both themes; no console errors, no sideways scroll. The preview runs from `.claude/launch.json` (`acca-site`), whose server script lives in the old scratchpad; rewrite it if that folder is gone.

## Still unverified or open

- Accuracy review done on 2026-11-02 for chapters 3, 4, 11-17 (every question key and figure, plus key points and exam notes), with judgement calls checked against the Kit answers. Fixed: the Q104 explanation and the Q435 wording. Chapters 18-20 and the Section B cases were written with every figure computed by script and re-checked; no errors found. Lesson bodies ("Explain more" text) for 3, 4, 11-20 were not re-read line by line.
- Russian and Uzbek have not been read by a fluent speaker.
- The specimen exam in the Kit is not used separately; the mock exam is built from the rewritten questions instead.
- Before going public with a Naruto theme: trademark check.
- `ACCA-FA-site.zip` in the folder is untracked and was left alone.

## Rules that still apply

See PROJECT_NOTES.md: plain HTML/CSS/JS, no build, plain script tags, content through `el()` never innerHTML, every label in three languages, questions in English with trilingual explanations, Madina's Mart examples, copyright (original wording, new numbers, `kitRef`), PDFs never committed. Commits end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
