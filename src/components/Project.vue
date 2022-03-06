<template>
    <div class="Project">
        <div :class="showSection ? 'card-header open' : 'card-header'" @click="toggleSection">
            <img :src="'/assets/' + data.imageUrl" alt="">
            <p>{{ data.title }} - {{ data.language }}</p>
            <img :class="showSection ? 'up-arrow' : 'down-arrow'" :src="showSection ? '/assets/up-chevron-white.png' : '/assets/down-chevron-white.png'" alt="">
        </div>

        <div class="card-content" v-show="showSection">
            <p class="title bold">{{ data.title }}</p>
            <p class="summary" v-html="data.summary"></p>
            <div class="data">
                <p><span>Proramming Language : </span> {{ data.language }}</p>
                <p><span>Frameworks/Tools : </span> {{ data.frameworks }}</p>
                <p><span>Software : </span>{{ data.software }}</p>
                <p><span>Team : </span>{{ data.team }}</p>
                <p><span>Year : </span>{{ data.year }}</p>
            </div>
            <button v-if="!isGithubLinkEmpty" @click="redirect"><img src="/assets/github.png" alt="">See on GitHub</button>
            <h3 v-else>Code not available</h3>
            
        </div>
    </div>
</template>

<script lang="ts">
import { computed, Ref, ref } from '@vue/reactivity'
export default {
    setup(props) {
        const showSection: Ref<boolean> = ref(false);

        const toggleSection = () => {
            showSection.value = !showSection.value;
            console.log(showSection.value);
        }

        const redirect = () => {
            window.open(props.data?.githubLink, '_blank');
        }

        const isGithubLinkEmpty = computed(() => {
            console.log(props.data?.githubLink);
            return props.data?.githubLink === "";
        });

        return {
            showSection,
            toggleSection,
            redirect,
            isGithubLinkEmpty
        }
    },
    props: {
        data: Object
    }
}
</script>

<style lang="scss">
    @use "../styles/variables";

    .Project {
        width: 500px;
        
        @media(max-width: 1610px) {
            width: 100%;
        }

        .card-header {
            background-color: variables.$main_background_color;
            width: 100%;
            height: 5vh;
            display: flex;
            align-items: center;
            position: relative;
            border-radius: 12.5px;

            &.open {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            cursor: pointer;

            &:hover {
                p {
                    color: #fff;
                }
            }

            img {
                width: 30px;
                border-radius: 6.25px;
                margin-left: 10px;
            }

            p {
                color: #FFFFFF99;
                margin-left: 20px;
                transition: all .3s ease;

                @media(max-width: 700px) {
                    font-size: 13px;
                }
            }

            .up-arrow, .down-arrow {
                position: absolute;
                right: 10px;
                width: 20px;
                cursor: pointer;
            }

            .up-arrow {
                top: 20%;
            }

            .down-arrow {
                top: 35%;
            }
        }

        .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px;
            border-bottom-right-radius: 12.5px;
            border-bottom-left-radius: 12.5px;

            background-color: variables.$main_background_color;
            
            span {
                font-weight: bold;
            }

            p {
                color: variables.$grey_text;
                text-align: justify;

                @media(max-width: 700px) {
                    font-size: 15px;
                }
                
                &.bold {
                    font-weight: bold;
                }

                &.title {
                    margin-bottom: 20px;
                }

                &.summary {
                    margin-bottom: 20px;
                }

                a {
                        color: variables.$green;
                        text-decoration: none;
                }
            }

            .data {
                width: 100%;
                margin-bottom: 10px;
            }

            button {
                background-color: variables.$project_section;
                border: none;
                padding: 12px;
                border-radius: 25px;
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;

                cursor: pointer;

                img {
                    width: 25px;
                    margin-right: 10px;
                }
            }

            h3 {
                color: #fff;
                font-size: 15px;
            }
            
        }
    }
</style>