<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/selectbeer">Select Beer</router-link></li>
      <li><router-link to="/allbeer">Full Beer List</router-link></li>
      <li><router-link to="/information">Information</router-link></li>
    </ul>
    <router-view />
    <footer>Built by Paul &#127866;</footer>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap");

body {
  background-color: white;
  margin: 0;
}

ul {
  display: flex;
  align-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 50px;
  overflow: hidden;
  background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgb(0, 0, 0));
}

li {
  float: left;
}

li a,
.dropbtn {
  display: inline-block;
  color: black;
  font-size: 20px;
  text-align: center;
  padding: 12px 20px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
  color: white;
  background-color: black;
}

li.dropdown {
  display: inline-block;
}

#app {
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

footer {
  background-image: linear-gradient(to left, rgba(255, 0, 0, 0), rgb(0, 0, 0));
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: white;
  padding-left: 10px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
