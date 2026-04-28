import markdownlintConfig from './markdownlint/index.js';

export default {
	config: markdownlintConfig.config,
	ignores: ['node_modules', 'test', '**/CHANGELOG.md'],
};
