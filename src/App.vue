<template lang='pug'>
  div#app
    img(alt="Vue logo" src="./assets/logo.png")
    router-view
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  text-decoration: none;
  cursor: pointer;
}

a:link {
  color: blue;
}

a:visited {
  color: blue;
}

a:hover {
  color: blue;
}

a:active {
  color: blue;
}
</style>
