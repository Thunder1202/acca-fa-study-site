# ACCA FA Learning Website — Project Notes

Status: **Group 1 pilot built (chapters 1-2).** Open `index.html` in a browser, nothing to install. Waiting for the user's review of the pilot before starting chapter 3.
This file exists so a future chat in this folder can pick up exactly where we left off.

To run the tests: `node --test "tests/*.test.mjs"`

## What this is

A learning website built from the two books already in this folder:
- `Kaplan Study Text.pdf` — the lessons (20 chapters)
- `Kaplan Exam Kit.pdf` — the exercises (550+ objective test questions + 16 multi-task questions)

Goal: go through ACCA FA (Financial Accounting) topic by topic, in order, and after each topic do matching exercises pulled from the Kaplan Exam Kit for that exact topic.

## Who it's for

- Right now: just the user, studying alone.
- Possibly later: shared with someone else, or even made public. **This affects the copyright decision below — keep it in mind for every future step.**

## Content structure (already extracted from the PDFs)

The syllabus printed in the Study Text (pp. P.13 onward) has **9 sections, A-I**. Chapter titles and start pages below were checked against the book. Section names were checked too, except that the letter "E" is missing from the PDF text, so it is inferred from the sequence. Which chapter sits in which section (C onward) follows the chapter titles; confirm against the syllabus's chapter references when each group is built.

| Syllabus section | Chapters (printed start page) |
|---|---|
| A The context and purpose of financial reporting | 1. Introduction to financial reporting (p.1)<br>2. The regulatory framework (p.27) |
| B Accounting principles, concepts and qualitative characteristics | covered in chapter 1 |
| C The use of double-entry and accounting systems | 3. Double-entry bookkeeping (p.41) |
| D Recording transactions and events | 4. Recording transactions and events (p.71)<br>5. Inventory (p.99)<br>6. Non-current assets: acquisition and depreciation (p.127)<br>7. Non-current assets: disposal and revaluation (p.147)<br>8. Intangible assets (p.165)<br>9. Accruals and prepayments (p.177)<br>10. Receivables (p.193)<br>11. Payables, provisions and contingent liabilities (p.211)<br>12. Capital structure and finance costs (p.225) |
| E Reconciliations | 13. Reconciliations (p.245) |
| F Preparing a trial balance | 14. The trial balance, errors and suspense accounts (p.261) |
| G Preparing financial statements | 15. Preparing basic financial statements (p.281)<br>16. Incomplete records (p.317)<br>17. Statement of cash flows (p.335) |
| H Preparing basic consolidated financial statements | 19. Consolidated statement of financial position (p.389)<br>20. Consolidated statement of profit or loss and associates (p.433) |
| I Interpretation of financial statements | 18. Interpretation of financial statements (p.367) |

(Note: the book teaches chapter 18 before chapters 19-20, the reverse of syllabus sections H and I. The site follows the book's chapter order. The Exam Kit puts consolidation before interpretation.)

Exam Kit structure:
- Section A: Objective test questions (~550), indexed by the same topic names as above.
- Section B: 16 multi-task questions, grouped into 3 themes: Preparation of financial statements, Statement of cash flows, Group accounts.
- Also includes a specimen exam (Section 5/6).

To read the books as text, run `pdftotext -layout` on the two PDFs into a temporary folder. Text extraction drops some characters and garbles the Exam Kit index, so check against the PDF page rather than trusting the extracted index.

## Decisions made so far

1. **Users:** Personal tool for now; keep the door open for other users / going public later. No login system needed yet.
2. **Hosting:** Local static files for now (open in a browser, no server needed). Must stay portable enough to deploy online later (e.g. GitHub Pages, Netlify) without a rewrite.
3. **Progress tracking:** Needed. The site must remember quiz scores per topic between visits (so "weak areas" can be computed). Given it's local-first, localStorage is the planned mechanism for now.
4. **Practice modes — three, as separate sections:**
   - Per-topic: right after finishing a chapter's lesson, exercises from the Exam Kit for that exact topic.
   - "What I lack": adaptive — surfaces practice from topics where stored scores are weakest.
   - Manual topic picker: browse/drill any topic's questions on demand, from a list (**not** a free-text box — explicitly rejected, since free text implies AI generation = ongoing API cost, which the user does not want).
   - No AI involved anywhere in this project. No AI-generated questions, no AI analysis. Confirmed explicitly by the user.
5. **Content style:** The user asked for Kaplan's words plus deeper explanation, real-life examples and worked illustrations. Claude cannot copy the books' text or questions wholesale, so what gets built is: standard ACCA/IFRS terms and definitions, everything else written in Claude's own wording, following the book's structure and coverage. The user was told this on 2026-11-01. The site is therefore not Kaplan's exact text.
6. **Exercises:** One rewritten question for every Exam Kit question on a topic, same concept and calculation style, each labelled with its Kit number (e.g. "Kit Q17") so the user can look up the original in the book. Chapter 1 = Kit Q1-46, Chapter 2 = Kit Q47-58 (confirmed against the Kit's section headings).
6b. **Going public:** The rewritten content is what makes a public launch possible, but still needs a legal check first, and the Kaplan name/PDFs must not ship. `*.pdf` is git-ignored so the books never enter the repo.
7. **Pace:** Build ONE syllabus group at a time, starting from Group A/B (Chapters 1–2: Introduction to financial reporting + The regulatory framework) as the first real build, not all 8 groups at once. Confirm the pattern works before repeating it 7 more times.

## Decisions made so far (part 2 — second Q&A round)

8. **Tech approach:** CONFIRMED — option 2, the plain data-driven single-page vanilla JS site. No framework, no build step. Uses plain `<script>` files, not ES modules: tested on 2026-11-01, modules do not run when `index.html` is opened directly as a local file.
9. **Quiz format:** Both modes supported, user picks per session via a toggle — (a) one question at a time with immediate right/wrong feedback, or (b) all questions on one page, feedback after submitting the whole set.
10. **Question count per session:** No picker — always use *all* Exam Kit questions tagged to that topic.
11. **Language:** Site UI + lesson content: English, with Uzbek and Russian translations available (language switcher). Exam questions themselves stay English-only (matches the real exam). Feedback/explanations after answering (what the question was asking, why the answer is right/wrong) are shown in Uzbek, Russian, and English.
    - **Full trilingual content from day one, including the Group 1 pilot** (confirmed — triples the writing effort per topic, user accepted this explicitly).
12. **Device support:** Must work well on both desktop/laptop and mobile (responsive layout).
13. **Navigation:** Freely browsable — no locking chapters behind completing previous ones. The chapter order is a suggested path, not enforced.
14. **Real-life examples:** One running fictional business, followed across all chapters, so the same company's accounting evolves topic by topic (not a fresh unrelated example every chapter). Exact business (name/type) is Claude's call — plan: a small sole-trader trading/retail business that later grows (useful later for the capital structure, and eventually group accounts, chapters).
15. **Lesson depth:** Must cover everything needed to pass the ACCA FA/F3 exam, but the user does not want walls of text. Each section shows at most 6 short key points plus the Madina's Mart example. The full explanation stays one tap away under "Explain more". Follow this pattern for every new chapter.
16. **Look:** Bold Naruto style (user rejected the first, subtler version): orange and black, forehead-protector headband, spirals, 忍, shuriken bullets, chapters called missions, training ground, ranks by score (Academy student under 50%, Genin 50%, Chunin 70%, Jonin 85%). Site name: FA Dojo. Uses a plain spiral rather than the Konoha symbol, and no characters or show artwork. Before going public, get a trademark check on the Naruto references, because they are closer to the franchise than before.

## Next steps (in order)

1. User reviews the pilot, adjusts the pattern if needed. Russian and Uzbek text should be read by a fluent speaker.
2. Repeat for the remaining chapters (3-20, in book order) using the confirmed pattern. A new chapter needs `data/chapter-NN.js`, `data/questions-chNN.js`, two script tags in `index.html`, and an entry in the lists in `tests/content.test.mjs`.

Study groups on the site follow the book's order: 1 Foundations (ch 1-2), 2 Double-entry (ch 3), 3 Recording transactions (ch 4-12), 4 Reconciliations (ch 13), 5 Trial balance (ch 14), 6 Financial statements (ch 15-17), 7 Interpretation (ch 18), 8 Consolidation (ch 19-20).
