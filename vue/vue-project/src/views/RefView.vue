<script setup>
  import { ref } from 'vue'

  // 상태(State)
  const count = ref(0)

  // 기능(Actions)
  async function increment() {
    count.value++
    console.log(document.getElementById('counter').textContent)

    await nextTick()

    console.log(document.getElementById('counter').textContent)
  }
</script>
<template>
  <div class="content">
    <h1>반응 기초(상태관리)</h1>
    <div id="counter">{{ count }}</div>
    <button @click="increment">Add Count</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .content {
    min-height: 100vh;
  }
}
</style>
