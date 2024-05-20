import { Network, Route } from "~/@types";

const sngoRoutes: Route[] = [
  {
    id: "SNGO:21",
    routeIds: ["SNGO:21", "SNGO:ATOUMOD007:Line:21:LOC"],
    name: "1",
    colors: { background: "#e30613", text: "#ffffff" },
    destinations: [
      {
        id: ["VERNON - République"],
        name: "République",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e30613", textColor: "#ffffff", text: "1", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - Sente du Bon Dieu"],
        autoHide: true,
        name: "Sente du Bon Dieu",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e30613", textColor: "#ffffff", text: "1", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "SENTE DU BON DIEU" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - St Adjutor"],
        autoHide: true,
        name: "Saint-Adjutor",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e30613", textColor: "#ffffff", text: "1", outlineColor: "#000000" },
          pages: [{ text: "SAINT-ADJUTOR" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - Auges"],
        name: "Auges",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e30613", textColor: "#ffffff", text: "1", outlineColor: "#000000" },
          pages: [{ text: "AUGES" }, { text: "VERNON" }],
        },
      },
    ],
  },
  {
    id: "SNGO:22",
    routeIds: ["SNGO:22", "SNGO:ATOUMOD007:Line:22:LOC"],
    name: "2",
    colors: { background: "#76b82a", text: "#ffffff" },
    destinations: [
      {
        id: ["VERNON - Les Douers"],
        name: "Les Douers",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#76b82a", textColor: "#ffffff", text: "2", outlineColor: "#000000" },
          pages: [{ text: "LES DOUERS" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - Blanchères"],
        autoHide: true,
        name: "Blanchères",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#76b82a", textColor: "#ffffff", text: "2", outlineColor: "#000000" },
          pages: [{ text: "BLANCHERES" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - Lycée Dumézil"],
        autoHide: true,
        name: "Lycée Dumézil",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#76b82a", textColor: "#ffffff", text: "2", outlineColor: "#000000" },
          pages: [{ text: "LYCEE DUMEZIL" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - République"],
        name: "République",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#76b82a", textColor: "#ffffff", text: "2", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }, { text: "VERNON" }],
        },
      },
    ],
  },
  {
    id: "SNGO:23",
    routeIds: ["SNGO:23", "SNGO:ATOUMOD007:Line:23:LOC"],
    name: "3",
    colors: { background: "#fd0", text: "#000000" },
    destinations: [
      {
        id: ["VERNON - République"],
        name: "République",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#fd0", textColor: "#000000", text: "3" },
          pages: [{ text: "REPUBLIQUE" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - Clermont"],
        autoHide: true,
        name: "Clermont",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#fd0", textColor: "#000000", text: "3" },
          pages: [{ text: "CLERMONT" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - L. Damasse"],
        name: "Louis Damasse",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#fd0", textColor: "#000000", text: "3" },
          pages: [{ text: "LOUIS DAMASSE" }, { text: "VERNON" }],
        },
      },
    ],
  },
  {
    id: "SNGO:24",
    routeIds: ["SNGO:24", "SNGO:ATOUMOD007:Line:24:LOC"],
    name: "4",
    colors: { background: "#00b1eb", text: "#ffffff" },
    destinations: [
      {
        id: ["VERNON - République"],
        name: "République",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#00b1eb", textColor: "#ffffff", text: "4", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - Corvette"],
        name: "Corvette",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#00b1eb", textColor: "#ffffff", text: "4", outlineColor: "#000000" },
          pages: [{ text: "CORVETTE" }, { text: "VERNON" }],
        },
      },
    ],
  },
  {
    id: "SNGO:25",
    routeIds: ["SNGO:25", "SNGO:ATOUMOD007:Line:25:LOC"],
    name: "5",
    colors: { background: "#164194", text: "#ffffff" },
    destinations: [
      {
        id: ["VERNON - République"],
        name: "République",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#164194", textColor: "#ffffff", text: "5", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }, { text: "VERNON" }],
        },
      },
      {
        id: ["ST MARCEL - 11 Novembre"],
        name: "11 Novembre",
        city: "SAINT-MARCEL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#164194", textColor: "#ffffff", text: "5", outlineColor: "#000000" },
          pages: [{ text: "11 NOVEMBRE" }, { text: "SAINT-MARCEL" }],
        },
      },
    ],
  },
  {
    id: "SNGO:26",
    routeIds: ["SNGO:26", "SNGO:ATOUMOD007:Line:26:LOC"],
    name: "6",
    colors: { background: "#ea619f", text: "#ffffff" },
    destinations: [
      {
        id: ["VERNON - République"],
        name: "République",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ea619f", textColor: "#ffffff", text: "6", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }, { text: "VERNON" }],
        },
      },
      {
        id: ["ST MARCEL - Cornouillères"],
        name: "Cornouillères",
        city: "SAINT-MARCEL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ea619f", textColor: "#ffffff", text: "6", outlineColor: "#000000" },
          pages: [{ text: "CORNOUILLERES" }, { text: "SAINT-MARCEL" }],
        },
      },
    ],
  },
  {
    id: "SNGO:38",
    routeIds: ["SNGO:38", "SNGO:ATOUMOD007:Line:38:LOC"],
    name: "8A",
    colors: { background: "#8b663a", text: "#ffffff" },
    destinations: [
      {
        id: ["LES ANDELYS - St Jacques"],
        name: "St Jacques",
        city: "LES ANDELYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#8b663a", textColor: "#ffffff", text: "8A", outlineColor: "#000000" },
          pages: [{ text: "SAINT-JACQUES" }, { text: "LES ANDELYS" }],
        },
      },
      {
        id: ["LES ANDELYS - Gare Routière"],
        autoHide: true,
        name: "Gare Routière",
        city: "LES ANDELYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#8b663a", textColor: "#ffffff", text: "8A", outlineColor: "#000000" },
          pages: [{ text: "GARE ROUTIERE" }, { text: "LES ANDELYS" }],
        },
      },
      {
        id: ["LES ANDELYS - Lycée Jean Moulin"],
        name: "Lycée Jean Moulin",
        city: "LES ANDELYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#8b663a", textColor: "#ffffff", text: "8A", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "LYCEE JEAN MOULIN" }, { text: "LES ANDELYS" }],
        },
      },
      {
        id: ["LES ANDELYS - Rivière"],
        autoHide: true,
        name: "Rivière",
        city: "LES ANDELYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#8b663a", textColor: "#ffffff", text: "8A", outlineColor: "#000000" },
          pages: [{ text: "RIVIERE" }, { text: "LES ANDELYS" }],
        },
      },
    ],
  },
  {
    id: "SNGO:48",
    routeIds: ["SNGO:48", "SNGO:ATOUMOD007:Line:48:LOC"],
    name: "8B",
    colors: { background: "#cdcc00", text: "#ffffff" },
    destinations: [
      {
        id: ["LES ANDELYS - Gare Routière"],
        name: "Gare Routière",
        city: "LES ANDELYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#cdcc00", textColor: "#ffffff", text: "8B", outlineColor: "#000000" },
          pages: [{ text: "GARE ROUTIERE" }, { text: "LES ANDELYS" }],
        },
      },
      {
        id: ["LES ANDELYS - Lycée Jean Moulin"],
        autoHide: true,
        name: "Lycée Jean Moulin",
        city: "LES ANDELYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#cdcc00", textColor: "#ffffff", text: "8B", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "LYCEE JEAN MOULIN" }, { text: "LES ANDELYS" }],
        },
      },
      {
        id: ["LES ANDELYS - Feuquerolles"],
        name: "Feuquerolles",
        city: "LES ANDELYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#cdcc00", textColor: "#ffffff", text: "8B", outlineColor: "#000000" },
          pages: [{ text: "FEUQUEROLLES" }, { text: "LES ANDELYS" }],
        },
      },
      {
        id: ["LES ANDELYS - Longuemare"],
        autoHide: true,
        name: "Longuemare",
        city: "LES ANDELYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#cdcc00", textColor: "#ffffff", text: "8B", outlineColor: "#000000" },
          pages: [{ text: "LONGUEMARE" }, { text: "LES ANDELYS" }],
        },
      },
    ],
  },
  {
    id: "SNGO:29",
    routeIds: ["SNGO:29", "SNGO:ATOUMOD007:Line:29:LOC"],
    name: "9",
    colors: { background: "#7f5ca3", text: "#ffffff" },
    destinations: [
      {
        id: ["PACY SUR EURE - Zone Artisanale"],
        name: "Zone Artisanale",
        city: "PACY-SUR-EURE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#7f5ca3", textColor: "#ffffff", text: "9", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "ZONE ARTISANALE" }, { text: "PACY-SUR-EURE" }],
        },
      },
      {
        id: ["MENILLES - Haut Ménilles"],
        name: "Haut Ménilles",
        city: "MÉNILLES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#7f5ca3", textColor: "#ffffff", text: "9", outlineColor: "#000000" },
          pages: [{ text: "HAUT MENILLES" }, { text: "MENILLES" }],
        },
      },
    ],
  },
  {
    id: "SNGO:10",
    routeIds: ["SNGO:10", "SNGO:ATOUMOD007:Line:10:LOC"],
    name: "10",
    colors: { background: "#ef7d00", text: "#ffffff" },
    destinations: [
      {
        id: ["VERNON - Lycée Dumézil"],
        autoHide: true,
        name: "Lycée Dumézil",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ef7d00", textColor: "#ffffff", text: "10", outlineColor: "#000000" },
          pages: [{ text: "LYCEE DUMEZIL" }, { text: "VERNON" }],
        },
      },
      {
        id: ["VERNON - République"],
        name: "République",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ef7d00", textColor: "#ffffff", text: "10", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }, { text: "VERNON" }],
        },
      },
      {
        id: ["GASNY - Cimetière"],
        autoHide: true,
        name: "Cimetière",
        city: "GASNY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ef7d00", textColor: "#ffffff", text: "10", outlineColor: "#000000" },
          pages: [{ text: "CIMETIERE" }, { text: "GASNY" }],
        },
      },
      {
        id: ["ECOS - Place de l'Eglise"],
        name: "Place de l'Église",
        city: "ECOS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ef7d00", textColor: "#ffffff", text: "10", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "PLACE DE L'EGLISE" }, { text: "ECOS" }],
        },
      },
    ],
  },
  {
    id: "SNGO:31",
    routeIds: ["SNGO:31", "SNGO:ATOUMOD007:Line:31:LOC"],
    name: "11",
    colors: { background: "#252B5A", text: "#ffffff" },
    destinations: [
      {
        id: ["VERNON - République"],
        name: "République",
        city: "VERNON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#252B5A", textColor: "#ffffff", text: "11", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }, { text: "VERNON" }],
        },
      },
      {
        id: ["DOUAINS - Normandie Parc Nord"],
        autoHide: true,
        name: "Village des Marques",
        city: "DOUAINS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#252B5A", textColor: "#ffffff", text: "11", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", text: "VILLAGE DES MARQUES" }, { text: "DOUAINS" }],
        },
      },
      {
        id: ["PACY SUR EURE - Gare Routière"],
        name: "Gare Routière",
        city: "PACY-SUR-EURE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#252B5A", textColor: "#ffffff", text: "11", outlineColor: "#000000" },
          pages: [{ text: "GARE ROUTIERE" }, { text: "PACY-SUR-EURE" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "sngo",
  name: "SNgo! – Seine Normandie Agglomération",
  routes: sngoRoutes,
  color: "#17a2b8",
  textColor: "#ffffff",
};

export default network;
