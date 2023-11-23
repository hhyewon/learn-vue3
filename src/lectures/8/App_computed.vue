<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button v-on:click="counter++">Counter: {{ counter }}</button>

		<p>{{ fullName }}</p>
	</div>
</template>

<script>
import { computed, ref, reactive } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '혜원',
			lectures: ['HTML/CSS', 'Javascript', 'Vue3'],
		});

		// 한 번만 출력
		// 캐시로 저장 >> 캐시된 데이터를 보여줌
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});

		// 실행 될 때마다 보여줌
		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		};

		const counter = ref(0);

		const firstName = ref('홍');
		const lastName = ref('길동');

		// computed는 수정이 안되지만 필요할 시 setter를 생성함
		const fullName = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				console.log(value);
				console.log(value.split(' '));
				[firstName.value, lastName.value] = value.split(' ');
				console.log(firstName);
			},
		});

		console.log('console 출력: ', fullName.value);
		fullName.value = '양 혜원';

		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
