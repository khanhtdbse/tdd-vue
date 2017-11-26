<template>
  <div>
      <h1>{{ msg }}</h1>
      <h2>{{ count }}</h2>
      <button-component 
          @incrementButtonHasBeenClicked="increment()" 
          @decrementButtonHasBeenClicked="decrement()" 
      />
  </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my first TDD :)',
      count: 0
    }
  },
  components: { ButtonComponent },
  methods: {
    increment() {
        this.count++
    },
    decrement() {
        this.count--
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
