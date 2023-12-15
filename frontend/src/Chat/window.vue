<template>
  <section class="Window">
   <Dialog />
   <Input />
   <Start />
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Dialog from './dialog.vue';
import Input from './input.vue';
import Start  from '@/components/Start.vue';
</script>
<style lang="scss" scoped>
.Window{
  width: 75%;
  height: 100%;
  background-color: $--tabBarColor;
  border-left: 1px solid gray;
}
</style>
