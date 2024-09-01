import { Network, Route } from "~/@types";

const tbmRoutes: Route[] = [
  {
    id: "TBM:59",
    noCartridge: true,
    name: "A",
    colors: { background: "#831F82", text: "#FFFFFF" },
    destinations: [
      {
        id: ["HAILLAN-ROSTAND"],
        name: "Le Haillan Rostand",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#831F82", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1510N2E1-TCAR", text: "HAILLAN ROSTAND" }],
        },
      },
      {
        id: ["AEROPORT"],
        name: "Aéroport",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#831F82", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "AEROPORT" }],
        },
      },
      {
        id: ["LA GARDETTE"],
        name: "La Gardette",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#831F82", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "LA GARDETTE" }],
        },
      },
      {
        id: ["FLOIRAC DRAVEMONT"],
        name: "Floirac Dravemont",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#831F82", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "FLOIRAC DRAVEMONT" }],
        },
      },
    ],
  },
  {
    id: "TBM:60",
    noCartridge: true,
    name: "B",
    colors: { background: "#E50040", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BERGES DE GARONNE"],
        name: "Berges de Garonne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E50040", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1508C2E1", text: "BERGES DE GARONNE" }],
        },
      },
      {
        id: ["BORDEAUX CLAVEAU"],
        name: "Claveau",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E50040", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "CLAVEAU" }],
        },
      },
      {
        id: ["PESSAC CENTRE"],
        name: "Pessac Centre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E50040", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "PESSAC CENTRE" }],
        },
      },
      {
        id: ["FRANCE ALOUETTE"],
        name: "France Alouette",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E50040", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1510N2E1", text: "FRANCE ALOUETTE" }],
        },
      },
    ],
  },
  {
    id: "TBM:61",
    noCartridge: true,
    name: "C",
    colors: { background: "#D35098", text: "#FFFFFF" },
    destinations: [
      {
        id: ["PARC EXPOS-STADE"],
        name: "Parc Expos - Stade",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D35098", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", text: "PARC EXPOS - STADE" }],
        },
      },
      {
        id: ["BLANQUEFORT"],
        name: "Blanquefort",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D35098", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ text: "BLANQUEFORT" }],
        },
      },
      {
        id: ["PYRENEES"],
        name: "Pyrénées",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D35098", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ text: "PYRENEES" }],
        },
      },
      {
        id: ["GARE DE BEGLES"],
        name: "Gare de Bègles",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D35098", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ text: "GARE DE BEGLES" }],
        },
      },
    ],
  },
  {
    id: "TBM:62",
    noCartridge: true,
    name: "D",
    colors: { background: "#9262A3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CARLE VERNET"],
        name: "Carle Vernet",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9262A3", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [{ text: "CARLE VERNET" }],
        },
      },
      {
        id: ["HIPPODROME"],
        name: "Hippodrome",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9262A3", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [{ text: "HIPPODROME" }],
        },
      },
      {
        id: ["CANTINOLLE"],
        name: "Cantinolle",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9262A3", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [{ text: "CANTINOLLE" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "tbm",
  name: "Transports Bordeaux Métropole",
  routes: tbmRoutes,
  color: "#039cd2",
  textColor: "#ffffff",
};

export default network;
