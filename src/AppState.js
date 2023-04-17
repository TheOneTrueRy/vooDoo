import { reactive } from 'vue'
import { loadState } from "./utils/Store.js"
import { Doll } from "./models/Doll.js"
import { Upgrade } from "./models/Upgrade.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Doll.js').Doll} */
  doll: loadState('doll', Doll),

  boosts: [
    {
      name: '',
      comment: '',
      description: '',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: '',
      comment: '',
      description: '',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: '',
      comment: '',
      description: '',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: '',
      comment: '',
      description: '',
      price: 0,
      value: 0,
      active: false
    },
  ],
  /** @type {import('./models/Upgrade.js').Upgrade[]} */

  clickUpgrades: [
    {
      name: '',
      comment: '',
      description: '',
      price: 0,
      value: 0,
    },
    {
      name: '',
      comment: '',
      description: '',
      price: 0,
      value: 0,
    },
  ],

  autoUpgrades: [
    {
      name: '',
      comment: '',
      description: '',
      price: 0,
      value: 0,
    },
    {
      name: '',
      comment: '',
      description: '',
      price: 0,
      value: 0,
    },
  ],

  myClickUpgrades: loadState('clickUpgrades', [Upgrade]),

  myAutoUpgrades: loadState('autoUpgrades', [Upgrade]),

  

  displaying: 'click',
})
