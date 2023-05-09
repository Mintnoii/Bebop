<template>
  <div class="dev-panel" v-show="showPanel">
     <div class="drawer-header">
        <span class="back-button" @click="closePanel">关闭</span>
      </div>
      <div class="drawer-content">
        <slot></slot>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const showPanel = useVModel(props, 'modelValue', emit)
const closePanel = () => {
    console.log('sdfsdfdsdf');

  showPanel.value = false
}
</script>

<style lang="scss" scoped>
.dev-panel {
  position: fixed;
  right: 0px;
  bottom: 20vh;
  height: 30vh;
  width: 20vw;
  padding: 10px;
  background-color: #31eeaf;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  z-index: 99999;
}

.drawer-content {
  padding: 20px;
  height: calc(100% - 40px);
  overflow: auto;
}

.drawer-header {
  padding: 12px;
}

.back-button {
  cursor: pointer;
}
</style>
