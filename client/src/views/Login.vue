<template>
  <div class ="column is-one-third is-offset-one-third">
    <ul class="panel">
      <p class="panel-heading">Login</p>
      <div class="field is-grouped is-grouped-centered">
        <form @submit.prevent="login" style="padding: 1em;">

        <div class="field">
          <div class="control has-icons-left">
            <input v-model="username" style="width:20em;" class="input" type="username" placeholder="Username" />
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          </div>
        </div>

        <div class="field">
          <div class="control has-icons-left">
            <input v-model="password" style="width:20em;" class="input" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          </div>
        </div>
        
        <div class="field is-grouped is-grouped-centered">
          <div class="control">
            <div class="control">
              <button id = "submit" class="button is-link" type="submit">Submit</button>
            </div>
          </div>
        
          <div class="control">
            <a href="./" class="button is-link is-light">Cancel</a>
          </div>
        </div>

      </form>
      <p class="help is-danger">{{ error }}</p>
    </div>
    </ul>
  </div>
</template>

<script>
import { Profile_Server } from '../models/Profile'

export default {
  data: () => ({
    username: "",
    password: "",
    error: ""
  }),
  methods: {
    login() {
      Profile_Server.Login(this.username, this.password);
    }
  }
};
</script>

<style>
</style>