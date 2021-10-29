<template>
  <div class="container">
    <div class="form">
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label><br />
        <input id="name" type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label><br />
        <input id="email" type="email" v-model="email" required />
      </div>
      <div>
        <label for="caps">Let us know how the site can be improved below:</label><br />
        <textarea id="caps" v-model="caps" required></textarea>
      </div>
      <button :class="[name ? activeClass : '']" type="submit">Submit</button>
    </form>
    </div>
    <p v-html="beerSites"></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      caps: '',
      response: '',
      activeClass: 'active',
      beerSites:
        'Links to some beer related stuff <a href="https://www.harveys.org.uk/"target="_blank">Harveys Brewery</a>',
    };
  },
};
</script>

<style lang="postcss" scoped>

form {
  font-size: 25px;
  padding: 15px;
}

textarea {
  margin: 10px;
  width: 250px;
}

input {
  height: 25px;
  width: 225px;
  margin: 8px;
}

.icon {
  font-size: 250px;
}
</style>
