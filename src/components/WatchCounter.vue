<script setup>
import { ref, watch } from 'vue'

const counter = ref(0)
const message = ref('')

const increment = () => {
  counter.value++
}

const reduce = () => {
  if (counter.value > 0) {
    counter.value--
  }
}

watch(counter, () => {
  if (counter.value === 0) {
    message.value = 'Para iniciar incremente el valor...'
  } else if (counter.value < 5) {
    message.value = 'el valor es menor a 5'
  } else if (counter.value === 5) {
    message.value = 'el valor es igual a 5'
  } else if (counter.value > 5) {
    message.value = 'el valor es mayor a 5'
  }
})
</script>

<template>
  <div>
    <h2>Watch Counter</h2>
    <h3>{{ counter }}</h3>
    <h3>{{ message }}</h3>
    <button @click="increment">Incrementar</button>
    <button @click="reduce">Reducir</button>
  </div>
</template>

<style scoped></style>
