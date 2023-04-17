import { reactive } from 'vue'
import { loadState } from "./utils/Store.js"
import { Doll } from "./models/Doll.js"
import { Upgrade } from "./models/Upgrade.js"
import { DollOption } from "./models/DollOption.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  dollOptionsData: loadState('dollOptions', [DollOption]),
  clickUpgradesData: loadState('clickUpgrades', [Upgrade]),
  autoUpgradesData: loadState('autoUpgrades', [Upgrade]),

  /** @type {import('./models/Doll.js').Doll} */
  doll: loadState('doll', Doll),

  boosts: [
    {
      name: 'Warm Pillow',
      comment: `Yeah, THIS'LL teach em!`,
      description: '',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: 'Unevenly Heated Burrito',
      comment: 'Hope you enjoy a sudden frozen spot',
      description: '',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: 'Extended Warranty',
      comment: `We've been trying to reach you`,
      description: '',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: 'IRS Audit',
      comment: `Looks like somebody didn't pay the man`,
      description: '',
      price: 0,
      value: 0,
      active: false
    },
  ],
  /** @type {import('./models/Upgrade.js').Upgrade[]} */

  clickUpgrades: [
    {
      name: 'Thimble',
      comment: 'That needle could be a little sharper...',
      description: 'Increases your click gain by 1.',
      price: 50,
      value: 1,
      quantity: 0
    },
    {
      name: 'Emery Bag',
      comment: '',
      description: '',
      price: 0,
      value: 0,
      quantity: 0
    },
  ],

  autoUpgrades: [
    {
      name: 'Minor Misfortune',
      comment: '',
      description: '',
      price: 0,
      value: 0,
      quantity: 0
    },
    {
      name: 'Bad Luck Streak',
      comment: `They just can't catch a break...`,
      description: '',
      price: 0,
      value: 0,
      quantity: 0
    },
  ],

  displaying: 'click',
})
