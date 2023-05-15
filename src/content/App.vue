<template>
  <div>
    <div class="rounded-lg cursor-pointer bg-gray-500 w-fit p-10px fixed bottom-3vh right-10px z-999" @click="toggle()">Bebop</div>
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
