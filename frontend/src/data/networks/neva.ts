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
        id: ["Haute-Lande (1)"],
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
        id: ["ZA Prétôt (2)"],
        name: "Z.A. Prétôt",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#536DFE", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "Z.A. PRETOT" }],
        },
      },
      {
        id: ["Haute-Lande (1)"],
        name: "Haute-Lande",
        city: "GRANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#536DFE", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "HAUTE-LANDE" }],
        },
      },
    ],
  },
  {
    id: "NEVA:zenbus:Line:848310001:LOC",
    name: "4",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#FF6D00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ZA Prétôt (2)"],
        name: "ZA Prétôt (2)",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "Z.A. PRETOT" }],
        },
      },
      {
        id: ["CÉRENCES - Square de la Gare"],
        name: "CÉRENCES - Square de la Gare",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "CÉRENCES" }, { font: "1508C2E1", spacing: 3, text: "SQUARE DE LA GARE" }],
        },
      },
      {
        id: ["Hauteville (2)"],
        name: "Hauteville (2)",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "HAUTEVILLE" }],
        },
      },
      {
        id: ["Haute-Lande (1)"],
        name: "Haute-Lande (1)",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "HAUTE-LANDE" }],
        },
      },
      {
        id: ["Les Cèdres"],
        name: "Les Cèdres",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "LES CEDRES" }],
        },
      },
      {
        id: ["Cours Jonville"],
        name: "Cours Jonville",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ font: "1510N2E1", text: "COURS JONVILLE" }],
        },
      },
      {
        id: ["ZA Croissant"],
        name: "ZA Croissant",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "Z.A. CROISSANT" }],
        },
      },
      {
        id: ["Granville - ZA TAILLAIS"],
        name: "Granville - ZA TAILLAIS",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "Z.A. TAILLAIS" }],
        },
      },
      {
        id: ["La Haye-Pesnel - COLLEGE"],
        name: "La Haye-Pesnel - COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [[{ text: "LA HAYE-PESNEL" }, { text: "COLLEGE" }]],
        },
      },
      {
        id: ["GRANVILLE - Gare"],
        name: "GRANVILLE - Gare",
        girouette: {
          routeNumber: { backgroundColor: "#FF6D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ font: "1510N2E1", text: "GRANVILLE GARE" }],
        },
      },
    ],
  },
  {
    id: "NEVA:zenbus:Line:5962875763949568:LOC",
    name: "7",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#388E3C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ZA Prétôt (2)"],
        name: "ZA Prétôt (2)",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "Z.A. PRETOT" }],
        },
      },
      {
        id: ["CÉRENCES - Square de la Gare"],
        name: "CÉRENCES - Square de la Gare",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "CÉRENCES" }, { font: "1508C2E1", spacing: 3, text: "SQUARE DE LA GARE" }],
        },
      },
      {
        id: ["Hauteville (2)"],
        name: "Hauteville (2)",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "HAUTEVILLE" }],
        },
      },
      {
        id: ["Haute-Lande (1)"],
        name: "Haute-Lande (1)",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "HAUTE-LANDE" }],
        },
      },
      {
        id: ["Les Cèdres"],
        name: "Les Cèdres",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "LES CEDRES" }],
        },
      },
      {
        id: ["Cours Jonville"],
        name: "Cours Jonville",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1510N2E1", text: "COURS JONVILLE" }],
        },
      },
      {
        id: ["ZA Croissant"],
        name: "ZA Croissant",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "Z.A. CROISSANT" }],
        },
      },
      {
        id: ["Granville - ZA TAILLAIS"],
        name: "Granville - ZA TAILLAIS",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "Z.A. TAILLAIS" }],
        },
      },
      {
        id: ["La Haye-Pesnel - COLLEGE"],
        name: "La Haye-Pesnel - COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#388E3C", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [[{ text: "LA HAYE-PESNEL" }, { text: "COLLEGE" }]],
        },
      },
      {
        id: ["GRANVILLE - Gare"],
        name: "GRANVILLE - Gare",
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
