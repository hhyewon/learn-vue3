<template>
	<div class="container py-4">
		<input type="text" ref="input" />
		<p>{{ input }}</p>
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }},
			{{ $refs.input === input }}
		</p>
		<hr />
		<ul>
			<!-- 배열 -->
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
			<!-- 함수로 바인딩 -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import TemplateRefsChild from './TemplateRefsChild.vue';
import { onMounted, ref } from 'vue';
export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		// 동일한 이름의 반응형 선언, mount가 된 이후 접근 가능
		const input = ref(null);
		console.log('setup: ', input.value); //null
		onMounted(() => {
			console.log('onMounted: ', input.value);
			input.value.value = 'Hello';
			console.log(itemRefs.value.forEach(item => console.log('item: ', item)));
			console.log('child message:', child.value.message);
			// child.value.sayHello();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);

		const child = ref(null);

		return {
			input,
			fruits,
			itemRefs,
			child,
		};
	},
};
</script>

<style lang="scss" scoped></style>
