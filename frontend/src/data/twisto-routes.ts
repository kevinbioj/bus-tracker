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
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "CARPIQUET AEROPORT" }],
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
          routeNumber: { backgroundColor: "#f29fc5", textColor: "#000000", outlineColor: "#FFFFFF", text: "10EX" },
          pages: [{ font: "1510N2E1", text: "BLAINVILLE PARC" }],
        },
      },
      {
        id: ["CAEN Bellivet"],
        name: "CAEN Bellivet",
        girouette: {
          routeNumber: { backgroundColor: "#f29fc5", textColor: "#000000", outlineColor: "#FFFFFF", text: "10EX" },
          pages: [{ text: "CAEN Bellivet" }],
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
        id: ["Caen Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "CAEN",
        girouette: {
          routeNumber: { backgroundColor: "#ea5b0c", textColor: "#ffffff", outlineColor: "#000000", text: "11" },
          pages: [{ text: "CAEN HOTEL DE VILLE" }],
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
        id: ["CAEN Théâtre"],
        name: "CAEN Théâtre",
        girouette: {
          routeNumber: { backgroundColor: "#f39869", textColor: "#000000", outlineColor: "#FFFFFF", text: "11EX" },
          pages: [{ text: "CAEN Théâtre" }],
        },
      },
      {
        id: ["CUVERVILLE Champ Picot"],
        name: "CUVERVILLE Champ Picot",
        girouette: {
          routeNumber: { backgroundColor: "#f39869", textColor: "#000000", outlineColor: "#FFFFFF", text: "11EX" },
          pages: [{ text: "CUVERVILLE Champ Picot" }],
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
        id: ["CAEN Gare SNCF"],
        name: "CAEN Gare SNCF",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "CAEN Gare SNCF" }],
        },
      },
      {
        id: ["CAEN Calvaire St-Pierre"],
        name: "CAEN Calvaire St-Pierre",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "CAEN Calvaire St-Pierre" }],
        },
      },
      {
        id: ["LION SUR MER Haut Lion"],
        name: "LION SUR MER Haut Lion",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "LION SUR MER Haut Lion" }],
        },
      },
      {
        id: ["HEROUVILLE Allende"],
        name: "HEROUVILLE Allende",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "HEROUVILLE Allende" }],
        },
      },
      {
        id: ["CAEN Croix Guerin"],
        name: "CAEN Croix Guerin",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "CAEN Croix Guerin" }],
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
        id: ["CAEN Cite U Lebisey"],
        name: "CAEN Cite U Lebisey",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "CAEN Cite U Lebisey" }],
        },
      },
      {
        id: ["HERMANVILLE Isaville"],
        name: "HERMANVILLE Isaville",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "HERMANVILLE Isaville" }],
        },
      },
      {
        id: ["OUISTREHAM Charmettes"],
        name: "OUISTREHAM Charmettes",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "OUISTREHAM Charmettes" }],
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
        id: ["CAEN Tour Leroy"],
        name: "CAEN Tour Leroy",
        girouette: {
          routeNumber: { backgroundColor: "#009d99", textColor: "#ffffff", outlineColor: "#000000", text: "12" },
          pages: [{ text: "CAEN Tour Leroy" }],
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
          routeNumber: {
            font: "1508C2E1",
            backgroundColor: "#a7c4af",
            textColor: "#000000",
            text: "12EX",
          },
          pages: [{ text: "LION-SUR-MER" }, { text: "HAUT-LION" }],
        },
      },
      {
        id: ["Caen Gare SNCF"],
        name: "Gare SNCF",
        city: "CAEN",
        girouette: {
          routeNumber: { font: "1508C2E1", backgroundColor: "#a7c4af", textColor: "#000000", text: "12EX" },
          pages: [{ text: "CAEN GARE SNCF" }],
        },
      },
      {
        id: ["Ouistreham Riva Centre"],
        name: "Riva Centre",
        city: "OUISTREHAM",
        girouette: {
          routeNumber: { font: "1508C2E1", backgroundColor: "#a7c4af", textColor: "#000000", text: "12EX" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "OUISTREHAM RIVA CENTRE" }],
        },
      },
      {
        id: ["CAEN Tour Leroy"],
        name: "CAEN Tour Leroy",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", text: "12EX" },
          pages: [{ text: "CAEN Tour Leroy" }],
        },
      },
      {
        id: ["OUISTREHAM Riva Charmettes"],
        name: "OUISTREHAM Riva Charmettes",
        girouette: {
          routeNumber: { backgroundColor: "#a7c4af", textColor: "#000000", text: "12EX" },
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
        id: ["LION SUR MER Plage"],
        name: "LION SUR MER Plage",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "LION SUR MER Plage" }],
        },
      },
      {
        id: ["CAEN Calvaire Saint-Pierre"],
        name: "CAEN Calvaire Saint-Pierre",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "CAEN Calvaire Saint-Pierre" }],
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
        id: ["HEROUVILLE Allende"],
        name: "HEROUVILLE Allende",
        girouette: {
          routeNumber: { backgroundColor: "#f3a3b9", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [{ text: "HEROUVILLE Allende" }],
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
          pages: [{ text: "CAEN GARE SNCF" }],
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
        id: ["VERSON Grand bois"],
        name: "VERSON Grand bois",
        girouette: {
          routeNumber: { backgroundColor: "#82c491", textColor: "#000000", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ text: "VERSON Grand bois" }],
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
        id: ["CAEN Poincare"],
        name: "CAEN Poincare",
        girouette: {
          routeNumber: { backgroundColor: "#7d6fa6", textColor: "#ffffff", outlineColor: "#000000", text: "40" },
          pages: [{ text: "CAEN Poincare" }],
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
];

export default twistoRoutes;
