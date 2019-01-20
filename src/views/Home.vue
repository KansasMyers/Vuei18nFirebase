<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    logout () {
      let vm = this;
      firebase.auth().signOut().then(() => {
        vm.$router.push('login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-top: 20px;
  padding: 20px;
  width: 15%;
  cursor: pointer;

  border: 0;
  border-radius: 15px;
}
</style>
