'use strict';

(function () {
  const { el, richText } = ACCA.dom;
  const { translate: t, label, LANGS } = ACCA.i18n;
  const { startSession, answer, isCorrect, score, isComplete, scoreByTopic, rankFor } = ACCA.quiz;
  const { recordSession } = ACCA.progress;
  const MODE_KEY = 'acca-fa-quiz-mode';

  // Kept outside the page render so changing language mid-quiz does not lose answers.
  let state = null;

  function loadMode(storage) {
    try {
      return storage.getItem(MODE_KEY) === 'all' ? 'all' : 'one';
    } catch {
      return 'one';
    }
  }

  function saveMode(storage, mode) {
    try {
      storage.setItem(MODE_KEY, mode);
    } catch {
      // Falls back to the default mode next visit.
    }
  }

  function newState(config) {
    return { key: config.key, mode: loadMode(config.storage), session: startSession(config.questions), index: 0, checked: false, finished: false };
  }

  function record(config) {
    for (const [topicId, totals] of Object.entries(scoreByTopic(state.session))) {
      recordSession(config.storage, topicId, totals.correct, totals.attempted);
    }
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

  function feedback(q, lang) {
    const right = isCorrect(state.session, q.id);
    return el('div', { class: `feedback ${right ? 'good' : 'bad'}`, role: 'status' },
      el('p', { class: 'feedback-title' }, label(right ? 'correct' : 'incorrect', lang)),
      richText(t(q.explanation, lang)),
      el('details', {},
        el('summary', {}, label('otherLanguages', lang)),
        LANGS.filter((l) => l !== lang).map((l) => el('div', { class: 'other-lang', lang: l }, richText(t(q.explanation, l))))));
  }

  function questionCard(q, number, total, lang, locked, onPick) {
    const given = state.session.answers.get(q.id);
    return el('section', { class: 'question' },
      el('p', { class: 'question-meta' },
        el('span', {}, `${label('question', lang)} ${number} ${label('of', lang)} ${total}`),
        el('span', { class: 'kit-ref' }, `${label('basedOnKit', lang)}${q.kitRef}`)),
      el('h2', { lang: 'en' }, q.text),
      q.type === 'multi' && el('p', { class: 'hint' }, label('selectTwo', lang)),
      el('div', { lang: 'en' }, q.type === 'matrix' ? matrix(q, given, locked, onPick) : choiceList(q, given, locked, onPick)),
      locked && feedback(q, lang));
  }

  function modeSwitch(config, redraw, lang) {
    const option = (mode, key) => el('button', {
      type: 'button', class: `segment${state.mode === mode ? ' is-on' : ''}`, 'aria-pressed': String(state.mode === mode),
      onclick: () => {
        if (state.mode === mode) return;
        saveMode(config.storage, mode);
        state = newState(config);
        redraw();
      },
    }, label(key, lang));
    return el('div', { class: 'mode' },
      el('div', { class: 'segments' }, option('one', 'modeOne'), option('all', 'modeAll')),
      el('p', { class: 'hint' }, label('modeNote', lang)));
  }

  function resultPanel(config, redraw, lang) {
    const { correct, attempted } = score(state.session);
    const percent = attempted === 0 ? 0 : Math.round((correct / attempted) * 100);
    return el('section', { class: 'result' },
      el('span', { class: 'result-stamp', lang: 'ja', 'aria-hidden': 'true' }, percent >= 50 ? '合格' : '修行'),
      el('p', { class: 'eyebrow' }, label('resultTitle', lang)),
      el('p', { class: 'result-score' }, `${percent}%`),
      el('p', { class: 'result-rank' }, label(rankFor(percent), lang)),
      el('p', {}, `${correct} / ${attempted}`),
      el('p', { class: 'hint' }, label('passNote', lang)),
      el('div', { class: 'actions' },
        el('button', { type: 'button', class: 'button primary', onclick: () => { state = newState(config); redraw(); } }, label('practiseAgain', lang)),
        el('a', { class: 'button', href: config.backHref }, label(config.backLabel, lang))));
  }

  function oneAtATime(config, redraw, lang) {
    const { questions } = config;
    if (state.finished) return resultPanel(config, redraw, lang);
    const q = questions[state.index];
    const last = state.index === questions.length - 1;
    const check = el('button', {
      type: 'button', class: 'button primary', disabled: !isComplete(q, state.session.answers.get(q.id)),
      onclick: () => { state.checked = true; redraw(); },
    }, label('checkAnswer', lang));
    const proceed = el('button', {
      type: 'button', class: 'button primary',
      onclick: () => {
        if (last) {
          record(config);
          state.finished = true;
        } else {
          state.index += 1;
          state.checked = false;
        }
        redraw();
      },
    }, label(last ? 'finish' : 'next', lang));
    const onPick = (value) => {
      state.session = answer(state.session, q.id, value);
      check.disabled = !isComplete(q, value);
    };
    return el('div', {},
      el('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(questions.length), 'aria-valuenow': String(state.index + 1) },
        el('span', { style: `width:${((state.index + 1) / questions.length) * 100}%;--turn:${state.index * 45}deg` })),
      questionCard(q, state.index + 1, questions.length, lang, state.checked, onPick),
      el('div', { class: 'actions' }, state.checked ? proceed : check));
  }

  function allAtOnce(config, redraw, lang) {
    const { questions } = config;
    const remaining = () => questions.filter((q) => !isComplete(q, state.session.answers.get(q.id))).length;
    const counter = el('p', { class: 'hint' });
    const submit = el('button', {
      type: 'button', class: 'button primary',
      onclick: () => { record(config); state.finished = true; redraw(); window.scrollTo(0, 0); },
    }, label('submitAll', lang));
    const refresh = () => {
      const left = remaining();
      counter.textContent = left > 0 ? `${label('stillToAnswer', lang)} ${left}` : '';
      submit.disabled = left > 0;
    };
    const cards = questions.map((q, i) => questionCard(q, i + 1, questions.length, lang, state.finished, (value) => {
      state.session = answer(state.session, q.id, value);
      refresh();
    }));
    refresh();
    return el('div', {},
      state.finished && resultPanel(config, redraw, lang),
      cards,
      !state.finished && el('div', { class: 'actions sticky' }, counter, submit));
  }

  function renderQuiz(container, config, lang) {
    if (!state || state.key !== config.key) state = newState(config);
    const redraw = () => renderQuiz(container, config, lang);
    container.replaceChildren(el('div', { class: 'quiz' },
      el('header', { class: 'quiz-head' },
        el('h1', {}, config.title),
        modeSwitch(config, redraw, lang)),
      state.mode === 'all' ? allAtOnce(config, redraw, lang) : oneAtATime(config, redraw, lang)));
  }

  function resetQuiz() {
    state = null;
  }

  ACCA.quizView = { renderQuiz, resetQuiz };
})();
