module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended'
	],
	plugins: ['prettier'],
	rules: {
		'nuxt/no-cjs-in-config': 'off',
		'no-alert': 'off',
		'no-array-constructor': 'off',
		'no-bitwise': 'off',
		'no-caller': 'off',
		'no-case-declarations': 'error',
		'no-catch-shadow': 'off',
		'no-class-assign': 'error',
		'no-cond-assign': 'error',
		'no-confusing-arrow': 'off',
		'no-console': 'off',
		'no-debugger': 'off'
	}
}
