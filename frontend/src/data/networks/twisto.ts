import { Network, Route } from "~/@types";

const twistoRoutes: Route[] = [
  {
    id: "TWISTO:NUIT",
    name: "Noctibus",
    colors: { background: "#011337", text: "#FFFF99" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Portes de la Mer", "Noctibus"],
        autoHide: true,
        name: "Portes de la Mer",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#011337", textColor: "#FFFF99", outlineColor: "#000000", text: "€" },
          pages: [{ text: "NOCTIBUS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:T1",
    name: "T1",
    colors: { background: "#23a638", text: "#ffffff" },
    destinations: [
      {
        id: ["Ifs Jean Vilar"],
        name: "Jean Vilar",
        city: "IFS",
        girouette: {
          routeNumber: { backgroundColor: "#23a638", textColor: "#ffffff", outlineColor: "#000000", text: "T1" },
          pages: [{ text: "IFS JEAN VILAR" }],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Saint-Clair"],
        name: "Saint-Clair",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#23a638", textColor: "#ffffff", outlineColor: "#000000", text: "T1" },
          pages: [{ font: "1508C2E1", text: "HEROUVILLE ST-CLAIR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:T2",
    name: "T2",
    colors: { background: "#e73132", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Campus 2"],
        name: "Campus 2",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#e73132", textColor: "#ffffff", outlineColor: "#000000", text: "T2" },
          pages: [{ text: "CAEN CAMPUS 2" }],
        },
      },
      {
        id: ["Caen Presqu'ile"],
        name: "CAEN Presqu'ile",
        girouette: {
          routeNumber: { backgroundColor: "#e73132", textColor: "#ffffff", outlineColor: "#000000", text: "T2" },
          pages: [{ font: "1510N2E1", text: "CAEN PRESQU'ILE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:T3",
    name: "T3",
    colors: { background: "#009adf", text: "#ffffff" },
    destinations: [
      {
        id: ["Fleury-sur-Orne HAUTS DE L'ORNE"],
        name: "Hauts de l'Orne",
        city: "FLEURY-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "T3" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "FLEURY HAUTS DE L'ORNE" }],
        },
      },
      {
        id: ["Caen Collège Hawking"],
        autoHide: true,
        name: "Collège Hawking",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "T3" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "CAEN COLLEGE HAWKING" }],
        },
      },
      {
        id: ["Caen Château-Quatrans"],
        name: "Château Quatrans",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "T3" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "CAEN CHATEAU QUATRANS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:NVCV",
    name: "NVCV",
    colors: { background: "#e84133", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Palais des Sports"],
        name: "Palais des Sports",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508C2E1",
            backgroundColor: "#e84133",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "NAV",
          },
          pages: [{ font: "1508C2E1", spacing: 3, text: "PALAIS DES SPORTS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:1",
    name: "1",
    colors: { background: "#d8005b", text: "#ffffff" },
    destinations: [
      {
        id: ["Mondeville Centre Commercial"],
        name: "Centre Commercial",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#d8005b", textColor: "#ffffff", outlineColor: "#000000", text: "1" },
          pages: [{ text: "MONDEVILLE" }, { font: "1508C2E1", spacing: 3, text: "CENTRE COMMERCIAL" }],
        },
      },
      {
        id: ["Caen Chemin Vert"],
        name: "Chemin Vert",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#d8005b", textColor: "#ffffff", outlineColor: "#000000", text: "1" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "CAEN CHEMIN VERT" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:2",
    name: "2",
    colors: { background: "#0975b8", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Beaulieu Brazza"],
        name: "Beaulieu Brazza",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#0975b8", textColor: "#ffffff", outlineColor: "#000000", text: "2" },
          pages: [{ font: "1508C2E1", text: "CAEN BEAULIEU BRAZZA" }],
        },
      },
      {
        id: ["Caen Mémorial"],
        name: "Mémorial",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#0975b8", textColor: "#ffffff", outlineColor: "#000000", text: "2" },
          pages: [{ text: "CAEN MEMORIAL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:3",
    name: "3",
    colors: { background: "#c4ce10", text: "#000000" },
    destinations: [
      {
        id: ["Ifs Jean Vilar"],
        name: "Jean Vilar",
        city: "IFS",
        girouette: {
          routeNumber: { backgroundColor: "#c4ce10", textColor: "#000000", outlineColor: "#FFFFFF", text: "3" },
          pages: [{ text: "IFS JEAN VILAR" }],
        },
      },
      {
        id: ["Carpiquet Aéroport"],
        name: "Aéroport",
        city: "CARPIQUET",
        girouette: {
          routeNumber: { backgroundColor: "#c4ce10", textColor: "#000000", outlineColor: "#FFFFFF", text: "3" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "CARPIQUET AEROPORT" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:4",
    name: "4",
    colors: { background: "#da609f", text: "#ffffff" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Hérouville Centre Commercial"],
        name: "Centre Commercial",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#da609f", textColor: "#ffffff", outlineColor: "#000000", text: "4" },
          pages: [
            { font: "1508C2E1", spacing: 1, text: "HEROUVILLE-SAINT-CLAIR" },
            { font: "1508C2E1", spacing: 3, text: "CENTRE COMMERCIAL" },
          ],
        },
      },
      {
        id: ["Ifs Jean Vilar"],
        name: "Jean Vilar",
        city: "IFS",
        girouette: {
          routeNumber: { backgroundColor: "#da609f", textColor: "#ffffff", outlineColor: "#000000", text: "4" },
          pages: [{ text: "IFS JEAN VILAR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:5",
    name: "5",
    colors: { background: "#642580", text: "#ffffff" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Sphère"],
        name: "Sphère",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#642580", textColor: "#ffffff", outlineColor: "#000000", text: "5" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "HEROUVILLE SPHERE" }],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Lebisey"],
        autoHide: true,
        name: "Lebisey",
        city: "HÉROUVILLE SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#642580", textColor: "#ffffff", outlineColor: "#000000", text: "5" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "HEROUVILLE LEBISEY" }],
        },
      },
      {
        id: ["Caen Théâtre Quai 3"],
        name: "Théâtre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#642580", textColor: "#ffffff", outlineColor: "#000000", text: "5" },
          pages: [{ text: "CAEN THEATRE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:6A",
    name: "6A",
    colors: { background: "#fcdd19", text: "#000000" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Saint-Clair"],
        name: "Saint-Clair",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#fcdd19", textColor: "#000000", text: "6a" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "HEROUVILLE SAINT-CLAIR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:6B",
    name: "6B",
    colors: { background: "#fcdd19", text: "#000000" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Saint-Clair"],
        name: "Saint-Clair",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#fcdd19", textColor: "#000000", text: "6b" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "HEROUVILLE SAINT-CLAIR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:7",
    name: "7",
    colors: { background: "#8d5e2a", text: "#ffffff" },
    destinations: [
      {
        id: ["Cambes-en-Plaine Le Parc"],
        name: "Le Parc",
        city: "CAMBES-EN-PLAINE",
        girouette: {
          routeNumber: { backgroundColor: "#8d5e2a", textColor: "#ffffff", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1510N2E1", text: "CAMBES LE PARC" }],
        },
      },
      {
        id: ["Biéville-Beuville ZA au Village"],
        name: "Z.A. au Village",
        city: "BIÉVILLE-BEUVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#8d5e2a", textColor: "#ffffff", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "BIEVILLE-BEUVILLE" }, { text: "Z.A. AU VILLAGE" }],
        },
      },
      {
        id: ["Caen Théâtre Quai 5"],
        name: "Théâtre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#8d5e2a", textColor: "#ffffff", outlineColor: "#000000", text: "7" },
          pages: [{ text: "CAEN THEATRE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:8",
    name: "8",
    colors: { background: "#00804b", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Poincaré"],
        name: "Poincaré",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#00804b", textColor: "#ffffff", outlineColor: "#000000", text: "8" },
          pages: [{ text: "CAEN POINCARE" }],
        },
      },
      {
        id: ["Caen CHU"],
        name: "CHU",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#00804b", textColor: "#ffffff", outlineColor: "#000000", text: "8" },
          pages: [{ text: "CAEN CHU" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:9",
    name: "9",
    colors: { background: "#86bce7", text: "#000000" },
    destinations: [
      {
        id: ["Colombelles Colombelles Mairie"],
        name: "Mairie",
        city: "COLOMBELLES",
        girouette: {
          routeNumber: { backgroundColor: "#86bce7", textColor: "#000000", outlineColor: "#FFFFFF", text: "9" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "COLOMBELLES MAIRIE" }],
        },
      },
      {
        id: ["Saint-Germain-la-Blanche-Herbe Place des Canadiens"],
        name: "Place des Canadiens",
        city: "SAINT-GERMAIN-LA-BLANCHE-HERBE",
        girouette: {
          routeNumber: { backgroundColor: "#86bce7", textColor: "#000000", outlineColor: "#FFFFFF", text: "9" },
          pages: [{ text: "SAINT-GERMAIN" }, { font: "1508C2E1", text: "PLACE DES CANADIENS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:10",
    name: "10",
    colors: { background: "#b0368c", text: "#ffffff" },
    destinations: [
      {
        id: ["Blainville-sur-Orne Blainville Parc"],
        name: "Parc",
        city: "BLAINVILLE-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#b0368c", textColor: "#ffffff", outlineColor: "#000000", text: "10" },
          pages: [{ font: "1510N2E1", text: "BLAINVILLE PARC" }],
        },
      },
      {
        id: ["Blainville-sur-Orne Terres d'Avenir"],
        autoHide: true,
        name: "Terres d'Avenir",
        city: "BLAINVILLE-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#b0368c", textColor: "#ffffff", outlineColor: "#000000", text: "10" },
          pages: [
            { font: "1508C2E1", text: "BLAINVILLE-SUR-ORNE" },
            { font: "1510N2E1", text: "TERRES D'AVENIR" },
          ],
        },
      },
      {
        id: ["Mondeville Charlotte Corday"],
        name: "Charlotte Corday",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#b0368c", textColor: "#ffffff", outlineColor: "#000000", text: "10" },
          pages: [{ text: "MONDEVILLE" }, { font: "1508C2E1", spacing: 3, text: "CHARLOTTE CORDAY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:10EX",
    name: "10EX",
    colors: { background: "#f29fc5", text: "#000000" },
    destinations: [
      {
        id: ["Blainville-sur-Orne Blainville Parc"],
        name: "Parc",
        city: "BLAINVILLE-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#f29fc5", textColor: "#000000", outlineColor: "#FFFFFF", text: "10" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "BLAINVILLE EXPRESS" }],
        },
      },
      {
        id: ["Caen Bellivet"],
        name: "Bellivet",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#f29fc5", textColor: "#000000", outlineColor: "#FFFFFF", text: "10" },
          pages: [{ text: "CAEN EXPRESS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:11",
    name: "11",
    colors: { background: "#ea5b0c", text: "#ffffff" },
    destinations: [
      {
        id: ["Cuverville Champ Picot"],
        name: "Champ Picot",
        city: "CUVERVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#ea5b0c", textColor: "#ffffff", outlineColor: "#000000", text: "11" },
          pages: [{ text: "CUVERVILLE" }, { text: "CHAMP PICOT" }],
        },
      },
      {
        id: ["Caen Hôtel de Ville Quai 1"],
        autoHide: true,
        name: "Hôtel de Ville",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#ea5b0c", textColor: "#ffffff", outlineColor: "#000000", text: "11" },
          pages: [{ font: "1508C2E1", text: "CAEN HOTEL DE VILLE" }],
        },
      },
      {
        id: ["Bretteville-sur-Odon BRETTEVILLE Koenig"],
        name: "Koenig",
        city: "BRETTEVILLE-SUR-ODON",
        girouette: {
          routeNumber: { backgroundColor: "#ea5b0c", textColor: "#ffffff", outlineColor: "#000000", text: "11" },
          pages: [{ font: "1508C2E1", text: "BRETTEVILLE KOENIG" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:11EX",
    name: "11EX",
    colors: { background: "#f39869", text: "#000000" },
    destinations: [
      {
        id: ["Caen Théâtre Quai 1"],
        name: "Théâtre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#f39869", textColor: "#000000", outlineColor: "#FFFFFF", text: "11" },
          pages: [{ text: "CAEN EXPRESS" }],
        },
      },
      {
        id: ["Cuverville Champ Picot"],
        name: "Champ Picot",
        city: "CUVERVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#f39869", textColor: "#000000", outlineColor: "#FFFFFF", text: "11" },
          pages: [{ font: "1508C2E1", text: "CUVERVILLE  EXPRESS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:12",
    name: "12",
    colors: { background: "#009d99", text: "#ffffff" },
    destinations: [
      {
        id: ["Lion-sur-Mer Lion Plage"],
        name: "Lion Plage",
        city: "LION-SUR-MER",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "LION PLAGE" }],
        },
      },
      {
        id: ["Lion-sur-Mer Haut-Lion"],
        autoHide: true,
        name: "Haut-Lion",
        city: "LION-SUR-MER",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "LION HAUT-LION" }],
        },
      },
      {
        id: ["Hermanville-sur-Mer Isaville"],
        autoHide: true,
        name: "Isaville",
        city: "HERMANVILLE-SUR-MER",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", text: "HERMANVILLE ISAVILLE" }],
        },
      },
      {
        id: ["Ouistreham Sacré Coeur"],
        autoHide: true,
        name: "Sacré Coeur",
        city: "OUISTREHAM",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "OUISTREHAM SACRE COEUR" }],
        },
      },
      {
        id: ["Ouistreham RIVA CHARMETTES"],
        autoHide: true,
        name: "Charmettes",
        city: "OUISTREHAM",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "OUISTREHAM CHARMETTES" }],
        },
      },
      {
        id: ["Colleville Becquet"],
        autoHide: true,
        name: "Becquet",
        city: "COLLEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", text: "COLLEVILLE BECQUET" }],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Allende"],
        autoHide: true,
        name: "Allende",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "HEROUVILLE ALLENDE" }],
        },
      },
      {
        id: ["Caen Cité U Lebisey"],
        autoHide: true,
        name: "Cité U Lebisey",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", text: "CAEN CITE U LEBISEY" }],
        },
      },
      {
        id: ["Caen Calvaire Saint-Pierre"],
        autoHide: true,
        name: "Calvaire Saint-Pierre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "CAEN CALVAIRE ST-PIERRE" }],
        },
      },
      {
        id: ["Caen Croix Guérin"],
        autoHide: true,
        name: "Croix Guérin",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "CAEN CROIX GUERIN" }],
        },
      },
      {
        id: ["Caen Tour Leroy"],
        autoHide: true,
        name: "Tour Leroy",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "CAEN TOUR LEROY" }],
        },
      },
      {
        id: ["Caen Gare SNCF"],
        name: "Gare SNCF",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1510N2E1", text: "CAEN GARE SNCF" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:12EX",
    name: "12EX",
    colors: { background: "#a7c4af", text: "#000000" },
    destinations: [
      {
        id: ["Lion-sur-Mer Haut-Lion"],
        name: "Haut-Lion",
        city: "LION-SUR-MER",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ text: "LION EXPRESS" }],
        },
      },
      {
        id: ["Ouistreham RIVA CHARMETTES"],
        autoHide: true,
        name: "Riva Charmettes",
        city: "OUISTREHAM",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "OUISTREHAM CHARMETTES" }],
        },
      },
      {
        id: ["Ouistreham Riva Centre"],
        autoHide: true,
        name: "Riva Centre",
        city: "OUISTREHAM",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "OUISTREHAM RIVA CENTRE" }],
        },
      },
      {
        id: ["Caen Tour Leroy"],
        autoHide: true,
        name: "Tour Leroy",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ text: "CAEN EXPRESS" }],
        },
      },
      {
        id: ["Caen Gare SNCF"],
        name: "Gare SNCF",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ font: "1513B3E1", text: "CAEN EXPRESS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:20",
    name: "20",
    colors: { background: "#f59c00", text: "#000000" },
    destinations: [
      {
        id: ["Caen Calvaire Saint-Pierre"],
        name: "Calvaire Saint-Pierre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#f59c00", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ text: "CAEN" }, { font: "1508C2E1", text: "CALVAIRE SAINT-PIERRE" }],
        },
      },
      {
        id: ["Authie Jacques Cartier"],
        autoHide: true,
        name: "Jacques Cartier",
        city: "AUTHIE",
        girouette: {
          routeNumber: { backgroundColor: "#f59c00", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "AUTHIE JACQUES CARTIER" }],
        },
      },
      {
        id: ["Rots Bonny"],
        name: "Bonny",
        city: "ROTS",
        girouette: {
          routeNumber: { backgroundColor: "#f59c00", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ text: "ROTS BONNY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:21",
    name: "21",
    colors: { background: "#153f8d", text: "#ffffff" },
    destinations: [
      {
        id: ["Saint-Germain-la-Blanche-Herbe Ardenne"],
        name: "Ardenne",
        city: "SAINT-GERMAIN-LA-BLANCHE-HERBE",
        girouette: {
          routeNumber: { backgroundColor: "#153f8d", textColor: "#ffffff", outlineColor: "#000000", text: "21" },
          pages: [{ text: "SAINT-GERMAIN" }, { text: "ARDENNE" }],
        },
      },
      {
        id: ["Mondeville Village Oxylane"],
        name: "Village Oxylane",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#153f8d", textColor: "#ffffff", outlineColor: "#000000", text: "21" },
          pages: [{ text: "MONDEVILLE" }, { font: "1510N2E1", text: "VILLAGE OXYLANE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:22",
    name: "22",
    colors: { background: "#f3a3b9", text: "#000000" },
    destinations: [
      {
        id: ["Lion-sur-Mer Lion Plage"],
        name: "Plage",
        city: "LION-SUR-MER",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "LION-SUR-MER PLAGE" }],
        },
      },
      {
        id: ["Périers Mairie"],
        autoHide: true,
        name: "Mairie",
        city: "PÉRIERS",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "PERIERS MAIRIE" }],
        },
      },
      {
        id: ["Biéville-Beuville Rue du Home"],
        autoHide: true,
        name: "Rue du Home",
        city: "BIÉVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "BIEVILLE RUE DU HOME" }],
        },
      },
      {
        id: ["Biéville-Beuville Biéville Château"],
        autoHide: true,
        name: "Château",
        city: "BIÉVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1510N2E1", text: "BIEVILLE CHATEAU" }],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Allende"],
        autoHide: true,
        name: "Allende",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "HEROUVILLE ALLENDE" }],
        },
      },
      {
        id: ["Caen Calvaire Saint-Pierre"],
        name: "Calvaire Saint-Pierre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "CAEN CALVAIRE ST-PIERRE" }],
        },
      },
      {
        id: ["Caen Tour Leroy"],
        autoHide: true,
        name: "Tour Leroy",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1510N2E1", text: "CAEN TOUR LEROY" }],
        },
      },
      {
        id: ["Caen Théâtre Quai 1"],
        autoHide: true,
        name: "Théâtre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "CAEN THEATRE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:23",
    name: "23",
    colors: { background: "#e94861", text: "#ffffff" },
    destinations: [
      {
        id: ["Villons-les-Buissons Norvège"],
        name: "Norvège",
        city: "VILLONS-LES-BUISSONS",
        girouette: {
          routeNumber: { backgroundColor: "#e94861", textColor: "#ffffff", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1510N2E1", text: "VILLONS NORVEGE" }],
        },
      },
      {
        id: ["Cairon Cairon Château"],
        autoHide: true,
        name: "Château",
        city: "CAIRON",
        girouette: {
          routeNumber: { backgroundColor: "#e94861", textColor: "#ffffff", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1510N2E1", text: "CAIRON CHATEAU" }],
        },
      },
      {
        id: ["Louvigny Michelet"],
        name: "Michelet",
        city: "LOUVIGNY",
        girouette: {
          routeNumber: { backgroundColor: "#e94861", textColor: "#ffffff", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "LOUVIGNY MICHELET" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:30",
    name: "30",
    colors: { background: "#d186b2", text: "#000000" },
    destinations: [
      {
        id: ["Caen Gare SNCF"],
        name: "Gare SNCF",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#d186b2", textColor: "#000000", outlineColor: "#FFFFFF", text: "30" },
          pages: [{ font: "1510N2E1", text: "CAEN GARE SNCF" }],
        },
      },
      {
        id: ["Mondeville Centre Commercial"],
        name: "Centre Commercial",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#d186b2", textColor: "#000000", outlineColor: "#FFFFFF", text: "30" },
          pages: [{ text: "MONDEVILLE" }, { font: "1508C2E1", spacing: 3, text: "CENTRE COMMERCIAL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:31",
    name: "31",
    colors: { background: "#969328", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Gare SNCF"],
        name: "Gare SNCF",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#969328", textColor: "#ffffff", outlineColor: "#000000", text: "31" },
          pages: [{ font: "1510N2E1", text: "CAEN GARE SNCF" }],
        },
      },
      {
        id: ["Caen Théâtre Quai 1"],
        autoHide: true,
        name: "Théâtre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#969328", textColor: "#ffffff", outlineColor: "#000000", text: "31" },
          pages: [{ text: "CAEN THEATRE" }],
        },
      },
      {
        id: ["Troarn Saline Bures"],
        name: "Bures",
        city: "TROARN",
        girouette: {
          routeNumber: { backgroundColor: "#969328", textColor: "#ffffff", outlineColor: "#000000", text: "31" },
          pages: [{ text: "TROARN BURES" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:32",
    name: "32",
    colors: { background: "#82c491", text: "#000000" },
    destinations: [
      {
        id: ["Caen Tour Leroy"],
        name: "Tour Leroy",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ font: "1510N2E1", text: "CAEN TOUR LEROY" }],
        },
      },
      {
        id: ["Caen Gambetta"],
        autoHide: true,
        name: "Gambetta",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ text: "CAEN GAMBETTA" }],
        },
      },
      {
        id: ["Verson Grand Bois"],
        autoHide: true,
        name: "Grand Bois",
        city: "VERSON",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "VERSON GRAND BOIS" }],
        },
      },
      {
        id: ["Tourville-sur-Odon Val d'Odon"],
        name: "Val d'Odon",
        city: "TOURVILLE-SUR-ODON",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ font: "1508C2E1", text: "TOURVILLE-SUR-ODON" }, { text: "VAL D'ODON" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:33",
    name: "33",
    colors: { background: "#00698a", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Calvaire Saint-Pierre"],
        name: "Calvaire Saint-Pierre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#00698a", textColor: "#ffffff", outlineColor: "#000000", text: "33" },
          pages: [{ text: "CAEN" }, { font: "1508C2E1", text: "CALVAIRE SAINT-PIERRE" }],
        },
      },
      {
        id: ["Mathieu Sureaux"],
        name: "Sureaux",
        city: "MATHIEU",
        girouette: {
          routeNumber: { backgroundColor: "#00698a", textColor: "#ffffff", outlineColor: "#000000", text: "33" },
          pages: [{ font: "1510N2E1", text: "MATHIEU SUREAUX" }],
        },
      },
      {
        id: ["Biéville-Beuville Le Londel"],
        name: "Le Londel",
        city: "BIÉVILLE-BEUVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#00698a", textColor: "#ffffff", outlineColor: "#000000", text: "33" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "BIEVILLE LE LONDEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:34",
    name: "34",
    colors: { background: "#7f2110", text: "#ffffff" },
    destinations: [
      {
        id: ["Saint-André-sur-Orne Luxembourg"],
        name: "Luxembourg",
        city: "SAINT-ANDRÉ-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#7f2110", textColor: "#ffffff", outlineColor: "#000000", text: "34" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "SAINT-ANDRE LUXEMBOURG" }],
        },
      },
      {
        id: ["Caen Lycée Fresnel"],
        name: "Lycée Fresnel",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#7f2110", textColor: "#ffffff", outlineColor: "#000000", text: "34" },
          pages: [{ font: "1508C2E1", text: "CAEN LYCEE FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:37",
    name: "37",
    colors: { background: "#c3a3c3", text: "#000000" },
    destinations: [
      {
        id: ["Caen Théâtre Quai 5"],
        name: "Théâtre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#c3a3c3", textColor: "#000000", outlineColor: "#FFFFFF", text: "37" },
          pages: [{ text: "CAEN THEATRE" }],
        },
      },
      {
        id: ["Éterville Route d'Aunay"],
        name: "Route d'Aunay",
        city: "ÉTERVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#c3a3c3", textColor: "#000000", outlineColor: "#FFFFFF", text: "37" },
          pages: [{ text: "ETERVILLE" }, { text: "ROUTE D'AUNAY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:40",
    name: "40",
    colors: { background: "#7d6fa6", text: "#ffffff" },
    destinations: [
      {
        id: ["Grentheville Zone d'Activités"],
        name: "Zone d'Activités",
        city: "GRENTHEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "40" },
          pages: [{ text: "GRENTHEVILLE ZA" }],
        },
      },
      {
        id: ["Caen Poincaré"],
        name: "Poincaré",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "40" },
          pages: [{ text: "CAEN POINCARE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:42",
    name: "42",
    colors: { background: "#7d6fa6", text: "#ffffff" },
    destinations: [
      {
        id: ["Colombelles Zone d'Activités"],
        name: "Zone d'Activités",
        city: "COLOMBELLES",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "42" },
          pages: [{ text: "COLOMBELLES ZA" }],
        },
      },
      {
        id: ["Hérouville Saint-Clair"],
        name: "Saint-Clair",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "42" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "HEROUVILLE SAINT-CLAIR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:100",
    name: "100",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Place du Canada"],
        autoHide: true,
        name: "Place du Canada",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "100",
          },
          pages: [{ font: "1507SUPX", text: "CAEN PLACE DU CANADA" }],
        },
      },
      {
        id: ["Authie Jacques Cartier"],
        autoHide: true,
        name: "Jacques Cartier",
        city: "AUTHIE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "100",
          },
          pages: [{ font: "1407SUPX", text: "AUTHIE JACQUES CARTIER" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:101",
    name: "101",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Ouistreham Collège Monnet"],
        autoHide: true,
        name: "Collège Monnet",
        city: "OUISTREHAM",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "101",
          },
          pages: [
            { font: "1508SUPX", text: "OUISTREHAM" },
            { font: "1508SUPX", text: "COLLEGE MONNET" },
          ],
        },
      },
      {
        id: ["Blainville-sur-Orne Blainville Parc"],
        autoHide: true,
        name: "Parc",
        city: "BLAINVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "101",
          },
          pages: [{ font: "1508SUPX", text: "BLAINVILLE PARC" }],
        },
      },
      {
        id: ["Lion-sur-Mer Lion Plage"],
        autoHide: true,
        name: "Plage",
        city: "LION-SUR-MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "101",
          },
          pages: [{ font: "1508SUPX", text: "LION PLAGE" }],
        },
      },
      {
        id: ["LION SUR MER Bas Lion"],
        autoHide: true,
        name: "LION SUR MER Bas Lion",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "101",
          },
          pages: [{ text: "LION SUR MER Bas Lion" }],
        },
      },
      {
        id: ["Hermanville-sur-Mer La Marque"],
        autoHide: true,
        name: "La Marque",
        city: "HERMANVILLE-SUR-MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "101",
          },
          pages: [{ font: "1507SUPX", text: "HERMANVILLE LA MARQUE" }],
        },
      },
      {
        id: ["COLLEVILLE Piéplu"],
        autoHide: true,
        name: "COLLEVILLE Piéplu",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "101",
          },
          pages: [{ text: "COLLEVILLE Piéplu" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:102",
    name: "102",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Bretteville-sur-Odon BRETTEVILLE Koenig"],
        autoHide: true,
        name: "Koenig",
        city: "BRETTEVILLE-SUR-ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "102",
          },
          pages: [{ font: "1508SUPX", text: "BRETTEVILLE KOENIG" }],
        },
      },
      {
        id: ["Caen Collège Moulin"],
        autoHide: true,
        name: "Collège Moulin",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "102",
          },
          pages: [{ font: "1507SUPX", text: "CAEN COLLEGE MOULIN" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:103",
    name: "103",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Calvaire Saint-Pierre"],
        autoHide: true,
        name: "CAEN Calvaire Saint-Pierre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "103",
          },
          pages: [{ text: "CAEN Calvaire Saint-Pierre" }],
        },
      },
      {
        id: ["SAINTE-CROIX Hôtel Fortuné"],
        autoHide: true,
        name: "SAINTE-CROIX Hôtel Fortuné",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "103",
          },
          pages: [{ text: "SAINTE-CROIX Hôtel Fortuné" }],
        },
      },
      {
        id: ["THAON Mairie"],
        autoHide: true,
        name: "THAON Mairie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "103",
          },
          pages: [{ text: "THAON Mairie" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:104",
    name: "104",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Cité U Lebisey"],
        autoHide: true,
        name: "Cité U Lebisey",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "104",
          },
          pages: [{ font: "1507SUPX", text: "CAEN CITE U LEBISEY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:105",
    name: "105",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Gare SNCF"],
        autoHide: true,
        alternate: "Gare SNCF de Caen",
        name: "Gare SNCF",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "105",
          },
          pages: [{ font: "1508SUPX", text: "CAEN GARE SNCF" }],
        },
      },
      {
        id: ["Caen Institut Lemonnier"],
        autoHide: true,
        name: "Institut Lemonnier",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "105",
          },
          pages: [{ font: "1407SUPX", spacing: 1, text: "CAEN INSTITUT LEMONNIER" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:106",
    name: "106",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Mondeville Paul Langevin"],
        autoHide: true,
        name: "Paul Langevin",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "106",
          },
          pages: [{ font: "1407SUPX", spacing: 1, text: "MONDEVILLE PAUL LANGEVIN" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:107",
    name: "107",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Hôtel de Ville Quai 2"],
        autoHide: true,
        name: "Hôtel de Ville",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "107",
          },
          pages: [{ font: "1508SUPX", text: "CAEN HOTEL DE VILLE" }],
        },
      },
      {
        id: ["Caen Lycée Sainte-Ursule"],
        autoHide: true,
        name: "Lycée Sainte-Ursule",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "107",
          },
          pages: [{ font: "1507SUPX", spacing: 1, text: "CAEN LYCEE ST-URSULE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:109",
    name: "109",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Lycée de Gaulle"],
        autoHide: true,
        name: "Lycée de Gaulle",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "109",
          },
          pages: [{ font: "1507SUPX", spacing: 1, text: "CAEN LYCEE DE GAULE" }],
        },
      },
      {
        id: ["Carpiquet Aéroport"],
        autoHide: true,
        name: "Aéroport",
        city: "CARPIQUET",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "109",
          },
          pages: [{ font: "1508SUPX", text: "CARPIQUET AEROPORT" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:110",
    name: "110",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Colombelles Colombelles Mairie"],
        autoHide: true,
        alternate: "Mairie de Colombelles",
        name: "Mairie",
        city: "COLOMBELLES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "110",
          },
          pages: [{ font: "1508SUPX", text: "COLOMBELLES MAIRIE" }],
        },
      },
      {
        id: ["Caen Rostand-Fresnel"],
        autoHide: true,
        name: "Rostand-Fresnel",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "110",
          },
          pages: [{ font: "1507SUPX", spacing: 1, text: "CAEN ROSTAND-FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:111",
    name: "111",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Giberville Mandela"],
        autoHide: true,
        name: "Mandela",
        city: "GIBERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "111",
          },
          pages: [{ font: "1508SUPX", text: "GIBERVILLE MANDELA" }],
        },
      },
      {
        id: ["Mondeville Collège Guillemot"],
        autoHide: true,
        name: "Collège Guillemot",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "111",
          },
          pages: [
            { font: "1508SUPX", text: "MONDEVILLE" },
            { font: "1508SUPX", text: "COLLEGE GUILLEMOT" },
          ],
        },
      },
    ],
  },
  {
    id: "TWISTO:112",
    name: "112",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Cuverville Champ Picot"],
        autoHide: true,
        name: "Champ Picot",
        city: "CUVERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "112",
          },
          pages: [{ font: "1407SUPX", text: "CUVERVILLE CHAMP PICOT" }],
        },
      },
      {
        id: ["Caen Rostand-Fresnel"],
        autoHide: true,
        name: "Rostand-Fresnel",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "112",
          },
          pages: [{ font: "1507SUPX", spacing: 1, text: "CAEN ROSTAND-FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:113",
    name: "113",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Éterville Le Rocreuil"],
        autoHide: true,
        name: "Le Rocreuil",
        city: "ÉTERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "113",
          },
          pages: [{ font: "1507SUPX", text: "ETERVILLE LE ROCREUIL" }],
        },
      },
      {
        id: ["Verson Collège Prévert"],
        autoHide: true,
        name: "Collège Prévert",
        city: "VERSON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "113",
          },
          pages: [{ font: "1407SUPX", spacing: 1, text: "VERSON COLLEGE PREVERT" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:114",
    name: "114",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Rostand-Fresnel"],
        autoHide: true,
        name: "Rostand-Fresnel",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "114",
          },
          pages: [{ font: "1507SUPX", text: "CAEN ROSTAND-FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:115",
    name: "115",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Cuverville Callouins"],
        autoHide: true,
        name: "CUVERVILLE Callouins",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "115",
          },
          pages: [{ text: "CUVERVILLE Callouins" }],
        },
      },
      {
        id: ["Caen Rostand-Fresnel"],
        autoHide: true,
        name: "Rostand-Fresnel",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "115",
          },
          pages: [{ font: "1507SUPX", spacing: 1, text: "CAEN ROSTAND-FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:116",
    name: "116",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Lebisey"],
        autoHide: true,
        name: "Lebisey",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "116",
          },
          pages: [{ text: "HEROUVILLE LEBISEY" }],
        },
      },
      {
        id: ["HÉROUVILLE Collège Mandela"],
        autoHide: true,
        name: "HÉROUVILLE Collège Mandela",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "116",
          },
          pages: [{ text: "HÉROUVILLE Collège Mandela" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:118",
    name: "118",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Louvigny Louvigny Mesnil"],
        autoHide: true,
        name: "Mesnil",
        city: "LOUVIGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "118",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIGNY MESNIL" }],
        },
      },
      {
        id: ["FLEURY Collège Hawking"],
        autoHide: true,
        name: "Collège Hawking",
        city: "FLEURY-SUR-ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "118",
          },
          pages: [{ font: "1507SUPX", text: "FLEURY COLLEGE HAWKING" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:119",
    name: "119",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Copernic"],
        autoHide: true,
        name: "Copernic",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "119",
          },
          pages: [{ font: "1508SUPX", text: "CAEN COPERNIC" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:120",
    name: "120",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Colombelles Place des Tilleuls"],
        autoHide: true,
        name: "Place des Tilleuls",
        city: "COLOMBELLES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "120",
          },
          pages: [
            { font: "1508SUPX", text: "COLOMBELLES" },
            { font: "1507SUPX", text: "PLACE DES TILLEULS" },
          ],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Allende"],
        autoHide: true,
        name: "Allende",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "120",
          },
          pages: [{ font: "1508C2E1", text: "HEROUVILLE ALLENDE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:121",
    name: "121",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Colombelles Colombelles Mairie"],
        autoHide: true,
        name: "Mairie",
        city: "COLOMBELLES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "121",
          },
          pages: [{ font: "1508SUPX", text: "COLOMBELLES MAIRIE" }],
        },
      },
      {
        id: ["Colombelles Lazzaro"],
        autoHide: true,
        name: "Lazzaro",
        city: "COLOMBELLES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "121",
          },
          pages: [{ font: "1507SUPX", text: "COLOMBELLES LAZZARO" }],
        },
      },
      {
        id: ["Mondeville Collège Guillemot"],
        autoHide: true,
        name: "Collège Guillemot",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "121",
          },
          pages: [
            { font: "1508SUPX", text: "MONDEVILLE" },
            { font: "1508SUPX", text: "COLLEGE GUILLEMOT" },
          ],
        },
      },
    ],
  },
  {
    id: "TWISTO:123",
    name: "123",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Blainville-sur-Orne Blainville Langevin Wallon"],
        autoHide: true,
        name: "Langevin Wallon",
        city: "BLAINVILLE-SUR-ONE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "123",
          },
          pages: [{ font: "1407SUPX", text: "BLAINVILLE LANGEVIN WALLON" }],
        },
      },
      {
        id: ["Saint-Aubin-d'Arquenay Saint-Aubin Eglise"],
        autoHide: true,
        alternate: "Église de Saint-Aubin-d'Arquenay",
        name: "Église",
        city: "SAINT-AUBIN-D'ARQUENAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "123",
          },
          pages: [{ text: "SAINT-AUBIN EGLISE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:124",
    name: "124",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Saint-Aubin-d'Arquenay Saint-Aubin Eglise"],
        autoHide: true,
        alternate: "Église de Saint-Aubin-d'Arquenay",
        name: "Église",
        city: "SAINT-AUBIN-D'ARQUENAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "124",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-AUBIN EGLISE" }],
        },
      },
      {
        id: ["Caen Croix Guérin"],
        autoHide: true,
        name: "Croix Guérin",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "124",
          },
          pages: [{ font: "1508SUPX", text: "CAEN CROIX GUERIN" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:125",
    name: "125",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Cité U Lebisey"],
        autoHide: true,
        name: "Cité U Lebisey",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "125",
          },
          pages: [{ font: "1507SUPX", text: "CAEN CITE U LEBISEY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:126",
    name: "126",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Saint-Contest Vellerie"],
        autoHide: true,
        name: "Vellerie",
        city: "SAINT-CONTEST",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "126",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-CONTEST VELLERIE" }],
        },
      },
      {
        id: ["Caen Collège Monod"],
        autoHide: true,
        name: "CAEN Collège Monod",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "126",
          },
          pages: [{ font: "1507SUPX", text: "CAEN COLLEGE MONOD" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:127",
    name: "127",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Villons-les-Buissons Coopérative"],
        autoHide: true,
        name: "Coopérative",
        city: "VILLONS-LES-BUISSONS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "127",
          },
          pages: [{ font: "1507SUPX", text: "VILLONS COOPERATIVE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:130",
    name: "130",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Gare SNCF"],
        autoHide: true,
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "130",
          },
          pages: [{ font: "1508SUPX", text: "CAEN GARE SNCF" }],
        },
      },
      {
        id: ["THUE ET MUE Primevères"],
        autoHide: true,
        name: "THUE ET MUE Primevères",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "130",
          },
          pages: [{ text: "THUE ET MUE Primevères" }],
        },
      },
      {
        id: ["Caen Cité U Lebisey"],
        autoHide: true,
        name: "Cité U Lebisey",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "130",
          },
          pages: [{ font: "1507SUPX", text: "CAEN CITE U LEBISEY" }],
        },
      },
      {
        id: ["CAEN Théâtre"],
        autoHide: true,
        name: "CAEN Théâtre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "130",
          },
          pages: [{ text: "CAEN Théâtre" }],
        },
      },
      {
        id: ["BROUAY Mairie"],
        autoHide: true,
        name: "BROUAY Mairie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "130",
          },
          pages: [{ text: "BROUAY Mairie" }],
        },
      },
      {
        id: ["BRETTEVILLE Bessin"],
        autoHide: true,
        name: "BRETTEVILLE Bessin",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "130",
          },
          pages: [{ text: "BRETTEVILLE Bessin" }],
        },
      },
      {
        id: ["ROTS Bourg"],
        autoHide: true,
        name: "ROTS Bourg",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "130",
          },
          pages: [{ text: "ROTS Bourg" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:131",
    name: "131",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Troarn Collège"],
        autoHide: true,
        alternate: "Collège de Troarn",
        name: "Collège",
        city: "TROARN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "131",
          },
          pages: [{ font: "1508SUPX", text: "TROARN COLLEGE" }],
        },
      },
      {
        id: ["BURES-SUR-DIVES Lavoir"],
        autoHide: true,
        name: "BURES-SUR-DIVES Lavoir",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "131",
          },
          pages: [{ text: "BURES-SUR-DIVES Lavoir" }],
        },
      },
      {
        id: ["SANNERVILLE Libération"],
        autoHide: true,
        name: "SANNERVILLE Libération",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "131",
          },
          pages: [{ text: "SANNERVILLE Libération" }],
        },
      },
      {
        id: ["SANNERVILLE Bourg"],
        autoHide: true,
        name: "SANNERVILLE Bourg",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "131",
          },
          pages: [{ text: "SANNERVILLE Bourg" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:133",
    name: "133",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Théâtre"],
        autoHide: true,
        name: "CAEN Théâtre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "133",
          },
          pages: [{ text: "CAEN Théâtre" }],
        },
      },
      {
        id: ["CAEN Lycée Malherbe"],
        autoHide: true,
        name: "CAEN Lycée Malherbe",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "133",
          },
          pages: [{ text: "CAEN Lycée Malherbe" }],
        },
      },
      {
        id: ["CHEUX Le Bosq"],
        autoHide: true,
        name: "CHEUX Le Bosq",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "133",
          },
          pages: [{ text: "CHEUX Le Bosq" }],
        },
      },
      {
        id: ["CHEUX Bourg"],
        autoHide: true,
        name: "CHEUX Bourg",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "133",
          },
          pages: [{ text: "CHEUX Bourg" }],
        },
      },
      {
        id: ["CAEN Collège Moulin"],
        autoHide: true,
        name: "CAEN Collège Moulin",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "133",
          },
          pages: [{ text: "CAEN Collège Moulin" }],
        },
      },
      {
        id: ["THUE ET MUE Mesnil Patry"],
        autoHide: true,
        name: "THUE ET MUE Mesnil Patry",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "133",
          },
          pages: [{ text: "THUE ET MUE Mesnil Patry" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:134",
    name: "134",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Gare SNCF"],
        autoHide: true,
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "134",
          },
          pages: [{ text: "CAEN Gare SNCF" }],
        },
      },
      {
        id: ["CAEN Aviation"],
        autoHide: true,
        name: "CAEN Aviation",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "134",
          },
          pages: [{ text: "CAEN Aviation" }],
        },
      },
      {
        id: ["SOLIERS Tageret"],
        autoHide: true,
        name: "SOLIERS Tageret",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "134",
          },
          pages: [{ text: "SOLIERS Tageret" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:135",
    name: "135",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Gare SNCF"],
        autoHide: true,
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "135",
          },
          pages: [{ text: "CAEN Gare SNCF" }],
        },
      },
      {
        id: ["SAINT AIGNAN Mairie"],
        autoHide: true,
        name: "SAINT AIGNAN Mairie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "135",
          },
          pages: [{ text: "SAINT AIGNAN Mairie" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:136",
    name: "136",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Allende"],
        autoHide: true,
        name: "Allende",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "136",
          },
          pages: [{ font: "1508SUPX", text: "HEROUVILLE ALLENDE" }],
        },
      },
      {
        id: ["TROARN Stade"],
        autoHide: true,
        name: "TROARN Stade",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "136",
          },
          pages: [{ text: "TROARN Stade" }],
        },
      },
      {
        id: ["MESNIL 2ème Arrêt"],
        autoHide: true,
        name: "MESNIL 2ème Arrêt",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "136",
          },
          pages: [{ text: "MESNIL 2ème Arrêt" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:137",
    name: "137",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Ifs COLLEGE SENGHOR QUAI A"],
        autoHide: true,
        name: "Collège Senghor",
        city: "IFS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            spacing: 2,
            text: "137",
          },
          pages: [{ font: "1507SUPX", text: "IFS COLLEGE SENGHOR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:137A",
    name: "137A",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["SOLIERS Hameau du Four"],
        autoHide: true,
        name: "SOLIERS Hameau du Four",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            text: "137A",
          },
          pages: [{ text: "SOLIERS Hameau du Four" }],
        },
      },
      {
        id: ["GRENTHEVILLE Le Hameau"],
        autoHide: true,
        name: "GRENTHEVILLE Le Hameau",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            text: "137A",
          },
          pages: [{ text: "GRENTHEVILLE Le Hameau" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:137B",
    name: "137B",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["BOURGUEBUS La Hogue"],
        autoHide: true,
        name: "BOURGUEBUS La Hogue",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            text: "137B",
          },
          pages: [{ text: "BOURGUEBUS La Hogue" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:137C",
    name: "137C",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["BOURGUEBUS Centre"],
        autoHide: true,
        name: "BOURGUEBUS Centre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            text: "137C",
          },
          pages: [{ text: "BOURGUEBUS Centre" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:137D",
    name: "137D",
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["SOLIERS Hameau du Four"],
        autoHide: true,
        name: "SOLIERS Hameau du Four",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ffffff",
            textColor: "#702283",
            text: "137D",
          },
          pages: [{ text: "SOLIERS Hameau du Four" }],
        },
      },
    ],
  },
  {
    id: "TWISTO:B1",
    mapOnly: true,
    name: "B1",
    colors: { background: "#23a638", text: "#ffffff" },
    destinations: [
      {
        id: ["Ifs Jean Vilar"],
        name: "IFS Jean Vilar",
        girouette: {
          routeNumber: { backgroundColor: "#23a638", textColor: "#ffffff", outlineColor: "#000000", text: "B1" },
          pages: [[{ text: "PLAN B TRAM T1" }, { text: "IFS JEAN VILAR" }]],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Saint-Clair"],
        name: "Saint-Clair",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#23a638", textColor: "#ffffff", outlineColor: "#000000", text: "B1" },
          pages: [[{ text: "PLAN B TRAM T1" }, { text: "HEROUVILLE ST-CLAIR" }]],
        },
      },
    ],
  },
  {
    id: "TWISTO:B2",
    mapOnly: true,
    name: "Plan B - T2",
    colors: { background: "#e73132", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Campus 2"],
        name: "Campus 2",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#e73132", textColor: "#ffffff", outlineColor: "#000000", text: "B2" },
          pages: [[{ text: "PLAN B TRAM T2" }, { text: "CAEN CAMPUS 2" }]],
        },
      },
      {
        id: ["Caen Presqu'ile"],
        name: "CAEN Presqu'ile",
        girouette: {
          routeNumber: { backgroundColor: "#e73132", textColor: "#ffffff", outlineColor: "#000000", text: "B2" },
          pages: [[{ text: "PLAN B TRAM T2" }, { text: "CAEN PRESQU'ILE" }]],
        },
      },
    ],
  },
  {
    id: "TWISTO:B3",
    mapOnly: true,
    name: "Plan B - T3",
    colors: { background: "#009adf", text: "#ffffff" },
    destinations: [
      {
        id: ["Fleury-sur-Orne HAUTS DE L'ORNE"],
        name: "Hauts de l'Orne",
        city: "FLEURY-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "B3" },
          pages: [[{ text: "PLAN B TRAM T3" }, { text: "FLEURY HAUTS DE L'ORNE" }]],
        },
      },
      {
        id: ["Caen Château-Quatrans"],
        name: "Château Quatrans",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "B3" },
          pages: [[{ text: "PLAN B TRAM T3" }, { text: "CAEN CHATEAU QUATRANS" }]],
        },
      },
    ],
  },
  {
    id: "TWISTO:MP",
    name: "MP",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#FF0000", text: "#ffffff" },
    destinations: [],
  },
];

const network: Network = {
  slug: "twisto",
  name: "Twisto – Caen la Mer",
  routes: twistoRoutes,
  color: "#0072bc",
  textColor: "#ffffff",
};

export default network;
