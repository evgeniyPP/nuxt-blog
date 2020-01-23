<template>
	<article class="post">
		<header>
			<div class="title">
				<h1>{{ post.title }}</h1>
			</div>
			<div class="info">
				<small> <i class="el-icon-time" />{{ post.date | date }} </small>
				<small><i class="el-icon-view" />{{ post.views }}</small>
			</div>
			<div class="image">
				<img :src="post.imageUrl" alt="main" />
			</div>
		</header>
		<main>
			<vue-markdown>{{ post.text }}</vue-markdown>
		</main>
		<footer>
			<h4>Комментарии:</h4>
			<NewComment @created="handleCreateComment" :postId="post._id" />
			<div v-if="post.comments.length" class="comments">
				<Comment
					v-for="comment in post.comments"
					:key="comment._id"
					:comment="comment"
				/>
			</div>
			<div v-else><el-card class="g-tac">Комментариев нет</el-card></div>
		</footer>
	</article>
</template>

<script>
import Comment from '@/components/main/Comment'
import NewComment from '@/components/main/NewComment'

export default {
	components: { Comment, NewComment },
	head() {
		return { title: `${this.post.title} | ${process.env.appName}` }
	},
	async asyncData({ store, params }) {
		const post = await store.dispatch('posts/fetchSingle', params.id)
		await store.dispatch('posts/addView', post)
		return {
			post: { ...post, views: ++post.views, comments: post.comments.reverse() }
		}
	},
	methods: {
		handleCreateComment(comment) {
			this.post.comments.unshift(comment)
		}
	},
	validate({ params }) {
		return !!params.id
	}
}
</script>

<style lang="scss" scoped>
.post {
	max-width: 600px;
	margin: 0 auto;
}

a {
	text-decoration: none;
	color: inherit;
}

.title h1 {
	display: inline-block;
	margin-bottom: 1rem;
	font-size: 1.5rem;
}

.info {
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
	justify-content: space-between;
}

.image img {
	width: 100%;
	height: auto;
}

header {
	margin-bottom: 1.5rem;
}

main {
	margin-bottom: 2rem;
}

footer h4 {
	font-weight: normal;
	text-decoration: underline;
	margin-bottom: 1rem;
}

i {
	margin-right: 5px;
}
</style>
