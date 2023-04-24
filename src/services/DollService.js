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

  purchaseDollKit(kitName){
    let kitIndex = AppState.dollKits.findIndex(k => k.name == kitName)
    let currentlyEquippedIndex = AppState.dollKits.findIndex(k => k.equipped == true)

  }

  equipDollKit(kitName){

  }

  purchaseDollColor(colorName){
    let colorIndex = AppState.dollColors.findIndex(c => c.name == colorName)
    let currentlyEquippedIndex = AppState.dollColors.findIndex(c => c.equipped == true)
    if(AppState.cursePoints >= AppState.dollColors[colorIndex.price]){
      AppState.dollColors[currentlyEquippedIndex].equipped = false
      AppState.dollColors[colorIndex].unlocked = true
      AppState.dollColors[colorIndex].equipped = true
      AppState.cursePoints -= AppState.dollColors[colorIndex].price
      AppState.doll.color = AppState.dollColors[colorIndex].colorCode
      saveState('cursePoints', AppState.cursePoints)
      saveState('dollColors', AppState.dollColors)
      saveState('doll', AppState.doll)
    }
  }

  equipDollColor(colorName){
    
  }
}

export const dollService = new DollService()