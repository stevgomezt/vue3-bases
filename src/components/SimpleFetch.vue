<script setup>
import { ref, onMounted } from 'vue'

const users = ref(null)

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  users.value = await response.json()
})
</script>

<template>
  <div>
    <h2>SimpleFetch</h2>
    <ul v-if="users">
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
