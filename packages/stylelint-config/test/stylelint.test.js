import test from 'node:test';
import assert from 'node:assert';
import config from '../index.js';

test('stylelintConfig', async () => {
	assert.ok(typeof config === 'object');
});
