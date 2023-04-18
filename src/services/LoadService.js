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
    if(AppState.dollOptionsData.length > 0){
      AppState.dollOptions = AppState.dollOptionsData
    }
    if(AppState.dollData){
      AppState.doll = AppState.dollData
    }
    if(AppState.cursePointsData){
      AppState.cursePoints = AppState.cursePointsData
    }
  }
}

export const loadService = new LoadService()