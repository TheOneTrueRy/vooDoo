<template>
  <div class="row rounded elevation-2 border border-dark bg-dark bg-gradient align-items-center py-1">
    <div class="col-3 d-flex justify-content-center align-items-center g-0 h-100">
      <img v-if="option.unlocked" :src="option.img" :alt="option.name">
      <img v-else-if="!option.unlocked" :src="option.silhouette" :alt="option.name">
    </div>
    <div class="col-5 d-flex flex-column h-100 g-0">
      <span v-if="option.unlocked" class="fs-5">
        {{ option.name }}
      </span>
      <span v-else class="fs-5">
        ???
      </span>
      <span v-if="option.unlocked">
        <i>
          {{ option.description }}
        </i>
      </span>
      <span v-else>
        <i>
          ??????
        </i>
      </span>
    </div>
    <div class="col-4 g-0 d-flex flex-column align-items-center justify-content-center h-100">
      <button v-if="!option.unlocked && !option.equipped" class="btn purchase-btn bg-gradient" @click="purchaseDollKit(option.name)" :class="[option.essence == 'Spite' && spite || option.essence == 'Judgement' && judgement || option.essence == 'Manipulation' && manipulation || option.essence == 'Recklessness' && recklessness || option.essence == 'Pettiness' && pettiness ? 'essence' : '']">
        <span>
          Purchase
        </span>
      </button>
      <button v-if="option.unlocked && !option.equipped" class="btn purchase-btn bg-gradient" @click="equipDollKit(option.name)">
        <span>
        Equip
        </span>
      </button>
      <button v-if="option.unlocked && option.equipped" class="btn purchase-btn bg-gradient" disabled>
        <span>
          Equipped
        </span>
      </button>
      <span v-if="option.essence || option.kitCode == 'default'" class="hide text-center" :class="[option.unlocked == true ? 'invisible' : '']">
        Essence of {{ option.essence }}
      </span>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { dollService } from "../services/DollService.js";
import Pop from "../utils/Pop.js";
import { AppState } from "../AppState.js";

export default {
  props: {
    option: {type: Object, required: true}
  },
  setup(){
    return {
      purchaseDollKit(kitName){
        try {
          dollService.purchaseDollKit(kitName)
        } catch (error) {
          Pop.error(error.message, 'Purchasing Doll Kit')
        }
      },
      equipDollKit(kitName){
        try {
          dollService.equipDollKit(kitName)
        } catch (error) {
          Pop.error(error.message, 'Equipping Doll Kit')
        }
      },
      spite: computed(() => AppState.spite),
      judgement: computed(() => AppState.judgement),
      manipulation: computed(() => AppState.manipulation),
      recklessness: computed(() => AppState.recklessness),
      pettiness: computed(() => AppState.pettiness),
    }
  }
}
</script>


<style lang="scss" scoped>

  @keyframes essence {
    0% {color: rgb(86, 199, 152)}
    20% {color: rgb(58, 188, 197)}
    50% {color: rgb(32, 32, 219)}
    85% {color: rgb(94, 22, 175)}
    100% {color: rgb(86, 199, 152)}
  }

  .hide{
    color: white;
    transition: 0.3s;
    user-select: none;
  }

  @media screen and (min-width: 756px) {
    .hide{
      color: transparent;
    }
  }

  .purchase-btn{
    background-color: #8285c5;
    font-weight: bold;
  }

  .purchase-btn:hover{
    background-color: #8183d8;
  }

  .purchase-btn:hover + .hide{
    color: white;
  }

  .essence{
    animation: essence 2s infinite;
  }

  .invisible{
    color: transparent !important;
  }

  img{
    max-width: 90%;
    max-height: 120px;
  }
</style>