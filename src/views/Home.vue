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
      <button @click="randomBeer">Get Beers</button>
      <div class="tile" v-for="beerbeer in beersR" :key="beerbeer.id">
        <h1>{{ beerbeer.name }}</h1>
        <img :src="beerbeer.image_url" />
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

<style lang="postcss" scoped>
img {
  width: 50%;
  height: auto;
}
p {
  font-size: 14px;
  font-style: italic;
}
.get beer {
  border: solid black;
  border-radius: 25px;
  background-color: #f2de77;
  width: 215px;
  height: auto;
  color: black;
  align-content: center;
  text-align: center;
  font-size: 10px;
  padding: 20px;
  margin: 5px;
}
.tile {
  border: solid black;
  border-radius: 25px;
  background-color: #f2de77;
  width: 215px;
  height: auto;
  color: black;
  text-align: center;
  font-size: 10px;
}
.selector {
  margin-top: 50px;
}
select {
  margin: 10px;
}
</style>
