import { Network, Route } from "~/@types";

const mocaRoutes: Route[] = [
  {
    id: "MOCA:1",
    noCartridge: true,
    name: "1",
    colors: { background: "#745CA8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Barentin"],
        name: "Zone Commerciale du Mesnil Roux",
        city: "BARENTIN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#745CA8", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: ["BARENTIN", "ZC DU MESNIL ROUX"] }],
        },
      },
      {
        id: ["Pavilly"],
        name: "Freckenhorst",
        city: "PAVILLY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#745CA8", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: ["PAVILLY", "FRECKENHORST"] }],
        },
      },
    ],
  },
  {
    id: "MOCA:2",
    noCartridge: true,
    name: "2",
    colors: { background: "#6EC6AE", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Barentin"],
        name: "Zone Commerciale du Mesnil Roux",
        city: "BARENTIN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#6EC6AE", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: ["BARENTIN", "ZC DU MESNIL ROUX"] }],
        },
      },
      {
        id: ["Villers-Ecalles"],
        name: "Porte de la Vallée",
        city: "VILLERS-ÉCALLES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#6EC6AE", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: ["VILLERS-ECALLES", "PORTE DE LA VALLEE"] }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "moca",
  name: "MOCA – Communauté Caux-Austreberthe",
  routes: mocaRoutes,
  color: "#7a5a9e",
  textColor: "#ffffff",
};

export default network;
