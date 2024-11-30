import type {Preview } from "@storybook/vue3";
import { setup } from '@storybook/vue3';

import '../src/assets/tailwind.css';
import PrimeVue from 'primevue/config';
import Aura from "@primevue/themes/aura";
import {IProjectService} from "../src/Types/IProjectService";
import Project from "../src/Types/Project";



setup((app) => {
  app.use(PrimeVue, {theme: {
    preset: Aura,
        options: {
      cssLayer: false,
          darkModeSelector: false,
    }}});
  // app.use(createTestingPinia)
  // app.component('my-component', MyComponent);
  app.provide('projectService',   {
    fetchProjectSearch: async (searchText:string) => { return data.projects as Project[] },
    fetchProjectDetails: async (searchText:string) => { return data.projects[0] as Project},
  } as IProjectService);
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
