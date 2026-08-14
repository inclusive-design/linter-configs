import test from 'node:test';
import assert from 'node:assert';
import config from '../index.js';

test('markdownlintConfig', () => {
	assert.strictEqual(typeof config, 'object');
});
