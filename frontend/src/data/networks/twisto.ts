import { Route } from "~/@types";

const twistoRoutes: Route[] = [
  {
    id: "TWISTO-T1",
    name: "T1",
    mapOnly: true,
    colors: { background: "#23a638", text: "#ffffff" },
    destinations: [
      {
        id: ["Ifs Jean Vilar"],
        name: "IFS Jean Vilar",
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
    id: "TWISTO-T2",
    name: "T2",
    mapOnly: true,
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
        id: ["Caen Presqu&apos;ile"],
        name: "CAEN Presqu'ile",
        girouette: {
          routeNumber: { backgroundColor: "#e73132", textColor: "#ffffff", outlineColor: "#000000", text: "T2" },
          pages: [{ font: "1510N2E1", text: "CAEN PRESQU'ILE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-T3",
    name: "T3",
    mapOnly: true,
    colors: { background: "#009adf", text: "#ffffff" },
    destinations: [
      {
        id: ["Fleury-sur-Orne HAUTS DE L&apos;ORNE"],
        name: "Hauts de l'Orne",
        city: "FLEURY-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "T3" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "FLEURY HAUTS DE L'ORNE" }],
        },
      },
      {
        id: ["Caen Château-Quatrans"],
        name: "Château Quatrans",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "T3" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "CAEN CHATEAU QUATRANS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-NVCV",
    name: "NVCV",
    mapOnly: true,
    colors: { background: "#e4051f", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Palais des Sports"],
        name: "Palais des Sports",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508C2E1",
            backgroundColor: "#e4051f",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "NAV",
          },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "PALAIS DES SPORTS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-1",
    name: "1",
    mapOnly: true,
    colors: { background: "#d8005b", text: "#ffffff" },
    destinations: [
      {
        id: ["Mondeville Centre Commercial"],
        name: "Centre Commercial",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#d8005b", textColor: "#ffffff", outlineColor: "#000000", text: "1" },
          pages: [{ text: "MONDEVILLE" }, { font: "1508C2E1", textSpacing: 3, text: "CENTRE COMMERCIAL" }],
        },
      },
      {
        id: ["Caen Chemin Vert"],
        name: "Chemin Vert",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#d8005b", textColor: "#ffffff", outlineColor: "#000000", text: "1" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "CAEN CHEMIN VERT" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-2",
    name: "2",
    mapOnly: true,
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
    id: "TWISTO-3",
    name: "3",
    mapOnly: true,
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
          pages: [{ font: "1508C2E1", text: "CARPIQUET     AEROPORT" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-4",
    name: "4",
    mapOnly: true,
    colors: { background: "#da609f", text: "#ffffff" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Hérouville Centre Commercial"],
        name: "Centre Commercial",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#da609f", textColor: "#ffffff", outlineColor: "#000000", text: "4" },
          pages: [
            { font: "1508C2E1", textSpacing: 1, text: "HEROUVILLE-SAINT-CLAIR" },
            { font: "1508C2E1", textSpacing: 3, text: "CENTRE COMMERCIAL" },
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
    id: "TWISTO-5",
    name: "5",
    mapOnly: true,
    colors: { background: "#642580", text: "#ffffff" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Sphère"],
        name: "Sphère",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#642580", textColor: "#ffffff", outlineColor: "#000000", text: "5" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "HEROUVILLE SPHERE" }],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Lebisey"],
        name: "Lebisey",
        city: "HÉROUVILLE SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#642580", textColor: "#ffffff", outlineColor: "#000000", text: "5" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "HEROUVILLE Lebisey" }],
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
    id: "TWISTO-6A",
    name: "6A",
    mapOnly: true,
    colors: { background: "#fcdd19", text: "#000000" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Saint-Clair"],
        name: "Saint-Clair",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#fcdd19", textColor: "#000000", text: "6A" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "HEROUVILLE SAINT-CLAIR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-6B",
    name: "6B",
    mapOnly: true,
    colors: { background: "#fcdd19", text: "#000000" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Saint-Clair"],
        name: "Saint-Clair",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#fcdd19", textColor: "#000000", text: "6B" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "HEROUVILLE SAINT-CLAIR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-7",
    name: "7",
    mapOnly: true,
    colors: { background: "#8d5e2a", text: "#ffffff" },
    destinations: [
      {
        id: ["Biéville-Beuville ZA au Village"],
        name: "Z.A. au Village",
        city: "BIÉVILLE-BEUVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#8d5e2a", textColor: "#ffffff", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "BIEVILLE-BEUVILLE" }, { text: "Z.A. AU VILLAGE" }],
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
      {
        id: ["Cambes-en-Plaine Le Parc"],
        name: "Le Parc",
        city: "CAMBES-EN-PLAINE",
        girouette: {
          routeNumber: { backgroundColor: "#8d5e2a", textColor: "#ffffff", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1510N2E1", text: "CAMBES LE PARC" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-8",
    name: "8",
    mapOnly: true,
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
    id: "TWISTO-9",
    name: "9",
    mapOnly: true,
    colors: { background: "#86bce7", text: "#000000" },
    destinations: [
      {
        id: ["Colombelles Colombelles Mairie"],
        name: "Mairie",
        city: "COLOMBELLES",
        girouette: {
          routeNumber: { backgroundColor: "#86bce7", textColor: "#000000", outlineColor: "#FFFFFF", text: "9" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "COLOMBELLES MAIRIE" }],
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
    id: "TWISTO-10",
    name: "10",
    mapOnly: true,
    colors: { background: "#b0368c", text: "#ffffff" },
    destinations: [
      {
        id: ["Blainville-sur-Orne Terres d&apos;Avenir"],
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
        id: ["Blainville-sur-Orne Blainville Parc"],
        name: "Parc",
        city: "BLAINVILLE-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#b0368c", textColor: "#ffffff", outlineColor: "#000000", text: "10" },
          pages: [{ font: "1510N2E1", text: "BLAINVILLE PARC" }],
        },
      },
      {
        id: ["Mondeville Charlotte Corday"],
        name: "Charlotte Corday",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#b0368c", textColor: "#ffffff", outlineColor: "#000000", text: "10" },
          pages: [{ text: "MONDEVILLE" }, { font: "1508C2E1", textSpacing: 3, text: "CHARLOTTE CORDAY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-10EX",
    name: "10EX",
    mapOnly: true,
    colors: { background: "#f29fc5", text: "#000000" },
    destinations: [
      {
        id: ["Blainville-sur-Orne Blainville Parc"],
        name: "Parc",
        city: "BLAINVILLE-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#f29fc5", textColor: "#000000", outlineColor: "#FFFFFF", text: "10" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "BLAINVILLE EXPRESS" }],
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
    id: "TWISTO-11",
    name: "11",
    mapOnly: true,
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
        id: ["Bretteville-sur-Odon BRETTEVILLE Koenig"],
        name: "Koenig",
        city: "BRETTEVILLE-SUR-ODON",
        girouette: {
          routeNumber: { backgroundColor: "#ea5b0c", textColor: "#ffffff", outlineColor: "#000000", text: "11" },
          pages: [{ font: "1508C2E1", text: "BRETTEVILLE KOENING" }],
        },
      },
      {
        id: ["Caen Hôtel de Ville Quai 1"],
        name: "Hôtel de Ville",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#ea5b0c", textColor: "#ffffff", outlineColor: "#000000", text: "11" },
          pages: [{ font: "1508C2E1", text: "CAEN HOTEL DE VILLE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-11EX",
    name: "11EX",
    mapOnly: true,
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
        name: "CUVERVILLE Champ Picot",
        girouette: {
          routeNumber: { backgroundColor: "#f39869", textColor: "#000000", outlineColor: "#FFFFFF", text: "11" },
          pages: [{ font: "1508C2E1", text: "CUVERVILLE EXPRESS" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-12",
    name: "12",
    mapOnly: true,
    colors: { background: "#009d99", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Gare SNCF"],
        name: "Gare SNCF",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1510N2E1", text: "CAEN GARE SNCF" }],
        },
      },
      {
        id: ["Caen Calvaire Saint-Pierre"],
        name: "Calvaire Saint-Pierre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "CAEN CALVAIRE ST-PIERRE" }],
        },
      },
      {
        id: ["Lion-sur-Mer Haut-Lion"],
        name: "Haut-Lion",
        city: "LION-SUR-MER",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "LION HAUT-LION" }],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Allende"],
        name: "Allende",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "HEROUVILLE ALLENDE" }],
        },
      },
      {
        id: ["Caen Croix Guérin"],
        name: "Croix Guérin",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "CAEN CROIX GUERIN" }],
        },
      },
      {
        id: ["OUISTREHAM Sacré Coeur"],
        name: "OUISTREHAM Sacré Coeur",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "OUISTREHAM Sacré Coeur" }],
        },
      },
      {
        id: ["Caen Cité U Lebisey"],
        name: "Cité U Lebisey",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", text: "CAEN CITE U LEBISEY" }],
        },
      },
      {
        id: ["Hermanville-sur-Mer Isaville"],
        name: "HERMANVILLE Isaville",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", text: "HERMANVILLE ISAVILLE" }],
        },
      },
      {
        id: ["Ouistreham RIVA CHARMETTES"],
        name: "OUISTREHAM Charmettes",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "OUISTREHAM CHARMETTES" }],
        },
      },
      {
        id: ["COLLEVILLE Becquet"],
        name: "COLLEVILLE Becquet",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "COLLEVILLE Becquet" }],
        },
      },
      {
        id: ["Caen Tour Leroy"],
        name: "Tour Leroy",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "CAEN TOUR LEROY" }],
        },
      },
      {
        id: ["LION Plage"],
        name: "LION Plage",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "LION Plage" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-12EX",
    name: "12EX",
    mapOnly: true,
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
        id: ["Caen Gare SNCF"],
        name: "Gare SNCF",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ font: "1513B3E1", text: "CAEN EXPRESS" }],
        },
      },
      {
        id: ["Ouistreham Riva Centre"],
        name: "Riva Centre",
        city: "OUISTREHAM",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "OUISTREHAM RIVA CENTRE" }],
        },
      },
      {
        id: ["Caen Tour Leroy"],
        name: "Tour Leroy",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ text: "CAEN EXPRESS" }],
        },
      },
      {
        id: ["OUISTREHAM Riva Charmettes"],
        name: "OUISTREHAM Riva Charmettes",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", outlineColor: "#FFFFFF", text: "12" },
          pages: [{ text: "OUISTREHAM Riva Charmettes" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-20",
    name: "20",
    mapOnly: true,
    colors: { background: "#f59c00", text: "#000000" },
    destinations: [
      {
        id: ["Caen Calvaire Saint-Pierre"],
        name: "CAEN Calvaire Saint-Pierre",
        girouette: {
          routeNumber: { backgroundColor: "#f59c00", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ text: "CAEN" }, { font: "1508C2E1", text: "CALVAIRE SAINT-PIERRE" }],
        },
      },
      {
        id: ["Authie Jacques Cartier"],
        name: "Jacques Cartier",
        city: "AUTHIE",
        girouette: {
          routeNumber: { backgroundColor: "#f59c00", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "AUTHIE JACQUES CARTIER" }],
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
    id: "TWISTO-21",
    name: "21",
    mapOnly: true,
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
    id: "TWISTO-22",
    name: "22",
    mapOnly: true,
    colors: { background: "#f3a3b9", text: "#000000" },
    destinations: [
      {
        id: ["CAEN Théâtre"],
        name: "CAEN Théâtre",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "CAEN Théâtre" }],
        },
      },
      {
        id: ["Lion-sur-Mer Lion Plage"],
        name: "LION SUR MER Plage",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "LION-SUR-MER PLAGE" }],
        },
      },
      {
        id: ["Caen Calvaire Saint-Pierre"],
        name: "Calvaire Saint-Pierre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "CAEN CALVAIRE ST-PIERRE" }],
        },
      },
      {
        id: ["BIEVILLE Rue du Home"],
        name: "BIEVILLE Rue du Home",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "BIEVILLE Rue du Home" }],
        },
      },
      {
        id: ["PERIERS Mairie"],
        name: "PERIERS Mairie",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "PERIERS Mairie" }],
        },
      },
      {
        id: ["CAEN Tour Leroy"],
        name: "CAEN Tour Leroy",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "CAEN Tour Leroy" }],
        },
      },
      {
        id: ["BIEVILLE Château"],
        name: "BIEVILLE Château",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "BIEVILLE Château" }],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Allende"],
        name: "Allende",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "HEROUVILLE ALLENDE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-23",
    name: "23",
    mapOnly: true,
    colors: { background: "#e94861", text: "#ffffff" },
    destinations: [
      {
        id: ["Cairon Cairon Château"],
        name: "Château",
        city: "CAIRON",
        girouette: {
          routeNumber: { backgroundColor: "#e94861", textColor: "#ffffff", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1510N2E1", text: "CAIRON CHATEAU" }],
        },
      },
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
        id: ["Louvigny Michelet"],
        name: "Michelet",
        city: "LOUVIGNY",
        girouette: {
          routeNumber: { backgroundColor: "#e94861", textColor: "#ffffff", outlineColor: "#000000", text: "23" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "LOUVIGNY MICHELET" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-30",
    name: "30",
    mapOnly: true,
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
          pages: [{ text: "MONDEVILLE" }, { font: "1508C2E1", textSpacing: 3, text: "CENTRE COMMERCIAL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-31",
    name: "31",
    mapOnly: true,
    colors: { background: "#969328", text: "#ffffff" },
    destinations: [
      {
        id: ["CAEN Théâtre"],
        name: "CAEN Théâtre",
        girouette: {
          routeNumber: { backgroundColor: "#969328", textColor: "#ffffff", outlineColor: "#000000", text: "31" },
          pages: [{ text: "CAEN Théâtre" }],
        },
      },
      {
        id: ["TROARN Bures"],
        name: "TROARN Bures",
        girouette: {
          routeNumber: { backgroundColor: "#969328", textColor: "#ffffff", outlineColor: "#000000", text: "31" },
          pages: [{ text: "TROARN Bures" }],
        },
      },
      {
        id: ["Caen Gare SNCF"],
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: { backgroundColor: "#969328", textColor: "#ffffff", outlineColor: "#000000", text: "31" },
          pages: [{ text: "CAEN GARE SNCF" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-32",
    name: "32",
    mapOnly: true,
    colors: { background: "#82c491", text: "#000000" },
    destinations: [
      {
        id: ["Verson Grand Bois"],
        name: "VERSON Grand bois",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "VERSON GRAND BOIS" }],
        },
      },
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
        id: ["Tourville-sur-Odon Val d&apos;Odon"],
        name: "Val d'Odon",
        city: "TOURVILLE-SUR-ODON",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ font: "1508C2E1", text: "TOURVILLE-SUR-ODON" }, { text: "VAL D'ODON" }],
        },
      },
      {
        id: ["CAEN Gambetta"],
        name: "CAEN Gambetta",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ text: "CAEN Gambetta" }],
        },
      },
      {
        id: ["TOURVILLE Val d Odon"],
        name: "TOURVILLE Val d Odon",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ text: "TOURVILLE Val d Odon" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-33",
    name: "33",
    mapOnly: true,
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
        id: ["MATHIEU Le Londel"],
        name: "MATHIEU Le Londel",
        girouette: {
          routeNumber: { backgroundColor: "#00698a", textColor: "#ffffff", outlineColor: "#000000", text: "33" },
          pages: [{ text: "MATHIEU Le Londel" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-34",
    name: "34",
    mapOnly: true,
    colors: { background: "#7f2110", text: "#ffffff" },
    destinations: [
      {
        id: ["Saint-André-sur-Orne Luxembourg"],
        name: "Luxembourg",
        city: "SAINT-ANDRÉ-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#7f2110", textColor: "#ffffff", outlineColor: "#000000", text: "34" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "SAINT-ANDRE LUXEMBOURG" }],
        },
      },
      {
        id: ["Caen Lycée Fresnel"],
        name: "CAEN Lycée Fresnel",
        girouette: {
          routeNumber: { backgroundColor: "#7f2110", textColor: "#ffffff", outlineColor: "#000000", text: "34" },
          pages: [{ font: "1508C2E1", text: "CAEN LYCEE FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-37",
    name: "37",
    mapOnly: true,
    colors: { background: "#ccb4c9", text: "#000000" },
    destinations: [
      {
        id: ["Caen Théâtre"],
        name: "Théâtre",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#ccb4c9", textColor: "#000000", outlineColor: "#FFFFFF", text: "37" },
          pages: [{ text: "CAEN THEATRE" }],
        },
      },
      {
        id: ["Éterville Route d&apos;Aunay"],
        name: "Route d'Aunay",
        city: "ÉTERVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#ccb4c9", textColor: "#000000", outlineColor: "#FFFFFF", text: "37" },
          pages: [{ text: "ETERVILLE" }, { text: "ROUTE D'AUNAY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-40",
    name: "40",
    mapOnly: true,
    colors: { background: "#7d6fa6", text: "#ffffff" },
    destinations: [
      {
        id: ["GRENTHEVILLE Zone d Activites"],
        name: "GRENTHEVILLE Zone d Activites",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "40" },
          pages: [{ text: "GRENTHEVILLE Zone d Activites" }],
        },
      },
      {
        id: ["Caen Poincaré"],
        name: "CAEN Poincare",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "40" },
          pages: [{ text: "CAEN POINCARE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-42",
    name: "42",
    mapOnly: true,
    colors: { background: "#7d6fa6", text: "#ffffff" },
    destinations: [
      {
        id: ["COLOMBELLES Zone d'Activités"],
        name: "COLOMBELLES Zone d'Activités",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "42" },
          pages: [{ text: "COLOMBELLES Zone d'Activités" }],
        },
      },
      {
        id: ["HEROUVILLE Saint-Clair"],
        name: "HEROUVILLE Saint-Clair",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "42" },
          pages: [{ text: "HEROUVILLE Saint-Clair" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-NUIT",
    name: "NUIT",
    mapOnly: true,
    colors: { background: "#011337", text: "#ffffff" },
    destinations: [
      {
        id: ["Hérouville-Saint-Clair Portes de la Mer"],
        name: "HÉROUVILLE Portes de la Mer",
        girouette: {
          routeNumber: { backgroundColor: "#011337", textColor: "#ffffff", outlineColor: "#000000", text: "NUIT" },
          pages: [{ text: "HÉROUVILLE Portes de la Mer" }],
        },
      },
      {
        id: ["Noctibus"],
        name: "Noctibus",
        girouette: {
          routeNumber: { backgroundColor: "#011337", textColor: "#ffffff", outlineColor: "#000000", text: "NUIT" },
          pages: [{ text: "Noctibus" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-100",
    name: "100",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Place du Canada"],
        name: "CAEN Place du Canada",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "100",
          },
          pages: [{ font: "1507SUPX", textSpacing: 1, text: "CAEN PLACE DU CANADA" }],
        },
      },
      {
        id: ["AUTHIE Jacques Cartier"],
        name: "AUTHIE Jacques Cartier",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "100",
          },
          pages: [{ text: "AUTHIE Jacques Cartier" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-101",
    name: "101",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["OUISTREHAM Collège Monnet"],
        name: "OUISTREHAM Collège Monnet",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "101",
          },
          pages: [{ text: "OUISTREHAM Collège Monnet" }],
        },
      },
      {
        id: ["BLAINVILLE Parc"],
        name: "BLAINVILLE Parc",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "101",
          },
          pages: [{ text: "BLAINVILLE Parc" }],
        },
      },
      {
        id: ["LION SUR MER Plage"],
        name: "LION SUR MER Plage",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "101",
          },
          pages: [{ text: "LION SUR MER Plage" }],
        },
      },
      {
        id: ["LION SUR MER Bas Lion"],
        name: "LION SUR MER Bas Lion",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "101",
          },
          pages: [{ text: "LION SUR MER Bas Lion" }],
        },
      },
      {
        id: ["HERMANVILLE La Marque"],
        name: "HERMANVILLE La Marque",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "101",
          },
          pages: [{ text: "HERMANVILLE La Marque" }],
        },
      },
      {
        id: ["COLLEVILLE Piéplu"],
        name: "COLLEVILLE Piéplu",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "101",
          },
          pages: [{ text: "COLLEVILLE Piéplu" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-102",
    name: "102",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["BRETTEVILLE Koenig"],
        name: "BRETTEVILLE Koenig",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "102",
          },
          pages: [{ text: "BRETTEVILLE Koenig" }],
        },
      },
      {
        id: ["Caen Collège Moulin"],
        name: "Collège Moulin",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "102",
          },
          pages: [{ font: "1507SUPX", text: "CAEN COLLEGE MOULIN" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-103",
    name: "103",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Calvaire Saint-Pierre"],
        name: "CAEN Calvaire Saint-Pierre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "103",
          },
          pages: [{ text: "CAEN Calvaire Saint-Pierre" }],
        },
      },
      {
        id: ["SAINTE-CROIX Hôtel Fortuné"],
        name: "SAINTE-CROIX Hôtel Fortuné",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "103",
          },
          pages: [{ text: "SAINTE-CROIX Hôtel Fortuné" }],
        },
      },
      {
        id: ["THAON Mairie"],
        name: "THAON Mairie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "103",
          },
          pages: [{ text: "THAON Mairie" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-104",
    name: "104",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Cité U Lebisey"],
        name: "Cité U Lebisey",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "104",
          },
          pages: [{ font: "1507SUPX", text: "CAEN CITE U LEBISEY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-105",
    name: "105",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Gare SNCF"],
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "105",
          },
          pages: [{ text: "CAEN Gare SNCF" }],
        },
      },
      {
        id: ["Caen Institut Lemonnier"],
        name: "Institut Lemonnier",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "105",
          },
          pages: [{ font: "1407SUPX", textSpacing: 1, text: "CAEN INSTITUT LEMONNIER" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-106",
    name: "106",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Mondeville Paul Langevin"],
        name: "MONDEVILLE Paul Langevin",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "106",
          },
          pages: [{ font: "1407SUPX", textSpacing: 1, text: "MONDEVILLE PAUL LANGEVIN" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-107",
    name: "107",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Hôtel de Ville"],
        name: "CAEN Hôtel de Ville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "107",
          },
          pages: [{ text: "CAEN Hôtel de Ville" }],
        },
      },
      {
        id: ["Caen Lycée Sainte-Ursule"],
        name: "Lycée Sainte-Ursule",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "107",
          },
          pages: [{ font: "1507SUPX", textSpacing: 1, text: "CAEN LYCEE ST-URSULE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-109",
    name: "109",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Lycée de Gaulle"],
        name: "Lycée de Gaulle",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "109",
          },
          pages: [{ font: "1507SUPX", textSpacing: 1, text: "CAEN LYCEE DE GAULE" }],
        },
      },
      {
        id: ["CARPIQUET Aéroport"],
        name: "CARPIQUET Aéroport",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "109",
          },
          pages: [{ text: "CARPIQUET Aéroport" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-110",
    name: "110",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Colombelles Colombelles Mairie"],
        name: "COLOMBELLES Mairie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "110",
          },
          pages: [{ font: "1507SUPX", text: "COLOMBELLES MAIRIE" }],
        },
      },
      {
        id: ["Caen Rostand-Fresnel"],
        name: "Rostand-Fresnel",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "110",
          },
          pages: [{ font: "1507SUPX", textSpacing: 1, text: "CAEN ROSTAND-FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-111",
    name: "111",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["COLOMBELLES Mandela"],
        name: "COLOMBELLES Mandela",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "111",
          },
          pages: [{ text: "COLOMBELLES Mandela" }],
        },
      },
      {
        id: ["Mondeville Collège Guillemot"],
        name: "Collège Guillemot",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "111",
          },
          pages: [
            { font: "1508SUPX", text: "MONDEVILLE" },
            { font: "1507SUPX", text: "COLLEGE GUILLEMOT" },
          ],
        },
      },
    ],
  },
  {
    id: "TWISTO-112",
    name: "112",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CUVERVILLE Champ Picot"],
        name: "CUVERVILLE Champ Picot",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "112",
          },
          pages: [{ text: "CUVERVILLE Champ Picot" }],
        },
      },
      {
        id: ["Caen Rostand-Fresnel"],
        name: "Rostand-Fresnel",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "112",
          },
          pages: [{ font: "1507SUPX", textSpacing: 1, text: "CAEN ROSTAND-FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-113",
    name: "113",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["ETERVILLE le Rocreuil"],
        name: "ETERVILLE le Rocreuil",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "113",
          },
          pages: [{ text: "ETERVILLE le Rocreuil" }],
        },
      },
      {
        id: ["Verson Collège Prévert"],
        name: "Collège Prévert",
        city: "VERSON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "113",
          },
          pages: [{ font: "1407SUPX", textSpacing: 1, text: "VERSON COLLEGE PREVERT" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-114",
    name: "114",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Rostand Fresnel"],
        name: "CAEN Rostand Fresnel",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "114",
          },
          pages: [{ text: "CAEN Rostand Fresnel" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-115",
    name: "115",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CUVERVILLE Callouins"],
        name: "CUVERVILLE Callouins",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "115",
          },
          pages: [{ text: "CUVERVILLE Callouins" }],
        },
      },
      {
        id: ["Caen Rostand-Fresnel"],
        name: "Rostand-Fresnel",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "115",
          },
          pages: [{ font: "1507SUPX", textSpacing: 1, text: "CAEN ROSTAND-FRESNEL" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-116",
    name: "116",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["HEROUVILLE Lebisey"],
        name: "HEROUVILLE Lebisey",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "116",
          },
          pages: [{ text: "HEROUVILLE Lebisey" }],
        },
      },
      {
        id: ["HÉROUVILLE Collège Mandela"],
        name: "HÉROUVILLE Collège Mandela",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "116",
          },
          pages: [{ text: "HÉROUVILLE Collège Mandela" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-118",
    name: "118",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["LOUVIGNY Mesnil"],
        name: "LOUVIGNY Mesnil",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "118",
          },
          pages: [{ text: "LOUVIGNY Mesnil" }],
        },
      },
      {
        id: ["FLEURY Collège Hawking"],
        name: "FLEURY Collège Hawking",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "118",
          },
          pages: [{ text: "FLEURY Collège Hawking" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-119",
    name: "119",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Copernic"],
        name: "Copernic",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "119",
          },
          pages: [{ font: "1508SUPX", text: "CAEN COPERNIC" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-120",
    name: "120",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Colombelles Place des Tilleuls"],
        name: "COLOMBELLES Place des Tilleuls",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "120",
          },
          pages: [
            { font: "1508SUPX", text: "COLOMBELLES" },
            { font: "1507SUPX", text: "PLACE DES TILLEULS" },
          ],
        },
      },
      {
        id: ["HEROUVILLE Allende"],
        name: "HEROUVILLE Allende",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "120",
          },
          pages: [{ text: "HEROUVILLE Allende" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-121",
    name: "121",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["B - COLOMBELLES Mairie"],
        name: "B - COLOMBELLES Mairie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "121",
          },
          pages: [{ text: "B - COLOMBELLES Mairie" }],
        },
      },
      {
        id: ["A - COLOMBELLES Lazzaro"],
        name: "A - COLOMBELLES Lazzaro",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "121",
          },
          pages: [{ text: "A - COLOMBELLES Lazzaro" }],
        },
      },
      {
        id: ["Mondeville Collège Guillemot"],
        name: "Collège Guillemot",
        city: "MONDEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "121",
          },
          pages: [
            { font: "1508SUPX", text: "MONDEVILLE" },
            { font: "1507SUPX", text: "COLLEGE GUILLEMOT" },
          ],
        },
      },
      {
        id: ["A - MONDEVILLE Collège Guillemot"],
        name: "A - MONDEVILLE Collège Guillemot",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "121",
          },
          pages: [{ text: "A - MONDEVILLE Collège Guillemot" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-123",
    name: "123",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["BLAINVILLE Langevin Wallon"],
        name: "BLAINVILLE Langevin Wallon",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "123",
          },
          pages: [{ text: "BLAINVILLE Langevin Wallon" }],
        },
      },
      {
        id: ["SAINT AUBIN Eglise"],
        name: "SAINT AUBIN Eglise",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "123",
          },
          pages: [{ text: "SAINT AUBIN Eglise" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-124",
    name: "124",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Saint-Aubin-d&apos;Arquenay Saint-Aubin Eglise"],
        name: "SAINT AUBIN Eglise",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "124",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-AUBIN EGLISE" }],
        },
      },
      {
        id: ["Caen Croix Guérin"],
        name: "Croix Guérin",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "124",
          },
          pages: [{ font: "1508SUPX", text: "CAEN CROIX GUERIN" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-125",
    name: "125",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Caen Cité U Lebisey"],
        name: "Cité U Lebisey",
        city: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "125",
          },
          pages: [{ font: "1507SUPX", text: "CAEN CITE U LEBISEY" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-126",
    name: "126",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["SAINT-CONTEST Vellerie"],
        name: "SAINT-CONTEST Vellerie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "126",
          },
          pages: [{ text: "SAINT-CONTEST Vellerie" }],
        },
      },
      {
        id: ["Caen Collège Monod"],
        name: "CAEN Collège Monod",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "126",
          },
          pages: [{ font: "1507SUPX", text: "CAEN COLLEGE MONOD" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-127",
    name: "127",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Villons-les-Buissons Coopérative"],
        name: "VILLONS Coopérative",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "127",
          },
          pages: [{ font: "1508C2E1", text: "VILLONS COOPERATIVE" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-130",
    name: "130",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Gare SNCF"],
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "130",
          },
          pages: [{ text: "CAEN Gare SNCF" }],
        },
      },
      {
        id: ["THUE ET MUE Primevères"],
        name: "THUE ET MUE Primevères",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "130",
          },
          pages: [{ text: "THUE ET MUE Primevères" }],
        },
      },
      {
        id: ["CAEN Cité U Lebisey"],
        name: "CAEN Cité U Lebisey",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "130",
          },
          pages: [{ text: "CAEN Cité U Lebisey" }],
        },
      },
      {
        id: ["CAEN Théâtre"],
        name: "CAEN Théâtre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "130",
          },
          pages: [{ text: "CAEN Théâtre" }],
        },
      },
      {
        id: ["CAEN T"],
        name: "CAEN T",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "130",
          },
          pages: [{ text: "CAEN T" }],
        },
      },
      {
        id: ["BROUAY Mairie"],
        name: "BROUAY Mairie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "130",
          },
          pages: [{ text: "BROUAY Mairie" }],
        },
      },
      {
        id: ["BRETTEVILLE Bessin"],
        name: "BRETTEVILLE Bessin",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "130",
          },
          pages: [{ text: "BRETTEVILLE Bessin" }],
        },
      },
      {
        id: ["ROTS Bourg"],
        name: "ROTS Bourg",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "130",
          },
          pages: [{ text: "ROTS Bourg" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-131",
    name: "131",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["TROARN Collège"],
        name: "TROARN Collège",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "131",
          },
          pages: [{ text: "TROARN Collège" }],
        },
      },
      {
        id: ["BURES-SUR-DIVES Lavoir"],
        name: "BURES-SUR-DIVES Lavoir",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "131",
          },
          pages: [{ text: "BURES-SUR-DIVES Lavoir" }],
        },
      },
      {
        id: ["SANNERVILLE Libération"],
        name: "SANNERVILLE Libération",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "131",
          },
          pages: [{ text: "SANNERVILLE Libération" }],
        },
      },
      {
        id: ["SANNERVILLE Bourg"],
        name: "SANNERVILLE Bourg",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "131",
          },
          pages: [{ text: "SANNERVILLE Bourg" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-133",
    name: "133",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Théâtre"],
        name: "CAEN Théâtre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "133",
          },
          pages: [{ text: "CAEN Théâtre" }],
        },
      },
      {
        id: ["CAEN Lycée Malherbe"],
        name: "CAEN Lycée Malherbe",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "133",
          },
          pages: [{ text: "CAEN Lycée Malherbe" }],
        },
      },
      {
        id: ["CHEUX Le Bosq"],
        name: "CHEUX Le Bosq",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "133",
          },
          pages: [{ text: "CHEUX Le Bosq" }],
        },
      },
      {
        id: ["CHEUX Bourg"],
        name: "CHEUX Bourg",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "133",
          },
          pages: [{ text: "CHEUX Bourg" }],
        },
      },
      {
        id: ["CAEN Collège Moulin"],
        name: "CAEN Collège Moulin",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "133",
          },
          pages: [{ text: "CAEN Collège Moulin" }],
        },
      },
      {
        id: ["THUE ET MUE Mesnil Patry"],
        name: "THUE ET MUE Mesnil Patry",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "133",
          },
          pages: [{ text: "THUE ET MUE Mesnil Patry" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-134",
    name: "134",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Gare SNCF"],
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "134",
          },
          pages: [{ text: "CAEN Gare SNCF" }],
        },
      },
      {
        id: ["CAEN Aviation"],
        name: "CAEN Aviation",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "134",
          },
          pages: [{ text: "CAEN Aviation" }],
        },
      },
      {
        id: ["SOLIERS Tageret"],
        name: "SOLIERS Tageret",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "134",
          },
          pages: [{ text: "SOLIERS Tageret" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-135",
    name: "135",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["CAEN Gare SNCF"],
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "135",
          },
          pages: [{ text: "CAEN Gare SNCF" }],
        },
      },
      {
        id: ["SAINT AIGNAN Mairie"],
        name: "SAINT AIGNAN Mairie",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "135",
          },
          pages: [{ text: "SAINT AIGNAN Mairie" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-136",
    name: "136",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["HEROUVILLE Allende"],
        name: "HEROUVILLE Allende",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "136",
          },
          pages: [{ text: "HEROUVILLE Allende" }],
        },
      },
      {
        id: ["TROARN Stade"],
        name: "TROARN Stade",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "136",
          },
          pages: [{ text: "TROARN Stade" }],
        },
      },
      {
        id: ["MESNIL 2ème Arrêt"],
        name: "MESNIL 2ème Arrêt",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "136",
          },
          pages: [{ text: "MESNIL 2ème Arrêt" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-137",
    name: "137",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["Ifs COLLEGE SENGHOR QUAI A"],
        name: "Collège Senghor",
        city: "IFS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "137",
          },
          pages: [{ font: "1507SUPX", text: "IFS COLLEGE SENGHOR" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-137A",
    name: "137A",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["SOLIERS Hameau du Four"],
        name: "SOLIERS Hameau du Four",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "137A",
          },
          pages: [{ text: "SOLIERS Hameau du Four" }],
        },
      },
      {
        id: ["GRENTHEVILLE Le Hameau"],
        name: "GRENTHEVILLE Le Hameau",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "137A",
          },
          pages: [{ text: "GRENTHEVILLE Le Hameau" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-137B",
    name: "137B",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["BOURGUEBUS La Hogue"],
        name: "BOURGUEBUS La Hogue",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "137B",
          },
          pages: [{ text: "BOURGUEBUS La Hogue" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-137C",
    name: "137C",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["BOURGUEBUS Centre"],
        name: "BOURGUEBUS Centre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "137C",
          },
          pages: [{ text: "BOURGUEBUS Centre" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-137D",
    name: "137D",
    mapOnly: true,
    colors: { background: "#ffffff", text: "#702283" },
    destinations: [
      {
        id: ["SOLIERS Hameau du Four"],
        name: "SOLIERS Hameau du Four",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#702283",
            textColor: "#ffffff",
            outlineColor: "#000000",
            text: "137D",
          },
          pages: [{ text: "SOLIERS Hameau du Four" }],
        },
      },
    ],
  },
  {
    id: "TWISTO-B1",
    name: "B1",
    mapOnly: true,
    colors: { background: "#23a638", text: "#ffffff" },
    destinations: [
      {
        id: ["Ifs Jean Vilar"],
        name: "IFS Jean Vilar",
        girouette: {
          routeNumber: { backgroundColor: "#23a638", textColor: "#ffffff", outlineColor: "#000000", text: "B1" },
          pages: [{ text: ["PLAN B TRAM", "IFS JEAN VILAR"] }],
        },
      },
      {
        id: ["Hérouville-Saint-Clair Saint-Clair"],
        name: "Saint-Clair",
        city: "HÉROUVILLE-SAINT-CLAIR",
        girouette: {
          routeNumber: { backgroundColor: "#23a638", textColor: "#ffffff", outlineColor: "#000000", text: "B1" },
          pages: [{ text: ["PLAN B TRAM", "HEROUVILLE ST-CLAIR"] }],
        },
      },
    ],
  },
  {
    id: "TWISTO-B2",
    name: "Plan B - T2",
    mapOnly: true,
    colors: { background: "#e73132", text: "#ffffff" },
    destinations: [
      {
        id: ["Caen Campus 2"],
        name: "Campus 2",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#e73132", textColor: "#ffffff", outlineColor: "#000000", text: "B2" },
          pages: [{ text: ["PLAN B TRAM", "CAEN CAMPUS 2"] }],
        },
      },
      {
        id: ["Caen Presqu&apos;ile"],
        name: "CAEN Presqu'ile",
        girouette: {
          routeNumber: { backgroundColor: "#e73132", textColor: "#ffffff", outlineColor: "#000000", text: "B2" },
          pages: [{ text: ["PLAN B TRAM", "CAEN PRESQU'ILE"] }],
        },
      },
    ],
  },
  {
    id: "TWISTO-B3",
    name: "Plan B - T3",
    mapOnly: true,
    colors: { background: "#009adf", text: "#ffffff" },
    destinations: [
      {
        id: ["Fleury-sur-Orne HAUTS DE L&apos;ORNE"],
        name: "Hauts de l'Orne",
        city: "FLEURY-SUR-ORNE",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "B3" },
          pages: [{ text: ["PLAN B TRAM", "FLEURY HAUTS DE L'ORNE"] }],
        },
      },
      {
        id: ["Caen Château-Quatrans"],
        name: "Château Quatrans",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#009adf", textColor: "#ffffff", outlineColor: "#000000", text: "B3" },
          pages: [{ text: ["PLAN B TRAM", "CAEN CHATEAU QUATRANS"] }],
        },
      },
    ],
  },
];

export default twistoRoutes;
