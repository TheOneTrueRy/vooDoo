import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"


class LoadService{
  loadEverything(){
    if(AppState.clickUpgradesData.length > 0){
      AppState.clickUpgrades = AppState.clickUpgradesData
    }
    if(AppState.autoUpgradesData.length > 0){
      AppState.autoUpgrades = AppState.autoUpgradesData
    }
    if(AppState.dollColorsData.length > 0){
      AppState.dollColors = AppState.dollColorsData
    }
    if(AppState.dollKitsData.length > 0){
      AppState.dollKits = AppState.dollKitsData
    }
    if(AppState.dollData.name != undefined){
      AppState.doll = AppState.dollData
    }
    if(AppState.cursePointsData > 0){
      AppState.cursePoints = AppState.cursePointsData
    }
    // if(AppState.spiteData == 'T'){
    //   AppState.spite = true
    // }
    // if(AppState.judgementData == 'T'){
    //   AppState.judgement = true
    // }
    // if(AppState.manipulationData == 'T'){
    //   AppState.manipulation = true
    // }
    // if(AppState.recklessnessData == 'T'){
    //   AppState.recklessness = true
    // }
    // if(AppState.pettinessData == 'T'){
    //   AppState.pettiness = true
    // }
    AppState.clickUpgrades.forEach(u => {
      AppState.clickAmount += (u.value * u.quantity)
    })
    AppState.autoUpgrades.forEach(u => {
      AppState.autoAmount += (u.value * u.quantity)
    })
  }
}

export const loadService = new LoadService()