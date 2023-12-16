<template>
  <section class="History">
    <Search @filter="handleFilter"/>
    <div class="list">
      <div v-for="(item, index) in lists" :key="index">
        <Item :item="item" />
      </div>
    </div>
  </section>
  
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Item from '@/chat/item.vue'
import Search from '@/components/Search.vue'
import {User, users} from '../utils/const'
let lists: Array<User> = reactive(users)
const handleFilter = (value: any) => {
  if (!value) lists= [...users]
  const li = lists.filter((list) => {
    const ip = list.ip;
    const hostName = list.hostName
    const regex = new RegExp(`${value}`, 'gi');;
    const isIp = regex.test(ip);
    const isHostName = regex.test(hostName)
    console.log('sssss', isIp,ip, isHostName, hostName , value)
    if (!isIp && !isHostName) {
      return false
    } else {
      return true
    }
  })
  lists = [...li]
}
</script>
<style lang="scss" scoped>
.History{
  width: $--pannel-width;
  background-color: $--tabBarColor;
  padding: $--pagePadding;
  position: relative;
  overflow: hidden;
  .list {
    height: calc(100% - $--search-height);
    overflow: scroll;
  }
}
</style>
