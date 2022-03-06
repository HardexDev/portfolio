<template>
  <div class="Home">
    <Welcome />
    <Presentation />
    <Projects />
    <img :class="{show: scrollPosition > 50}" src="/assets/go-top.png" alt="" @click="goTop">
  </div>
</template>

<script lang="ts">
import Welcome from "./sections/Welcome.vue";
import Presentation from "./sections/Presentation.vue";
import Projects from "./sections/Projects.vue";
import { Ref, ref } from '@vue/reactivity';
import { onMounted } from 'vue';

export default {
  components: {Welcome, Presentation, Projects},
  setup() {
    const scrollPosition: Ref<number> = ref(0);

    onMounted(() => {
      window.addEventListener('scroll', updateScroll);
    });

    const updateScroll = (): void => {
      scrollPosition.value = window.scrollY;
    }

    const goTop = (): void => {
      window.scroll({top: 0, behavior: 'smooth'});
    }

    return {
      scrollPosition,
      goTop
    }
  }
}
</script>

<style lang="scss" scoped>
  .Home {
    position: relative;

    img {
      position: fixed;
      cursor: pointer;
      visibility: hidden;
      opacity: 0;
      top: 90%;
      left: 90%;
      transition: all .2s ease;

      width: 50px;

      &.show {
        visibility: visible;
        opacity: 1;

        @media(max-width: 1100px) {
          visibility: hidden;
        }
      }
    }
  }
</style>
