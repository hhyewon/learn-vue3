<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button @click="count++">Click</button>
				{{ appMessage }}
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script>
import Child from './Child.vue';
import { inject, provide, readonly, ref } from 'vue';
export default {
	components: {
		Child,
	},
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const count = ref(10);
		const updateMessage = appendMessage => {
			message.value = appendMessage;
		};

		provide('static-message', staticMessage);
		provide('message', { message: readonly(message), updateMessage });
		provide('count', count);

		const appMessage = inject('app-message');

		return {
			count,
			appMessage,
		};
	},
	mounted() {
		// globalProperties
		// mounted에서만 값이 나옴 >> provide/inject 사용
		console.log(this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
