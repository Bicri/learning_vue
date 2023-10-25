<template>
<!-- eslint-disable -->
  <h2> {{ customTitle }} </h2>
  <p> {{counter}} <sup>2</sup> = {{ squareCounter }}</p>

  <div>
    <button v-on:click="increase" >+1</button>
    <button @click="decrease" >-1</button>
  </div>
</template>

<script>
export default {
    name: 'Contador',
    // props: ['title', 'start'],
    props: {
      title: String,
      start: {
        type: Number,
        // required: true
        default: 10,
        validator(value) {
          return value > 0
        }
      }
    },
    data() {
      return {
        counter: this.start
      }
    },
    methods: {
      getSquare()
      {
        console.log("get square")
        return this.counter * this.counter;
      },
      increase()
      {   
        this.counter++;
      },
      decrease()
      {
        this.counter--;
      }
    },
    computed: {
      squareCounter() {
        console.log("computed square counter")
        return this.counter * this.counter;
      },
      customTitle() {
        return this.title || "Contador"
      }
    }
}
</script>

<style>

button {
  border-radius: 5px;
  margin: 0 5px;
}

</style>