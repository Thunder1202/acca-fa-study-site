# ACCA FA Learning Website — Project Notes

Status: **Planning / brainstorming stage. No code written yet.**
This file exists so a future chat in this folder can pick up exactly where we left off.

## What this is

A learning website built from the two books already in this folder:
- `Kaplan Study Text.pdf` — the lessons (20 chapters)
- `Kaplan Exam Kit.pdf` — the exercises (550+ objective test questions + 16 multi-task questions)

Goal: go through ACCA FA (Financial Accounting) topic by topic, in order, and after each topic do matching exercises pulled from the Kaplan Exam Kit for that exact topic.

## Who it's for

- Right now: just the user, studying alone.
- Possibly later: shared with someone else, or even made public. **This affects the copyright decision below — keep it in mind for every future step.**

## Content structure (already extracted from the PDFs)

The 20 Study Text chapters map onto the 8 official ACCA FA syllabus groups like this:

| Group | Topic area | Chapters |
|---|---|---|
| A/B | Context & purpose of financial reporting | 1. Introduction to financial reporting (p.1)<br>2. The regulatory framework (p.27) |
| C | Double-entry & accounting systems | 3. Double-entry bookkeeping (p.41) |
| D | Recording transactions and events | 4. Recording transactions and events (p.71)<br>5. Inventory (p.99)<br>6. Non-current assets: acquisition and depreciation (p.127)<br>7. Non-current assets: disposal and revaluation (p.147)<br>8. Intangible assets (p.165)<br>9. Accruals and prepayments (p.177)<br>10. Receivables (p.193)<br>11. Payables, provisions and contingent liabilities (p.211)<br>12. Capital structure and finance costs (p.225) |
| E | Preparing a trial balance | 13. Reconciliations (p.245)<br>14. The trial balance, errors and suspense accounts (p.261) |
| F | Preparing basic financial statements | 15. Preparing basic financial statements (p.281)<br>16. Incomplete records (p.317)<br>17. Statement of cash flows (p.335) |
| H | Interpretation of financial statements | 18. Interpretation of financial statements (p.367) |
| G | Preparing simple consolidated financial statements | 19. Consolidated statement of financial position (p.389)<br>20. Consolidated statement of profit or loss and other comprehensive income, and associates (p.433) |

(Note: in the book, chapter 18 "Interpretation" comes before the two consolidation chapters, even though the official syllabus usually lists consolidation as section G before interpretation H. We're keeping the book's own chapter order since that's the order the user studies in.)

Exam Kit structure:
- Section A: Objective test questions (~550), indexed by the same topic names as above.
- Section B: 16 multi-task questions, grouped into 3 themes: Preparation of financial statements, Statement of cash flows, Group accounts.
- Also includes a specimen exam (Section 5/6).

Raw extracted text (for reference, not for copying verbatim into the site) is cached at:
`C:\Users\USER\AppData\Local\Temp\claude\extract\study_text_utf8.txt` and `exam_kit_utf8.txt`
(these are in the OS temp folder and may not survive a reboot — re-run `pdftotext -layout` on the two PDFs if they're gone).

## Decisions made so far

1. **Users:** Personal tool for now; keep the door open for other users / going public later. No login system needed yet.
2. **Hosting:** Local static files for now (open in a browser, no server needed). Must stay portable enough to deploy online later (e.g. GitHub Pages, Netlify) without a rewrite.
3. **Progress tracking:** Needed. The site must remember quiz scores per topic between visits (so "weak areas" can be computed). Given it's local-first, localStorage is the planned mechanism for now.
4. **Practice modes — three, as separate sections:**
   - Per-topic: right after finishing a chapter's lesson, exercises from the Exam Kit for that exact topic.
   - "What I lack": adaptive — surfaces practice from topics where stored scores are weakest.
   - Manual topic picker: browse/drill any topic's questions on demand, from a list (**not** a free-text box — explicitly rejected, since free text implies AI generation = ongoing API cost, which the user does not want).
   - No AI involved anywhere in this project. No AI-generated questions, no AI analysis. Confirmed explicitly by the user.
5. **Content style:** Use Kaplan's own terminology/wording as the base (these are standard IFRS/ACCA terms anyway), but expand with original explanations where it helps understanding — real-life examples, worked illustrations of "how it looks in practice." **Not** a verbatim mass-transcription of the PDFs, both because that's a weaker way to teach and because of the copyright flag below.
6. **Copyright flag (important, revisit if "go public" ever becomes real):** The Study Text and Exam Kit are copyrighted Kaplan/ACCA material. Fine to adapt/reference for personal local use. If this ever gets deployed publicly, the lesson text and exercise questions need to be original wording/examples (same topics, same concepts, not copied text/exact questions) — don't skip this step if "go public" happens.
7. **Pace:** Build ONE syllabus group at a time, starting from Group A/B (Chapters 1–2: Introduction to financial reporting + The regulatory framework) as the first real build, not all 8 groups at once. Confirm the pattern works before repeating it 7 more times.

## Decisions made so far (part 2 — second Q&A round)

8. **Tech approach:** CONFIRMED — option 2, the plain data-driven single-page vanilla JS site. No framework, no build step.
9. **Quiz format:** Both modes supported, user picks per session via a toggle — (a) one question at a time with immediate right/wrong feedback, or (b) all questions on one page, feedback after submitting the whole set.
10. **Question count per session:** No picker — always use *all* Exam Kit questions tagged to that topic.
11. **Language:** Site UI + lesson content: English, with Uzbek and Russian translations available (language switcher). Exam questions themselves stay English-only (matches the real exam). Feedback/explanations after answering (what the question was asking, why the answer is right/wrong) are shown in Uzbek, Russian, and English.
    - **Full trilingual content from day one, including the Group 1 pilot** (confirmed — triples the writing effort per topic, user accepted this explicitly).
12. **Device support:** Must work well on both desktop/laptop and mobile (responsive layout).
13. **Navigation:** Freely browsable — no locking chapters behind completing previous ones. The chapter order is a suggested path, not enforced.
14. **Real-life examples:** One running fictional business, followed across all chapters, so the same company's accounting evolves topic by topic (not a fresh unrelated example every chapter). Exact business (name/type) is Claude's call — plan: a small sole-trader trading/retail business that later grows (useful later for the capital structure, and eventually group accounts, chapters).
15. **Lesson depth:** Comprehensive — must cover everything needed to actually pass the ACCA FA/F3 exam, reworded from Kaplan + expanded with the running-business examples. Not a stripped-down summary.

## Next steps (in order)

1. ~~Confirm the build approach~~ — done, see #8 above.
2. Write the short design doc for the Group 1 pilot (see `GROUP1_PILOT_DESIGN.md` in this folder) — in progress.
3. Get it approved.
4. Build the Group 1 pilot (Chapters 1–2 lessons in EN/RU/UZ + their Exam Kit questions + both quiz modes + progress tracking + weak-area mode).
5. Review the pilot with the user, adjust the pattern if needed.
6. Repeat for Groups C, D, E, F, H, G (in that chapter order) using the confirmed pattern.
