<template>
	<div class="p-3 bg-secondary">
		<button type="button" class="btn btn-primary" @click="sayHello">
			Primary
		</button>
		<!-- <button type="button" class="btn btn-primary" v-bind="$attrs">
			Primary
		</button> -->
		<!-- <button type="button" class="btn btn-secondary">Secondary</button> -->
		<!-- {{ $attr }} -->
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
};
</script>
<script setup>
const emit = defineEmits(['sayHello']);
const sayHello = () => {
	emit('sayHello');
};
</script>

<style lang="scss" scoped></style>
