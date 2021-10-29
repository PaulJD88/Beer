<template>
  <div class="tile">
    <h1>{{ beer.name }}</h1>
    <h2>"{{ beer.tagline }}"</h2>
    <img :src="beer.image_url"/>
    <h3>{{ beer.abv }}%</h3>
    <p>{{ beer.description }}</p>
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
</template>

<script>
export default {
  name: 'Tile',
  props: {
    beer: Object,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>

.tile {
  border: solid black;
  border-radius: 25px;
  background-image: radial-gradient(white, rgba(206, 204, 69, 0.61));
  width: 250px;
  height: 100%;
  color: black;
  text-align: center;
  font-size: 12px;
  padding: 10px;
  margin: 5px;
}
</style>
