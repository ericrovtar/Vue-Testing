<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>

    {{ count }}
    <input type="button"
           value="+"
           @click="increment()" />

    {{ dataProperties }}
  </div>
</template>

<script>
import Hello from './components/Hello'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
    Hello
  },
  computed: {
    ...mapGetters([
      'count',
      'dataProperties'
    ])
  },
  methods: {
    ...mapMutations([
      'increment'
    ])
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
