module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser', // Specifies the ESLint parser
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			// Allows for the parsing of JSX
			jsx: true,
		},
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'vue/multi-word-component-names': 0,
		'vue/singleline-html-element-content-newline': 'off',
		'semi': ['error', 'always'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'indent': ['error', 'tab'],
		'no-tabs': ['off', { allowIndentationTabs: true }],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		'no-extra-boolean-cast': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'prefer-const': 'off',
		'vue/max-attributes-per-line': [
			2,
			{
				'singleline': 5,
				'multiline': 2
			}
		],
		"indent": 'off',
		'vue/script-indent': ['error',2,{'baseIndent': 1}],
		'vue/html-indent': ['error',2,{'baseIndent': 1}]
	},
};
