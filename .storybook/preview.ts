import type {Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';

import '../src/assets/tailwind.css';
import PrimeVue from 'primevue/config';
import Aura from "@primevue/themes/aura";



setup((app) => {
  app.use(PrimeVue, {theme: {
    preset: Aura,
        options: {
      cssLayer: false,
          darkModeSelector: false,
    }}});
  // app.component('my-component', MyComponent);
  app.mixin({
    /* My mixin */
  });
});
// Preview.use(PrimeVue, {
//   theme: {
//     preset: Aura,
//     options: {
//       cssLayer: false,
//       darkModeSelector: false,
//     }
//   }
// });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export default preview;
