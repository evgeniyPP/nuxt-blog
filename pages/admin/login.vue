<template>
	<el-card :style="{ width: '500px', padding: '0.5rem 0' }" shadow="always">
		<el-form
			ref="loginForm"
			@submit.native.prevent="onSubmit"
			:model="controls"
			:rules="rules"
		>
			<h2>Войти в панель администратора</h2>
			<el-form-item label="Логин" prop="login">
				<el-input v-model.trim="controls.login" />
			</el-form-item>
			<el-form-item label="Пароль" prop="password">
				<el-input v-model.trim="controls.password" type="password" />
			</el-form-item>
			<el-form-item>
				<el-button :loading="loading" type="primary" native-type="submit" round>
					Войти
				</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</template>

<script>
export default {
	layout: 'empty',
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
	mounted() {
		const { message } = this.$route.query

		switch (message) {
			case 'noauth':
				this.$message.error('У Вас нет доступа! Войдите в систему')
				break
			case 'logout':
				this.$message.success('Вы успешно вышли из системы!')
				break
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
						await this.$store.dispatch('admin/login', data)
						this.$router.push('/admin')
					} catch (e) {
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
h2 {
	margin-bottom: 0.5rem;
}

button {
	margin-top: 0.5rem;
}

.el-form-item:last-child {
	margin-bottom: 0;
}
</style>
