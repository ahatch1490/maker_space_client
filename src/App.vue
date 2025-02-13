<script setup lang="ts">

import ProjectSearch from "./components/projects/ProjectSearch.vue";
</script>

<template>
  <div>
    <nav class="m-5">
      <router-link class="m-3" to="/">Search</router-link>
      <router-link class="m-3" to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
