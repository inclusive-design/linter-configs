import test from 'node:test';
import assert from 'node:assert';
import config from '../index.js';

test('stylelintConfig', () => {
	assert.strictEqual(typeof config, 'object');
});
