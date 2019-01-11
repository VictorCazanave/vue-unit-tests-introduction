<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Count: <span>{{ count }}</span></p>
    <button @click="increment">Increment</button>
    <button @click="save">Save</button>
  </div>
</template>

<script>
import API from '@/api';

export default {
  name: 'CounterComponent',
  props: {
    title: String
  },
  data() {
    return {
      count: 0,
    }
  },
  created() {
    API.getCount().then((count) => {
      this.count = count;
    });
  },
  methods: {
    increment() {
      this.count++;
      this.$emit('change', this.count);
    },
    save() {
      API.updateCount(this.count);
      this.$emit('save', this.count);
    }
  }

}
</script>

<style scoped lang="scss">
div {
  padding: 10px;
  border: 1px solid red;
}

button {
  margin: 0 10px;
  padding: 5px 10px;
  font-size: 14px;
}
</style>
