import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/src="\.\/([^"]+\.js)"/g)].map((m) => m[1]);

test('index.html loads scripts', () => {
  assert.ok(scripts.length > 50);
});

for (const file of scripts) {
  test(`${file} exists and compiles`, () => {
    const full = path.join(root, file);
    assert.ok(fs.existsSync(full), `${file} is listed in index.html but missing`);
    assert.doesNotThrow(() => new vm.Script(fs.readFileSync(full, 'utf8'), { filename: file }));
  });
}
