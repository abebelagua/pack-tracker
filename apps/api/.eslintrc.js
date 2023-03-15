module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript'
	],
	root: true,
	env: {
		node: true,
		jest: true
	},
	ignorePatterns: ['.eslintrc.js'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts']
		}
	},
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'prettier/prettier': [
			'error',
			{
				semi: true,
				singleQuote: true,
				arrowParens: 'avoid',
				trailingComma: 'all',
				tabWidth: 4,
				useTabs: true,
				endOfLine: 'lf'
			}
		]
	}
};
