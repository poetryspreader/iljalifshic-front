<template>
  <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="3"
      :coverflowEffect="{
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: false,
    }"
      :pagination="false"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide
        v-for="(song) in songs"
        :key="song.title">
      <SongCard
          :song="song"
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
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
.carousel-wrapper {
  position: relative;
  display: flex;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  overflow-x: hidden;
}

.control-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: inherit;
  opacity: 0.2;
  width: 50px;
  z-index: 5;
  &__icon {
    transform: scale(1.5);
  }
}

.prev {
  position: absolute;
  left: 0;
}

.next {
  position: absolute;
  right: 0;
}
</style>