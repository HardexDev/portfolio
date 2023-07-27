<script>
    // state
    let showSection = false;
    
    // props
    export let data;

    // methods
    const toggleSection = () => {
        showSection = !showSection;
    }

    const redirect = () => {
        window.open(data?.githubLink, '_blank');
    }

    const isGithubLinkEmpty = data?.githubLink === "";
</script>

<div class="Project">
    <div class={showSection ? 'card-header open' : 'card-header'} on:click={() => toggleSection()}>
        <img src={data.imageUrl} alt="">
        <p>{data.title} - {data.language}</p>
        <img class={showSection ? 'up-arrow' : 'down-arrow'} src={showSection ? 'up-chevron-white.png' : 'down-chevron-white.png'} alt="">
    </div>

    {#if showSection}
        <div class="card-content">
            <p class="title bold">{ data.title }</p>
            <p class="summary">{data.summary}</p>
            <div class="data">
                <p><span>Proramming Language : </span> { data.language }</p>
                <p><span>Frameworks/Tools : </span> { data.frameworks }</p>
                <p><span>Software : </span>{ data.software }</p>
                <p><span>Team : </span>{ data.team }</p>
                <p><span>Year : </span>{ data.year }</p>
            </div>
            {#if !isGithubLinkEmpty}
                <button on:click={() => redirect()}><img src="github.png" alt="">See on GitHub</button>
            {:else}
                <h3>Code not available</h3>
            {/if}
        </div>
    {/if}
    
</div>

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