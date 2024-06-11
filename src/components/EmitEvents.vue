<script setup>
import { ref } from 'vue'

const message = ref("")

const emit = defineEmits(['onFire'])

const notify = () => {
  emit('onFire', message.value)
}
</script>

<template>
  <div>
    <h2>EmitEvents</h2>
    <label for="newMessage">Mensaje</label>
    <input type="text" id="newMessage" v-model="message">
    <button @click="notify">Notificar al componente padre (HomeView.vue)</button>
  </div>
</template>

<style scoped></style>
