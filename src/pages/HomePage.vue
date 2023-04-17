<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-9">
        <div class="row">
          <div class="col-12 text-center title">
            <span>
              Who Do You VooDoo?
            </span>
          </div>
          <div class="col-12 text-center">
            <DollImage/>
          </div>
        </div>
      </div>
      <div class="col-3 h-100 bg-dark border">
        <div class="row">
          <div class="col-12 text-center">
            <span class="HUGE">SHOP</span>
          </div>
        </div>
        <div class="row px-1">
          <div class="col-3 g-0 text-center bg-dark bg-gradient py-2 border border-dark my-select" :class="[displaying == 'click' ? 'selected' : '']" @click="changeDisplaying('click')">
            <span class="fs-5">Click</span>
          </div>
          <div class="col-3 g-0 text-center bg-dark bg-gradient py-2 border border-dark my-select" :class="[displaying == 'auto' ? 'selected' : '']" @click="changeDisplaying('auto')">
            <span class="fs-5">Auto</span>
          </div>
          <div class="col-3 g-0 text-center bg-dark bg-gradient py-2 border border-dark my-select" :class="[displaying == 'boost' ? 'selected' : '']" @click="changeDisplaying('boost')">
            <span class="fs-5">Boost</span>
          </div>
          <div class="col-3 g-0 text-center bg-dark bg-gradient py-2 border border-dark my-select" :class="[displaying == 'doll' ? 'selected' : '']" @click="changeDisplaying('doll')">
            <span class="fs-5">Doll</span>
          </div>
        </div>
        <div class="row">
          <div v-if="displaying == 'click'" v-for="upgrade in clickUpgrades" class="col-12 px-1 py-2">
            <UpgradeCard :upgrade="upgrade"/>
          </div>
          <div v-if="displaying == 'auto'" v-for="upgrade in autoUpgrades" class="col-12 px-1 py-2">
            <UpgradeCard :upgrade="upgrade"/>
          </div>
          <div v-if="displaying == 'boost'" v-for="upgrade in boosts" class="col-12 px-1 py-2">
            <UpgradeCard :upgrade="upgrade"/>
          </div>
          <div v-if="displaying == 'doll'" v-for="upgrade in dollOptions" class="col-12 px-1 py-2">
            <UpgradeCard :upgrade="upgrade"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import gsap from "gsap";
import { AppState } from "../AppState.js";
import DollImage from "../components/DollImage.vue";
import Pop from "../utils/Pop.js";
import { loadService } from "../services/LoadService.js";
import UpgradeCard from "../components/UpgradeCard.vue";

export default {
    setup() {
      function loadEverything(){
        try {
          loadService.loadEverything()
        } catch (error) {
          Pop.error(error.message, 'Testing Load')
        }
      }
        onMounted(() => {
            gsap.from(".title", {
                duration: 3,
                opacity: 0,
                scale: 0.4
            });
            loadEverything()
        });
        return {
            doll: computed(() => AppState.doll),
            displaying: computed(() => AppState.displaying),
            clickUpgrades: computed(() => AppState.clickUpgrades),
            autoUpgrades: computed(() => AppState.autoUpgrades),
            boosts: computed(() => AppState.boosts),
            dollOptions: computed(() => AppState.dollOptions),
            changeDisplaying(string){
              try {
                AppState.displaying = string
              } catch (error) {
                Pop.error(error.message, 'Changing Displaying')
              }
            },
        };
    },
    components: { DollImage, Upgrade, UpgradeCard }
}
</script>

<style scoped lang="scss">
  .title{
    font-family: 'Zeyada', cursive;
    text-shadow: 0 4px 0 rgb(82, 13, 109);
    text-shadow: 0 0 4px white, 0 3px 0 rgb(64, 14, 87);
    font-size: 5.5em;
  }

  .HUGE{
    font-size: 4em;
  }

  .my-select:hover{
    cursor: pointer;
    color: #a9395b;
  }

  .selected{
    color: #a9395b;
    border-bottom: 3px solid #a9395b !important;
  }
</style>
