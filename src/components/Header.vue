<template>
  <div class="Header" v-bind:class="{change_color: scrollPosition > 50}">
    <img src="/assets/logo.png" alt="">
    <h1>ALEXIS | CS STUDENT</h1>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Ref } from 'vue';
import { onMounted } from 'vue';

export default {
  setup() {
    const scrollPosition: Ref<number> = ref(0);

    onMounted(() => {
      window.addEventListener('scroll', updateScroll);
    });

    const updateScroll = (): void => {
      scrollPosition.value = window.scrollY;
    }

    return {
      scrollPosition
    }
  }

}
</script>

<style lang="scss" scoped>
    @use "../styles/variables";

    .Header {
        height: 7vh;
        background-color: transparent;
        position: absolute;
        position: fixed;
        width: 100%;
        z-index: 2;
        display: flex;
        align-items: center;
        transition: all .2s ease;

        &.change_color {
          background-color: variables.$main_background_color;
        }

        img {
          width: 60px;
          margin-left: 20px;
        }

        h1 {
          color: #FFF;
          font-family: Verdana, sans-serif;
          margin-left: 25px;
          font-weight: 100;
          letter-spacing: 2px;
          font-size: 20px;
        }
    }
</style>