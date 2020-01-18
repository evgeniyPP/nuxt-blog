<template>
	<el-form
		ref="form"
		@submit.native.prevent="onSubmit"
		:model="controls"
		:rules="rules"
	>
		<h3>Создать новый пост</h3>

		<el-form-item label="Заголовок поста" prop="title">
			<el-input v-model="controls.title" />
		</el-form-item>

		<el-form-item label="Текст в формате .md или .html" prop="text">
			<el-input
				v-model="controls.text"
				:rows="10"
				type="textarea"
				resize="none"
			/>
		</el-form-item>

		<el-button @click="previewModal = true" type="text">
			Предпросмотр
		</el-button>

		<el-dialog :visible.sync="previewModal" title="Предпросмотр">
			<div :key="controls.text">
				<vue-markdown>{{ controls.text }}</vue-markdown>
			</div>
		</el-dialog>

		<el-upload
			ref="upload"
			:on-change="handleImage"
			:auto-upload="false"
			class="upload-image"
			drag
			action="https://jsonplaceholder.typicode.com/posts/"
		>
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">
				Перетащите изображение <em>или нажмите</em>
			</div>
			<div slot="tip" class="el-upload__tip">
				файлы с расширением jpg/png
			</div>
		</el-upload>

		<el-form-item>
			<el-button :loading="loading" type="primary" native-type="submit">
				Создать
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	layout: 'admin',
	middleware: ['admin-auth'],
	head() {
		return {
			title: 'Новый пост'
		}
	},
	data() {
		return {
			image: null,
			previewModal: false,
			loading: false,
			controls: {
				title: '',
				text: ''
			},
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
						message: 'Не меньше 10 символов',
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate(async valid => {
				if (valid && this.image) {
					this.loading = true

					const data = {
						title: this.controls.title,
						text: this.controls.text,
						image: this.image
					}

					try {
						await this.$store.dispatch('posts/create', data)
						this.controls.title = ''
						this.controls.text = ''
						this.image = null
						this.$refs.upload.clearFiles()
						this.$message.success('Пост успешно создан')
					} catch (e) {
					} finally {
						this.loading = false
					}
				} else {
					this.$message.warning('Заполните поля и загрузите изображение')
					return false
				}
			})
		},
		handleImage(file, fileList) {
			this.image = file.raw
		}
	}
}
</script>

<style lang="scss" scoped>
form {
	width: 600px;
	height: auto;

	.el-form-item {
		margin-bottom: 1rem;
	}

	h3 {
		margin-bottom: 0.75rem;
	}

	.upload-image {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
}
</style>
