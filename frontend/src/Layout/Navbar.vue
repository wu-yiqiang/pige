<template>
  <section class="Navbar">
    <div class="avator">
      <img src="../assets/images/logo-universal.png" alt="">
    </div>
    <div class="menu">
      <SvgIcon name="chat" />
    </div>
    <div class="menu">
      <SvgIcon name="user" />
    </div>
    <div class="menu">
      <SvgIcon name="group" />
    </div>
   <!-- <div class="menToggle"></div>
   <ul>
    <li class="list active">
      <a href="#" style="--clr:#f44336;"></a>
      <span>text</span>
      <SvgIcon name="user" />
    </li>
    <li class="list"></li>
    <li class="list"></li>
    <li class="list"></li>
    <li class="list"></li>
   </ul> -->
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
import SvgIcon from "../components/SvgIcon.vue";
</script>
<style lang="scss" scoped>
.Navbar{
  width: 100px;
  height: 100%;
  color: red;
  background-color: rgb(184, 176, 176);
  display: flex;
  flex-direction: column;
  align-items: center;
  .avator {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
  .menu {
    height: 20px;
    width: 20px;
    margin-bottom: 50px;
    svg {
      font-size: 30px;
    }
  }
  // ul {
  //   display: flex;
  //   flex-direction: column;
  //   width: 100%;
  //   .list {
  //     display: flex;
  //     align-items: center;
  //     list-style: none;
  //     position: relative;
  //     width: 100%;
  //     height: 76px;
  //     border-radius: 12px;
  //     border: 8px solid transparent;
  //     transition: 0.5s;
  //     svg {
  //       width: 30px;
  //       height: 30px;
  //     }
  //   }
  //   li {
  //     &::before {
  //       content: '';
  //       position: absolute;
  //       bottom: -28px;
  //       left: -10px;
  //       width: 20px;
  //       height: 20px;
  //       background: transparent;
  //       border-top-left-radius: 20px;
  //       box-shadow: 6px 6px 0 0 rgb(12, 183, 183);
  //       transform: scale(0);
  //       transform-origin: bottom left;
  //       transition: 0.5s;
  //     }
  //     // &::after {
  //     //   content: '';
  //     //   position: absolute;
  //     //   bottom: -28px;
  //     //   left: -10px;
  //     //   width: 20px;
  //     //   height: 20px;
  //     //   background: transparent;
  //     //   border-top-left-radius: 20px;
  //     //   // box-shadow: 3px -3px 0 3px rgb(5, 198, 198);
  //     //   transform: scale(0);
  //     //   transform-origin: bottom left;
  //     //   transition: 0.5s;
  //     // }
  //   }
  //   .active {
  //     transform: translateX(-30px);
  //     background-color: rgb(139, 144, 144);
  //     &::after {
  //       left: 22px;
  //       transform: scale(1);
  //     }
  //     &::before {
  //       left: 22px;
  //       transform: scale(1);
  //     }
  //   }
  // }
}
</style>