<script setup lang="ts">
import Header from "./components/Header.vue"
import Hero from "./components/Hero.vue"
import HomeCards from "./components/HomeCards.vue"
import JobListings from "./components/JobListings.vue"

import jobsRepo from "./repository/jobsRepo"
</script>

<template>
  <Header></Header>
  <Hero></Hero>
  <HomeCards></HomeCards>
  <JobListings :jobs="jobsRepo.getJobs()"></JobListings>
</template>

<style scoped>

</style>
