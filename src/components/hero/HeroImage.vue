<template>
    <div class="col-10 col-sm-7 col-lg-7 mx-auto">
        <lottie class="d-block mx-lg-auto img-fluid" :options="defaultOptions" :height="600" :width="600"/>
    </div>
</template>
<script>
import Lottie from "vue-lottie";

export default {
    props: ["alt"],
    data: () => {
        return {
            defaultOptions: {
                loop: true,
                autoplay: true,
                animationData: require("@/assets/lotties/profile-lottie.json"),
            },
        };
    },
    components: {
        Lottie,
    },
};
</script>
<style></style>
