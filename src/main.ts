import { createApp } from 'vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Aura from '@primevue/themes/aura';
import './assets/tailwind.css'  // Import Tailwind CSS
import './style.css'
import app from './App.vue'

createApp(app).mount('#app')

app.use(PrimeVue, {
    preset: Aura,
    options: {
        cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
        }
    }
});



app.component('InputText', InputText);
app.component('Button', Button);
app.component('Card', Card);
