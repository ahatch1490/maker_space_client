<script setup lang="ts">
import {OtherProject} from "../../../Types/OtherProject.ts";

const props = defineProps<{otherProjects:OtherProject[]}>();
</script>

<template>
    <div class="flex flex-col w-36">
      <div v-for="project in props.otherProjects" class="border-2 p-2 mb-2 w-36">
          <img class="rounded-lg max-w-36" alt="project image" v-bind:src=project.image_url />
          <div class="max-w-36 text-center">
            <p class="text-center text-lg">{{project.title}}</p>
          </div>
      </div>
    </div>
</template>

<style scoped>

</style>