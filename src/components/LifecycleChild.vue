<template>
	<div class="card">
		<div class="card-body">Lifecycle Child</div>
		<input id="input" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		console.log('[Child] 4-1. onBeforeMount -> setup');

		onBeforeMount(() => {
			console.log('[Child] 4-2. onBeforeMount');
		});
		onMounted(() => {
			console.log('[Child] 4-3. onMounted');
		});

		onBeforeUnmount(() => {
			console.log('[Child] 4-3. onBeforeUnmount');
			console.log(document.querySelector('#input')); // 아직 DOM을 가져올 수 없음
		});
		onUnmounted(() => {
			console.log('[Child] 4-3. onUnmounted');
			console.log(document.querySelector('#input')); // DOM 없음
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
