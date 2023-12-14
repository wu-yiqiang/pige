<template>
  <section class="Chat">
    <window />
    <List />
  </section>
</template>
<script lang="ts" setup>
import List from './list.vue'
import Window from './window.vue';
</script>
<style lang="scss">
.Chat{
  color: aliceblue;
  display: flex;
  height: 100%;
  width: 100%;
  // overflow: hidden;
}
</style>