<template>
	<el-card :body-style="{ padding: 0 }" class="post" shadow="hover">
		<header slot="header">
			<h3>Post title</h3>
			<small><i class="el-icon-time" />{{ new Date().toLocaleString() }}</small>
		</header>
		<main>
			<img src="https://i.picsum.photos/id/603/700/300.jpg" alt="post" />
		</main>
		<footer>
			<el-button @click="openPost" round>Открыть</el-button>
			<span><i class="el-icon-s-comment" />12</span>
		</footer>
	</el-card>
</template>

<script>
export default {
	methods: {
		openPost() {
			const id = 'test'
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
