<script>
    import projectsData from "../../projects.json"
    import Project from "../Project.svelte";

    let schoolProjects = projectsData[0];
    let personalProjects = projectsData[1];
    let professionalProjects = projectsData[2];
</script>

<div class="Projects" id="projects">
    <h1>My Projects</h1>
    <div class="projects-container">
       <div class="school-projects flex">
           <h3>School projects</h3>
           {#each schoolProjects as project (project.title)}
           <Project
           data={project}
            />
           {/each}
           
       </div>
       <div class="personal-projects flex">
           <h3>Personal projects</h3>
           {#each personalProjects as project (project.title) }
            <Project
                data={
                    project
                }
            />
           {/each}
            
       </div>
       <div class="professional-project flex">
           <h3>Professional projects</h3>
           {#each professionalProjects as project (project.title)}
           <Project
                data={
                    project
                }
            />
           {/each}
           
       </div>
    </div>
    
</div>

<style lang="scss" scoped>
    @use "../../styles/variables";

    .Projects {
        min-height: 100vh;
        padding-top: 10vh;
        background-color: variables.$project_section;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            color: variables.$green;
            margin-bottom: 50px;
        }

        .projects-container {
            display: flex;
            justify-content: space-around;
            gap: 40px;

            @media(max-width: 1610px) {
                flex-direction: column;
                width: 60%;
                max-width: 60%;
            }

            @media(max-width: 700px) {
                flex-direction: column;
                width: 90%;
                max-width: 90%;
            }

            margin-bottom: 25px;

            .flex {
                display: flex;
                flex-direction: column;
                gap: 10px;
                
                h3 {
                    color: variables.$grey_text;
                }
            }
        }
    }
</style>