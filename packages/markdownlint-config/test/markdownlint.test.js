import test from 'node:test';
import assert from 'node:assert';
import config from '../index.js';

test('markdownlintConfig', async () => {
	assert.ok(typeof config === 'object');
});
