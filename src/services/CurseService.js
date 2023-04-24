import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"


class CurseService{
  stab(){
    let randomRoll = Math.floor((Math.random() * 1000000) + 1)
    let clickamount = AppState.clickAmount
    AppState.cursePoints += clickamount
    if(randomRoll <= 1000000 && randomRoll >= 995000 && AppState.spite == false){
      AppState.spite = true
      saveState('spite', AppState.spite)
      Pop.toast('You just got a random drop of: Essence of Spite!', 'info', 'top')
    }
    saveState('cursePoints', AppState.cursePoints)
  }

  payAuto(){
    AppState.cursePoints += AppState.autoAmount
    saveState('cursePoints', AppState.cursePoints)
  }
}

export const curseService = new CurseService()