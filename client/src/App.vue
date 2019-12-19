<template>
<div id = "container">
  <Header></Header>
  <Nav></Nav>
  <router-view></router-view>
  <Footer></Footer>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: "app",
  components: 
  {
    Header,
    Nav,
    Footer
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    singingIn: function(username) {
      this.loggedIn = true;
      this.username = username;
    },
    signingOut: function() {
      this.loggedIn = false;
      this.username = "";
      this.$router.replace({ path: "/" });
    }
  }
};
</script>

<style>
</style>