<script setup lang="ts">
import {inject, ref} from "vue";
import ProjectResults from "./ProjectResults.vue";
import {IProjectService} from "../../Types/IProjectService.ts";
import Project from "../../Types/Project.ts";
let searchText = ref(''); // Declare a reactive variable
let projects = ref(new  Array<Project>() ); // Declare a reactive variable
const profileService = inject('projectService') as IProjectService
console.log(profileService);

const onSearch = async () =>  {
  // console.log(searchText.value);
  //  if (searchText.value === '') {
  //     return;
  //  }
  //  let data = await profileService.fetchProjectSearch(searchText.value);
  //  console.log(data);
   projects.value = [{
      id: "b1aca791-c041-4ed3-b041-265783908f05",
      title: "FoobarBaz", // The title of the project
      description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
          "quas!", // A brief description of the project
      imageUrls: ["https://makerstoragimages.blob.core.windows.net/makerimages/IMG_2207.webp"], // An array of image URLs associated with the project
      tags: ["tag1","tag2"]
    }, {
      id: "b1aca791-c041-4ed3-b041-265783908f05",
      title: "FoobarBazBuzz", // The title of the project
      description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
          "quas!", // A brief description of the project
      imageUrls: ["https://makerstoragimages.blob.core.windows.net/makerimages/IMG_2208.webp"], // An array of image URLs associated with the project
      tags: ["tag1","tag3"]
    },
     {
       id: "b1aca791-c041-4ed3-b041-265783908f05",
       title: "FoobarBaz", // The title of the project
       description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
           "quas!", // A brief description of the project
       imageUrls: ["https://makerstoragimages.blob.core.windows.net/makerimages/IMG_2207.webp"], // An array of image URLs associated with the project
       tags: ["tag1","tag2"]
     }, {
       id: "b1aca791-c041-4ed3-b041-265783908f05",
       title: "FoobarBazBuzz", // The title of the project
       description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
           "quas!", // A brief description of the project
       imageUrls: ["https://makerstoragimages.blob.core.windows.net/makerimages/IMG_2208.webp"], // An array of image URLs associated with the project
       tags: ["tag1","tag3"]
     }
   ];

}

</script>

<template>
  <Panel header="Project Search" class="!bg-gray-900 !text-white !border-white! ml-2 mr-2">
    <FloatLabel>
      <InputText name="textSearch" type="text" class="content-center " style="width: 90%"   v-model="searchText" />
      <button class="rounded-xl p-1.5 ml-2 !border-white border-2 !border-b-white" @click="onSearch"> Submit </button>
    </FloatLabel>
  </Panel>
  <panel v-if="projects.length > 0"  class="!bg-gray-900 !text-white !border-white! ml-2 mr-1 mt-3 mb-3">
    <ProjectResults :projects="projects" />
  </panel>

</template>

<style scoped>
</style>