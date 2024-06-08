import { Network, Route } from "~/@types";

const ficibusRoutes: Route[] = [
  {
    id: "FICIBUS:ATOUMOD008:Line:L1x2:LOC",
    noCartridge: true,
    name: "1",
    colors: { background: "#179FBA", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Robert Lilly"],
        name: "Robert Lilly",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#179FBA", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "ROBERT LILLY" }],
        },
      },
      {
        id: ["Hopital"],
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
        id: ["Robert Lilly"],
        name: "Robert Lilly",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D89030", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "ROBERT LILLY" }],
        },
      },
      {
        id: ["St Etienne"],
        autoHide: true,
        name: "Saint-Étienne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D89030", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "SAINT-ETIENNE" }],
        },
      },
      {
        id: ["Hopital"],
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
        id: ["St Nicolas"],
        name: "Saint-Nicolas",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#FED024", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "SAINT-NICOLAS" }],
        },
      },
      {
        id: ["Hopital"],
        name: "Hôpital",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#FED024", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "HOPITAL" }],
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
        id: ["Heron Par Flaubert"],
        name: "Héron (par Flaubert)",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E6475D", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [[{ text: "HERON" }, { text: "PAR FLAUBERT" }]],
        },
      },
      {
        id: ["St Etienne"],
        name: "Saint-Étienne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E6475D", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "SAINT-ETIENNE" }],
        },
      },
      {
        id: ["Plage"],
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
        id: ["Cimetiere"],
        name: "Cimetière",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9EC03B", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "CIMETIERE" }],
        },
      },
      {
        id: ["St Etienne"],
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
