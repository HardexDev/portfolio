<div class="Home">
    <Welcome />
    <Presentation />
    <Projects />
    <img class={scrollPosition > 50 ? 'show scroll-top' : 'scroll-top'} src="/go-top.png" alt="" on:click={() => goTop()}>
</div>


<script>
	import { onMount } from "svelte";
    import Presentation from "../components/sections/Presentation.svelte";
    import Projects from "../components/sections/Projects.svelte";
    import Welcome from "../components/sections/Welcome.svelte";

    let scrollPosition = 0;

    onMount(() => {
      window.scroll({top: 0});
      window.addEventListener('scroll', updateScroll);
    })

    const updateScroll = () => {
      scrollPosition = window.scrollY;
    }

    const goTop = () => {
      window.scroll({top: 0, behavior: 'smooth'});
    }
</script>

<style lang="scss" global>

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Verdana, sans-serif;
    }

    .Home {
    position: relative;

    .scroll-top {
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