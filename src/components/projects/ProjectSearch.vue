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
  console.log(searchText.value);
   if (searchText.value === '') {
      return;
   }
   let data = await profileService.fetchProjectSearch(searchText.value);
   console.log(data);
   projects.value = data;
}

</script>

<template>
  <Panel header="Project Search" class="!bg-gray-900 !text-white !border-white! ml-2 mr-2">
    <FloatLabel>
      <InputText name="textSearch" type="text" class="content-center " style="width: 90%"   v-model="searchText" />
      <button class="rounded-xl p-1.5 ml-2 !border-white border-2 !border-b-white" @click="onSearch"> Submit </button>
    </FloatLabel>
  </Panel>
  <panel v-if="projects.length > 0">
    <ProjectResults :projects="projects" />
  </panel>

</template>

<style scoped>
</style>