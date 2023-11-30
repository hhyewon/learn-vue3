<template>
	<div>
		<form action="" @submit.prevent>
			<input type="text" v-model.lazy="title" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};

		// 콜백 함수 안의 반응성 데이터에 변화가 감지되면 자동으로 반응하여 실행
		// - 최초 1번 즉시 실행
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
			// console.log(title.value);
			// console.log(contents.value);
		});

		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
