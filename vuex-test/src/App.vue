<template>
  <div id="app">
    {{ count }}
    <input type="button"
           value="+"
           @click="increment()" />

    {{ dataProperties }}
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
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
    ]),
    ...mapActions([
      'loadData'
    ])
  },
  mounted() {
    this.loadData();
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
