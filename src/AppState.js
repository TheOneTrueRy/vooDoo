import { reactive } from 'vue'
import { loadState } from "./utils/Store.js"
import { Doll } from "./models/Doll.js"
import { Upgrade } from "./models/Upgrade.js"
import { DollKit } from "./models/DollKit.js"
import { DollColor } from "./models/DollColor.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  dollColorsData: loadState('dollColors', [DollColor]),
  dollKitsData: loadState('dollKits', [DollKit]),
  clickUpgradesData: loadState('clickUpgrades', [Upgrade]),
  autoUpgradesData: loadState('autoUpgrades', [Upgrade]),
  boostsData: loadState('boosts', []),
  dollData: loadState('doll', Doll),
  cursePointsData: loadState('cursePoints', Number),
  totalStabsData: loadState('totalStabs', Number),
  spiteData: loadState('spite', []),
  judgementData: loadState('judgement', []),
  manipulationData: loadState('manipulation', []),
  pettinessData: loadState('pettiness', []),
  recklessnessData: loadState('recklessness', []),

  /** @type {import('./models/Doll.js').Doll} */
  doll: {
    kit: 'default',
    color: 'grey',
    name: ''
  },

  boosts: [
    {
      name: 'Warm Pillow',
      comment: `Nighty night... heheh.`,
      description: 'Your auto payout is doubled for 30 seconds.',
      img: '/vooDoo/WarmPillow.png',
      price: 500,
      active: false
    },
    {
      name: 'Unevenly Heated Burrito',
      comment: 'Hope you enjoy a sudden frozen spot.',
      description: 'Your CP/Click is multiplied by 2 for 30 seconds.',
      img: '/vooDoo/ColdBurrito.png',
      price: 1000,
      active: false
    },
    {
      name: 'Extended Warranty (Scam)',
      comment: `We've been trying to reach you...`,
      description: 'Your auto payout ticks every 1 second for 30 seconds.',
      img: '/vooDoo/ExtendedWarranty.png',
      price: 2500,
      active: false
    },
    {
      name: 'IRS Audit (Real)',
      comment: `Somebody didn't pay the man...`,
      description: 'Your CP/click is multiplied by 4 for 30 seconds.',
      img: '/vooDoo/IRSAudit.png',
      price: 3000,
      active: false
    },
  ],

  /** @type {import('./models/Upgrade.js').Upgrade[]} */
  clickUpgrades: [
    {
      name: 'Thimble',
      comment: 'That needle could be a little sharper...',
      description: 'Increases your click gain by 1',
      img: '/vooDoo/Thimble.png',
      price: 25,
      value: 1,
      quantity: 0
    },
    {
      name: 'Emery Bag',
      comment: 'Why not sharpen ALL the needles?!',
      description: 'Increases your click gain by 5',
      img: '/vooDoo/Emery-Bag.png',
      price: 500,
      value: 5,
      quantity: 0
    },
  ],

  autoUpgrades: [
    {
      name: 'Minor Misfortune',
      comment: `This'll make 'em salty.`,
      description: 'Increase your auto-payout by 2',
      img: '/vooDoo/Salt.png',
      price: 50,
      value: 2,
      quantity: 0
    },
    {
      name: 'Bad Luck Streak',
      comment: `They just can't catch a break...`,
      description: 'Increase your auto-payout by 6',
      img: '/vooDoo/BrokenMirror.png',
      price: 350,
      value: 6,
      quantity: 0
    },
  ],

  /** @type {import('./models/DollKit.js').DollOption[]} */
  dollKits: [
    {
      name: `Plain Ol' Doll`,
      description: `I can take it!`,
      img: `/vooDoo/GreyDefault.png`,
      silhouette: ``,
      essence: 'Jeff',
      unlocked: true,
      equipped: true,
      kitCode: 'default'
    },
    {
      name: `Dolldevil`,
      description: `Go to Hell.`,
      img: `/vooDoo/GreyDevil.png`,
      silhouette: `/vooDoo/SilhouetteDevil.png`,
      essence: 'Spite',
      unlocked: false,
      equipped: false,
      kitCode: 'devil'
    },
    {
      name: `Voodoo Virtue`,
      description: `Worship me.`,
      img: `/vooDoo/GreyAngel.png`,
      silhouette: `/vooDoo/SilhouetteAngel.png`,
      essence: 'Judgement',
      unlocked: false,
      equipped: false,
      kitCode: 'angel'
    },
    {
      name: `Discord Doll`,
      description: `UWU!`,
      img: `/vooDoo/GreyCat.png`,
      silhouette: `/vooDoo/SilhouetteCat.png`,
      essence: 'Manipulation',
      unlocked: false,
      equipped: false,
      kitCode: 'cat'
    },
    {
      name: `BOB`,
      description: `Chug! Chug! Chug!`,
      img: `/vooDoo/GreyBob.png`,
      silhouette: `/vooDoo/SilhouetteBob.png`,
      essence: 'Recklessness',
      unlocked: false,
      equipped: false,
      kitCode: 'bob'
    },
    {
      name: `Karen`,
      description: `Let me speak to your manager.`,
      img: `/vooDoo/GreyKaren.png`,
      silhouette: `/vooDoo/SilhouetteKaren.png`,
      essence: 'Pettiness',
      unlocked: false,
      equipped: false,
      kitCode: 'karen'
    },

  ],

  dollColors: [ 
  {
    name: `Ghastly Grey`,
    description: `A Classic.`,
    img: `/vooDoo/GreyYarn.png`,
    silhouette: `/vooDoo/SilhouetteYarn.png`,
    price: 0,
    unlocked: true,
    equipped: true,
    colorCode: 'grey'
  },
  {
    name: `Bullied Blue`,
    description: `Bruised and battered.`,
    img: `/vooDoo/BlueYarn.png`,
    silhouette: `/vooDoo/SilhouetteYarn.png`,
    price: 2500,
    unlocked: false,
    equipped: false,
    colorCode: 'blue'
  },
  {
    name: `Ghoulish Green`,
    description: `Better than Gingivitis Green!`,
    img: `/vooDoo/GreenYarn.png`,
    silhouette: `/vooDoo/SilhouetteYarn.png`,
    price: 6000,
    unlocked: false,
    equipped: false,
    colorCode: 'green'
  },
  {
    name: `Raging Red`,
    description: `Like a bull in a clicker game.`,
    img: `/vooDoo/RedYarn.png`,
    silhouette: `/vooDoo/SilhouetteYarn.png`,
    price: 10000,
    unlocked: false,
    equipped: false,
    colorCode: 'red'
  },
  {
    name: `Pulsing Purple`,
    description: `Oooh, pretty!`,
    img: `/vooDoo/PurpleYarn.png`,
    silhouette: `/vooDoo/SilhouetteYarn.png`,
    price: 15000,
    unlocked: false,
    equipped: false,
    colorCode: 'purple'
  },
  {
    name: `Prized Patchwork`,
    description: `It's kinda ugly... but you earned it!`,
    img: `/vooDoo/PatchworkDefaultUnlock.png`,
    silhouette: `/vooDoo/QuestionMark.png`,
    price: 0,
    unlocked: false,
    equipped: false,
    colorCode: 'patchwork',
  }],

  clickAmount: 1,

  autoAmount: 0,

  cursePoints: 0,

  totalStabs: 0,

  judgement: false,
  spite: false,
  manipulation: false,
  recklessness: false,
  pettiness: false,

  displaying: 'doll',

  sound: true,
  music: false
})
