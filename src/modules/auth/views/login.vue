<template>
  <div class="auth">
    <h1 class="auth__title">Hi, Welcome Back!</h1>
    <div class="auth__body">
      <input_custom type="text" icon="mail" placeholder="Your email" v-model="email"></input_custom>
      <input_custom type="password" icon="lock" placeholder="Password" v-model="password"></input_custom>
      <div class="group full-width text--small">
        <label for="chb_remember" class="checkbox">
          <input type="checkbox" class="input__checkbox">
          Remember Me
        </label>
        <a href="#" class="link">Forgot password?</a>
      </div>
      <button @keyup.enter="handleLogin" @click="handleLogin" class="btn btn--primary full-width">Login</button>
      <div class="text--small text--gray">
        Or login with 
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
      <p class="text--small text--gray">Don't have an account? <router-link to="/register" class="link">Create a Free
          Account</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import InputCustom from "@/components/InputCustom";
import api from "@/plugins/api"
import cookie from "@/plugins/cookies"
import router from "@/router";
import store from "@/store";
import { mapActions } from "vuex";
export default {
  name: 'Login',
  components: {
    input_custom: InputCustom,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleLogin() {
      let payload = {
        email: this.email,
        password: this.password,
        timezone: new Date(),
      }

      store.dispatch('auth/login', payload)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>