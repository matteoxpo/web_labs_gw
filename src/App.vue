<script setup>
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import CountdownPopup from './components/CountdownPopup.vue';

</script>

<template>
  <div id="app">
    <router-view />
    <CountdownPopup />
  </div>
</template>

<style>

html, body {
  background-color: #ffffff !important;
}
#app {
  font-family: 'Roboto', sans-serif, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
