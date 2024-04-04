import { Network, Route } from "~/@types";

const sngoRoutes: Route[] = [
  {
    id: "SNGO:21",
    name: "1",
    colors: { background: "#e30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#e30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["Sente du Bon Dieu"],
        autoHide: true,
        name: "Sente du Bon Dieu",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#e30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "VERNON" }, { font: "1508C2E1", text: "SENTE DU BON DIEU" }],
        },
      },

      {
        id: ["VERNON Auges"],
        autoHide: true,
        name: "Auges",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#e30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "VERNON" }, { text: "AUGES" }],
        },
      },
      {
        id: ["St Adjutor"],
        name: "Saint-Adjutor",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#e30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "VERNON" }, { text: "SAINT-ADJUTOR" }],
        },
      },
    ],
  },
  {
    id: "SNGO:22",
    name: "2",
    colors: { background: "#76B82A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#76B82A", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["Lycée Dumézil"],
        autoHide: true,
        name: "Lycée Dumézil",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#76B82A", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "VERNON" }, { text: "LYCEE DUMEZIL" }],
        },
      },
      {
        id: ["Blanchères"],
        autoHide: true,
        name: "Blanchères",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#76B82A", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "VERNON" }, { text: "BLANCHERES" }],
        },
      },
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
    id: "SNGO:23",
    name: "3",
    colors: { background: "#FFDD00", text: "#000000" },
    destinations: [
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#000000", text: "3" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["Clermont"],
        autoHide: true,
        name: "Clermont",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#000000", text: "3" },
          pages: [{ text: "VERNON" }, { text: "CLERMONT" }],
        },
      },
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
    id: "SNGO:24",
    name: "4",
    colors: { background: "#00B1EB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#00B1EB", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
        },
      },
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
    id: "SNGO:25",
    name: "5",
    colors: { background: "#164194", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#164194", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
        },
      },
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
    id: "SNGO:26",
    name: "6",
    colors: { background: "#EA619F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#EA619F", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["SAINT-MARCEL Cornouillères"],
        name: "Cornouillères",
        city: "SAINT-MARCEL",
        girouette: {
          routeNumber: { backgroundColor: "#EA619F", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "SAINT-MARCEL" }, { text: "CORNOUILLERES" }],
        },
      },
    ],
  },
  {
    id: "SNGO:38",
    name: "8A",
    colors: { background: "#8C663A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Lycée Jean Moulin"],
        name: "Lycée Jean Moulin",
        city: "LES ANDELYS",
        girouette: {
          routeNumber: { backgroundColor: "#8C663A", textColor: "#FFFFFF", outlineColor: "#000000", text: "8A" },
          pages: [{ text: "LES ANDELYS" }, { font: "1508C2E1", text: "LYCEE JEAN MOULIN" }],
        },
      },
      {
        id: ["Radeval"],
        autoHide: true,
        name: "Radeval",
        girouette: {
          routeNumber: { backgroundColor: "#8C663A", textColor: "#FFFFFF", outlineColor: "#000000", text: "8A" },
          pages: [{ text: "RADEVAL" }],
        },
      },
      {
        id: ["Gare Routière"],
        autoHide: true,
        name: "Gare Routière",
        city: "LES ANDELYS",
        girouette: {
          routeNumber: { backgroundColor: "#8C663A", textColor: "#FFFFFF", outlineColor: "#000000", text: "8A" },
          pages: [{ text: "LES ANDELYS" }, { text: "GARE ROUTIERE" }],
        },
      },
      {
        id: ["Saint Jacques"],
        name: "Saint-Jacques",
        city: "LES ANDELYS",
        girouette: {
          routeNumber: { backgroundColor: "#8C663A", textColor: "#FFFFFF", outlineColor: "#000000", text: "8A" },
          pages: [{ text: "LES ANDELYS" }, { text: "SAINT-JACQUES" }],
        },
      },
    ],
  },
  {
    id: "SNGO:48",
    name: "8B",
    colors: { background: "#CDCC0B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Feuquerolles"],
        name: "Feuquerolles",
        city: "LES ANDELYS",
        girouette: {
          routeNumber: { backgroundColor: "#CDCC0B", textColor: "#FFFFFF", outlineColor: "#000000", text: "8B" },
          pages: [{ text: "LES ANDELYS" }, { text: "FEUQUEROLLES" }],
        },
      },
      {
        id: ["Longuemare"],
        autoHide: true,
        name: "Longuemare",
        city: "LES ANDELYS",
        girouette: {
          routeNumber: { backgroundColor: "#CDCC0B", textColor: "#FFFFFF", outlineColor: "#000000", text: "8B" },
          pages: [{ text: "LES ANDELYS" }, { text: "LONGUEMARE" }],
        },
      },
      {
        id: ["Lycée Jean Moulin"],
        autoHide: true,
        name: "Lycée Jean Moulin",
        city: "LES ANDELYS",
        girouette: {
          routeNumber: { backgroundColor: "#CDCC0B", textColor: "#FFFFFF", outlineColor: "#000000", text: "8B" },
          pages: [{ text: "LES ANDELYS" }, { font: "1508C2E1", text: "LYCEE JEAN MOULIN" }],
        },
      },
      {
        id: ["ST-JEAN DE FRENELLES Rond Point"],
        autoHide: true,
        name: "Rond Point",
        city: "Saint-Jean de Frenelles",
        girouette: {
          routeNumber: { backgroundColor: "#CDCC0B", textColor: "#FFFFFF", outlineColor: "#000000", text: "8B" },
          pages: [{ text: ["SAINT-JEAN", "DE FRENELLES"] }, { text: "ROND POINT" }],
        },
      },
      {
        id: ["Gare Routière"],
        name: "Gare Routière",
        city: "LES ANDELYS",
        girouette: {
          routeNumber: { backgroundColor: "#CDCC0B", textColor: "#FFFFFF", outlineColor: "#000000", text: "8B" },
          pages: [{ text: "LES ANDELYS" }, { text: "GARE ROUTIERE" }],
        },
      },
    ],
  },
  {
    id: "SNGO:29",
    name: "9",
    colors: { background: "#7F5DA4", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MENILLES Haut Ménilles"],
        name: "Haut Ménilles",
        city: "MENILLES",
        girouette: {
          routeNumber: { backgroundColor: "#7F5DA4", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ text: "MENILLES" }, { text: "HAUT MENILLES" }],
        },
      },
      {
        id: ["PACY Zone Artisanale"],
        name: "Zone Artisanale",
        city: "PACY-SUR-EURE",
        girouette: {
          routeNumber: { backgroundColor: "#7F5DA4", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ text: "PACY-SUR-EURE" }, { font: "1508C2E1", spacing: 3, text: "ZONE ARTISANALE" }],
        },
      },
    ],
  },
  {
    id: "SNGO:10",
    name: "10",
    colors: { background: "#EF7D00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#EF7D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["VERNON Lycée Dumézil"],
        autoHide: true,
        name: "Lycée Dumézil",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#EF7D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "VERNON" }, { text: "LYCEE DUMEZIL" }],
        },
      },
      {
        id: ["ECOS Place de l'Eglise"],
        name: "Place de l'Eglise",
        city: "ECOS",
        girouette: {
          routeNumber: { backgroundColor: "#EF7D00", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "ECOS" }, { font: "1510N2E1", spacing: 1, text: "PLACE DE L'EGLISE" }],
        },
      },
    ],
  },
  {
    id: "SNGO:31",
    name: "11",
    colors: { background: "#252B5A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["DOUAINS Normandie Parc Nord"],
        autoHide: true,
        name: "Normandie Parc Nord",
        city: "DOUAINS",
        girouette: {
          routeNumber: { backgroundColor: "#252B5A", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "DOUAINS" }, { font: "1508C2E1", text: "NORMANDIE PARC NORD" }],
        },
      },
      {
        id: ["PACY SUR EURE Gare Routière"],
        name: "Gare Routière",
        city: "PACY-SUR-EURE",
        girouette: {
          routeNumber: { backgroundColor: "#252B5A", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "PACY-SUR-EURE" }, { text: "GARE ROUTIERE" }],
        },
      },
      {
        id: ["VERNON République"],
        name: "République",
        city: "VERNON",
        girouette: {
          routeNumber: { backgroundColor: "#252B5A", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "VERNON" }, { text: "REPUBLIQUE" }],
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