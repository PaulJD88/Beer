<template>
  <div class="container">
    <h1>A list of all available beer</h1>
    <button @click="everyBeer">Get Beers</button>
    <div class="flex-container">
      <div class="beers" v-for="beer in allBeers" :key="beer.id">
        <tile :beer="beer"></tile>
      </div>
    </div>
  </div>
</template>

<script>
import tile from '../components/Tile.vue';

export default {
  data() {
    return {
      allBeers: [],
    };
  },
  components: {
    tile,
  },
  methods: {
    everyBeer() {
      fetch('https://api.punkapi.com/v2/beers?page=4&per_page=80', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.allBeers = json;
        });
    },
  },
};
</script>
