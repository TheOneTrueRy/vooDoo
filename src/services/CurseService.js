import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"


class CurseService{
  stab(){
    let randomRoll = Math.floor((Math.random() * 1000000) + 1)
    let clickamount = AppState.clickAmount
    AppState.cursePoints += clickamount
    AppState.totalStabs++
    if(AppState.totalStabs == 1){
      Pop.toast('Achievement Unlocked: "Just a little prick..."', 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 37){
      Pop.toast('Achievement Unlocked: "CAAAARL, THAT KILLS PEOPLE!"', 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 100){
      Pop.toast('Achievement Unlocked: "Did you name your doll Caesar?"', 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 250){
      Pop.toast(`Achievement Unlocked: "That's a lot of @#$%ing cursing!"`, 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 450){
      Pop.toast('Achievement Unlocked: "Oh happy needle, this is thy sheathe..."', 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 700){
      Pop.toast(`Achievement Unlocked: "YEAH, STICK IT TO 'EM!"`, 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 1000){
      Pop.toast('Achievement Unlocked: "What are you gonna do, stab me?"', 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 1500){
      Pop.toast(`Achievement Unlocked: "Wow, you're still going huh?"`, 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 2000){
      Pop.toast(`Achievement Unlocked: "You know, you're the only person in my life who has ever stuck around..."`, 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 2500){
      Pop.toast(`Achievement Unlocked: "Did you catch my last pun? STUCK around? Haha..."`, 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 3000){
      Pop.toast(`Achievement Unlocked: "Do you still think I'm funny? I'm pretty insecure about my jokes."`, 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 3500){
      Pop.toast(`Achievement Unlocked: "You're lonely too, huh?"`, 'success', 'top', 5000, true)
    }
    if(AppState.totalStabs == 4000){
      Pop.toast(`Achievement Unlocked: "My name is Jeff by the way."`, 'success', 'top', 10000, true)
    }
    if(AppState.totalStabs == 4200){
      Pop.toast(`Achievement Unlocked: "My programmer is getting tired..."`, 'success', 'top', 10000, true)
    }
    if(AppState.totalStabs == 4250){
      Pop.toast(`Achievement Unlocked: "I'll miss you... thank you for playing. :)"`, 'success', 'top', 10000, true)
    }
    if(randomRoll < 1000000 && randomRoll > 999900 && AppState.spite == false){
      AppState.spite = true
      saveState('spite', true)
      Pop.toast('You just got a random drop of: Essence of Spite!', 'info', 'top')
    }
    if(randomRoll < 999900 && randomRoll > 999800 && AppState.judgement == false){
      AppState.judgement = true
      saveState('judgement', true)
      Pop.toast('You just got a random drop of: Essence of Judgement!', 'info', 'top')
    }
    if(randomRoll < 999800 && randomRoll > 999700 && AppState.manipulation == false){
      AppState.manipulation = true
      saveState('manipulation', true)
      Pop.toast('You just got a random drop of: Essence of Manipulation!', 'info', 'top')
    }
    if(randomRoll < 999700 && randomRoll > 999600 && AppState.recklessness == false){
      AppState.recklessness = true
      saveState('recklessness', true)
      Pop.toast('You just got a random drop of: Essence of Recklessness!', 'info', 'top')
    }
    if(randomRoll < 999600 & randomRoll > 999500 && AppState.pettiness == false){
      AppState.pettiness = true
      saveState('pettiness', true)
      Pop.toast('You just got a random drop of: Essence of Pettiness!', 'info', 'top')
    }
    saveState('totalStabs', AppState.totalStabs)
    saveState('cursePoints', AppState.cursePoints)
  }

  payAuto(){
    AppState.cursePoints += AppState.autoAmount
    saveState('cursePoints', AppState.cursePoints)
  }
}

export const curseService = new CurseService()