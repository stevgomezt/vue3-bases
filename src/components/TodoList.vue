<script setup>
import useTodos from '@/composables/useTodos.js'

const { todo, todos, addTodo, deleteTodo } = useTodos()
</script>

<template>
  <div>
    <h2>TodoList</h2>
    <label for="todo">Todo</label>
    <br />
    <input type="text" id="todo" v-model="todo" @keypress.enter="addTodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }} <button @click="deleteTodo(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
