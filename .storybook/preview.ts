import type {Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';

import '../src/assets/tailwind.css';
import PrimeVue from 'primevue/config';
import Aura from "@primevue/themes/aura";
import {createTestingPinia} from "@pinia/testing";



setup((app) => {
  app.use(PrimeVue, {theme: {
    preset: Aura,
        options: {
      cssLayer: false,
          darkModeSelector: false,
    }}});
  // app.use(createTestingPinia)
  // app.component('my-component', MyComponent);
  app.provide('projectService', () => { return {
    fetchProjectSearch: async (searchText:string) => { return data },
  }});
  app.mixin({
    /* My mixin */
  });
});

const data =  {projects:[{
    id: "b1aca791-c041-4ed3-b041-265783908f05",
    title: "FoobarBaz", // The title of the project
    description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
        "quas!", // A brief description of the project
    imageUrls: ["../../../public/widget.webp"], // An array of image URLs associated with the project
    tags: ["tag1","tag2"]
  }, {
    id: "b1aca791-c041-4ed3-b041-265783908f05",
    title: "FoobarBazBuzz", // The title of the project
    description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
        "quas!", // A brief description of the project
    imageUrls: ["../../../public/widget.webp"], // An array of image URLs associated with the project
    tags: ["tag1","tag3"]
  }]}
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
