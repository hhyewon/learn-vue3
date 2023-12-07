<template>
	<div class="card">
		<div class="card-body">
			<span class="badge bg-secondary">
				{{ typeName }}
			</span>
			<h5 class="card-title red mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<p>- module로 class를 객체로 가져올 수 있다.</p>
			<p :class="classes.red">class: {{ classes }}</p>
			<p>- css 동적으로 연결하기</p>
			<p class="red2">style에 v-bind 사용</p>
			<p>- Options API에서 props에 접근하는 방법</p>
			<p>$prop: {{ $props }}</p>

			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
			<a href="#" class="btn btn-outline-primary m-2" @click="changeTitle"
				>이름바꾸기</a
			>

			<br />

			{{ obj }}

			<!-- <a v-else href="#" class="btn m-2" :class="isLikeClass">좋아요</a> -->
			<a href="#" class="btn btn-primary m-2">Go somewhere</a>
			<button @click="post.isLike = !post.isLike">자식 >> 부모 안 됨</button>
			<button>emit사용</button>
		</div>
	</div>
</template>

<script>
// 한 번만 호출해야될 경우 일반 script 사용
console.log('일반 script');
</script>

<script setup>
import { computed } from 'vue';
import { useCssModule, ref } from 'vue';
console.log('셋업 script');
const props = defineProps({
	type: {
		type: String,
		default: 'news',
		vaildator: value => {
			return ['new', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true, // 필수값
	},
	contents: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
		required: false,
	},

	// 객체나 배열과 같은 레퍼런스 타입의 디폴트를 설정할 때는
	// 기본 값을 반환하는 팩토리 함수를 설정해줘야 함.
	obj: {
		type: Object,
		default: () => {},
	},
});

const emit = defineEmits(['toggleLike', 'changeTitle']);

console.log(props.title);
console.log('AppCard setup');

// style setup으로 가져오기
const style = useCssModule();
console.log('style: ', style);

// css 동적으로 연결하기
const bindColor = ref('red');
bindColor.value = 'blue';

const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);

const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));

const toggleLike = () => {
	// isLike는 readOnly라 변경할 수 없다는 경고가 뜸
	// props.isLike = !props.isLike

	// 자식 -> 부모로 이벤트 올리기: emit
	emit('toggleLike');
};

const changeTitle = () => {
	// 자바스크립트 언어 특성상 동작하긴 함!
	// props.obj.title = '오';
	// >> 이렇게 바꾸기
	emit('changeTitle');
};
</script>

<!-- 스타일 내장 객체 속성으로 포함된다. -->
<style module="classes">
.red {
	color: red;
}
</style>
<style>
.red2 {
	color: v-bind(bindColor);
}
</style>

<!-- <style scoped>
.red {
	color: red;
}
</style> -->
