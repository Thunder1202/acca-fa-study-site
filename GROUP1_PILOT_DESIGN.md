# Design Doc — Group 1 Pilot (Chapters 1–2)

Scope: Chapter 1 "Introduction to financial reporting" + Chapter 2 "The regulatory framework", built as the first working slice of the full ACCA FA site described in `PROJECT_NOTES.md`. Everything here becomes the template repeated for the remaining 6 groups.

## Intent

Prove out the whole pattern — trilingual lesson content, a running example business, tagged exercises, two quiz modes, and progress-based weak-area practice — on a small, manageable slice before repeating it 18 more chapters' worth.

## Goals

- A working local website (open `index.html`, no install) covering Ch.1–2.
- Lesson content in EN/RU/UZ, rewritten from Kaplan's own wording + expanded with original explanations and examples.
- One running fictional business, introduced in Ch.1, whose situations illustrate every concept as it's introduced.
- Every Exam Kit OTQ tagged to "Introduction to financial reporting" or "The regulatory framework" available as practice, in both quiz modes (one-at-a-time / all-at-once).
- Feedback after each question explains what the question was asking and why the answer is right/wrong, in EN/RU/UZ.
- Progress (score per topic) persisted in the browser (localStorage), feeding a "weak areas" practice mode.
- Fully responsive (phone + desktop).
- Freely browsable — no locked progression.

## Non-goals (for this pilot)

- The other 6 syllabus groups (chapters 3–20) — later, same pattern.
- Multi-task questions — none are tagged to this group's topics in the Exam Kit (they start from "Preparation of financial statements" onward), so none are included here.
- Any backend, accounts/login, or deployment — stays local static files.
- Any AI features, calendar, Telegram — explicitly out of scope for the whole project.

## Anti-goals

- Don't let trilingual content become literal Google-Translate-style text — explanations should read naturally in each language.
- Don't copy Kaplan's exact sentences at length — paraphrase + expand, per the copyright note in `PROJECT_NOTES.md`.
- Don't make the running example feel bolted-on — it should actually clarify each concept, not just decorate the page.

## The running example business

**"Madina's Mart"** — a small retail shop in Tashkent selling household goods, started by a sole trader named Madina. Chosen because:
- Simple enough to introduce double-entry/basic concepts in Ch.1–2 without needing inventory/non-current-asset complexity yet (that comes in later chapters, where Madina's Mart naturally grows — buys a delivery van, builds up inventory, takes a loan, etc.).
- Relatable scale (small local shop), matches "more relatable" preference.
- Will later support the capital-structure chapter (could incorporate), and eventually group accounts (Madina could acquire a second shop — a subsidiary) — so the same storyline can stretch across all 8 groups without being forced.

## Content structure per topic page

Each of the 2 chapters becomes one "topic" with:
1. **Learning objectives** (short, from the syllabus).
2. **Explanation sections** — Kaplan's core definitions/concepts, reworded, in the active language.
3. **Madina's Mart illustration** — a boxed example showing the concept applied to the running business.
4. **Key terms glossary** (for Ch.1/2: financial reporting, stakeholders, IFRS, regulatory bodies, corporate governance, etc.), each term with a one-line definition in all 3 languages.
5. **Practice** button → takes you to the quiz view pre-filtered to this topic's tagged questions.

## Data model (plain JS/JSON data files, no backend)

```
/data/
  groups.js            // list of the 8 syllabus groups + their chapters (metadata only)
  chapter-01.js         // { id, titles: {en,ru,uz}, objectives: {...}, sections: [...], glossary: [...] }
  chapter-02.js
  questions-ch01.js      // [{ id, topicId, textEn, options: [...], correctIndex, explanation: {en,ru,uz} }, ...]
  questions-ch02.js
```

- Lesson text fields are objects keyed by `en`/`ru`/`uz`.
- Question **text and options stay English-only** (single field, not per-language) — matches the real exam.
- Question **explanation** is `{en, ru, uz}`.
- Each question carries a `topicId` matching its chapter, so "practice this topic" and "weak areas" both just filter/aggregate by `topicId`.

## Progress / weak-areas (localStorage)

Key: `acca-fa-progress` → JSON:
```
{ "chapter-01": { "attempted": 12, "correct": 9, "lastScore": 0.75 },
  "chapter-02": { "attempted": 8,  "correct": 4, "lastScore": 0.50 } }
```
- Updated after every finished quiz session (merges into running totals for that topic, `lastScore` is the most recent session's score).
- "Weak areas" mode: ranks topics by `lastScore` ascending, surfaces practice from the lowest first (topics never attempted count as weakest, to encourage covering everything).
- No "pass/fail" threshold needed yet — just relative ranking across attempted topics; can refine once more chapters exist.

## Site structure

- `index.html` — single shell: a top nav (language switcher EN/RU/UZ, Home / Practice / Weak Areas), content renders into a main panel via hash-based routing (`#/chapter/1`, `#/quiz/chapter-01`, `#/weak-areas`).
- `style.css` — responsive, mobile-first.
- `app.js` — routing, rendering, quiz-mode toggle (one-at-a-time vs all-at-once), progress read/write.
- `/data/*.js` — content, as above.

## Visual style (added after initial approval)

- Naruto-inspired theme, but subtle — not costumey/otaku. Practically: a color palette drawing from the Konoha leaf/Naruto orange + deep charcoal/black + a warm accent red, a leaf-shaped mark used sparingly (favicon/logo corner, section dividers), clean modern typography. No chibi art, no loud fan-art imagery, no in-jokes that would confuse someone who's never watched the show — it should still read as a serious study tool first.
- Must look and work well enough to push to a public URL later: real responsive layout, no placeholder/broken states, accessible contrast, works without the Kaplan PDFs present (site only needs its own data files at runtime).
- Accounting content accuracy: every definition/figure in the lesson pages is checked against the extracted Study Text/Exam Kit text (cached in the temp extract files) before being finalized, not invented from general knowledge alone.

## What's left to the builder (Claude)

- Exact wording of all lesson content and the Madina's Mart examples, in all 3 languages.
- Exact visual styling within the above direction (specific hex colors/typography choices).
- Picking/tagging which specific Exam Kit OTQs (by their question numbers in the book, e.g. Q1–Q11 for "the use of double-entry..." per the index) map to Chapter 1 vs Chapter 2, rewritten in original wording per the copyright note.
- Exact glossary term list per chapter.

## Done when

- Opening `index.html` locally shows Ch.1 and Ch.2 lessons, each with objectives, explanation, Madina's Mart example, and glossary, switchable between EN/RU/UZ.
- Each chapter's "Practice" works in both quiz modes, shows English questions with trilingual feedback after each answer.
- Finishing a quiz updates localStorage; a "Weak Areas" view correctly shows the lower-scoring topic first.
- Layout works on a phone-width screen without horizontal scrolling.
