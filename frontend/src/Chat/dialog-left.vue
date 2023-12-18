<template>
  <section class="DialogLeft">
    <div class="avator">
      <SvgIcon name="user" size="500" />
      <!-- <img :src="props.target.img" alt="" /> -->
    </div>
    <div class="main-box">
      <div class="content">{{ props.target.content }}</div>
      <div class="time">{{ formatDate(props.target.time) }}</div>
      <div class="triangle"></div>
    </div>
    <!-- <div class="name">{{ props.target.hostName }}</div> -->
  </section>
</template>
<script setup lang="ts">
import { reactive, watch, computed, ref, onMounted } from "vue";
import SvgIcon from "../components/SvgIcon.vue";
import { formatDate } from "../utils/time"
const props = defineProps({
  target: {
    require: true,
    type: Object,
    default: () => {},
  },
});
</script>
<style lang="scss" scoped>
.DialogLeft {
  display: flex;
  .avator {
    margin-right: 6px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .main-box {
    display: flex;
    position: relative;
    justify-content: flex-start;
    .content {
      max-width: 60%;
      background-color: #1aad19;
      border-radius: 4px;
      margin-left: 10px;
      padding: 10px;
      word-break: break-all;
      font-size: 14px;
      color: #fff;
      @include box-align-center;
      text-align: justify;
    }
    .time {
      margin-left: 10px;
      font-size: 12px;
      color: #949393;
    }
    .triangle {
      position: absolute;
      top: 4px;
      border-top: 10px solid transparent;
      border-right: 10px solid #1aad19;
      border-bottom: 10px solid transparent;
    }
  }
}
</style>
