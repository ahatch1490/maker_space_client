<script setup lang="ts">
import {OtherProject} from "../../../Types/OtherProject.ts";
import { useRouter } from 'vue-router';

const props = defineProps<{otherProjects:OtherProject[]}>();
const router = useRouter();

function selectedProject(id  : string) {
  router.push( {name: 'Project', params:{id} });
}
</script>

<template>
    <div class="grid grid-cols-1">
      <div v-for="project in props.otherProjects" class="border-2 p-2 mb-2 max-w-64 grid grid-cols-2">

          <div class="max-w-16" @click="selectedProject(project.id)">
            <img class="rounded-lg max-w-20" alt="project image" v-bind:src=project.image_url  />
          </div>
          <div class="max-w-44 grid grid-rows-3 gap-1">
            <div class="mb-0 pb-0">
              {{project.title}}
            </div>
            <div>
              <Badge severity="contrast" >{{project.difficulty}}</Badge>
            </div>
            <div>
              <ProgressBar :value="project.progression"></ProgressBar>
            </div>
          </div>
      </div>
    </div>
</template>

<style scoped>

</style>