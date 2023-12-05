// import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);
// 전역으로 사용 가능
// app.component('AppCard', AppCard);

app.provide('app-message', 'app message 입니다');
// globalProperties: 모든 컴포넌트에서 접근하고 싶은 라이브러리 같은 객체
app.config.globalProperties.msg = 'hello';
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
