<template>
  <div class="home">
    <h1>Do you like Beer?</h1>

    <input v-model="beersRandom" value="yes" type="radio" id="yes" />
    <label for="no"> Yes I do!</label><br />

    <input v-model="beersRandom" value="no" type="radio" id="no" />
    <label for="no"> No I do not!</label><br />

    <p v-if="beersRandom === 'yes'">
      Yaaaaaaaaaaaay! {{ randomBeer.image_url }}
    </p>
    <p v-else-if="beersRandom === 'no'">Booo!</p>
    <br />
    <div class="get beer">
      <button @click="randomBeer">Get Beers</button>
      <h1>{{ randomBeer.id }}</h1>
      <img :src="randomBeer.image_url" />
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
      rBeer: 1,
      beersRandom: '',
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
          this.beersRandom = json;
          console.log(this.rBeer);
        });
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>
