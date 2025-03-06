<script setup lang="ts">
import Header from "./components/Header.vue"
import Hero from "./components/Hero.vue"
import HomeCards from "./components/HomeCards.vue"
import JobListings from "./components/JobListings.vue"
</script>

<template>
  <Header></Header>
  <Hero></Hero>
  <HomeCards></HomeCards>
  <JobListings :show-view-all-button="true"></JobListings>
</template>

<style scoped>

</style>
