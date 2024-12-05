<script setup lang="ts">
import ProjectDetails from "../../../Types/ProjectDetails.ts";
import ProjectDetail from "./ProjectDetail.vue";
import ProjectProgress from "./ProjectProgress.vue";
import ProjectImages from "./ProjectImages.vue";

const props = defineProps<{projectDetails:ProjectDetails}>();

</script>

<template>
  <div class="flex">
    <div class="flex-auto w-32">
      <ProjectImages :image-urls="props.projectDetails.imageUrls"></ProjectImages>
    </div>
    <div class="flex-auto w-64">
      <ProjectDetail :projectDetails="props.projectDetails"></ProjectDetail>
    </div>
    <div class="flex-auto w-32">
      <ProjectProgress :progress="props.projectDetails.projectProgress"></ProjectProgress>
    </div>
  </div>
</template>

<style scoped>

</style>