<template>
	<div>
		<div v-memo="[views, likes]">
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
		<div>
			<button @click="subscribers++">subscribers++</button>
			<button @click="views++">views++</button>
			<button @click="likes++">likes++</button>
		</div>
		<div>
			<p>subscribers: {{ subscribers }}</p>
			<p>views: {{ views }}</p>
			<p>likes: {{ likes }}</p>
		</div>
	</div>
</template>

<!-- 디렉티브 구성:: 디렉티브:전달인자.수식어="값" -->

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);

		return {
			subscribers,
			views,
			likes,
		};
	},
};
</script>

<style lang="scss" scoped></style>
