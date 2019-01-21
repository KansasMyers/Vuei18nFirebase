<template lang='pug'>
  div.login
    h3 {{ $t("login.title") }}
    input(v-model="email" type="email" :placeholder="$t('login.placeEmail')")
    br
    input(v-model="password" type="password" :placeholder="$t('login.placePass')")
    br
    button(@click="login") {{ $t("login.btnLogin") }}
    p
      router-link(to="signup") {{ $t("login.message") }}?
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      let vm = this;
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function () {
          vm.$router.push('home')
        },
        function (err) {
          alert('Error -> ' + err.message)
        }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
$main: #42b983;

.login {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  padding: 15px;
  width: 20%;

  &:focus {
    border-color: $main;
  }
}

button {
  margin-top: 20px;
  padding: 20px;
  width: 15%;
  cursor: pointer;

  background-color: $main;
  border: 0;
  border-radius: 15px;
}

p {
  margin-top: 40px;
  font-size: 13px;
}
</style>