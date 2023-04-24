<template>
  <div class="row rounded elevation-2 border border-dark bg-dark bg-gradient align-items-center py-1">
    <div class="col-3 d-flex justify-content-center align-items-center g-0 h-100">
      <img v-if="option.unlocked" :src="option.img" :alt="option.name" height="120" width="100">
      <img v-else-if="!option.unlocked" :src="option.silhouette" :alt="option.name" height="120" width="100">
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
      <button v-if="!option.unlocked && !option.equipped" class="btn purchase-btn bg-gradient" @click="purchaseDollOption(option.name)">
        <span>
          Purchase
        </span>
      </button>
      <span v-if="option.essence" class="hide text-center">
        Essence of {{ option.essence }}
      </span>
      <span v-if="option.price" class="hide">
        {{ option.price.toLocaleString('en-us') }} CP
      </span>
      <button v-if="option.unlocked && !option.equipped" class="btn purchase-btn bg-gradient" @click="equipDollOption(option.name)">
        <span>
          Equip
        </span>
      </button>
      <button v-if="option.unlocked && option.equipped" class="btn purchase-btn bg-gradient" disabled>
        <span>
          Equipped
        </span>
      </button>
    </div>
  </div>
</template>


<script>
import { DollOption } from "../models/DollOption.js";

export default {
  props: {
    option: {type: DollOption, required: true}
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>
  .upgradeCard{
    height: 140px;
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
</style>