import { Route } from "~/@types";

const mocaRoutes: Route[] = [
  {
    id: "MOCA:1",
    mapOnly: true,
    noCartridge: true,
    name: "1",
    colors: { background: "#745CA8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Barentin"],
        name: "Zone Commerciale du Mesnil Roux",
        city: "BARENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#745CA8", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ font: "1508SUPX", text: "BARENTIN" }, { text: ["ZONE COMMERCIALE", "DU MESNIL ROUX"] }],
        },
      },
      {
        id: ["Pavilly"],
        name: "Rouges Granges",
        city: "PAVILLY",
        girouette: {
          routeNumber: { backgroundColor: "#745CA8", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [
            { font: "1508SUPX", text: "PAVILLY" },
            { font: "1508SUPX", text: "ROUGES GRANGES" },
          ],
        },
      },
    ],
  },
  {
    id: "MOCA:2",
    mapOnly: true,
    noCartridge: true,
    name: "2",
    colors: { background: "#6EC6AE", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Barentin"],
        name: "Zone Commerciale du Mesnil Roux",
        city: "BARENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#6EC6AE", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ font: "1508SUPX", text: "BARENTIN" }, { text: ["ZONE COMMERCIALE", "DU MESNIL ROUX"] }],
        },
      },
      {
        id: ["Villers-Ecalles"],
        name: "Porte de la Vallée",
        city: "VILLERS-ÉCALLES",
        girouette: {
          routeNumber: { backgroundColor: "#6EC6AE", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [
            { font: "1508SUPX", text: "VILLERS-ECALLES" },
            { font: "1508SUPX", text: "PORTE DE LA VALLEE" },
          ],
        },
      },
    ],
  },
];

export default mocaRoutes;
