<script setup>
import { defineProps } from 'vue'

// Vamos a recibir Props desde HomeView.vue
const props = defineProps({
  name: String,
  age: Number
})
</script>

<template>
  <div>
    <h2>ProfileWithProps</h2>
    <h3>Nombre: {{ props.name }}, Edad: {{ props.age }}</h3>
  </div>
</template>

<style scoped></style>
