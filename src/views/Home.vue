<template>
  <div class="home">
    <h1>This is the home page</h1>
    <button @click="randomBeer">Random Beer</button>
    <div class="rBeers" v-for="randomB in beersRandom" :key="randomB.id"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  data() {
    return {
      rBeer: 1,
      beersRandom: [],
    };
  },
  methods: {
    randomBeer() {
      fetch('https://api.punkapi.com/v2/beers/random', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.randomBeer = json;
          console.log(this.rBeer);
        });
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
