<template>
	<h1>Выходим из системы... Пожалуйста, подождите</h1>
</template>

<script>
export default {
	layout: 'admin',
	head: {
		title: `Выходим... | ${process.env.appName}`
	},
	middleware: ['admin-auth'],
	beforeCreate() {
		this.$store.dispatch('admin/logout')
		this.$router.push('/admin/login?message=logout')
	}
}
</script>
