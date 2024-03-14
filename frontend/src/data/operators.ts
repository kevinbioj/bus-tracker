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
    name: "Réseau Astuce (Rouen) | Transdev Rouen",
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
    name: "Réseau Astuce (Rouen) | Régie des Transports urbains de l'Agglomération Elbeuvienne",
    hasHistory: true,
    logo: {
      href: "/assets/operators/tae.svg",
      size: [3367, 1064],
    },
    issues: [],
  },
  {
    id: "TNI",
    name: "Réseau Astuce (Rouen) | Transdev Normandie Interurbain",
    hasHistory: true,
    logo: {
      href: "/assets/operators/transdev-normandie.svg",
      size: [478, 147],
    },
    issues: [],
  },
  {
    id: "HANGA",
    name: "Réseau Astuce (Rouen) | Autocars Hangard",
    hasHistory: false,
    logo: {
      href: "/assets/operators/cars-hangard.png",
      size: [283, 142],
    },
    issues: [],
  },
  {
    id: "TWISTO",
    name: "Twisto (Caen)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/twisto.svg",
      size: [600, 228],
    },
    issues: [],
  },
  {
    id: "LIA",
    name: "LiA (Le Havre)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/lia.svg",
      size: [120, 88],
    },
    issues: [],
  },
  {
    id: "CAPCOT",
    name: "Cap Cotentin (Cherbourg-en-Cotentin)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/capcotentin.svg",
      size: [100, 100],
    },
    issues: [],
  },
  {
    id: "DEEPMOB",
    name: "DeepMob (Dieppe)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/deepmob.svg",
      size: [595, 356],
    },
    issues: [],
  },
  {
    id: "ASTROBUS",
    name: "Astrobus (Lisieux)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/astrobus.svg",
      size: [595, 241],
    },
    issues: [],
  },
  {
    id: "SNGO",
    name: "SNgo! (Vernon-Giverny-Les Andelys)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/sngo.jpg",
      size: [1280, 678],
    },
    issues: [],
  },
  {
    id: "NEVA",
    name: "Néva (Granville)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/neva.png",
      size: [2774, 1244],
    },
    issues: [],
  },
  {
    id: "HOBUS",
    name: "Hobus (Honfleur)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/hobus.png",
      size: [1000, 327],
    },
    issues: [],
  },
  {
    id: "MOCA",
    name: "MOCA (Barentin)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/moca.svg",
      size: [1625, 335],
    },
    issues: [],
  },
  {
    id: "REZOBUS",
    name: "Rezo'Bus (Bolbec-Lillebonne-N.-D-de-Gravenchon)",
    hasHistory: true,
    logo: {
      href: "/assets/operators/rezobus.svg",
      size: [222, 73],
    },
    issues: [],
  },
  {
    id: "LBUS",
    name: "l'Bus (Bernay)",
    hasHistory: false,
    logo: {
      href: "/assets/operators/lbus.png",
      size: [1020, 208],
    },
    issues: [],
  },
];

export default operators;
