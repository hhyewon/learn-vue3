<template>
	<div id="child-id" class="child-class" style="border: 1px solid black">
		<!-- 
					modelValue
					update:modelValue
				-->
		<label>
			{{ label }}
			<!-- <input v-model="name" type="text" /> -->
		</label>
		<input
			type="text"
			:value="modelValue"
			@input="e => $emit('update:modelValue', e.target.value)"
		/>
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
