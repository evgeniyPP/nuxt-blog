<template>
	<el-row type="flex" justify="center">
		<el-col :xs="24" :sm="18" :md="12" :lg="10">
			<Post v-for="post in posts" :key="post._id" :post="post" />
		</el-col>
	</el-row>
</template>

<script>
import Post from '@/components/main/Post'
export default {
	head: {
		title: `Главная | ${process.env.appName}`,
		meta: [
			{
				hid: 'homepage',
				name: 'description',
				content: 'Главная страница моего блога на Nuxt.js'
			}
		]
	},
	components: { Post },
	async asyncData({ store }) {
		const posts = await store.dispatch('posts/fetch')
		return { posts }
	}
}
</script>
