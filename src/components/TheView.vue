<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<hr class="my-4" />
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

			<hr class="my-4" />
			<LabelInput
				:model-value="username"
				@update:model-value="value => (username = value)"
				label="이름:"
			></LabelInput>
			<LabelTitle label="제목:" v-model:title="username"></LabelTitle>
			<UserName
				v-model:firstname="firstname"
				v-model:lastname="lastname"
			></UserName>
		</div>
	</main>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import UserName from '@/components/UserName.vue';

import { reactive, ref } from 'vue';

export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
		LabelTitle,
		UserName,
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
		]);

		const obj = reactive({
			title: '제목123',
			contents: 'ㅋㅋ',
		});

		const createPost = newPost => {
			// console.log(a, b, c, d); // 1 2 3 4
			// titleName.value = title;
			// console.log(titleName.value);
			console.log(newPost);
			posts.push(newPost);
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');

		return {
			// post,
			posts,
			obj,
			createPost,
			username,
			firstname,
			lastname,
		};
	},
};
</script>

<style lang="scss" scoped></style>
