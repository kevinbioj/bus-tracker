import { Route } from "~/@types";

const lebusRoutes: Route[] = [
  {
    id: "LEBUS:1",
    mapOnly: true,
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
          routeNumber: { backgroundColor: "#4e9dcd", textColor: "#ffffff", outlineColor: "#000000", text: "R1" },
          pages: [{ text: ["LE BUS DE PONT-AUDEMER", "BOUCLE DES BAQUETS"] }],
        },
      },
    ],
  },
  {
    id: "LEBUS:2",
    mapOnly: true,
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
          routeNumber: { backgroundColor: "#8db74f", textColor: "#ffffff", outlineColor: "#000000", text: "R2" },
          pages: [{ text: ["LE BUS DE PONT-AUDEMER", "BOUCLE COMPLETE"] }],
        },
      },
    ],
  },
  {
    id: "LEBUS:3",
    mapOnly: true,
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
          routeNumber: { backgroundColor: "#cc483b", textColor: "#ffffff", outlineColor: "#000000", text: "R3" },
          pages: [{ text: ["LE BUS DE PONT-AUDEMER", "BOUCLE DE SAINT-GERMAIN"] }],
        },
      },
    ],
  },
];

export default lebusRoutes;
