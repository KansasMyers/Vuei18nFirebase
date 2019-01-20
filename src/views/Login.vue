<template>
  <div class="login">
    <h3>Login</h3>
    <input v-model="email" type="email" placeholder="Email">
    <br>
    <input v-model="password" type="password" placeholder="Senha">
    <br>
    <button @click="login">Logar</button>
    <p>
      <router-link to="signup">Não possui um cadastro?</router-link>
    </p>
  </div>
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