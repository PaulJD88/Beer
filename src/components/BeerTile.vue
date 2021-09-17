<template>
  <div class="page">
    <div class="select-style">
      Alcohol By Volume (ABV) Above
      <select v-model="abvAbove">
        <option value="1">One</option>
        <option value="8">Eight</option>
        <option value="15">Fifteen</option>
      </select>
    </div>
    <br />
    <div>
      <button @click="getBeers">Get Beers</button>
    </div>
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
</style>
