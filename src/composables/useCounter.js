import { ref, computed } from 'vue'

export default function () {
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
  return {
    counter, counterComputed, increment, reduce
  }
}
