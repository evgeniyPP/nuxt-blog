export const state = () => ({})

export const actions = {
	async fetch({ commit }) {
		try {
			return await this.$axios.$get('/api/post')
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	async fetchAdmin({ commit }) {
		try {
			return await this.$axios.$get('/api/post/admin')
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	async create({ commit }, { title, text, image }) {
		try {
			const fd = new FormData()
			fd.append('title', title)
			fd.append('text', text)
			fd.append('image', image, image.name)

			return await this.$axios.$post('/api/post/admin', fd)
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	async edit({ commit }, { id, title, text }) {
		try {
			return await this.$axios.$put(`/api/post/admin/${id}`, { title, text })
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	async remove({ commit }, id) {
		try {
			return await this.$axios.$delete(`/api/post/admin/${id}`)
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	async fetchSingle({ commit }, id) {
		try {
			return await this.$axios.$get(`/api/post/${id}`)
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	async fetchAdminSingle({ commit }, id) {
		try {
			return await this.$axios.$get(`/api/post/admin/${id}`)
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	async addView({ commit }, { _id, views }) {
		try {
			return await this.$axios.$put(`/api/post/add/view/${_id}`, { views })
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	},
	async getAnalytics({ commit }) {
		try {
			return await this.$axios.$get('/api/post/admin/get/analytics')
		} catch (e) {
			commit('setError', e, { root: true })
			throw e
		}
	}
}
