import { Network, Route } from "~/@types";

const bybusRoutes: Route[] = [
  {
    id: "BYBUS:L1",
    noCartridge: true,
    name: "1",
    colors: { background: "#2CC7E2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["1- Gare", "Gare"],
        alternate: "Gare de Bayeux",
        name: "Gare",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#2CC7E2", textColor: "#FFFFFF", text: "1", outlineColor: "#000000" },
          pages: [{ font: "1508SUPX", text: "GARE DE BAYEUX" }],
        },
      },
      {
        id: ["1- Gare (Express)"],
        autoHide: true,
        alternate: "Gare de Bayeux (Express)",
        name: "Gare (Express)",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#2CC7E2", textColor: "#FFFFFF", text: "1", outlineColor: "#000000" },
          pages: [{ text: ["GARE DE BAYEUX", "EXPRESS"] }],
        },
      },
      {
        id: ["1- Gare (via Supermarché)"],
        autoHide: true,
        alternate: "Gare de Bayeux (via Supermarché)",
        name: "Gare (via Supermarché)",
        city: "BAEYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#2CC7E2", textColor: "#FFFFFF", text: "1", outlineColor: "#000000" },
          pages: [{ text: ["GARE DE BAYEUX", "VIA SUPERMARCHE"] }],
        },
      },
      {
        id: ["1- Reine Mathilde (Via Supermarché)"],
        autoHide: true,
        name: "Reine Mathilde (via Supermarché)",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#2CC7E2", textColor: "#FFFFFF", text: "1", outlineColor: "#000000" },
          pages: [{ text: ["REINE MATHILDE", "VIA SUPERMARCHE"] }],
        },
      },
      {
        id: ["1- Reine Mathilde (Express)"],
        autoHide: true,
        name: "Reine Mathilde (Express)",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#2CC7E2", textColor: "#FFFFFF", text: "1", outlineColor: "#000000" },
          pages: [{ text: ["REINE MATHILDE", "EXPRESS"] }],
        },
      },
      {
        id: ["1- Reine Mathilde (via Blériot)"],
        name: "Reine Mathilde",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#2CC7E2", textColor: "#FFFFFF", text: "1", outlineColor: "#000000" },
          pages: [{ text: ["REINE MATHILDE", "VIA BLERIOT"] }],
        },
      },
    ],
  },
  {
    id: "BYBUS:L2",
    noCartridge: true,
    name: "2",
    colors: { background: "#F1AAEB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["2- Gare"],
        alternate: "Gare de Bayeux",
        name: "Gare",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F1AAEB", textColor: "#FFFFFF", text: "2", outlineColor: "#000000" },
          pages: [{ font: "1508SUPX", text: "GARE DE BAYEUX" }],
        },
      },
      {
        id: ["2- Gare (Express)"],
        autoHide: true,
        alternate: "Gare de Bayeux (Express)",
        name: "Gare (Express)",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F1AAEB", textColor: "#FFFFFF", text: "2", outlineColor: "#000000" },
          pages: [{ text: ["GARE DE BAYEUX", "EXPRESS"] }],
        },
      },
      {
        id: ["2- Rue de la Fée (Express)"],
        autoHide: true,
        name: "Rue de la Fée (Express)",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F1AAEB", textColor: "#FFFFFF", text: "2", outlineColor: "#000000" },
          pages: [{ text: ["RUE DE LA FEE", "EXPRESS"] }],
        },
      },
      {
        id: ["2- Rue de la fée"],
        name: "Rue de la Fée",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F1AAEB", textColor: "#FFFFFF", text: "2", outlineColor: "#000000" },
          pages: [{ font: "1508SUPX", text: "RUE DE LA FEE" }],
        },
      },
    ],
  },
  {
    id: "BYBUS:L3",
    noCartridge: true,
    name: "3",
    colors: { background: "#91C68B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["3- Rue Costils (Express)"],
        name: "Rue Costils (Express)",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#91C68B", textColor: "#FFFFFF", text: "3", outlineColor: "#000000" },
          pages: [{ text: ["RUE COSTILS", "EXPRESS"] }],
        },
      },
      {
        id: ["3- Conquérant (Via Médiathèque)"],
        autoHide: true,
        name: "Conquérant (via Médiathèque)",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#91C68B", textColor: "#FFFFFF", text: "3", outlineColor: "#000000" },
          pages: [{ text: ["CONQUERANT", "VIA MEDIATHEQUE"] }],
        },
      },
      {
        id: ["3- Gare"],
        autoHide: true,
        alternate: "Gare de Bayeux",
        name: "Gare",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#91C68B", textColor: "#FFFFFF", text: "3", outlineColor: "#000000" },
          pages: [{ font: "1508SUPX", text: "GARE DE BAYEUX" }],
        },
      },
      {
        id: ["3- Saint Patrice"],
        autoHide: true,
        name: "Saint-Patrice",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#91C68B", textColor: "#FFFFFF", text: "3", outlineColor: "#000000" },
          pages: [{ font: "1508SUPX", text: "SAINT-PATRICE" }],
        },
      },
      {
        id: ["3- Arcisse de Caumont  (Express)"],
        autoHide: true,
        name: "Arcisse de Caumont (Express)",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#91C68B", textColor: "#FFFFFF", text: "3", outlineColor: "#000000" },
          pages: [{ text: ["ARCISSE DE CAUMONT", "EXPRESS"] }],
        },
      },
      {
        id: ["3- Arcisse de Caumont"],
        name: "Arcisse de Caumont",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#91C68B", textColor: "#FFFFFF", text: "3", outlineColor: "#000000" },
          pages: [{ font: "1508SUPX", text: "ARCISSE DE CAUMONT" }],
        },
      },
    ],
  },
  {
    id: "BYBUS:L4",
    noCartridge: true,
    name: "4",
    colors: { background: "#f4ff10", text: "#000000" },
    destinations: [
      {
        id: ["4- Reine Mathilde"],
        name: "Reine Mathilde",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#f4ff10", textColor: "#000000", text: "4" },
          pages: [{ font: "1508SUPX", text: "REINE MATHILDE" }],
        },
      },
      {
        id: ["4-Gare"],
        alternate: "Gare de Bayeux",
        name: "Gare",
        city: "BAYEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#f4ff10", textColor: "#000000", text: "4" },
          pages: [{ font: "1508SUPX", text: "GARE DE BAYEUX" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "bybus",
  name: "Bybus – Bayeux",
  routes: bybusRoutes,
  color: "#760b5a",
  textColor: "#ffffff",
};

export default network;
