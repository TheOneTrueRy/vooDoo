<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 py-3 text-center title">
        <span class="text-light">
          Who Do You VooDoo?
        </span>
      </div>
    </div>
    <div class="row">
      <div class="col-8 text-center">
        <DollImage :doll="doll"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import gsap from "gsap";
import { AppState } from "../AppState.js";
import DollImage from "../components/DollImage.vue";

export default {
    setup() {
        onMounted(() => {
            gsap.from(".title", {
                duration: 3,
                opacity: 0,
                scale: 0.4
            });
        });
        return {
            doll: computed(() => AppState.doll)
        };
    },
    components: { DollImage }
}
</script>

<style scoped lang="scss">
  .title{
    font-family: 'Zeyada', cursive;
    text-shadow: 0 4px 0 rgb(82, 13, 109);
    text-shadow: 0 0 4px white, 0 3px 0 rgb(64, 14, 87);
    font-size: 5.5em;
  }
</style>
