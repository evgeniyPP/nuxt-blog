<template>
	<div class="wrapper">
		<div class="content">
			<h1>Ошибка 404</h1>
			<p>
				Такой страницы не существует. Возможно, она была перемещена или удалена.
			</p>
			<nuxt-link to="/">Вернуться на главную</nuxt-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4rem;
}

h1 {
	color: rgb(145, 6, 6);
	margin-bottom: 1rem;
}

p {
	margin-bottom: 1rem;
}
</style>
