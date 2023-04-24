<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-8">
        <div class="row">
          <div class="col-12 text-center title">
            <span>
              Who Do You VooDoo?
            </span>
          </div>
          <div class="col-12 text-center">
            <form @submit.prevent="updateName()">
              <input v-model="dollName" type="text" name="doll-name" id="doll-name" class="fs-1 text-center text-light border rounded">
            </form>
          </div>
          <div class="col-12 text-center">
            <DollImage/>
          </div>
          <div class="col-12 px-5 py-2">
            <div class="row rounded border">
              <div class="col-12 d-flex justify-content-center align-items-center py-2">
                <img src="/CursePoints.png" alt="" height="75" class="">
                <span class="fs-3">
                  : <i class="ms-3">{{ cursePoints.toLocaleString('en-us') }} Curse Points</i>
                </span>
              </div>
              <div class="col-6 text-center pt-2 pb-3">
                <span class="fs-5">
                  <i>
                    {{ clickAmount.toLocaleString('en-us') }} CP
                  </i>
                  per click
                </span>
              </div>
              <div class="col-6 text-center pt-2 pb-3">
                <span class="fs-5">
                  <i>
                    {{ autoAmount.toLocaleString('en-us') }} CP
                  </i>
                  every 3 seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 vh-100 shop-bg border">
        <div class="row shop-top"> 
        </div>
        <div class="row shop-mid px-1">
          <div class="col-3 g-0 text-center bg-dark bg-gradient py-2 border border-dark my-select" :class="[displaying == 'doll' ? 'selected' : '']" @click="changeDisplaying('doll')">
            <span class="fs-5">Doll</span>
          </div>
          <div class="col-3 g-0 text-center bg-dark bg-gradient py-2 border border-dark my-select" :class="[displaying == 'click' ? 'selected' : '']" @click="changeDisplaying('click')">
            <span class="fs-5">Click</span>
          </div>
          <div class="col-3 g-0 text-center bg-dark bg-gradient py-2 border border-dark my-select" :class="[displaying == 'auto' ? 'selected' : '']" @click="changeDisplaying('auto')">
            <span class="fs-5">Auto</span>
          </div>
          <div class="col-3 g-0 text-center bg-dark bg-gradient py-2 border border-dark my-select" :class="[displaying == 'boost' ? 'selected' : '']" @click="changeDisplaying('boost')">
            <span class="fs-5">Boost</span>
          </div>
        </div>
        <div class="row my-overflow">
          <div v-if="displaying == 'click'" v-for="upgrade in clickUpgrades" class="col-12 px-4 py-2">
            <ClickUpgradeCard :upgrade="upgrade"/>
          </div>
          <div v-if="displaying == 'auto'" v-for="upgrade in autoUpgrades" class="col-12 px-4 py-2">
            <AutoUpgradeCard :upgrade="upgrade"/>
          </div>
          <div v-if="displaying == 'boost'" v-for="boost in boosts" class="col-12 px-4 py-2">
            <BoostCard :boost="boost"/>
          </div>
          <div v-if="displaying == 'doll'" v-for="option in dollOptions" class="col-12 px-4 py-2">
            <DollOptionCard :option="option"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";
import { AppState } from "../AppState.js";
import DollImage from "../components/DollImage.vue";
import Pop from "../utils/Pop.js";
import ClickUpgradeCard from "../components/ClickUpgradeCard.vue";
import AutoUpgradeCard from "../components/AutoUpgradeCard.vue";
import DollOptionCard from "../components/DollOptionCard.vue";
import BoostCard from "../components/BoostCard.vue";
import { dollService } from "../services/DollService.js";

export default {
    setup() {
      const dollName = ref(AppState.doll.name)
        onMounted(() => {
            gsap.from(".row", {
                duration: 3,
                opacity: 0,
                // scale: 0.4,
                stagger: 0.3
            });

        });
        return {
            doll: computed(() => AppState.doll),
            displaying: computed(() => AppState.displaying),
            clickUpgrades: computed(() => AppState.clickUpgrades),
            autoUpgrades: computed(() => AppState.autoUpgrades),
            boosts: computed(() => AppState.boosts),
            dollOptions: computed(() => AppState.dollOptions),
            clickAmount: computed(() => AppState.clickAmount),
            autoAmount: computed(() => AppState.autoAmount),
            cursePoints: computed(() => AppState.cursePoints),
            dollName,
            changeDisplaying(string){
              try {
                AppState.displaying = string
              } catch (error) {
                Pop.error(error.message, 'Changing Displaying')
              }
            },
            updateName(){
              let dollNameData = dollName.value
              dollService.updateName(dollNameData)
            }
        };
    },
    components: { DollImage, ClickUpgradeCard, AutoUpgradeCard, DollOptionCard, BoostCard }
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

  .shop-bg{
    background-image: url("/Shop-BG.png");
    background-size: cover;
  }

  .shop-top{
    height: 27%;
  }

  .shop-mid{
    height: 6%;
  }

  .my-overflow{
    overflow-y: scroll;
    max-height: 67%;
  }

  .my-overflow::-webkit-scrollbar{
    display: none;
  }

  input{
    background-color: transparent;
    border: none;
  }
</style>
