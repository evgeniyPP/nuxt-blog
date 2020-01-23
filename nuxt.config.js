module.exports = {
	mode: 'universal',
	// Headers of the page
	head: {
		title: 'Veni, vidi, vici – мой блог на Nuxt.js',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Блог Евгений Петрянкина, написанный при изучении Nuxt.js с использованием технологии Server-Side Rendering'
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content: 'js, javascript, vue, ssr, nuxt, nuxtjs, blog'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	// Customize the progress-bar color
	loading: { color: '#409eff' },

	// Global CSS
	css: ['element-ui/lib/theme-chalk/index.css', '@/theme/index.scss'],

	// Plugins to load before mounting the App
	plugins: ['@/plugins/globals', '@/plugins/axios'],

	// Nuxt.js dev-modules
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		// Doc: https://github.com/nuxt-community/stylelint-module
		'@nuxtjs/stylelint-module'
	],

	// Nuxt.js modules
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa'
	],

	// Axios module configuration
	// See https://axios.nuxtjs.org/options
	axios: {
		baseURL: process.env.BASE_URL || 'http://localhost:3000'
	},

	env: {
		appName: 'Veni, vidi, vici – мой блог на Nuxt.js'
	},

	// Build configuration
	build: {
		transpile: [/^element-ui/],

		// You can extend webpack config here
		extend(config, ctx) {}
	}
}
