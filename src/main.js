import App from './App.vue';
import Vuetify from './plugins/vuetify.js';
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../src/pages/LoginPage';

const routes = [
    { path: '/', component: Login},
    { path: '/login', component: Login},
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
