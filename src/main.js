
import './assets/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faCartShopping,
  faCircleChevronLeft,
  faStar,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCartShopping,
  faCircleChevronLeft,
  faStar,
  faUser,
  faXmark
);


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(pinia);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
