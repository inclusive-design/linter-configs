import {defineConfig} from 'eslint/config';
import eslintConfigInclusiveDesign from './eslint/index.js';

export default defineConfig([
	eslintConfigInclusiveDesign,
	{
		ignores: ['test/fixtures/eslint/*'],
	},
]);
