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
    if(AppState.totalStabsData > 0){
      AppState.totalStabs = AppState.totalStabsData
      logger.log(AppState.totalStabs)
    }
    if(AppState.boostsData.length > 0){
      AppState.boosts = AppState.boostsData
      AppState.boosts.forEach(b => {
        b.active = false
      })
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