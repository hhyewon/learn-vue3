<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="inputValue" />
		<hr />
		<button @click="visible = !visible">Toggle Child</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		console.log('1. setup');
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);

		onBeforeMount(() => {
			console.log('4. onBeforeMount');
		});
		// DOM에 접근 가능
		onMounted(() => {
			console.log('5. onMounted', inputRef.value.value);
		});
		// 반응형 상태 변경 시 호출 (DOM에 적용시켜야 할 때)
		onBeforeUpdate(() => {
			console.log('6. onBeforeUpdate', message.value);
			console.log(document.querySelector('#message').textContent); // 변경 이전 데이터 호출
		});
		// 반응형 상태 변경 시 호출 (DOM에 적용시켜야 할 때)
		onUpdated(() => {
			console.log('7. onUpdated', message.value);
			console.log(document.querySelector('#message').textContent); // 변경 후 DOM 콘텐츠를 가져옴
		});

		return {
			inputRef,
			message,
			visible,
		};
	},
	beforeCreate() {
		console.log('2. beforeCreate');
	},
	created() {
		console.log('3. created');
	},
};
</script>

<style lang="scss" scoped></style>
