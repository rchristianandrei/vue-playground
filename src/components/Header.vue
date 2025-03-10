<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="bg-green-700 text-white border-b">
        <div class="flex justify-center md:justify-between items-center h-[80px] max-w-[1000px] md:m-auto">
            <div class="bg-white p-2 mx-5 cursor-pointer rounded-full">
                <RouterLink to="/"><img src="../assets/vue.svg" alt=""></RouterLink>
            </div>
            <nav>
                <ul class="flex">
                    <li class="text-xl flex justify-center cursor-pointer rounded hover:bg-green-900"><RouterLink to="/" class="px-5 py-2">Home</RouterLink></li>
                    <li class="text-xl flex justify-center cursor-pointer rounded hover:bg-green-900"><RouterLink to="/joblistings" class="px-5 py-2">Jobs</RouterLink></li>
                    <li class="text-xl flex justify-center cursor-pointer rounded hover:bg-green-900"><RouterLink to="/" class="px-5 py-2">Add Job</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>