<template>
	<el-card class="comment">
		<header>
			<span class="name">Person Name</span>
			<span class="date">
				<i class="el-icon-time" />{{ new Date().toLocaleString() }}
			</span>
		</header>
		<main>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
		</main>
	</el-card>
</template>

<script>
export default {
	props: ['comment']
}
</script>

<style lang="scss" scoped>
.comment {
	margin-bottom: 0.5rem;
}

header {
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	font-size: 0.8rem;
}

main {
	white-space: pre-line;
}
</style>
