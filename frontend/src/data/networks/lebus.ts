import { Network, Route } from "~/@types";

const lebusRoutes: Route[] = [
  {
    id: "LEBUS:BUS",
    routeIds: ["LEBUS:R1", "LEBUS:R2", "LEBUS:R3"],
    noCartridge: true,
    name: "BUS",
    colors: { background: "#f0b848", text: "#000000" },
    destinations: [
      {
        id: ["Boucle des Baquets"],
        autoHide: true,
        name: "Boucle des Baquets",
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
      {
        id: ["Boucle complète"],
        name: "Boucle complète",
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
      {
        id: ["Boucle de Saint-Germain"],
        autoHide: true,
        name: "Boucle de Saint-Germain-Village",
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
