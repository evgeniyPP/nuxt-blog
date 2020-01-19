<template>
	<div>
		<h1>Аналитика по постам</h1>
		<Chart
			:labels="views.labels"
			:data="views.data"
			title="Количество просмотров"
		/>
		<Chart
			:labels="comments.labels"
			:data="comments.data"
			title="Количество комментариев"
		/>
	</div>
</template>

<script>
import Chart from '@/components/admin/Chart'

export default {
	components: { Chart },
	layout: 'admin',
	head: {
		title: `Аналитика | ${process.env.appName}`
	},
	middleware: ['admin-auth'],
	async asyncData({ store }) {
		const { views, comments } = await store.dispatch('posts/getAnalytics')
		return { views, comments }
	}
}
</script>
