<template>
    <!-- Menu -->
    <MenuVue :links="links">Naeem <span class="prim">Haque</span></MenuVue>
    <HeroSection id="hero" class="content">
        <template v-slot:welcome>Assalamu Alaikum!</template>
        My name is <span class="my-name">Golam Sarwer Naeem</span> and I am a passionate
        <span class="designation">Software Engineer</span>
        with a passion for programming.
        My curiosity and interest is building
        <hi-word>WordPress Plugins</hi-word>
        and
        <hi-word>Web Applications</hi-word>
        using modern frameworks. I'm a core contributor of
        <hi-word>WordPress.</hi-word>
        Also, I'm doing research in
        <hi-word>Machine Learning</hi-word>
        applied to neural language processing.
        <template v-slot:buttons>
            <simple-button
                class="btn-primary text-white"
                url="https://www.linkedin.com/in/naeem-haque-8626101a3/"
                icon="fab linkedin-in"
            >Hire me!
            </simple-button
            >
            <simple-button
                class="btn-outline-secondary"
                url="mailto:naeemhaque248@gmail.com"
                icon="fa-regular fa-file-lines"
            >Contact me
            </simple-button
            >
        </template>
    </HeroSection>
    <SkillsGrid id="skills" :skills="skills"/>
    <ExperienceTable id="edu-exp" :experience="experience"/>
    <AwardsGrid id="awards" :awards="awards"/>
    <ProjectsGrid id="projects" :projects="projects"/>
    <FooterVue :links="socials" :copyright="copyright"/>
</template>
<script>
import MenuVue from "@/components/shared/AppMenu.vue";
import FooterVue from "@/components/shared/AppFooter.vue";
import HeroSection from "@/components/hero/HeroSection.vue";
import SkillsGrid from "@/components/skills/SkillsGrid.vue";
import ExperienceTable from "@/components/experience/ExperienceTable.vue";
import AwardsGrid from "@/components/awards/AwardsGrid.vue";
import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";

// Data
import skills from "@/data/skills";
import experience from "@/data/experience";
import awards from "@/data/awards";
import projects from "@/data/projects";

import SimpleButton from "@/components/reusable/SimpleButton.vue";
import HiWord from "@/components/reusable/HighlightIt.vue";

export default {
    name: "HomeView",
    data: () => {
        return {
            delay: 100,
            links: [
                {
                    name: "Home",
                    url: "#hero",
                },
                {
                    name: "Skills",
                    url: "#skills",
                },
                {
                    name: "Experience",
                    url: "#edu-exp",
                },
                {
                    name: "Awards",
                    url: "#awards",
                },
                {
                    name: "Projects",
                    url: "#projects",
                },
            ],
            skills,
            experience,
            awards,
            projects,
            socials: [
                {
                    id: 1,
                    icon: "fab linkedin-in",
                    url: "https://www.linkedin.com/in/naeem-haque-8626101a3/",
                },
                {
                    id: 2,
                    icon: "fab github",
                    url: "https://github.com/naeemhaque",
                },
            ],
            copyright: "2022 Naeem Haque",
        };
    },
    components: {
        MenuVue,
        FooterVue,
        HeroSection,
        SkillsGrid,
        ExperienceTable,
        AwardsGrid,
        ProjectsGrid,
        SimpleButton,
        HiWord,
    },
};
</script>
<style lang="scss" scoped>
.prim {
    color: $primary;
}

.content {
    text-align: justify
}

.my-name {
    color: $primary;
    font-weight: bold;
    font-size: 22px;
}

.designation {
    color: $secondary;
    font-weight: bold;
}
</style>
