<script>
    import Header from "../Header.svelte";
    import {concurrent} from "svelte-typewriter";

    const scrollTo = (element) => {
        document.querySelector(element)?.scrollIntoView({behavior: "smooth"});
    }

</script>


<div class="Welcome" id="welcome">
    <Header />
    <div class="main-bg">
        <div class="title">
              <h1 use:concurrent={{ interval: 120, keepCursorOnFinish: true, cursor: true }}>ALEXIS ROBIN | CS STUDENT</h1>
        </div>
    </div>
    <img src="down-chevron.png" on:click={() => scrollTo('#presentation')} alt="">
</div>

<style lang="scss" scoped>
    @use "../../styles/variables";

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

            @media(max-width: 1100px) {
                width: 30px;
                left: 48%;
            }

            
            &:hover {
                animation: bump 1s linear infinite;
            }
        }

        .main-bg {
            height: 100vh;
            width: 100%;
            height: 100%;
            background-image: url("workspace.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
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
                z-index: 1;
                display: flex;
                align-items: center;
                flex-direction: column;

                h1 {
                    color: variables.$green;
                    font-weight: 100;
                    font-size: 100px;

                    @media(max-width: 1100px) {
                        font-size: 50px;
                    }

                    @media(max-width: 400px) {
                        font-size: 40px;
                    }
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
