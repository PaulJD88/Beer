<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Beers ABV Above
    <select v-model="abvAbove">
      <option value="1">One</option>
      <option value="8">Eight</option>
    </select>
    <button @click="getBeers">Get Beers</button>
    <div class="beers" v-for="beer in beers" :key="beer.id">
      <div class="tile">
        <img :src="beer.image_url" />
        <h2 class="title">{{ beer.name }}</h2>
        <p class="info">{{ beer.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  props: {
    msg: String,
  },
  data() {
    return {
      abvAbove: 1,
      beers: [],
    };
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  background-color: purple;
  margin: 40px 0 0;
}
img {
  width: 80px;
  height: auto;
}
.tile {
  background-color: beige;
  border: dashed purple;
  width: 215px;
  height: auto;
  color: black;
  text-align: center;
  font-size: 10px;
  float: left;
  padding: 10px;
  margin: 10px;
}
</style>
