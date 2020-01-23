<template>
	<nav>
		<h1 @click="headerClick">
			Veni, vidi, vici – <span class="gray">мой блог на Nuxt.js</span>
		</h1>
		<el-button @click="$router.push('/admin')" size="small">
			Войти как администратор
		</el-button>
	</nav>
</template>

<script>
export default {
	methods: {
		headerClick() {
			if (this.$route.name !== 'index') {
				this.$router.push('/')
			}
		}
	}
}
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	border-bottom: 1px solid #e6e6e6;
	margin-top: 0.5rem;

	.gray {
		color: #999;
	}

	h1 {
		cursor: pointer;
	}

	button {
		position: absolute;
		right: 10px;
		border: 0;

		&:hover,
		&:active {
			background: inherit;
		}
	}
}

@media screen and (max-width: 768px) {
	button {
		display: none;
	}
}

@media screen and (max-width: 362px) {
	nav {
		justify-content: flex-start;
	}

	.gray {
		display: block;
	}
}
</style>
