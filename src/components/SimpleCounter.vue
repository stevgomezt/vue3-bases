<script setup>
import { ref, computed } from 'vue'
const counter = ref(0)
const counterComputed = computed(() => {
  return `el valor de counter es ${counter.value}`
})

const increment = () => {
  counter.value++
}

const reduce = () => {
  if (counter.value > 0) {
    counter.value--
  }
}
</script>

<template>
  <div>
    <h2>SimpleCounter</h2>
    <h3>Variable computada = {{ counterComputed }}</h3>
    <button @click="increment">Incrementar</button>
    <button @click="reduce">Reducir</button>
  </div>
</template>

<style scoped></style>
