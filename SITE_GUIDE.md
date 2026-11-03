# Balanced: ACCA FA study site

Everything about the site in one place. Last updated 2 November 2026.

## Open it

**On your phone (or any device):** log in to claude.ai, then open:

```
https://claude.ai/artifact/S5KoickD7pXwDE24bSd7Fp
```

It is private: only you can open it, unless you share it from the page's Share menu. You can also find it at claude.ai/code/artifacts, listed as "Balanced · ACCA FA".

**On your computer, offline:** double-click `index.html` in the `Finance app` folder on your Desktop, or open:

```
file:///C:/Users/USER/Desktop/Finance%20app/index.html
```

Your progress is saved in each browser separately. Your phone and your computer do not share scores, the light/dark choice or a mock exam in progress.

## What is in it

- **20 chapters**, the whole ACCA FA (FFA) syllabus, following the Kaplan Study Text.
- **550 practice questions**: every Kaplan Exam Kit question 1-550, rewritten once each with new wording and new numbers.
- **16 Section B case questions** (Kit multi-task questions 1-16), 15 marks each.
- **A timed mock exam** built like the real paper.
- **Three languages**: lessons and explanations in English, Russian and Uzbek. Questions are in English, as in the exam.

### Chapters and question counts

| # | Chapter | Questions |
|---|---|---|
| 1 | Introduction to financial reporting | 46 |
| 2 | The regulatory framework | 12 |
| 3 | Double-entry bookkeeping | 42 |
| 4 | Recording transactions and events | 47 |
| 5 | Inventory | 23 |
| 6 | Non-current assets: acquisition and depreciation | 12 |
| 7 | Non-current assets: disposal and revaluation | 22 |
| 8 | Intangible assets | 17 |
| 9 | Accruals and prepayments | 12 |
| 10 | Receivables | 23 |
| 11 | Payables, provisions and contingent liabilities | 18 |
| 12 | Capital structure and finance costs | 18 |
| 13 | Reconciliations | 37 |
| 14 | The trial balance, errors and suspense accounts | 38 |
| 15 | Preparing basic financial statements | 68 |
| 16 | Incomplete records | 12 |
| 17 | Statement of cash flows | 22 |
| 18 | Interpretation of financial statements | 43 |
| 19 | Consolidated statement of financial position | 22 |
| 20 | Consolidated statement of profit or loss and associates | 16 |
| | **Total** | **550** |

### Section B cases

- Single company: Amber Co, Birch Co, Cedar Co, Delta Co, Erin
- Cash flows: Falcon Co, Gannet Co, Heron Co, Ibis Co
- Groups: Jade and Kiwi, Lotus and Maple, Nectar and Olive, Pearl and Quill, Ridge and Slate, Tide and Umber, Vale and Wren

## How to use it

### Lessons

Each chapter shows short key points and a Madina's Mart example, which is one shop business followed through the whole course. Tap **Explain more** for the full explanation and the **Also tested in the exam** notes. Every chapter ends with key terms and a button to practise it.

### Practice

- **Practise a chapter**: from the chapter page or the Practice page.
- **Weak points**: chapters ordered weakest first. Untried chapters come first, then your lowest scores.
- **What I have studied**: a mixed set from every chapter you have practised.
- **Section B cases**: each case has a scenario and several tasks.
- **Modes**: *One at a time* checks each answer straight away. *All at once* marks everything when you submit.
- **Number answers**: type them as you like, for example `1,250`, `4,58`, `23.58%`, `1.35:1`, `90 days` or `15.82 times`.
- Your answers survive a page reload in the middle of a set.

### Mock exam

- 35 objective test questions worth 2 marks each, drawn from every chapter in proportion to its size.
- 2 case questions worth 15 marks each: one single-company or cash-flow case, and one group case.
- 100 marks, a 2-hour timer and a pass mark of 50%. Every paper is different.
- The timer keeps running if you leave the page. When time runs out, the paper is marked automatically.
- After you submit you get your mark, pass or not passed, your score by chapter, and every question marked with an explanation. The result is kept after a reload.

### English exam terms in Russian and Uzbek

The exam is in English and uses one official term, but the Russian and Uzbek lessons use a translated word. So that the two always match, the official English term is shown as a small tag next to the translated word, for example *Дебиторы* `receivables` or *rezerv* `allowance`. It appears in lessons, key points, exam notes, key terms and answer explanations. Each term is tagged once per block, and only when the English version of that text uses the term, so a word with two meanings (such as резерв) gets the right English term.

### Terms page (same thing, different name)

The **Terms** page lists about 55 exam terms with the other names the Kaplan books, your teacher's slides and older textbooks use for the same thing: for example *cash flow statement* for *statement of cash flows*, *net book value* for *carrying amount*, *bad debts* for *irrecoverable debts*, *SFP* for *statement of financial position*. A dashed name is an older or informal one that the Kaplan books do not use. Terms that look alike but are different, such as *gearing* and *debt/equity ratio*, show their formula. You can search any name, in English, Russian or Uzbek.

### Scores

Scores feed the home page progress, the weak points list and the chapter labels:

| Score | Label |
|---|---|
| Below 50% | Below the pass mark |
| 50-69% | Pass |
| 70-84% | Good pass |
| 85% and above | Exam ready |

### Light and dark

The sun/moon button in the header switches between light and dark mode. With nothing chosen, the site follows your device's setting.

## Design

- **Name**: Balanced.
- **Theme**: one theme, "Clean", with two modes. Light is paper, ink and one blue. Dark is navy, orange and a warm glow.
- **Your own Naruto theme later**: the site is set up for a second theme. To add it:
  1. Add `'naruto'` to `THEMES` in `js/theme.js`.
  2. Write its styles under `[data-theme="naruto"]` in `style.css`.
  3. Add a way to pick it, for example a second button in the header.
- **Motion**: pages and answers animate gently. The animation switches off if your device is set to reduce motion.

## Accuracy

- **Questions**: every question in chapters 3, 4 and 11-17 was re-checked on 2 November 2026. Each answer key and figure was recalculated, and judgement calls were compared with the Kit's own answers. Two small wording fixes were made, and no wrong answers were found.
- **Chapters 5-10**: an earlier review recalculated all 109 answer keys, and its fixes were applied.
- **Chapters 18-20 and the Section B cases**: every figure was computed by script when written and re-checked.
- **Lessons**: the key points and exam notes for chapters 3, 4 and 11-17 were reviewed.

**Still to check:**
- The longer "Explain more" text in chapters 3, 4 and 11-20 has not been re-read line by line.
- The Russian and Uzbek have not been read by a fluent speaker.
- Both Kaplan books are valid to 31 August 2026. Check ACCA's syllabus for your exam sitting.

## Copyright

The books' text and questions are not copied. Lessons use original wording, and every question is rewritten with new numbers and labelled with the Kit number it is based on ("Based on Exam Kit Q123"). The PDFs are never committed to git.

## Other ACCA papers

The Kaplan books cover FA (FFA) only. They contain nothing for F7, which is now called Financial Reporting (FR). For FR you would need Kaplan's FR Study Text and Exam Kit, and the site could then take an FR course alongside FA.

## For whoever works on the site next

### Files

| Path | What it holds |
|---|---|
| `index.html` | The page shell and script list |
| `style.css` | All styling, both modes |
| `data/course.js` | Chapter list and parts |
| `data/chapter-01.js` to `chapter-20.js` | Lessons in three languages |
| `data/questions-ch01.js` to `questions-ch20.js` | The 550 questions |
| `data/section-b.js` | The 16 case questions |
| `js/quiz.js` | Marking, answer parsing and score bands |
| `js/exam.js` | Mock exam paper building and marks |
| `js/theme.js` | Theme and light/dark mode |
| `js/progress.js` | Saved scores and weak points |
| `js/i18n.js` | Every on-screen label, in three languages |
| `js/router.js`, `js/app.js`, `js/dom.js` | Routing, start-up and page building |
| `js/terms.js` | The list that matches Russian and Uzbek words to official English terms |
| `data/term-names.js` | The Terms page: official term, other names, translations, formulas |
| `js/views/` | Home, chapter, quiz, practice, mock exam and terms pages |
| `tests/` | Automated tests |
| `NEXT_CHAT.md` | Handoff notes for the next chat |
| `PROJECT_NOTES.md` | Older decisions |

### Rules

- Plain HTML, CSS and JavaScript, with no framework and no build step. It must open from `file://`, so use plain `<script>` tags, not modules.
- All content goes through `el()` in `js/dom.js`, never `innerHTML`.
- Every label needs English, Russian and Uzbek.
- Run the tests with `node --test "tests/*.test.mjs"`. There are 324, all passing. Never run `node --test tests/`, which fails on Node 24.
- The tests check that every Kit question 1-550 is covered exactly once, that every case totals 15 marks, and that key points stay short and match across languages.

### Updating the phone link

After changing the site, republish the page to the same link. The publish copy is the body of `index.html` without its `<html>`, `<head>` and `<body>` wrappers, plus `style.css` and every file under `data/` and `js/`.
