<template>
  <div class="row rounded elevation-2 border border-dark bg-dark bg-gradient align-items-center py-1">
    <div class="col-3 d-flex align-items-center justify-content-center g-0 h-100">
      <img :src="upgrade.img" :alt="upgrade.name" height="90" width="90">
    </div>
    <div class="col-5 g-0 d-flex flex-column h-100">
      <span class="fs-5">
        {{ upgrade.name }}
      </span>
      <span>
        <i>
          {{ upgrade.comment }}
        </i>
      </span>
      <span>
        {{ upgrade.description }}
      </span>
    </div>
    <div class="col-4 g-0 d-flex flex-column align-items-center justify-content-center h-100">
      <button class="btn purchase-btn bg-gradient" @click="purchaseAutoUpgrade(upgrade.name)">
        <span>
          Purchase
        </span>
      </button>
      <span class="hide">
        {{ upgrade.price.toLocaleString('en-us') }} CP
      </span>
    </div>
  </div>
</template>


<script>
import { AppState } from "../AppState.js";
import { upgradeService } from "../services/UpgradeService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    upgrade: {type: Object, required: true}
  },
  setup(){
    return {
      purchaseAutoUpgrade(upgradeName){
        try {
          let purchaseSound = new Audio('/purchase.wav')
          upgradeService.purchaseAutoUpgrade(upgradeName)
          if(AppState.sound){
            purchaseSound.play()
          }
        } catch (error) {
          Pop.error(error.message, 'Purchasing Upgrade')
        }
      }
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