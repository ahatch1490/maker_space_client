import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import './assets/tailwind.css'  // Import Tailwind CSS
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
//import axios from 'axios'
import router from './router';

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router);


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
app.provide('foo', () => {
    return  {
        foo: () => { return "foo"},
    }
})

// app.use(axios, {
//     baseUrl: 'https://cataas.com/',
// })



// pp.component('InputText', InputText);
// app.component('Button', Button);
// app.component('Card', Card);
app.mount('#app');