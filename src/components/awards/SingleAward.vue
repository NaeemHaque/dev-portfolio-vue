<template>
    <div class="col-md-6">
        <div class="card mb-3 border-0">
            <div class="row g-0">
                <div class="col-md-12">
                    <div class="card-body card-wrapper">
                        
                        <h5
                            class="card-title"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {{ award.result }}
                        </h5>
                        
                        <h5
                            class="card-title"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {{ award.title }}
                        </h5>
                        <h6
                            class="card-subtitle mb-2 text-muted"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-anchor-placement="top-bottom"
                        >
                            {{ award.institution }}
                        </h6>
                        <p
                            class="card-text"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <small class="text-muted">{{ award.date }}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SingleAward",
    props: ["award"],
};
</script>
<style>
.card-wrapper {
    background: rgba(248, 246, 246, 0.98);
    border-left: 4px solid #FB8F39;
    padding: 25px !important;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    height: 170px;
}
</style>
