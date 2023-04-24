import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { saveState } from "../utils/Store.js"


class CurseService{
  stab(){
    let clickamount = AppState.clickAmount
    AppState.cursePoints += clickamount
    saveState('cursePoints', AppState.cursePoints)
  }

  payAuto(){
    AppState.cursePoints += AppState.autoAmount
    saveState('cursePoints', AppState.cursePoints)
  }
}

export const curseService = new CurseService()