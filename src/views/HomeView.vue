<script setup>
// Para ejemplo Login Form
import { reactive, toRefs } from 'vue'

import HelloWorld from '../components/HelloWorld.vue'
import SimpleCounter from '../components/SimpleCounter.vue'
import ReactiveCounter from '../components/ReactiveCounter.vue'
import WatchCounter from '../components/WatchCounter.vue'
import SimpleCounterCompositionApi from '../components/SimpleCounterCompositionApi.vue'
import TodoList from '../components/TodoList.vue'
import SimpleFetch from '../components/SimpleFetch.vue'
import SuspenseFetch from '../components/SuspenseFetch.vue'
import ProfileWithProps from '../components/ProfileWithProps.vue'
import EmitEvents from '../components/EmitEvents.vue'
import LoginForm from '../components/LoginForm.vue'

const eventEmitFromChild = (message) => {
  console.log(message)
}

// Para ejemplo Login Form
const login = reactive({
  email: '',
  password: ''
})

const { email, password } = toRefs(login)
</script>
<template>
  <div>
    <LoginForm v-model:email="email" v-model:password="password"/>
    {{ email }} - {{ password }}
    <br />
    <hr />
    <br />
    <EmitEvents @onFire="eventEmitFromChild" />
    <br />
    <hr />
    <br />
    <!-- Vamos a enviar Props desde a ProfileWithProps.vue -->
    <ProfileWithProps name="Steven" :age="32" />
    <br />
    <hr />
    <br />
    <Suspense>
      <template #default>
        <SuspenseFetch />
      </template>
      <template #fallback> Cargando informacion desde la API... </template>
    </Suspense>
    <br />
    <hr />
    <br />
    <SimpleFetch />
    <br />
    <hr />
    <br />
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
