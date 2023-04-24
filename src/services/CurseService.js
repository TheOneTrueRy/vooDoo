import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"


class CurseService{
  stab(){
    let randomRoll = Math.floor((Math.random() * 1000000) + 1)
    let clickamount = AppState.clickAmount
    AppState.cursePoints += clickamount
    if(randomRoll < 1000000 && randomRoll > 999900 && AppState.spite == false){
      AppState.spite = true
      saveState('spite', 'T')
      Pop.toast('You just got a random drop of: Essence of Spite!', 'info', 'top')
    }
    if(randomRoll < 999900 && randomRoll > 999800 && AppState.judgement == false){
      AppState.judgement = true
      saveState('judgement', 'T')
      Pop.toast('You just got a random drop of: Essence of Judgement!', 'info', 'top')
    }
    if(randomRoll < 999800 && randomRoll > 999700 && AppState.manipulation == false){
      AppState.manipulation = true
      saveState('manipulation', 'T')
      Pop.toast('You just got a random drop of: Essence of Manipulation!', 'info', 'top')
    }
    if(randomRoll < 999700 && randomRoll > 999600 && AppState.recklessness == false){
      AppState.recklessness = true
      saveState('recklessness', 'T')
      Pop.toast('You just got a random drop of: Essence of Recklessness!', 'info', 'top')
    }
    if(randomRoll < 999600 & randomRoll > 999500 && AppState.pettiness == false){
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