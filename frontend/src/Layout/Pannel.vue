<template>
  <section class="Pannel">
   <List />
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import List from '@/Chat/List.vue'
</script>
<style lang="scss" scoped>
.Pannel{
  width: 20%;
  height: 100%;
  background-color: aqua;
}
</style>
