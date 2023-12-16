<template>
  <section :class="item.deviceId === currentId ? 'Item Item-selected' : 'Item'" @click="updateSelect(item.deviceId)">
    <div class="info">
      <div class="left-box">
        <img :src="item.img" alt="" />
      </div>
      <div class="right-box">
        <div class="hostname">{{ item.hostName }}</div>
        <div class="ip">{{ item.ip }}</div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onMounted, defineEmits } from 'vue'
const emit = defineEmits(['updateSelect'])
let imgName = ref('mac')
const props = defineProps({
  item: {
    require: true,
    type: Object,
    default: {}
  },
  currentId: {
    require: true,
    type: String,
    default: ''
  }
})
const updateSelect = (value: any) => {
  emit('updateSelect', value)
}
</script>
<style lang="scss" scoped>
.Item {
  // border: 1px solid gray;
  border-radius: $--boder-spacing-3;
  padding: $--padding-spacing-5;
  margin: $--padding-spacing-5;
  cursor: pointer;
  .info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    .left-box {
      @include box-center;
      img {
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
    }
    .right-box {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      align-content: space-between;
      .hostname {
        font-size: 16px;
      }
      .ip {
        font-size: 14px;
      }
    }
  }
}
.Item-selected {
  background-color: $--active-bgc-color;
  color: #fff;
}
</style>
