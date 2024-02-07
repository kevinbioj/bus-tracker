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
    id: "TNVS",
    name: "Transdev Normandie Val de Seine",
    logo: {
      href: "/assets/operators/transdev-normandie.svg",
      size: [478, 147],
    },
    issues: [],
  },
];

export default operators;
