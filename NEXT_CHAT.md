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

- Official English terms: `js/terms.js` (`TERMS`, `annotate`) tags the Russian/Uzbek word with its English exam term, using the English version of the same text to decide which term is meant; `richTextT` and `termNodes` in `js/dom.js` apply it. To add a term, add an entry to `TERMS`. The Terms page reads `data/term-names.js`; a test keeps its translations equal to the chapter glossaries. `tests/syntax.test.mjs` compiles every browser script (the browser-only files were previously untested).
- 2026-11-03: compared the site with the teacher's 20 slide decks (`pptx resources/`, git-ignored). They agree with the Study Text and the site (PIRATE criteria, probability table, ratio formulas). Wording standardised: "profit before income taxes", "income tax expense", no "balance sheet".

## 2026-11-04: rework after real study (in progress)

The user studied with the site and asked for: key terms first, a visible plain-words explanation, easy examples for terms, tap any term to see its meaning, a question helper, step-by-step answers, and no more Madina's Mart (it confused them). Chapter order stays as it is.

Done for the whole site:
- Chapter page order: Key terms (open, with examples) → What you will learn → each section as In simple words → key points → Example → Explain more. The Exam Kit range (e.g. Q436–457) shows on the chapter and quiz pages (`kitRange` in `js/quiz.js`).
- `js/glossary.js` indexes every chapter's glossary. Terms from the current chapter and earlier ones are underlined in lessons, questions and answers; tapping opens a card with meaning, example and chapter link. In RU/UZ a word is linked only when the English text of the same block uses the term.
- Study helper (`js/views/helper.js`, header button "Ask"): Search (offline, terms/lessons/questions, a Kit number shows that question with its answer), Ask Claude (only on the claude.ai link, `sample` capability, answers from the site's notes), NotebookLM (the user pastes their own notebook link once; the question is copied and the notebook opens).
- Step format in any text: `# ` step title, two spaces = working line, `= ` result, `! ` common trap, `- ` bullet.

The user approved the chapter 17 pilot and asked to roll it out. Rollout status (stopped on the user's request, 2026-11-04):

- DONE: chapters 1-13 and 17. Each has: `simple` for every section; every Madina's Mart example replaced by an everyday example in step format; `example` for every glossary term; new core terms added (chapter 1 alone added asset, liability, equity, income, expense and 12 more; others added debit and credit, receivable, payable, inventory, gross profit, non-current asset, accumulated depreciation, finance costs, income tax, bank statement and so on); every Kit answer rewritten step by step, naming the mistake behind each wrong option. Every figure was re-checked. Section order was checked against the Study Text; all matched (chapter 12 groups preference shares with financing, which was kept).
- Four chapter 1 question texts were reworded to remove Madina (Kit Q24, Q28, Q29, Q30).
- `REWORKED` in `tests/content.test.mjs` lists '01'-'13' and '17'. 377 tests pass.
- 2026-11-05: chapters 14, 15, 16, 18, 19, 20 DONE, so ALL 20 chapters are reworked. Patches in `tools/rework/` (`p14-lesson-draft.js`+`p14q-*`, `p15-lesson.js`+`p15q-*`, `p16.js`, `p18-lesson.js`+`p18q-*`, `p19.js`+`p19q.js`, `p20.js`). Examples: ch15 one small bakery; ch18 one corner shop; ch19-20 "Shop Co buys 80% of Bake Co" with figures that tie across both chapters. New terms: Net current assets, Statement of changes in equity, Revenue, Transaction price (15); Net asset turnover, Inventory/Receivables/Payables days (18); Consideration, Post-acquisition profits (19). `REWORKED` lists '01'-'20'. 395 tests pass. Madina appears nowhere in `data/` or `js/`. Every trap line was checked against the actual wrong options.
- Chapters 14-20 committed as 88d4638.
- 2026-11-05: Section B DONE. All 145 task explanations in `data/section-b.js` are in step format (every figure re-checked; trap lines checked against the real options). Tool: `node tools/rework/sb.js "<project dir>" <patch> [--dry]` swaps only the three explanation arguments of each `task(...)` call and verifies nothing else changed; patch shape `{ b01: [[en, ru, uz], ...one per task] }`. Patches: `sb1.js` (cases 1-5), `sb2.js` (6-9), `sb3.js` (10-16), `sb-all.js` combines them. A new test in `tests/section-b.test.mjs` keeps every answer in step format with matching line shapes. 396 tests pass.
- The rework is complete and committed (548da4a). 2026-11-05: the phone link was republished (version 4) with all 20 reworked chapters and Section B; every published file's size matches the site. Only changed files need sending on a republish; files left out stay as they are.

How to continue (the tools are in `tools/rework/`):
1. `node tools/rework/dump.js "<project dir>" <n>` prints a chapter's English lesson and questions, with [MADINA] flags.
2. Write a patch file exporting `{ sections: [{ simple: [en, ru, uz], example: [en, ru, uz] }, ...], terms: { 'Term name': [en, ru, uz] }, add: [{ at, term, definition, example }], glossaryOrder, texts: { kitRef: 'new question text' }, answers: { kitRef: [en, ru, uz] } }`. Section entries are index-aligned; a section with no `example` keeps its old one (only allowed if it has no Madina).
3. `node tools/rework/rw.js "<project dir>" <n> <patch.js> --dry` checks it: all three languages present, line shapes equal across languages, every question answered, no Madina left, key point limits. Without `--dry` it rewrites `data/chapter-NN.js` and `data/questions-chNN.js` and round-trips them. Then add the chapter to `REWORKED` and run the tests.

Answer style the user approved: "# Step N: ..." titles, two-space working lines that say what each figure is, "= Answer: ..." and "! Common trap: ..." naming which wrong option comes from which mistake. Theory questions: one plain sentence of the idea, then a "- " line per option saying why it is right or wrong.

## 2026-11-11: BPP Kit as optional extra practice (pilot, not yet approved)

The user added `finance/F3 BPP KIT (24-25)-1.pdf` (BPP Practice & Revision Kit, exams Sept 2024 - Aug 2025, 407 scanned pages; also `finance/` has other files of theirs; never commit the PDFs). They asked for: BPP questions as an OPTION beside Kaplan (Kaplan stays main), the background info needed to answer them added to the lessons, and nothing invented: every answer and every piece of info must have proof.

- Reading the scan: `pdftotext` gets nothing past the cover. The page images are JPEGs inside the PDF; a node script (kept in the session scratchpad as `extract.js`) pulls them out in page order, then the Read tool views them. Book page N = PDF page N + 15 (e.g. questions p.78 = image p093).
- Rules used: rewrite with new figures (copyright, as for Kaplan); each question carries `bppRef` (e.g. '17.8') and `bppPage` (BPP's answer page) so the user can check the method in the book; every BPP key was re-derived before use; a test (`tests/bpp.test.mjs`) recomputes every figure independently.
- Syllabus filter: BPP is one year older than Kaplan (Sept 2025 - Aug 2026). Kaplan's Study Text has NO control accounts or day books, and uses IFRS 18; so BPP questions on control accounts/day books are left out, and where BPP and Kaplan disagree, Kaplan wins (BPP 17.13 left out: BPP says a transposition shows in the trial balance, Kaplan calls it an error of original entry that does not).
- Built: `data/bpp-ch14.js` (16 questions from BPP section 17 Correction of errors; 17.13 and 17.18 left out) under `ACCA.bpp['chapter-14']`; route `#/quiz/bpp-chapter-14`; a second button on the chapter page and a panel on Practice; scores saved under `bpp-chapter-14`, apart from Kaplan (weak points and the mock exam use Kaplan only). New chapter 14 section "Errors that DO stop the trial balance agreeing" (`tools/rework/p14-imbalance.js`, from Kaplan Study Text ch 14 p. 266) with a new optional `source` field shown under the section, plus the term "Transposition error". `rw.js` now supports `insert: [{ at, section }]` and `source`.
- Next if approved: the other BPP topics, mapped to site chapters (index on BPP p. iv-v), same rules; then BPP mixed banks and mocks 2-3. ~500 questions in all.

## Still unverified or open

- Accuracy review done on 2026-11-02 for chapters 3, 4, 11-17 (every question key and figure, plus key points and exam notes), with judgement calls checked against the Kit answers. Fixed: the Q104 explanation and the Q435 wording. Chapters 18-20 and the Section B cases were written with every figure computed by script and re-checked; no errors found. Lesson bodies ("Explain more" text) for 3, 4, 11-20 were not re-read line by line.
- Russian and Uzbek have not been read by a fluent speaker.
- The specimen exam in the Kit is not used separately; the mock exam is built from the rewritten questions instead.
- Before going public with a Naruto theme: trademark check.
- `ACCA-FA-site.zip` in the folder is untracked and was left alone.

## Rules that still apply

See PROJECT_NOTES.md: plain HTML/CSS/JS, no build, plain script tags, content through `el()` never innerHTML, every label in three languages, questions in English with trilingual explanations, everyday examples with small round numbers (Madina's Mart is being removed), copyright (original wording, new numbers, `kitRef`), PDFs never committed. Commits end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
