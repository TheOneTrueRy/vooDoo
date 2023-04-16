<template>
  
</template>


<script>
import { onMounted } from "vue";
import { Doll } from "../models/Doll.js";
import gasp from "gsap";

export default {
  props: {
    doll: {type: Doll, required: true}
  },
  setup(){
    onMounted(() => {

    })
    return {}
  }
}
</script>


<style lang="scss" scoped>
  .doll{
    height: 60vh;
  }
</style>