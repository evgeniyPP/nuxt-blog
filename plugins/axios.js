export default function({ $axios, redirect, store }) {
	$axios.interceptors.request.use(req => {
		const isAuth = store.getters['admin/isAuth']
		if (isAuth && !req.headers.common.Authorization) {
			const token = store.getters['admin/token']
			req.headers.common.Authorization = `Bearer ${token}`
		}
		return req
	})

	$axios.onError(error => {
		if (error.response) {
			if (error.response.status === 401) {
				redirect('/admin/login?message=session')
				store.dispatch('admin/logout')
			}

			if (error.response.status === 500) {
				console.error('Error 500: Ошибка сервера')
			}
		}
	})
}
