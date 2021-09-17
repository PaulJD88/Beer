<template>
  <div id="app">
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/beers">Beer List</router-link></li>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');

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

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
