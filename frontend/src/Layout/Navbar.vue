<template>
  <section class="Navbar">
    <div class="avator">
      <img src="../assets/images/user2.jpeg" alt="">
    </div>
    <div class="menus">
      <div :class="active === index ? 'menu active' : 'menu'" v-for="(item, index) in menus" :key="index" @click="handleSelect(index)">
        <SvgIcon :name="item.icon" />
        <div class="menu-title">{{item.title}}</div>
      </div>
    </div>

  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import SvgIcon from "../components/SvgIcon.vue";
import {menus} from "../utils/const"
let active = ref(0)
const handleSelect = (value: number) => {
  active.value = value
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
  .avator {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid gray;
    }
  }
  .menus {
    margin-top: 10px;
    width: 100%;
    .menu {
      margin-top: 30px;
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
      svg {
        color: #206CCF;
      }
      .menu-title {
        color: #206CCF;
      }
    }
  }
}
</style>