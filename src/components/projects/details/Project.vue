<script setup lang="ts">
import ProjectDetails from "../../../Types/ProjectDetails.ts";
import ProjectDetail from "./ProjectDetail.vue";
import ProjectProgress from "./ProjectProgress.vue";
import ProjectImages from "./ProjectImages.vue";
import OtherProjectsByMe from "./OtherProjectsByMe.vue";

const props = defineProps<{projectDetails:ProjectDetails}>();

</script>

<template>
  <div class="flex">
    <div class="flex-auto w-32">
      <div class="float-right mr-5">
            <ProjectImages :image-urls="props.projectDetails.imageUrls"></ProjectImages>
    </div>

  </div>
    <div class="flex-auto w-52">
          <ProjectDetail :projectDetails="props.projectDetails"></ProjectDetail>
    </div>
    <div class="flex-auto w-32 m-4" >
          <ProjectProgress :progress="props.projectDetails.projectProgress"></ProjectProgress>
          <Divider></Divider>
          <OtherProjectsByMe :otherProjects="props.projectDetails.otherProjects"></OtherProjectsByMe>
    </div>
  </div>
</template>

<style scoped>

</style>