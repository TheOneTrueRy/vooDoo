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
            <div class="row rounded border border-dark bg-light">
              <div class="col-12 d-flex justify-content-center py-2">
                <span class="fs-5">
                  {{ cursePoints }}
                </span>
              </div>
              <div class="col-6 text-center py-2">
                <span>{{ clickAmount }} per click</span>
              </div>
              <div class="col-6 text-center py-2">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 vh-100 shop-bg border">
        <div class="row shop-top"> 
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
          <div v-if="displaying == 'click'" v-for="upgrade in clickUpgrades" class="col-12 px-4 py-2">
            <UpgradeCard :upgrade="upgrade"/>
          </div>
          <div v-if="displaying == 'auto'" v-for="upgrade in autoUpgrades" class="col-12 px-4 py-2">
            <UpgradeCard :upgrade="upgrade"/>
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
import { loadService } from "../services/LoadService.js";
import UpgradeCard from "../components/UpgradeCard.vue";
import DollOptionCard from "../components/DollOptionCard.vue";
import BoostCard from "../components/BoostCard.vue";
import { dollService } from "../services/DollService.js";

export default {
    setup() {
      const dollName = ref(AppState.doll.name)
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
    components: { DollImage, UpgradeCard, DollOptionCard, BoostCard }
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
    height: 13.5vw;
  }

  .my-overflow{
    overflow-y: scroll;
  }

  .my-overflow::-webkit-scrollbar{
    display: none;
  }

  input{
    background-color: transparent;
    border: none;
  }
</style>
