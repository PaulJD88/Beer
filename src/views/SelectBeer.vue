<template>
  <div class="container">
    <h1>Alcohol By Volume (ABV) Above</h1>
    <select v-model="abvAbove">
      <option value="1">One</option>
      <option value="8">Eight</option>
      <option value="15">Fifteen</option>
    </select>
    <button @click="getBeers">Show me the Beer!</button>

    <br />

    <div class="flex-container">
      <div class="beers" v-for="beer in beers" :key="beer.id">
        <tile :beer="beer"></tile>
      </div>
    </div>
  </div>
</template>

<script>
import tile from '../components/Tile.vue';

export default {
  name: 'BeerTile',
  props: {
    msg: String,
  },
  data() {
    return {
      abvAbove: 1,
      beers: [],
    };
  },
  components: {
    tile,
  },
  methods: {
    getBeers() {
      fetch(`https://api.punkapi.com/v2/beers?abv_gt=${this.abvAbove}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.beers = json;
          console.log(this.abvAbove);
        });
    },
  },
};
</script>
