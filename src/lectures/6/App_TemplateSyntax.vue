<template>
	<h2>보간법</h2>
	<p>{{ message }}</p>
	<!-- v-once: 일회성만 보관 -->
	<p v-once>{{ message }}</p>
	<button v-on:click="message = message + '!'">Click!</button>
	<hr />
	<h2>v-html</h2>
	<p>{{ rawHtml }}</p>
	<!-- v-html: html 그대로 출력 //XSS 취약점 우려 !! -->
	<p v-html="rawHtml"></p>
	<hr />
	<h2>속성 바인딩</h2>

	<!-- v-bind: 1. 단축지원-->
	<div v-bind:title="dynamicTitle">마우스를 올려보세요.</div>
	<div :title="dynamicTitle">마우스를 올려보세요.</div>

	<input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />
	<!-- v-bind: 2. 다중속성 바인딩-->
	<input v-bind="attrs" />

	<h2>javascript</h2>
	{{ message.split('').reverse().join('') }}
	<br />
	{{ isInputDisabled ? '예' : '아니오' }}
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요!');
		const rawHtml = ref('<strong>안녕하세요</strong>');
		const dynamicTitle = ref('안녕하세요ㅎㅎ!!!');
		const isInputDisabled = ref(false);
		const attrs = ref({
			type: 'password',
			value: '123',
			disabled: false,
		});

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
