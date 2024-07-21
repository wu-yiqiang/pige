<template>
  <section class="List">
    <div v-for="(item, index) in lists" :key="index">
      <Item :item="item" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import {reactive, watch, computed, ref, onMounted} from 'vue'
import Item from '@/chat/item.vue'
import {User, users} from '../utils/const'
import { GetDevices } from '../../wailsjs/go/main/App'
const lists: Array<User> = reactive(users)
const getDeviceLists = async () => {
  const data = await GetDevices()
  console.log("asdas", data)
}
onMounted(
    () => {
      
    }
)
</script>
<style lang="scss" scoped>
.List{
  background-color: $--tabBarColor;
  padding: $--pagePadding;
  overflow: scroll;
  border-left: 1px solid rgb(246, 243, 243);
}
</style>
