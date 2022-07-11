<template>
  <div class="auth">
    <h1 class="auth__title">Register Account</h1>
    <div class="auth__body">
      <input_custom type="text" icon="user" placeholder="Full name" v-model="name"></input_custom>
      <input_custom type="text" icon="mail" placeholder="Your email" v-model="email"></input_custom>
      <input_custom type="password" icon="lock" placeholder="Password" v-model="password"></input_custom>
      <button @click="handleRegisterUser" class="btn btn--primary full-width">Create Free Account</button>
      <p class="text--small text--gray">By providing your email, you are agreeing to our <a href="#" class="link">terms
          of service.</a></p>
      <div class="text--small text--gray">
        Or register with
      </div>
      <div class="group full-width">
        <button class="btn btn--white full-width btn--text-small">
          <img src="../../../assets/image/gg.svg" alt="Google account">
          Google Account
        </button>
        <button class="btn btn--white full-width btn--text-small">
          <img src="../../../assets/image/fb.svg" alt="Facebook account">
          Facebook Account
        </button>
      </div>
      <p class="text--small text--gray">Already have an account? <router-link to="/login" class="link">Login Now
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import InputCustom from "@/components/InputCustom";
import api from "@/plugins/api";
import cookie from "@/plugins/cookies"
import router from "@/router";
import store from "@/store";

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async handleRegisterUser() {
      let payload = {
        email: this.email,
        password: this.password,
        timezone: new Date(),
        name: this.name,
      }

      store.dispatch('auth/register', payload);
    }
  },
  components: {
    input_custom: InputCustom,
  }
}
</script>

<style lang="scss" scoped>
</style>