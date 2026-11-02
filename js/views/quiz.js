'use strict';

(function () {
  const { el, richText } = ACCA.dom;
  const { translate: t, label, LANGS } = ACCA.i18n;
  const { startSession, answer, isCorrect, score, isComplete, scoreByTopic, bandFor, packAnswers, restoreSession, parseAmount } = ACCA.quiz;
  const { scoreMarks, formatClock, EXAM } = ACCA.exam;
  const { recordSession } = ACCA.progress;
  const MODE_KEY = 'acca-fa-quiz-mode';
  const SAVE_PREFIX = 'acca-fa-quiz-';

  // Kept outside the page render so changing language mid-quiz does not lose answers.
  let state = null;
  let currentMode = null;
  let clock = null;

  function stopClock() {
    if (clock) window.clearInterval(clock);
    clock = null;
  }

  function modeFor(config) {
    if (config.fixedMode) return config.fixedMode;
    if (currentMode) return currentMode;
    try {
      currentMode = config.storage.getItem(MODE_KEY) === 'all' ? 'all' : 'one';
    } catch {
      currentMode = 'one';
    }
    return currentMode;
  }

  function saveMode(storage, mode) {
    currentMode = mode;
    try {
      storage.setItem(MODE_KEY, mode);
    } catch {
      // The choice still holds until the page is closed.
    }
  }

  function newState(config) {
    return { key: config.key, mode: modeFor(config), session: startSession(config.questions), index: 0, checked: false, finished: false };
  }

  function clearSaved(key) {
    try {
      window.sessionStorage.removeItem(SAVE_PREFIX + key);
    } catch {
      // Nothing was saved if storage is blocked.
    }
  }

  // A set can take many minutes, so Back, Forward or a reload must not lose the answers.
  function saveProgress() {
    try {
      if (state.finished) clearSaved(state.key);
      else window.sessionStorage.setItem(SAVE_PREFIX + state.key, JSON.stringify({ index: state.index, checked: state.checked, answers: packAnswers(state.session) }));
    } catch {
      // Without storage the quiz still works; it just cannot be resumed.
    }
  }

  function resumeState(config) {
    try {
      const saved = JSON.parse(window.sessionStorage.getItem(SAVE_PREFIX + config.key));
      if (!saved) return null;
      const session = restoreSession(config.questions, saved.answers);
      const index = Math.min(saved.index, config.questions.length - 1);
      return { ...newState(config), session, index, checked: Boolean(saved.checked) };
    } catch {
      return null;
    }
  }

  function record(config) {
    for (const [topicId, totals] of Object.entries(scoreByTopic(state.session))) {
      recordSession(config.storage, topicId, totals.correct, totals.attempted);
    }
  }

  function finish(config) {
    stopClock();
    record(config);
    state.finished = true;
    clearSaved(state.key);
    if (config.exam) config.exam.onFinish(packAnswers(state.session), Boolean(config.timedOut));
  }

  function choiceList(q, given, locked, onPick) {
    const multi = q.type === 'multi';
    const picked = multi ? (given ?? []) : [given];
    const key = multi ? q.correctIndices : [q.correctIndex];
    return el('div', { class: 'choices' }, q.options.map((text, i) => {
      const status = !locked ? '' : key.includes(i) ? ' is-right' : picked.includes(i) ? ' is-wrong' : '';
      return el('label', { class: `choice${status}` },
        el('input', {
          type: multi ? 'checkbox' : 'radio', name: q.id, checked: picked.includes(i), disabled: locked,
          onchange: (event) => {
            if (!multi) return onPick(i);
            const current = state.session.answers.get(q.id) ?? [];
            return onPick(event.target.checked ? [...current, i] : current.filter((p) => p !== i));
          },
        }),
        el('span', {}, text));
    }));
  }

  function matrix(q, given, locked, onPick) {
    const picks = given ?? [];
    return el('div', { class: 'matrix' }, q.rows.map((row, r) => el('fieldset', { class: 'matrix-row' },
      el('legend', {}, row.text),
      el('div', { class: 'matrix-options' }, q.columns.map((column, c) => {
        const status = !locked ? '' : c === row.correctIndex ? ' is-right' : picks[r] === c ? ' is-wrong' : '';
        return el('label', { class: `choice${status}` },
          el('input', {
            type: 'radio', name: `${q.id}-${r}`, checked: picks[r] === c, disabled: locked,
            onchange: () => {
              const current = state.session.answers.get(q.id) ?? [];
              const next = q.rows.map((_, i) => current[i]);
              next[r] = c;
              onPick(next);
            },
          }),
          el('span', {}, column));
      })))));
  }

  function numberEntry(q, given, locked, onPick, onEnter, lang) {
    const status = !locked ? '' : isCorrect(state.session, q.id) ? ' is-right' : ' is-wrong';
    const warning = el('p', { class: 'hint entry-warning', role: 'status', hidden: true }, label('numberOnly', lang));
    return el('div', {},
      el('label', { class: `number-entry${status}` },
        !q.unit && el('span', { class: 'unit', 'aria-hidden': 'true' }, '$'),
        el('input', {
          type: 'text', inputmode: 'decimal', autocomplete: 'off', value: given ?? '', disabled: locked, 'aria-label': q.text,
          oninput: (event) => {
            const value = parseAmount(event.target.value);
            warning.hidden = value !== undefined || event.target.value.trim() === '';
            onPick(value);
          },
          onkeydown: (event) => {
            if (event.key !== 'Enter' || !onEnter) return;
            event.preventDefault();
            onEnter();
          },
        }),
        q.unit && el('span', { class: 'unit', 'aria-hidden': 'true' }, q.unit)),
      warning);
  }

  function dataTable(table) {
    return el('div', { class: 'q-table-wrap' }, el('table', { class: 'q-table' },
      table.head && el('thead', {}, el('tr', {}, table.head.map((cell) => el('th', { scope: 'col' }, cell)))),
      el('tbody', {}, table.rows.map((row) => el('tr', {}, row.map((cell, i) => el(i === 0 ? 'th' : 'td', i === 0 ? { scope: 'row' } : {}, cell)))))));
  }

  function feedback(q, lang) {
    const right = isCorrect(state.session, q.id);
    return el('div', { class: `feedback ${right ? 'good' : 'bad'}`, role: 'status', tabindex: '-1' },
      el('p', { class: 'feedback-title' }, label(right ? 'correct' : 'incorrect', lang)),
      q.type === 'number' && !right && el('p', { class: 'feedback-answer' }, `${label('correctAnswer', lang)}: ${q.answerText}`),
      richText(t(q.explanation, lang)),
      el('details', {},
        el('summary', {}, label('otherLanguages', lang)),
        LANGS.filter((l) => l !== lang).map((l) => el('div', { class: 'other-lang', lang: l }, richText(t(q.explanation, l))))));
  }

  function answerArea(q, given, locked, onPick, onEnter, lang) {
    if (q.type === 'matrix') return matrix(q, given, locked, onPick);
    if (q.type === 'number') return numberEntry(q, given, locked, onPick, onEnter, lang);
    return choiceList(q, given, locked, onPick);
  }

  function caseBlock(q, lang, full) {
    if (!full) return el('p', { class: 'case-ref' }, `${q.case.title} · ${label('caseSeeAbove', lang)}`);
    return el('section', { class: 'case', lang: 'en' },
      el('p', { class: 'case-label' }, `${label('caseScenario', lang)} · ${q.case.title}`),
      el('p', {}, q.case.intro),
      q.case.table && dataTable(q.case.table));
  }

  function source(q, lang) {
    if (q.case) return `${label('basedOnKitB', lang)}${q.case.kitRef}`;
    return `${label('basedOnKit', lang)}${q.kitRef}`;
  }

  function questionMeta(q, number, total, lang) {
    const marks = q.marks && `${q.marks} ${label(q.marks === 1 ? 'mark' : 'marks', lang)}`;
    const position = q.case
      ? `${label('task', lang)} ${q.taskNumber} ${label('of', lang)} ${q.taskCount}`
      : `${label('question', lang)} ${number} ${label('of', lang)} ${total}`;
    return el('p', { class: 'question-meta' },
      el('span', { class: 'q-position' }, [position, marks].filter(Boolean).join(' · ')),
      el('span', { class: 'kit-ref' }, source(q, lang)));
  }

  function questionCard(q, number, total, lang, locked, onPick, onEnter, showCase = true) {
    const given = state.session.answers.get(q.id);
    return el('section', { class: 'question', id: `q-${q.id}` },
      q.case && caseBlock(q, lang, showCase),
      questionMeta(q, number, total, lang),
      el('h2', { lang: 'en' }, q.text),
      q.table && dataTable(q.table),
      q.type === 'multi' && el('p', { class: 'hint' }, label('selectTwo', lang)),
      el('div', { lang: 'en' }, answerArea(q, given, locked, onPick, onEnter, lang)),
      locked && feedback(q, lang));
  }

  function modeSwitch(config, redraw, lang) {
    const option = (mode, key) => el('button', {
      type: 'button', class: `segment${state.mode === mode ? ' is-on' : ''}`, 'aria-pressed': String(state.mode === mode),
      onclick: () => {
        if (state.mode === mode) return;
        saveMode(config.storage, mode);
        clearSaved(config.key);
        state = newState(config);
        redraw();
      },
    }, label(key, lang));
    return el('div', { class: 'mode' },
      el('div', { class: 'segments' }, option('one', 'modeOne'), option('all', 'modeAll')),
      el('p', { class: 'hint' }, label('modeNote', lang)));
  }

  function topicBreakdown(config, lang) {
    const totals = {};
    for (const q of state.session.questions) {
      totals[q.topicId] ??= { right: 0, all: 0 };
      totals[q.topicId].all += 1;
      if (state.session.answers.has(q.id) && isCorrect(state.session, q.id)) totals[q.topicId].right += 1;
    }
    const rows = Object.entries(totals).map(([id, n]) => ({ id, ...n, title: config.topicTitle(id) }))
      .sort((a, b) => a.right / a.all - b.right / b.all);
    return el('details', { class: 'breakdown' },
      el('summary', {}, label('byTopic', lang)),
      el('ul', {}, rows.map((row) => el('li', {},
        el('span', {}, row.title),
        el('span', { class: 'meter', style: `--pct:${Math.round((row.right / row.all) * 100)}%`, 'aria-hidden': 'true' }),
        el('span', { class: 'meter-text' }, `${row.right}/${row.all}`)))));
  }

  function resultPanel(config, redraw, lang) {
    const exam = Boolean(config.exam);
    const { correct, attempted } = score(state.session);
    const { marks, total } = scoreMarks(state.session);
    const percent = exam ? Math.round((marks / total) * 100) : attempted === 0 ? 0 : Math.round((correct / attempted) * 100);
    const unanswered = state.session.questions.length - state.session.answers.size;
    const passed = percent >= EXAM.passPercent;
    return el('section', { class: `result ${passed ? 'is-pass' : 'is-below'}` },
      el('p', { class: 'result-eyebrow' }, label('resultTitle', lang)),
      el('p', { class: 'result-score' },
        el('span', { class: 'result-percent' }, `${percent}%`),
        el('span', { class: 'result-detail' }, exam ? `${marks} / ${total} ${label('marks', lang)}` : `${correct} / ${attempted}`)),
      el('p', { class: 'result-band' }, exam ? label(passed ? 'examPassed' : 'examNotPassed', lang) : label(bandFor(percent), lang)),
      el('div', { class: 'result-bar', style: `--pct:${percent}%`, 'aria-hidden': 'true' }, el('span', { class: 'pass-line' })),
      el('p', { class: 'result-note' }, [label('passNote', lang), exam && unanswered > 0 ? `${unanswered} ${label('unanswered', lang)}.` : '', exam ? label('reviewBelow', lang) : ''].filter(Boolean).join(' ')),
      exam && (config.timedOut || config.exam.timedOut) && el('p', { class: 'result-note' }, label('timeUp', lang)),
      exam && config.topicTitle && topicBreakdown(config, lang),
      el('div', { class: 'actions' },
        !exam && el('button', { type: 'button', class: 'button primary', onclick: () => { clearSaved(config.key); state = newState(config); redraw(); } }, label('practiseAgain', lang)),
        el('a', { class: `button${exam ? ' primary' : ''}`, href: config.backHref }, label(config.backLabel, lang))));
  }

  function oneAtATime(config, redraw, lang) {
    const { questions } = state.session;
    if (state.finished) return resultPanel(config, redraw, lang);
    const q = questions[state.index];
    const last = state.index === questions.length - 1;
    const check = el('button', {
      type: 'button', class: 'button primary', disabled: !isComplete(q, state.session.answers.get(q.id)),
      onclick: () => { state.checked = true; state.showFeedback = true; redraw(); },
    }, label('checkAnswer', lang));
    const proceed = el('button', {
      type: 'button', class: 'button primary',
      onclick: () => {
        if (last) finish(config);
        else {
          state.index += 1;
          state.checked = false;
        }
        redraw();
      },
    }, label(last ? 'finish' : 'next', lang));
    const onPick = (value) => {
      state.session = answer(state.session, q.id, value);
      saveProgress();
      check.disabled = !isComplete(q, value);
    };
    return el('div', {},
      el('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(questions.length), 'aria-valuenow': String(state.index + 1) },
        el('span', { style: `width:${((state.index + 1) / questions.length) * 100}%` })),
      questionCard(q, state.index + 1, questions.length, lang, state.checked, onPick, () => check.click()),
      el('div', { class: 'actions' }, state.checked ? proceed : check));
  }

  function timerBar(config, redraw, lang) {
    const text = el('span', { class: 'timer-value' });
    const bar = el('div', { class: 'timer', role: 'timer', 'aria-label': label('timeLeft', lang) }, el('span', { class: 'timer-label' }, label('timeLeft', lang)), text);
    const tick = () => {
      const left = config.exam.endsAt - Date.now();
      text.textContent = formatClock(left);
      bar.classList.toggle('is-low', left < 10 * 60 * 1000);
      if (left <= 0 && !state.finished) {
        config.timedOut = true;
        finish(config);
        redraw();
        window.scrollTo(0, 0);
      }
    };
    tick();
    stopClock();
    clock = window.setInterval(tick, 1000);
    return bar;
  }

  function allAtOnce(config, redraw, lang) {
    const { questions } = state.session;
    const exam = Boolean(config.exam);
    const remaining = () => questions.filter((q) => !isComplete(q, state.session.answers.get(q.id))).length;
    const counter = el('p', { class: 'hint' });
    const submit = el('button', {
      type: 'button', class: 'button primary',
      onclick: () => { finish(config); redraw(); window.scrollTo(0, 0); },
    }, label(exam ? 'examSubmit' : 'submitAll', lang));
    const refresh = () => {
      const left = remaining();
      counter.textContent = left > 0 ? `${label('stillToAnswer', lang)} ${left}` : '';
      submit.disabled = !exam && left > 0;
    };
    let sectionANumber = 0;
    const cards = [];
    questions.forEach((q, i) => {
      const previous = questions[i - 1];
      if (exam && i === 0 && !q.case) cards.push(el('h2', { class: 'section-heading' }, label('sectionA', lang)));
      if (exam && q.case && !previous?.case) cards.push(el('h2', { class: 'section-heading' }, label('sectionB', lang)));
      if (!q.case) sectionANumber += 1;
      const firstOfCase = q.case && previous?.case?.id !== q.case.id;
      cards.push(questionCard(q, sectionANumber, questions.filter((x) => !x.case).length, lang, state.finished, (value) => {
        state.session = answer(state.session, q.id, value);
        saveProgress();
        refresh();
      }, null, !q.case || firstOfCase));
    });
    refresh();
    return el('div', {},
      exam && !state.finished && timerBar(config, redraw, lang),
      state.finished && resultPanel(config, redraw, lang),
      cards,
      !state.finished && el('div', { class: 'actions sticky' }, counter, submit));
  }

  function renderQuiz(container, config, lang) {
    stopClock();
    if (!state || state.key !== config.key) {
      state = config.exam?.finishedAnswers
        ? { ...newState(config), session: restoreSession(config.questions, config.exam.finishedAnswers), finished: true }
        : resumeState(config) ?? newState(config);
    }
    saveProgress();
    const redraw = () => renderQuiz(container, config, lang);
    container.replaceChildren(el('div', { class: `quiz${config.exam ? ' is-exam' : ''}` },
      el('header', { class: 'quiz-head' },
        el('h1', {}, config.title),
        !config.fixedMode && modeSwitch(config, redraw, lang)),
      state.mode === 'all' ? allAtOnce(config, redraw, lang) : oneAtATime(config, redraw, lang)));
    if (state.mode !== 'one') return;
    const shown = state.showFeedback && container.querySelector('.feedback');
    state.showFeedback = false;
    if (shown) shown.focus({ preventScroll: true });
    if (shown) shown.scrollIntoView({ block: 'nearest', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    else window.scrollTo(0, 0);
  }

  function resetQuiz() {
    stopClock();
    state = null;
  }

  ACCA.quizView = { renderQuiz, resetQuiz };
})();
