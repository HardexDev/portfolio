<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import Home from "./views/Home.vue"

export default {
  components: {Home},
}

</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, sans-serif;
  }
</style>
