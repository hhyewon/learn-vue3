<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news" selected>뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">context.emit</button>
		</div>

		<!-- <button
			class="btn btn-primary mr-2"
			@click="$emit('createPost', 1, 2, 3, 4)"
		>
			$emit
		</button> -->
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	// emits: ['createPost'],

	// emit을 객체 문법으로 선언한 경우 vaildation 로직을 추가할 수 있음.
	emits: {
		// createPost: null, //유효성 체크가 없을 시
		createPost: newPost => {
			if (!newPost.title) {
				return false;
			}
			return true;
		},
	},

	setup(props, context) {
		const title = ref('');
		const type = ref('news');

		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			context.emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};

		return {
			createPost,
			title,
			type,
		};
	},
};
</script>

<style lang="scss" scoped></style>
