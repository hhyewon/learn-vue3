<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">Child Component</div>
			<div class="card-body"></div>
			<DeepChild></DeepChild>
		</div>
	</div>
</template>

<script>
import DeepChild from './DeepChild.vue';

export default {
	components: {
		DeepChild,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
