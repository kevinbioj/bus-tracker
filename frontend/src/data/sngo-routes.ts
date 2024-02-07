import { Route } from "~/@types";

const sngoRoutes: Route[] = [
  {
    id: "SNGO-21",
    mapOnly: true,
    name: "1",
    colors: { background: "#330613", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "SNGO-22",
    mapOnly: true,
    name: "2",
    colors: { background: "#76B82A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNON Les Douers"],
        name: "Les Douers",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#76B82A", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "VERNON" }, { text: "LES DOUERS" }],
        },
      },
    ],
  },
  {
    id: "SNGO-23",
    mapOnly: true,
    name: "3",
    colors: { background: "#FFDD00", text: "#000000" },
    destinations: [
      {
        id: ["VERNON L. Damasse"],
        name: "Louis Damasse",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#000000", text: "3" },
          pages: [{ text: "VERNON" }, { text: "LOUIS DAMASSE" }],
        },
      },
    ],
  },
  {
    id: "SNGO-24",
    mapOnly: true,
    name: "4",
    colors: { background: "#00B1EB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNON Corvette"],
        name: "Corvette",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#00B1EB", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "VERNON" }, { text: "CORVETTE" }],
        },
      },
    ],
  },
  {
    id: "SNGO-25",
    mapOnly: true,
    name: "5",
    colors: { background: "#164194", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SAINT MARCEL 11 Novembre"],
        name: "11 Novembre",
        city: "SAINT-MARCEL",
        girouette: {
          routeNumber: { backgroundColor: "#164194", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "SAINT-MARCEL" }, { text: "11 NOVEMBRE" }],
        },
      },
    ],
  },
  {
    id: "SNGO-26",
    mapOnly: true,
    name: "6",
    colors: { background: "#EA619F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SAINT-MARCEL Cornouillères"],
        name: "Cornouillères",
        city: "SAINT-MARCEL",
        girouette: {
          routeNumber: { backgroundColor: "#EA619F", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "SAINT-MARCEL" }, { text: "CORNOUILLERES" }],
        },
      },
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#EA619F", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
        },
      },
    ],
  },
  {
    id: "SNGO-38",
    mapOnly: true,
    name: "8A",
    colors: { background: "#8C663A", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "SNGO-48",
    mapOnly: true,
    name: "8B",
    colors: { background: "#CDCC0B", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "SNGO-29",
    mapOnly: true,
    name: "9",
    colors: { background: "#7F5DA4", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "SNGO-10",
    mapOnly: true,
    name: "10",
    colors: { background: "#EF7D00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ECOS Place de l'Eglise"],
        name: "Place de l'Eglise",
        city: "ECOS",
        girouette: {
          routeNumber: { backgroundColor: "#EF7D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "ECOS" }, { font: "1510N2E1", textSpacing: 1, text: "PLACE DE L'EGLISE" }],
        },
      },
    ],
  },
  {
    id: "SNGO-31",
    mapOnly: true,
    name: "11",
    colors: { background: "#252B5A", text: "#FFFFFF" },
    destinations: [],
  },
];

export default sngoRoutes;
