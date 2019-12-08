<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <router-link exact-active-class="active" class="navbar-item" to="/">
        <i class="fas fa-home fa-pull-left"></i>
        Home
      </router-link>

      <a
        @click.prevent="isOpen = !isOpen"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
      <div class="navbar-start">
        <router-link exact-active-class="active" class="navbar-item" to="/profile" v-if="signedIn">
          <i class="fas fa-user-tie fa-pull-left"></i>
          Profile
        </router-link>
        <router-link exact-active-class="active" class="navbar-item" to="/login" v-else>
          <i class="fas fa-user-tie fa-pull-left"></i>
          Profile
        </router-link>
        <router-link exact-active-class="active" class="navbar-item" to="/about">
          <i class="fas fa-question-circle fa-pull-left"></i>
          About
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href = "./signup" class="button is-danger">
              <strong>Sign up</strong>
            </a>
            <a href = "./login" class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style>
.active {
  background-color: red;
  color:black;
  font-weight: bold;
}
.kind-of-active {
  background-color: darkred;
  font-weight: 100;
}
</style>