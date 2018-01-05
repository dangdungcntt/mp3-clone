<template>
  <div class="wrap-sidebar">
    <topic-hot></topic-hot>
    <chart-song></chart-song>
    <chart-video></chart-video>
    <chart-album></chart-album>
  </div>
</template>

<script>
  import TopicHot from "Components/home/slidebar/topic-hot";
  import ChartSong from "Components/home/slidebar/chart-song";
  import ChartVideo from "Components/home/slidebar/chart-video";
  import ChartAlbum from "Components/home/slidebar/chart-album";

  export default {
    name: "home-slidebar-index",
    components: {
      ChartAlbum,
      ChartVideo,
      ChartSong,
      TopicHot
    }
  }
</script>

<style scoped>

</style>
