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
  components: 
  {
    Header,
    Nav,
    Footer
  }
}
</script>

<style>

</style>
