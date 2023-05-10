<template>
  <div>
    <div class="rounded-lg cursor-pointer bg-gray-500 w-fit p-10px" @click="toggle()">Bebop</div>
    <Teleport to="body">
      <DevPanel v-model:model-value="showDevPanel" />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import DevPanel from './dev-panel.vue'
const [showDevPanel, toggle] = useToggle(false)

</script>

<style>
#mintnoii-bebop {
  position: fixed;
  bottom: 10vh;
  right: 10px;
  z-index: 99999;
}
</style>
