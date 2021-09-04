<template>
  <div class="home">
    <h1>This is the home page</h1>
    <button @click="randomBeer">Get Beer</button>
  </div>
</template>

<script>
export default {
  methods: {
    randomBeer() {
      fetch('https://api.punkapi.com/v2/beers/random', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.random = json;
        });
    },
  },
};
</script>
