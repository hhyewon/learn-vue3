<template>
	<div>
		<ul>
			<li v-for="(item, index) in items" :key="item.id">
				인덱스: {{ index }},
				{{ item.message }}
			</li>
		</ul>

		<hr />
		<!-- v-if와 v-for를 같이 사용 X ==> template 사용하기 -->

		<ul>
			<template v-for="(item, index) in items" :key="item.id">
				<li v-if="item.id % 2 === 0">
					인덱스: {{ index }}, ID: {{ item.id }},
					{{ item.message }}
				</li>
			</template>
		</ul>

		<hr />
		<!-- computed 사용 -->
		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<li>
					인덱스: {{ index }}, ID: {{ item.id }},
					{{ item.message }}
				</li>
			</template>
		</ul>

		<hr />
		<ul>
			<li v-for="(value, key, index) in myObject" :key="index">
				{{ index }} - {{ key }} - {{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: 'Java1' },
			{ id: 2, message: 'Java2' },
			{ id: 3, message: 'Java3' },
			{ id: 4, message: 'Java4' },
		]);

		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목',
			author: '홍길동',
			publishedAt: '2016-01-01',
		});

		return {
			items,
			evenItems,
			myObject,
		};
	},
};
</script>

<style lang="scss" scoped></style>
