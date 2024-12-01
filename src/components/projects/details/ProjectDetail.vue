<script setup lang="ts">

import ProjectDetails from "../../../Types/ProjectDetails.ts";

const props = defineProps<{projectDetails:ProjectDetails}>();


</script>

<template>
<h1 class="text-4xl font-extrabold">{{props.projectDetails.title}}</h1>
  <div class="border-2 border-b-gray-600">
    <dl>
      <dt class="text-2xl border-b-1" >Description</dt>
      <dd>{{props.projectDetails.description}}</dd>
      <dt class="text-2xl mb-2">Materials</dt>
      <dd class="border-b-2 border-b-gray-600">
        <span v-for="material  in props.projectDetails.materials"
              class="rounded
              background-blue-50 \
              p-2 m-1 bg-gray-500 border-dashed
              border-b-gray-600"
        >
          {{material}}</span>
      </dd>
      <dt class="text-2xl mt-2">Start Date</dt>
      <dd>{{props.projectDetails.startDate}}</dd>
      <dt class="text-2xl">End Date</dt>
      <dd>{{props.projectDetails.endDate}}</dd>
      <dt></dt>
      <dd>{{props.projectDetails.difficulty}}</dd>
    </dl>
  </div>
</template>

<style scoped>

</style>