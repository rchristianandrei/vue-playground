<script setup lang="ts">
</script>

<template>
    <header class="bg-green-700 text-white border-b">
        <div class="flex justify-center md:justify-between items-center h-[80px] max-w-[1000px] md:m-auto">
            <div class="bg-white p-2 mx-5 cursor-pointer rounded-full">
                <a href="/"><img src="../assets/vue.svg" alt=""></a>
            </div>
            <nav>
                <ul class="flex">
                    <li class="text-xl flex justify-center cursor-pointer rounded hover:bg-green-900"><a href="/" class="px-5 py-2">Home</a></li>
                    <li class="text-xl flex justify-center cursor-pointer rounded hover:bg-green-900"><a href="/joblistings" class="px-5 py-2">Jobs</a></li>
                    <li class="text-xl flex justify-center cursor-pointer rounded hover:bg-green-900"><a class="px-5 py-2">Add Job</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>