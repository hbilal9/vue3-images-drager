import { createApp } from 'vue'
import App from './App.vue'
import DraggerPlugin from './DraggerPlugin';

const app = createApp(App);
app.use(DraggerPlugin)
app.mount('#app')
