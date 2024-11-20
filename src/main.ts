import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './assets/tailwind.css'  // Import Tailwind CSS
import './style.css'
import App from './App.vue'

const app = createApp(App)

// app.use(PrimeVue, {
//     theme: {
//         preset: Aura,
//         options: {
//             cssLayer: {
//                 name: 'primevue',
//                 order: 'tailwind-base, primevue, tailwind-utilities'
//             }
//         }
//     }
// });
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: false,
            darkModeSelector: false,
        }
    }
});


// pp.component('InputText', InputText);
// app.component('Button', Button);
// app.component('Card', Card);
app.mount('#app');