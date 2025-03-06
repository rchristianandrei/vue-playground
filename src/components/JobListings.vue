<script setup lang="ts">
import type { PropType } from "vue";
import type { Job } from "../models/job";
import Card from "./Card.vue"
defineProps({
    jobs: {
        type: Array as PropType<Job[]>,
        default: [{
            type: "Full-Time",
            title: "Senior Vue Developer",
            description: "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript...",
            salary: "$70 - $80k",
            location: "Boston, MA"
        }]
    }
})
</script>

<template>
    <div class="bg-green-100 py-5">
        <h1 class="text-center text-2xl font-bold text-green-500">Browse Jobs</h1>
        <Card v-for="(job, index) in jobs" :key="index">
            <div class="bg-white rounded p-5 my-5">
                <div class="text-gray-500">{{job.type}}</div>
                <h2 class="text-xl font-bold">{{job.title}}</h2>
                <p class="my-3 text-justify">{{job.description}}</p>
                <div class="text-green-500 font-medium my-1"><span>{{job.salary}}</span> / Month</div>
                <div class="h-[1px] bg-gray-400"></div>
                <div class="text-red-700 font-semibold my-1">{{job.location}}</div>
                <button type="button" class="cursor-pointer text-white font-medium bg-green-500 p-2 rounded w-[100%] hover:opacity-[0.5]">Read More</button>
            </div>
        </Card>
    </div>
</template>