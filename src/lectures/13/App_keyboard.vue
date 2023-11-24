<template>
	<div>
		<!-- Enter 일 때만 실행됨 -->
		<input type="text" @keyup.ctrl.enter="addTodos" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);
		const addTodos = e => {
			console.log(e.key);
			// if (e.key === 'Enter') todos.push(e.target.value);
			todos.push(e.target.value);
			e.target.value = '';
			e.target.focus();
		};
		return {
			todos,
			addTodos,
		};
	},
};
</script>

<style lang="scss" scoped></style>
