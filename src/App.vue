<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"
import Header from "./components/Header.vue"

const link = "https://google.com"
const name = "Andrei"

const subjects = ref(["Math", "Science", "English"])
const abortController = ref<AbortController | null>(null)

function subjectAdd(e: Event){
  const subjectElement = (e.target as any).test
  subjects.value.push(subjectElement.value)
  subjectElement.value = ""
}
function subjectDelete(index: number){
  subjects.value.splice(index, 1)
}

onMounted(() => {
  console.log("mount")
})

onUnmounted(() => {
  abortController.value?.abort()
  console.log("unmount")
})

</script>

<template>
  <Header></Header>
  <form @submit.prevent="subjectAdd">
    <label for="test">Subject</label>
    <input id="test" name="test" type="text">
    <button type="submit">Add</button>
  </form>
  <div v-if="name">{{ name }}</div>
  <div v-else="!name">Who are you</div>
  <ol>
    <li v-for="(subject, index) in subjects" :key="index">
      <span>{{ subject }}</span>
      <button type="button" @click="() => subjectDelete(index)" >Delete</button>
    </li>
  </ol>
  <a :href="link" target="_blank">Google</a>
</template>

<style scoped>

</style>
