<script setup lang="ts">

import ProjectDetails from "../../../Types/ProjectDetails.ts";

const props = defineProps<{projectDetails:ProjectDetails}>();


</script>

<template>
<h1 class="text-4xl font-extrabold mb-4">{{props.projectDetails.title}}</h1>
  <div class="border-2 border-gray-200 min-h-screen pl-2">
    <div class="flex">
      <dl class="max-w-52 grid grid-cols-2 gap-x-4">
        <dt class="text-sm font-bold">Start Date</dt>
        <dd class="text-sm">{{props.projectDetails.startDate}}</dd>
        <dt class="text-sm font-bold">End Date</dt>
        <dd class="text-sm">{{props.projectDetails.endDate}}</dd>
        <dt class="text-sm font-bold">Difficulty</dt>
        <dd class="text-sm">{{props.projectDetails.difficulty}}</dd>
        <dt class="text-sm font-bold " >Dimensions</dt>
        <dd class="text-sm"><p>{{props.projectDetails.dimensions}}</p></dd>
      </dl>
    </div>
    <div class="mb-2 max-w-36">
      <h2 class="text-sm font-bold mb-2">Materials</h2>
        <span v-for="material  in props.projectDetails.materials"
              class="rounded
              background-blue-50
              p-2 m-1 bg-gray-500 border-dashed
              border-b-gray-600"
        >
          {{material}}</span>
    </div>

    <p  v-html="props.projectDetails.description"></p>
  </div>

</template>

<style scoped>

</style>