export default function({ store, redirect }) {
	if (!store.getters['admin/isAuth']) {
		redirect('/admin/login?message=noauth')
	}
}
