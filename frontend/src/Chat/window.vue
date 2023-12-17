<template>
  <section class="Window">
    <div v-if="isDialog" class="nostart">
      <div class="dialog">
        <Dialog />
        <Input />
      </div>
      <div class="info">
        <UserInfo />
      </div>
    </div>
    <Start v-if="!isDialog"/>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import Dialog from './dialog.vue';
import Input from './input.vue';
import Start from '@/components/Start.vue';
import UserInfo from '@/components/UserInfo.vue'
import { storeDialog } from '../store/dialog'
const store = storeDialog()
const isDialog = computed(() => {
return store.deviceId
})
</script>
<style lang="scss" scoped>
.Window{
  width: 100%;
  height: 100%;
  background-color: $--tabBarColor;
  border-right: 1px solid gray;
  .nostart {
    display: flex;
    width: 100%;
    height: 100%;
    .dialog {
      width: 70%;
      height: 100%;
    }
    .info {
      width: 30%;
      height: 100%;
      border-left: 1px solid gray;
      overflow: scroll;
    }
  }
}
</style>
