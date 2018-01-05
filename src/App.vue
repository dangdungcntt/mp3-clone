<template>
  <div id="app">
    <layout-header></layout-header>
    <layout-nav></layout-nav>
    <div class="wrapper-page">
      <router-view/>
    </div>
    <layout-footer></layout-footer>
  </div>
</template>

<script>

  import LayoutHeader from "Components/layout/header";
  import LayoutNav from "Components/layout/nav";
  import LayoutFooter from "Components/layout/footer";

  export default {
    name: 'app',
    components: {
      LayoutFooter,
      LayoutNav,
      LayoutHeader
    }
  }
</script>

<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
