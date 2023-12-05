<template>
	<main>
		<div class="container py-4">
			<div>
				<!-- <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton> -->
				<MyButton
					class="my-button"
					id="my-button"
					@say-hello="sayHello"
				></MyButton>
				<LabelInput label="이름"></LabelInput>
			</div>
		</div>
		<hr />
		<FancyButton>Click!! <span style="color: red">@@@</span></FancyButton>
		<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
		<hr />
		<AppCard>
			<template #header="{ headerMessage }">제목 {{ headerMessage }}</template>
			<!-- <template #default="obj"> 내용 {{ obj.childMessage }} </template> -->
			<template #default="{ childMessage }"> 내용 {{ childMessage }} </template>
			<template #footer="{ footerMessage }">푸터 {{ footerMessage }}</template>
		</AppCard>
		<hr />
		<AppCard>
			<template #[slotArgs]>제목</template>
			암시적으로
			<!-- <template #footer>푸터</template> -->
		</AppCard>
		<AppCard> 헤더 푸터 안나와요 </AppCard>
	</main>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';
export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			console.log('hi');
		};
		const slotArgs = ref('header');
		const message = ref('안녕');

		return {
			sayHello,
			slotArgs,
			message,
		};
	},
};
</script>

<style lang="scss" scoped></style>
