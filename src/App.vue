<template>
	<div>
		<h2 v-if="visible">Hello Vue3</h2>
		<h2 v-else>흠</h2>
		<button v-on:click="visible = !visible">toggle</button>
		<hr />
		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A, B, C가 아닙니다.</h2>

		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const visible = ref(true);

		const type = ref('C');
		return {
			visible,
			type,
		};
	},
};
</script>

<style lang="scss" scoped></style>
