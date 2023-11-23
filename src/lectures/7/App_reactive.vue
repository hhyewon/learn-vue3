<template>
	<div>
		<button v-on:click="increment">Click {{ state.count }}</button>
		<button v-on:click="increment">Deep Click {{ state.count }}</button>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		// reactive: 래퍼런스 타입을 반응형 객체로 만들 수 있다.
		const state = reactive({
			count: 0,
			deep: {
				count: 0,
			},
		});

		const increment = () => {
			state.count++;
			state.deep.count++;
		};

		return {
			state,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
