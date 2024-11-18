import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './assets/tailwind.css'  // Import Tailwind CSS
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: false,
            darkModeSelector: false,
        }
    }
});

app.mount('#app');