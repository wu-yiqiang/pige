<template>
  <section class="Groups">
    <Search @filter="handleFilter"/>
    <div class="list">
      <div v-for="(item, index) in lists" :key="index" >
      <Item :item="item"  :currentId="currentId" @updateSelect="handleFriend"/>
    </div>
    </div>
  </section>
  
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
import Item from '@/chat/item.vue'
import Search from '@/components/Search.vue'
import { User, users } from '../utils/const'
import { storeDialog } from '../store/dialog'
const lists: Array<User> = reactive([])
const store = storeDialog()
let currentId = ref('')

const handleFriend = (value: any) => {
  currentId.value = value.deviceId
  store.setDialogInfo(value)
}
const handleFilter = (value: any) => {
  lists.length = 0
  if (!value) return lists.push(...users)
  const li = users.filter((list: any) => {
    const ip = list.ip;
    const hostName = list.hostName
    const regex = new RegExp(`${value}`, 'gi');;
    const isExist = regex.test(ip) || regex.test(hostName);
    if (!isExist) return false
    return true
  })
  lists.push(...li)
}
const init = () => {
  lists.length = 0
  lists.push(...users)
}
onMounted(() => {
  init()
})
</script>
<style lang="scss" scoped>
.Groups{
  width: $--pannel-width;
   background-color: $--pageBackgroundColor;
  padding: $--pagePadding;
  .list {
    // margin-top: $--search-height;
    height: calc(100% - $--search-height);
    overflow: scroll;
  }
}
</style>
