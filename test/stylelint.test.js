import test from 'node:test';
import assert from 'node:assert';
import config from '../packages/stylelint-config/index.js';

test('stylelintConfig', async () => {
	assert.ok(typeof config === 'object');
});
