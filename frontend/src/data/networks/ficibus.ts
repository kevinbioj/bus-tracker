import { Network, Route } from "~/@types";

const ficibusRoutes: Route[] = [
  {
    id: "FICIBUS:ATOUMOD008:Line:L1x2:LOC",
    routeIds: ["FICIBUS:ATOUMOD008:Line:L1x2:LOC", "FICIBUS:ATOUMOD008:Line:L1x1:LOC"],
    noCartridge: true,
    name: "1",
    colors: { background: "#179FBA", text: "#FFFFFF" },
    destinations: [
      {
        id: ["1 R.LILLY"],
        name: "Robert Lilly",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#179FBA", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "ROBERT LILLY" }],
        },
      },
      {
        id: ["1 HOPITAL"],
        name: "Hôpital",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#179FBA", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "HOPITAL" }],
        },
      },
    ],
  },
  {
    id: "FICIBUS:ATOUMOD008:Line:L2x2:LOC",
    noCartridge: true,
    name: "2",
    colors: { background: "#D89030", text: "#FFFFFF" },
    destinations: [
      {
        id: ["2 R.LILLY"],
        name: "Robert Lilly",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D89030", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "ROBERT LILLY" }],
        },
      },
      {
        id: ["2 ST ETIENNE"],
        autoHide: true,
        name: "Saint-Étienne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D89030", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "SAINT-ETIENNE" }],
        },
      },
      {
        id: ["2 HOPITAL"],
        name: "Hôpital",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D89030", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "HOPITAL" }],
        },
      },
    ],
  },
  {
    id: "FICIBUS:ATOUMOD008:Line:L3x3:LOC",
    noCartridge: true,
    name: "3",
    colors: { background: "#FED024", text: "#000000" },
    destinations: [
      {
        id: ["3 ST NICOLAS"],
        name: "Saint-Nicolas",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#FED024", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "SAINT-NICOLAS" }],
        },
      },
      {
        id: ["3 HOPITAL"],
        name: "Hôpital",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#FED024", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "HOPITAL" }],
        },
      },
      {
        id: ["3 HOPITAL PAR QUAI DES PILOTES"],
        autoHide: true,
        name: "Hôpital (par Quai des Pilotes)",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#FED024", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [[{ text: "HOPITAL" }, { text: "PAR QUAI DES PILOTES" }]],
        },
      },
    ],
  },
  {
    id: "FICIBUS:ATOUMOD008:Line:L4x21:LOC",
    noCartridge: true,
    name: "4",
    colors: { background: "#E6475D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LE HERON PAR FLAUBERT"],
        autoHide: true,
        name: "Le Héron (par Flaubert)",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E6475D", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [[{ text: "LE HERON" }, { text: "PAR FLAUBERT" }]],
        },
      },
      {
        id: ["Fécamp - Le Héron"],
        name: "Le Héron",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E6475D", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [[{ text: "LE HERON" }, { text: "PAR FLAUBERT" }]],
        },
      },
      {
        id: ["4 ST ETIENNE"],
        name: "Saint-Étienne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E6475D", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "SAINT-ETIENNE" }],
        },
      },
      {
        id: ["4 PLAGE"],
        autoHide: true,
        name: "Plage",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E6475D", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "PLAGE" }],
        },
      },
    ],
  },
  {
    id: "FICIBUS:ATOUMOD008:Line:L5x21:LOC",
    noCartridge: true,
    name: "5",
    colors: { background: "#9EC03B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["5 CIMETIERE"],
        name: "Cimetière",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9EC03B", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "CIMETIERE" }],
        },
      },
      {
        id: ["5 ST ETIENNE"],
        name: "Saint-Étienne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9EC03B", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "SAINT-ETIENNE" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "ficibus",
  name: "Ficibus – Fécamp Caux Littoral",
  routes: ficibusRoutes,
  color: "#252d80",
  textColor: "#ffffff",
};

export default network;
