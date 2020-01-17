<template>
	<el-form
		ref="loginForm"
		@submit.native.prevent="onSubmit"
		:model="controls"
		:rules="rules"
	>
		<h2>Создать пользователя</h2>
		<el-form-item label="Логин" prop="login">
			<el-input v-model.trim="controls.login" />
		</el-form-item>
		<el-form-item label="Пароль" prop="password">
			<el-input v-model.trim="controls.password" type="password" />
		</el-form-item>
		<el-form-item>
			<el-button :loading="loading" type="primary" native-type="submit" round>
				Создать
			</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	layout: 'admin',
	middleware: ['admin-auth'],
	data() {
		return {
			loading: false,
			controls: {
				login: '',
				password: ''
			},
			rules: {
				login: [
					{
						required: true,
						message: 'Введите логин',
						trigger: 'blur'
					},
					{
						min: 3,
						max: 15,
						message: 'Длина от 3 до 15',
						trigger: 'blur'
					}
				],
				password: [
					{
						required: true,
						message: 'Введите пароль',
						trigger: 'blur'
					},
					{
						min: 5,
						message: 'Некорректное количество символов',
						trigger: 'blur'
					}
				]
			}
		}
	},
	methods: {
		onSubmit() {
			this.$refs.loginForm.validate(async valid => {
				if (valid) {
					this.loading = true

					const data = {
						login: this.controls.login,
						password: this.controls.password
					}

					try {
						await this.$store.dispatch('admin/createUser', data)
						this.$message.success('Новый пользователь добавлен')
						this.controls.login = ''
						this.controls.password = ''
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
form {
	max-width: 500px;
}

h2 {
	margin-bottom: 0.5rem;
}

button {
	margin-top: 0.5rem;
}
</style>
