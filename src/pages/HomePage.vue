<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div id="not-shop" class="col-12 col-md-8 bg-dark">
        <div class="row">
          <div class="col-12 text-center g-0 title">
            <span>
              Who Do You VooDoo?
            </span>
          </div>
          <div class="col-12 text-center">
            <form @submit.prevent="updateName()">
              <input v-model="dollName" type="text" name="doll-name" id="doll-name" class="fs-1 text-center text-light border rounded" placeholder="Name Your Doll!" @blur="updateName()">
            </form>
          </div>
          <div class="col-12 text-center g-0 pb-1 disable-zoom">
            <DollImage/>
          </div>
          <div class="col-12 px-4">
            <div class="row bg-dark rounded border">
              <div class="col-12 d-flex justify-content-center align-items-center py-2">
                <img src="/CursePoints.png" alt="" height="75" class="">
                <span class="fs-3">
                  : <i class="ms-3">{{ cursePoints.toLocaleString('en-us') }} Curse Points</i>
                </span>
              </div>
              <div class="col-6 text-center pt-2 pb-3">
                <span class="fs-5">
                  <i v-if="boosts[1].active && !boosts[3].active">
                    {{ clickAmount.toLocaleString('en-us') * 2 }} CP
                  </i>
                  <i v-else-if="!boosts[1].active && boosts[3].active">
                    {{ clickAmount.toLocaleString('en-us') * 4 }} CP
                  </i>
                  <i v-else-if="boosts[1].active && boosts[3].active">
                    {{ clickAmount.toLocaleString('en-us') * 5 }} CP
                  </i>
                  <i v-else-if="!boosts[1].active && !boosts[3].active">
                    {{ clickAmount.toLocaleString('en-us') }} CP
                  </i>
                  per click
                </span>
              </div>
              <div class="col-6 text-center pt-2 pb-3">
                <span v-if="!boosts[2].active" class="fs-5">
                  <i v-if="boosts[0].active">
                    {{ autoAmount.toLocaleString('en-us') * 2 }} CP
                  </i>
                  <i v-if="!boosts[0].active">
                    {{ autoAmount.toLocaleString('en-us') }} CP
                  </i>
                  every 3 seconds
                </span>
                <span v-else class="fs-5">
                  <i v-if="boosts[0].active">
                    {{ autoAmount.toLocaleString('en-us') * 2 }} CP
                  </i>
                  <i v-if="!boosts[0].active">
                    {{ autoAmount.toLocaleString('en-us') }} CP
                  </i>
                  every 1 second
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 d-flex d-md-none align-items-center justify-content-center pb-1">
          <span class="fs-5">
            <i class="mdi mdi-chevron-down"></i>
            SHOP
            <i class="mdi mdi-chevron-down"></i>
          </span>
        </div>
      </div>
      <div class="col-12 col-md-4 vh-100 bg-dark border">
        <div class="row shop-top align-items-end">
          <div class="col-6">
            <span class="fs-1">
              <i id="music-btn" class="mdi mdi-music-note shadow" v-if="music" @click="musicOff()"></i>
              <i id="music-btn" class="mdi mdi-music-note-off shadow" v-else @click="musicOn()"></i>
            </span>
          </div>
          <div class="col-6 text-end">
            <span class="fs-1">
              <i id="sound-btn" class="mdi mdi-volume-high shadow" @click="toggleSound()" v-if="sound"></i>
              <i id="sound-btn" class="mdi mdi-volume-off shadow" @click="toggleSound()" v-else></i>
              </span>
          </div>
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
          <div v-if="displaying == 'click'" v-for="upgrade in clickUpgrades" class="col-12 px-3 py-2">
            <ClickUpgradeCard :upgrade="upgrade"/>
          </div>
          <div v-if="displaying == 'auto'" v-for="upgrade in autoUpgrades" class="col-12 px-3 py-2">
            <AutoUpgradeCard :upgrade="upgrade"/>
          </div>
          <div v-if="displaying == 'boost'" v-for="boost in boosts" class="col-12 px-3 py-2">
            <BoostCard :boost="boost"/>
          </div>
          <div v-if="displaying == 'doll'" v-for="kit in dollKits" class="col-12 px-3 py-2">
            <DollKitCard :option="kit"/>
          </div>
          <div v-if="displaying == 'doll'" v-for="color in dollColors" class="col-12 px-3 py-2">
            <DollColorCard :option="color"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <audio id="bg-music">
    <source src="/bg-music.wav" type="audio/wav">
  </audio>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import gsap from "gsap";
import { AppState } from "../AppState.js";
import DollImage from "../components/DollImage.vue";
import Pop from "../utils/Pop.js";
import ClickUpgradeCard from "../components/ClickUpgradeCard.vue";
import AutoUpgradeCard from "../components/AutoUpgradeCard.vue";
import BoostCard from "../components/BoostCard.vue";
import { dollService } from "../services/DollService.js";
import { curseService } from "../services/CurseService.js";

export default {
    setup() {
      const dollName = ref(AppState.doll.name)
      function payAuto(){
        try {
          curseService.payAuto()
          if(AppState.boosts[2].active){
            setTimeout(payAuto, 1000)
          }else{
            setTimeout(payAuto, 3000)
          }
        } catch (error) {
          Pop.error(error.message, 'Paying Auto')
        }
      }
        onMounted(() => {
            gsap.from(".row", {
                duration: 3,
                opacity: 0,
                stagger: 0.3
            });
            gsap.from(".title", {
              duration: 3,
              scale: 0.2
            });
            setTimeout(payAuto, 3000)
        });
        return {
            displaying: computed(() => AppState.displaying),
            clickUpgrades: computed(() => AppState.clickUpgrades),
            autoUpgrades: computed(() => AppState.autoUpgrades),
            boosts: computed(() => AppState.boosts),
            dollKits: computed(() => AppState.dollKits),
            dollColors: computed(() => AppState.dollColors),
            clickAmount: computed(() => AppState.clickAmount),
            autoAmount: computed(() => AppState.autoAmount),
            cursePoints: computed(() => AppState.cursePoints),
            sound: computed(() => AppState.sound),
            music: computed(() => AppState.music),
            dollName,
            changeDisplaying(string){
              try {
                AppState.displaying = string
              } catch (error) {
                Pop.error(error.message, 'Changing Displaying')
              }
            },
            updateName(){
              try {
                let dollNameData = dollName.value
                dollService.updateName(dollNameData)
                dollName.value = AppState.doll.name
              } catch (error) {
                Pop.error(error.message, 'Updating Name')
              }
            },
            toggleSound(){
              try {
                AppState.sound = !AppState.sound
              } catch (error) {
                Pop.error(error.message, 'Toggling Sound')
              }
            },
            musicOn(){
              try {
                AppState.music = true
                let bgMusic = document.getElementById("bg-music")
                bgMusic.loop = true
                bgMusic.play()
              } catch (error) {
                Pop.error(error.message, 'Turning Music On')
              }
            },
            musicOff(){
              try {
                AppState.music = false
                let bgMusic = document.getElementById("bg-music")
                bgMusic.pause()
              } catch (error) {
                Pop.error(error.message, 'Turning Music Off')
              }
            }
        };
    },
    components: { DollImage, ClickUpgradeCard, AutoUpgradeCard, BoostCard }
}
</script>

<style scoped lang="scss">
  .title{
    font-family: 'Zeyada', cursive;
    text-shadow: 0 4px 0 rgb(82, 13, 109);
    text-shadow: 0 0 4px white, 0 3px 0 rgb(64, 14, 87);
    font-size: 3.5em;
  }

  @media screen and (min-width: 756px) and (max-width: 889px) {
    .title{
      font-size: 4.5em;
    }
  }

  @media screen and (min-width: 890px) {
    .title{
      font-size: 5.5em;
    }
  }

  .my-select:hover{
    cursor: pointer;
    color: #a9395b;
  }

  .selected{
    color: #a9395b;
    border-bottom: 3px solid #a9395b !important;
  }

  .shop-top{
    height: 27%;
    background-image: url("/Shop-Top.png");
    background-position: center;
    background-size: cover;
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

  #sound-btn{
    cursor: pointer;
  }

  #music-btn{
    cursor: pointer;
  }

  #not-shop{
    background-image: url("/Doll-BG.png");
    background-size: cover;
    background-position: center;
  }

  .shadow{
    text-shadow: 0 0 5px black;
  }

  .disable-zoom{
    touch-action: manipulation pan-x pan-y pinch-zoom;
    user-zoom: fixed;
  }
</style>
