import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config';
import FocusTrap from 'primevue/focustrap';
import AnimateOnScroll from 'primevue/animateonscroll';
import Tooltip from 'primevue/tooltip';

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(PrimeVue, { ripple: true })
app.directive('focustrap', FocusTrap);
app.directive('animateonscroll', AnimateOnScroll);
app.directive('tooltip', Tooltip);

app.mount('#app')