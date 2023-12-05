<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="헤더입니다">#header</slot>
		</div>
		<div class="card-body">
			<slot :child-message="childMessage" hello-message="Hi">#body</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-body-secondary">
			<slot
				name="footer"
				:childMessage="childMessage"
				footerMessage="푸터입니다"
				>#footer {{ childMessage }}</slot
			>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessage = ref('자식 컴포넌트 메시지');
		console.log(slots);
		const hasFooter = computed(() => !!slots.footer);
		return {
			childMessage,
			hasFooter,
		};
	},
};
</script>

<style lang="scss" scoped></style>
