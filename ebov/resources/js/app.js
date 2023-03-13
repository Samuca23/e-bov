import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue'
import Teste from './components/Teste.vue'

const app = createApp();

app.component('app', App);
app.component('teste', Teste);

app.mount('#app');