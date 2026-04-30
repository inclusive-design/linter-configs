import {defineConfig} from 'eslint/config';
import eslintConfigInclusiveDesign from './packages/eslint-config/index.js';

export default defineConfig([
	eslintConfigInclusiveDesign,
	{
		ignores: ['packages/eslint-config/test/fixtures/bad/*'],
	},
]);
