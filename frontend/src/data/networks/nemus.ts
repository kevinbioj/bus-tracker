import { Network, Route } from "~/@types";

const nemusRoutes: Route[] = [
  {
    id: "NEMUS:249",
    name: "1",
    noCartridge: true,
    colors: { background: "#1b6ca2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Boucicaut"],
        name: "Boucicaut",
        city: "FLERS",
        girouette: {
          routeNumber: { backgroundColor: "#1b6ca2", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "BOUCICAUT" }],
        },
      },
      {
        id: ["Hôpital Monod"],
        name: "Hôpital Monod",
        city: "FLERS",
        girouette: {
          routeNumber: { backgroundColor: "#1b6ca2", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "HOPITAL MONOD" }],
        },
      },
    ],
  },
  {
    id: "NEMUS:250",
    name: "2",
    noCartridge: true,
    colors: { background: "#F1A339", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Europe"],
        name: "Europe",
        city: "FLERS",
        girouette: {
          routeNumber: { backgroundColor: "#F1A339", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "EUROPE" }],
        },
      },
      {
        id: ["Vallées"],
        name: "Vallées",
        city: "FLERS",
        girouette: {
          routeNumber: { backgroundColor: "#F1A339", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "VALLEES" }],
        },
      },
    ],
  },
  {
    id: "NEMUS:251",
    name: "3",
    noCartridge: true,
    colors: { background: "#1F8843", text: "#FFFFFF" },
    destinations: [
      {
        id: ["La Lande Patry"],
        alternate: "Mairie de la Lande-Patry",
        name: "Mairie",
        city: "LA LANDE-PATRY",
        girouette: {
          routeNumber: { backgroundColor: "#1F8843", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ font: "1510N2E1", text: "LA LANDE-PATRY" }],
        },
      },
      {
        id: ["Saint Georges"],
        name: "Saint-Georges",
        city: "SAINT-GEORGES-DES-GROSEILLIERS",
        girouette: {
          routeNumber: { backgroundColor: "#1F8843", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [[{ text: "SAINT-GEORGES" }, { text: "DES-GROSEILLIERS" }]],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "nemus",
  name: "Némus – Flers Agglo",
  routes: nemusRoutes,
  color: "#7eb641",
  textColor: "#000000",
};

export default network;
