import { Network, Route } from "~/@types";

const astrobusRoutes: Route[] = [
  {
    id: "ASTROBUS:zenbus:Line:5131776580124672:LOC",
    name: "1",
    noCartridge: true,
    colors: { background: "#FECA05", text: "#000000" },
    destinations: [
      {
        id: ["FOLLETIERE"],
        name: "Folletière",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "FOLLETIERE" }, { text: "LISIEUX" }],
        },
      },

      {
        id: ["GALOTERIE"],
        autoHide: true,
        name: "Galoterie",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "GALOTERIE" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["GARE SNCF", "LISIEUX SNCF"],
        name: "Gare SNCF",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "GARE SNCF" }, { text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:5089173048393728:LOC",
    name: "2",
    noCartridge: true,
    colors: { background: "#009640", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "Mitterand",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#009640", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "MITTERRAND" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["MITTERRAND VIA CAMP FRANC"],
        autoHide: true,
        name: "Mitterand (via Camp Franc)",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#009640", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: ["MITTERRAND", "VIA CAMP FRANC"] }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["QUEBEC VIA CAMP FRANC"],
        autoHide: true,
        name: "Québec (via Camp Franc)",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#009640", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: ["QUEBEC", "VIA CAMP FRANC"] }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["QUEBEC"],
        name: "Québec",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#009640", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "QUEBEC" }, { text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:4841323284660224:LOC",
    name: "3",
    noCartridge: true,
    colors: { background: "#327BBF", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LISIEUX"],
        name: "Lisieux",
        girouette: {
          routeNumber: { backgroundColor: "#327BBF", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "LISIEUX" }],
        },
      },
      {
        id: ["LISIEUX PROVIDENCE"],
        autoHide: true,
        name: "Providence",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#327BBF", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "PROVIDENCE" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["VIMOUTIERS"],
        name: "Vimoutiers",
        girouette: {
          routeNumber: { backgroundColor: "#327BBF", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "VIMOUTIERS" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:5182404740251648:LOC",
    name: "4",
    noCartridge: true,
    colors: { background: "#E83279", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LISIEUX"],
        name: "Lisieux",
        girouette: {
          routeNumber: { backgroundColor: "#E83279", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "LISIEUX" }],
        },
      },
      {
        id: ["ST PIERRE SUR DIVES"],
        name: "Saint-Pierre-sur-Dives",
        girouette: {
          routeNumber: { backgroundColor: "#E83279", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "SAINT-PIERRE-SUR-DIVES" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:5118765622624256:LOC",
    name: "5",
    noCartridge: true,
    colors: { background: "#A74E97", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LISIEUX"],
        name: "Lisieux",
        girouette: {
          routeNumber: { backgroundColor: "#A74E97", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "LISIEUX" }],
        },
      },
      {
        id: ["ORBEC"],
        name: "Orbec",
        girouette: {
          routeNumber: { backgroundColor: "#A74E97", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "ORBEC" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:5089804213551104:LOC",
    name: "Ex",
    noCartridge: true,
    colors: { background: "#EA5254", text: "#FFFFFF" },
    destinations: [
      {
        id: ["GARE SNCF"],
        name: "Gare SNCF",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#EA5254", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "GARE SNCF" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["FLEMING"],
        name: "Fleming",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#EA5254", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "FLEMING" }, { text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:5102078626103296:LOC",
    name: "10",
    noCartridge: true,
    colors: { background: "#F7A942", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LES SUEDOISES"],
        name: "Les Suédoises",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#F7A942", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "LES SUEDOISES" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["MITTERRAND"],
        name: "Mitterand",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#F7A942", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "MITTERRAND" }, { text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:5205031542325248:LOC",
    name: "11",
    noCartridge: true,
    colors: { background: "#00AFCB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "Mitterand",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#00AFCB", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "MITTERRAND" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["LES BOSQUETS"],
        name: "Clos Saint-Jacques",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#00AFCB", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ font: "1508C2E1", text: "CLOS SAINT-JACQUES" }, { text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:5151678110105600:LOC",
    name: "12",
    noCartridge: true,
    colors: { background: "#94AD23", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "Mitterand",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#94AD23", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "MITTERRAND" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["HENRI DUNANT"],
        autoHide: true,
        name: "Henri Dunant",
        girouette: {
          routeNumber: { backgroundColor: "#94AD23", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "HENRI DUNANT" }],
        },
      },
      {
        id: ["BEUVILLERS"],
        name: "Centre",
        city: "BEUVILLERS",
        girouette: {
          routeNumber: { backgroundColor: "#94AD23", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "BEUVILLERS" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:5126752804274176:LOC",
    name: "13",
    noCartridge: true,
    colors: { background: "#ED6F9B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "Mitterand",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#ED6F9B", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ text: "MITTERRAND" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["WICART"],
        autoHide: true,
        name: "Wicart",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#ED6F9B", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ text: "WICART" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["POMPIDOU"],
        name: "Pompidou",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#ED6F9B", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ text: "POMPIDOU" }, { text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS:zenbus:Line:6325671926169600:LOC",
    name: "14",
    noCartridge: true,
    colors: { background: "#D2A070", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "Mitterand",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#D2A070", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "MITTERRAND" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["ADELINE"],
        autoHide: true,
        name: "Adeline",
        city: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#D2A070", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "ADELINE" }, { text: "LISIEUX" }],
        },
      },
      {
        id: ["ST DESIR"],
        name: "Stade",
        city: "SAINT-DÉSIR",
        girouette: {
          routeNumber: { backgroundColor: "#D2A070", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "STADE" }, { text: "SAINT-DESIR" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "astrobus",
  name: "Astrobus – Lisieux Normandie",
  routes: astrobusRoutes,
  color: "#309b42",
  textColor: "#ffffff",
};

export default network;
