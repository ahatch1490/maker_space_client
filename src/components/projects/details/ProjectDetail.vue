<script setup lang="ts">

import ProjectDetails from "../../../Types/ProjectDetails.ts";

const props = defineProps<{projectDetails:ProjectDetails}>();


</script>

<template>
<h1 class="text-4xl font-extrabold">{{props.projectDetails.title}}</h1>
  <div class="flex  border-2 border-gray-200 pl-2">
    <dl class="max-w-52 grid grid-cols-2 gap-x-4">
      <dt class="text-sm font-bold mt-4">Materials</dt>
      <dd class="border-b-gray-600 text-sm font-bold mb-4 mt-4">
        <span v-for="material  in props.projectDetails.materials"
              class="rounded
              background-blue-50
              p-2 m-1 bg-gray-500 border-dashed
              border-b-gray-600"
        >
          {{material}}</span>
      </dd>
      <dt class="text-sm font-bold">Start Date</dt>
      <dd class="text-sm">{{props.projectDetails.startDate}}</dd>
      <dt class="text-sm font-bold">End Date</dt>
      <dd class="text-sm">{{props.projectDetails.endDate}}</dd>
      <dt class="text-sm font-bold">Difficulty</dt>
      <dd class="text-sm">{{props.projectDetails.difficulty}}</dd>
      <dt class="text-sm font-bold " >Description</dt>
      <dd class="text-sm"><p>{{props.projectDetails.description}}</p></dd>
    </dl>
  </div>
</template>

<style scoped>

</style>