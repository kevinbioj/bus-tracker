import { Network, Route } from "~/@types";

const deepMobRoutes: Route[] = [
  {
    id: "DEEPMOB:1",
    name: "1",
    colors: { background: "#E2001A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Clinique Mégival"],
        name: "Clinique Mégival",
        city: "SAINT-AUBIN-SUR-SCIE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E2001A", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ font: "1510N2E1", text: "CLINIQUE MEGIVAL" }],
        },
      },
      {
        id: ["Caravelle"],
        name: "Caravelle",
        city: "DIEPPE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E2001A", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "CARAVELLE" }],
        },
      },
    ],
  },
  {
    id: "DEEPMOB:2",
    name: "2",
    colors: { background: "#0077A9", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Beau Soleil"],
        name: "Beau Soleil",
        city: "DIEPPE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#0077A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "BEAU SOLEIL" }],
        },
      },
      {
        id: ["Val Druel"],
        name: "Val Druel",
        city: "DIEPPE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#0077A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "VAL DRUEL" }],
        },
      },
    ],
  },
  {
    id: "DEEPMOB:3",
    name: "3",
    colors: { background: "#7AB51D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Edf-Gdf"],
        name: "EDF - GDF",
        city: "DIEPPE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#7AB51D", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "EDF - GDF" }],
        },
      },
      {
        id: ["Pont Ango"],
        name: "Pont Ango",
        city: "DIEPPE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#7AB51D", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "PONT ANGO" }],
        },
      },
    ],
  },
  {
    id: "DEEPMOB:97",
    name: "N",
    colors: { background: "#DEDC1E", text: "#000000" },
    destinations: [
      {
        id: ["Gare SNCF"],
        name: "Navette centre-ville",
        city: "DIEPPE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#DEDC1E", textColor: "#000000", outlineColor: "#FFFFFF", text: "N" },
          pages: [[{ text: "NAVETTE CENTRE-VILLE" }, { text: "GARE SNCF" }]],
        },
      },
    ],
  },
  {
    id: "DEEPMOB:14",
    name: "14",
    colors: { background: "#87856D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Beau Soleil"],
        name: "Beau Soleil",
        city: "DIEPPE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#87856D", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "BEAU SOLEIL" }],
        },
      },
      {
        id: ["Val Druel"],
        name: "Val Druel",
        city: "DIEPPE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#87856D", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "VAL DRUEL" }],
        },
      },
    ],
  },
  {
    id: "DEEPMOB:500",
    name: "500",
    noCartridge: true,
    colors: { background: "#00B1D5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Braque"],
        autoHide: true,
        name: "Collège Braque",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#00B1D5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "500",
          },
          pages: [{ font: "1508SUPX", text: "COLLEGE BRAQUE" }],
        },
      },
    ],
  },
  {
    id: "DEEPMOB:700",
    name: "700",
    noCartridge: true,
    colors: { background: "#00B1D5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Thibermont"],
        autoHide: true,
        name: "Thibermont",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#00B1D5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "700",
          },
          pages: [{ font: "1508SUPX", text: "THIBERMONT" }],
        },
      },
    ],
  },
  {
    id: "DEEPMOB:900",
    name: "900",
    noCartridge: true,
    colors: { background: "#00B1D5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Lycée du Golf"],
        autoHide: true,
        name: "Lycée du Golf",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#00B1D5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "900",
          },
          pages: [{ font: "1508SUPX", text: "LYCEE DU GOLF" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "deepmob",
  name: "DeepMob – Dieppe Maritime",
  routes: deepMobRoutes,
  color: "#00a6d0",
  textColor: "#ffffff",
};

export default network;
