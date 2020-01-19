<template>
	<el-table :data="posts" style="width: 100%;">
		<el-table-column prop="title" label="Название" />
		<el-table-column label="Дата">
			<template slot-scope="{ row: { date } }">
				<i class="el-icon-time"></i>
				<span>{{ date | date('date') }}</span>
			</template>
		</el-table-column>
		<el-table-column label="Просмотры">
			<template slot-scope="{ row: { views } }">
				<i class="el-icon-view"></i>
				<span>{{ views }}</span>
			</template>
		</el-table-column>
		<el-table-column label="Комментарии">
			<template slot-scope="{ row: { comments } }">
				<i class="el-icon-s-comment"></i>
				<span>{{ comments.length }}</span>
			</template>
		</el-table-column>
		<el-table-column label="Действия">
			<template slot-scope="{ row: { _id } }">
				<el-tooltip effect="dark" content="Открыть пост" placement="top">
					<el-button
						@click="open(_id)"
						icon="el-icon-edit-outline"
						type="primary"
						circle
					/>
				</el-tooltip>
				<el-tooltip effect="dark" content="Удалить пост" placement="top">
					<el-button
						@click="remove(_id)"
						icon="el-icon-document-delete"
						type="danger"
						circle
					/>
				</el-tooltip>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
export default {
	layout: 'admin',
	middleware: ['admin-auth'],
	head: {
		title: `Посты | ${process.env.appName}`
	},
	async asyncData({ store }) {
		const posts = await store.dispatch('posts/fetchAdmin')
		return { posts }
	},
	methods: {
		open(id) {
			console.log('opened ', id)
			this.$router.push(`/admin/p/${id}`)
		},
		async remove(id) {
			try {
				await this.$confirm('Удалить пост?', 'Внимание!', {
					confirmButtonText: 'Удалить',
					cancelButtonText: 'Отмена',
					type: 'warning'
				})
				await this.$store.dispatch('posts/remove', id)
				this.posts = this.posts.filter(post => post._id !== id)
				this.$message.success('Пост удален')
			} catch (e) {
				console.log('Пост НЕ удален', e)
			}
		}
	}
}
</script>
