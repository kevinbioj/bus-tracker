import { Operator } from "~/@types";

const operators: Operator[] = [
  {
    id: "TCAR",
    name: "Transdev Rouen",
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
    logo: {
      href: "/assets/operators/tae.svg",
      size: [3367, 1064],
    },
    issues: [],
  },
  {
    id: "TNI",
    name: "Transdev Normandie Interurbain",
    logo: {
      href: "/assets/operators/transdev-normandie.svg",
      size: [478, 147],
    },
    issues: [],
  },
  {
    id: "HANGA",
    name: "Cars Hangard",
    logo: {
      href: "/assets/operators/cars-hangard.png",
      size: [283, 142],
    },
    issues: [],
  },
  {
    id: "LNR",
    name: "NOMAD - Transdev Normandie Interurbain",
    logo: {
      href: "/assets/operators/nomad.svg",
      size: [512, 144],
    },
    issues: [],
  },
  {
    id: "TNVS",
    name: "SNgo! - Transdev Normandie Val de Seine",
    logo: {
      href: "/assets/operators/sngo.jpg",
      size: [1280, 678],
    },
    issues: [],
  },
  {
    id: "TUD",
    name: "DeepMob - Transdev Urbain Dieppe",
    logo: {
      href: "/assets/operators/deepmob.svg",
      size: [595, 356],
    },
    issues: [],
  },
  {
    id: "CAPCOT",
    name: "Cap Cotentin - Transdev Cotentin",
    logo: {
      href: "/assets/operators/capcotentin.svg",
      size: [100, 100],
    },
    issues: [],
  },
];

export default operators;
