import { AppState } from "../AppState.js"
import { Doll } from "../models/Doll.js"
import { saveState } from "../utils/Store.js"


class DollService{
  updateName(dollName){
    AppState.doll.name = dollName
    saveState('doll', AppState.doll)
  }
}

export const dollService = new DollService()