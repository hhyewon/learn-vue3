<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		// watch(
		// 	() => x.value + y.value,
		// 	(sum, oldValue) => {
		// 		console.log('sum: ', sum);
		// 		console.log('oldValue: ', oldValue);
		// 	},
		// );

		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		// console.log(typeof obj.count); // number
		// watch(obj.count, (newValue, oldValue) => {
		// 	// 반응형 데이터 XX
		// 	console.log('newValue: ', newValue);
		// });

		// watch(obj, (newValue, oldValue) => {
		// 	// 둘 다 같은 객체를 가리키기 때문에 같은 값이 나옴
		// 	console.log('newValue: ', newValue);
		// 	console.log('oldValue: ', oldValue);
		// });

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });

		// getter function ==> obj 자체가 변경되었을 때 실행
		// getter 함수로부터 받은 값이 바뀌었냐 안바뀌었냐 체크
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);

		return {
			x,
			y,
			obj,
			person,
		};
	},
};
</script>

<style lang="scss" scoped></style>
