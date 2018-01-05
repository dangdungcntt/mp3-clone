<template>
  <div class="wrap-body container">
    <home-content-index></home-content-index>
    <home-slidebar-index></home-slidebar-index>
    <div class="clearfix"></div>
    <home-partner-box></home-partner-box>
    <div class="clearfix"></div>
  </div>
</template>

<script>
  import HomeContentIndex from "Components/home/content/index";
  import HomeSlidebarIndex from "Components/home/slidebar/index";
  import HomePartnerBox from "Components/home/partner-box";

  export default {
    name: "home-index",
    components: {
      HomePartnerBox,
      HomeSlidebarIndex,
      HomeContentIndex,
    }
  }
</script>

<style scoped>

</style>
