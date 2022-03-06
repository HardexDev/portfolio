<template>
    <div class="Projects" id="projects">
        <h1>My Projects</h1>
        <div class="projects-container">
           <div class="school-projects flex">
               <h3>School projects</h3>
               <Project v-for="project in schoolProjects" :key="project.title"
                    :data="{
                        title: project.title,
                        imageUrl: project.imageUrl,
                        summary: project.summary,
                        language: project.language,
                        frameworks: project.frameworks,
                        software: project.software,
                        team: project.team,
                        year: project.year,
                        githubLink: project.githubLink,
                    }" 
                />
           </div>
           <div class="personal-projects flex">
               <h3>Personal projects</h3>
                <Project v-for="project in personalProjects" :key="project.title"
                    :data="{
                        title: project.title,
                        imageUrl: project.imageUrl,
                        summary: project.summary,
                        language: project.language,
                        frameworks: project.frameworks,
                        software: project.software,
                        team: project.team,
                        year: project.year,
                        githubLink: project.githubLink,
                    }" 
                />
           </div>
           <div class="professional-project flex">
               <h3>Professional projects</h3>
               <Project v-for="project in professionalProjects" :key="project.title"
                    :data="{
                        title: project.title,
                        imageUrl: project.imageUrl,
                        summary: project.summary,
                        language: project.language,
                        frameworks: project.frameworks,
                        software: project.software,
                        team: project.team,
                        year: project.year,
                        githubLink: project.githubLink,
                    }" 
                />
           </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import Project from "../../components/Project.vue"
import projectsData from "../../projects.json";

export default {
    components: {Project},
    data() {
        return {
            schoolProjects: projectsData[0],
            personalProjects: projectsData[1],
            professionalProjects: projectsData[2]
        }
    }
}
</script>

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