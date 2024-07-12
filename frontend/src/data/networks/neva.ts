import { Network, Route } from "~/@types";

const nevaRoutes: Route[] = [
  {
    id: "NEVA:zenbus:Line:350210009:LOC",
    name: "1",
    noCartridge: true,
    colors: { background: "#76FF03", text: "#000000" },
    destinations: [
      {
        id: ["Les Cèdres"],
        name: "Les Cèdres",
        city: "YQUELON",
        girouette: {
          routeNumber: { backgroundColor: "#76FF03", textColor: "#000000", outlineColor: "#FFFFFF", text: "1" },
          pages: [{ text: "LES CEDRES" }],
        },
      },
      {
        id: ["Cours Jonville"],
        name: "Cours Jonville",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#76FF03", textColor: "#000000", outlineColor: "#FFFFFF", text: "1" },
          pages: [{ font: "1510N2E1", text: "COURS JONVILLE" }],
        },
      },
    ],
  },
  {
    id: "NEVA:zenbus:Line:348940035:LOC",
    name: "2",
    noCartridge: true,
    colors: { background: "#E91E63", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Haute-Lande"],
        name: "Haute-Lande",
        city: "YQUELON",
        girouette: {
          routeNumber: { backgroundColor: "#E91E63", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "HAUTE-LANDE" }],
        },
      },
      {
        id: ["ZA Croissant"],
        name: "Z.A. Croissant",
        city: "SAINT-PAIR-SUR-MER",
        girouette: {
          routeNumber: { backgroundColor: "#E91E63", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "Z.A. CROISSANT" }],
        },
      },
    ],
  },
  {
    id: "NEVA:zenbus:Line:761900004:LOC",
    name: "3",
    noCartridge: true,
    colors: { background: "#536DFE", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ZA Prétôt"],
        name: "Z.A. Prétôt",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#536DFE", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "Z.A. PRETOT" }],
        },
      },
      {
        id: ["Haute Ville"],
        name: "Haute Ville",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#536DFE", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "HAUTE VILLE" }],
        },
      },
    ],
  },
  {
    id: "NEVA:zenbus:Line:848310001:LOC",
    name: "4",
    noCartridge: true,
    colors: { background: "#FF6D00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ZA Taillais"],
        name: "Z.A. Taillais",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "Z.A. TAILLAIS" }],
        },
      },
      {
        id: ["Collège"],
        alternate: "Collège de la Haye",
        name: "Collège",
        city: "LA HAYE-PESNEL",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "COLLEGE DE LA HAYE" }],
        },
      },
    ],
  },
  {
    id: "NEVA:zenbus:Line:5188685444153344:LOC",
    name: "5",
    noCartridge: true,
    colors: { background: "#FFD600", text: "#000000" },
    destinations: [
      {
        id: ["Mairie"],
        alternate: "Mairie de Carolles",
        name: "Mairie",
        city: "CAROLLES",
        girouette: {
          routeNumber: { backgroundColor: "#FFD600", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ font: "1510N2E1", text: "CAROLLES MAIRIE" }],
        },
      },
      {
        id: ["Gare"],
        alternate: "Gare de Granville",
        name: "Gare",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFD600", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ font: "1510N2E1", text: "GRANVILLE GARE" }],
        },
      },
    ],
  },
  {
    id: "NEVA:zenbus:Line:5140010311352320:LOC",
    name: "6",
    noCartridge: true,
    colors: { background: "#40C4FF", text: "#000000" },
    destinations: [
      {
        id: ["Ancienne Gare"],
        alternate: "Ancienne Gare de Bréhal",
        name: "Ancienne Gare",
        city: "BRÉHAL",
        girouette: {
          routeNumber: { backgroundColor: "#40C4FF", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ font: "1508C2E1", text: "BREHAL ANCIENNE GARE" }],
        },
      },
      {
        id: ["Gare"],
        alternate: "Gare de Granville",
        name: "Gare",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#40C4FF", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ font: "1510N2E1", text: "GRANVILLE GARE" }],
        },
      },
    ],
  },
  {
    id: "NEVA:zenbus:Line:5962875763949568:LOC",
    name: "7",
    noCartridge: true,
    colors: { background: "#388E3C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Square de la Gare"],
        name: "Square de la Gare",
        city: "CÉRENCES",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "SQUARE DE LA GARE" }],
        },
      },
      {
        id: ["Gare"],
        alternate: "Gare de Granville",
        name: "Gare",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1510N2E1", text: "GRANVILLE GARE" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "neva",
  name: "Néva – Granville Terre & Mer",
  routes: nevaRoutes,
  color: "#b1c633",
  textColor: "#000000",
};

export default network;
