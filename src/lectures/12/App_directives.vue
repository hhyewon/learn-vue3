<template>
	<!-- 같은 방식 -->
	<div>{{ msg }}</div>
	<p v-text="msg"></p>

	<p v-html="htmlStr"></p>
	<!-- 문자열로 인식 -->
	<p v-text="htmlStr"></p>

	<p>{{ msg }}!!</p>
	<!-- 수정 X (한 번만 랜더링 됨 => 업데이트 성능 최적화) -->
	<p v-once>{{ msg }}!!</p>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕</strong>');
		return {
			msg,
			htmlStr,
		};
	},
};
</script>

<style lang="scss" scoped></style>
