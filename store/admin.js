export const state = () => ({
	token: true
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
		commit('clearToken')
	},
	setToken({ commit }, token) {
		commit('setToken', token)
	},
	createUser({ commit, dispatch }, data) {
		try {
			console.log('user created ', data)
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	}
}

export const getters = {
	isAuth: state => Boolean(state.token)
}
