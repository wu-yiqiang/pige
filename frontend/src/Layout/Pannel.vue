<template>
  <section class="List">
    <div v-for="(item, index) in lists" :key="index">
      <Item :item="item" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Item from '@/chat/item.vue'
import {User, users} from '../utils/const'
const lists: Array<User> = reactive(users)
</script>
<style lang="scss" scoped>
.List{
  background-color: $--tabBarColor;
  border-radius: $--boder-spacing-3 0 0 $--boder-spacing-3;
  padding: $--pagePadding;
  overflow: scroll;
  border-left: 1px solid rgb(246, 243, 243);
}
</style>
