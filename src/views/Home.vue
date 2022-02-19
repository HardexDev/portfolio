<template>
  <div class="Home">
    <Welcome />
    <Presentation />
  </div>
</template>

<script lang="ts">
import Welcome from "./sections/Welcome.vue";
import Presentation from "./sections/Presentation.vue";

export default {
  components: {Welcome, Presentation},
}
</script>

<style lang="scss" scoped>

</style>
