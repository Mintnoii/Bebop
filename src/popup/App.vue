<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BebopLogo from '@/components/BebopLogo.vue'
</script>

<template>
  <div class="flex-col p-10px">
    <header>
      <BebopLogo />
      <div class="wrapper">
        <nav class="flex justify-around">
          <RouterLink to="/">主页</RouterLink>
          <RouterLink to="/about">简介</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#bebop_popup {
  min-width: 300px;
  max-width: 1280px;
  margin: 0 auto;
}
</style>