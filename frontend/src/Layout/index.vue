<template>
  <section class="Layout">
    <Window />
   <Pannel />
   <Navbar />
  </section>
</template>

<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Navbar from '@/Layout/Navbar.vue'
import Pannel from '@/Layout/Pannel.vue'
import Window from '@/Chat/window.vue'
</script>

<style lang="scss" scoped>
.Layout{
  display: flex;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgb(139, 144, 144);
}
</style>