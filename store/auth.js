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
			const token = await new Promise(resolve => resolve('mock-token'))
			dispatch('setToken', token)
			console.log(data)
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
	}
}

export const getters = {
	isAuth: state => Boolean(state.token)
}
