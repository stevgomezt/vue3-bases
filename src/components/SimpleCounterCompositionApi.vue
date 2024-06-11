<script setup>
import useCounter from '../composables/useCounter.js'

const { counter, counterComputed, increment, reduce } = useCounter()
</script>

<template>
  <div>
    <h2>SimpleCounterCompositionApi</h2>
    <h3>Variable computada = {{ counter }}</h3>
    <h3>Variable computada = {{ counterComputed }}</h3>
    <button @click="increment">Incrementar</button>
    <button @click="reduce">Reducir</button>
  </div>
</template>

<style scoped></style>
