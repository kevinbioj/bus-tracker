import { Network, Route } from "~/@types";

const lebusRoutes: Route[] = [
  {
    id: "LEBUS:1",
    noCartridge: true,
    name: "1",
    colors: { background: "#4e9dcd", text: "#ffffff" },
    destinations: [
      {
        id: ["Manneville-sur-Risle - Pont-audemer : Place V. Hugo"],
        name: "Place Victor Hugo – Boucle des Baquets",
        city: "PONT-AUDEMER",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#f0b848",
            textColor: "#000000",
            spacing: 1,
            font: "1510N2E1",
            text: "BUS",
          },
          pages: [[{ text: "LE BUS DE PONT-AUDEMER" }, { text: "BOUCLE DES BAQUETS" }]],
        },
      },
    ],
  },
  {
    id: "LEBUS:2",
    noCartridge: true,
    name: "2",
    colors: { background: "#8db74f", text: "#ffffff" },
    destinations: [
      {
        id: ["Manneville-sur-Risle - Pont-audemer : Place V. Hugo"],
        name: "Place Victor Hugo – Boucle complète",
        city: "PONT-AUDEMER",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#f0b848",
            textColor: "#000000",
            spacing: 1,
            font: "1510N2E1",
            text: "BUS",
          },
          pages: [[{ text: "LE BUS DE PONT-AUDEMER" }, { text: "BOUCLE COMPLETE" }]],
        },
      },
    ],
  },
  {
    id: "LEBUS:3",
    noCartridge: true,
    name: "3",
    colors: { background: "#cc483b", text: "#ffffff" },
    destinations: [
      {
        id: ["Manneville-sur-Risle - Pont-audemer : Place V. Hugo"],
        name: "Place Victor Hugo – Boucle de Saint-Germain-Village",
        city: "PONT-AUDEMER",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#f0b848",
            textColor: "#000000",
            spacing: 1,
            font: "1510N2E1",
            text: "BUS",
          },
          pages: [[{ text: "LE BUS DE PONT-AUDEMER" }, { text: "BOUCLE DE SAINT-GERMAIN" }]],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "lebus",
  name: "Le Bus – Pont-Audemer Val de Risle",
  routes: lebusRoutes,
  color: "#f0b848",
  textColor: "#000000",
};

export default network;
