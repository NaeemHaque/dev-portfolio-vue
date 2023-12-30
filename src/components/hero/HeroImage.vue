<template>
    <div class="col-10 col-sm-7 col-lg-7 mx-auto">
        <lottie class="d-block mx-lg-auto img-fluid mb-5" :options="defaultOptions"/>
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
                rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                },
            },
        };
    },
    components: {
        Lottie,
    },
};
</script>
<style></style>
