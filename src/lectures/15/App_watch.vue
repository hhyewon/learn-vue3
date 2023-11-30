<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
	setup() {
		const message = ref('');

		watch(message, (newVlaue, oldValue) => {
			// DOM ~

			// API ~

			// state 변경
			console.log(newVlaue);
			console.log(oldValue);
		});
		return {
			message,
		};
	},
};
</script>

<style lang="scss" scoped></style>
