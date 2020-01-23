<template>
	<el-card class="comment">
		<header>
			<span class="name">{{ comment.name }}</span>
			<span class="date">
				<i class="el-icon-time" />{{ comment.date | date }}
			</span>
		</header>
		<main>
			{{ comment.text }}
		</main>
	</el-card>
</template>

<script>
export default {
	props: { comment: { type: Object, required: true } }
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

	.name {
		font-weight: bold;
	}
}

main {
	white-space: pre-line;
}

i {
	margin-right: 5px;
}
</style>
