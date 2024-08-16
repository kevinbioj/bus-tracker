import { Network, Route } from "~/@types";

const tagRoutes: Route[] = [
  {
    id: "TAG:A",
    name: "A",
    noCartridge: true,
    colors: { background: "#3376B8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Fontaine, La Poya"],
        name: "La Poya",
        city: "FONTAINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "LA POYA" }],
        },
      },
      {
        id: ["Grenoble, Gares"],
        autoHide: true,
        name: "Gares",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "GARES" }],
        },
      },
      {
        id: ["Grenoble, Albert 1er de Belgique"],
        autoHide: true,
        name: "Albert 1er de Belgique",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "ALBERT 1ER DE BELGIQUE" }],
        },
      },
      {
        id: ["Grenoble, Grand'place"],
        autoHide: true,
        name: "Grand'place",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "GRAND'PLACE" }],
        },
      },
      {
        id: ["Grenoble, Polesud - Alpexpo"],
        autoHide: true,
        name: "Polesud - Alpexpo",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1508C2E1", text: "POLESUD - ALPEXPO" }],
        },
      },
      {
        id: ["Le Pont-de-Claix, L'Etoile"],
        name: "L'Etoile",
        city: "LE PONT-DE-CALAIX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "L'ETOILE" }],
        },
      },
    ],
  },
  {
    id: "TAG:B",
    name: "B",
    noCartridge: true,
    colors: { background: "#479A45", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Oxford"],
        name: "Oxford",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#479A45", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "OXFORD" }],
        },
      },
      {
        id: ["Grenoble, Gares"],
        autoHide: true,
        name: "Gares",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#479A45", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "GARES" }],
        },
      },
      {
        id: ["Grenoble, Grand'place"],
        autoHide: true,
        name: "Grand'place",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#479A45", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "GRAND'PLACE" }],
        },
      },
      {
        id: ["La Tronche, Grand Sablon"],
        name: "Grand Salon",
        city: "LA TRONCHE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#479A45", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "GRAND SABLON" }],
        },
      },
    ],
  },
  {
    id: "TAG:E",
    name: "E",
    noCartridge: true,
    colors: { background: "#533786", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Louise Michel"],
        name: "Louise Michel",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#533786", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [{ text: "LOUISE MICHEL" }],
        },
      },
      {
        id: ["Grenoble, Alsace-Lorraine"],
        autoHide: true,
        name: "Alsace-Lorraine",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#533786", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [{ font: "1510N2E1", text: "ALSACE-LORRAINE" }],
        },
      },
      {
        id: ["Grenoble, Grand'place"],
        autoHide: true,
        name: "Grand'place",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#533786", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [{ text: "GRAND'PLACE" }],
        },
      },
      {
        id: ["Grenoble, Gares"],
        autoHide: true,
        name: "Gares",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#533786", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [{ text: "GARES" }],
        },
      },
      {
        id: ["Fontanil-Cornillon, Palluel"],
        name: "Palluel",
        city: "FONTANIL-CORNILLON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#533786", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [{ text: "PALLUEL" }],
        },
      },
    ],
  },
  {
    id: "TAG:1",
    name: "C1",
    noCartridge: true,
    colors: { background: "#F5D24D", text: "#000000" },
    destinations: [
      {
        id: ["Grenoble, Cité Jean Macé"],
        name: "Cité Jean Macé",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C1" },
          pages: [{ text: "CITE JEAN MACE" }],
        },
      },
      {
        id: ["Montbonnot-Saint-Martin, Pré de l'Eau"],
        autoHide: true,
        name: "Pré de l'Eau",
        city: "MONTBONNOT-SAINT-MARTIN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C1" },
          pages: [{ text: "PRE DE L'EAU" }],
        },
      },
      {
        id: ["Meylan, Maupertuis"],
        name: "Maupertuis",
        city: "MEYLAN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C1" },
          pages: [{ text: "MAUPERTUIS" }],
        },
      },
    ],
  },
  {
    id: "TAG:2",
    name: "C2",
    noCartridge: true,
    colors: { background: "#F5D24D", text: "#000000" },
    destinations: [
      {
        id: ["Claix, Pont Rouge"],
        name: "Pont Rouge",
        city: "CLAIX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C2" },
          pages: [{ text: "PONT ROUGE" }],
        },
      },
      {
        id: ["Grenoble, Louise Michel"],
        name: "Louise Michel",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C2" },
          pages: [{ text: "LOUISE MICHEL" }],
        },
      },
    ],
  },
  {
    id: "TAG:3",
    name: "C3",
    noCartridge: true,
    colors: { background: "#F5D24D", text: "#000000" },
    destinations: [
      {
        id: ["Grenoble, Victor Hugo"],
        name: "Victor Hugo",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C3" },
          pages: [{ text: "VICTOR HUGO" }],
        },
      },
      {
        id: ["Échirolles, Centre du graphisme"],
        name: "Centre du graphisme",
        city: "ÉCHIROLLES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C3" },
          pages: [{ font: "1508C2E1", text: "CENTRE DU GRAPHISME" }],
        },
      },
    ],
  },
  {
    id: "TAG:4",
    name: "C4",
    noCartridge: true,
    colors: { background: "#F5D24D", text: "#000000" },
    destinations: [
      {
        id: ["Grenoble, Victor Hugo"],
        name: "Victor Hugo",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C4" },
          pages: [{ text: "VICTOR HUGO" }],
        },
      },
      {
        id: ["Eybens, Le Verderet"],
        name: "Le Verderet",
        city: "EYBENS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C4" },
          pages: [{ text: "LE VERDERET" }],
        },
      },
    ],
  },
  {
    id: "TAG:5",
    name: "C5",
    noCartridge: true,
    colors: { background: "#F5D24D", text: "#000000" },
    destinations: [
      {
        id: ["Gières, Universités - Biologie"],
        name: "Universités - Biologie",
        city: "GRIÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C5" },
          pages: [{ font: "1508C2E1", text: "UNIVERSITES-BIOLOGIE" }],
        },
      },
      {
        id: ["Grenoble, Palais de Justice - Gare"],
        name: "Palais de Justice - Gare",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C5" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "PALAIS DE JUSTICE - GARE" }],
        },
      },
    ],
  },
  {
    id: "TAG:6",
    name: "C6",
    noCartridge: true,
    colors: { background: "#F5D24D", text: "#000000" },
    destinations: [
      {
        id: ["Grenoble, Oxford"],
        name: "Oxford",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C6" },
          pages: [{ text: "OXFORD" }],
        },
      },
      {
        id: ["Saint-Martin-d'Hères, Henri Wallon"],
        name: "Henri Wallon",
        city: "SAINT-MARTIN-D'HÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C6" },
          pages: [{ text: "HENRI WALLON" }],
        },
      },
    ],
  },
  {
    id: "TAG:7",
    name: "C7",
    noCartridge: true,
    colors: { background: "#F5D24D", text: "#000000" },
    destinations: [
      {
        id: ["Gières, Universités - Biologie"],
        name: "Universités - Biologie",
        city: "GRIÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C7" },
          pages: [{ font: "1508C2E1", text: "UNIVERSITES-BIOLOGIE" }],
        },
      },
      {
        id: ["Échirolles, Comboire"],
        name: "Comboire",
        city: "ÉCHIROLLES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F5D24D", textColor: "#000000", outlineColor: "#FFFFFF", text: "C7" },
          pages: [{ text: "COMBOIRE" }],
        },
      },
    ],
  },
  {
    id: "TAG:12",
    name: "12",
    noCartridge: true,
    colors: { background: "#33A457", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Martin-d'Hères, Les Alloves"],
        autoHide: true,
        name: "Les Alloves",
        city: "SAINT-MARTIN-D'HÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "LES ALLOVES" }],
        },
      },
      {
        id: ["Eybens, Maisons Neuves"],
        autoHide: true,
        name: "Maisons Neuves",
        city: "EYBENS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1510N2E1", text: "MAISONS NEUVES" }],
        },
      },
    ],
  },
  {
    id: "TAG:13",
    name: "13",
    noCartridge: true,
    colors: { background: "#33A457", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Meylan, Lycée du Grésivaudan"],
        autoHide: true,
        name: "Lycée du Grésivaudan",
        city: "MEYLAN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ font: "1508C2E1", text: "LYCEE DU GRESIVAUDAN" }],
        },
      },
      {
        id: ["Poisat, Cimetière Intercommunal"],
        autoHide: true,
        name: "Cimetière Intercommunal",
        city: "POISAT",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "CIMETIERE INTERCOMMUNAL" }],
        },
      },
    ],
  },
  {
    id: "TAG:14",
    name: "14",
    noCartridge: true,
    colors: { background: "#33A457", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Verdun - Préfecture"],
        name: "Verdun - Préfecture",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ font: "1508C2E1", text: "VERDUN - PREFECTURE" }],
        },
      },
      {
        id: ["Gières, Gières Gare - Universités"],
        name: "Grières Gare - Universités",
        city: "GRIÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "GRIERES GARE-UNIVERSITES" }],
        },
      },
    ],
  },
  {
    id: "TAG:15",
    name: "15",
    noCartridge: true,
    colors: { background: "#1E71B8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Verdun - Préfecture"],
        name: "Verdun - Préfecture",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "15" },
          pages: [{ font: "1508C2E1", text: "VERDUN - PREFECTURE" }],
        },
      },
      {
        id: ["Domène, Chenevières"],
        autoHide: true,
        name: "Chenevières",
        city: "DOMÈNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "15" },
          pages: [{ text: "CHENEVIERES" }],
        },
      },
      {
        id: ["Saint-Ismier, Bois Français"],
        name: "Bois Français",
        city: "SAINT-ISMIER",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "15" },
          pages: [{ text: "BOIS FRANCAIS" }],
        },
      },
      {
        id: ["Domène, Les Arnauds"],
        name: "Les Arnauds",
        city: "DOMÈNE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "15" },
          pages: [{ text: "LES ARNAUDS" }],
        },
      },
    ],
  },
  {
    id: "TAG:16",
    name: "16",
    noCartridge: true,
    colors: { background: "#33A457", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Pont-de-Claix, Gendarmerie"],
        name: "Gendarmerie",
        city: "LE PONT-DE-CLAIX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "16" },
          pages: [{ text: "GENDARMERIE" }],
        },
      },
      {
        id: ["Corenc, Montfleury"],
        name: "Montfleury",
        city: "CORENC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "16" },
          pages: [{ text: "MONTFLEURY" }],
        },
      },
      {
        id: ["Meylan, Lycée du Grésivaudan"],
        autoHide: true,
        name: "Lycée du Grésivaudan",
        city: "MEYLAN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "16" },
          pages: [{ font: "1508C2E1", text: "LYCEE DU GRESIVAUDAN" }],
        },
      },
    ],
  },
  {
    id: "TAG:19",
    name: "19",
    noCartridge: true,
    colors: { background: "#33A457", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Seyssins, Garlettes"],
        name: "Garlettes",
        city: "SEYSSINS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "19" },
          pages: [{ text: "GARLETTES" }],
        },
      },
      {
        id: ["Sassenage, L'Ovalie"],
        name: "L'Ovalie",
        city: "SASSENAGE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "19" },
          pages: [{ text: "L'OVALIE" }],
        },
      },
    ],
  },
  {
    id: "TAG:20",
    name: "20",
    noCartridge: true,
    colors: { background: "#33A457", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Seyssinet-Pariset, Seyssinet-Pariset Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "SEYSSINET-PARISET",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "20" },
          pages: [[{ text: "SEYSSINET-PARISET" }, { text: "HOTEL DE VILLE" }]],
        },
      },
      {
        id: ["Veurey-Voroize, La Rive"],
        name: "La Rive",
        city: "VEUREY-VOROIZE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "20" },
          pages: [{ text: "LA RIVE" }],
        },
      },
    ],
  },
  {
    id: "TAG:21",
    name: "21",
    noCartridge: true,
    colors: { background: "#1E71B8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Claix, Pont Rouge"],
        name: "Pont Rouge",
        city: "CLAIX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "21" },
          pages: [{ text: "PONT ROUGE" }],
        },
      },
      {
        id: ["Seyssins, Le Prisme"],
        name: "Le Prisme",
        city: "SEYSSINS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "21" },
          pages: [{ text: "LE PRISME" }],
        },
      },
    ],
  },
  {
    id: "TAG:22",
    name: "22",
    noCartridge: true,
    colors: { background: "#33A457", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Égrève, Saint Egrève Gare"],
        name: "Gare",
        city: "SAINT-ÉGRÈVE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "22" },
          pages: [{ font: "1508C2E1", text: "SAINT-EGREVE GARE" }],
        },
      },
      {
        id: ["Grenoble, Oxford"],
        name: "Oxford",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#33A457", textColor: "#FFFFFF", outlineColor: "#000000", text: "22" },
          pages: [{ text: "OXFORD" }],
        },
      },
    ],
  },
  {
    id: "TAG:23",
    name: "23",
    noCartridge: true,
    colors: { background: "#1E71B8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Vizille, Le Péage"],
        name: "Le Péage",
        city: "VIZILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "23" },
          pages: [{ text: "LE PEAGE" }],
        },
      },
      {
        id: ["Gières, Gières Gare - Universités"],
        autoHide: true,
        name: "Grières Gare - Universités",
        city: "GRIÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "GRIERES GARE-UNIVERSITES" }],
        },
      },
      {
        id: ["Saint-Martin-d'Hères, Condillac - Universités"],
        name: "Condillac - Universités",
        city: "SAINT-MARTIN-D'HÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1508C2E1", text: "CONDILLAC-UNIVERSITES" }],
        },
      },
    ],
  },
  {
    id: "TAG:25",
    name: "25",
    noCartridge: true,
    colors: { background: "#1E71B8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Gua, Les Saillants"],
        name: "Les Saillants",
        city: "LE GUA",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "25" },
          pages: [{ text: "LES SAILLANTS" }],
        },
      },
      {
        id: ["Grenoble, Louise Michel"],
        name: "Louise Michel",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "25" },
          pages: [{ text: "LOUISE MICHEL" }],
        },
      },
    ],
  },
  {
    id: "TAG:26",
    name: "26",
    noCartridge: true,
    colors: { background: "#1E71B8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Gare Routière"],
        autoHide: true,
        name: "Gare Routière",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "26" },
          pages: [{ text: "GARE ROUTIERE" }],
        },
      },
      {
        id: ["Grenoble, Gares"],
        name: "Gares",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "26" },
          pages: [{ text: "GARES" }],
        },
      },
      {
        id: ["Saint-Georges-de-Commiers, St-G.-de-Commiers Gare"],
        name: "Gare",
        city: "SAINT-GEORGES-DE-COMMIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "26" },
          pages: [[{ text: "SAINT-GEORGES-DE-COMMIERS" }, { text: "GARE" }]],
        },
      },
      {
        id: ["Le Gua, Les Saillants"],
        name: "Les Saillants",
        city: "LE GUA",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#1E71B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "26" },
          pages: [{ text: "LES SAILLANTS" }],
        },
      },
    ],
  },
  {
    id: "TAG:40",
    name: "40",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Le Rabot"],
        autoHide: true,
        name: "Le Rabot",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "40" },
          pages: [{ text: "LE RABOT" }],
        },
      },
      {
        id: ["Grenoble, Victor Hugo"],
        autoHide: true,
        name: "Victor Hugo",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "40" },
          pages: [{ text: "VICTOR HUGO" }],
        },
      },
    ],
  },
  {
    id: "TAG:41",
    name: "41",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Corenc, La Garenne"],
        autoHide: true,
        name: "La Garenne",
        city: "CORENC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "41" },
          pages: [{ text: "LA GARENNE" }],
        },
      },
      {
        id: ["La Tronche, Grand Sablon"],
        autoHide: true,
        name: "Grand Salon",
        city: "LA TRONCHE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "41" },
          pages: [{ text: "GRAND SABLON" }],
        },
      },
    ],
  },
  {
    id: "TAG:42",
    name: "42",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Meylan, La Détourbe"],
        autoHide: true,
        name: "La Détourbe",
        city: "MEYLAN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "42" },
          pages: [{ text: "LA DETOURBE" }],
        },
      },
      {
        id: ["La Tronche, Grand Sablon"],
        autoHide: true,
        name: "Grand Salon",
        city: "LA TRONCHE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "42" },
          pages: [{ text: "GRAND SABLON" }],
        },
      },
    ],
  },
  {
    id: "TAG:44",
    name: "44",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Gua, Les Saillants"],
        autoHide: true,
        name: "Les Saillants",
        city: "LE GUA",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "44" },
          pages: [{ text: "LES SAILLANTS" }],
        },
      },
      {
        id: ["Le Gua, Prélenfrey Eglise"],
        autoHide: true,
        name: "Prélenfrey Eglise",
        city: "LE GUA",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "44" },
          pages: [{ font: "1508C2E1", text: "PRELENFREY EGLISE" }],
        },
      },
      {
        id: ["Le Gua, Col de l'Arzelier"],
        autoHide: true,
        name: "Col de l'Arzelier",
        city: "LE GUA",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "44" },
          pages: [{ font: "1508C2E1", text: "COL DE L'ARZELIER" }],
        },
      },
      {
        id: ["Miribel-Lanchâtre, Le Vernay"],
        autoHide: true,
        name: "Le Vernay",
        city: "MIRIBEL-LANCHÂTRE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "44" },
          pages: [{ text: "LE VERNAY" }],
        },
      },
    ],
  },
  {
    id: "TAG:45",
    name: "45",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Varces-Allières-et-Risset, Rond-Point de l'Europe"],
        autoHide: true,
        name: "Rond-Point de l'Europe",
        city: "VARCES-ALLIÈRES-ET-RISSET",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "45" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "ROND-POINT DE L'EUROPE" }],
        },
      },
      {
        id: ["Vif, La Valonne"],
        autoHide: true,
        name: "La Valonne",
        city: "VIF",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "45" },
          pages: [{ text: "LA VALONNE" }],
        },
      },
    ],
  },
  {
    id: "TAG:46",
    name: "46",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Paul-de-Varces, Saint-Paul-de-Varces Place"],
        autoHide: true,
        name: "Place",
        city: "SAINT-PAUL-DE-VARCES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "46" },
          pages: [[{ text: "SAINT-PAUL-DE-VARCES" }, { text: "PLACE" }]],
        },
      },
      {
        id: ["Varces-Allières-et-Risset, Rond-Point de l'Europe"],
        autoHide: true,
        name: "Rond-Point de l'Europe",
        city: "VARCES-ALLIÈRES-ET-RISSET",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "46" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "ROND-POINT DE L'EUROPE" }],
        },
      },
    ],
  },
  {
    id: "TAG:47",
    name: "47",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Claix, Val d'Allières"],
        autoHide: true,
        name: "Val d'Allières",
        city: "CLAIX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "47" },
          pages: [{ text: "VAL D'ALLIERES" }],
        },
      },
      {
        id: ["Varces-Allières-et-Risset, Risset"],
        autoHide: true,
        name: "Risset",
        city: "VARCES-ALLIÈRES-ET-RISSET",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "47" },
          pages: [{ text: "RISSET" }],
        },
      },
    ],
  },
  {
    id: "TAG:48",
    name: "48",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Claix, Cossey"],
        autoHide: true,
        name: "Cossey",
        city: "CLAIX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "48" },
          pages: [{ text: "COSSEY" }],
        },
      },
      {
        id: ["Claix, Pont Rouge"],
        autoHide: true,
        name: "Pont Rouge",
        city: "CLAIX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "48" },
          pages: [{ text: "PONT ROUGE" }],
        },
      },
    ],
  },
  {
    id: "TAG:49",
    name: "49",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Seyssins, Le Prisme"],
        autoHide: true,
        name: "Le Prisme",
        city: "SEYSSINS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "49" },
          pages: [{ text: "LE PRISME" }],
        },
      },
      {
        id: ["Seyssinet-Pariset, Cimetière"],
        autoHide: true,
        name: "Cimetière",
        city: "SEYSSINET-PARISET",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "49" },
          pages: [{ text: "CIMETIERE" }],
        },
      },
      {
        id: ["Seyssins, Clinique - Portail"],
        autoHide: true,
        name: "Clinique - Portail",
        city: "SEYSSINS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "49" },
          pages: [{ font: "1510N2E1", text: "CLINIQUE-PORTAIL" }],
        },
      },
      {
        id: ["Seyssins, Clinique du Dauphiné"],
        autoHide: true,
        name: "Clinique du Dauphiné",
        city: "SEYSSINS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "49" },
          pages: [{ font: "1510N2E1", text: "CLINIQUE DU DAUPHINE" }],
        },
      },
    ],
  },
  {
    id: "TAG:50",
    name: "50",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Fontaine, La Poya"],
        autoHide: true,
        name: "La Poya",
        city: "FONTAINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "50" },
          pages: [{ text: "LA POYA" }],
        },
      },
      {
        id: ["Sassenage, Les Côtes"],
        autoHide: true,
        name: "Les Côtes",
        city: "SASSENAGE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "50" },
          pages: [{ text: "LES COTES" }],
        },
      },
    ],
  },
  {
    id: "TAG:51",
    name: "51",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Veurey-Voroize, Châtelard"],
        autoHide: true,
        name: "Châtelard",
        city: "VEUREY-VOROIZE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ text: "CHATELARD" }],
        },
      },
      {
        id: ["Saint-Égrève, Saint Egrève Gare"],
        autoHide: true,
        name: "Gare",
        city: "SAINT-ÉGRÈVE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ font: "1508C2E1", text: "SAINT-EGREVE GARE" }],
        },
      },
    ],
  },
  {
    id: "TAG:54",
    name: "54",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Oxford"],
        autoHide: true,
        name: "Oxford",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ text: "OXFORD" }],
        },
      },
      {
        id: ["Saint-Égrève, Pont de Vence"],
        autoHide: true,
        name: "Pont de Vence",
        city: "SAINT-ÉGRÈVE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ text: "PONT DE VENCE" }],
        },
      },
      {
        id: ["Sassenage, Les Engenières"],
        autoHide: true,
        name: "Les Engenières",
        city: "SASSENAGE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ text: "LES EUGENIERES" }],
        },
      },
    ],
  },
  {
    id: "TAG:55",
    name: "55",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Martin-le-Vinoux, Col de Clémencières"],
        autoHide: true,
        name: "Col de Clémencières",
        city: "SAINT-MARTIN-LE-VINOUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "55" },
          pages: [{ font: "1508C2E1", text: "COL DE CLEMENCIERES" }],
        },
      },
      {
        id: ["Saint-Martin-le-Vinoux, Saint-Martin-le-Vinoux Hôtel de Ville"],
        autoHide: true,
        name: "Hôtel de Ville",
        city: "SAINT-MARTIN-LE-VINOUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "55" },
          pages: [[{ text: "SAINT-MARTIN-LE-VINOUX" }, { text: "HOTEL DE VILLE" }]],
        },
      },
    ],
  },
  {
    id: "TAG:56",
    name: "56",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Quaix-en-Chartreuse, La Cime de Mont-Quaix"],
        autoHide: true,
        name: "La Cime de Mont-Quaix",
        city: "QUAIX-EN-CHARTREUSE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "56" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "LA CIME DE MONT-QUAIX" }],
        },
      },
      {
        id: ["Grenoble, Casamaures - Village"],
        autoHide: true,
        name: "Casamaures - Village",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "56" },
          pages: [{ font: "1508C2E1", text: "CASAMAURES-VILLAGE" }],
        },
      },
    ],
  },
  {
    id: "TAG:59",
    name: "59",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Gières, Gières Gare - Universités"],
        autoHide: true,
        name: "Gare - Universités",
        city: "GRIÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "59" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "GRIERES GARE-UNIVERSITES" }],
        },
      },
      {
        id: ["Venon, Le Chapon"],
        autoHide: true,
        name: "Le Chapon",
        city: "VENON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "59" },
          pages: [{ text: "LE CHAPON" }],
        },
      },
      {
        id: ["Saint-Martin-d'Uriage, La Ronzière"],
        autoHide: true,
        name: "La Ronzière",
        city: "SAINT-MARTIN-D'URIAGE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "59" },
          pages: [{ text: "LA RONZIERE" }],
        },
      },
    ],
  },
  {
    id: "TAG:60",
    name: "60",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Proveysieux, Planfay Haut"],
        autoHide: true,
        name: "Planfay Haut",
        city: "PROVEYSIEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "60" },
          pages: [{ text: "PLANFAY HAUT" }],
        },
      },
      {
        id: ["Proveysieux, Col de la Charmette"],
        autoHide: true,
        name: "Col de la Charmette",
        city: "PROVEYSIEUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "60" },
          pages: [{ font: "1508C2E1", text: "COL DE LA CHARMETTE" }],
        },
      },
      {
        id: ["Saint-Égrève, Muret"],
        autoHide: true,
        name: "Muret",
        city: "SAINT-ÉGRÈVE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "60" },
          pages: [{ text: "MURET" }],
        },
      },
    ],
  },
  {
    id: "TAG:61",
    name: "61",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Quaix-en-Chartreuse, Quaix-en-Chartreuse Village"],
        autoHide: true,
        name: "Village",
        city: "QUAIX-EN-CHARTREUSE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [[{ text: "QUAIX-EN-CHARTREUSE" }, { text: "VILLAGE" }]],
        },
      },
      {
        id: ["Saint-Égrève, Muret"],
        autoHide: true,
        name: "Muret",
        city: "SAINT-ÉGRÈVE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ text: "MURET" }],
        },
      },
    ],
  },
  {
    id: "TAG:62",
    name: "62",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Notre-Dame - Musée"],
        autoHide: true,
        name: "Notre-Dame - Musée",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1510N2E1", text: "NOTRE-DAME - MUSEE" }],
        },
      },
      {
        id: ["Sarcenas, Pont du Croz"],
        autoHide: true,
        name: "Pont du Croz",
        city: "SARCENAS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ text: "PONT DU CROZ" }],
        },
      },
      {
        id: ["Sarcenas, La Prairie"],
        autoHide: true,
        name: "La Plairie",
        city: "SARCENAS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ text: "LA PRAIRIE" }],
        },
      },
    ],
  },
  {
    id: "TAG:63",
    name: "63",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Égrève, Saint Egrève Gare"],
        autoHide: true,
        name: "Gare",
        city: "SAINT-ÉGRÈVE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "63" },
          pages: [{ font: "1508C2E1", text: "SAINT-EGREVE GARE" }],
        },
      },
      {
        id: ["Mont-Saint-Martin, Chemin de Namière"],
        autoHide: true,
        name: "Chemin de Namière",
        city: "MONT-SAINT-MARTIN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "63" },
          pages: [{ font: "1510N2E1", text: "CHEMIN DE NAMIERE" }],
        },
      },
    ],
  },
  {
    id: "TAG:64",
    name: "64",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Pont-de-Claix, L'Etoile"],
        autoHide: true,
        name: "L'Etoile",
        city: "LE PONT-DE-CLAIX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "64" },
          pages: [{ text: "L'ETOILE" }],
        },
      },
    ],
  },
  {
    id: "TAG:65",
    name: "65",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Grand'place"],
        autoHide: true,
        name: "Grand'Place",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "65" },
          pages: [{ text: "GRAND'PLACE" }],
        },
      },
      {
        id: ["Vizille, Le Péage"],
        autoHide: true,
        name: "Le Péage",
        city: "VIZILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "65" },
          pages: [{ text: "LE PEAGE" }],
        },
      },
    ],
  },
  {
    id: "TAG:66",
    name: "66",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Jarrie, Clos Jouvin"],
        autoHide: true,
        name: "Clos Jouvin",
        city: "JARRIE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "66" },
          pages: [{ text: "CLOS JOUVIN" }],
        },
      },
      {
        id: ["Échirolles, La Rampe - Centre-Ville"],
        autoHide: true,
        name: "La Rampe - Centre-Ville",
        city: "ÉCHIROLLES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "66" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "LA RAMPE-CENTRE VILLE" }],
        },
      },
    ],
  },
  {
    id: "TAG:67",
    name: "67",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Grand'place"],
        autoHide: true,
        name: "Grand'place",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "67" },
          pages: [{ text: "GRAND'PLACE" }],
        },
      },
      {
        id: ["Herbeys, Le Chollet"],
        autoHide: true,
        name: "Le Chollet",
        city: "HERBEYS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "67" },
          pages: [{ text: "LE CHOLLET" }],
        },
      },
    ],
  },
  {
    id: "TAG:68",
    name: "68",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Échirolles, La Rampe - Centre-Ville"],
        autoHide: true,
        name: "La Rampe - Centre-Ville",
        city: "ÉCHIROLLES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "68" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "LA RAMPE-CENTRE VILLE" }],
        },
      },
      {
        id: ["Eybens, Le Verderet"],
        autoHide: true,
        name: "Le Verderet",
        city: "EYBENS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "68" },
          pages: [{ text: "LE VERDERET" }],
        },
      },
    ],
  },
  {
    id: "TAG:70",
    name: "70",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Champ-sur-Drac, La Melle"],
        autoHide: true,
        name: "La Melle",
        city: "CHAMP-SUR-DRAC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "70" },
          pages: [{ text: "LA MELLE" }],
        },
      },
      {
        id: ["Vizille, Place du Château"],
        autoHide: true,
        name: "Place du Château",
        city: "VIZILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "70" },
          pages: [{ font: "1510N2E1", text: "PLACE DU CHATEAU" }],
        },
      },
      {
        id: ["Montchaboud, Montchaboud Le Village"],
        autoHide: true,
        name: "Le Village",
        city: "MONTCHABOUD",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "70" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "MONTCHABOUD LE VILLAGE" }],
        },
      },
    ],
  },
  {
    id: "TAG:71",
    name: "71",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Champagnier, Place du Laca"],
        autoHide: true,
        name: "Place du Laca",
        city: "CHAMPAGNIER",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "71" },
          pages: [{ text: "PLACE DU LACA" }],
        },
      },
      {
        id: ["Jarrie, Jarrie Gare"],
        autoHide: true,
        name: "Gare",
        city: "JARRIE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "71" },
          pages: [{ text: "JARRIE GARE" }],
        },
      },
    ],
  },
  {
    id: "TAG:73",
    name: "73",
    noCartridge: true,
    colors: { background: "#D572A8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Vif, Vif Mairie"],
        autoHide: true,
        name: "Mairie",
        city: "VIF",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [{ text: "VIF MAIRIE" }],
        },
      },
      {
        id: ["Notre-Dame-de-Commiers, Notre-Dame-de-Commiers Le Village"],
        autoHide: true,
        name: "Le Village",
        city: "NOTRE-DAME-DE-COMMIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#D572A8", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [[{ text: "NOTRE-DAME-DE-COMMIERS" }, { text: "LE VILLAGE" }]],
        },
      },
    ],
  },
  {
    id: "TAG:81",
    name: "A",
    noCartridge: true,
    colors: { background: "#3376B8", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Fontaine, La Poya"],
        autoHide: true,
        name: "Bus Relais A - La Poya",
        city: "FONTAINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [[{ text: "BUS RELAIS A" }, { text: "LA POYA" }]],
        },
      },
      {
        id: ["Grenoble, Albert 1° de Belgique"],
        autoHide: true,
        name: "Bus Relais A - Albert 1er de Belgique",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [[{ text: "BUS RELAIS A" }, { text: "ALBERT 1ER DE BELGIQUE" }]],
        },
      },
      {
        id: ["Grenoble, Grand'Place"],
        autoHide: true,
        name: "Bus Relais A - Grand'Place",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3376B8", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [[{ text: "BUS RELAIS A" }, { text: "GRAND'PLACE" }]],
        },
      },
    ],
  },
  {
    id: "TAG:82",
    name: "B",
    noCartridge: true,
    colors: { background: "#479A45", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Gières, Gières Gare - Universités"],
        autoHide: true,
        name: "Bus Relais B - Gare - Universités",
        city: "GRIÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#479A45", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [[{ text: "BUS RELAIS B" }, { text: "GARE - UNIVERSITES" }]],
        },
      },
      {
        id: ["Grenoble, Oxford"],
        autoHide: true,
        name: "Bus Relais B - Oxford",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#479A45", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [[{ text: "BUS RELAIS B" }, { text: "OXFORD" }]],
        },
      },
      {
        id: ["La Tronche, Grand Sablon"],
        autoHide: true,
        name: "Bus Relais B - Grand Sablon",
        city: "LA TRONCHE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#479A45", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [[{ text: "BUS RELAIS B" }, { text: "GRAND SABLON" }]],
        },
      },
    ],
  },
  {
    id: "TAG:83",
    name: "C",
    noCartridge: true,
    colors: { background: "#C20078", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Seyssins, Le Prisme"],
        autoHide: true,
        name: "Bus Relais C - Le Prisme",
        city: "SEYSSINS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#C20078", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [[{ text: "BUS RELAIS C" }, { text: "LE PRISME" }]],
        },
      },
      {
        id: ["Saint-Martin-d'Hères, Condillac - Universités"],
        autoHide: true,
        name: "Bus Relais C - Condillac - Universités",
        city: "SAINT-MARTIN-D'HÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#C20078", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [[{ text: "BUS RELAIS C" }, { text: "CONDILLAC-UNIVERSITES" }]],
        },
      },
    ],
  },
  {
    id: "TAG:84",
    name: "D",
    noCartridge: true,
    colors: { background: "#DE9917", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Martin-d'Hères, Etienne Grappe"],
        autoHide: true,
        name: "Bus Relais D - Etienne Grappe",
        city: "SAINT-MARTIN-D'HÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#DE9917", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [[{ text: "BUS RELAIS D" }, { text: "ETIENNE GRAPPE" }]],
        },
      },
      {
        id: ["Saint-Martin-d'Hères, Condillac - Universités"],
        autoHide: true,
        name: "Bus Relais D - Condillac - Universités",
        city: "SAINT-MARTIN-D'HÈRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#DE9917", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [[{ text: "BUS RELAIS D" }, { text: "CONDILLAC-UNIVERSITES" }]],
        },
      },
    ],
  },
  {
    id: "TAG:85",
    name: "Bus Relais E",
    noCartridge: true,
    colors: { background: "#533786", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grenoble, Louise Michel"],
        autoHide: true,
        name: "Bus Relais E - Louise Michel",
        city: "GRENOBLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#533786", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [[{ text: "BUS RELAIS E" }, { text: "LOUISE MICHEL" }]],
        },
      },
      {
        id: ["Fontanil-Cornillon, Fontanil - Palluel"],
        autoHide: true,
        name: "Bus Relais E - Fontanil - Palluel",
        city: "FONTANIL-CORNILLON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#533786", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [[{ text: "BUS RELAIS E" }, { text: "FONTANIL - PALLUEL" }]],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "tag",
  name: "M'Tag - Grenoble Alpes Métropole",
  routes: tagRoutes,
  color: "#0299dc",
  textColor: "#ffffff",
};

export default network;
