<template>
	<div class="text" :class="{ active: isActive, 'text-danger': hasError }">
		텍스트
	</div>
	<div :class="classObject">텍스트 2</div>
	<div :class="classObjectComputed">텍스트 3</div>
	<div
		:class="[isActive ? activeClass : 'class', errorClass, classObjectComputed]"
	>
		배열로도 사용가능
	</div>
	<button v-on:click="toggle">toggle</button>
	<button v-on:click="hasError = !hasError">toggle error</button>
</template>

<script>
import { computed } from 'vue';
import { reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		// 객체로도 가능
		const classObject = reactive({
			active: true,
			'text-danger': true,
		});

		// 액티브 되는 상태가 여러 개 필요하면 computed 사용가능
		const classObjectComputed = computed(() => {
			return {
				active: true && true,
				'text-danger': true && true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		return {
			isActive,
			toggle,
			hasError,
			classObject,
			classObjectComputed,
			activeClass,
			errorClass,
		};
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}

.text-danger {
	color: red;
}
</style>
