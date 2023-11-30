<template>
	<div>
		<!-- 
					modelValue
					update:modelValue
				-->
		<label>
			{{ label }}
			<!-- <input v-model="name" type="text" /> -->
			<input
				type="text"
				:value="modelValue"
				@input="e => $emit('update:modelValue', e.target.value)"
			/>
		</label>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['title', 'label'],
	emits: ['update:title'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
