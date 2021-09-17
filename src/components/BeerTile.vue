<template>
  <div class="page">
    <div class="select-style">
      Alcohol By Volume (ABV) Above
      <select v-model="abvAbove">
        <option value="1">One</option>
        <option value="8">Eight</option>
        <option value="15">Fifteen</option>
      </select>
      <button @click="getBeers">Show me the Beer!</button>
    </div>
    <br />

    <div class="flex-container">
      <div class="beers" v-for="beer in beers" :key="beer.id">
        <div class="tile">
          <h2 class="title">{{ beer.name }}</h2>
          <h2>"{{ beer.tagline }}"</h2>
          <img :src="beer.image_url" />
          <h3>{{ beer.abv }}%</h3>
          <p class="info">{{ beer.description }}</p>
          <div class="myDIV">Hover Over For More Info</div>
          <div class="hide">
            <p>First Brewed: {{ beer.first_brewed }}</p>
            <p>
              Good With:
              <br />
              &bull; {{ beer.food_pairing[0] }}
              <br />
              &bull; {{ beer.food_pairing[1] }}
              <br />
              &bull; {{ beer.food_pairing[2] }}
            </p>
            <p>Brewers Tips: {{ beer.brewers_tips }}</p>
          </div>
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
      allBeers: [],
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
    everyBeer() {
      fetch('https://api.punkapi.com/v2/beers?per_page=80', {
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

<style>
.tile {
  border: solid black;
  border-radius: 25px;
  background-image: radial-gradient(white, rgba(206, 204, 69, 0.61));
  width: 200px;
  height: auto;
  color: black;
  text-align: center;
  font-size: 12px;
  padding: 10px;
  margin: 5px;
}

.page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.select-style {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  width: 250px;
  height: auto;
}
select {
  margin: 10px;
  height: 50px;
  width: 105px;
}
</style>
