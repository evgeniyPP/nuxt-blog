export const state = () => ({
	token: null
})

export const mutations = {
	setToken(state, token) {
		state.token = token
	}
}

export const actions = {
	async login({ commit, dispatch }, data) {
		const token = await new Promise(resolve => resolve('mock-token'))
		dispatch('setToken', token)
		console.log(data)
	},
	setToken({ commit }, token) {
		commit('setToken', token)
	}
}

export const getters = {
	isAuth: state => Boolean(state.token)
}
