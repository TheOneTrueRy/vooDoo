import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import Pop from "../utils/Pop.js"
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
    if(AppState.dollKits[kitIndex].essence == 'Spite' && AppState.spite == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Spite' && AppState.spite == false){
      Pop.error(`You're missing the Essence of Spite!`)
    }
    if(AppState.dollKits[kitIndex].essence == 'Judgement' && AppState.judgement == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Judgement' && AppState.judgement == false){
      Pop.error(`You're missing the Essence of Judgement!`)
    }
    if(AppState.dollKits[kitIndex].essence == 'Manipulation' && AppState.manipulation == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Manipulation' && AppState.manipulation == false){
      Pop.error(`You're missing the Essence of Manipulation!`)
    }
    if(AppState.dollKits[kitIndex].essence == 'Recklessness' && AppState.recklessness == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Recklessness' && AppState.recklessness == false){
      Pop.error(`You're missing the Essence of Recklessness`)
    }
    if(AppState.dollKits[kitIndex].essence == 'Pettiness' && AppState.pettiness == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Pettiness' && AppState.pettiness == false){
      Pop.error(`You're missing the Essence of Pettiness!`)
    }
  }

  equipDollKit(kitName){
    let kitIndex = AppState.dollKits.findIndex(k => k.name == kitName)
    let currentlyEquippedIndex = AppState.dollKits.findIndex(k => k.equipped == true)
    if(AppState.dollKits[kitIndex].unlocked == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else{
      Pop.error(`You haven't unlocked that doll kit!`)
    }
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
    }else{
      Pop.error(`You don't have enough Curse Points for that!`)
    }
  }

  equipDollColor(colorName){
    let colorIndex = AppState.dollColors.findIndex(c => c.name == colorName)
    let currentlyEquippedIndex = AppState.dollColors.findIndex(c => c.equipped == true)
    if(AppState.dollColors[colorIndex].unlocked == true){
      AppState.dollColors[currentlyEquippedIndex].equipped = false
      AppState.dollColors[colorIndex].equipped = true
      AppState.doll.color = AppState.dollColors[colorIndex].colorCode
      saveState('dollColors', AppState.dollColors)
      saveState('doll', AppState.doll)
    }else{
      Pop.error(`You haven't unlocked that doll color!`)
    }
  }
}

export const dollService = new DollService()