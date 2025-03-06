<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
    <Card class="rounded shadow-lg p-5 my-5 mx-auto w-[90%] max-w-[490px]">
        <h2 class="text-lg font-bold">For Developers</h2>
        <p class="my-4 text-gray-500 text-sm font-bold">Browse our Vue jobs and start your career today</p>
        <button class="cursor-pointer text-white p-2 rounded bg-black" type="button">Browse Jobs</button>
    </Card>

    <Card class="bg-green-200 rounded shadow-lg p-5 my-5 mx-auto w-[90%] max-w-[490px]">
        <h2 class="text-lg font-bold">For Employers</h2>
        <p class="my-4 text-gray-500 text-sm font-bold">List your job to find the perfect developer for the role</p>
        <button class="cursor-pointer text-white p-2 rounded bg-green-700" type="button">Add Job</button>
    </Card>
</template>