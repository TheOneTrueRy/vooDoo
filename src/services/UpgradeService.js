import Swal from "sweetalert2"
import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"


class UpgradeService{
  purchaseClickUpgrade(upgradeName){
    let upgradeIndex = AppState.clickUpgrades.findIndex(u => u.name == upgradeName)
    if(AppState.cursePoints >= AppState.clickUpgrades[upgradeIndex].price){
      AppState.cursePoints -= AppState.clickUpgrades[upgradeIndex].price
      AppState.clickUpgrades[upgradeIndex].quantity++
      AppState.clickUpgrades[upgradeIndex].price *= 2
      AppState.clickAmount += AppState.clickUpgrades[upgradeIndex].value
      saveState('clickUpgrades', AppState.clickUpgrades)
      saveState('cursePoints', AppState.cursePoints)
    }else{
      Swal.fire({
        title: `You don't have enough Curse Points for that!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false
      })
    }
  }
  purchaseAutoUpgrade(upgradeName){
    let upgradeIndex = AppState.autoUpgrades.findIndex(u => u.name == upgradeName)
    if(AppState.cursePoints >= AppState.autoUpgrades[upgradeIndex].price){
      AppState.cursePoints -= AppState.autoUpgrades[upgradeIndex].price
      AppState.autoUpgrades[upgradeIndex].quantity++
      AppState.autoUpgrades[upgradeIndex].price *= 2
      AppState.autoAmount += AppState.autoUpgrades[upgradeIndex].value
      saveState('autoUpgrades', AppState.autoUpgrades)
      saveState('cursePoints', AppState.cursePoints)
    }else{
      Swal.fire({
        title: `You don't have enough Curse Points for that!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false
      })
    }
  }
}

export const upgradeService = new UpgradeService()