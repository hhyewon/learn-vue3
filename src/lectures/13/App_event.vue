<template>
	<div>
		<!-- 실무에서는 @(v-on:) 사용-->
		<button @click="printEventInfo('안ㄴ녕', $event)">
			inline event handler
		</button>
		<hr />
		<input type="text" @keyup="onKeyupHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log('message: ', message);
			console.log('event.target: ', event.target);
			console.log('event.target.tagName: ', event.target.tagName);
		};

		// 어떤 키가 눌렸는지 확인 가능
		const onKeyupHandler = event => {
			console.log('event.key', event.key);
		};
		return {
			printEventInfo,
			onKeyupHandler,
		};
	},
};
</script>

<style lang="scss" scoped></style>
