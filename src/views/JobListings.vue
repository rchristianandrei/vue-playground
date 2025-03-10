<script setup lang="ts">
import Header from "../components/Header.vue"
import JobListings from "../components/JobListings.vue"
</script>

<template>
    <Header></Header>
    <JobListings :show-view-all-button="false"></JobListings>
</template>