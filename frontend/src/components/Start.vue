<template>
  <section class="Start">
   <SvgIcon name="link" />
  </section>
</template>
<script lang="ts" setup>
import SvgIcon from "../components/SvgIcon.vue";
</script>

<style lang="scss" scoped>
.Start{
  height: 100%;
  width: 100%;
  background-color: $--pageBackgroundColor;
  color: #fff;
  @include box-center;
  svg {
    font-size: 150px;
  }
}
</style>
