<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
    <div class="grid md:grid-cols-2 gap-4 mx-2 lg:mx-auto my-5 max-w-[1000px]">
        <Card class="p-5">
            <h2 class="text-lg font-bold">For Developers</h2>
            <p class="my-4 text-gray-500 text-sm font-bold">Browse our Vue jobs and start your career today</p>
            <button class="cursor-pointer text-white p-2 rounded bg-black" type="button">Browse Jobs</button>
        </Card>
    
        <Card class="bg-green-200 p-5">
            <h2 class="text-lg font-bold">For Employers</h2>
            <p class="my-4 text-gray-500 text-sm font-bold">List your job to find the perfect developer for the role</p>
            <button class="cursor-pointer text-white p-2 rounded bg-green-700" type="button">Add Job</button>
        </Card>
    </div>
</template>