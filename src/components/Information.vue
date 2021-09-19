<template>
  <div class="information">
    <div class="icon">&#127866; </div>
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

<style lang="postcss">

.information {
  background-color: rgba(189, 190, 190, 0.432);
  margin: 50px 100px 150px 100px;
  border: solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.icon {
 font-size: 250px;
}
</style>
