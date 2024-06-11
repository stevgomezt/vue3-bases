<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import SimpleCounter from '../components/SimpleCounter.vue'
import ReactiveCounter from '../components/ReactiveCounter.vue'
import WatchCounter from '../components/WatchCounter.vue'
import SimpleCounterCompositionApi from '../components/SimpleCounterCompositionApi.vue'
import TodoList from '../components/TodoList.vue'
</script>

<template>
  <div>
    <TodoList />
    <br />
    <hr />
    <br />
    <SimpleCounterCompositionApi />
    <br />
    <hr />
    <br />
    <WatchCounter />
    <br />
    <hr />
    <br />
    <ReactiveCounter />
    <br />
    <hr />
    <br />
    <SimpleCounter />
    <br />
    <hr />
    <br />
    <HelloWorld />
  </div>
</template>
