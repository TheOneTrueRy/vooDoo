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
  dollData: loadState('doll', Doll),
  cursePointsData: loadState('cursePoints', Number),
  // spiteData: loadState('spite', String),
  // judgementData: loadState('judgement', String),
  // manipulationData: loadState('manipulation', String),
  // recklessnessData: loadState('recklessness', String),
  // pettinessData: loadState('pettiness', String),

  /** @type {import('./models/Doll.js').Doll} */
  doll: {
    kit: 'default',
    color: 'grey',
    name: 'Name Your Doll!'
  },

  boosts: [
    {
      name: 'Warm Pillow',
      comment: `Yeah, THIS'LL teach em!`,
      description: '',
      img: '/WarmPillow.png',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: 'Unevenly Heated Burrito',
      comment: 'Hope you enjoy a sudden frozen spot',
      description: '',
      img: '/ColdBurrito.png',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: 'Extended Warranty (Scam)',
      comment: `We've been trying to reach you`,
      description: '',
      img: '/ExtendedWarranty.png',
      price: 0,
      value: 0,
      active: false
    },
    {
      name: 'IRS Audit (Real)',
      comment: `Looks like somebody didn't pay the man`,
      description: '',
      img: '/IRSAudit.png',
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
      description: 'Increases your click gain by 1',
      img: '/Thimble.png',
      price: 50,
      value: 1,
      quantity: 0
    },
    {
      name: 'Emery Bag',
      comment: 'Why not sharpen ALL the needles?!',
      description: 'Increases your click gain by 5',
      img: '/Emery-Bag.png',
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
      img: '/Salt.png',
      price: 150,
      value: 2,
      quantity: 0
    },
    {
      name: 'Bad Luck Streak',
      comment: `They just can't catch a break...`,
      description: 'Increase your auto-payout by 6',
      img: '/BrokenMirror.png',
      price: 600,
      value: 6,
      quantity: 0
    },
  ],

  /** @type {import('./models/DollKit.js').DollOption[]} */
  dollKits: [
    {
      name: `Plain Ol' Doll`,
      description: `I can take it!`,
      img: `/GreyDefault.png`,
      silhouette: ``,
      essence: 'Jeff',
      unlocked: true,
      equipped: true,
      kitCode: 'default'
    },
    {
      name: `Dolldevil`,
      description: `Go to Hell.`,
      img: `/GreyDevil.png`,
      silhouette: `/SilhouetteDevil.png`,
      essence: 'Spite',
      unlocked: false,
      equipped: false,
      kitCode: 'devil'
    },
    {
      name: `Voodoo Virtue`,
      description: `Worship me.`,
      img: `/GreyAngel.png`,
      silhouette: `/SilhouetteAngel.png`,
      essence: 'Judgement',
      unlocked: false,
      equipped: false,
      kitCode: 'angel'
    },
    {
      name: `Discord Doll`,
      description: `UWU!`,
      img: `/GreyCat.png`,
      silhouette: `/SilhouetteCat.png`,
      essence: 'Manipulation',
      unlocked: false,
      equipped: false,
      kitCode: 'cat'
    },
    {
      name: `BOB`,
      description: `Chug! Chug! Chug!`,
      img: `/GreyBob.png`,
      silhouette: `/SilhouetteBob.png`,
      essence: 'Recklessness',
      unlocked: false,
      equipped: false,
      kitCode: 'bob'
    },
    {
      name: `Karen`,
      description: `Let me speak to your manager.`,
      img: `/GreyKaren.png`,
      silhouette: `/SilhouetteKaren.png`,
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
    img: `/GreyYarn.png`,
    silhouette: `/SilhouetteYarn.png`,
    price: 0,
    unlocked: true,
    equipped: true,
    colorCode: 'grey'
  },
  {
    name: `Bullied Blue`,
    description: ``,
    img: `/BlueYarn.png`,
    silhouette: `/SilhouetteYarn.png`,
    price: 0,
    unlocked: false,
    equipped: false,
    colorCode: 'blue'
  },
  {
    name: `Ghoulish Green`,
    description: ``,
    img: `/GreenYarn.png`,
    silhouette: `/SilhouetteYarn.png`,
    price: 0,
    unlocked: false,
    equipped: false,
    colorCode: 'green'
  },
  {
    name: `Raging Red`,
    description: ``,
    img: `/RedYarn.png`,
    silhouette: `/SilhouetteYarn.png`,
    price: 0,
    unlocked: false,
    equipped: false,
    colorCode: 'red'
  },
  {
    name: `Pulsing Purple`,
    description: ``,
    img: `/PurpleYarn.png`,
    silhouette: `/SilhouetteYarn.png`,
    price: 0,
    unlocked: false,
    equipped: false,
    colorCode: 'purple'
  }],

  clickAmount: 1,

  autoAmount: 0,

  cursePoints: 0,

  judgement: false,
  spite: false,
  manipulation: true,
  recklessness: false,
  pettiness: false,

  displaying: 'doll',

  sound: true,
  music: false
})
