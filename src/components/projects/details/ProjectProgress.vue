<script setup lang="ts">
import ProjectProgress from "../../../Types/ProjectProgress.ts";

const props = defineProps<{progress: ProjectProgress}>();
</script>

<template>
  <dl class="max-w-52 grid grid-cols-2 gap-x-4">
    <dt class="text-sm font-bold border-b-1" >Status</dt>
    <dd class="text-sm">{{props.progress.status}}</dd>
    <dt class="text-sm font-bold ">Progress</dt>
    <dd>
      <ProgressBar :value="props.progress.progression"></ProgressBar>
    </dd>
    <dt class="text-sm font-bold ">Started</dt>
    <dd>{{props.progress.startDate}}</dd>
    <dt v-if="progress.progression == 100" class="text-sm font-bold ">Completed</dt>
    <dd v-if="progress.progression == 100" >{{props.progress.completedDate}}</dd>
  </dl>
</template>

<style scoped>

</style>