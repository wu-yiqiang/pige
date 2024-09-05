<template>
  <section class="List">
    <div v-for="(item, index) in lists" :key="index">
      <Item :item="item" />
    </div>
    ada啊大叔
  </section>
</template>
<script lang="ts" setup>
import {reactive, watch, computed, ref, onMounted} from 'vue'
import Item from '@/chat/item.vue'
import {User, users} from '../utils/const'
const lists: Array<User> = reactive(users)
<<<<<<< Updated upstream
const getDeviceLists = async () => {
  const data = await GetDevices()
  console.log("a萨达身上das", data)
}
onMounted(
)
=======
>>>>>>> Stashed changes
</script>
<style lang="scss" scoped>
.List{
  background-color: $--tabBarColor;
  padding: $--pagePadding;
  overflow: scroll;
  border-left: 1px solid rgb(246, 243, 243);
}
</style>
