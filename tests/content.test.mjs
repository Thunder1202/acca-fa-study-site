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

for (const id of ['01', '02']) {
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

  test(`chapter ${id} lessons have the same paragraph count in each language`, () => {
    chapter.sections.forEach((s, i) => {
      const counts = LANGS.map((l) => s.body[l].trim().split(/\n\s*\n/).length);
      assert.equal(new Set(counts).size, 1, `section ${i} paragraphs differ: ${counts}`);
    });
  });
}
