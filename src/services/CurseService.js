import Swal from "sweetalert2"
import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"


class CurseService{
  stab(){
    let randomRoll = Math.floor((Math.random() * 1000000) + 1)
    let clickAmount = AppState.clickAmount
    if(AppState.boosts[1].active){
      clickAmount += AppState.clickAmount
    }
    if(AppState.boosts[3].active){
      clickAmount += AppState.clickAmount * 3
    }
    AppState.cursePoints += clickAmount
    AppState.totalStabs++
    if(AppState.totalStabs == 1){
      Pop.toast('Achievement Unlocked: "Just a little prick..."', 'success', 'top-start', 4000, true)
    }
    if(AppState.totalStabs == 37){
      Pop.toast('Achievement Unlocked: "CAAAARL, THAT KILLS PEOPLE!"', 'success', 'top-start', 4000, true)
    }
    if(AppState.totalStabs == 100){
      Pop.toast('Achievement Unlocked: "Did you name your doll Caesar?"', 'success', 'top-start', 4000, true)
    }
    if(AppState.totalStabs == 250){
      Pop.toast(`Achievement Unlocked: "That's a lot of @#$%ing cursing!"`, 'success', 'top-start', 4000, true)
    }
    if(AppState.totalStabs == 450){
      Pop.toast('Achievement Unlocked: "Oh happy needle, this is thy sheathe..."', 'success', 'top-start', 4000, true)
    }
    if(AppState.totalStabs == 700){
      Pop.toast(`Achievement Unlocked: "YEAH, STICK IT TO 'EM!"`, 'success', 'top-start', 4000, true)
    }
    if(AppState.totalStabs == 1000){
      Pop.toast('Achievement Unlocked: "What are you gonna do, stab me?"', 'success', 'top-start', 4000, true)
    }
    if(AppState.totalStabs == 1500){
      Pop.toast(`Achievement Unlocked: "Wow, you're still going huh?"`, 'success', 'top-start', 4000, true)
    }
    if(AppState.totalStabs == 2000){
      Pop.toast(`Achievement Unlocked: "You know, you're the only person in my life who has ever stuck around..."`, 'success', 'top-start', 6000, true)
    }
    if(AppState.totalStabs == 2500){
      Pop.toast(`Achievement Unlocked: "Did you catch my last pun? STUCK around? Haha..."`, 'success', 'top-start', 6000, true)
    }
    if(AppState.totalStabs == 3000){
      Pop.toast(`Achievement Unlocked: "Do you still think I'm funny? I'm pretty insecure about my jokes."`, 'success', 'top-start', 6000, true)
    }
    if(AppState.totalStabs == 3500){
      Pop.toast(`Achievement Unlocked: "You're lonely too, huh?"`, 'success', 'top-start', 6000, true)
    }
    if(AppState.totalStabs == 4000){
      Pop.toast(`Achievement Unlocked: "My name is Jeff by the way."`, 'success', 'top-start', 10000, true)
    }
    if(AppState.totalStabs == 4200){
      Pop.toast(`Achievement Unlocked: "My programmer is getting tired..."`, 'success', 'top-start', 10000, true)
    }
    if(AppState.totalStabs == 4300){
      Pop.toast(`Achievement Unlocked: "I'll miss you... thank you for playing. :)"`, 'success', 'top-start', 10000, true)
    }
    if(randomRoll < 1000000 && randomRoll > 999800 && AppState.spite == false){
      AppState.spite = true
      saveState('spite', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Spite!',
        imageUrl: '/Essence.png',
        // imageHeight: 60,
        // imageWidth: 40,
        position: 'top-start',
        toast: true,
        timer: 4000,
        showConfirmButton: false
      })
    }
    if(randomRoll < 999800 && randomRoll > 999600 && AppState.judgement == false){
      AppState.judgement = true
      saveState('judgement', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Judgement!',
        imageUrl: '/Essence.png',
        imageHeight: 60,
        imageWidth: 40,
        position: 'top-start',
        toast: true,
        timer: 4000,
        showConfirmButton: false
      })
    }
    if(randomRoll < 999600 && randomRoll > 999400 && AppState.manipulation == false){
      AppState.manipulation = true
      saveState('manipulation', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Manipulation!',
        imageUrl: '/Essence.png',
        imageHeight: 60,
        imageWidth: 40,
        position: 'top-start',
        toast: true,
        timer: 4000,
        showConfirmButton: false
      })
    }
    if(randomRoll < 999400 && randomRoll > 999200 && AppState.recklessness == false){
      AppState.recklessness = true
      saveState('recklessness', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Recklessness!',
        imageUrl: '/Essence.png',
        imageHeight: 60,
        imageWidth: 40,
        position: 'top-start',
        toast: true,
        timer: 4000,
        showConfirmButton: false
      })
    }
    if(randomRoll < 999200 & randomRoll > 999000 && AppState.pettiness == false){
      AppState.pettiness = true
      saveState('pettiness', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Pettiness!',
        imageUrl: '/Essence.png',
        imageHeight: 60,
        imageWidth: 40,
        position: 'top-start',
        toast: true,
        timer: 4000,
        showConfirmButton: false
      })
    }
    saveState('totalStabs', AppState.totalStabs)
    saveState('cursePoints', AppState.cursePoints)
  }

  payAuto(){
    let autoPayout = AppState.autoAmount
    if(AppState.boosts[0].active){
      autoPayout *= 2
    }
    AppState.cursePoints += autoPayout
    saveState('cursePoints', AppState.cursePoints)
  }
}

export const curseService = new CurseService()