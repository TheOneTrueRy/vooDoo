import { AppState } from "../AppState.js"


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
    }
    if(AppState.boostsData.length > 0){
      AppState.boosts = AppState.boostsData
      AppState.boosts.forEach(b => {
        b.active = false
      })
    }
    if(AppState.spiteData.length > 0){
      AppState.spite = true
    }
    if(AppState.judgementData.length > 0){
      AppState.judgement = true
    }
    if(AppState.manipulationData.length > 0){
      AppState.manipulation = true
    }
    if(AppState.recklessnessData.length > 0){
      AppState.recklessness = true
    }
    if(AppState.pettinessData.length > 0){
      AppState.pettiness = true
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