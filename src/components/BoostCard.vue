<template>
  <div class="row rounded elevation-2 border border-dark bg-dark bg-gradient align-items-center py-1">
    <div class="col-3 d-flex align-items-center justify-content-center g-0 h-100">
      <img :src="boost.img" :alt="boost.name" height="90" width="90">
    </div>
    <div class="col-5 g-0 d-flex flex-column h-100">
      <span class="fs-5">
        {{ boost.name }}
      </span>
      <span>
        <i>
          {{ boost.comment }}
        </i>
      </span>
      <span>
        {{ boost.description }}
      </span>
    </div>
    <div class="col-4 g-0 d-flex flex-column align-items-center justify-content-center h-100">
      <button v-if="!boost.active" class="btn purchase-btn bg-gradient" @click="activateBoost(boost.name, boost.price)">
        <span>
          Activate
        </span>
      </button>
      <button v-else class="btn purchase-btn bg-gradient" disabled>
        <span>
          Activated
        </span>
      </button>
      <span class="hide">
        {{ boost.price.toLocaleString('en-us') }} CP
      </span>
    </div>
  </div>
</template>


<script>
import { AppState } from "../AppState.js";
import { boostService } from "../services/BoostService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    boost: {type: Object, required: true}
  },
  setup(){
    return {
      activateBoost(boostName, boostPrice){
        try {
          let purchaseSound = new Audio('/vooDoo/purchase.wav')
          if(AppState.sound && AppState.cursePoints >= boostPrice){
            purchaseSound.play()
          }
          boostService.activateBoost(boostName)
        } catch (error) {
          Pop.error(error.message, 'Activating Boost')
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
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
</style>