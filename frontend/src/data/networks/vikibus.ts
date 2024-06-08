import { Network, Route } from "~/@types";

const vikibusRoutes: Route[] = [
  {
    id: "VIKIBUS:ATOUMOD012:Line:VIKNav1:LOC",
    noCartridge: true,
    name: "1",
    colors: { background: "#7EDE12", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Gare SNCF"],
        name: "Gare SNCF",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#7EDE12", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "GARE SNCF" }],
        },
      },
    ],
  },
  {
    id: "VIKIBUS:ATOUMOD012:Line:VIKNav2:LOC",
    noCartridge: true,
    name: "2",
    colors: { background: "#FBFB00", text: "#000000" },
    destinations: [
      {
        id: ["Gare SNCF"],
        name: "Gare SNCF",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#FBFB00", textColor: "#000000", outlineColor: "#FFFFFF", text: "2" },
          pages: [{ text: "GARE SNCF" }],
        },
      },
      {
        id: ["Collège Camus"],
        name: "Collège Camus",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#FBFB00", textColor: "#000000", outlineColor: "#FFFFFF", text: "2" },
          pages: [{ text: "COLLEGE CAMUS" }],
        },
      },
      {
        id: ["Mairie"],
        name: "Mairie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#FBFB00", textColor: "#000000", outlineColor: "#FFFFFF", text: "2" },
          pages: [{ text: "MAIRIE" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "vikibus",
  name: "Vikibus – Ville d'Yvetot",
  routes: vikibusRoutes,
  color: "#61CE70",
  textColor: "#ffffff",
};

export default network;
