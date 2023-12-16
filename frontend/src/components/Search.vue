<template>
  <section class="Search">
   <input type="text" placeholder="搜索" :value="value" @input="filterStr">
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, defineEmits } from 'vue'
const value = ref('')
const emit = defineEmits(['filter'])
const filterStr = () => {
  console.log('value', value)
  emit('filter', value.value)
}
</script>
<style lang="scss" scoped>
.Search{
  height: $--search-height;
  width: 100%;
  @include box-center;
  input {
    width: 100%;
    height: 100%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
  }
}
</style>
