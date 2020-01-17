<template>
	<div class="wrapper">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item to="/admin/posts">Посты</el-breadcrumb-item>
			<el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form
			ref="form"
			@submit.native.prevent="onSubmit"
			:model="controls"
			:rules="rules"
		>
			<el-form-item label="Заголовок поста" prop="title">
				<el-input v-model.trim="controls.title" />
			</el-form-item>
			<el-form-item label="Текст в формате .md или .html" prop="text">
				<el-input
					v-model.trim="controls.text"
					:rows="10"
					type="textarea"
					resize="none"
				/>
			</el-form-item>
			<div class="info">
				<small>
					<i class="el-icon-time"></i>
					<span>{{ new Date(post.date).toLocaleString() }}</span>
				</small>
				<small>
					<i class="el-icon-view"></i>
					<span>{{ post.views }}</span>
				</small>
			</div>
			<el-form-item>
				<el-button :loading="loading" type="primary" native-type="submit">
					Изменить
				</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	layout: 'admin',
	middleware: ['admin-auth'],
	head() {
		return {
			title: `Пост | ${this.post.title}`
		}
	},
	validate({ params }) {
		return Boolean(params.id)
	},
	data() {
		return {
			loading: false,
			rules: {
				title: [
					{
						required: true,
						message: 'Введите заголовок',
						trigger: 'blur'
					},
					{
						min: 3,
						max: 50,
						message: 'Длина от 3 до 50',
						trigger: 'blur'
					}
				],
				text: [
					{
						required: true,
						message: 'Введите текст поста',
						trigger: 'blur'
					},
					{
						min: 10,
						message: 'Некорректное количество символов',
						trigger: 'blur'
					}
				]
			}
		}
	},
	async asyncData({ store, params }) {
		const post = await store.dispatch('posts/fetchAdminSingle', params.id)
		return {
			post,
			controls: {
				title: post.title,
				text: post.text
			}
		}
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate(async valid => {
				if (valid) {
					this.loading = true

					const data = {
						title: this.controls.title,
						text: this.controls.text,
						id: this.post._id
					}

					try {
						await this.$store.dispatch('post/edit', data)
						this.$message.success('Пост успешно изменен')
					} catch (e) {
					} finally {
						this.loading = false
					}
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper {
	width: 600px;
	height: auto;
}

form {
	margin-top: 1.5rem;

	.el-form-item {
		margin-bottom: 1rem;
	}

	.info {
		margin-bottom: 1rem;

		small {
			margin-right: 10px;
			margin-bottom: 5px;
		}
	}
}
</style>
