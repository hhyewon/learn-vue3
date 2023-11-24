<template>
	<div>
		<div id="modifiers">
			<!-- capture: 먼저 동작 -->
			<div @click.capture="clickDiv">
				DIV 영역
				<!-- self: span 클릭시 동작 안됨 //타겟이 본인이 아니면 실행 X-->
				<p @click.self="clickP">
					P영역
					<span @click="clickSpan"> SPAN 영역1 </span>
					<span @click.stop="clickSpan"> SPAN 영역2 (이벤트 전파 막기) </span>
					<a href="https://naver.com" @click.prevent.stop="clickA">dsad</a>
				</p>
			</div>
		</div>
		<!-- once: 한 번만 클릭되고 실행 X -->
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href = 'https://naver.com';
		};

		const clickP = () => {
			console.log('clickP');
		};

		// 모든 영역 클릭됨 (이벤트 전파)
		const clickSpan = () => {
			console.log('clickSpan');
			alert('좋아요');
		};

		const clickA = e => {
			// e.preventDefault(); == @click.prevent
			alert('어떤 기능');
		};

		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}

#modifiers p {
	background-color: #999;
}

#modifiers span {
	background-color: #666;
	display: block;
	margin-bottom: 10px;
}
</style>
