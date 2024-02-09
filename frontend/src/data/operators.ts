import { Operator } from "~/@types";

const operators: Operator[] = [
  {
    id: "TCAR",
    name: "Transdev Rouen",
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
    name: "Régie des Transports urbains de l'Agglomération Elbeuvienne",
    hasHistory: true,
    logo: {
      href: "/assets/operators/tae.svg",
      size: [3367, 1064],
    },
    issues: [],
  },
  {
    id: "TNI",
    name: "Transdev Normandie Interurbain",
    hasHistory: true,
    logo: {
      href: "/assets/operators/transdev-normandie.svg",
      size: [478, 147],
    },
    issues: [],
  },
  {
    id: "HANGA",
    name: "Cars Hangard",
    hasHistory: false,
    logo: {
      href: "/assets/operators/cars-hangard.png",
      size: [283, 142],
    },
    issues: [],
  },
  {
    id: "LNR",
    name: "NOMAD - Transdev Normandie Interurbain",
    hasHistory: true,
    logo: {
      href: "/assets/operators/nomad.svg",
      size: [512, 144],
    },
    issues: [],
  },
  {
    id: "TNVS",
    name: "SNgo! - Transdev Normandie Val de Seine",
    hasHistory: true,
    logo: {
      href: "/assets/operators/sngo.jpg",
      size: [1280, 678],
    },
    issues: [],
  },
  {
    id: "TUD",
    name: "DeepMob - Transdev Urbain Dieppe",
    hasHistory: true,
    logo: {
      href: "/assets/operators/deepmob.svg",
      size: [595, 356],
    },
    issues: [],
  },
  {
    id: "CAPCOT",
    name: "Cap Cotentin - Transdev Cotentin",
    hasHistory: true,
    logo: {
      href: "/assets/operators/capcotentin.svg",
      size: [100, 100],
    },
    issues: [],
  },
  {
    id: "REZOBUS",
    name: "Rezo'Bus - Transdev Normandie Interurbain",
    hasHistory: true,
    logo: {
      href: "/assets/operators/rezobus.svg",
      size: [222, 73],
    },
    issues: [],
  },
  {
    id: "ASTROBUS",
    name: "Astrobus - Keolis Calvados",
    hasHistory: false,
    logo: {
      href: "/assets/operators/astrobus.svg",
      size: [595, 241],
    },
    issues: [],
  },
  {
    id: "HOBUS",
    name: "Hobus - Keolis Calvados",
    hasHistory: false,
    logo: {
      href: "/assets/operators/hobus.png",
      size: [1000, 327],
    },
    issues: [],
  },
  {
    id: "NEVA",
    name: "Néva - Transdev Normandie Manche",
    hasHistory: false,
    logo: {
      href: "/assets/operators/neva.png",
      size: [2774, 1244],
    },
    issues: [],
  },
  {
    id: "LBUS",
    name: "L'Bus - Keolis Normandie Seine",
    hasHistory: true,
    logo: {
      href: "/assets/operators/lbus.png",
      size: [1020, 208],
    },
    issues: [],
  },
];

export default operators;
