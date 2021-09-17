<template>
  <div class="home">
    <h1>Do you like Beer?</h1>

    <input v-model="beersRandom" value="yes" type="radio" id="yes" />
    <label for="no"> Yes I do!</label><br />

    <input v-model="beersRandom" value="no" type="radio" id="no" />
    <label for="no"> No I do not!</label><br />

    <p v-if="beersRandom === 'yes'">Yaaaaaaaaaaaay!</p>
    <p v-else-if="beersRandom === 'no'">Booo!</p>
    <br />
    <div class="get beer">
      <button @click="randomBeer">Random Beer</button>
      <div class="flex-container">
        <div class="tile" v-for="beerbeer in beersR" :key="beerbeer.id">
          <h1>{{ beerbeer.name }}</h1>
          <h2>"{{ beerbeer.tagline }}"</h2>
          <img :src="beerbeer.image_url" />
          <h3>{{ beerbeer.abv }}%</h3>
          <p>{{ beerbeer.description }}</p>
          <div class="myDIV">Hover Over For More Info</div>
          <div class="hide">
            <p>First Brewed: {{ beerbeer.first_brewed }}</p>
            <p>Good With: {{ beerbeer.food_pairing[(0, 1, 2)] }}</p>
            <p>Brewers Tips: {{ beerbeer.brewers_tips }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String,
  },
  data() {
    return {
      beersRandom: '',
      beersR: [],
    };
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

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  height: auto;
  margin-bottom: 100px;
}

img {
  width: 80px;
  height: auto;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
}

.tile {
  border: solid black;
  border-radius: 25px;
  background-image: radial-gradient(white, rgba(1, 1, 97, 0.719));
  width: 250px;
  height: auto;
  color: black;
  text-align: center;
  font-size: 10px;
  padding: 10px;
  margin: 5px;
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

/* Popup container - can be anything you want */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* The actual popup */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
