export const actions = {
	async fetchAdmin() {
		const res = await new Promise(resolve =>
			resolve([
				{
					title: 'Mock Post 1',
					date: new Date(),
					views: 22,
					comments: [1, 2],
					_id: Math.random()
				},
				{
					title: 'Mock Post 2',
					date: new Date(),
					views: 22,
					comments: [1, 2],
					_id: Math.random()
				},
				{
					title: 'Mock Post 3',
					date: new Date(),
					views: 22,
					comments: [1, 2],
					_id: Math.random()
				}
			])
		)
		return res
	}
}
