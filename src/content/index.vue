<template>
  <div class="mintnoii-crx-container">
    <button class="button" @click="handleClick">Mintnoii</button>
    <Teleport to="body">
      <DevPanel v-model:model-value="showDevPanel"/>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DevPanel from './dev-panel.vue'

const showDevPanel = ref(false)

const handleClick = () => {
  showDevPanel.value = true
}
</script>

<style>
#mintnoii-crx {
  position: fixed;
  bottom: 10vh;
  right: 10px;
  z-index: 99999;
}
</style>

<style lang="scss" scoped>
.mintnoii-crx-container {
  .button {
  padding: 10px;
  color: #fff;
  background-color: #ff8e3c;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
}

.button:hover {
  background-color: #ffad4b;
}
}

</style>
