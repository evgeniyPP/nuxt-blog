<template>
	<el-form
		ref="form"
		@submit.native.prevent="onSubmit"
		:model="controls"
		:rules="rules"
	>
		<el-form-item prop="name">
			<el-input v-model.trim="controls.name" placeholder="Ваше имя" />
		</el-form-item>
		<el-form-item prop="text">
			<el-input
				v-model.trim="controls.text"
				:rows="2"
				type="textarea"
				resize="none"
				placeholder="Комментарий"
			/>
		</el-form-item>
		<el-form-item>
			<el-button :loading="loading" type="primary" native-type="submit">
				Добавить
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			controls: {
				name: '',
				text: ''
			},
			rules: {
				name: [
					{
						required: true,
						message: 'Имя не должно быть пустым',
						trigger: 'blur'
					},
					{
						min: 3,
						max: 15,
						message: 'Длина от 3 до 15',
						trigger: 'blur'
					}
				],
				text: [
					{
						required: true,
						message: 'Комментарий не должен быть пустым',
						trigger: 'blur'
					},
					{
						min: 3,
						max: 256,
						message: '256 символов максимум!',
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		onSubmit() {
			this.$refs.form.validate(valid => {
				if (valid) {
					this.loading = true

					// const data = {
					// 	name: this.controls.name,
					// 	text: this.controls.text,
					// 	id: ''
					// }

					try {
						this.$emit('created')
						this.$message.success('Комментарий добавлен')
					} catch (e) {
						this.loading = false
					}

					console.log('Valid')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		}
	}
}
</script>
