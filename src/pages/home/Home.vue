<script setup>
import TopNavbar from '../../components/TopNavbar.vue';
import Footer from '../../components/Footer.vue';
import NewArrivals from '../../components/new-arrivals/NewArrivals.vue';
import { useCatalog } from '/src/store/catalog.js';
import { ref } from 'vue';

const searchQuery = ref('');
const catalogStore = useCatalog();

const searchJobs = async () => {
  await catalogStore.fetchJobs(searchQuery.value);
};
</script>

<template src="./home.html"></template>
<style scoped src="./home.css"></style>
