<template>
	<article class="post">
		<header>
			<div class="title">
				<h1>Post title</h1>
				<nuxt-link to="/"><i class="el-icon-back"/></nuxt-link>
			</div>
			<div class="info">
				<small>
					<i class="el-icon-time" />{{ new Date().toLocaleString() }}
				</small>
				<small><i class="el-icon-view" />42</small>
			</div>
			<div class="image">
				<img src="https://i.picsum.photos/id/603/700/300.jpg" alt="post" />
			</div>
		</header>
		<main>
			<p>
				1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
				alias nam fuga minus, pariatur temporibus, tempora autem sit quod
				corrupti in similique facere consectetur, voluptates doloribus impedit
				rem nostrum vero.
			</p>
			<p>
				2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
				alias nam fuga minus, pariatur temporibus, tempora autem sit quod
				corrupti in similique facere consectetur, voluptates doloribus impedit
				rem nostrum vero.
			</p>
			<p>
				3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
				alias nam fuga minus, pariatur temporibus, tempora autem sit quod
				corrupti in similique facere consectetur, voluptates doloribus impedit
				rem nostrum vero.
			</p>
			<p>
				4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
				alias nam fuga minus, pariatur temporibus, tempora autem sit quod
				corrupti in similique facere consectetur, voluptates doloribus impedit
				rem nostrum vero.
			</p>
		</main>
		<footer></footer>
	</article>
</template>

<script>
export default {
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

.title,
.info {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.title {
	margin-bottom: 1rem;
}

.info {
	margin-bottom: 0.5rem;
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
</style>
