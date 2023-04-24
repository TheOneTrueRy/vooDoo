import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"


class DollService{
  updateName(dollName){
    if(dollName == ''){
      dollName = 'Name Your Doll!'
    }
    AppState.doll.name = dollName
    saveState('doll', AppState.doll)
  }

  purchaseDollOption(optionName){
    let optionIndex = AppState.dollOptions.findIndex(o => o.name == optionName)

  }
}

export const dollService = new DollService()