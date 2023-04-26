import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js"
import { saveState } from "../utils/Store.js"


class BoostService{
  activateBoost(boostName){
    let boostIndex = AppState.boosts.findIndex(b => b.name == boostName)
    if(AppState.cursePoints >= AppState.boosts[boostIndex].price){
      AppState.cursePoints -= AppState.boosts[boostIndex].price
      AppState.boosts[boostIndex].active = true
      AppState.boosts[boostIndex].price = AppState.boosts[boostIndex].price * 2
      setTimeout(() => {
        AppState.boosts[boostIndex].active = false
      }, 30000)
      saveState('boosts', AppState.boosts)
    }else{
      Pop.error(`You don't have enough Curse Points for that!`)
    }
  }
}

export const boostService = new BoostService()