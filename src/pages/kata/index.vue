<template>
  <div v-for="index in 2" class="line">
    <div v-for="index in 5" class="line__horizontal-stick"></div>
  </div>
</template>

<style lang="scss">
.line {
  height: 50px;
  margin-bottom: 20px;
  &__horizontal-stick {
    margin-bottom: 8px;
    width: 100%;
    height: 2px;
    background-color: white;
    opacity: 0.5;
  }
}

</style>
<script>
export default {
  data() {
    return {
      numberOfTacts: 4
    }
  }
}


</script>

