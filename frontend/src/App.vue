<template>
  <section class="Layout">
    <Window v-if="!isFullWidth" />
    <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
    </router-view>
    <Navbar />
  </section>

</template>

<script lang="ts" setup>
import Navbar from '@/Layout/Navbar.vue'
import Pannel from '@/Layout/Pannel.vue'
import Window from '@/Chat/window.vue'
import { storeRouter } from './store/index';
import { computed, onMounted } from 'vue';
import { GetDevices } from '../wailsjs/go/main/App'
const store = storeRouter()
const getDeviceLists = async () => {
  const data = await GetDevices()
  console.log("a萨达身上das", data)
}
const isFullWidth = computed(() => {
return store.fullWidth
})
onMounted(
    () => {
      getDeviceLists()
    }
)
</script>

<style lang="scss">
.Layout {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
