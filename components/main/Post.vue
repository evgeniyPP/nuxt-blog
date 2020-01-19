<template>
	<el-card :body-style="{ padding: 0 }" class="post" shadow="hover">
		<header slot="header">
			<h3>{{ post.title }}</h3>
			<small> <i class="el-icon-time" />{{ post.date | date('date') }} </small>
		</header>
		<main>
			<img :src="post.imageUrl" alt="main" />
		</main>
		<footer>
			<el-button @click="openPost(post._id)" round>Открыть</el-button>
			<span><i class="el-icon-s-comment" />{{ post.comments.length }}</span>
		</footer>
	</el-card>
</template>

<script>
export default {
	props: { post: { type: Object, required: true } },
	methods: {
		openPost(id) {
			this.$router.push(`/p/${id}`)
		}
	}
}
</script>

<style lang="scss" scoped>
.post {
	min-height: 200px;
	border: 1px solid #ccc;
	margin-bottom: 1.5rem;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

img {
	width: 100%;
	height: auto;
}

footer {
	padding: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
