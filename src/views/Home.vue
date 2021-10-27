<template>
  <div class="home">
    <h1>Do you like Beer?</h1>

    <input v-model="beersRandom" value="yes" type="radio" id="yes" />
    <label for="no"> Yes I do!</label><br />

    <input v-model="beersRandom" value="no" type="radio" id="no" />
    <label for="no"> No I do not!</label><br />

    <button v-if="beersRandom === 'yes'" @click="randomBeer">
      It's Beer O'clock! &#127866;
    </button>
    <p v-else-if="beersRandom === 'no'" v-html="ginSite"></p>
    <br />
    <div class="get beer">
      <div class="flex-container">
        <div class="tile" v-for="beer in beersR" :key="beer.id">
          <tile :beer="beer"></tile>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tile from '../components/Tile.vue';

export default {
  name: 'Home',
  props: {
    msg: String,
  },
  data() {
    return {
      beersRandom: '',
      beersR: [],
      ginSite:
        'Perhaps this is more up your street <a href="https://brightongin.com/"target="_blank">Brighton Gin</a>',
    };
  },
  components: {
    tile,
  },
  methods: {
    randomBeer() {
      fetch('https://api.punkapi.com/v2/beers/random', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.beersR = json;
        });
    },
  },
};
</script>

<style lang="postcss">
.home {
  background-color: rgba(189, 190, 190, 0.432);
  margin: 50px 100px 150px 100px;
  border: solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  margin-bottom: 100px;
}

img {
  width: 80px;
  height: auto;
}

select {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  margin: 10px;
  height: 50px;
  width: 200px;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
}

p1 {
  font-size: 100px;
}

button {
  font-family: "Roboto Slab", serif;
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

.hide {
  display: none;
}

.myDIV:hover + .hide {
  display: block;
  color: black;
}
.get.beer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
}
</style>
