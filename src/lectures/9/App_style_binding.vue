<template>
	<div :style="styleObject">안녕</div>
	<div :style="styleObjectComputed">안녕 Computed</div>

	<button v-on:click="onClickButton(0)">+</button>
	<button v-on:click="onClickButton(1)">-</button>
</template>

<script>
import { computed, ref, reactive } from 'vue';

export default {
	setup() {
		const fontSize = ref(13);

		const styleObject = reactive({
			color: 'red',
			fontSize: fontSize.value + 'px',
		});

		const styleObjectComputed = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		const onClickButton = buttonValue => {
			buttonValue === 0 ? fontSize.value++ : fontSize.value--;
		};

		return {
			styleObject,
			styleObjectComputed,
			fontSize,
			onClickButton,
		};
	},
};
</script>

<style lang="scss" scoped></style>
