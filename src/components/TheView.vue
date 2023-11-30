<template>
	<main>
		<div class="container py-4">
			<div class="row gx-3 gy-5">
				<div class="col col-4" v-for="post in posts" :key="post.id">
					<!-- 값을 전달할 땐 케밥 케이스 -->
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:is-like="post.isLike"
						:type="post.type"
						@toggle-like="post.isLike = !post.isLike"
						:obj="obj"
						@change-title="obj.title = '메롱'"
					/>
					<button @click="post.isLike = !post.isLike">부모 >> 자식 됨</button>
				</div>
				<!-- <div class="col col-4">
					<AppCard title="Card Title" />
				</div> -->
				<!-- <div class="col col-4"> -->
				<!-- <AppCard :title="post.title" :contents="post.contents" /> -->
				<!-- </div> -->
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import { reactive } from 'vue';
export default {
	components: {
		AppCard,
	},
	setup() {
		// const post = reactive({
		// 	title: '제목2',
		// 	contents: '내용2',
		// });

		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{
				id: 12,
				title: '제목12',
				contents: '내용12',
				isLike: false,
				type: 'notice',
			},
			{
				id: 13,
				title: '제목13',
				contents: '내용13',
				isLike: true,
				type: 'news',
			},
			{
				id: 14,
				title: '제목14',
				contents: '내용14',
				isLike: false,
				type: 'notice',
			},
			{
				id: 15,
				title: '제목154',
				contents: '내용154',
				isLike: false,
				type: 'notice',
			},
			{
				id: 16,
				title: '제목144',
				contents: '내용144',
				isLike: true,
				type: 'news',
			},
		]);

		const obj = reactive({
			title: '제목123',
			contents: 'ㅋㅋ',
		});
		return {
			// post,
			posts,
			obj,
		};
	},
};
</script>

<style lang="scss" scoped></style>
