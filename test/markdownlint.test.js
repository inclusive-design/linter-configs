import test from 'node:test';
import assert from 'node:assert';
import config from '../markdownlint/index.js';

test('markdownlintConfig', async () => {
	assert.ok(typeof config === 'object');
});
