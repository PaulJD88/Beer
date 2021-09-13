<template>
  <div class="page">
    <div class="select-style">
      Beers ABV Above
      <select v-model="abvAbove">
        <option value="1">One</option>
        <option value="8">Eight</option>
      </select>
      <button @click="getBeers">Get Beers</button>
    </div>
    <div class="flex-container">
      <div class="beers" v-for="beer in beers" :key="beer.id">
        <div class="tile">
          <img :src="beer.image_url" />
          <h2 class="title">{{ beer.name }}</h2>
          <h2>{{ beer.abv }}%</h2>
          <p class="info">{{ beer.description }}</p>
        </div>
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
.page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.select-style {
  margin: 50px;
  height: 75px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  height: auto;
}
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
  background-image: radial-gradient(white, rgba(1, 1, 97, 0.719));
  width: 215px;
  height: auto;
  color: black;
  text-align: center;
  font-size: 10px;
  padding: 20px;
  margin: 5px;
}
button {
  position: relative;
  background-color: black;
  border: none;
  font-size: 28px;
  border-radius: 20px;
  color: #ffffff;
  margin: 10px;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

button:after {
  content: "";
  background: #f1f1f1;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 1.8s;
}

button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s;
}
</style>
