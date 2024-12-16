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
      <div class="float-right">
      <Card >
        <template #content>
            <ProjectImages :image-urls="props.projectDetails.imageUrls"></ProjectImages>
        </template>
      </Card>
    </div>

  </div>
    <div class="flex-auto w-64">
      <Card>
        <template #content>
          <ProjectDetail :projectDetails="props.projectDetails"></ProjectDetail>
        </template>
      </Card>
    </div>
    <div class="flex-auto w-32 mb-4">
      <Card>
        <template #content>
          <ProjectProgress :progress="props.projectDetails.projectProgress"></ProjectProgress>
        </template>
      </Card>
      <Card>
        <template #content>
          <OtherProjectsByMe :otherProjects="props.projectDetails.otherProjects"></OtherProjectsByMe>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>

</style>