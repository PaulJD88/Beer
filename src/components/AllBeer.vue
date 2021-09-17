<template>
  <div class="stuff">
  <button @click="everyBeer">Get Beers</button>
  <div class="flex-container">
  <div class="tile" v-for="abeers in allBeers" :key="abeers.id">
          <h1>{{ abeers.name }}</h1>
          <h2>"{{ abeers.tagline }}"</h2>
          <img :src="abeers.image_url" />
          <h3>{{ abeers.abv }}%</h3>
          <p>{{ abeers.description }}</p>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allBeers: [],

    };
  },
  methods: {
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
