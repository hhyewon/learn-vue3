<template>
	<div>
		<h2>input Value</h2>
		<hr />
		<h3>v-on</h3>
		<input
			type="text"
			:value="inputValue"
			@input="e => (inputValue = e.target.value)"
		/>
		<!-- 양방향 바인딩 -->
		<h3>v-model</h3>
		c
		<br />
		<input type="text" v-model.trim="inputValue" />

		<div>{{ inputValue }}</div>
		<input type="text" v-model.number="inputValue" />
		<div>{{ typeof inputValue }}</div>
		<hr />
		<h2>TextArea Value</h2>
		<h3>v-on</h3>
		<textarea
			:value="textareaValue"
			@input="e => (textareaValue = e.target.value)"
		>
		</textarea>
		<h3>v-model</h3>
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>
		<hr />

		<h2>checkbox value</h2>
		<h3>v-on</h3>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input
			type="checkbox"
			id="checkbox"
			:checked="checkboxValue"
			@change="onChangeCheckValue"
		/>
		<h3>v-model</h3>
		<label for="checkbox-vmodel">{{ checkboxValue }}</label>
		<input
			type="checkbox"
			id="checkbox-vmodel"
			v-model="checkboxValue"
			true-value="Y"
			false-value="N"
		/>
		<h2>checkbox values</h2>
		<!-- 배열에 value 들어가짐 -->
		<label for="html">
			<input type="checkbox" value="html" id="html" v-model="checkboxValues" />
			HTML
		</label>
		<label for="css">
			<input type="checkbox" value="css" id="css" v-model="checkboxValues" />
			CSS
		</label>
		<label for="js">
			<input type="checkbox" value="js" id="js" v-model="checkboxValues" />
			JS
		</label>
		<div>{{ checkboxValues }}</div>

		<hr />

		<h2>radio value</h2>
		<h3>v-on</h3>
		<label>
			<input
				type="radio"
				name="type"
				value="A"
				@change="onChangeRadioValue"
				:checked="true"
			/>
			A형
		</label>
		<label>
			<input type="radio" name="type" value="B" @change="onChangeRadioValue" />
			B형
		</label>
		<label>
			<input type="radio" name="type" value="AB" @change="onChangeRadioValue" />
			AB형
		</label>
		<label>
			<input type="radio" name="type" value="O" @change="onChangeRadioValue" />
			O형
		</label>

		<h3>v-model</h3>
		<!-- ???? -->
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<label>
			<input type="radio" name="type" value="B" v-model="radioValue" />
			B형
		</label>
		<label>
			<input type="radio" name="type" value="AB" v-model="radioValue" />
			AB형
		</label>
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>

		<div>{{ radioValue }}</div>

		<hr />
		<h2>Select value</h2>
		<h3>v-on</h3>
		<select @change="onChangeSelectValue" :value="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="js">JS 수업</option>
		</select>
		<h3>v-model</h3>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="js">JS 수업</option>
		</select>

		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref('Y');
		const onChangeCheckValue = () => {
			checkboxValue.value = !checkboxValue.value;
		};
		const radioValue = ref('A');
		const onChangeRadioValue = e => {
			radioValue.value = e.target.value;
		};
		const selectValue = ref('html');
		const onChangeSelectValue = e => {
			selectValue.value = e.target.value;
		};
		const checkboxValues = ref([]);

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			onChangeCheckValue,
			radioValue,
			onChangeRadioValue,
			selectValue,
			onChangeSelectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
