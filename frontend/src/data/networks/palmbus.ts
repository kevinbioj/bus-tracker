import { Network, Route } from "~/@types";

const palmbusRoutes: Route[] = [
  {
    id: "PALMBUS:A",
    name: "A",
    noCartridge: true,
    colors: { background: "#00E5FF", text: "#0B0C0F" },
    destinations: [
      {
        id: ["Gare SNCF de Cannes"],
        name: "Gare SNCF de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#00E5FF", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "A" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "CANNES GARE SNCF" }],
        },
      },
      {
        id: ["Centre Commercial Minelle"],
        name: "Centre Commercial Minelle",
        girouette: {
          routeNumber: { backgroundColor: "#00E5FF", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "A" },
          pages: [[{ text: "CENTRE COMMERCIAL" }, { text: "MINELLE" }], { text: "MANDELIEU" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:B",
    name: "B",
    noCartridge: true,
    colors: { background: "#0277BD", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Gare SNCF de Cannes"],
        name: "Gare SNCF de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#0277BD", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "CANNES GARE SNCF" }],
        },
      },
      {
        id: ["Mouans-Sartoux Centre"],
        name: "Mouans-Sartoux Centre",
        girouette: {
          routeNumber: { backgroundColor: "#0277BD", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "MOUANS-SARTOUX CENTRE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:1",
    name: "1",
    noCartridge: true,
    colors: { background: "#4EAE32", text: "#0B0C0F" },
    destinations: [
      {
        id: ["Alfred de Musset"],
        name: "Alfred de Musset",
        girouette: {
          routeNumber: { backgroundColor: "#4EAE32", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "1" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "ALFRED DE MUSSET" }],
        },
      },
      {
        id: ["Penh Chaï"],
        name: "Penh Chaï",
        girouette: {
          routeNumber: { backgroundColor: "#4EAE32", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "1" },
          pages: [{ text: "PENH CHAI" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:2",
    name: "2",
    noCartridge: true,
    colors: { background: "#3FB5E8", text: "#0B0C0F" },
    destinations: [
      {
        id: ["Les Bastides"],
        name: "Les Bastides",
        girouette: {
          routeNumber: { backgroundColor: "#3FB5E8", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "2" },
          pages: [{ text: "LES BASTIDES" }],
        },
      },
      {
        id: ["Lycée Carnot"],
        autoHide: true,
        name: "Lycée Carnot",
        girouette: {
          routeNumber: { backgroundColor: "#3FB5E8", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "2" },
          pages: [{ text: "LYCEE CARNOT" }],
        },
      },
      {
        id: ["Blanchisserie"],
        name: "Blanchisserie",
        girouette: {
          routeNumber: { backgroundColor: "#3FB5E8", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "2" },
          pages: [{ text: "BLANCHISSERIE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:4",
    name: "4",
    noCartridge: true,
    colors: { background: "#783CBD", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Place Leclerc"],
        name: "Place Leclerc",
        girouette: {
          routeNumber: { backgroundColor: "#783CBD", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "PLACE LECLERC" }],
        },
      },
      {
        id: ["Hôtel de Ville"],
        name: "Hôtel de Ville",
        girouette: {
          routeNumber: { backgroundColor: "#783CBD", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:6A",
    name: "6A",
    noCartridge: true,
    colors: { background: "#E36D9D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôtel de Ville"],
        name: "Hôtel de Ville",
        girouette: {
          routeNumber: { backgroundColor: "#E36D9D", textColor: "#FFFFFF", outlineColor: "#000000", text: "6A" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["Le Colombier"],
        name: "Le Colombier",
        girouette: {
          routeNumber: { backgroundColor: "#E36D9D", textColor: "#FFFFFF", outlineColor: "#000000", text: "6A" },
          pages: [{ text: "LE COLOMBIER" }],
        },
      },
      {
        id: ["Stade Maurice Jeanpierre"],
        autoHide: true,
        name: "Stade Maurice Jeanpierre",
        girouette: {
          routeNumber: { backgroundColor: "#E36D9D", textColor: "#FFFFFF", outlineColor: "#000000", text: "6A" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "STADE MAURICE JEANPIERRE" }],
        },
      },
      {
        id: ["Gare SNCF de Cannes"],
        autoHide: true,
        name: "Gare SNCF de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#E36D9D", textColor: "#FFFFFF", outlineColor: "#000000", text: "6A" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "CANNES GARE SNCF" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:6B",
    name: "6B",
    noCartridge: true,
    colors: { background: "#E36D9D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôtel de Ville"],
        name: "Hôtel de Ville",
        girouette: {
          routeNumber: { backgroundColor: "#E36D9D", textColor: "#FFFFFF", outlineColor: "#000000", text: "6B" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["Saint-Michel Collines"],
        autoHide: true,
        name: "Saint-Michel Collines",
        girouette: {
          routeNumber: { backgroundColor: "#E36D9D", textColor: "#FFFFFF", outlineColor: "#000000", text: "6B" },
          pages: [{ font: "1508C2E1", text: "SAINT-MICHEL COLLINES" }],
        },
      },
      {
        id: ["Parc Saint-Paul"],
        autoHide: true,
        name: "Parc Saint-Paul",
        girouette: {
          routeNumber: { backgroundColor: "#E36D9D", textColor: "#FFFFFF", outlineColor: "#000000", text: "6B" },
          pages: [{ font: "1510N2E1", text: "PARC SAINT-PAUL" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:7",
    name: "7",
    noCartridge: true,
    colors: { background: "#948177", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôtel de Ville"],
        name: "Hôtel de Ville",
        girouette: {
          routeNumber: { backgroundColor: "#948177", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["Gare SNCF de Cannes"],
        autoHide: true,
        name: "Gare SNCF de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#948177", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "CANNES GARE SNCF" }],
        },
      },
      {
        id: ["Fontainebleau"],
        autoHide: true,
        name: "Fontainebleau",
        girouette: {
          routeNumber: { backgroundColor: "#948177", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "FONTAINEBLEAU" }],
        },
      },
      {
        id: ["Polyclinique"],
        name: "Polyclinique",
        girouette: {
          routeNumber: { backgroundColor: "#948177", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "POLYCLINIQUE" }],
        },
      },
      {
        id: ["Mare Monte"],
        name: "Mare Monte",
        girouette: {
          routeNumber: { backgroundColor: "#948177", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "MARE MONTE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:8",
    name: "8",
    noCartridge: true,
    colors: { background: "#E83B3B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Palm Beach"],
        name: "Palm Beach",
        girouette: {
          routeNumber: { backgroundColor: "#E83B3B", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "PALM BEACH" }],
        },
      },
      {
        id: ["Méditerranée"],
        name: "Méditerranée",
        girouette: {
          routeNumber: { backgroundColor: "#E83B3B", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "MEDITERRANEE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:9",
    name: "9",
    noCartridge: true,
    colors: { background: "#E94E1B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Gare SNCF de Cannes"],
        name: "Gare SNCF de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#E94E1B", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ text: "GARE SNCF" }],
        },
      },
      {
        id: ["Fournas"],
        name: "Fournas",
        girouette: {
          routeNumber: { backgroundColor: "#E94E1B", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ text: "FOURNAS" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:10",
    name: "10",
    noCartridge: true,
    colors: { background: "#FF3333", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôtel de Ville"],
        name: "Hôtel de Ville",
        girouette: {
          routeNumber: { backgroundColor: "#FF3333", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["Les Pins Parasols", "Les Pins Parasols via Cimetière"],
        name: "Les Pins Parasols",
        girouette: {
          routeNumber: { backgroundColor: "#FF3333", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "LES PINS PARASOLS" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:11",
    name: "11",
    noCartridge: true,
    colors: { background: "#CCCC00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Penh Chaï"],
        name: "Penh Chaï",
        girouette: {
          routeNumber: { backgroundColor: "#CCCC00", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "PENH CHAI" }],
        },
      },
      {
        id: ["Gabians"],
        name: "Gabians",
        girouette: {
          routeNumber: { backgroundColor: "#CCCC00", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "GABIANS" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:11A",
    name: "11A",
    noCartridge: true,
    colors: { background: "#990033", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mairie du Cannet"],
        name: "Mairie du Cannet",
        girouette: {
          routeNumber: { backgroundColor: "#990033", textColor: "#FFFFFF", outlineColor: "#000000", text: "11A" },
          pages: [{ text: "MAIRIE DU CANNET" }],
        },
      },
      {
        id: ["Les Pins Parasols"],
        name: "Les Pins Parasols",
        girouette: {
          routeNumber: { backgroundColor: "#990033", textColor: "#FFFFFF", outlineColor: "#000000", text: "11A" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "LES PINS PARASOLS" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:12",
    name: "12",
    noCartridge: true,
    colors: { background: "#FF9933", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Les Mirandoles II"],
        name: "Les Mirandoles II",
        girouette: {
          routeNumber: { backgroundColor: "#FF9933", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "LES MIRANDOLES II" }],
        },
      },
      {
        id: ["Gare SNCF de Cannes"],
        autoHide: true,
        name: "Gare SNCF de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#FF9933", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "GARE SNCF" }],
        },
      },
      {
        id: ["Hôtel de Ville"],
        name: "Hôtel de Ville",
        girouette: {
          routeNumber: { backgroundColor: "#FF9933", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:14",
    name: "14",
    noCartridge: true,
    colors: { background: "#627675", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Gabians"],
        name: "Gabians",
        girouette: {
          routeNumber: { backgroundColor: "#627675", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "GABIANS" }],
        },
      },
      {
        id: ["Gare SNCF Le Bosquet"],
        name: "Gare SNCF Le Bosquet",
        girouette: {
          routeNumber: { backgroundColor: "#627675", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "GARE LE BOSQUET" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:17",
    name: "17",
    noCartridge: true,
    colors: { background: "#33CCCC", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôpital de Cannes"],
        name: "Hôpital de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#33CCCC", textColor: "#FFFFFF", outlineColor: "#000000", text: "17" },
          pages: [{ font: "1510N2E1", text: "HOPITAL DE CANNES" }],
        },
      },
      {
        id: ["Gare Routière de Mandelieu"],
        name: "Gare Routière de Mandelieu",
        girouette: {
          routeNumber: { backgroundColor: "#33CCCC", textColor: "#FFFFFF", outlineColor: "#000000", text: "17" },
          pages: [[{ text: "MANDELIEU" }, { text: "GARE ROUTIERE" }]],
        },
      },
    ],
  },
  {
    id: "PALMBUS:18",
    name: "18",
    noCartridge: true,
    colors: { background: "#1E4EA2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["La Roquette – Hameau Saint Jean"],
        name: "La Roquette – Hameau Saint Jean",
        girouette: {
          routeNumber: { backgroundColor: "#1E4EA2", textColor: "#FFFFFF", outlineColor: "#000000", text: "18" },
          pages: [[{ text: "LA ROQUETTE" }, { text: "HAMEAU SAINT JEAN" }]],
        },
      },
      {
        id: ["Gare Routière de Mandelieu"],
        name: "Gare Routière de Mandelieu",
        girouette: {
          routeNumber: { backgroundColor: "#1E4EA2", textColor: "#FFFFFF", outlineColor: "#000000", text: "18" },
          pages: [[{ text: "MANDELIEU" }, { text: "GARE ROUTIERE" }]],
        },
      },
    ],
  },
  {
    id: "PALMBUS:19",
    name: "19",
    noCartridge: true,
    colors: { background: "#95C11F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Théoule Mairie"],
        name: "Théoule Mairie",
        girouette: {
          routeNumber: { backgroundColor: "#95C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "19" },
          pages: [{ text: "THEOULE MAIRIE" }],
        },
      },
      {
        id: ["Le Trayas Notre Dame"],
        autoHide: true,
        name: "Le Trayas Notre Dame",
        girouette: {
          routeNumber: { backgroundColor: "#95C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "19" },
          pages: [{ font: "1508C2E1", text: "LE TRAYAS NOTRE DAME" }],
        },
      },
      {
        id: ["Gare Routière de Mandelieu"],
        name: "Gare Routière de Mandelieu",
        girouette: {
          routeNumber: { backgroundColor: "#95C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "19" },
          pages: [[{ text: "MANDELIEU" }, { text: "GARE ROUTIERE" }]],
        },
      },
    ],
  },
  {
    id: "PALMBUS:21",
    name: "21",
    noCartridge: true,
    colors: { background: "#FF4338", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôtel de Ville"],
        name: "Hôtel de Ville",
        girouette: {
          routeNumber: { backgroundColor: "#FF4338", textColor: "#FFFFFF", outlineColor: "#000000", text: "21" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:22",
    name: "22",
    noCartridge: true,
    colors: { background: "#FBBA00", text: "#0B0C0F" },
    destinations: [
      {
        id: ["Gare SNCF de Cannes"],
        name: "Gare SNCF de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#FBBA00", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "CANNES GARE SNCF" }],
        },
      },
      {
        id: ["Théoule Mairie"],
        name: "Théoule Mairie",
        girouette: {
          routeNumber: { backgroundColor: "#FBBA00", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "THEOULE MAIRIE" }],
        },
      },
      {
        id: ["Le Trayas Notre Dame"],
        autoHide: true,
        name: "Le Trayas Notre Dame",
        girouette: {
          routeNumber: { backgroundColor: "#FBBA00", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1508C2E1", text: "LE TRAYAS NOTRE DAME" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:23",
    name: "23",
    noCartridge: true,
    colors: { background: "#D500F9", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Canardière - Tassigny"],
        name: "Canardière - Tassigny",
        girouette: {
          routeNumber: { backgroundColor: "#D500F9", textColor: "#FFFFFF", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1508C2E1", text: "CANARDIERE-TASSIGNY" }],
        },
      },
      {
        id: ["Centre Commercial Minelle"],
        autoHide: true,
        name: "Centre Commercial Minelle",
        girouette: {
          routeNumber: { backgroundColor: "#D500F9", textColor: "#FFFFFF", outlineColor: "#000000", text: "23" },
          pages: [[{ text: "CENTRE COMMERCIAL" }, { text: "MINELLE" }]],
        },
      },
      {
        id: ["Collège les Mimosas"],
        name: "Collège les Mimosas",
        girouette: {
          routeNumber: { backgroundColor: "#D500F9", textColor: "#FFFFFF", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1510N2E1", text: "COLLEGE LES MIMOSAS" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:24",
    name: "24",
    noCartridge: true,
    colors: { background: "#00A870", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Place des Arcades"],
        name: "Place des Arcades",
        girouette: {
          routeNumber: { backgroundColor: "#00A870", textColor: "#FFFFFF", outlineColor: "#000000", text: "24" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "PLACE DES ARCADES" }],
        },
      },
      {
        id: ["Place Leclerc"],
        name: "Place Leclerc",
        girouette: {
          routeNumber: { backgroundColor: "#00A870", textColor: "#FFFFFF", outlineColor: "#000000", text: "24" },
          pages: [{ text: "PLACE LECLERC" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:26",
    name: "26",
    noCartridge: true,
    colors: { background: "#FF0000", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Ranguin"],
        name: "Ranguin",
        girouette: {
          routeNumber: { backgroundColor: "#FF0000", textColor: "#FFFFFF", outlineColor: "#000000", text: "26" },
          pages: [{ text: "RANGUIN" }],
        },
      },
      {
        id: ["P.A de Saint Martin"],
        name: "Parc d'Activités de Saint Martin",
        girouette: {
          routeNumber: { backgroundColor: "#FF0000", textColor: "#FFFFFF", outlineColor: "#000000", text: "26" },
          pages: [[{ text: "PARC D'ACTIVITES" }, { text: "DE SAINT MARTIN" }]],
        },
      },
    ],
  },
  {
    id: "PALMBUS:28",
    name: "28",
    noCartridge: true,
    colors: { background: "#4D4D4D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Tournamy"],
        name: "Tournamy",
        girouette: {
          routeNumber: { backgroundColor: "#4D4D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "28" },
          pages: [{ text: "TOURNAMY" }],
        },
      },
      {
        id: ["Mairie Annexe de l'Aubarède"],
        name: "Mairie Annexe de l'Aubarède",
        girouette: {
          routeNumber: { backgroundColor: "#4D4D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "28" },
          pages: [[{ text: "MAIRIE ANNEXE" }, { text: "DE L'AUBAREDE" }]],
        },
      },
    ],
  },
  {
    id: "PALMBUS:35",
    name: "35",
    noCartridge: true,
    colors: { background: "#FDC330", text: "#0B0C0F" },
    destinations: [
      {
        id: ["Gare SNCF de Cannes"],
        name: "Gare SNCF de Cannes",
        girouette: {
          routeNumber: { backgroundColor: "#FDC330", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "35" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "CANNES GARE SNCF" }],
        },
      },
      {
        id: ["Ranguin"],
        name: "Ranguin",
        girouette: {
          routeNumber: { backgroundColor: "#FDC330", textColor: "#0B0C0F", outlineColor: "#FFFFFF", text: "35" },
          pages: [{ text: "RANGUIN" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:CITY",
    name: "CITY",
    noCartridge: true,
    colors: { background: "#CC0066", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôtel de Ville"],
        autoHide: true,
        name: "Navette Centre Ville",
        girouette: {
          routeNumber: {
            backgroundColor: "#CC0066",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1310C2E1",
            text: "CITY",
          },
          pages: [[{ text: "CITY PALM" }, { text: "NAVETTE CENTRE VILLE" }]],
        },
      },
    ],
  },
  {
    id: "PALMBUS:ILE",
    name: "ILE",
    noCartridge: true,
    colors: { background: "#336699", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pont des Gabres"],
        autoHide: true,
        name: "Navette Presqu'île - Montfleury",
        girouette: {
          routeNumber: {
            backgroundColor: "#336699",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "ILE",
          },
          pages: [[{ text: "NAVETTE PRESQU'ILE" }, { text: "MONTFLEURY" }]],
        },
      },
    ],
  },
  {
    id: "PALMBUS:BC",
    name: "BC",
    noCartridge: true,
    colors: { background: "#78909C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Parking Ansaldo Breda"],
        autoHide: true,
        name: "Navette Bocca Centre",
        girouette: {
          routeNumber: {
            backgroundColor: "#78909C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "BC",
          },
          pages: [{ font: "1508C2E1", text: "NAVETTE BOCCA CENTRE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:BOC",
    name: "BOC",
    noCartridge: true,
    colors: { background: "#00A8A0", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Résistance-Coubertin"],
        autoHide: true,
        name: "Navette Bocca Cabana",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A8A0",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "BOC",
          },
          pages: [{ font: "1508C2E1", text: "NAVETTE BOCCA CABANA" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:MIM",
    name: "MIM",
    noCartridge: true,
    colors: { background: "#2196F3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Canardière - Tassigny"],
        name: "Canardière - Tassigny",
        girouette: {
          routeNumber: {
            backgroundColor: "#2196F3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "MIM",
          },
          pages: [{ font: "1508C2E1", text: "CANARDIERE-TASSIGNY" }],
        },
      },
      {
        id: ["Résidence du Port"],
        autoHide: true,
        name: "Résidence du Port",
        girouette: {
          routeNumber: {
            backgroundColor: "#2196F3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "MIM",
          },
          pages: [{ font: "1508C2E1", text: "RESIDENCE DU PORT" }],
        },
      },
      {
        id: ["Balcon d'Azur"],
        autoHide: true,
        name: "Balcon d'Azur",
        girouette: {
          routeNumber: {
            backgroundColor: "#2196F3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "MIM",
          },
          pages: [{ font: "1510N2E1", text: "BALCON D'AZUR" }],
        },
      },
      {
        id: ["Cannes Marina"],
        name: "Cannes Marina",
        girouette: {
          routeNumber: {
            backgroundColor: "#2196F3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "MIM",
          },
          pages: [{ text: "CANNES MARINA" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:MRO",
    name: "MRO",
    noCartridge: true,
    colors: { background: "#D83640", text: "#FFFFFF" },
    destinations: [
      {
        id: ["La Roseraie "],
        autoHide: true,
        name: "Navette Mouré Rouge",
        girouette: {
          routeNumber: {
            backgroundColor: "#D83640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            spacing: 1,
            text: "MRO",
          },
          pages: [{ font: "1508C2E1", text: "NAVETTE MOURE ROUGE" }],
        },
      },
    ],
  },
  {
    id: "PALMBUS:SUQ",
    name: "SUQ",
    noCartridge: true,
    colors: { background: "#CC0066", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôtel de Ville"],
        autoHide: true,
        name: "Hôtel de Ville",
        girouette: {
          routeNumber: {
            backgroundColor: "#CC0066",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            spacing: 1,
            text: "SUQ",
          },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "palmbus",
  name: "Palmbus – Cannes Lérins",
  routes: palmbusRoutes,
  color: "#ffca00",
  textColor: "#000000",
};

export default network;
