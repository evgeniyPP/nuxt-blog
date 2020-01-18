import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

export const state = () => ({
	token: null
})

export const mutations = {
	setToken(state, token) {
		state.token = token
	},
	clearToken(state) {
		state.token = null
	}
}

export const actions = {
	async login({ commit, dispatch }, data) {
		try {
			const { token } = await this.$axios.$post('/api/auth/admin/login', data)
			dispatch('setToken', token)
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	logout({ commit }) {
		this.$axios.setToken(false)
		commit('clearToken')
		Cookies.remove('jwt-token')
	},
	setToken({ commit }, token) {
		this.$axios.setToken(token, 'Bearer')
		commit('setToken', token)
		Cookies.set('jwt-token', token)
	},
	async createUser({ commit, dispatch }, data) {
		try {
			await this.$axios.$post('/api/auth/admin/create', data)
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	autoLogin({ dispatch }) {
		const cookieStr = process.browser
			? document.cookie
			: this.app.context.req.headers.cookie

		const cookies = Cookie.parse(cookieStr || '') || {}
		const token = cookies['jwt-token']

		if (isTokenValid(token)) {
			dispatch('setToken', token)
		} else {
			dispatch('logout')
		}
	}
}

export const getters = {
	token: state => state.token,
	isAuth: state => Boolean(state.token)
}

function isTokenValid(token) {
	if (!token) {
		return false
	}

	const jwtData = jwtDecode(token) || {}
	const expires = jwtData.exp || 0

	return new Date().getTime() / 1000 < expires
}
