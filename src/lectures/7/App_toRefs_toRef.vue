<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 지금 바로 이 책을 읽습니다  ;)',
			price: '무료',
		});

		// 구조 분해 할당은 재할당 되기 때문에 string 상태
		// const { author, title } = book;

		// 반응형으로 만들기
		// const { author, title } = toRefs(book);

		// 하나만 가져오기
		const author = toRef(book, 'author');
		const title = toRef(book, 'title');

		return {
			author,
			title,
			book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
