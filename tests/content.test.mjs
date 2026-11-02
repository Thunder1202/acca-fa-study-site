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
  { file: 'questions-ch19', topicId: 'chapter-19', refs: [470, 471, 472, 473, 474, 475, 476, 477, 481, 482, 484, 486, 487, 489, 490, 495, 496, 497, 498, 499, 501, 504] },
  { file: 'questions-ch20', topicId: 'chapter-20', refs: [478, 479, 480, 483, 485, 488, 491, 492, 493, 494, 500, 502, 503, 505, 506, 507] },
  { file: 'questions-ch18', topicId: 'chapter-18', first: 508, last: 550 },
  { file: 'questions-ch17', topicId: 'chapter-17', first: 436, last: 457 },
  { file: 'questions-ch16', topicId: 'chapter-16', first: 458, last: 469 },
  { file: 'questions-ch15', topicId: 'chapter-15', first: 368, last: 435 },
  { file: 'questions-ch14', topicId: 'chapter-14', first: 330, last: 367 },
  { file: 'questions-ch13', topicId: 'chapter-13', first: 293, last: 329 },
  { file: 'questions-ch12', topicId: 'chapter-12', first: 275, last: 292 },
  { file: 'questions-ch11', topicId: 'chapter-11', first: 257, last: 274 },
  { file: 'questions-ch01', topicId: 'chapter-01', first: 1, last: 46 },
  { file: 'questions-ch02', topicId: 'chapter-02', first: 47, last: 58 },
  { file: 'questions-ch03', topicId: 'chapter-03', first: 59, last: 100 },
  { file: 'questions-ch04', topicId: 'chapter-04', first: 101, last: 147 },
  { file: 'questions-ch05', topicId: 'chapter-05', first: 148, last: 170 },
  { file: 'questions-ch08', topicId: 'chapter-08', first: 205, last: 221 },
  { file: 'questions-ch09', topicId: 'chapter-09', first: 222, last: 233 },
  { file: 'questions-ch10', topicId: 'chapter-10', first: 234, last: 256 },
  { file: 'questions-ch06', topicId: 'chapter-06', refs: [171, 173, 174, 175, 178, 181, 184, 186, 189, 201, 202, 203] },
  { file: 'questions-ch07', topicId: 'chapter-07', refs: [172, 176, 177, 179, 180, 182, 183, 185, 187, 188, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 204] },
];

test('chapters 6 and 7 together cover Kit Q171-204 exactly once', () => {
  const ids = [...require('../data/questions-ch06.js'), ...require('../data/questions-ch07.js')].map((q) => q.kitRef).sort((a, b) => a - b);
  assert.deepEqual(ids, Array.from({ length: 34 }, (_, i) => 171 + i));
});

test('chapters 19 and 20 together cover Kit Q470-507 exactly once', () => {
  const ids = [...require('../data/questions-ch19.js'), ...require('../data/questions-ch20.js')].map((q) => q.kitRef).sort((a, b) => a - b);
  assert.deepEqual(ids, Array.from({ length: 38 }, (_, i) => 470 + i));
});

test('every Kit question from 1 to 550 is covered exactly once', () => {
  const ids = QUESTION_SETS.flatMap(({ file }) => require(`../data/${file}.js`).map((q) => q.kitRef)).sort((a, b) => a - b);
  assert.deepEqual(ids, Array.from({ length: 550 }, (_, i) => i + 1));
});

for (const { file, topicId, first, last, refs } of QUESTION_SETS) {
  const questions = require(`../data/${file}.js`);

  test(`${file} has exactly one question per expected Kit number`, () => {
    const expected = refs ?? Array.from({ length: last - first + 1 }, (_, i) => first + i);
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
        if (q.unit !== undefined) assert.ok(['%', ':1', 'days', 'times'].includes(q.unit), `Q${q.kitRef} unit`);
      } else {
        assert.fail(`Q${q.kitRef} unknown type ${q.type}`);
      }
    }
  });

  test(`${file} explanations exist in all three languages`, () => {
    for (const q of questions) assertTrilingual(q.explanation, `Q${q.kitRef} explanation`);
  });
}

for (const id of ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']) {
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
