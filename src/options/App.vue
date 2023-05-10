<template>
  	<div>
      <BebopLogo/>
      <div>
        options 页面
      </div>
    </div>
</template>
<script setup>
	import { RouterLink, RouterView } from 'vue-router'
    import BebopLogo from '@/components/BebopLogo.vue'

</script>

<style>
#app {
    min-width: 500px;
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;
	font-weight: normal;
}
</style>