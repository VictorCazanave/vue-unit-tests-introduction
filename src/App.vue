<template>
  <div id="app">
    <h1>Awesome App</h1>
    <p>{{ text }}</p>
    <counter-component
      title="Great Counter Component"
      @change="change"
      @save="save"
    />
  </div>
</template>

<script>
import CounterComponent from './components/CounterComponent.vue'

export default {
  name: 'app',
  components: {
    CounterComponent
  },
  data() {
    return {
      text: `You haven't touched the Great Counter Component yet :'(`
    }
  },
  methods: {
    change(count) {
      this.text = `You changed the value! Do you think ${count} is good enough?`
    },
    save(count) {
      this.text = `Good choice! ${count} is great value :)`
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 50px;
  border: 1px solid blue;
}
</style>
