<template>
	<div class="wrapper">
		<el-container :style="{ height: '100%' }">
			<el-aside width="250px">
				<Aside />
			</el-aside>
			<el-main>
				<nuxt />
			</el-main>
		</el-container>
	</div>
</template>

<script>
import Aside from '@/components/admin/Aside'

export default {
	components: { Aside }
}
</script>

<style lang="scss" scoped>
.wrapper {
	width: 100%;
	height: 100vh;
}
</style>
