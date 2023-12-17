<template>
  <section class="Navbar">
    <div class="avator">
      <img src="../assets/images/user2.jpeg" alt="">
    </div>
    <div class="status">
      <div class="dot"></div>
      <span class="status-title">在线</span>
    </div>  
    <div class="menus">
      <div :class="currentPath === item.path ? 'menu active' : 'menu'" v-for="(item, index) in featureRouters" :key="index" @click="handleSelect(item)">
        <SvgIcon :name="item.meta.icon" />
        <div class="menu-title">{{item.meta.title}}</div>
      </div>
    </div>

  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import SvgIcon from "../components/SvgIcon.vue";
import router from '../router'
import {featureRouters} from '../router/featureRouters'
let currentPath = ref('/History')
const handleSelect = (value: object) => {
  currentPath.value = (value as {path: string}).path
  router.push((value as {path: string}).path)
}
</script>
<style lang="scss" scoped>
.Navbar{
  width: 80px;
  height: 100%;
  background-color: rgb(184, 176, 176);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-left: 1px solid gray;
  .avator {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid gray;
    }
  }
  .status {
    display: flex;
    align-items: center;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: green;
      margin-right: 2px;
    }
    .status-title {
      margin-left: 2px;
      font-size: 14px;
    }
  }
  .menus {
    margin-top: 10px;
    width: 100%;
    .menu {
      margin-top: 20px;
      cursor: pointer;
      @include box-center;
      svg {
        font-size: 30px;
        color: #fff;
      }
      .menu-title {
        font-size: 12px;
      }
    }
    .active {
      scale: 1.2;
      animation-name: activekf;
      animation-duration: .5s;
      @keyframes activekf {
        25% {
          scale: 1.25;
        }
        50% {
          scale: 1.1;
        }
        100% {
          scale: 1.2;
        }
      }
      svg {
        color: $--active-bgc-color;
      }
      .menu-title {
        color: $--active-bgc-color;
      }
    }
  }
}
</style>