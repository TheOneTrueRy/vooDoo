import { AppState } from "../AppState.js"
import { saveState } from "../utils/Store.js"


class DollService{
  updateName(dollName){
    doll.name = dollName
    doll.color = AppState.doll.color
    doll.kit = AppState.doll.kit
    saveState('doll', doll)
  }
}

export const dollService = new DollService()