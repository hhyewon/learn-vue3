<template>
	<div>{{ message }}</div>
	<div>{{ reverseMessage }}</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');

		// 즉시 실행 1.
		const reverseFunction = () => {
			console.log('즉시 실행 1');
			reverseMessage.value = message.value.split('').reverse().join('');
		};

		watch(message, reverseFunction);

		reverseFunction();

		// 즉시 실행 2.
		watch(
			message,
			newValue => {
				console.log('즉시 실행 2');
				reverseMessage.value = newValue.split('').reverse().join('');
			},
			{
				immediate: true, // 즉시 실행
			},
		);

		return {
			message,
			reverseMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
