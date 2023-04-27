<template>
  <img v-if="doll?.kit == 'default' && doll?.color == 'grey' || !doll" src="/GreyDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'default' && doll.color == 'red'" src="/RedDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'default' && doll.color == 'green'" src="/GreenDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'default' && doll.color == 'blue'" src="/BlueDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'default' && doll.color == 'purple'" src="/PurpleDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'default' && doll.color == 'patchwork'" src="/PatchworkDefault.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'grey'" src="/GreyDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'red'" src="/RedDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'green'" src="/GreenDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'blue'" src="/BlueDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'purple'" src="/PurpleDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'devil' && doll.color == 'patchwork'" src="/PatchworkDevil.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'grey'" src="/GreyAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'red'" src="/RedAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'green'" src="/GreenAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'blue'" src="/BlueAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'purple'" src="/PurpleAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'angel' && doll.color == 'patchwork'" src="/PatchworkAngel.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'grey'" src="/GreyCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'red'" src="/RedCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'green'" src="/GreenCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'blue'" src="/BlueCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'purple'" src="/PurpleCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'cat' && doll.color == 'patchwork'" src="/PatchworkCat.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'grey'" src="/GreyBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'red'" src="/RedBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'green'" src="/GreenBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'blue'" src="/BlueBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'purple'" src="/PurpleBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'bob' && doll.color == 'patchwork'" src="/PatchworkBob.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'karen' && doll.color == 'grey'" src="/GreyKaren.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'karen' && doll.color == 'red'" src="/RedKaren.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'karen' && doll.color == 'green'" src="/GreenKaren.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'karen' && doll.color == 'blue'" src="/BlueKaren.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'karen' && doll.color == 'purple'" src="/PurpleKaren.png" alt="Doll" class="doll" @click="stab()">
  <img v-else-if="doll.kit == 'karen' && doll.color == 'patchwork'" src="/PatchworkKaren.png" alt="Doll" class="doll" @click="stab()">
</template>


<script>
import { computed } from "vue";
import Pop from "../utils/Pop.js";
import { curseService } from "../services/CurseService.js";
import { AppState } from "../AppState.js";

export default {
  setup(){
    return {
      stab(){
        try {
          let stabSound = new Audio('/vooDoo/stab.wav')
          curseService.stab()
          if(AppState.sound == true){
            stabSound.play()
          }
        } catch (error) {
          Pop.error(error.message, 'Stabbing')
        }
      },
      doll: computed(() => AppState.doll)
    }
  }
}
</script>


<style lang="scss" scoped>
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }

  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }

  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }

  30% {
    transform: translate(3px, 2px) rotate(0deg) scale(0.95);
  }

  40% {
    transform: translate(1px, -1px) rotate(1deg) scale(0.95);
  }

  50% {
    transform: translate(-1px, 2px) rotate(-1deg) scale(0.95);
  }

  60% {
    transform: translate(-3px, 1px) rotate(0deg) scale(0.95);
  }

  70% {
    transform: translate(3px, 1px) rotate(-1deg) scale(0.95);
  }

  80% {
    transform: translate(-1px, -1px) rotate(1deg) scale(0.95);
  }

  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }

  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
  .doll{
    height: 60vh;
    max-width: 100%;
    user-select: none;
    -webkit-user-drag: none;
    transition: 0.4s;
  }

  .doll:hover{
    cursor: url("/CursorPin.png"), auto;
  }

  .doll:active{
    animation-name: shake;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
  }

  @media screen and (min-width: 375px) {
    .doll{
    touch-action: pan-x pan-y;
    }
  }
</style>