<template>
	<div class="wrapper">
		<nuxt />
	</div>
</template>

<script>
export default {
	computed: {
		error() {
			return this.$store.getters.error
		}
	},
	watch: {
		error(value) {
			this.$message.error(value)
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper {
	width: 100%;
	display: flex;
	justify-content: center;
	padding-top: 4rem;
}
</style>
