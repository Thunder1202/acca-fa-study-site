# Group 1 Pilot (ACCA FA Ch.1-2 Learning Site) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local, static, trilingual (EN/RU/UZ) learning site covering ACCA FA Chapters 1-2 (Introduction to financial reporting; The regulatory framework), with a running example business, topic-tagged practice questions in two quiz modes, and localStorage-based progress/weak-area tracking — to be exam-ready for the ACCA FA (F3) exam.

**Architecture:** Plain HTML/CSS/ES-modules, no framework, no build step, no npm install. Content (lessons, glossary, questions) lives in static `.mjs` data modules. A small router reads the URL hash and renders views into a single page shell. Pure-logic modules (progress tracking, quiz scoring) are dependency-injected so they can run under Node's built-in test runner as well as in the browser.

**Tech Stack:** HTML5, CSS3, vanilla JavaScript (ES modules, `.mjs`), Node.js built-in `node:test`/`node:assert` for unit tests (dev-only, not shipped to the browser). No dependencies, no package manager install step.

**Spec:** `GROUP1_PILOT_DESIGN.md` (and `PROJECT_NOTES.md` for the overall project context this pilot establishes the pattern for).

## Global Constraints

- No frameworks, no bundler, no build step, no `npm install` — must run by opening `index.html` directly (or via any static file server).
- Lesson content and glossary: trilingual, fields shaped `{en, ru, uz}`.
- Question text and answer options: English only (matches the real exam).
- Question explanations (shown after answering): trilingual, `{en, ru, uz}`.
- Question wording is original (rewritten to cover the same concepts/style as the Exam Kit, not copied verbatim), per the copyright constraint in `PROJECT_NOTES.md`.
- Progress persisted under localStorage key `acca-fa-progress`, shape: `{ [topicId]: { attempted: number, correct: number, lastScore: number } }`.
- Chapters are freely browsable — no locking/sequence enforcement.
- Quiz supports two modes, user-selectable: one-question-at-a-time with immediate feedback, and all-questions-then-submit.
- "Weak areas" ranks topics by `lastScore` ascending; topics with no entry in progress rank as weakest (shown first).
- Responsive layout: no horizontal scroll or unusable touch targets at 375px width.
- Visual theme: Naruto-inspired but subtle — leaf-mark accent + orange/charcoal/red palette, no chibi art, no in-jokes; must read as a serious study tool.
- Must work with only its own `/data` files at runtime — no dependency on the source Kaplan PDFs being present.

## Review Focus

- Weak-areas ranking must treat a never-attempted topic as weaker than any attempted topic, however low-scoring (spec says unattempted counts as weakest) — Task 2's tests cover this.
- Switching the language selector must not reset the current route/view back to home — Task 8's manual verification covers this.
- The all-at-once quiz mode must correctly score the *last* question in the set (off-by-one risk on submit) — Task 3's tests cover this.
- `localStorage` can throw or be unavailable (private browsing / disabled storage) — the app must not crash, just skip persistence — Task 2's tests cover a storage object that throws on `setItem`.
- On a 375px-wide viewport, quiz option buttons and the language switcher must not overflow or force horizontal scroll — Task 9's manual verification covers this.

---

## Task 1: Repo setup, page shell, and router

**Files:**
- Create: `index.html`
- Create: `style.css` (base reset, CSS custom properties for the theme palette, layout skeleton only — full theming in Task 9)
- Create: `js/router.mjs`
- Create: `js/app.mjs`
- Test: `tests/router.test.mjs`

**Interfaces:**
- Produces (`js/router.mjs`): `parseRoute(hash: string) -> { view: 'home'|'chapter'|'quiz'|'weak-areas', params: Record<string,string> }`; `onHashChange(callback: (hash: string) => void) -> void` (wraps `window.addEventListener('hashchange', ...)`).
- Produces (`js/app.mjs`): entry point, no exports consumed by later tasks except that it imports `parseRoute` and renders into `document.getElementById('app')`.

- [ ] **Step 1: Initialize git**

Run: `git init` in the project root, then `git add PROJECT_NOTES.md GROUP1_PILOT_DESIGN.md docs/` and `git commit -m "docs: project notes and pilot design"`.

- [ ] **Step 2: Write the failing router test**

```js
// tests/router.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { parseRoute } from '../js/router.mjs';

test('empty hash routes home', () => {
  assert.deepEqual(parseRoute(''), { view: 'home', params: {} });
});

test('chapter route extracts id', () => {
  assert.deepEqual(parseRoute('#/chapter/1'), { view: 'chapter', params: { id: '1' } });
});

test('quiz route extracts topicId', () => {
  assert.deepEqual(parseRoute('#/quiz/chapter-01'), { view: 'quiz', params: { topicId: 'chapter-01' } });
});

test('weak-areas route has no params', () => {
  assert.deepEqual(parseRoute('#/weak-areas'), { view: 'weak-areas', params: {} });
});

test('unknown route falls back to home', () => {
  assert.deepEqual(parseRoute('#/nonsense'), { view: 'home', params: {} });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `node --test tests/router.test.mjs`
Expected: FAIL (`js/router.mjs` not found / `parseRoute` undefined).

- [ ] **Step 4: Implement `parseRoute` and `onHashChange` in `js/router.mjs`**

Plain string parsing of the `#/view/param` shape above; no routing library.

- [ ] **Step 5: Run test to verify it passes**

Run: `node --test tests/router.test.mjs`
Expected: PASS, 5/5.

- [ ] **Step 6: Build `index.html` + `js/app.mjs` placeholder shell**

`index.html` has a header (site title, a `<select id="lang-switcher">` with `en`/`ru`/`uz`, nav links to Home/Weak Areas), a `<main id="app"></main>`, and `<script type="module" src="./js/app.mjs"></script>`. `app.mjs` calls `onHashChange` and on each change calls `parseRoute(location.hash)` and writes `JSON.stringify(route)` into `#app` as a placeholder (real rendering arrives in later tasks).

- [ ] **Step 7: Manual verification**

Open `index.html` in a browser; change the URL hash manually (`#/chapter/1`, `#/quiz/chapter-01`, `#/weak-areas`) and confirm the placeholder text updates correctly for each.

- [ ] **Step 8: Commit**

```bash
git add index.html style.css js/router.mjs js/app.mjs tests/router.test.mjs
git commit -m "feat: page shell and hash router"
```

---

## Task 2: Progress tracking module

**Files:**
- Create: `js/progress.mjs`
- Test: `tests/progress.test.mjs`

**Interfaces:**
- Consumes: nothing from Task 1.
- Produces: `loadProgress(storage: Storage) -> Record<string, {attempted:number, correct:number, lastScore:number}>`; `recordSession(storage: Storage, topicId: string, correct: number, attempted: number) -> void`; `getWeakestFirst(storage: Storage, allTopicIds: string[]) -> string[]` (topic ids ordered weakest-first; unattempted topics first, then by ascending `lastScore`). `storage` is any object with `getItem`/`setItem` (defaults to `localStorage` when the browser global exists, but every exported function takes it as an explicit parameter so tests can inject a fake).

- [ ] **Step 1: Write the failing tests**

```js
// tests/progress.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { loadProgress, recordSession, getWeakestFirst } from '../js/progress.mjs';

function fakeStorage() {
  const data = {};
  return { getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v; } };
}

test('loadProgress on empty storage returns {}', () => {
  assert.deepEqual(loadProgress(fakeStorage()), {});
});

test('recordSession writes attempted/correct/lastScore', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 4, 5);
  assert.deepEqual(loadProgress(s), { 'chapter-01': { attempted: 5, correct: 4, lastScore: 0.8 } });
});

test('recordSession accumulates attempted/correct across sessions, lastScore is latest only', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 4, 5);
  recordSession(s, 'chapter-01', 1, 5);
  assert.deepEqual(loadProgress(s), { 'chapter-01': { attempted: 10, correct: 5, lastScore: 0.2 } });
});

test('getWeakestFirst puts never-attempted topics before any attempted topic', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 5, 5); // lastScore 1.0
  const order = getWeakestFirst(s, ['chapter-01', 'chapter-02']);
  assert.deepEqual(order, ['chapter-02', 'chapter-01']);
});

test('getWeakestFirst orders attempted topics by ascending lastScore', () => {
  const s = fakeStorage();
  recordSession(s, 'chapter-01', 4, 5); // 0.8
  recordSession(s, 'chapter-02', 1, 5); // 0.2
  assert.deepEqual(getWeakestFirst(s, ['chapter-01', 'chapter-02']), ['chapter-02', 'chapter-01']);
});

test('recordSession does not throw when storage.setItem throws', () => {
  const s = { getItem: () => null, setItem: () => { throw new Error('disabled'); } };
  assert.doesNotThrow(() => recordSession(s, 'chapter-01', 1, 1));
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test tests/progress.test.mjs`
Expected: FAIL (`js/progress.mjs` not found).

- [ ] **Step 3: Implement `js/progress.mjs`**

`loadProgress` JSON-parses `storage.getItem('acca-fa-progress')`, defaulting to `{}` on missing/invalid data. `recordSession` reads current progress, adds `attempted`/`correct` onto any existing totals for that topic, sets `lastScore = correct/attempted` for *this* session only, writes back via `storage.setItem`, wrapped in try/catch so a throwing `setItem` is swallowed. `getWeakestFirst` maps `allTopicIds` to their progress entry (or `undefined`), sorts so entries with no progress sort before any with progress, and among entries with progress sorts ascending by `lastScore`.

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test tests/progress.test.mjs`
Expected: PASS, 6/6.

- [ ] **Step 5: Commit**

```bash
git add js/progress.mjs tests/progress.test.mjs
git commit -m "feat: localStorage-backed progress tracking with weak-area ranking"
```

---

## Task 3: Quiz scoring engine

**Files:**
- Create: `js/quiz.mjs`
- Test: `tests/quiz.test.mjs`

**Interfaces:**
- Consumes: nothing from Tasks 1-2 (pure logic; the UI layer in Task 6 wires it to `progress.mjs`'s `recordSession`).
- Produces: `startSession(questions: {id:string, correctIndex:number}[]) -> QuizSession` where `QuizSession = { questions, answers: Map<string, number>, }`; `answer(session: QuizSession, questionId: string, selectedIndex: number) -> QuizSession` (returns a new session with that answer recorded, overwriting any prior answer for the same question); `isCorrect(session: QuizSession, questionId: string) -> boolean`; `score(session: QuizSession) -> {attempted: number, correct: number}` (counts only questions present in `session.answers`).

- [ ] **Step 1: Write the failing tests**

```js
// tests/quiz.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { startSession, answer, isCorrect, score } from '../js/quiz.mjs';

const QUESTIONS = [
  { id: 'q1', correctIndex: 0 },
  { id: 'q2', correctIndex: 1 },
  { id: 'q3', correctIndex: 2 },
];

test('score with no answers is 0/0', () => {
  assert.deepEqual(score(startSession(QUESTIONS)), { attempted: 0, correct: 0 });
});

test('answering all questions, 2 correct 1 wrong, scores 2/3 regardless of answer order', () => {
  let s = startSession(QUESTIONS);
  s = answer(s, 'q3', 2); // correct
  s = answer(s, 'q1', 1); // wrong
  s = answer(s, 'q2', 1); // correct
  assert.deepEqual(score(s), { attempted: 3, correct: 2 });
});

test('re-answering a question overwrites the previous answer, not double-counted', () => {
  let s = startSession(QUESTIONS);
  s = answer(s, 'q1', 1); // wrong
  s = answer(s, 'q1', 0); // corrected to right
  assert.deepEqual(score(s), { attempted: 1, correct: 1 });
  assert.equal(isCorrect(s, 'q1'), true);
});

test('scoring the last question in the set counts correctly', () => {
  let s = startSession(QUESTIONS);
  for (const q of QUESTIONS) s = answer(s, q.id, q.correctIndex);
  assert.deepEqual(score(s), { attempted: 3, correct: 3 });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `node --test tests/quiz.test.mjs`
Expected: FAIL (`js/quiz.mjs` not found).

- [ ] **Step 3: Implement `js/quiz.mjs`**

`startSession` stores the question list and an empty `Map` for answers. `answer` returns a shallow copy of the session with a new `Map` (copy of the old one plus the new entry) — keeps sessions immutable so UI code can hold onto a previous session if needed. `isCorrect` looks up `session.questions.find(q => q.id === questionId).correctIndex` and compares to the stored answer. `score` iterates `session.answers` entries and tallies.

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test tests/quiz.test.mjs`
Expected: PASS, 4/4.

- [ ] **Step 5: Commit**

```bash
git add js/quiz.mjs tests/quiz.test.mjs
git commit -m "feat: pure quiz scoring engine"
```

---

## Task 4: Chapter 1 content data (EN, then RU/UZ)

**Files:**
- Create: `data/chapter-01.mjs`

**Interfaces:**
- Produces: `default export` shaped `{ id: 'chapter-01', titles: {en,ru,uz}, objectives: {en,ru,uz}[], sections: [{heading:{en,ru,uz}, body:{en,ru,uz}, example:{en,ru,uz}}], glossary: [{term:{en,ru,uz}, definition:{en,ru,uz}}] }`. Later tasks (6, 7) import this module's `id` and `titles`.

- [ ] **Step 1: Write the English content**

Cover (per the Study Text chapter 1, pages 1-26, cached at `C:\Users\USER\AppData\Local\Temp\claude\extract\study_text_utf8.txt` lines ~1415-2483, re-extract with `pdftotext -layout "Kaplan Study Text.pdf" -` piped through `iconv` if that temp file is gone): what financial reporting is, types of business entity (sole trader/partnership/company), users of financial statements and their information needs, the main financial statements and their purpose, the elements of the financial statements (asset/liability/equity/income/expense), and the main accounting concepts/characteristics (accruals, going concern, prudence, etc.). Introduce "Madina's Mart" (sole trader, Tashkent) in the first section and use it as the worked example for business-entity type and for at least one of the accounting concepts.

- [ ] **Step 2: Verify against source**

Re-read the cached extract for chapter 1's page range and confirm every definition/concept listed in Step 1 is present and not misstated; confirm no sentence is a verbatim copy of the source (paraphrase any that are too close).

- [ ] **Step 3: Add Russian and Uzbek translations**

Fill in the `ru`/`uz` fields for every `titles`/`objectives`/`sections`/`glossary` entry written in Step 1. Translations should read naturally, not literally — a fluent speaker's phrasing, not a word-for-word mirror of the English.

- [ ] **Step 4: Manual verification**

Temporarily log `import('../data/chapter-01.mjs')` in a scratch Node REPL (`node -e "import('./data/chapter-01.mjs').then(m => console.log(JSON.stringify(m.default, null, 2)))"`) and confirm it parses as valid JS/JSON-shaped data with no missing language keys.

- [ ] **Step 5: Commit**

```bash
git add data/chapter-01.mjs
git commit -m "content: chapter 1 - introduction to financial reporting (EN/RU/UZ)"
```

---

## Task 5: Chapter 2 content data (EN, RU, UZ)

**Files:**
- Create: `data/chapter-02.mjs`

**Interfaces:**
- Same shape as Task 4's output, with `id: 'chapter-02'`.

- [ ] **Step 1: Write the English content**

Cover (per Study Text chapter 2, pages 27-40, same cached extract, lines ~2484-3156): purpose of the financial reporting regulatory system, the role of IFRS Accounting Standards (and the IASB), corporate governance, and the duties/responsibilities of company directors. Continue the Madina's Mart story — e.g. as the business considers incorporating, introduce why regulation/governance starts to matter.

- [ ] **Step 2: Verify against source**

Same check as Task 4 Step 2, against chapter 2's page range.

- [ ] **Step 3: Add Russian and Uzbek translations**

Same approach as Task 4 Step 3.

- [ ] **Step 4: Manual verification**

Same Node REPL check as Task 4 Step 4, for `chapter-02.mjs`.

- [ ] **Step 5: Commit**

```bash
git add data/chapter-02.mjs
git commit -m "content: chapter 2 - the regulatory framework (EN/RU/UZ)"
```

---

## Task 6: Practice question data for Chapter 1 and Chapter 2

**Files:**
- Create: `data/questions-ch01.mjs`
- Create: `data/questions-ch02.mjs`

**Interfaces:**
- Produces (each file): `default export` array of `{ id: string, topicId: 'chapter-01'|'chapter-02', text: string, options: string[4], correctIndex: number, explanation: {en,ru,uz} }`. `topicId` is what Task 7's quiz view filters on and what Task 3's `score`/Task 2's `recordSession` key by.

- [ ] **Step 1: Identify real topic coverage from the Exam Kit**

Re-extract (or reuse cached) `exam_kit_utf8.txt`; read the actual Section A question content (not just the garbled index) to find the questions whose heading matches "Introduction to financial reporting" and "The regulatory framework", and note what concepts/scenarios they test (business entity types, user groups, elements of FS, IFRS/IASB role, governance, director duties, etc.).

- [ ] **Step 2: Write 10-15 original questions per chapter**

For each chapter, write questions in the same style and difficulty as the identified Exam Kit questions but with original wording/scenarios (per the copyright constraint) — 4 options each, one `correctIndex`, covering every learning objective from that chapter's `data/chapter-0N.mjs`.

- [ ] **Step 3: Write trilingual explanations**

For each question, write the `explanation.en/ru/uz` describing what the question was testing and why the correct option is right (and, where useful, why a common wrong option is tempting).

- [ ] **Step 4: Manual verification**

Node REPL check (as in Task 4 Step 4) that both files load, every question has exactly 4 options, `correctIndex` is in range, and every `topicId` matches `chapter-01` or `chapter-02` as appropriate.

- [ ] **Step 5: Commit**

```bash
git add data/questions-ch01.mjs data/questions-ch02.mjs
git commit -m "content: tagged practice questions for chapters 1-2 (EN questions, EN/RU/UZ explanations)"
```

---

## Task 7: Chapter view and language switching

**Files:**
- Create: `js/views/chapter.mjs`
- Create: `js/i18n.mjs`
- Modify: `js/app.mjs` (wire the `chapter` route to this view instead of the Task 1 placeholder; wire `#lang-switcher` to `i18n.mjs`)

**Interfaces:**
- Consumes: `data/chapter-01.mjs`, `data/chapter-02.mjs` (Task 4/5's shape); `parseRoute`/`onHashChange` (Task 1).
- Produces (`js/i18n.mjs`): `getLang() -> 'en'|'ru'|'uz'` (reads from `localStorage.getItem('acca-fa-lang')`, defaults `'en'`), `setLang(lang) -> void` (persists and does **not** itself re-render — callers re-render), `t(field: {en,ru,uz}) -> string` (returns `field[getLang()]`).
- Produces (`js/views/chapter.mjs`): `renderChapter(container: HTMLElement, chapterData: object) -> void`.

- [ ] **Step 1: Implement `js/i18n.mjs`**

Three small functions as specified above; `getLang`/`setLang` wrapped in try/catch around `localStorage` access (same "storage may throw" concern as Task 2) so a disabled/unavailable `localStorage` just falls back to in-memory default `'en'` for that page load.

- [ ] **Step 2: Implement `renderChapter`**

Renders the chapter's `titles`, `objectives`, each `sections` entry (heading/body/example), and the `glossary`, all run through `t()`; includes a "Practice this topic" link to `#/quiz/<chapterData.id>`.

- [ ] **Step 3: Wire routing in `js/app.mjs`**

On `view === 'chapter'`, import the matching `data/chapter-0N.mjs` by `params.id` and call `renderChapter`. On `#lang-switcher` change, call `setLang` then re-run the current route's render (don't navigate away from the current view).

- [ ] **Step 4: Manual verification**

Open `index.html`, navigate to `#/chapter/1` and `#/chapter/2`, confirm content renders; switch the language selector between EN/RU/UZ and confirm the displayed text changes without navigating away from the chapter.

- [ ] **Step 5: Commit**

```bash
git add js/i18n.mjs js/views/chapter.mjs js/app.mjs
git commit -m "feat: chapter view with EN/RU/UZ language switching"
```

---

## Task 8: Quiz view (both modes) and weak-areas view

**Files:**
- Create: `js/views/quiz.mjs`
- Create: `js/views/weak-areas.mjs`
- Modify: `js/app.mjs` (wire `quiz` and `weak-areas` routes; call `js/progress.mjs`'s `recordSession` when a quiz session finishes)

**Interfaces:**
- Consumes: `js/quiz.mjs` (Task 3), `js/progress.mjs` (Task 2), `js/i18n.mjs` (Task 7), `data/questions-ch0N.mjs` (Task 6), `data/chapter-0N.mjs` (Task 4/5, for titles in the weak-areas list).
- Produces (`js/views/quiz.mjs`): `renderQuiz(container: HTMLElement, topicId: string, questions: Question[], mode: 'sequential'|'all-at-once') -> void`, plus a mode toggle control rendered at the top of the view that re-calls `renderQuiz` with the other mode.
- Produces (`js/views/weak-areas.mjs`): `renderWeakAreas(container: HTMLElement, allTopics: {id,titles}[]) -> void`.

- [ ] **Step 1: Implement `renderQuiz` — sequential mode**

One question at a time; on selecting an option, call `answer()` (Task 3), show correct/incorrect immediately plus `t(explanation)`, then a "Next" control; on the last question, call `recordSession(localStorage, topicId, score(session).correct, score(session).attempted)` and show a summary.

- [ ] **Step 2: Implement `renderQuiz` — all-at-once mode**

All questions rendered with their option inputs at once; a single "Submit" button calls `answer()` for every selected option, computes `score()`, calls `recordSession` the same way as Step 1, then re-renders showing each question's correctness + explanation.

- [ ] **Step 3: Implement `renderWeakAreas`**

Calls `getWeakestFirst(localStorage, allTopics.map(t => t.id))`, renders the topics in that order with their chapter title (via `t()`) and a "Practice" link to `#/quiz/<id>`.

- [ ] **Step 4: Wire routing in `js/app.mjs`**

`quiz` route imports the right `data/questions-ch0N.mjs` by `params.topicId` and calls `renderQuiz` (default mode `'sequential'`, switchable via the in-view toggle). `weak-areas` route passes the known chapter list (currently `chapter-01`, `chapter-02`) to `renderWeakAreas`.

- [ ] **Step 5: Manual verification**

Run a full quiz in sequential mode, confirm immediate per-question feedback and a correct final summary; reload and run it again in all-at-once mode, confirm feedback appears only after Submit and the last question is scored correctly; visit `#/weak-areas` and confirm the lower-scoring chapter is listed first; switch the language selector while on `#/weak-areas` and confirm it doesn't jump back to home.

- [ ] **Step 6: Commit**

```bash
git add js/views/quiz.mjs js/views/weak-areas.mjs js/app.mjs
git commit -m "feat: quiz view with both modes, weak-areas view, progress recording"
```

---

## Task 9: Naruto-inspired theme and responsive layout

**Files:**
- Modify: `style.css`

**Interfaces:**
- None (pure styling; no other task depends on CSS class names introduced here beyond what Tasks 1/7/8 already emit — if a hook class is needed, add it to the relevant view file in this task and note it here).

- [ ] **Step 1: Define the theme palette as CSS custom properties**

In `:root`: a Konoha-leaf green and warm orange as primary accents, deep charcoal background, a muted red for incorrect/error states and a leaf-green for correct/success states; one `--accent-leaf` color used sparingly for a small leaf-mark SVG in the header logo corner (inline SVG, not an image asset) and for section-divider accents. Keep body text on a high-contrast neutral (near-black on near-white, or inverse) — the palette accents decoration, not body copy.

- [ ] **Step 2: Responsive layout rules**

Mobile-first: single-column layout, nav collapses to a compact bar, quiz option buttons stack full-width and wrap text instead of overflowing, at a 375px viewport width. Wider viewports (`min-width: 768px`) get a constrained max-width content column and a horizontal nav.

- [ ] **Step 3: Manual verification**

Open `index.html`, use the browser's device toolbar (or resize the window) to 375px width and confirm no horizontal scrollbar appears on the home, chapter, quiz, and weak-areas views; confirm the language switcher and nav remain usable (tappable, not clipped) at that width.

- [ ] **Step 4: Commit**

```bash
git add style.css
git commit -m "style: naruto-inspired theme and responsive layout"
```

---

## Task 10: Final integration pass

**Files:**
- Modify: `js/app.mjs` (home view: brief site intro + links into chapter 1/2 and weak-areas, replacing any remaining placeholder from Task 1)
- Modify: `index.html` (page `<title>`, meta viewport/description) if not already set in Task 1

- [ ] **Step 1: Implement the home view**

Short intro text (trilingual via `t()`), a card/link per available chapter (currently 1-2) pointing at `#/chapter/N`, and a link to `#/weak-areas`.

- [ ] **Step 2: Run the full automated test suite**

Run: `node --test tests/`
Expected: all tests from Tasks 1-3 PASS.

- [ ] **Step 3: End-to-end manual walkthrough**

From a fresh browser profile (or after clearing `localStorage` for the page), walk the full path: home → chapter 1 → practice (sequential mode) → weak areas (should show chapter 2 as weakest, since it's unattempted) → chapter 2 → practice (all-at-once mode) → weak areas again (should now rank by actual scores). Confirm language switching works at every step and nothing throws in the browser console.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: home view and final integration for group 1 pilot"
```
