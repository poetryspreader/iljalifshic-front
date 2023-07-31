<template>
  <div class="song-card">
    <div class="song-card__title">{{ song.title }}</div>
    <div class="song-card__artist">Artist: {{ song.artist }}</div>
    <img
        v-if="song.image"
        class="song-card__image"
        :src="'src/images/songs/' + song.image"
        alt="photo">
    <audio
        ref="audioPlayer"
        :src="'src/assets/songs/' + song.song"
        @timeupdate="updateCurrentTime"
    />
    <div class="progress">
      <div
          class="progress-bar"
          :style="{ width: progressWidth }"
      >
      </div>
    </div>
    <div class="controls">
      <font-awesome-icon
          v-if="!isPlaying"
          class="play-pause-btn"
          @click="playPause"
          icon="fa-solid fa-play"
      />
      <font-awesome-icon
          v-else
          class="play-pause-btn"
          @click="playPause"
          icon="fa-solid fa-pause"
      />
      <div class="current-time">{{ currentTime }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isPlaying: false,
      currentTime: '0:00',
      duration: 0,
      progressWidth: '0%',
    }
  },
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  methods: {
    playPause() {
      const audio = this.$refs.audioPlayer;
      this.isPlaying ? audio.pause() : audio.play();
      this.isPlaying = !this.isPlaying;
    },
    updateCurrentTime(event) {
      const audio = event.target;

      this.currentTime = `${
        Math.floor(audio.currentTime / 60)
      }:${
        Math.floor(audio.currentTime % 60).toString().padStart(2, '0')
      }`;

      this.progressWidth = `${(audio.currentTime / audio.duration) * 100}%`;
    },
  }
}
</script>
<style lang="scss">
.song-card {
  cursor: pointer;
  margin: 10px;
  //width: 400px;
  background-color: black;
  padding: 20px;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out;;
  &:hover {
    transform: scale(1.025);
  }
  &__title {
    font-size: 2rem;
    line-height: 1;
    font-weight: bold;
  }
  &__image {
    margin-top: 10px;
    width: 100%;
  }
}
.progress {
  border-radius: 15px;
  background-color: #f0f0f0;
  height: 5px;
  margin-top: 10px;
  width: 100%;
  opacity: 0.8;
  &-bar {
    border-radius: inherit;
    background-color: #00BD7EFF;
    height: 100%;
  }
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.play-pause-btn {
  color: white;
  opacity: 0.6;
}
</style>