<template>
<!--  <Layout />-->
  <section class="Layout">
    <Window />
    <Pannel />
    <Navbar />
  </section>

</template>

<script lang="ts" setup>
import Layout from '@/Layout/index.vue'
import Navbar from '@/Layout/Navbar.vue'
import Pannel from '@/Layout/Pannel.vue'
import Window from '@/Chat/window.vue'
</script>

<style lang="scss">
.Layout {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
