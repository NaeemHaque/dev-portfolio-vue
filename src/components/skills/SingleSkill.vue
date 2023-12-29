<template>
    <div class="col-sm-12 col-md-4 mb-5">
        <div class="text-center">
            <img
                class="mb-3"
                :src="require(`@/assets/images/${skill.image}`)"
                data-aos="fade-up"
                :data-aos-delay="delay"
                data-aos-anchor-placement="top-bottom"
            />
            <h4
                class="mb-3"
                data-aos="fade-up"
                :data-aos-delay="delay + 100"
                data-aos-anchor-placement="top-bottom"
            >
                {{ skill.title }}
            </h4>
            <div
                class="tags mb-3 has-text-weight-semibold"
                data-aos="fade-up"
                :data-aos-delay="delay + 200"
                data-aos-anchor-placement="top-bottom"
            >
        <span
            v-for="language in skill.languages"
            :key="language.id"
            class="tag"
            :class="language.css"
        >
          {{ language.title }}
        </span>
            </div>
            <div>
                {{ skill.description }}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SingleSkill",
    props: ["skill"],
    data: () => {
        return {
            delay: 500,
        };
    },
};
</script>
<style scoped>
img {
    width: 128px;
    height: 128px;
}

.tags .tag:not(:last-child) {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

.tag:not(body) {
    align-items: center;
    background-color: #f5f5f5;
    color: #4a4a4a;
    display: inline-flex;
    font-size: 0.75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
}

span {
    -webkit-transition: 0.1s ease-in;
    -o-transition: 0.1s ease-in;
    transition: 0.1s ease-in;
}

span:hover {
    -webkit-transform: translate3d(0px, -5px, 0px);
    transform: translate3d(0px, -5px, 0px);
}

.vuejs {
    color: #fff !important;
    background-color: #4fc08d !important;
}

.bootstrap:hover {
    color: #fff;
    background-color: #7952b3;
}

.typescript:hover {
    color: #fff;
    background-color: #3178c6;
}

.docker {
    color: #fff !important;
    background-color: #2496ed !important;
}

.js {
    color: #000 !important;
    background-color: #f7df1e !important;
}

.php {
    color: #fff !important;
    background-color: #777bb3 !important;
}

.laravel {
    color: #fff !important;
    background-color: #ff2d20 !important;
}

.mysql {
    color: #fff !important;
    background-color: #00758f !important;
}

.wordpress {
    color: #fff !important;
    background-color: #21759b !important;
}

.python {
    color: #fff !important;
    background: #4B8BBE !important;
}

.ml {
    color: #fff !important;
    background: #646464 !important;
}

.nlp {
    color: #000 !important;
    background: #FFD43B !important;
}

</style>
