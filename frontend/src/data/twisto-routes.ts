import { Route } from "~/@types";

const twistoRoutes: Route[] = [
  {
    id: "TWISTO-T2",
    name: "T2",
    colors: { background: "#E73633", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Caen Campus 2"],
        name: "Campus 2",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#E73633", textColor: "#FFFFFF", outlineColor: "#000000", text: "T2" },
          pages: [{ text: "CAEN CAMPUS 2" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-3",
    name: "3",
    colors: { background: "#C6CE0E", text: "#000000" },
    destinations: [
      {
        id: ["Carpiquet Aéroport"],
        name: "Aéroport",
        city: "CARPIQUET",
        girouette: {
          routeNumber: { backgroundColor: "#C6CE0E", textColor: "#000000", text: "3" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "CARPIQUET AEROPORT" }],
        },
      },
    ],
  },
];

export default twistoRoutes;
