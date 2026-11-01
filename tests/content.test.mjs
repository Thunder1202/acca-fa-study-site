import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const LANGS = ['en', 'ru', 'uz'];

function assertTrilingual(field, where) {
  for (const lang of LANGS) {
    assert.equal(typeof field?.[lang], 'string', `${where}: ${lang} missing`);
    assert.ok(field[lang].trim().length > 0, `${where}: ${lang} empty`);
  }
}

test('the course map lists chapters 1-20 once each, in book order, in three languages', () => {
  const course = require('../data/course.js');
  const numbers = course.flatMap((g) => g.chapters.map((c) => c.number));
  assert.deepEqual(numbers, Array.from({ length: 20 }, (_, i) => i + 1));
  for (const group of course) {
    assertTrilingual(group.title, 'group title');
    for (const c of group.chapters) assertTrilingual(c.title, `chapter ${c.number} title`);
  }
});

const QUESTION_SETS = [
  { file: 'questions-ch01', topicId: 'chapter-01', first: 1, last: 46 },
  { file: 'questions-ch02', topicId: 'chapter-02', first: 47, last: 58 },
  { file: 'questions-ch05', topicId: 'chapter-05', first: 148, last: 170 },
];

for (const { file, topicId, first, last } of QUESTION_SETS) {
  const questions = require(`../data/${file}.js`);

  test(`${file} has exactly one question per Kit number ${first}-${last}`, () => {
    const expected = Array.from({ length: last - first + 1 }, (_, i) => first + i);
    assert.deepEqual(questions.map((q) => q.kitRef), expected);
  });

  test(`${file} ids are unique and every question has its topic`, () => {
    assert.equal(new Set(questions.map((q) => q.id)).size, questions.length);
    for (const q of questions) assert.equal(q.topicId, topicId);
  });

  test(`${file} answer keys are valid for each question type`, () => {
    for (const q of questions) {
      assert.ok(q.text.trim().length > 0, `Q${q.kitRef} text`);
      if (q.type === 'single') {
        assert.equal(q.options.length, 4, `Q${q.kitRef} options`);
        assert.ok(q.correctIndex >= 0 && q.correctIndex < 4, `Q${q.kitRef} key`);
      } else if (q.type === 'multi') {
        assert.equal(q.correctIndices.length, 2, `Q${q.kitRef} key`);
        for (const i of q.correctIndices) assert.ok(i >= 0 && i < q.options.length, `Q${q.kitRef} key`);
      } else if (q.type === 'matrix') {
        assert.ok(q.columns.length >= 2, `Q${q.kitRef} columns`);
        for (const r of q.rows) assert.ok(r.correctIndex >= 0 && r.correctIndex < q.columns.length, `Q${q.kitRef} key`);
      } else if (q.type === 'number') {
        assert.ok(Number.isFinite(q.correctValue), `Q${q.kitRef} key`);
        assert.ok(q.answerText.trim().length > 0, `Q${q.kitRef} answer text`);
      } else {
        assert.fail(`Q${q.kitRef} unknown type ${q.type}`);
      }
    }
  });

  test(`${file} explanations exist in all three languages`, () => {
    for (const q of questions) assertTrilingual(q.explanation, `Q${q.kitRef} explanation`);
  });
}

for (const id of ['01', '02', '05']) {
  const chapter = require(`../data/chapter-${id}.js`);

  test(`chapter ${id} has every lesson field in all three languages`, () => {
    assert.equal(chapter.id, `chapter-${id}`);
    assertTrilingual(chapter.titles, 'title');
    assert.ok(chapter.objectives.length > 0);
    chapter.objectives.forEach((o, i) => assertTrilingual(o, `objective ${i}`));
    assert.ok(chapter.sections.length > 0);
    chapter.sections.forEach((s, i) => {
      assertTrilingual(s.heading, `section ${i} heading`);
      assertTrilingual(s.body, `section ${i} body`);
      assertTrilingual(s.example, `section ${i} example`);
    });
    assert.ok(chapter.glossary.length > 0);
    chapter.glossary.forEach((g, i) => {
      assertTrilingual(g.term, `glossary ${i} term`);
      assertTrilingual(g.definition, `glossary ${i} definition`);
    });
  });

  test(`chapter ${id} key points are short bullets in all three languages`, () => {
    chapter.sections.forEach((s, i) => {
      assertTrilingual(s.key, `section ${i} key`);
      const counts = LANGS.map((l) => s.key[l].trim().split('\n').length);
      assert.equal(new Set(counts).size, 1, `section ${i} bullet counts differ: ${counts}`);
      assert.ok(counts[0] <= 6, `section ${i} has too many bullets`);
      for (const lang of LANGS) {
        for (const line of s.key[lang].trim().split('\n')) {
          assert.ok(line.startsWith('- '), `section ${i} ${lang}: not a bullet`);
          assert.ok(line.length <= 120, `section ${i} ${lang}: too long: ${line}`);
        }
      }
    });
  });

  test(`chapter ${id} exam notes, where present, match in all three languages`, () => {
    for (const [i, s] of chapter.sections.entries()) {
      if (!s.exam) continue;
      assertTrilingual(s.exam, `section ${i} exam`);
      const counts = LANGS.map((l) => s.exam[l].trim().split('\n').length);
      assert.equal(new Set(counts).size, 1, `section ${i} exam note counts differ: ${counts}`);
    }
  });

  test(`chapter ${id} lessons have the same paragraph count in each language`, () => {
    chapter.sections.forEach((s, i) => {
      const counts = LANGS.map((l) => s.body[l].trim().split(/\n\s*\n/).length);
      assert.equal(new Set(counts).size, 1, `section ${i} paragraphs differ: ${counts}`);
    });
  });
}
