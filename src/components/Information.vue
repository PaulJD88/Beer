<template>
  <div class="information">
    <h1>This is an information page</h1>
    <p v-html="beerSites"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beerSites:
        'Links to some beer related stuff <a href="https://www.harveys.org.uk/"target="_blank">Harveys Brewery</a>',
    };
  },
};
</script>
