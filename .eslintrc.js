module.exports = {
	env: {
		browser: false,
		es6: true,
	},
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended'
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: [".js", ".ts"]
			}
		}
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		'indent': [2, "tab"],
		'no-tabs': 0,
		'arrow-parens': "off",
		'semi': 0
	},
};
