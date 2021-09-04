<template>
  <div class="hello">
    <div class="selector">
    Beers ABV Above
    <select v-model="abvAbove">
      <option value="1">One</option>
      <option value="8">Eight</option>
    </select>
    <button @click="getBeers">Get Beers</button>
    </div>
    <div class="beers" v-for="beer in beers" :key="beer.id">
      <div class="tile">
        <img :src="beer.image_url" />
        <h2 class="title">{{ beer.name }}</h2>
        <h2> {{ beer.abv }}% </h2>
        <p class="info">{{ beer.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
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

<style>
img {
  width: 80px;
  height: auto;
}
p {
  font-size: 14px;
  font-style: italic;
}
.tile {
  border: solid black;
  border-radius: 25px;
  background-color: #F2DE77;
  width: 215px;
  height: auto;
  color: black;
  text-align: center;
  font-size: 10px;
  float: left;
  padding: 20px;
  margin: 5px;
}
.selector {
  margin-top: 50px;
}
select {
  margin: 10px;
}
</style>
