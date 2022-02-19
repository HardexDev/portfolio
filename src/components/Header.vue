<template>
  <div class="Header">
    <img src="/assets/logo.png" alt="">
    <h1>ALEXIS | CS STUDENT</h1>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss" scoped>
    $header_background: rgb(166, 168, 135);

    .Header {
        height: 7vh;
        background-color: transparent;
        position: absolute;
        width: 100%;
        z-index: 1;
        display: flex;
        align-items: center;

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