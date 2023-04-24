import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"


class CurseService{
  stab(){
    let randomRoll = Math.floor((Math.random() * 1000000) + 1)
    let clickamount = AppState.clickAmount
    AppState.cursePoints += clickamount
    if(randomRoll < 1000000 && randomRoll > 995000 && AppState.spite == false){
      AppState.spite = true
      saveState('spite', 'T')
      Pop.toast('You just got a random drop of: Essence of Spite!', 'info', 'top')
    }
    if(randomRoll < 995000 && randomRoll > 990000 && AppState.judgement == false){
      AppState.judgement = true
      saveState('judgement', 'T')
      Pop.toast('You just got a random drop of: Essence of Judgement!', 'info', 'top')
    }
    if(randomRoll < 990000 && randomRoll > 985000 && AppState.manipulation == false){
      AppState.manipulation = true
      saveState('manipulation', 'T')
      Pop.toast('You just got a random drop of: Essence of Manipulation!', 'info', 'top')
    }
    if(randomRoll < 985000 && randomRoll > 980000 && AppState.recklessness == false){
      AppState.recklessness = true
      saveState('recklessness', 'T')
      Pop.toast('You just got a random drop of: Essence of Recklessness!', 'info', 'top')
    }
    if(randomRoll < 980000 & randomRoll > 975000 && AppState.pettiness == false){
      AppState.pettiness = true
      saveState('pettiness', 'T')
      Pop.toast('You just got a random drop of: Essence of Pettiness!', 'info', 'top')
    }
    saveState('cursePoints', AppState.cursePoints)
  }

  payAuto(){
    AppState.cursePoints += AppState.autoAmount
    saveState('cursePoints', AppState.cursePoints)
  }
}

export const curseService = new CurseService()