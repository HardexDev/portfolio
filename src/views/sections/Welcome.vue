<template>
  <div class="Welcome">
      <Header />
      <div class="main-bg">
          <div class="title">
              <typewriter
                :replace="replace"
                :type-interval="100"
                :replace-interval="1000"
              >
                <h1>ALEXIS ROBIN</h1>
            </typewriter> 
          </div>
      </div>
      <img src="/assets/down-chevron.png" alt="">
  </div>
</template>

<script lang="ts">
import Typewriter from 'typewriter-vue/src/components/Typewriter.vue';
import Header from "../../components/Header.vue";

export default {
    components: {Header, Typewriter},
    data: () => ({
        replace: [
            {from: "ALEXIS ROBIN", to: "CS STUDENT"},
            {from: "CS STUDENT", to: "ALEXIS ROBIN"}
        ]
    })
}
</script>

<style lang="scss" scoped>
    $green: #15C58D;

    .Welcome {
        height: 100vh;
        position: relative;

        img {
            width: 50px;
            cursor: pointer;
            position: absolute;
            z-index: 1;
            top: 70%;
            left: 50%;

            
            &:hover {
                animation: bump 1s linear infinite;
            }
        }

        .main-bg {
            height: 100vh;
            background-image: url("/assets/workspace.jpg");
            background-size: 100%;
            display: flex;
            align-items: center;

            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100vh;
                backdrop-filter: blur(15px);
            }

            .title {
                width: 100%;
                z-index: 700;
                display: flex;
                align-items: center;
                flex-direction: column;

                h1 {
                    color: $green;
                    font-weight: 100;
                    font-size: 100px;
                }
            }
        }

    }

    // animations
    @keyframes bump {
        0% {
            top: 70%;
        }
        50% {
            top: 68%;
        }
        100% {
            top: 70%;
        }
    }
</style>
