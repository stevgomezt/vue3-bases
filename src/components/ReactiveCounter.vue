<script setup>
import { reactive, computed, toRef } from 'vue'

const data = reactive({
  counter: 0
})

const counter = toRef(data, 'counter')

const counterComputed = computed(() => {
  return `el valor de counter es ${data.counter}`
})

const increment = () => {
  data.counter++
}

const reduce = () => {
  if (data.counter > 0) {
    data.counter--
  }
}
</script>

<template>
  <div>
    <h2>Reactive counter {{ counter }}</h2>
    <h3>Variable computada = {{ counterComputed }}</h3>
    <button @click="increment">Incrementar</button>
    <button @click="reduce">Reducir</button>
  </div>
</template>

<style scoped></style>
