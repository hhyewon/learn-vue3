<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">Deep Child Component</div>
			<div class="card-body">
				<p>{{ staticMessage }}</p>
				<p>{{ message }}</p>
				<p>{{ count }}</p>
				<p>{{ updateMessage }}</p>
				<p>{{ appMessage }}</p>
				<input type="text" v-model="appendMessage" />
			</div>
		</div>
	</div>
</template>

<script>
import { inject, ref } from 'vue';

export default {
	setup() {
		const staticMessage = inject('static-message', 'default message');
		const { message, updateMessage } = inject('message');
		const count = inject('count');
		const appendMessage = ref('');
		updateMessage(appendMessage);

		const appMessage = inject('app-message');

		return {
			staticMessage,
			message,
			count,
			updateMessage,
			appendMessage,
			appMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
