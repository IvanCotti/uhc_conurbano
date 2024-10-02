import App from './App.vue';
import Vuetify from './plugins/vuetify.js';
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../src/pages/LoginPage';
import Home from '../src/pages/MainPage.vue';

const routes = [
    { path: '/', component: Login},
    { path: '/home', component: Home},
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.config.globalProperties.$players = [
    'FrancoB',
    'Cooked_MC',
    'LOLO50',
    'lucasPd',
    'Atibes',
    'CoccoB',
    'TheOneThatWatchs',
    'jajs',
    'Ragnar',
    'KevlarFort',
    'Lurink',
    'Fachi777',
    'SuricataLaconica'
]
app.use(router).use(Vuetify).mount('#app');
