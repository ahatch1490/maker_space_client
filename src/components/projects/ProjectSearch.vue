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
  <Panel header="Project Search">
    <FloatLabel>
      <InputText type="text" class="content-center" style="width: 90%"   v-model="searchText" />
      <label for="username">Search</label>
      <button class="rounded-xl p-1.5 border-l-primary bg-gray-500 ml-2" @click="onSearch"> Submit </button>
    </FloatLabel>
  </Panel>
  <panel v-if="projects.length > 0">
    <ProjectResults :projects="projects" />
  </panel>

</template>

<style scoped>
</style>