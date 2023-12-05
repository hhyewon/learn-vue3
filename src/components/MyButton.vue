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
	// inheritAttrs: false, // 자동으로 상속 X
	// setup(props, context) {
	// 	console.log(context.attrs);
	// 	console.log(context.attrs.class);
	// 	console.log(context.attrs.id);
	// 	console.log(context.attrs.onClick);
	// 	context.attrs.onClick();
	// 	return {};
	// },

	emits: ['sayHello'],
	setup(props, { emit }) {
		const sayHello = () => {
			emit('sayHello');
		};

		return {
			sayHello,
		};
	},
};
</script>

<style lang="scss" scoped></style>
