<template>
	<el-menu :style="{ height: '100%' }" :default-active="$route.path" router>
		<el-menu-item index="/admin">
			<i class="el-icon-data-analysis" />
			<span>Аналитика</span>
		</el-menu-item>
		<el-menu-item index="/admin/create">
			<i class="el-icon-edit-outline" />
			<span>Создать</span>
		</el-menu-item>
		<el-menu-item index="/admin/posts">
			<i class="el-icon-document-copy" />
			<span>Посты</span>
		</el-menu-item>
		<el-menu-item index="/admin/users">
			<i class="el-icon-user" />
			<span>Пользователи</span>
		</el-menu-item>
		<el-menu-item index="/admin/logout">
			<i class="el-icon-close" />
			<span>Выйти</span>
		</el-menu-item>
	</el-menu>
</template>
