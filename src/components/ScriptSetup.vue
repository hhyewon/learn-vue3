<template>
	<div>{{ msg }}</div>
	<p>{{ message }}</p>
	<button @click="sayHello">Click</button>
	<input v-model="message" type="text" />
	<MyButton class="parent-class"></MyButton>
	<hr />
	<PostItem type="news" title="제목" contents="내용"></PostItem>
	<PostItem type="news" title="제목" contents="내용"></PostItem>
	<PostItem type="news" title="제목" contents="내용"></PostItem>
	<hr />
	<TemplateRefsChild ref="child"></TemplateRefsChild>
	<template v-if="child">{{ child.message }}</template>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from './setup/PostItem.vue';
import TemplateRefsChild from './setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';

const msg = 'Hello World';
const message = ref('');
const sayHello = () => {
	alert('Hello');
};
const child = ref(null);
defineExpose({
	msg,
});

async function callApi() {
	const response = await axios(
		'https://dummy.restapiexample.com/api/v1/employees',
	);
}

// ==> setup을 사용하면

const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
</script>

<style lang="scss" scoped></style>
