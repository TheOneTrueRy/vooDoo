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
      logger.log(AppState.dollData)
      AppState.doll = AppState.dollData
      logger.log(AppState.doll)
    }
    if(AppState.cursePointsData > 0){
      AppState.cursePoints = AppState.cursePointsData
    }
    if(AppState.dollNameData){
      AppState.dollNameData.join('')
      logger.log(AppState.dollNameData)
      // AppState.dollName = AppState.dollNameData
    }
  }
}

export const loadService = new LoadService()