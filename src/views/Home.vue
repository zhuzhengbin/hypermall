<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="add">+</button>
  </div>

</template>

<script>

  export default {
    name: 'home',
    computed: {
      counter() {
        return this.$store.getters.doubleCount
      }
    },
    methods: {
      add() {
        console.log('add');
        this.$store.dispatch('increment');
      }
    }
  }
</script>
