<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getBeers">Get Beers</button>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  props: {
    msg: String,
  },
  methods: {
    getBeers() {
      fetch('https://api.punkapi.com/v2/beers', {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  background-color: purple;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
