<template>
  <section class="Friends">
    <Search />
    <div class="list">
      <div v-for="(item, index) in lists" :key="index" >
      <Item :item="item"  :currentId="currentId" @updateSelect="handleFriend"/>
    </div>
    </div>
    
  </section>
  
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Item from '@/chat/item.vue'
import Search from '@/components/Search.vue'
import {User, users} from '../utils/const'
const lists: Array<User> = reactive(users)
let currentId = ref('')
const handleFriend = (value: any) => {
  console.log('sdasd')
  currentId.value = value
}
</script>
<style lang="scss" scoped>
.Friends{
  width: $--pannel-width;
  background-color: $--tabBarColor;
  padding: $--pagePadding;
  .list {
    // margin-top: $--search-height;
    height: calc(100% - $--search-height);
    overflow: scroll;
  }
}
</style>
