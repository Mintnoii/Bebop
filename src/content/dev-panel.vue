<template>
  <div class="fixed flex flex-col right-10px bottom-8vh p-10px w-20vw h-30vh bg-green-300 rounded-10px z-999 text-18px" v-show="showPanel">
    <div class="p-10px h-30px">
      <span class="cursor-pointer" @click="closePanel">关闭</span>
    </div>
    <div class="p-10px flex-1">
      content
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
  showPanel.value = false
}
</script>
