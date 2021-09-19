<template>
  <div class="home">
    <h1> A list of all available beer </h1>
    <button @click="everyBeer">Get Beers</button>
    <div class="flex-container">
      <div class="abeers" v-for="abeers in allBeers" :key="abeers.id">
        <div class="tile">
          <h1>{{ abeers.name }}</h1>
          <h2>"{{ abeers.tagline }}"</h2>
          <img :src="abeers.image_url" />
          <h3>{{ abeers.abv }}%</h3>
          <p>{{ abeers.description }}</p>
          <div class="myDIV">Hover Over For More Info</div>
          <div class="hide">
            <p>First Brewed: {{ abeers.first_brewed }}</p>
            <p>
              Good With:
              <br />
              &bull; {{ abeers.food_pairing[0] }}
              <br />
              &bull; {{ abeers.food_pairing[1] }}
              <br />
              &bull; {{ abeers.food_pairing[2] }}
            </p>
            <p>Brewers Tips: {{ abeers.brewers_tips }}</p>
          </div>
        </div>
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
      fetch('https://api.punkapi.com/v2/beers?page=4&per_page=80', {
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

// How to create pagination within page
//
