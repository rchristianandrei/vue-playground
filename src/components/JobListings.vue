<script setup lang="ts">
import type { Job } from "../models/job";
import { ref } from "vue";
import Card from "./Card.vue"
import jobsRepo from "../repository/jobsRepo"

const props = defineProps({
    limit: {
        type: Number,
        default: 3
    },
    showViewAllButton: {
        type: Boolean,
        default: false
    }
})
const jobs = ref<Job[]>(jobsRepo.getJobs())
</script>

<template>
    <div class="bg-green-100 py-5">
        <h1 class="text-center text-2xl font-bold text-green-500">Browse Jobs</h1>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 lg:mx-auto my-5 max-w-[1000px]">
            <Card v-for="(job, index) in jobs.slice(0, limit)" :key="index" class="bg-white rounded p-5 my-5">
                <div class="text-gray-500">{{job.type}}</div>
                <h2 class="text-xl font-bold"><span class="pi pi-briefcase"></span> {{job.title}}</h2>
                <p class="my-3 text-justify">{{job.description}}</p>
                <div class="text-green-500 font-medium my-1"><span>{{job.salary}}</span> / Month</div>
                <div class="h-[1px] bg-gray-400"></div>
                <div class="text-red-700 font-semibold my-1"><span class="pi pi-map-marker"></span> {{job.location}}</div>
                <button type="button" class="cursor-pointer text-white font-medium bg-green-500 p-2 rounded w-[100%] hover:opacity-[0.5]">Read More</button>
            </Card>
        </div>
        <div v-if="showViewAllButton" class="flex justify-center align-center">
            <a href="/jobs" class="cursor-pointer bg-black text-white font-medium px-10 py-2 rounded hover:opacity-[0.5]">View All Jobs</a>
        </div>
    </div>
</template>