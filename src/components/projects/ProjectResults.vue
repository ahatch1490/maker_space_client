<script setup lang="ts">
import Project from "../../Types/Project.ts";
import ProjectSearchCard from "./ProjectSearchCard.vue";

const props = defineProps<{projects: Project[]}>();
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 bg-gray-900">
    <div  v-for="project in props.projects"  >
      <ProjectSearchCard   :item="project" />
    </div>
  </div>
</template>

<style scoped>

</style>