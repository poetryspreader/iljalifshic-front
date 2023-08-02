<template>
  <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="3"
      :slideToClickedSlide="true"
      :loop="true"
      :spaceBetween="40"
      :coverflowEffect="{
      rotate: 10,
      stretch: 0,
      depth: 1,
      modifier: 3,
      slideShadows: false,
    }"
      :pagination="false"
      :modules="modules"
      class="swiper"
  >
    <swiper-slide
        v-for="(song) in songs"
        :key="song.title"
    >
      <SongCard
          :song="song"
          @play="playSong"
      />
    </swiper-slide>
  </swiper>
</template>
<script>
  import SongCard from './SongCard.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';
  export default {
    name: 'song-cards-vue',
    components: {
      SongCard, Swiper, SwiperSlide
    },
    data() {
      return {
        modules: [EffectCoverflow, Pagination],
        songs: [
          {
            title: 'Solitude',
            artist: 'M87',
            song: 'M83-Solitude.mp3',
            image: 'M83-Solitude.jpg'
          },
          {
            title: 'MOUNT',
            artist: 'The Blaze',
            song: 'TheBlaze-Mount.mp3',
            image: 'TheBlaze-Mount.png'
          },
          {
            title: 'Пустота',
            artist: 'GONE.Fludd',
            song: 'GoneFludd-Пустота.mp3',
            image: 'GoneFludd-Пустота.jpg'
          },
          {
            title: 'Пустота',
            artist: 'GONE.Fludd',
            song: 'GoneFludd-Пустота.mp3',
            image: 'GoneFludd-Пустота.jpg'
          },
          {
            title: 'Пустота',
            artist: 'GONE.Fludd',
            song: 'GoneFludd-Пустота.mp3',
            image: 'GoneFludd-Пустота.jpg'
          },
          {
            title: 'MOUNT',
            artist: 'The Blaze',
            song: 'TheBlaze-Mount.mp3',
            image: 'TheBlaze-Mount.png'
          },
          {
            title: 'MOUNT',
            artist: 'The Blaze',
            song: 'TheBlaze-Mount.mp3',
            image: 'TheBlaze-Mount.png'
          }
        ],
        currentSong: null
      }
    },
    methods: {
      playSong(currentSong) {
        console.log(currentSong);
        if (this.currentSong !== null) {
          this.currentSong.pause();
        }
        this.currentSong = currentSong;
      },
    }
  }
</script>
<style lang="scss">
.swiper {
  margin-top: 30px;
  max-width: 1200px;
}
@media (max-width: 1300px) {
  .swiper {
    max-width: 1000px;
  }
}
</style>