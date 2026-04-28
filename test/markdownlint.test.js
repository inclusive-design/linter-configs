import test from 'node:test';
import assert from 'node:assert';
import config from '../packages/markdownlint-config/index.js';

test('markdownlintConfig', async () => {
	assert.ok(typeof config === 'object');
});
