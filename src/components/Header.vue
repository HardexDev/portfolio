<template>
  <div class="Header" v-bind:class="{change_color: scrollPosition > 50}">
    <div class="left">
      <a href="" @click="(e) => {e.preventDefault(); scrollTo('#welcome')}"><img src="/assets/logo.png" alt=""></a>
      <h1>ALEXIS | CS STUDENT</h1>
    </div>
    <div class="links">
      <a href="" @click="(e) => {e.preventDefault(); scrollTo('#presentation')}">Presentation</a>
      <a href="" @click="(e) => {e.preventDefault(); scrollTo('#projects')}">Projects</a>
    </div>
    
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

    const scrollTo = (element: string) => {
      document.querySelector(element)?.scrollIntoView({behavior: "smooth"});
    }

    return {
      scrollPosition,
      scrollTo
    }
  }

}
</script>

<style lang="scss" scoped>
    @use "../styles/variables";

    .Header {
        min-height: 7vh;
        background-color: transparent;
        position: absolute;
        position: fixed;
        width: 100%;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all .2s ease;

        .left {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .links {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 50px;

          @media(max-width: 400px) {
            margin-right: 5px;
          }

          a {
            color: #FFF;
            margin-right: 25px;
            text-decoration: none;
          }
        }


        &.change_color {
          background-color: variables.$main_background_color;
        }

        img {
          width: 60px;
          margin-left: 20px;

          @media(max-width: 400px) {
              width: 40px;
          }
        }

        h1 {
          color: #FFF;
          font-family: Verdana, sans-serif;
          margin-left: 25px;
          font-weight: 100;
          letter-spacing: 2px;
          font-size: 20px;
          
          @media(max-width: 700px) {
            display: none;
          }
        }
    }
</style>