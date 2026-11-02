# Handoff for the next chat

Written 2026-11-01. Read this first, then `PROJECT_NOTES.md` for the older decisions. Where the two disagree, this file wins.

## The goal

The user is studying for the ACCA FA (F3) exam. This folder is their study website, built from `Kaplan Study Text.pdf` and `Kaplan Exam Kit.pdf`. It runs locally now and may go public later.

## The user's latest instruction, in their words

> okay finish all the topics and then make better naruto UI and rn its cringe with these thigns u did rn its cringe ... the dojo shi and the pic that u drew and saying finishing mission is shi ... it will be naruto theme and then make simple clean UI(design) which is probably thr best fitting for this kind of webstie and make them changable ......... Ur last change to make really good design of naruto and other simple design fitting this project ... I will be off for a moment so do things without me ... add some clean animations and pls not some obvious japanese stlye smth cool pls u may even use some skills I downloaded from github ... okay do it in the best way possible

So there are two jobs: finish every chapter, and redo the design. Work without asking questions unless truly blocked.

## Where things stand

- Git repo, branch `master`, working tree clean. Last commit: `ec7a177 docs: record chapter 5-10 decisions and unverified keys`.
- `node --test "tests/*.test.mjs"`: 112 pass, 0 fail, checked when this file was written. Never run `node --test tests/`, it fails on Node 24.
- Built: chapters 1, 2, 5, 6, 7, 8, 9, 10, with 167 questions (Kit Q1-58 and Q148-256).
- Not built: chapters 3, 4, 11-20, about 383 questions, the 16 multi-task questions, and specimen exam practice.
- Redesign: not started. No code has changed since the last commit.
- The accuracy review of chapters 5-10 has finished, but none of its fixes are applied yet (see below).

## Order of work

Earlier in this chat the user said finish topics, then design. Just before the handoff the assistant decided to do the design first, because it changes the wording every chapter shares. Either order works, since lesson data does not contain the mission wording. Pick one and go.

1. Apply the chapter 5-10 review fixes.
2. Build chapters 3, 4, 11-20.
3. Add multi-task questions and specimen exam practice if feasible. If not, say so.
4. Redesign, two switchable themes.
5. Independent accuracy review of the new chapters, on Opus. Ask for tick-mark keys read from the PDF.
6. Update `PROJECT_NOTES.md` and memory, then tell the user what was done and what is unverified.

## Fixes from the chapter 5-10 review (not applied)

All 109 keys in chapters 5-10 were recomputed and are correct. No critical issues. Tick-mark keys Q152, Q195, Q197, Q208, Q210, Q212, Q217, Q221 were checked against the PDF and confirmed, so decision 21 in the notes is closed. Q192 is confirmed too.

Important:

1. `js/quiz.js:36` `parseAmount`: decimal commas break. "4,58" becomes 458, "176,40" becomes 17640. Russian and Uzbek speakers write decimals this way, so right answers are marked wrong on Q180, Q157, Q169. Fix: exactly one comma followed by 1 or 2 digits at the end is the decimal point, otherwise strip commas as now. Also strip non-breaking spaces. Write the failing tests first: "4,58", "1 250,50", "1,250".
2. `data/chapter-07.js:194` key point: add residual value. "After revaluation, depreciate (revalued amount − residual value) over the remaining useful life." In all three languages.
3. `data/chapter-06.js:71` key and `:106` body: the cost list is incomplete. Add installation, site preparation or alterations needed to install it, and professional fees such as architects' (Kit Q175, Q178, Q201).
4. `data/chapter-06.js:86` says a one-year warranty is an expense, but `questions-ch06.js:26` (Q175) uses two years. Say "a breakdown warranty (of any length)", or return the question to one year.
5. Russian "остаточная стоимость" for residual value is a false friend, it normally means net book value. Use "ликвидационная стоимость". Uzbek "qoldiq qiymat" has the same problem, use "tugatish qiymati". Affects ch06 key, exam notes, glossary, and ch07 explanations. The reviewer is not a native speaker, so flag it for confirmation.
6. Uzbek "zaxira" is used for inventory (ch05), revaluation surplus (ch07) and allowance for receivables (ch10). Use "rezerv" for allowances and reserves. Also needs native confirmation.

Minor:

- `chapter-05.js:135`: say production overheads include both fixed and variable (Q152).
- `chapter-08.js:127` and `:144` disagree on when amortisation starts. Exam questions amortise from the start of sales or production (Q219).
- `chapter-07.js:380`: OCI glossary. Better: "gains not recognised in profit or loss, such as the revaluation gain for the year".
- `chapter-08.js:251`: "recoverable amount", not "recoverable value".
- `chapter-10.js:56`: "always equals the ledger" overstates it.
- `chapter-06.js:244` and `:295`: the year-2 reducing balance charge and the 9-month charge are both $1,893.75. Change one figure.
- `chapter-07.js:93`: the exam note "only the allowance and the cash count towards its price" is unclear.
- `questions-ch08.js:64` (Q215): state "bought on 1 October 20X3".
- `chapter-07.js:286` and the retained-earnings glossary entry follow the Study Text's sentence order too closely. Reword both.
- `js/views/quiz.js`: Enter in the number field does nothing. After Check, focus is lost and the page jumps to the top (lines 196, 257), so move focus to the feedback. Unparseable text leaves Check disabled with no message.

Leave as is: lessons credit accounting-policy disclosure to IFRS 18 (`chapter-07.js:335`, `chapter-09.js:47`). It matches the Study Text and IAS 8 is not on the FA list.

The numbers quoted above came from the reviewer and have not been rechecked. Look at each line before editing.

## Chapter build recipe

Each new chapter needs:

- `data/chapter-NN.js` and `data/questions-chNN.js`.
- Two script tags in `index.html`, in chapter order.
- An entry in `QUESTION_SETS` and in the chapter id list in `tests/content.test.mjs`.
- Madina's Mart examples, continuing the same business. Compute every number by script first.

Chapter shape, every text field `{en, ru, uz}`:

```js
const chapterNN = { id, titles, objectives: [], sections: [{ key, exam, heading, body, example }], glossary: [{ term, definition }] };
if (typeof module !== 'undefined') module.exports = chapterNN;
else ((globalThis.ACCA ??= {}).chapters ??= {})[chapterNN.id] = chapterNN;
```

Rules the tests enforce: `key` has at most 6 bullets, each starts "- ", each at most 120 characters, same count in all languages. `exam` has the same bullet count across languages. `body` has the same paragraph count across languages. `exam` is optional.

Copy the question file pattern from `data/questions-ch10.js`: an IIFE with `TOPIC`, `PREFIX`, and helpers `base`, `single`, `number`, `matrix`. Types: `single` (exactly 4 options), `multi` (`correctIndices`, exactly 2), `matrix` (`columns`, `rows`), `number` (`correctValue`, `answerText`). A question may carry `table: {head, rows}`. A multi-style question with three true answers becomes a matrix.

Writing rules:

- Lessons in EN/RU/UZ. Questions in English only. Explanations in all three, saying what the question asks and why.
- Short key points plus an example visible, full explanation behind "Explain more". Do not cut examinable content, hide it.
- Everything the Kit tests must be taught in the lesson or exam notes, not only in quiz feedback.
- Copyright: the books' text and questions cannot be reproduced. Use standard terms, original wording, new numbers, and label each question with `kitRef`. The user has been told.
- One rewritten question per Kit question. The user was unhappy when questions were cut to 10-15.

### Where to find things in the books

To extract text: `pdftotext -layout`, then iconv from WINDOWS-1252. Tick marks are lost in text extraction, so tick keys need reading from the PDF content streams. `python` and `pdftoppm` are not installed; `pdftotext` and node are.

Extracted copies may still be in the scratchpad: `C:\Users\USER\AppData\Local\Temp\claude\C--Users-USER-Desktop-Finance-app\8ea70b04-39f1-4fc0-9d42-9f6025090db8\scratchpad`, as `study_text.txt` and `exam_kit.txt`. A new chat may not be able to rely on this folder, so re-extract if needed. The line numbers below refer to those files.

| Chapter | Study Text start | Kit questions |
|---|---|---|
| 3 Double-entry bookkeeping | p41, line 2976 | Q59-100 |
| 4 Recording transactions and events | p71, line 4333 | Q101-147 (ledger and journals 101-121, sales, purchases, tax, discounts 122-143, cash 144-147) |
| 11 Payables, provisions, contingent liabilities | p211, line ~10369 | Q257-274 |
| 12 Capital structure and finance costs | p225 | Q275-292 |
| 13 Reconciliations | p245 | Q293-329 (bank 293-307, trade payables 308-329) |
| 14 Trial balance, errors, suspense | p261 | Q330-367 (TB 330-340, errors 341-356, suspense 357-367) |
| 15 Preparing basic financial statements | p281 | Q368-435 (SOFP and P/L 368-406, notes 407-422, events after reporting period 423-428, revenue 429-435) |
| 16 Incomplete records | p317 | Q458-469 |
| 17 Statement of cash flows | p335 | Q436-457 |
| 18 Interpretation | p367 | Q508-550 |
| 19 Consolidated SOFP | p389 | part of Q470-507 |
| 20 Consolidated P/L and associates | p433 | part of Q470-507 |

Find other chapter openers with `grep -n 'Chapter learning objectives'` after `tr -d '\f\r'`. Check how Q470-507 split between 19 and 20 when you get there, and add a coverage test like the one for Q171-204.

Kit lines: questions start at 1060 (double entry), 1793 (recording), 3750 (payables). Answers from 10843, about 13252 onward for payables. Section B multi-task starts at 8555: 16 questions (1-5 statements, 6-9 cash flows, 10-16 group accounts). A specimen exam section is also present.

## Redesign brief

Two themes the user can switch, saved between visits, working in all three languages, and tested.

**Naruto theme.** Really good and clearly Naruto, but not obviously Japanese and not costume-like. "smth cool". This is the user's last chance on design: they rejected version 1 as "not naruto ish", version 2 as "too shitty", and now call the current one cringe.

Earlier design comments from the user, still valid unless the latest instruction above overrides them:

- "can you make naruto anime ish like design but not tooo otaku ish js referencing to naruto pls and make sure UI is cool and working for future pushing into public"
- "design is not naruto ish cmoon and make text only important places and some places where without them I wont understand it"
- "it looks too shitty I guess u need to check the design it needs to be better"

**Simple clean theme.** The simple design that best fits a study site.

**Remove:** the name "FA Dojo" (pick a neutral name), the 忍 seal, `assets/hero-scene.svg`, kanji stamps (合格, 修行), and anything in `js/views/quiz.js` or `style.css` that goes with them. Also mission, training and rank wording in `js/i18n.js`: `chapter`, `practice`, `heroTitle`, `startHere`, `resultTitle`, `practiceTitle`, `rankAcademy`, `rankGenin`, `rankChunin`, `rankJonin`, `passNote`, `nextChapter`, `objectives`, `backToLesson`. Check `.mission-mark` in `js/views/chapter.js`. If ranks go, update `rankFor` in `js/quiz.js` and its test in `tests/quiz.test.mjs`.

**Add:** clean animations, with `prefers-reduced-motion` support.

**Avoid:** character art, the Konoha symbol, show artwork, radial stripes (they read as the Rising Sun flag), clip-art spirals, kanji watermarks. Before going public, get a trademark check on any Naruto references.

**Verify:** look at screenshots on desktop and phone, both themes, opened from `file://`. Check contrast in both themes.

Skills available: `skills:ui-ux-pro-max` (design system search; needs Python, which is not installed, so its script may not run), `anthropic-skills:design-taste-frontend`, `anthropic-skills:impeccable`. Note that `impeccable` and `design-taste-frontend` had only SKILL.md here earlier, with scripts and references missing. If impeccable's launcher fails, its required message is: "Context loading did not run; I'll read the existing project context directly."

## Technical rules

- Plain HTML, CSS, vanilla JS. No framework, no build. Plain `<script>` tags only, because ES modules do not run from `file://`.
- Each js and data file ends with `if (typeof module !== 'undefined') module.exports = ...; else (globalThis.ACCA ??= {}).x = ...`. Tests are `.mjs` and import the `.js` files.
- Hash router. localStorage keys: `acca-fa-progress`, `acca-fa-lang`, `acca-fa-quiz-mode`. sessionStorage: `acca-fa-quiz-<key>`. Storage may be blocked, so wrap it; language stays in memory in `js/app.js`.
- All content renders as text through `el()` in `js/dom.js`, never innerHTML.
- Every label in `js/i18n.js` must exist in all three languages. A test checks this.
- Commits: add files by name. End with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. PDFs must never be committed. `.gitignore` covers `.superpowers/`, `*.pdf`, `.claude/`.
- If the Fable model hits its usage limit, use Opus for subagents.
- Screenshots: `shoot.mjs` in the scratchpad drives headless Edge over CDP. Disable the network cache. Reloading inside a run script cuts it off, so use hash navigation. Rewrite it if the scratchpad is gone.

## What the user wants, always

- Three practice sections: after-topic practice, weak areas, a topic picker.
- Quiz modes: one at a time, or all at once.
- No AI features, no typed requests (cost). No calendar. No Telegram.
- Freely browsable, no locking. Works on desktop and phone. Opens from `file://` with no install. Ready for a public URL later.
- One running business across chapters: Madina's Mart.
- Information must not be wrong. Check against the books.
- Short messages, plain language, one question at a time. Make sensible calls when they say "up to you".

## Still unverified or open

- Russian and Uzbek have not been read by a fluent speaker. Only spot checks were done.
- The user's exam sitting is unknown. Both books are valid only to 31 August 2026.
- ACCA's FA list for September 2026 to June 2027 covers IAS 2, 7, 10, 16, 27, 28, 37, 38, IFRS 3, 10, 15, 18 and the Conceptual Framework, with a cut-off of 31 August 2024. The review found nothing there that changes chapters 5-10. BPP and Physics Wallah say the syllabus is unchanged, but this was not checked on ACCA's own site.
- Book issues already handled: the Conceptual Framework year is omitted, the IFRS 18 title is corrected, and the vote count shows 8 of 15 and 9 of 14.
- The reviewer did not open chapters 5-10 in a browser.
