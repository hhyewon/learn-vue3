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

		<!-- 여러 개의 HTML 요소를 v-if 디렉티브로 연결하고 싶을 때 사용 -->
		<template v-if="visible">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>
		<hr />
		<!-- hide/show 방식으로 동작 -->
		<h1 v-show="ok">Title 입니다</h1>
		<button v-on:click="ok = !ok">show Toggle</button>
	</div>
</template>

<!-- v-for 와 v-if를 같이 사용 하지말기 ! -->

<script>
import { ref } from 'vue';
export default {
	setup() {
		const visible = ref(false);
		const type = ref('C');

		const ok = ref(true);

		return {
			visible,
			type,
			ok,
		};
	},
};
</script>

<style lang="scss" scoped></style>
