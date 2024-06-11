<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:email', 'update:password'])

const updateEmail = (event) => {
  emit('update:email', event.target.value)
}

const updatePassword = (event) => {
  emit('update:password', event.target.value)
}
</script>

<template>
  <div>
    <h2>LoginForm</h2>
    <label for="email">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      autocomplete="off"
      :value="props.email"
      @input="updateEmail"
    />
    <label for="password">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      :value="props.password"
      @input="updatePassword"
    />
  </div>
</template>

<style scoped></style>
