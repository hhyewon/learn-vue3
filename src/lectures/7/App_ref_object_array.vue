<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// ref => Object (value XX)
		const count = ref(0);
		const state = reactive({
			count,
		});
		console.log(count.value);
		console.log(state.count);

		// ref => Array (value OO)
		const message = ref('Hello');
		const arr = reactive([message]);

		console.log(arr[0].value);

		return {
			count,
		};
	},
};
</script>

<style lang="scss" scoped></style>
