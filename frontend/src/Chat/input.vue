<template>
  <section class="Input">
   <div class="tool-bar">
    <div class="svg-box" @click="handleVoice">
      <SvgIcon name="voice" />
    </div>
    <div class="svg-box" @click="handleFold">
      <SvgIcon name="fold" />
    </div>
    <div class="svg-box" @click="handleFile">
      <SvgIcon name="file" />
    </div>
    <div class="svg-box" @click="handleRecord">
      <SvgIcon name="record" />
    </div>
    <div class="svg-box" @click="handleTransmit">
      <SvgIcon name="transmit" />
    </div>
   </div>
   <div class="input-box">
    <textarea class="textarea" placeholder="请输入..." v-model="inputVal" /> 
    <div class="btns"> 
      <div class="clear" @click="handleClear">清空</div>
      <div class="submit" @click="handleSubmit">发送</div>
    </div>
   </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref, onMounted } from 'vue'
import SvgIcon from "../components/SvgIcon.vue";
import mitter from '../utils/eventBus';
import {CreateWs} from '../api/index'
let inputVal = ref('')
const handleSubmit = () => {
  if (!inputVal.value.length) return
  let data = {
    hostName: 'massc', ip: '127.0.0.1', img: 'http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg', time: new Date().getTime(), content: inputVal.value
  }
  console.log('sssss', data)
  mitter.emit('transmit', data)
  inputVal.value = ''
}


function watchKeyEvent() {
  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 16) {
      handleSubmit()
    }
  })
}

function handleVoice() {
  alert('该功能还未开发，敬请期待')
}

function handleFold() {
  alert('该功能还未开发，敬请期待')
}

function handleFile() {
  alert('该功能还未开发，敬请期待')
}

function handleRecord() {
  alert('该功能还未开发，敬请期待')
}

function handleTransmit() {
  alert('该功能还未开发，敬请期待')
}

function handleClear() {
  inputVal.value = ''
}

onMounted(() => {
  watchKeyEvent()
})
</script>
<style lang="scss" scoped>
.Input{
  height: 20%;
  padding: $--pagePadding;
  .tool-bar {
    height: 30%;
    width: 100%;
    font-size: 16px;
    @include box-align-center();
    margin-bottom: 7px;
    .svg-box {
      margin-right: 10px;
      cursor: pointer;
      border-radius: 3px;
      @include box-align-center;
      svg {
        font-size: 30px;
      }
    }
  }
  .input-box {
    width: 100%;
    height: 70%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
    position: relative;
    .textarea {
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      @include scroll-bar-none;
      outline: none;
      font-size: 14px;
      line-height: 1;
      background-color: $--tabBarColor;
      color: #fff;
      border: none;
      overflow-wrap: break-word;
    }
    .btns {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      .submit, .clear {
        margin-left: 10px;
        padding: 5px;
        background-color: rgb(0, 136, 255);
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        color: #fff;
      }
    }
  }
  
}
</style>
