<template>
<!--  <section class="Layout">-->
<!--    <Window />-->
<!--   <Pannel />-->
<!--   <Navbar />-->
<!--  </section>-->
</template>

<script lang="ts" setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
import { CreateWs } from '../api/index'
import Navbar from '@/Layout/Navbar.vue'
import Pannel from '@/Layout/Pannel.vue'
import Window from '@/Chat/window.vue'
onMounted(() => {
  // CreateWs()
})
</script>

<style lang="scss" scoped>
// .Layout{
//   display: flex;
//   justify-content: flex-end;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// }
</style>