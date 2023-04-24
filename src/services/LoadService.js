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
      logger.log(AppState.dollData, 'AppState.dollData')
      AppState.doll = AppState.dollData
      logger.log(AppState.doll, 'AppState.doll')
    }
    if(AppState.cursePointsData > 0){
      logger.log(AppState.cursePointsData)
      AppState.cursePoints = AppState.cursePointsData
    }
    AppState.clickUpgrades.forEach(u => {
      AppState.clickAmount += (u.value * u.quantity)
    })
    AppState.autoUpgrades.forEach(u => {
      AppState.autoAmount += (u.value * u.quantity)
    })
  }
}

export const loadService = new LoadService()