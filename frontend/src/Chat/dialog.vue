<template>
  <section class="Dialog">
    <div v-for="(item, index) in lists" :key="index" class="item">
      <div v-if="item.ip === store.$state.ip" class="left-box">
        <DialogRight :target="item"/>
      </div>
      <div v-else class="right-box">
        <DialogLeft :target="item"/>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onMounted, nextTick } from 'vue'
import DialogLeft from './dialog-left.vue'
import DialogRight from './dialog-right.vue'
import mitter from '../utils/eventBus';
import { storeUser } from '../store/user';
import {dialogs, Dialog} from '../utils/const'
const store = storeUser()
let lists: Array<Dialog> = reactive([])
watch([lists], ([lists], [prevLists]) => {
   nextTick(() => {
    scrollBottom()
  })
})

function scrollBottom() {
  const ele: Element | null = document.querySelector('.Dialog')
  ele && ele.scrollTo( 0, ele.scrollHeight );
}

onMounted(() => {
  lists.push(...(dialogs.sort((a: Dialog, b: Dialog) => a.time - b.time)))
  mitter.on('transmit', (data: any) => {
    lists.push(data)
  })
  nextTick(() => {
    scrollBottom()
  })
})
</script>
<style lang="scss" scoped>
.Dialog{
  height: 80%;
  border-bottom: 1px solid gray;
  overflow-y: scroll;
  @include scroll-bar-none();
  padding: $--pagePadding;
  .item {
    width: 100%;
    .left-box {
      display: flex;
      justify-content: flex-end;
    }
    .right-box, .left-box {
      margin: 15px 0;
      max-width: 100%;
    }
  }
}
</style>
