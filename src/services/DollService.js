import Swal from "sweetalert2"
import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"


class DollService{
  updateName(dollName){
    if(dollName == ''){
      dollName = 'Name Your Doll!'
    }
    if(dollName == 'Jeff'){
      Swal.fire({
        title: `No...`,
        imageUrl: '/vooDoo/Jeff.png',
        imageHeight: 160,
        imageWidth: 160,
        position: 'top-start',
        toast: true,
        timer: 10000,
        timerProgressBar: true,
        showConfirmButton: false,
        padding: 0,
        width: "20rem",
        background: '#111111',
        color: '#ffffff'
      })
      dollName = 'Name Your Doll!'
    }
    if(dollName != 'Name Your Doll!'){
      Swal.fire({
        title: `Doll name successfully set!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
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
      Swal.fire({
        title: `You're missing the Essence of Spite!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
    }
    if(AppState.dollKits[kitIndex].essence == 'Judgement' && AppState.judgement == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Judgement' && AppState.judgement == false){
      Swal.fire({
        title: `You're missing the Essence of Judgement!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
    }
    if(AppState.dollKits[kitIndex].essence == 'Manipulation' && AppState.manipulation == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Manipulation' && AppState.manipulation == false){
      Swal.fire({
        title: `You're missing the Essence of Manipulation!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
    }
    if(AppState.dollKits[kitIndex].essence == 'Recklessness' && AppState.recklessness == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Recklessness' && AppState.recklessness == false){
      Swal.fire({
        title: `You're missing the Essence of Recklessness!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
    }
    if(AppState.dollKits[kitIndex].essence == 'Pettiness' && AppState.pettiness == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].unlocked = true
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else if(AppState.dollKits[kitIndex].essence == 'Pettiness' && AppState.pettiness == false){
      Swal.fire({
        title: `You're missing the Essence of Pettiness!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
    }
    if(AppState.dollColors[0].unlocked && AppState.dollColors[1].unlocked && AppState.dollColors[2].unlocked && AppState.dollColors[3].unlocked && AppState.dollColors[4].unlocked && AppState.dollKits[0].unlocked && AppState.dollKits[1].unlocked && AppState.dollKits[2].unlocked && AppState.dollKits[3].unlocked && AppState.dollKits[4].unlocked && AppState.dollKits[5].unlocked){
      Swal.fire({
        title: `Congratulations! You unlocked all customization. You have now earned the "Prized Patchwork" Doll Color!`,
        toast: true,
        showConfirmButton: false,
        position: 'top',
        timer: 10000,
        timerProgressBar: true,
        imageUrl: '/vooDoo/PatchworkDefaultUnlock.png',
        background: '#111111',
        color: '#ffffff'
      })
      AppState.dollColors[5].unlocked = true
      saveState('dollColors', AppState.dollColors)
    }
  }

  equipDollKit(kitName){
    debugger
    let kitIndex = AppState.dollKits.findIndex(k => k.name == kitName)
    let currentlyEquippedIndex = AppState.dollKits.findIndex(k => k.equipped == true)
    if(AppState.dollKits[kitIndex].unlocked == true){
      AppState.dollKits[currentlyEquippedIndex].equipped = false
      AppState.dollKits[kitIndex].equipped = true
      AppState.doll.kit = AppState.dollKits[kitIndex].kitCode
      saveState('dollKits', AppState.dollKits)
      saveState('doll', AppState.doll)
    }else{
      Swal.fire({
        title: `You don't have that doll kit unlocked!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
    }
  }

  purchaseDollColor(colorName){
    let colorIndex = AppState.dollColors.findIndex(c => c.name == colorName)
    let currentlyEquippedIndex = AppState.dollColors.findIndex(c => c.equipped == true)
    if(AppState.cursePoints >= AppState.dollColors[colorIndex].price){
      AppState.dollColors[currentlyEquippedIndex].equipped = false
      AppState.dollColors[colorIndex].unlocked = true
      AppState.dollColors[colorIndex].equipped = true
      AppState.cursePoints -= AppState.dollColors[colorIndex].price
      AppState.doll.color = AppState.dollColors[colorIndex].colorCode
      saveState('cursePoints', AppState.cursePoints)
      saveState('dollColors', AppState.dollColors)
      saveState('doll', AppState.doll)
    }else{
      Swal.fire({
        title: `You don't have enough Curse Points for that!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
    }
    if(AppState.dollColors[0].unlocked && AppState.dollColors[1].unlocked && AppState.dollColors[2].unlocked && AppState.dollColors[3].unlocked && AppState.dollColors[4].unlocked && AppState.dollKits[0].unlocked && AppState.dollKits[1].unlocked && AppState.dollKits[2].unlocked && AppState.dollKits[3].unlocked && AppState.dollKits[4].unlocked && AppState.dollKits[5].unlocked){
      Swal.fire({
        title: `Congratulations! You unlocked all customization. You have now earned the "Prized Patchwork" Doll Color!`,
        toast: true,
        showConfirmButton: false,
        position: 'top',
        timer: 10000,
        timerProgressBar: true,
        imageUrl: '/vooDoo/PatchworkDefaultUnlock.png',
        background: '#111111',
        color: '#ffffff'
      })
      AppState.dollColors[5].unlocked = true
      saveState('dollColors', AppState.dollColors)
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
      Swal.fire({
        title: `You don't have that doll color unlocked!`,
        toast: true,
        timer: 4000,
        timerProgressBar: true,
        imageUrl: '',
        position: 'top-end',
        showConfirmButton: false,
        background: '#111111',
        color: '#ffffff'
      })
    }
  }
}

export const dollService = new DollService()