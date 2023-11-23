<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});

		const copy = readonly(original);

		original.count++;
		console.log(original);
		return {
			original,
		};
	},
};
</script>

<style lang="scss" scoped></style>
