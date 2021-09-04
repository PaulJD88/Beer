<template>
  <div class="home">
    <h1>This is the home page</h1>
    <button @click="randomBeer">Random Beer</button>
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
      beerRandom: [],
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
