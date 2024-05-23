<script setup>
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import CountdownPopup from './components/CountdownPopup.vue';
</script>

<template>
  <router-view />
  <CountdownPopup />
</template>

<style>
html, body {
  background-color: #ffffff !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
