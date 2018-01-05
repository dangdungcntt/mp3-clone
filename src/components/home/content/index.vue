<template>
  <div class="wrap-content">
    <slide></slide>
    <category-by-time></category-by-time>
    <video-hot></video-hot>
    <album-hot></album-hot>
    <music-hot></music-hot>
    <singer-hot></singer-hot>
  </div>
</template>

<script>
  import Slide from 'Components/home/content/slide';
  import CategoryByTime from 'Components/home/content/category-by-time';
  import AlbumHot from 'Components/home/content/album-hot';
  import VideoHot from 'Components/home/content/video-hot';
  import MusicHot from 'Components/home/content/music-hot';
  import SingerHot from 'Components/home/content/singer-hot';

  export default {
    name: "home-content-index",
    components: {
      'slide': Slide,
      'category-by-time': CategoryByTime,
      'video-hot': VideoHot,
      'album-hot': AlbumHot,
      'music-hot': MusicHot,
      'singer-hot': SingerHot,
    }
  }
</script>

<style scoped>

</style>
