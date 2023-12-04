<template>
  <section class="Dialog">
    <div v-for="(item, index) in lists" :key="index" class="item">
      <div v-if="item.ip === store.$state.settings.ip" class="left-box">
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
import { States } from '../store/index';
import {dialogs, Dialog} from '../utils/const'
const store = States()
let lists: Array<Dialog> = reactive([])
watch([lists], ([lists], [prevLists]) => {
  const ele: Element | null = document.querySelector('.Dialog')
  ele && ele.scrollIntoView({ behavior: "smooth", block: "end" });
})
onMounted(() => {
  lists.push(...(dialogs.sort((a: Dialog, b: Dialog) => a.time - b.time)))
  // mitter.on('transmit', (data: never) => {
  //   lists.push(data)
  // })
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
