<template>
  <div class="songs">
    <SongCarousel />
  </div>
</template>
<script>
import SongCarousel from "@/components/SongCarousel.vue";
  export default {
    name: 'songs-page',
    components: {
      SongCarousel
    }
  }
</script>
<style lang="scss">
.songs {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>