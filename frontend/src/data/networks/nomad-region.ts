import { Route } from "~/@types";

const nomadRegionRoutes: Route[] = [
  {
    id: "NOMAD-216",
    mapOnly: true,
    name: "216",
    colors: { background: "#4A2999", text: "#FAFAFA" },
    destinations: [
      {
        id: ["VERNEUIL D'AVRE ET D'ITON"],
        autoHide: true,
        alternate: "Verneuil d'Avre et d'Iton",
        name: "Gare SNCF",
        city: "VERNEUIL D'AVRE ET D'ITON",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1407SUPX", textSpacing: 1, text: "VERNEUIL D'AVRE ET D'ITON" }],
        },
      },
      {
        id: ["ÉVREUX"],
        autoHide: true,
        alternate: "Évreux",
        name: "Gare Routière",
        city: "ÉVREUX",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["ROUEN"],
        autoHide: true,
        alternate: "Rouen",
        name: "Gare Routière",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["MONT-SAINT-AIGNAN"],
        autoHide: true,
        alternate: "Mont-Saint-Aignan",
        name: "Campus",
        city: "MONT-SAINT-AIGNAN",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "MONT-SAINT-AIGNAN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-228",
    mapOnly: true,
    name: "228",
    colors: { background: "#BA941C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["PONT-AUDEMER"],
        autoHide: true,
        alternate: "Pont-Audemer",
        name: "Gare Routière",
        city: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["BOURG ACHARD"],
        autoHide: true,
        alternate: "Bourg-Achard",
        name: "Pompiers",
        city: "BOURG-ACHARD",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [{ font: "1508SUPX", text: "BOURG-ACHARD" }],
        },
      },
      {
        id: ["ROUEN", "ROUEN"],
        autoHide: true,
        alternate: "Rouen",
        name: "Gare Routière",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
];

export default nomadRegionRoutes;
