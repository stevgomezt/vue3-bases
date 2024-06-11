<script async setup>
import { ref } from 'vue'

const users = ref(null)

const fetchData = () => {
  return new Promise((resolve) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          resolve(data)
        }, 5000)
      })
  })
}

users.value = await fetchData()
</script>

<template>
  <div>
    <h2>SuspenseFetch</h2>
    <ul v-if="users">
      <li v-for="user in users" :key="user.id">{{ user.name }} - {{ user.email }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
