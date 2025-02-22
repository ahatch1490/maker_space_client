<script setup lang="ts">
import Card from 'primevue/card';
import Project from "../../Types/Project.ts";
import {textLimit} from "../../core/TextLimit.ts";
import { useRouter } from 'vue-router';

const props = defineProps<{item: Project}>();

const router = useRouter();
function selectedProject(id  : string) {
  router.push('/project/' + id);
}
</script>

<template>
  <Card style="width: 15rem; overflow: hidden" class="rounded-b-xl " @click="selectedProject(props.item.id)">
    <template #header>
      <img class="rounded-t-lg " alt="project image header" v-bind:src=props.item.imageUrls[0] />
    </template>
    <template #title>{{props.item.title}}</template>
    <template #content>
      <p class="m-1 text-ellipsis overflow-hidden ...">
      {{textLimit(props.item.description, 100)}}
      </p>
    </template>
    <template #footer>

    </template>
  </Card>
</template>

<style scoped>

</style>