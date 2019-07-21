<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <span>{{ times }}</span><input v-model="times">
    <counter-group :title="parseInt(times==''?0:times)"/>
  </div>
</template>

<script>
import counterGroup from './components/count/counterGroup.vue'

export default {
  name: 'app',
  components: {
      counterGroup
  },data(){
      return {
          times:0,
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
