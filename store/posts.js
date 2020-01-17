export const state = () => ({
	posts: [
		{
			title: 'Mock Post 1',
			text: 'Hello 1',
			date: new Date(),
			views: 22,
			comments: [1, 2],
			_id: 'id1'
		},
		{
			title: 'Mock Post 2',
			text: 'Hello 2',
			date: new Date(),
			views: 22,
			comments: [1, 2],
			_id: 'id2'
		},
		{
			title: 'Mock Post 3',
			text: 'Hello 3',
			date: new Date(),
			views: 22,
			comments: [1, 2],
			_id: 'id3'
		}
	]
})

export const actions = {
	async fetchAdmin({ state }) {
		const res = await new Promise(resolve =>
			setTimeout(() => resolve(state.posts), 1000)
		)
		return res
	},
	edit(store, data) {},
	remove(store, id) {},
	async fetchAdminSingle({ state }, id) {
		const res = await new Promise(resolve =>
			setTimeout(() =>
				resolve(
					state.posts.find(post => (post._id = id)),
					1000
				)
			)
		)
		return res
	}
}
