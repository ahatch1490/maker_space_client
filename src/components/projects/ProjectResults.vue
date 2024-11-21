<script setup lang="ts">
import Project from "../../Types/Project.ts";
import ProjectSearchCard from "./ProjectSearchCard.vue";

const props = defineProps<{projects: Project[]}>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div  v-for="project in props.projects"  >
      <ProjectSearchCard   :item="project" />

    </div>
  </div>
</template>

<style scoped>

</style>