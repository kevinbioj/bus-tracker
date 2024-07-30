import { Operator } from "~/@types";

const operators: Operator[] = [
  {
    id: "NOMAD",
    name: "NOMAD (Région Normandie)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/nomad.svg",
      size: [512, 144],
    },
    issues: [],
  },
  {
    id: "TCAR",
    name: "Astuce (Rouen Normandie) | Transdev Rouen",
    hasHistory: true,
    logo: {
      href: "/assets/operators/transdev-rouen.svg",
      size: [419, 147],
    },
    issues: [
      {
        message:
          "Indisponibilité des données en heure de pointe en raison de l'infrastructure hasardeuse de Transdev Rouen.",
        status: "ONGOING",
      },
    ],
  },
  {
    id: "TAE",
    name: "Astuce (Rouen Normandie) | Régie des Transports urbains de l'Agglomération Elbeuvienne",
    hasHistory: true,
    logo: {
      href: "/assets/operators/tae.svg",
      size: [3367, 1064],
    },
    issues: [],
  },
  {
    id: "TNI",
    name: "Astuce (Rouen Normandie) | Transdev Normandie Interurbain",
    hasHistory: true,
    logo: {
      href: "/assets/operators/transdev-normandie.svg",
      size: [478, 147],
    },
    issues: [],
  },
  {
    id: "HANGA",
    name: "Astuce (Rouen Normandie) | Autocars Hangard",
    hasHistory: false,
    logo: {
      href: "/assets/operators/cars-hangard.png",
      size: [283, 142],
    },
    issues: [],
  },
  {
    id: "TWISTO",
    name: "Twisto (Caen la Mer)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/twisto.svg",
      size: [600, 228],
    },
    issues: [],
  },
  {
    id: "LIA",
    name: "LiA (Le Havre Seine Métropole)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/lia.svg",
      size: [120, 88],
    },
    issues: [],
  },
  {
    id: "CAPCOT",
    name: "Cap Cotentin (le Cotentin)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/capcotentin.svg",
      size: [100, 100],
    },
    issues: [],
  },
  {
    id: "SEMO",
    name: "Semo (Agglo Seine-Eure)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/semo.svg",
      size: [823, 227],
    },
    issues: [],
  },
  {
    id: "TRANSURBAIN",
    name: "Transurbain (Évreux Portes de Normandie)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/transurbain.svg",
      size: [363, 416],
    },
    issues: [],
  },
  {
    id: "DEEPMOB",
    name: "DeepMob (Dieppe Maritime)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/deepmob.svg",
      size: [595, 356],
    },
    issues: [],
  },
  {
    id: "ASTROBUS",
    name: "Astrobus (Lisieux Normandie)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/astrobus.svg",
      size: [595, 241],
    },
    issues: [],
  },
  {
    id: "SNGO",
    name: "SNgo! (Seine Normandie Agglomération)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/sngo.jpg",
      size: [1280, 678],
    },
    issues: [
      {
        status: "ONGOING",
        message:
          "En raison d'une absence de mise à jour de l'offre théorique, le réseau est désactivé jusqu'à nouvel ordre.",
      },
    ],
  },
  {
    id: "NEVA",
    name: "Néva (Granville Terre et Mer)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/neva.svg",
      size: [1387, 622],
    },
    issues: [],
  },
  {
    id: "NEMUS",
    name: "Némus (Flers Agglo)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/nemus.svg",
      size: [233, 67],
    },
    issues: [],
  },
  {
    id: "HOBUS",
    name: "Hobus (Pays de Honfleur-Beuzeville)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/hobus.png",
      size: [1000, 327],
    },
    issues: [],
  },
  {
    id: "MOCA",
    name: "MOCA (Caux-Austreberthe)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/moca.svg",
      size: [1560, 320],
    },
    issues: [],
  },
  {
    id: "FICIBUS",
    name: "Ficibus (Fécamp Caux Littoral)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/ficibus.svg",
      size: [109, 38],
    },
    issues: [],
  },
  {
    id: "VIKIBUS",
    name: "Vikibus (Ville d'Yvetot)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/vikibus.png",
      size: [457, 163],
    },
    issues: [],
  },
  {
    id: "REZOBUS",
    name: "Rezo'Bus (Caux Seine Agglo)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/rezobus.svg",
      size: [222, 73],
    },
    issues: [],
  },
  {
    id: "BYBUS",
    name: "Bybus (Bayeux)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/bybus.svg",
      size: [245, 101],
    },
    issues: [],
  },
  {
    id: "LBUS",
    name: "l'Bus (Bernay Terres de Normandie)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/lbus.svg",
      size: [185, 92],
    },
    issues: [],
  },
  {
    id: "LEBUS",
    name: "Le Bus (Pont-Audemer Val de Risle)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/lebus.png",
      size: [349, 175],
    },
    issues: [],
  },
];

export default operators;
