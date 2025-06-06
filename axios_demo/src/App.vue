<template>
  <div id="app">
    <ApiData />
  </div>
</template>

<script>
import ApiData from './components/ApiData.vue'

export default {
  name: 'App',
  components: {
    ApiData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  background: linear-gradient(135deg, #bac5f0, #cdb1d3, #ffffff);
  min-height: 100vh;
  padding: 20px;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}
</style>