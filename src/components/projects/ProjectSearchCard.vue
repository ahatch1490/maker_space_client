<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <img class="rounded-lg " alt="user header" src="../../../public/widget.webp" />
    </template>
    <template #title><h1 class="">Advanced Card</h1></template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
        quas!
      </p>
    </template>
    <template #footer>

    </template>
  </Card>
</template>


<style scoped>

</style>