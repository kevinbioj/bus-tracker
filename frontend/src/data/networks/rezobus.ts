import { Network, Route } from "~/@types";

const rezobusRoutes: Route[] = [
  //- Secteur de Bolbec
  {
    id: "REZOBUS:01",
    noCartridge: true,
    name: "1",
    colors: { background: "#ee1d23", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BOLBEC Mairie"],
        alternate: "Mairie de Bolbec",
        name: "Mairie",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee1d23", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [[{ text: "BOLBEC" }, { text: "MAIRIE" }]],
        },
      },
      {
        id: ["BOLBEC Marches Curie"],
        name: "Marches Curie",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee1d23", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [[{ text: "BOLBEC" }, { text: "MARCHES CURIE" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:02",
    noCartridge: true,
    name: "2",
    colors: { background: "#005d9c", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BOLBEC Mairie"],
        alternate: "Mairie de Bolbec",
        name: "Mairie",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005d9c", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [[{ text: "BOLBEC" }, { text: "MAIRIE" }]],
        },
      },
      {
        id: ["BOLBEC Vivier"],
        name: "Vivier",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005d9c", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [[{ text: "BOLBEC" }, { text: "VIVIER" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:03",
    noCartridge: true,
    name: "3",
    colors: { background: "#009f4f", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BOLBEC Mairie"],
        alternate: "Mairie de Bolbec",
        name: "Mairie",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#009f4f", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [[{ text: "BOLBEC" }, { text: "MAIRIE" }]],
        },
      },
      {
        id: ["BOLBEC Henri Fleury"],
        name: "Henri Fleury",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#009f4f", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [[{ text: "BOLBEC" }, { text: "HENRI FLEURY" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:04",
    noCartridge: true,
    name: "4",
    colors: { background: "#f7952e", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BOLBEC Mairie"],
        alternate: "Mairie de Bolbec",
        name: "Mairie",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#f7952e", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [[{ text: "BOLBEC" }, { text: "MAIRIE" }]],
        },
      },
      {
        id: ["BOLBEC Paul Belhache"],
        autoHide: true,
        name: "Paul Belhache",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#f7952e", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [[{ text: "BOLBEC" }, { text: "PAUL BELHACHE" }]],
        },
      },
      {
        id: ["BOLBEC Val Du Moulin"],
        name: "Val du Moulin",
        city: "BOLBEC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#f7952e", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [[{ text: "BOLBEC" }, { text: "VAL DU MOULIN" }]],
        },
      },
    ],
  },
  //- Secteur de Lillebonne
  {
    id: "REZOBUS:11",
    noCartridge: true,
    name: "11",
    colors: { background: "#ed028c", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LILLEBONNE Rivière du Commerce"],
        name: "Rivière du Commerce",
        city: "LILLEBONNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ed028c", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [[{ text: "LILLEBONNE" }, { text: "RIVIERE DU COMMERCE" }]],
        },
      },
      {
        id: ["LILLEBONNE Puit Maillé"],
        name: "Puits Maillé",
        city: "LILLEBONNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ed028c", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [[{ text: "LILLEBONNE" }, { text: "PUITS MAILLE" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:12",
    noCartridge: true,
    name: "12",
    colors: { background: "#b7d436", text: "#000000" },
    destinations: [
      {
        id: ["LILLEBONNE Rivière du Commerce"],
        name: "Rivière du Commerce",
        city: "LILLEBONNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#b7d436", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [[{ text: "LILLEBONNE" }, { text: "RIVIERE DU COMMERCE" }]],
        },
      },
      {
        id: ["LILLEBONNE Hôpital"],
        alternate: "Hôpital de Lillebonne",
        name: "Hôpital",
        city: "LILLEBONNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#b7d436", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [[{ text: "LILLEBONNE" }, { text: "HOPITAL" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:13",
    noCartridge: true,
    name: "13",
    colors: { background: "#89c2bf", text: "#000000" },
    destinations: [
      {
        id: ["LILLEBONNE Médiathèque"],
        alternate: "Médiathèque de Lillebonne",
        name: "Médiathèque",
        city: "LILLEBONNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#89c2bf", textColor: "#000000", outlineColor: "#FFFFFF", text: "13" },
          pages: [[{ text: "LILLEBONNE" }, { text: "MEDIATHEQUE" }]],
        },
      },
      {
        id: ["LILLEBONNE Tourbière"],
        autoHide: true,
        name: "Tourbière",
        city: "LILLEBONNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#89c2bf", textColor: "#000000", outlineColor: "#FFFFFF", text: "13" },
          pages: [[{ text: "LILLEBONNE" }, { text: "TOURBIERE" }]],
        },
      },
      {
        id: ["LILLEBONNE A l'Eau"],
        name: "À l'eau",
        city: "LILLEBONNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#89c2bf", textColor: "#000000", outlineColor: "#FFFFFF", text: "13" },
          pages: [[{ text: "LILLEBONNE" }, { text: "A L'EAU" }]],
        },
      },
    ],
  },
  //- Secteur de Port-Jérôme-sur-Seine
  {
    id: "REZOBUS:21",
    noCartridge: true,
    name: "21",
    colors: { background: "#808000", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ND GRAVENCHON Sortie Nord"],
        name: "Sortie Nord",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e787b8", textColor: "#FFFFFF", outlineColor: "#000000", text: "21" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "SORTIE NORD" }]],
        },
      },
      {
        id: ["ND GRAVENCHON Hotel de Ville"],
        alternate: "Hôtel de Ville de Notre-Dame",
        name: "Hôtel de Ville",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e787b8", textColor: "#FFFFFF", outlineColor: "#000000", text: "21" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "HOTEL DE VILLE" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:22",
    noCartridge: true,
    name: "22",
    colors: { background: "#0aaabd", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ND GRAVENCHON Hotel de Ville"],
        alternate: "Hôtel de Ville de Notre-Dame",
        name: "Hôtel de Ville",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#0aaabd", textColor: "#FFFFFF", outlineColor: "#000000", text: "22" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "HOTEL DE VILLE" }]],
        },
      },
      {
        id: ["ND GRAVENCHON Conservatoire"],
        name: "Conservatoire",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#0aaabd", textColor: "#FFFFFF", outlineColor: "#000000", text: "22" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "CONSERVATOIRE" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:23",
    noCartridge: true,
    name: "23",
    colors: { background: "#813375", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ND GRAVENCHON Hotel de Ville"],
        alternate: "Hôtel de Ville de Notre-Dame",
        name: "Hôtel de Ville",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#813375", textColor: "#FFFFFF", outlineColor: "#000000", text: "23" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "HOTEL DE VILLE" }]],
        },
      },
      {
        id: ["ND GRAVENCHON Cèdres"],
        name: "Les Cèdres",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#813375", textColor: "#FFFFFF", outlineColor: "#000000", text: "23" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "LES CEDRES" }]],
        },
      },
    ],
  },
  //
  //

  {
    id: "REZOBUS:24",
    noCartridge: true,
    name: "24",
    colors: { background: "#9f824d", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ND GRAVENCHON Cèdres"],
        name: "Bois du Parc",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9f824d", textColor: "#FFFFFF", outlineColor: "#000000", text: "24" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "BOIS DU PARC" }]],
        },
      },
      {
        id: ["ND GRAVENCHON Sortie Nord"],
        autoHide: true,
        name: "Sortie Nord",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9f824d", textColor: "#FFFFFF", outlineColor: "#000000", text: "24" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "SORTIE NORD" }]],
        },
      },
      {
        id: ["ND GRAVENCHON Hotel de Ville"],
        alternate: "Hôtel de Ville de Port-Jérôme",
        name: "Hôtel de Ville",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#9f824d", textColor: "#FFFFFF", outlineColor: "#000000", text: "24" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "HOTEL DE VILLE" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:25",
    noCartridge: true,
    name: "25",
    colors: { background: "#0099d1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ND GRAVENCHON Hotel de Ville"],
        alternate: "Hôtel de Ville de Port-Jérôme",
        name: "Hôtel de Ville",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#0099d1", textColor: "#FFFFFF", outlineColor: "#000000", text: "25" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "HOTEL DE VILLE" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:26",
    noCartridge: true,
    name: "26",
    colors: { background: "#507822", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ND GRAVENCHON Hotel de Ville"],
        alternate: "Hôtel de Ville de Port-Jérôme",
        name: "Hôtel de Ville",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#507822", textColor: "#FFFFFF", outlineColor: "#000000", text: "26" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "HOTEL DE VILLE" }]],
        },
      },
      {
        id: ["ND GRAVENCHON Conservatoire"],
        name: "Conservatoire",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#507822", textColor: "#FFFFFF", outlineColor: "#000000", text: "26" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "CONSERVATOIRE" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:27",
    noCartridge: true,
    name: "27",
    colors: { background: "#b46533", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ND GRAVENCHON Hotel de Ville"],
        alternate: "Hôtel de Ville de Port-Jérôme",
        name: "Hôtel de Ville",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#b46533", textColor: "#FFFFFF", outlineColor: "#000000", text: "27" },
          pages: [[{ text: "PORT-JEROME-SUR-SEINE" }, { text: "HOTEL DE VILLE" }]],
        },
      },
    ],
  },
  {
    id: "REZOBUS:28",
    noCartridge: true,
    name: "28",
    colors: { background: "#292780", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ND GRAVENCHON Conservatoire"],
        name: "Conservatoire",
        city: "PORT-JÉRÔME-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#292780", textColor: "#FFFFFF", outlineColor: "#000000", text: "28" },
          pages: [
            [{ text: "PORT-JEROME-SUR-SEINE" }, { text: "CONSERVATOIRE" }],
            [{ text: "CONSERVATOIRE" }, { text: "via TRIQUERVILLE" }],
            [{ text: "CONSERVATOIRE" }, { text: "TOUFFREVILLE-LA-CABLE" }],
            [{ text: "CONSERVATOIRE" }, { text: "ET AUBERVILLE-LA-CPGNE" }],
          ],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "rezobus",
  name: "Rezo'Bus – Caux-Seine Agglo",
  routes: rezobusRoutes,
  color: "#de005d",
  textColor: "#ffffff",
};

export default network;
