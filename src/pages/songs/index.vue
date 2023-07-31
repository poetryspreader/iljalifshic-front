<template>
  <div class="songs">
    <div class="songs__title">
      Playlist:
    </div>
    <SongCards />
  </div>
</template>
<script>
import SongCards from "@/components/SongCarousel.vue";
  export default {
    name: 'songs-page',
    components: {
      SongCards
    }
  }
</script>
<style lang="scss">
.songs {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__title {
    align-self: start;
    font-size: 40px;
  }
}
</style>