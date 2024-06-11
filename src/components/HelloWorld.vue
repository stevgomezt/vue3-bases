<script setup>
import { ref } from 'vue'
const message = ref('Msj Comp HelloWorld')
</script>

<template>
  <div>
    <h2>{{ message }}</h2>
    <label for="message">Mensaje Reactivo ref()</label>
    <br />
    <input type="text" id="message" v-model="message" v-if="message" />
  </div>
</template>

<style scoped></style>
