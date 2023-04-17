<template>
  <img v-if="doll?.kit == 'default' && doll?.color == 'grey' || !doll" src="/GreyDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'default' && doll.color == 'red'" src="/RedDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'default' && doll.color == 'green'" src="/GreenDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'default' && doll.color == 'blue'" src="/BlueDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'grey'" src="/GreyDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'red'" src="/RedDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'green'" src="/GreenDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'blue'" src="/BlueDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'grey'" src="/GreyAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'red'" src="/RedAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'green'" src="/GreenAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'blue'" src="/BlueAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'grey'" src="/GreyCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'red'" src="/RedCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'green'" src="/GreenCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'blue'" src="/BlueCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'grey'" src="/GreyBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'red'" src="/RedBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'green'" src="/GreenBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'blue'" src="/BlueBob.png" alt="Doll" class="doll" @click="stab()">
</template>


<script>
import { onMounted } from "vue";
import { Doll } from "../models/Doll.js";
import gasp from "gsap";
import Pop from "../utils/Pop.js";

export default {
  props: {
    doll: {type: Doll, required: true}
  },
  setup(){
    onMounted(() => {

    })
    return {
      stab(){
        try {
          
        } catch (error) {
          Pop.error(error.message, 'Stabbing')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .doll{
    height: 60vh;
    user-select: none;
    -webkit-user-drag: none;
  }

  .doll:hover{
    cursor: url("/CursorPin.png"), auto;
  }
</style>