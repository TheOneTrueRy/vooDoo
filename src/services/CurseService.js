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
      Swal.fire({
        title: `Achievement Unlocked: "Just a little prick..."`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 37){
      Swal.fire({
        title: `Achievement Unlocked: "CAAAARL, THAT KILLS PEOPLE!"`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 100){
      Swal.fire({
        title: `Achievement Unlocked: "Did you name your doll Caesar?"`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 250){
      Swal.fire({
        title: `Achievement Unlocked: "That's a lot of @#$%ing cursing!"`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 450){
      Swal.fire({
        title: `Achievement Unlocked: "Oh happy needle, this is thy sheathe..."`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 700){
      Swal.fire({
        title: `Achievement Unlocked: "YEAH, STICK IT TO 'EM!"`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 1000){
      Swal.fire({
        title: `Achievement Unlocked: "What are you gonna do, stab me?"`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 1500){
      Swal.fire({
        title: `Achievement Unlocked: "Wow, you're still going huh?"`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 2000){
      Swal.fire({
        title: `Achievement Unlocked: "You know, you're the only person in my life who has ever stuck around..."`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 6000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 2500){
      Swal.fire({
        title: `Achievement Unlocked: "Did you catch my last pun? STUCK around? Haha..."`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 6000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 3000){
      Swal.fire({
        title: `Achievement Unlocked: "Do you still think I'm funny? I'm pretty insecure about my jokes."`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 6000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 3500){
      Swal.fire({
        title: `Achievement Unlocked: "You're lonely too, huh?"`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 6000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 4000){
      Swal.fire({
        title: `Achievement Unlocked: "My name is Jeff by the way."`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 4200){
      Swal.fire({
        title: `Achievement Unlocked: "My programmer is getting tired..."`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(AppState.totalStabs == 4300){
      Pop.toast(`Achievement Unlocked: "I'll miss you... thank you for playing. :)"`, 'success', 'top-start', 10000, true)
      Swal.fire({
        title: `Achievement Unlocked: "I'll miss you... thank you for playing. :)"`,
        imageUrl: '/vooDoo/AchievementDoll.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(randomRoll < 1000000 && randomRoll > 999750 && AppState.spite == false){
      AppState.spite = true
      saveState('spite', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Spite!',
        imageUrl: '/vooDoo/Essence.png',
        imageHeight: 120,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(randomRoll < 999750 && randomRoll > 999500 && AppState.judgement == false){
      AppState.judgement = true
      saveState('judgement', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Judgement!',
        imageUrl: '/vooDoo/Essence.png',
        imageHeight: 120,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(randomRoll < 999500 && randomRoll > 999250 && AppState.manipulation == false){
      AppState.manipulation = true
      saveState('manipulation', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Manipulation!',
        imageUrl: '/vooDoo/Essence.png',
        imageHeight: 120,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(randomRoll < 999250 && randomRoll > 999000 && AppState.recklessness == false){
      AppState.recklessness = true
      saveState('recklessness', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Recklessness!',
        imageUrl: '/vooDoo/Essence.png',
        imageHeight: 120,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
      })
    }
    if(randomRoll < 999000 & randomRoll > 998750 && AppState.pettiness == false){
      AppState.pettiness = true
      saveState('pettiness', true)
      Swal.fire({
        title: 'You just got a random drop of: Essence of Pettiness!',
        imageUrl: '/vooDoo/Essence.png',
        imageHeight: 120,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem"
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