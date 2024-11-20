<script setup lang="ts">
import Card from 'primevue/card';
import Project from "../../Types/Project.ts";
const props = defineProps<Project>();

</script>

<template>
  <Card style="width: 15rem; overflow: hidden" class="rounded-b-xl ">
    <template #header>
      <img class="rounded-t-lg " alt="user header" v-bind:src=props.imageUrls[0] />
    </template>
    <template #title>{{props.title}}</template>
    <template #content>
      <p class="m-1 text-ellipsis overflow-hidden ...">
      {{props.description}}
      </p>
    </template>
    <template #footer>
      <span class="rounded text-blue-50 p-2 m-1 bg-gray-500 border-dashed border-b-gray-600"  v-for="tag in props.tags"  >#{{tag}} </span>
    </template>
  </Card>
</template>

<style scoped>

</style>