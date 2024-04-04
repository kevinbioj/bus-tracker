import { Network, Route } from "~/@types";

const astuceRoutes: Route[] = [
  {
    id: "ASTUCE:98",
    name: "NOCT",
    colors: { background: "#29235C", text: "#FFDE00" },
    destinations: [
      {
        id: ["Cateliers SAINT-ÉTIENNE-DU-ROUVRAY", "Cateliers"],
        autoHide: true,
        name: "Cateliers",
        city: "SAINT-ÉTIENNE-DU-ROUVRAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#29235C",
            textColor: "#FFDE00",
            outlineColor: "#000000",
            font: "1513B3E1",
            spacing: 3,
            text: "N™",
          },
          pages: [{ text: "CATELIERS" }, { font: "1310C2E1", spacing: 1, text: "SAINT-ETIENNE-DU-ROUVRAY" }],
        },
      },
      {
        id: ["Hôtel de Ville ROUEN", "Hôtel de Ville"],
        autoHide: true,
        alternate: "Hôtel de Ville de Rouen",
        name: "Hôtel de Ville",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#29235C",
            textColor: "#FFDE00",
            outlineColor: "#000000",
            font: "1513B3E1",
            spacing: 3,
            text: "N™",
          },
          pages: [{ text: "HOTEL DE VILLE" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["La Pléiade MONT-SAINT-AIGNAN", "La Pléiade"],
        autoHide: true,
        name: "La Pléiade",
        city: "MONT-SAINT-AIGNAN",
        girouette: {
          routeNumber: {
            backgroundColor: "#29235C",
            textColor: "#FFDE00",
            outlineColor: "#000000",
            font: "1513B3E1",
            spacing: 3,
            text: "N™",
          },
          pages: [{ text: "LA PLEIADE" }, { font: "1508C2E1", text: "MONT-SAINT-AIGNAN" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:89",
    name: "N",
    colors: { background: "#E6007E", text: "#FFED00" },
    destinations: [
      {
        id: ["Boulingrin ROUEN"],
        autoHide: true,
        name: "Boulingrin",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFED00", outlineColor: "#000000", text: "N" },
          pages: [{ text: "BOULINGRIN" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Georges Braque GRAND QUEVILLY"],
        autoHide: true,
        name: "Georges Braque",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFED00", outlineColor: "#000000", text: "N" },
          pages: [
            { font: "1510N2E1", text: "GEORGES BRAQUE" },
            { font: "1510N2E1", text: "GRAND-QUEVILLY" },
          ],
        },
      },
      {
        id: ["Technopôle SAINT-ETIENNE-DU-ROUVRAY"],
        autoHide: true,
        name: "Technopôle",
        city: "SAINT-ÉTIENNE-DU-ROUVRAY",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFED00", outlineColor: "#000000", text: "N" },
          pages: [
            { font: "1513B3E1", text: "TECHNOPOLE" },
            { font: "1310C2E1", spacing: 1, text: "SAINT-ETIENNE-DU-ROUVRAY" },
          ],
        },
      },
      {
        id: ["Hôtel de Ville de SOTTEVILLE", "Hôtel de Ville de Sotteville"],
        autoHide: true,
        name: "Hôtel de Ville",
        city: "SOTTEVILLE-LÈS-ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFED00", outlineColor: "#000000", text: "N" },
          pages: [
            { font: "1513B3E1", text: "HOTEL DE VILLE" },
            { font: "1508C2E1", text: "SOTTEVILLE-LES-ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:90",
    name: "M",
    colors: { background: "#123E8B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Boulingrin ROUEN"],
        name: "Boulingrin",
        city: "ROUEN",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 110 },
          routeNumber: { backgroundColor: "#123E8B", textColor: "#FFFFFF", font: "METRO", text: "M" },
          pages: [
            { font: "14LUPLAN", spacing: 1, text: "BOULINGRIN" },
            { font: "14LUPLAN", spacing: 1, text: "ROUEN" },
          ],
          width: 300,
        },
      },
      {
        id: ["Place du 8-Mai LE PETIT-QUEVILLY"],
        autoHide: true,
        name: "Place du 8-Mai",
        city: "PETIT-QUEVILLY",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 110 },
          routeNumber: { backgroundColor: "#123E8B", textColor: "#FFFFFF", font: "METRO", text: "M" },
          pages: [
            { font: "14LUPLAN", spacing: 1, text: "PLACE DU 8-MAI" },
            { font: "14LUPLAN", spacing: 1, text: "PETIT-QUEVILLY" },
          ],

          width: 300,
        },
      },
      {
        id: ["Georges Braque GRAND QUEVILLY"],
        name: "Georges Braque",
        city: "GRAND-QUEVILLY",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 110 },
          routeNumber: { backgroundColor: "#123E8B", textColor: "#FFFFFF", font: "METRO", text: "M" },
          pages: [
            { font: "14LUPLAN", spacing: 1, text: "GEORGES BRAQUE" },
            { font: "14LUPLAN", spacing: 1, text: "GRAND-QUEVILLY" },
          ],
          width: 300,
        },
      },
      {
        id: ["Technopôle SAINT-ETIENNE-DU-ROUVRAY"],
        name: "Technopôle",
        city: "SAINT-ÉTIENNE-DU-ROUVRAY",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 110 },
          routeNumber: { backgroundColor: "#123E8B", textColor: "#FFFFFF", font: "METRO", text: "M" },
          pages: [
            { font: "14LUPLAN", spacing: 1, text: "TECHNOPOLE" },
            { font: "14LUPLAN", spacing: 1, text: "SAINT-ETIENNE" },
          ],
          width: 300,
        },
      },
      {
        id: ["Hôtel de Ville de Sotteville", "Hôtel de Ville SOTTEVILLE-LES-ROUEN"],
        autoHide: true,
        name: "Hôtel de Ville",
        city: "SOTTEVILLE-LÈS-ROUEN",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 110 },
          routeNumber: { backgroundColor: "#123E8B", textColor: "#FFFFFF", font: "METRO", text: "M" },
          pages: [
            { font: "14LUPLAN", spacing: 1, text: "HOTEL DE VILLE" },
            { font: "14LUPLAN", spacing: 1, text: "SOTTEVILLE" },
          ],
          width: 300,
        },
      },
    ],
  },
  {
    id: "ASTUCE:91",
    name: "T1",
    colors: { background: "#E63027", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mont aux Malades MONT-SAINT-AIGNAN"],
        name: "Mont aux Malades",
        city: "MONT-SAINT-AIGNAN",
        girouette: {
          routeNumber: {
            backgroundColor: "#E63027",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T1",
          },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "MONT-AUX-MALADES" },
            { font: "1508C2E1", spacing: 3, text: "MONT-SAINT-AIGNAN" },
          ],
        },
      },
      {
        id: ["CHU Charles Nicolle ROUEN", "CHU Charles Nicolle"],
        name: "CHU Charles Nicolle",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#E63027",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T1",
          },
          pages: [
            { font: "1508C2E1", text: "C.H.U. CHARLES NICOLLE" },
            { spacing: 4, text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:92",
    name: "T2",
    colors: { background: "#008F5B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Tamarelle BIHOREL"],
        name: "Tamarelle",
        city: "BIHOREL",
        girouette: {
          routeNumber: {
            backgroundColor: "#008F5B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T2",
          },
          pages: [{ text: "TAMARELLE" }, { text: "BIHOREL" }],
        },
      },
      {
        id: ["Mairie - V. Schoelcher N.-D.-DE-BONDEVILLE"],
        name: "Victor Schoelcher",
        city: "NOTRE-DAME-DE-BONDEVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#008F5B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T2",
          },
          pages: [
            { font: "1310C2E1", spacing: 1, text: "MAIRIE VICTOR SCHOELCHER" },
            { font: "1310C2E1", spacing: 1, text: "NOTRE-DAME-DE-BONDEVILLE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:93",
    name: "T3",
    colors: { background: "#6D1C74", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Durécu-Lavoisier DARNÉTAL"],
        name: "Durécu-Lavoisier",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: {
            backgroundColor: "#6D1C74",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T3",
          },
          pages: [{ font: "1510N2E1", spacing: 1, text: "DURECU-LAVOISIER" }, { text: "DARNETAL" }],
        },
      },
      {
        id: ["Monet CANTELEU"],
        name: "Monet",
        city: "CANTELEU",
        girouette: {
          routeNumber: {
            backgroundColor: "#6D1C74",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T3",
          },
          pages: [{ text: "MONET" }, { text: "CANTELEU" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:94",
    name: "T4",
    colors: { background: "#F5C500", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Zénith-Parc Expo GRAND QUEVILLY"],
        name: "Zénith - Parc Expo",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: { backgroundColor: "#F5C500", textColor: "#000000", text: "T4" },
          pages: [
            { font: "1510N2E1", spacing: 1, text: "ZENITH-PARC EXPO" },
            { font: "1510N2E1", text: "GRAND-QUEVILLY" },
          ],
        },
      },
      {
        id: ["Marie Curie - MTC ROUEN"],
        name: "Marie Curie - MTC",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#F5C500", textColor: "#000000", text: "T4" },
          pages: [
            { spacing: 1, text: "MARIE CURIE-MTC" },
            { spacing: 4, text: "ROUEN" },
          ],
        },
      },
    ],
  },
  //  {
  //    id: "ASTUCE:95",
  //    name: "TA",
  //    colors: { background: "#053148", text: "#FFFFFF" },
  //    destinations: [
  //      {
  //        id: ["Mont-Riboudet ROUEN"],
  //        name: "Mont-Riboudet - Kindarena",
  //        city: "ROUEN",
  //      },
  //      {
  //        id: ["CHU Charles Nicolle ROUEN"],
  //        name: "CHU Charles Nicolle",
  //        city: "ROUEN",
  //      },
  //    ],
  //  },
  {
    id: "ASTUCE:01",
    name: "F1",
    colors: { background: "#E6007E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Stade Diochon PETIT-QUEVILLY"],
        name: "Stade Diochon",
        city: "PETIT-QUEVILLY",
        girouette: {
          routeNumber: {
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F1",
          },
          pages: [{ text: "STADE DIOCHON" }, { text: "PETIT-QUEVILLY" }],
        },
      },
      {
        id: ["Lafayette ROUEN"],
        autoHide: true,
        name: "Lafayette",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F1",
          },
          pages: [
            { spacing: 3, text: "LAFAYETTE" },
            { spacing: 3, text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Boulingrin ROUEN", "Boulingrin ROUE N"],
        autoHide: true,
        name: "Boulingrin",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F1",
          },
          pages: [
            { spacing: 3, text: "BOULINGRIN" },
            { spacing: 3, text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Plaine de la Ronce ISNEAUVILLE"],
        name: "Plaine de la Ronce",
        city: "ISNEAUVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F1",
          },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "PLAINE DE LA RONCE" },
            { spacing: 4, text: "ISNEAUVILLE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:02",
    name: "F2",
    colors: { background: "#A2559D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Tamarelle BIHOREL"],
        name: "Tamarelle",
        city: "BIHOREL",
        girouette: {
          routeNumber: {
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F2",
          },
          pages: [{ text: "TAMARELLE" }, { text: "BIHOREL" }],
        },
      },
      {
        id: ["Hôtel de Ville ROUEN"],
        autoHide: true,
        alternate: "Hôtel de Ville de Rouen",
        name: "Hôtel de Ville",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F2",
          },
          pages: [{ text: "HOTEL DE VILLE" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["La Vatine MONT-SAINT-AIGNAN", "La Vatine - Centre Commercial"],
        name: "La Vatine - C.Cial",
        city: "MONT-SAINT-AIGNAN",
        girouette: {
          routeNumber: {
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F2",
          },
          pages: [
            [
              { spacing: 3, text: "CENTRE COMMERCIAL" },
              { spacing: 3, text: "LA VATINE" },
            ],
            { font: "1508C2E1", spacing: 3, text: "MONT-SAINT-AIGNAN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:03",
    name: "F3",
    colors: { background: "#FFDD00", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Centre Commercial TOURVILLE-LA-RIVIÈRE", "Tourville - Centre Commercial"],
        alternate: "Tourville-la-Rivière",
        name: "Centre Commercial",
        city: "TOURVILLE-LA-RIVIÈRE",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#000000", text: "F3" },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "CENTRE COMMERCIAL" },
            { font: "1508C2E1", text: "TOURVILLE-LA-RIVIERE" },
          ],
        },
      },
      {
        id: ["Pôle Multimodal OISSEL"],
        autoHide: true,
        alternate: "Pôle Multimodal d'Oissel",
        name: "Pôle Multimodal",
        city: "OISSEL",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#000000", text: "F3" },
          pages: [{ font: "1510N2E1", text: "POLE MULTIMODAL" }, { text: "OISSEL" }],
        },
      },
      {
        id: ["Hôtel de Ville SOTTEVILLE-LÈS-ROUEN", "Hôtel de Ville de Sotteville"],
        autoHide: false,
        alternate: "Hôtel de Ville de Sotteville",
        name: "Hôtel de Ville",
        city: "SOTTEVILLE-LÈS-ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#000000", text: "F3" },
          pages: [{ text: "HOTEL DE VILLE" }, { font: "1508C2E1", text: "SOTTEVILLE-LES-ROUEN" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:04",
    name: "F4",
    colors: { background: "#EC6408", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mont-Riboudet ROUEN", "Mont-Riboudet"],
        name: "Mont-Riboudet - Kindarena",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#EC6408",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F4",
          },
          pages: [{ text: "MONT-RIBOUDET" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Hameau de Frévaux MALAUNAY"],
        name: "Hameau de Frévaux",
        city: "MALAUNAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#EC6408",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F4",
          },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "HAMEAU DE FREVAUX" },
            { spacing: 5, text: "MALAUNAY" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:05",
    routeIds: ["ASTUCE:05", "ASTUCE-TGR:F5"],
    name: "F5",
    colors: { background: "#AFCA0B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Lycée Galilée FRANQUEVILLE-SAINT-PIERRE"],
        name: "Lycée Galilée",
        city: "FRANQUEVILLE-SAINT-PIERRE",
        girouette: {
          routeNumber: { backgroundColor: "#AFC900", textColor: "#000000", text: "F5" },
          pages: [{ text: "LYCEE GALILEE" }, { font: "1310C2E1", spacing: 1, text: "FRANQUEVILLE-SAINT-PIERRE" }],
        },
      },
      {
        id: ["Théâtre des Arts ROUEN", "Théâtre des Arts"],
        name: "Théâtre des Arts",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#AFC900", textColor: "#000000", text: "F5" },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "THEATRE DES ARTS" },
            { spacing: 4, text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:06",
    routeIds: ["ASTUCE:06", "ASTUCE-TGR:06"],
    name: "F6",
    colors: { background: "#00ACE5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Les Bouttières GRAND-COURONNE", "Les Bouttières"],
        name: "Les Bouttières",
        city: "GRAND-COURONNE",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F6",
          },
          pages: [{ text: "LES BOUTTIERES" }, { font: "1510N2E1", text: "GRAND-COURONNE" }],
        },
      },
      {
        id: ["Georges Braque"],
        autoHide: true,
        name: "Georges Braque",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",

            text: "F6",
          },
          pages: [
            { font: "1510N2E1", text: "GEORGES BRAQUE" },
            { font: "1510N2E1", text: "GRAND-QUEVILLY" },
          ],
        },
      },
      {
        id: ["Gare SAINT-ETIENNE-DU-ROUVRAY", "Gare de Saint-Etienne"],
        alternate: "Gare de Saint-Étienne",
        name: "Gare",
        city: "SAINT-ÉTIENNE-DU-ROUVRAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",

            text: "F6",
          },
          pages: [{ text: "GARE" }, { font: "1310C2E1", spacing: 1, text: "SAINT-ETIENNE-DU-ROUVRAY" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:07",
    name: "F7",
    colors: { background: "#008F5B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Hôtel de Ville SOTTEVILLE-LÈS-ROUEN"],
        alternate: "Hôtel de Ville de Sotteville",
        name: "Hôtel de Ville",
        city: "SOTTEVILLE-LÈS-ROUEN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#008F5B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F7",
          },
          pages: [{ text: "HOTEL DE VILLE" }, { font: "1508C2E1", text: "SOTTEVILLE-LES-ROUEN" }],
        },
      },
      {
        id: ["Lafayette ROUEN"],
        autoHide: true,
        name: "Lafayette",
        city: "ROUEN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#008F5B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F7",
          },
          pages: [
            { spacing: 3, text: "LAFAYETTE" },
            { spacing: 3, text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Boulingrin ROUEN", "Boulingrin ROUE N"],
        autoHide: true,
        name: "Boulingrin",
        city: "ROUEN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#008F5B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F7",
          },
          pages: [
            { spacing: 3, text: "BOULINGRIN" },
            { spacing: 3, text: "ROUEN" },
          ],
        },
      },
      {
        id: ["La Pléiade MONT-SAINT-AIGNAN"],
        name: "La Pléiade",
        city: "MONT-SAINT-AIGNAN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#008F5B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "F7",
          },
          pages: [{ text: "LA PLEIADE" }, { font: "1508C2E1", spacing: 3, text: "MONT-SAINT-AIGNAN" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:08",
    name: "F8",
    colors: { background: "#0090D7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Tamarelle BIHOREL"],
        name: "Tamarelle",
        city: "BIHOREL",
        girouette: {
          routeNumber: {
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",

            text: "F8",
          },
          pages: [{ text: "TAMARELLE" }, { text: "BIHOREL" }],
        },
      },
      {
        id: ["Lycée du Cailly DÉVILLE-LES-ROUEN"],
        name: "Lycée du Cailly",
        city: "DÉVILLE-LÈS-ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",

            text: "F8",
          },
          pages: [
            { font: "1510N2E1", text: "LYCEE DU CAILLY" },
            { font: "1508C2E1", spacing: 3, text: "DEVILLE-LES-ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:118",
    name: "F9",
    colors: { background: "#248BCB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["THEATRE DES ARTS"],
        name: "Théâtre des Arts",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#248BCB",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "F9",
          },
          pages: [{ font: "1407SUPX", spacing: 1, text: "THEATRE DES ARTS - ROUEN" }],
        },
      },
      // { id: ["GAREROUT1"], alternate: "Gare Routière de Rouen", name: "Gare Routière", city: "ROUEN" },
      {
        id: ["CHAMP DE FOIRE"],
        name: "Champ de Foire",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#248BCB",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "F9",
          },
          pages: [{ font: "1407SUPX", spacing: 1, text: "CHAMP DE FOIRE - ELBEUF" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:10",
    name: "10",
    colors: { background: "#F8AE4C", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Lycée Flaubert ROUEN", "Lycée Flaubert"],
        name: "Lycée Flaubert",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#F78C00", textColor: "#000000", outlineColor: "#FFFFFF", text: "10" },
          pages: [{ text: "LYCEE FLAUBERT" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["La Maine MAROMME", "Maromme La Maine MAROMME", "La Maine"],
        alternate: "Maromme La Maine",
        name: "La Maine",
        city: "MAROMME",
        girouette: {
          routeNumber: { backgroundColor: "#F78C00", textColor: "#000000", outlineColor: "#FFFFFF", text: "10" },
          pages: [{ text: "LA MAINE" }, { text: "MAROMME" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:11",
    name: "11",
    colors: { background: "#00ACE5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Ile Lacroix ROUEN"],
        name: "Ile Lacroix",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [{ text: "ILE LACROIX" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Collège L. de Vinci BOIS-GUILLAUME"],
        name: "Collège Léonard de Vinci",
        city: "BOIS-GUILLAUME",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [
            { font: "1508C2E1", spacing: 1, text: "COLLEGE LEONARD DE VINCI" },
            { font: "1510N2E1", text: "BOIS-GUILLAUME" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:13",
    routeIds: ["ASTUCE:13", "ASTUCE-TGR:13"],
    name: "13",
    colors: { background: "#F8AE4C", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Martainville ROUEN", "Martainville"],
        name: "Martainville",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#F78C00", textColor: "#000000", outlineColor: "#FFFFFF", text: "13" },
          pages: [{ text: "MARTAINVILLE" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Ecole de Musique", "École de Musique"],
        name: "École de Musique",
        city: "BOOS",
        girouette: {
          routeNumber: { backgroundColor: "#F78C00", textColor: "#000000", outlineColor: "#FFFFFF", text: "13" },
          pages: [{ font: "1510N2E1", text: "ECOLE DE MUSIQUE" }, { text: "BOOS" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:14",
    routeIds: ["ASTUCE:14", "ASTUCE-TGR:14"],
    name: "14",
    colors: { background: "#00ACE5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mont Pilon DARNÉTAL", "Mont Pilon"],
        name: "Mont Pilon",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
          },
          pages: [{ text: "MONT-PILON" }, { text: "DARNETAL" }],
        },
      },
      {
        id: ["Mairie BELBEUF", "Mairie de Belbeuf"],
        alternate: "Mairie de Belbeuf",
        name: "Mairie",
        city: "BELBEUF",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
          },
          pages: [{ text: "MAIRIE" }, { text: "BELBEUF" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:15",
    name: "15",
    colors: { background: "#74B95B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Grand Val AMFREVILLE-LA-MIVOIE"],
        name: "Grand Val",
        city: "AMFREVILLE-LA-MIVOIE",
        girouette: {
          routeNumber: { backgroundColor: "#55943E", textColor: "#000000", outlineColor: "#FFFFFF", text: "15" },
          pages: [{ text: "GRAND VAL" }, { font: "1508C2E1", text: "AMFREVILLE-LA-MIVOIE" }],
        },
      },
      {
        id: ["Hôtel de Ville ROUEN"],
        autoHide: true,
        alternate: "Hôtel de Ville de Rouen",
        name: "Hôtel de Ville",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#55943E", textColor: "#000000", outlineColor: "#FFFFFF", text: "15" },
          pages: [{ text: "HOTEL DE VILLE" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Collège Jules Verne DÉVILLE-LÈS-ROUEN", "Collège Jules Verne"],
        name: "Jules Verne",
        city: "DÉVILLE-LÈS-ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#55943E", textColor: "#000000", outlineColor: "#FFFFFF", text: "15" },
          pages: [{ text: "JULES VERNE" }, { font: "1508C2E1", spacing: 3, text: "DEVILLE-LES-ROUEN" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:20",
    routeIds: ["ASTUCE:20", "ASTUCE-TGR:20"],
    name: "20",
    colors: { background: "#C29FCB", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Mairie SAINT-AUBIN-ÉPINAY"],
        alternate: "Mairie de Saint-Aubin-Épinay",
        name: "Mairie",
        city: "SAINT-AUBIN-ÉPINAY",
        girouette: {
          routeNumber: { backgroundColor: "#B762CC", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ text: "MAIRIE" }, { font: "1508C2E1", text: "SAINT-AUBIN-EPINAY" }],
        },
      },
      {
        id: ["Rue de l'Église ST-LÉGER-DU-BOURG-DENIS"],
        autoHide: true,
        name: "Rue de l'Église",
        city: "SAINT-LÉGER-DU-BOURG-DENIS",
        girouette: {
          routeNumber: { backgroundColor: "#B762CC", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ text: "RUE DE L'EGLISE" }, { font: "1508C2E1", spacing: 1, text: "ST-LEGER-DU-BOURG-DENIS" }],
        },
      },
      {
        id: ["Hôtel de Ville ROUEN"],
        autoHide: true,
        alternate: "Hôtel de Ville de Rouen",
        name: "Hôtel de Ville",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#B762CC", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ text: "HOTEL DE VILLE" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Boulingrin ROUEN", "Boulingrin"],
        autoHide: true,
        name: "Boulingrin",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#B762CC", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ text: "BOULINGRIN" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Le Chapître BIHOREL", "Le Chapître"],
        name: "Le Chapitre",
        city: "BIHOREL",
        girouette: {
          routeNumber: { backgroundColor: "#B762CC", textColor: "#000000", outlineColor: "#FFFFFF", text: "20" },
          pages: [{ text: "LE CHAPITRE" }, { text: "BIHOREL" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:22",
    name: "22",
    colors: { background: "#F4A3AF", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Barrières de Darnétal ROUEN"],
        name: "Barrières de Darnétal",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#F56278", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [
            { font: "1508C2E1", text: "BARRIERES DE DARNETAL" },
            { spacing: 4, text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Parc de la Vatine MONT-SAINT-AIGNAN"],
        name: "Parc de la Vatine",
        city: "MONT-SAINT-AIGNAN",
        girouette: {
          routeNumber: { backgroundColor: "#F56278", textColor: "#000000", outlineColor: "#FFFFFF", text: "22" },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "PARC DE LA VATINE" },
            { font: "1508C2E1", spacing: 3, text: "MONT-SAINT-AIGNAN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:26",
    name: "26",
    colors: { background: "#0069B3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mont-Riboudet Kindarena", "Mont-Riboudet"],
        name: "Mont-Riboudet - Kindarena",
        city: "ROUEN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#0069B3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "26",
          },
          pages: [{ text: "MONT-RIBOUDET" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Salle des Fêtes"],
        name: "Salle des Fêtes",
        city: "SAINT-PIERRE-DE-VARENGEVILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#0069B3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "26",
          },
          pages: [
            { font: "1510N2E1", text: "SALLE DES FETES" },
            [{ text: "SAINT-PIERRE" }, { text: "DE-VARENGEVILLE" }],
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:27",
    name: "27",
    colors: { background: "#74B95B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Bel Air PETIT-COURONNE"],
        name: "Bel Air",
        city: "PETIT-COURONNE",
        girouette: {
          routeNumber: { backgroundColor: "#55943E", textColor: "#000000", outlineColor: "#FFFFFF", text: "27" },
          pages: [{ text: "BEL AIR" }, { font: "1510N2E1", text: "PETIT-COURONNE" }],
        },
      },
      {
        id: ["Lafayette ROUEN"],
        autoHide: true,
        name: "Lafayette",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#55943E", textColor: "#000000", outlineColor: "#FFFFFF", text: "27" },
          pages: [
            { spacing: 4, text: "LAFAYETTE" },
            { spacing: 4, text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Théâtre des Arts ROUEN"],
        name: "Théâtre des Arts",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#55943E", textColor: "#000000", outlineColor: "#FFFFFF", text: "27" },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "THEATRE DES ARTS" },
            { spacing: 4, text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:28",
    routeIds: ["ASTUCE:28", "ASTUCE-TGR:28"],
    name: "28",
    colors: { background: "#F4A3AF", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Bois Tison SAINT-JACQUES-SUR-DARNÉTAL", "Bois Tison"],
        name: "Bois Tison",
        city: "SAINT-JACQUES-SUR-DARNÉTAL",
        girouette: {
          routeNumber: { backgroundColor: "#F56278", textColor: "#000000", outlineColor: "#FFFFFF", text: "28" },
          pages: [{ text: "BOIS TISON" }, [{ text: "SAINT-JACQUES" }, { text: "SUR-DARNETAL" }]],
        },
      },
      {
        id: ["Louise Michel DARNÉTAL", "Louise Michel"],
        name: "Louise Michel",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: { backgroundColor: "#F56278", textColor: "#000000", outlineColor: "#FFFFFF", text: "28" },
          pages: [{ text: "LOUISE MICHEL" }, { text: "DARNETAL" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:33",
    routeIds: ["ASTUCE:33", "ASTUCE-TGR:33"],
    name: "33",
    colors: { background: "#00A983", text: "#FFFFFF" },
    destinations: [
      {
        id: ["François Truffaut"],
        name: "François Truffaut",
        city: "PETIT-QUEVILLY",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A983",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "33",
          },
          pages: [{ font: "1508C2E1", text: "FRANCOIS TRUFFAUT" }, { text: "PETIT-QUEVILLY" }],
        },
      },
      {
        id: ["Hôtel de Ville de Sotteville"],
        alternate: "Hôtel de Ville de Sotteville",
        name: "Hôtel de Ville",
        city: "SOTTEVILLE-LÈS-ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A983",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "33",
          },
          pages: [{ text: "HOTEL DE VILLE" }, { font: "1508C2E1", text: "SOTTEVILLE-LES-ROUEN" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:35",
    name: "35",
    colors: { background: "#D3D800", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Sente d'Houdeville CANTELEU", "Sente d'Houdeville"],
        name: "Sente d'Houdeville",
        city: "CANTELEU",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "35" },
          pages: [{ font: "1508C2E1", text: "SENTE D'HOUDEVILLE" }, { text: "CANTELEU" }],
        },
      },
      {
        id: ["Mont-Riboudet", "Mont-Riboudet ROUEN"],
        autoHide: true,
        name: "Mont-Riboudet - Kindarena",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "35" },
          pages: [{ text: "MONT-RIBOUDET" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Ecole Moulin NOTRE-DAME-DE-BONDEVILLE", "Ecole Moulin"],
        name: "École Moulin",
        city: "NOTRE-DAME-DE-BONDEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "35" },
          pages: [{ text: "ECOLE MOULIN" }, { font: "1310C2E1", spacing: 1, text: "NOTRE-DAME-DE-BONDEVILLE" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:36",
    routeIds: ["ASTUCE:36", "ASTUCE-TGR:36"],
    name: "36",
    colors: { background: "#D3D800", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Boulingrin ROUEN", "Boulingrin"],
        name: "Boulingrin",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "36" },
          pages: [{ text: "BOULINGRIN" }, { spacing: 4, text: "ROUEN" }],
        },
      },
      {
        id: ["Coteaux du Larmont ROUEN", "Coteaux du Larmont"],
        name: "Coteaux du Larmont",
        city: "ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "36" },
          pages: [
            { font: "1508C2E1", text: "COTEAUX DU LARMONT" },
            { spacing: 4, text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:37",
    routeIds: ["ASTUCE:37", "ASTUCE-TGR:37"],
    name: "37",
    colors: { background: "#D3D800", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Plaine de la Ronce ISNEAUVILLE", "Plaine de la Ronce"],
        name: "Plaine de la Ronce",
        city: "ISNEAUVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "37" },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "PLAINE DE LA RONCE" },
            { spacing: 3, text: "ISNEAUVILLE" },
          ],
        },
      },
      {
        id: ["Hauts Poiriers ISNEAUVILLE", "Les Hauts Poiriers"],
        name: "Hauts Poiriers",
        city: "ISNEAUVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "37" },
          pages: [{ text: "HAUTS-POIRIERS" }, { spacing: 3, text: "ISNEAUVILLE" }],
        },
      },
      {
        id: ["Les Bosquets ISNEAUVILLE", "Rue des Bosquets"],
        name: "Les Bosquets",
        city: "ISNEAUVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "37" },
          pages: [{ text: "LES BOSQUETS" }, { spacing: 3, text: "ISNEAUVILLE" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:38",
    routeIds: ["ASTUCE:38", "ASTUCE-TGR:38"],
    name: "38",
    colors: { background: "#D3D800", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Mairie MONTMAIN", "Mairie de Montmain"],
        alternate: "Mairie de Montmain",
        name: "Mairie",
        city: "MONTMAIN",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "38" },
          pages: [{ text: "MAIRIE" }, { text: "MONTMAIN" }],
        },
      },
      {
        id: ["Coteaux Branly DARNÉTAL", "Coteaux Branly"],
        name: "Coteaux Branly",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: { backgroundColor: "#D3D800", textColor: "#000000", text: "38" },
          pages: [{ font: "1510N2E1", text: "COTEAUX BRANLY" }, { text: "DARNETAL" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:41",
    routeIds: ["ASTUCE:41", "ASTUCE-TGR:41"],
    name: "41",
    colors: { background: "#F8AE4C", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Vente Olivier SAINT-ETIENNE-DU-ROUVRAY"],
        name: "Vente Olivier",
        city: "SAINT-ÉTIENNE-DU-ROUVRAY",
        girouette: {
          routeNumber: { backgroundColor: "#F78C00", textColor: "#000000", outlineColor: "#FFFFFF", text: "41" },
          pages: [{ text: "VENTE OLIVIER" }, { font: "1310C2E1", spacing: 1, text: "SAINT-ETIENNE-DU-ROUVRAY" }],
        },
      },
      {
        id: ["La Bastille SOTTEVILLE-LÈS-ROUEN"],
        autoHide: true,
        name: "La Bastille",
        city: "SOTTEVILLE-LÈS-ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#F78C00", textColor: "#000000", outlineColor: "#FFFFFF", text: "41" },
          pages: [{ text: "LA BASTILLE" }, { font: "1508C2E1", text: "SOTTEVILLE-LES-ROUEN" }],
        },
      },
      {
        id: ["Hôtel de Ville de Sotteville"],
        autoHide: true,
        alternate: "Hôtel de Ville de Sotteville",
        name: "Hôtel de Ville",
        city: "SOTTEVILLE-LÈS-ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#F78C00", textColor: "#000000", outlineColor: "#FFFFFF", text: "41" },
          pages: [{ text: "HOTEL DE VILLE" }, { font: "1508C2E1", text: "SOTTEVILLE-LES-ROUEN" }],
        },
      },
      {
        id: ["Ancienne Mare PETIT-QUEVILLY", "Ancienne Mare"],
        name: "Ancienne Mare",
        city: "PETIT-QUEVILLY",
        girouette: {
          routeNumber: { backgroundColor: "#F78C00", textColor: "#000000", outlineColor: "#FFFFFF", text: "41" },
          pages: [{ text: "ANCIENNE MARE" }, { text: "PETIT-QUEVILLY" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:42",
    routeIds: ["ASTUCE:42", "ASTUCE-TGR:42"],
    name: "42",
    colors: { background: "#A2559D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Lebon GRAND QUEVILLY", "Lebon"],
        name: "Lebon",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: {
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "42",
          },
          pages: [{ text: "LEBON" }, { font: "1510N2E1", text: "GRAND-QUEVILLY" }],
        },
      },
      {
        id: ["Centre Routier GRAND QUEVILLY", "Centre Routier"],
        autoHide: true,
        name: "Centre Routier",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: {
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "42",
          },
          pages: [
            { font: "1510N2E1", text: "CENTRE ROUTIER" },
            { font: "1510N2E1", text: "GRAND-QUEVILLY" },
          ],
        },
      },
      {
        id: ["La Houssière SAINT-ETIENNE-DU-ROUVRAY", "La Houssière"],
        name: "La Houssière",
        city: "SAINT-ÉTIENNE-DU-ROUVRAY",
        girouette: {
          routeNumber: { backgroundColor: "#A2559D", textColor: "#FFFFFF", outlineColor: "#000000", text: "42" },
          pages: [{ text: "LA HOUSSIERE" }, { font: "1310C2E1", spacing: 1, text: "SAINT-ETIENNE-DU-ROUVRAY" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:43",
    name: "43",
    colors: { background: "#9BD4E3", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Place du Vivier HOUPPEVILLE"],
        name: "Place du Vivier",
        city: "HOUPPEVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "43",
          },
          pages: [{ font: "1510N2E1", text: "PLACE DU VIVIER" }, { text: "HOUPPEVILLE" }],
        },
      },
      {
        id: ["Longs Vallons NOTRE-DAME-DE-BONDEVILLE"],
        name: "Longs Vallons",
        city: "NOTRE-DAME-DE-BONDEVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#00ACE5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "43",
          },
          pages: [{ text: "LONGS VALLONS" }, { font: "1310C2E1", spacing: 1, text: "NOTRE-DAME-DE-BONDEVILLE" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:44",
    routeIds: ["ASTUCE:44", "ASTUCE-TGR:44"],
    name: "44",
    colors: { background: "#9BD4E3", text: "#1D1D1B" },
    destinations: [
      {
        id: ["E. Lacroix"],
        name: "Édouard Lacroix",
        city: "SAINT-PIERRE-DE-MANNEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#55AAFF", textColor: "#000000", outlineColor: "#FFFFFF", text: "44" },
          pages: [{ font: "1510N2E1", text: "EDOUARD LACROIX" }, [{ text: "SAINT-PIERRE" }, { text: "DE-MANNEVILLE" }]],
        },
      },
      {
        id: ["Chapelle Saint-Siméon DÉVILLE-LÈS-ROUEN", "Chapelle Saint-Siméon"],
        name: "Chapelle Saint-Siméon",
        city: "DÉVILLE-LES-ROUEN",
        girouette: {
          routeNumber: { backgroundColor: "#55AAFF", textColor: "#000000", outlineColor: "#FFFFFF", text: "44" },
          pages: [
            { font: "1508C2E1", spacing: 1, text: "CHAPELLE SAINT-SIMEON" },
            { font: "1508C2E1", spacing: 3, text: "DEVILLE-LES-ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:530",
    name: "530",
    colors: { background: "#D20A11", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Gare Routière"],
        alternate: "Gare Routière de Rouen",
        name: "Gare Routière",
        city: "ROUEN",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#D20A11",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "530",
          },
          pages: [[{ text: "ROUEN" }, { text: "GARE ROUTIERE" }]],
        },
      },
      {
        id: ["Mairie du Trait"],
        alternate: "Mairie du Trait",
        name: "Mairie",
        city: "LE TRAIT",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#D20A11",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "530",
          },
          pages: [[{ text: "LE TRAIT" }, { text: "MAIRIE" }]],
        },
      },
      {
        id: ["Caudebec - Quai"],
        alternate: "Caudebec-Quai",
        name: "Quai",
        city: "CAUDEBEC-EN-CAUX",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#D20A11",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "530",
          },
          pages: [[{ text: "CAUDEBEC-EN-CAUX" }, { text: "QUAI" }]],
        },
      },
    ],
  },
  {
    id: "ASTUCE:111",
    name: "A",
    colors: { background: "#CD1922", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MAIRIE DE ST PIERRE"],
        alternate: "Mairie de Saint-Pierre",
        name: "Mairie",
        city: "SAINT-PIERRE-LÈS-ELBEUF",
        girouette: {
          routeNumber: {
            backgroundColor: "#CD1922",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "A",
          },
          pages: [{ font: "1507SUPX", spacing: 1, text: "MAIRIE DE SAINT-PIERRE" }],
        },
      },
      {
        id: ["MAIRIE DE CLEON"],
        alternate: "Mairie de Cléon",
        name: "Mairie",
        city: "CLÉON",
        girouette: {
          routeNumber: {
            backgroundColor: "#CD1922",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "A",
          },
          pages: [{ font: "1508SUPX", text: "MAIRIE DE CLEON" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:112",
    name: "B",
    colors: { background: "#354093", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ECOLE DE LA LONDE"],
        name: "École de la Londe",
        city: "LA LONDE",
        girouette: {
          routeNumber: {
            backgroundColor: "#354093",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "B",
          },
          pages: [{ font: "1508SUPX", spacing: 1, text: "ECOLE DE LA LONDE" }],
        },
      },
      {
        id: ["PARC ST CYR"],
        name: "Parc Saint-Cyr",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#354093",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "B",
          },
          pages: [{ font: "1508SUPX", text: "PARC SAINT-CYR" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:113",
    name: "C",
    colors: { background: "#9E2C87", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BOSC TARD"],
        name: "Bosc Tard",
        city: "SAINT-PIERRE-LÈS-ELBEUF",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E2C87",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C",
          },
          pages: [{ font: "1508SUPX", text: "BOSC TARD" }],
        },
      },
      {
        id: ["LIEROULT"],
        autoHide: true,
        name: "Liéroult",
        city: "SAINT-PIERRE-LÈS-ELBEUF",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E2C87",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C",
          },
          pages: [{ font: "1508SUPX", text: "LIEROULT" }],
        },
      },
      {
        id: ["LES ARCHES"],
        name: "Les Arches",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E2C87",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C",
          },
          pages: [{ font: "1508SUPX", text: "LES ARCHES" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:114",
    name: "E",
    colors: { background: "#00A266", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MOULIN SAINT ETIENNE"],
        name: "Moulin Saint-Étienne",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A266",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "E",
          },
          pages: [{ font: "1507SUPX", spacing: 1, text: "MOULIN SAINT-ETIENNE" }],
        },
      },
      {
        id: ["MAIRIE DE CLEON"],
        alternate: "Mairie de Cléon",
        name: "Mairie",
        city: "CLÉON",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A266",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "E",
          },
          pages: [{ font: "1508SUPX", text: "MAIRIE DE CLEON" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:115",
    name: "F",
    colors: { background: "#D3507A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["POLE MULTIMODAL DE OISSEL"],
        alternate: "Pôle Multimodal d'Oissel",
        name: "Pôle Multimodal",
        city: "OISSEL",
        girouette: {
          routeNumber: {
            backgroundColor: "#D3507A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "F",
          },
          pages: [{ font: "1407SUPX", spacing: 1, text: "POLE MULTIMODAL D'OISSEL" }],
        },
      },
      {
        id: ["Z.I. L OISON"],
        name: "Z.I. l'Oison",
        city: "SAINT-PIERRE-LÈS-ELBEUF",
        girouette: {
          routeNumber: {
            backgroundColor: "#D3507A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "F",
          },
          pages: [{ font: "1508SUPX", text: "Z.I. L'OISON" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:119",
    name: "G",
    colors: { background: "#D3D800", text: "#1D1D1B" },
    destinations: [
      {
        id: ["ROUTE DU BAC"],
        name: "Route du Bac",
        city: "LA BOUILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#D3D800",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "G",
          },
          pages: [{ font: "1508SUPX", text: "ROUTE DU BAC" }],
        },
      },
      {
        id: ["CHAMP DE FOIRE"],
        name: "Champ de Foire",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#D3D800",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "G",
          },
          pages: [{ font: "1508SUPX", text: "CHAMP DE FOIRE" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:116",
    name: "D1",
    colors: { background: "#75462D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MAIRIE DE CLEON"],
        alternate: "Mairie de Cléon",
        name: "Mairie",
        city: "CLÉON",
        girouette: {
          routeNumber: {
            backgroundColor: "#75462D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "D1",
          },
          pages: [{ font: "1508SUPX", text: "MAIRIE DE CLEON" }],
        },
      },
      {
        id: ["PARC ST CYR"],
        name: "Parc Saint-Cyr",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#75462D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "D1",
          },
          pages: [{ font: "1508SUPX", text: "PARC SAINT-CYR" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:117",
    name: "D2",
    colors: { background: "#98C21D", text: "#1D1D1B" },
    destinations: [
      {
        id: ["POLE MULTIMODAL DE OISSEL"],
        alternate: "Pôle Multimodal d'Oissel",
        name: "Pôle Multimodal",
        city: "OISSEL",
        girouette: {
          routeNumber: {
            backgroundColor: "#98C21D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "D2",
          },
          pages: [{ font: "1407SUPX", spacing: 1, text: "POLE MULTIMODAL D'OISSEL" }],
        },
      },
      {
        id: ["MAIRIE DE ST PIERRE"],
        alternate: "Mairie de Saint-Pierre",
        name: "Mairie",
        city: "SAINT-PIERRE-LÈS-ELBEUF",
        girouette: {
          routeNumber: {
            backgroundColor: "#98C21D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "D2",
          },
          pages: [{ font: "1407SUPX", spacing: 1, text: "MAIRIE DE SAINT-PIERRE" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:100",
    name: "100",
    colors: { background: "#396AB1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHAMP DE FOIRE"],
        autoHide: true,
        name: "Champ de Foire",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#396AB1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "100",
          },
          pages: [{ font: "1508SUPX", text: "CHAMP DE FOIRE" }],
        },
      },
      {
        id: ["CASANOVA"],
        autoHide: true,
        name: "Casanova",
        city: "TOURVILLE-LA-RIVIÈRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#396AB1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "100",
          },
          pages: [{ font: "1508SUPX", text: "CASANOVA" }],
        },
      },
      {
        id: ["POLE MULTIMODAL DOC COTONI"],
        autoHide: true,
        alternate: "Pôle Multimodal-Cotoni",
        name: "Pôle Multimodal-Cotoni",
        city: "OISSEL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#396AB1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "100",
          },
          pages: [{ font: "1407SUPX", text: "POLE MULTIMODAL - COTONI" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:101",
    name: "101",
    colors: { background: "#EE7BAE", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHAMP DE FOIRE"],
        autoHide: true,
        name: "Champ de Foire",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#EE7BAE",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "101",
          },
          pages: [{ font: "1508SUPX", text: "CHAMP DE FOIRE" }],
        },
      },
      {
        id: ["POLE MULTIMODAL DOC COTONI"],
        autoHide: true,
        name: "Pôle Multimodal-Cotoni",
        city: "OISSEL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#EE7BAE",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "101",
          },
          pages: [{ font: "1407SUPX", text: "POLE MULTIMODAL - COTONI" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:102",
    name: "102",
    colors: { background: "#7CBD6D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHAMP DE FOIRE"],
        autoHide: true,
        name: "Champ de Foire",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7CBD6D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "102",
          },
          pages: [{ font: "1508SUPX", text: "CHAMP DE FOIRE" }],
        },
      },
      {
        id: ["BEAU SITE"],
        autoHide: true,
        name: "Beau Site",
        city: "FRENEUSE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7CBD6D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "102",
          },
          pages: [{ font: "1508SUPX", text: "BEAU SITE" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:103",
    name: "103",
    colors: { background: "#F1861A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COUSTEAU"],
        autoHide: true,
        name: "Collège Cousteau",
        city: "CAUDEBEC-LÈS-ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F1861A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "103",
          },
          pages: [{ font: "1508SUPX", text: "COLLEGE COUSTEAU" }],
        },
      },
      {
        id: ["MOULIN SAINT ETIENNE"],
        autoHide: true,
        name: "Moulin Saint-Étienne",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F1861A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "103",
          },
          pages: [{ font: "1507SUPX", text: "MOULIN SAINT-ETIENNE" }],
        },
      },
      {
        id: ["PARC ST CYR"],
        autoHide: true,
        name: "Parc Saint-Cyr",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F1861A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "103",
          },
          pages: [{ font: "1508SUPX", text: "PARC SAINT-CYR" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:104",
    name: "104",
    colors: { background: "#E8E100", text: "#1D1D1B" },
    destinations: [
      {
        id: ["COLLEGE JACQUES BREL"],
        autoHide: true,
        name: "Collège Jacques Brel",
        city: "CLÉON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#E8E100",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "104",
          },
          pages: [{ font: "1407SUPX", text: "COLLEGE JACQUES BREL" }],
        },
      },
      {
        id: ["CASANOVA"],
        autoHide: true,
        name: "Casanova",
        city: "TOURVILLE-LA-RIVIÈRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#E8E100",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "104",
          },
          pages: [{ font: "1508SUPX", text: "CASANOVA" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:106",
    name: "106",
    colors: { background: "#9A1915", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COLLEGE JACQUES BREL"],
        autoHide: true,
        name: "Collège Jacques Brel",
        city: "CLÉON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9A1915",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "106",
          },
          pages: [{ font: "1407SUPX", text: "COLLEGE JACQUES BREL" }],
        },
      },
      {
        id: ["BEAU SITE"],
        autoHide: true,
        name: "Beau Site",
        city: "FRENEUSE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9A1915",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "106",
          },
          pages: [{ font: "1508SUPX", text: "BEAU SITE" }],
        },
      },
    ],
  },
  {
    id: "ASTUCE:201",
    name: "201",
    colors: { background: "#F8AE4C", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "201",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
      {
        id: ["Les Mailles SAINT-PIERRE-DE-VARENGEVILLE"],
        autoHide: true,
        name: "Les Mailles",
        city: "SAINT-PIERRE-DE-VARENGEVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "201",
          },
          pages: [{ font: "1508SUPX", text: "LES MAILLES" }, [{ text: "SAINT-PIERRE" }, { text: "DE-VARENGEVILLE" }]],
        },
      },
    ],
  },
  {
    id: "ASTUCE:202",
    name: "202",
    colors: { background: "#74B95B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "202",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
      {
        id: ["Église SAINT-PAËR"],
        autoHide: true,
        alternate: "Église de Saint-Paër",
        name: "Église",
        city: "SAINT-PAËR",
        girouette: {
          routeNumber: {
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "202",
          },
          pages: [
            { font: "1508SUPX", text: "EGLISE" },
            { font: "1508SUPX", text: "SAINT-PAER" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:203",
    name: "203",
    colors: { background: "#F4A3AF", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#F4A3AF",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "203",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
      {
        id: ["Mairie SAINTE-MARGUERITE-SUR-DUCLAIR"],
        autoHide: true,
        alternate: "Mairie de Saint-Marguerite",
        name: "Mairie",
        city: "SAINT-MARGUERITE-SUR-DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#F4A3AF",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "203",
          },
          pages: [{ font: "1508SUPX", text: "MAIRIE" }, [{ text: "SAINT-MARGERITE" }, { text: "SUR-DUCLAIR" }]],
        },
      },
    ],
  },
  {
    id: "ASTUCE:204",
    name: "204",
    colors: { background: "#0090D7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "204",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
      {
        id: ["L'Orme HÉNOUVILLE"],
        autoHide: true,
        name: "L'Orme",
        city: "HÉNOUVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "204",
          },
          pages: [
            { font: "1508SUPX", text: "L'ORME" },
            { font: "1508SUPX", text: "HENOUVILLE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:205",
    name: "205",
    colors: { background: "#914C15", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#914C15",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "205",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
      {
        id: ["Le Paulu - Usine Oxford SAINT-PIERRE-DE-VARENGEVILLE"],
        autoHide: true,
        name: "Le Paulu - Usine Oxford",
        city: "SAINT-PIERRE-DE-VARENGEVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#914C15",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "205",
          },
          pages: [
            { font: "1507SUPX", text: "LE PAULU-USINE OXFORD" },
            [{ text: "SAINT-PIERRE" }, { text: "DE-VARENGEVILLE" }],
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:206",
    name: "206",
    colors: { background: "#009640", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#009640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "206",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
      {
        id: ["Le Conihout 543 LE-MESNIL-SOUS-JUMIÈGES"],
        autoHide: true,
        name: "Le Conihout 543",
        city: "LE-MESNIL-SOUS-JUMIÈGES",
        girouette: {
          routeNumber: {
            backgroundColor: "#009640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "206",
          },
          pages: [
            { font: "1508SUPX", text: "LE CONIHOUT 543" },
            { font: "1407SUPX", text: "LE-MESNIL-SOUS-JUMIEGES" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:207",
    name: "207",
    colors: { background: "#C7D530", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#C7D530",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "207",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
      {
        id: ["Abbaye JUMIÈGES"],
        autoHide: true,
        alternate: "Abbaye de Jumièges",
        name: "Abbaye",
        city: "JUMIÈGES",
        girouette: {
          routeNumber: {
            backgroundColor: "#C7D530",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "207",
          },
          pages: [
            { font: "1508SUPX", text: "ABBAYE" },
            { font: "1508SUPX", text: "JUMIEGES" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:208",
    name: "208",
    colors: { background: "#F8AE4C", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "208",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
      {
        id: ["Calumet BARDOUVILLE"],
        autoHide: true,
        name: "Calumet",
        city: "BARDOUVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "208",
          },
          pages: [
            { font: "1508SUPX", text: "CALUMET" },
            { font: "1508SUPX", text: "BARDOUVILLE" },
          ],
        },
      },
      {
        id: ["Bac de Berville"],
        autoHide: true,
        alternate: "Bac de Berville",
        name: "Bac",
        city: "BERVILLE-SUR-SEINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "208",
          },
          pages: [
            { font: "1508SUPX", text: "BAC" },
            { font: "1508SUPX", text: "BERVILLE-SUR-SEINE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:210",
    name: "210",
    colors: { background: "#00A984", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Charcot LE TRAIT"],
        autoHide: true,
        name: "Collège Charcot",
        city: "LE TRAIT",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A984",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "210",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE CHARCOT" },
            { font: "1508SUPX", text: "LE TRAIT" },
          ],
        },
      },
      {
        id: ["Ronceray SAINTE-MARGUERITE-SUR-DUCLAIR"],
        autoHide: true,
        name: "Ronceray",
        city: "SAINTE-MARGUERITE-SUR-DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A984",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "210",
          },
          pages: [{ font: "1508SUPX", text: "RONCERAY" }, [{ text: "SAINT-MARGERITE" }, { text: "SUR-DUCLAIR" }]],
        },
      },
    ],
  },
  {
    id: "ASTUCE:211",
    name: "211",
    colors: { background: "#F4A3B0", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Collège Charcot LE TRAIT"],
        autoHide: true,
        name: "Collège Charcot",
        city: "LE TRAIT",
        girouette: {
          routeNumber: {
            backgroundColor: "#F4A3B0",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "211",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE CHARCOT" },
            { font: "1508SUPX", text: "LE TRAIT" },
          ],
        },
      },
      {
        id: ["Le Beauquesnay SAINT-MARGUERITE-SUR-DUCLAIR"],
        autoHide: true,
        name: "Le Beauquesnay",
        city: "SAINTE-MARGUERITE-SUR-DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#F4A3B0",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "211",
          },
          pages: [{ font: "1508SUPX", text: "LE BEAUQUESNAY" }, [{ text: "SAINT-MARGERITE" }, { text: "SUR-DUCLAIR" }]],
        },
      },
    ],
  },
  {
    id: "ASTUCE:212",
    name: "212",
    colors: { background: "#E83278", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Charcot LE TRAIT"],
        autoHide: true,
        name: "Collège Charcot",
        city: "LE TRAIT",
        girouette: {
          routeNumber: {
            backgroundColor: "#E83278",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "212",
          },
          pages: [
            { font: "1508SUPX", text: "LA MAISON BLANCHE" },
            { font: "1508SUPX", text: "LE TRAIT" },
          ],
        },
      },
      {
        id: ["Terrain de Pétanque YAINVILLE"],
        autoHide: true,
        alternate: "Terrain de Pétanque de Yainville",
        name: "Terrain de Pétanque",
        city: "YAINVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#E83278",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "212",
          },
          pages: [
            { font: "1507SUPX", text: "TERRAIN DE PETANQUE" },
            { font: "1508SUPX", text: "YAINVILLE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:213",
    name: "213",
    colors: { background: "#0090D7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Charcot LE TRAIT"],
        autoHide: true,
        name: "Collège Charcot",
        city: "LE TRAIT",
        girouette: {
          routeNumber: {
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "213",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE CHARCOT" },
            { font: "1508SUPX", text: "LE TRAIT" },
          ],
        },
      },
      {
        id: ["La Maison Blanche LE TRAIT"],
        autoHide: true,
        name: "La Maison Blanche",
        city: "LE TRAIT",
        girouette: {
          routeNumber: {
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "213",
          },
          pages: [
            { font: "1508SUPX", text: "LA MAISON BLANCHE" },
            { font: "1508SUPX", text: "LE TRAIT" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:214",
    name: "214",
    colors: { background: "#C7D530", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Lycée du Cailly DÉVILLE-LÈS-ROUEN"],
        autoHide: true,
        name: "Lycée du Cailly",
        city: "DÉVILLE-LÈS-ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#C7D530",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "214",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE DU CAILLY" },
            { font: "1508SUPX", text: "DEVILLE-LES-ROUEN" },
          ],
        },
      },
      {
        id: ["Collège Le Cèdre CANTELEU"],
        autoHide: true,
        name: "Collège Le Cèdre",
        city: "CANTELEU",
        girouette: {
          routeNumber: {
            backgroundColor: "#C7D530",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "214",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE LE CEDRE" },
            { font: "1508SUPX", text: "CANTELEU" },
          ],
        },
      },
      {
        id: ["Val Phénix QUEVILLON"],
        autoHide: true,
        name: "Val Phénix",
        city: "QUEVILLON",
        girouette: {
          routeNumber: {
            backgroundColor: "#C7D530",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "214",
          },
          pages: [
            { font: "1508SUPX", text: "VAL PHENIX" },
            { font: "1508SUPX", text: "QUEVILLON" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:220",
    name: "220",
    colors: { background: "#FFDD00", text: "#1D1D1B" },
    destinations: [
      {
        id: ["École Cousteau SAINTE-MARGUERITE-SUR-DUCLAIR"],
        autoHide: true,
        name: "École Cousteau",
        city: "SAINTE-MARGUERITE-SUR-DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#FFDD00",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "220",
          },
          pages: [{ font: "1508SUPX", text: "ECOLE COUSTEAU" }, [{ text: "SAINT-MARGERITE" }, { text: "SUR-DUCLAIR" }]],
        },
      },
    ],
  },
  {
    id: "ASTUCE:221",
    name: "221",
    colors: { background: "#0090D7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Ecole ÉPINAY-SUR-DUCLAIR"],
        autoHide: true,
        alternate: "École d'Épinay",
        name: "École",
        city: "ÉPINAY-SUR-DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "221",
          },
          pages: [
            { font: "1508SUPX", text: "ECOLE" },
            { font: "1508SUPX", text: "EPINAY-SUR-DUCLAIR" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:222",
    name: "222",
    colors: { background: "#E83278", text: "#FFFFFF" },
    destinations: [
      {
        id: ["École JUMIÈGES"],
        autoHide: true,
        alternate: "École de Jumièges",
        name: "École",
        city: "JUMIÈGES",
        girouette: {
          routeNumber: {
            backgroundColor: "#E83278",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "222",
          },
          pages: [
            { font: "1508SUPX", text: "ECOLE" },
            { font: "1508SUPX", text: "JUMIEGES" },
          ],
        },
      },
      {
        id: ["Guillaume Le Conquérant JUMIÈGES"],
        autoHide: true,
        name: "Guillaume Le Conquérant",
        city: "JUMIÈGES",
        girouette: {
          routeNumber: {
            backgroundColor: "#E83278",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "222",
          },
          pages: [
            { font: "1407SUPX", text: "GUILLAUME LE CONQUERANT" },
            { font: "1508SUPX", text: "JUMIEGES" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:223",
    name: "223",
    colors: { background: "#00A984", text: "#FFFFFF" },
    destinations: [
      {
        id: ["École J. Prévert SAINT-PIERRE-DE-VARENGEVILLE"],
        autoHide: true,
        name: "École Jacques Prévert",
        city: "SAINT-PIERRE-DE-VARENGEVILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A984",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "223",
          },
          pages: [
            { font: "1407SUPX", text: "ECOLE JACQUES PREVERT" },
            [{ text: "SAINT-PIERRE" }, { text: "DE-VARENGEVILLE" }],
          ],
        },
      },
      {
        id: ["Collège Gustave Flaubert DUCLAIR"],
        autoHide: true,
        name: "Collège Flaubert",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A984",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "223",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE FLAUBERT" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:224",
    name: "224",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["École Primaire SAINT-PAËR"],
        autoHide: true,
        alternate: "École Primaire de Saint-Paër",
        name: "École Primaire",
        city: "SAINT-PAËR",
        girouette: {
          routeNumber: {
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "224",
          },
          pages: [
            { font: "1508SUPX", text: "ECOLE PRIMAIRE" },
            { font: "1508SUPX", text: "SAINT-PAER" },
          ],
        },
      },
      {
        id: ["Le Bas Aulnay SAINT-PAËR"],
        autoHide: true,
        name: "Le Bas Aulnay",
        city: "SAINT-PAËR",
        girouette: {
          routeNumber: {
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "224",
          },
          pages: [
            { font: "1508SUPX", text: "LE BAS AULNAY" },
            { font: "1508SUPX", text: "SAINT-PAER" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:225",
    name: "225",
    colors: { background: "#E83278", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mairie - École d'Yville YVILLE-SUR-SEINE"],
        autoHide: true,
        alternate: "Mairie d'Yville-sur-Seine",
        name: "Mairie",
        city: "YVILLE-SUR-SEINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#E83278",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "225",
          },
          pages: [
            { font: "1508SUPX", text: "MAIRIE" },
            { font: "1508SUPX", text: "YVILLE-SUR-SEINE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:227",
    name: "227",
    colors: { background: "#007D62", text: "#FFFFFF" },
    destinations: [
      {
        id: ["École Malraux DUCLAIR"],
        autoHide: true,
        name: "École Malraux",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#007D62",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "227",
          },
          pages: [
            { font: "1508SUPX", text: "ECOLE MALRAUX" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:228",
    name: "228",
    colors: { background: "#F2E500", text: "#1D1D1B" },
    destinations: [
      {
        id: ["École Malraux DUCLAIR"],
        autoHide: true,
        name: "École Malraux",
        city: "DUCLAIR",
        girouette: {
          routeNumber: {
            backgroundColor: "#F2E500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "228",
          },
          pages: [
            { font: "1508SUPX", text: "ECOLE MALRAUX" },
            { font: "1508SUPX", text: "DUCLAIR" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:229",
    name: "229",
    colors: { background: "#F7AE4C", text: "#1D1D1B" },
    destinations: [
      {
        id: ["École Maupassant LE TRAIT"],
        autoHide: true,
        name: "École Maupassant",
        city: "LE TRAIT",
        girouette: {
          routeNumber: {
            backgroundColor: "#f7ae4c",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "229",
          },
          pages: [
            { font: "1508SUPX", text: "ECOLE MAUPASSANT" },
            { font: "1508SUPX", text: "LE TRAIT" },
          ],
        },
      },
      {
        id: ["Église du Trait LE TRAIT"],
        autoHide: true,
        alternate: "Église du Trait",
        name: "Église",
        city: "LE TRAIT",
        girouette: {
          routeNumber: {
            backgroundColor: "#f7ae4c",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            font: "1508SUPX",
            text: "229",
          },
          pages: [
            { font: "1508SUPX", text: "EGLISE" },
            { font: "1508SUPX", text: "LE TRAIT" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:300",
    routeIds: ["ASTUCE:300", "ASTUCE-TGR:300"],
    name: "300",
    colors: { background: "#CE1922", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Épinay SAINT-AUBIN-ÉPINAY", "Épinay"],
        autoHide: true,
        name: "Épinay",
        city: "SAINT-AUBIN-ÉPINAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#CE1922",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "300",
          },
          pages: [
            { font: "1508SUPX", text: "EPINAY" },
            { font: "1508SUPX", text: "SAINT-AUBIN-EPINAY" },
          ],
        },
      },
      {
        id: ["Lycée Flaubert ROUEN", "Lycée Flaubert"],
        autoHide: true,
        name: "Lycée Flaubert",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#CE1922",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "300",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE FLAUBERT" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:301",
    routeIds: ["ASTUCE:301", "ASTUCE-TGR:301"],
    name: "301",
    colors: { background: "#81612D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bois Breton RONCHEROLLES-SUR-LE-VIVIER", "Bois Breton"],
        autoHide: true,
        name: "Bois Breton",
        city: "RONCHEROLLES-SUR-LE-VIVIER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#81612D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "301",
          },
          pages: [{ font: "1508SUPX", text: "BOIS BRETON" }, [{ text: "RONCHEROLLES" }, { text: "SUR-LE-VIVIER" }]],
        },
      },
      {
        id: ["Lycée Flaubert ROUEN", "Lycée Flaubert"],
        autoHide: true,
        name: "Lycée Flaubert",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#81612D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "301",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE FLAUBERT" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:302",
    routeIds: ["ASTUCE:302", "ASTUCE-TGR:302"],
    name: "302",
    colors: { background: "#8ACBC0", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Boulingrin ROUEN", "Boulingrin"],
        autoHide: true,
        name: "Boulingrin",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8ACBC0",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "302",
          },
          pages: [
            { font: "1508SUPX", text: "BOULINGRIN" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Lycée Grieu ROUEN", "Lycée Grieu"],
        autoHide: true,
        name: "Lycée Grieu",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8ACBC0",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "302",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE GRIEU" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:303",
    routeIds: ["ASTUCE:303", "ASTUCE-TGR:303"],
    name: "303",
    colors: { background: "#74B95B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Route d'Isneauville FONTAINE-SOUS-PRÉAUX", "Route d'Isneauville"],
        autoHide: true,
        name: "Route d'Isneauville",
        city: "FONTAINE-SOUS-PRÉAUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "303",
          },
          pages: [
            { font: "1508SUPX", text: "ROUTE D'ISNEAUVILLE" },
            { font: "1507SUPX", text: "FONTAINE-SOUS-PREAUX" },
          ],
        },
      },
      {
        id: ["Collège Michelet BIHOREL", "Collège Michelet"],
        autoHide: true,
        name: "Collège Michelet",
        city: "BIHOREL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "303",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE MICHELET" },
            { font: "1508SUPX", text: "BIHOREL" },
          ],
        },
      },
      {
        id: ["Collège Saint-Victrice BIHOREL", "Collège Saint-Victrice"],
        autoHide: true,
        name: "Collège Saint-Victrice",
        city: "BIHOREL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "303",
          },
          pages: [
            { font: "1407SUPX", text: "COLLEGE SAINT-VICTRICE" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Mairie SAINT-MARTIN-DU-VIVIER", "Mairie de Saint-Martin-du-Vivier"],
        autoHide: true,
        alternate: "Mairie de Saint-Martin-du-Vivier",
        name: "Mairie",
        city: "SAINT-MARTIN-DU-VIVIER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "303",
          },
          pages: [
            { font: "1508SUPX", text: "MAIRIE" },
            { font: "1507SUPX", text: "SAINT-MARTIN-DU-VIVIER" },
          ],
        },
      },
      {
        id: ["Lycée Flaubert ROUEN", "Lycée Flaubert - Texcier"],
        autoHide: true,
        name: "Lycée Flaubert",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "303",
          },
          pages: [
            { font: "1407SUPX", text: "LYCEE FLAUBERT - TEXCIER" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:305",
    routeIds: ["ASTUCE:305", "ASTUCE-TGR:305"],
    name: "305",
    colors: { background: "#C19FCB", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Petit Pont ISNEAUVILLE", "Petit Pont"],
        autoHide: true,
        name: "Petit Pont",
        city: "ISNEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#C19FCB",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "305",
          },
          pages: [
            { font: "1508SUPX", text: "PETIT PONT" },
            { font: "1508SUPX", text: "ISNEAUVILLE" },
          ],
        },
      },
      {
        id: ["Hôtel de Ville ROUEN", "Hôtel de Ville de Rouen"],
        alternate: "Hôtel de Ville de Rouen",
        autoHide: true,
        name: "Hôtel de Ville",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#C19FCB",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "305",
          },
          pages: [
            { font: "1508SUPX", text: "HOTEL DE VILLE" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Lycée Flaubert ROUEN", "Lycée Flaubert - Texcier"],
        autoHide: true,
        name: "Lycée Flaubert",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#C19FCB",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "305",
          },
          pages: [
            { font: "1407SUPX", text: "LYCEE FLAUBERT - TEXCIER" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:310",
    routeIds: ["ASTUCE:310", "ASTUCE-TGR:310"],
    name: "310",
    colors: { background: "#0090D7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Lycée des Bruyères PETIT-QUEVILLY", "Lycée des Bruyères"],
        autoHide: true,
        name: "Lycée des Bruyères",
        city: "PETIT-QUEVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "310",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE DES BRUYERES" },
            { font: "1508SUPX", text: "PETIT-QUEVILLY" },
          ],
        },
      },
      {
        id: ["Lycée Elisa Lemonnier PETIT-QUEVILLY", "Lycée Elisa Lemonnier"],
        autoHide: true,
        name: "Lycée Elisa Lemonnier",
        city: "PETIT-QUEVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "310",
          },
          pages: [
            { font: "1507SUPX", text: "LYCEE ELISA LEMONNIER" },
            { font: "1508SUPX", text: "PETIT-QUEVILLY" },
          ],
        },
      },
      {
        id: ["Pôle Multimodal-Cotoni OISSEL", "Pôle Multimodal - Cotoni"],
        autoHide: true,
        name: "Pôle Multimodal-Cotoni",
        city: "OISSEL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "310",
          },
          pages: [
            { font: "1407SUPX", text: "POLE MULTIMODAL-COTONI" },
            { font: "1508SUPX", text: "OISSEL" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:311",
    routeIds: ["ASTUCE:311", "ASTUCE-TGR:311"],
    name: "311",
    colors: { background: "#F8AE4C", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Lycée Val de Seine GRAND QUEVILLY", "LYCEE VAL DE SEINE", "Lycée Val de Seine"],
        autoHide: true,
        name: "Lycée Val de Seine",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "311",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE VAL DE SEINE" },
            { font: "1508SUPX", text: "GRAND-QUEVILLY" },
          ],
        },
      },
      {
        id: ["Pont de la Chapelle SAINT-ETIENNE-DU-ROUVRAY", "Pont de la Chapelle"],
        autoHide: true,
        name: "Pont de la Chapelle",
        city: "SAINT-ÉTIENNE-DU-ROUVRAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "311",
          },
          pages: [
            { font: "1508SUPX", text: "PONT DE LA CHAPELLE" },
            { font: "1407SUPX", text: "ST-ETIENNE-DU-ROUVRAY" },
          ],
        },
      },
      {
        id: ["Pôle Multimodal-Cotoni OISSEL", "Pôle Multimodal - Cotoni"],
        autoHide: true,
        name: "Pôle Multimodal-Cotoni",
        city: "OISSEL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "311",
          },
          pages: [
            { font: "1407SUPX", text: "POLE MULTIMODAL-COTONI" },
            { font: "1508SUPX", text: "OISSEL" },
          ],
        },
      },
      {
        id: ["CHAMP DE FOIRE"],
        autoHide: true,
        name: "Champ de Foire",
        city: "ELBEUF-SUR-SEINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "311",
          },
          pages: [
            { font: "1508SUPX", text: "CHAMP DE FOIRE" },
            { font: "1508SUPX", text: "ELBEUF" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:313",
    routeIds: ["ASTUCE:313", "ASTUCE-TGR:313"],
    name: "313",
    colors: { background: "#E6007D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Edouard Branly GRAND QUEVILLY", "Collège Edouard Branly"],
        autoHide: true,
        name: "Collège Edouard Branly",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#E6007D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "313",
          },
          pages: [
            { font: "1407SUPX", text: "COLLEGE EDOUARD BRANLY" },
            { font: "1508SUPX", text: "GRAND-QUEVILLY" },
          ],
        },
      },
      {
        id: ["Coopérateurs GRAND QUEVILLY", "Coopérateurs"],
        autoHide: true,
        name: "Coopérateurs",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#E6007D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "313",
          },
          pages: [
            { font: "1508SUPX", text: "COOPERATEURS" },
            { font: "1508SUPX", text: "GRAND-QUEVILLY" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:314",
    routeIds: ["ASTUCE:314", "ASTUCE-TGR:314"],
    name: "314",
    colors: { background: "#74B95B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["La Houssière"],
        autoHide: true,
        name: "La Houssière",
        city: "SAINT-ÉTIENNE-DU-ROUVRAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "314",
          },
          pages: [
            { font: "1508SUPX", text: "LA HOUSSIERE" },
            { font: "1407SUPX", text: "ST-ETIENNE-DU-ROUVRAY" },
          ],
        },
      },
      {
        id: ["Stade Diochon"],
        autoHide: true,
        name: "Stade Diochon",
        city: "PETIT-QUEVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "314",
          },
          pages: [
            { font: "1508SUPX", text: "STADE DIOCHON" },
            { font: "1508SUPX", text: "PETIT-QUEVILLY" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:315",
    routeIds: ["ASTUCE:315", "ASTUCE-TGR:315"],
    name: "315",
    colors: { background: "#81612D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Stade Diochon PETIT-QUEVILLY", "Stade Diochon"],
        autoHide: true,
        name: "Stade Diochon",
        city: "PETIT-QUEVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#81612D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "315",
          },
          pages: [
            { font: "1508SUPX", text: "STADE DIOCHON" },
            { font: "1508SUPX", text: "PETIT-QUEVILLY" },
          ],
        },
      },
      {
        id: ["Lycée Val de Seine GRAND QUEVILLY", "Lycée Val de Seine"],
        autoHide: true,
        name: "Lycée Val de Seine",
        city: "GRAND-QUEVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#81612D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "315",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE VAL DE SEINE" },
            { font: "1508SUPX", text: "GRAND-QUEVILLY" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:322",
    name: "322",
    colors: { background: "#0090D7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Siamoisiers RONCHEROLLES-SUR-LE-VIVIER", "Siamoisiers"],
        autoHide: true,
        name: "Siamoisiers",
        city: "RONCHEROLLES-SUR-LE-VIVIER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "322",
          },
          pages: [{ font: "1508SUPX", text: "SIAMOISIERS" }, [{ text: "RONCHEROLLES" }, { text: "SUR-LE-VIVIER" }]],
        },
      },
      {
        id: ["Collège Lucie Aubrac ISNEAUVILLE", "Collège Lucie Aubrac"],
        autoHide: true,
        name: "Collège Lucie Aubrac",
        city: "ISNEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "322",
          },
          pages: [
            { font: "1507SUPX", text: "COLLEGE LUCIE AUBRAC" },
            { font: "1508SUPX", text: "ISNEAUVILLE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:330",
    routeIds: ["ASTUCE:330", "ASTUCE-TGR:330"],
    name: "330",
    colors: { background: "#74B95B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Lycée Galilée FRANQUEVILLE-SAINT-PIERRE", "Lycée Galilée"],
        autoHide: true,
        name: "Lycée Galilée",
        city: "FRANQUEVILLE-SAINT-PIERRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "330",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE GALILEE" },
            { font: "1407SUPX", text: "FRANQUEVILLE-ST-PIERRE" },
          ],
        },
      },
      {
        id: ["Long Corbeil BONSECOURS", "Long Corbeil"],
        autoHide: true,
        name: "Long Corbeil",
        city: "BONSECOURS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "330",
          },
          pages: [
            { font: "1508SUPX", text: "LONG CORBEIL" },
            { font: "1508SUPX", text: "BONSECOURS" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:331",
    routeIds: ["ASTUCE:331", "ASTUCE-TGR:331"],
    name: "331",
    colors: { background: "#E6007D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["La Providence MESNIL-ESNARD", "La Providence"],
        autoHide: true,
        name: "La Providence",
        city: "MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#E6007D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "331",
          },
          pages: [
            { font: "1508SUPX", text: "LA PROVIDENCE" },
            { font: "1508SUPX", text: "MESNIL-ESNARD" },
          ],
        },
      },
      {
        id: ["Eauplet BONSECOURS", "Eauplet"],
        autoHide: true,
        name: "Eauplet",
        city: "BONSECOURS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#E6007D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "331",
          },
          pages: [
            { font: "1508SUPX", text: "EAUPLET" },
            { font: "1508SUPX", text: "BONSECOURS" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:332",
    routeIds: ["ASTUCE:332", "ASTUCE-TGR:332"],
    name: "332",
    colors: { background: "#D3D400", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Mairie MONTMAIN", "Mairie de Montmain"],
        autoHide: true,
        alternate: "Mairie de Montmain",
        name: "Mairie",
        city: "MONTMAIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "332",
          },
          pages: [
            { font: "1508SUPX", text: "MAIRIE" },
            { font: "1508SUPX", text: "MONTMAIN" },
          ],
        },
      },
      {
        id: ["Collège Abaquesne BOOS", "Collège Abaquesne"],
        autoHide: true,
        name: "Collège Abaquesne",
        city: "BOOS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "332",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE ABAQUESNE" },
            { font: "1508SUPX", text: "BOOS" },
          ],
        },
      },
      {
        id: ["La Providence MESNIL-ESNARD", "La Providence"],
        autoHide: true,
        name: "La Providence",
        city: "MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "332",
          },
          pages: [
            { font: "1508SUPX", text: "LA PROVIDENCE" },
            { font: "1508SUPX", text: "MESNIL-ESNARD" },
          ],
        },
      },
      {
        id: ["Collège Malot MESNIL-ESNARD", "Collège Malot"],
        autoHide: true,
        name: "Collège Malot",
        city: "MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "332",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE MALOT" },
            { font: "1508SUPX", text: "MESNIL-ESNARD" },
          ],
        },
      },
      {
        id: ["Lycée Galilée FRANQUEVILLE-SAINT-PIERRE", "Lycée Galilée"],
        autoHide: true,
        name: "Lycée Galilée",
        city: "FRANQUEVILLE-SAINT-PIERRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "332",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE GALILEE" },
            { font: "1407SUPX", text: "FRANQUEVILLE-ST-PIERRE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:333",
    routeIds: ["ASTUCE:333", "ASTUCE-TGR:333"],
    name: "333",
    colors: { background: "#D3D400", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Château Anquetil LA NEUVILLE-CHANT-D'OISEL", "Château Anquetil"],
        autoHide: true,
        name: "Château Anquetil",
        city: "LA NEUVILLE-CHANT-D'OISEL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "333",
          },
          pages: [
            { font: "1508SUPX", text: "CHATEAU ANQUETIL" },
            { font: "1407SUPX", text: "LA NEUVILLE CHANT D'OISEL" },
          ],
        },
      },
      {
        id: ["Collège Abaquesne BOOS", "Collège Abaquesne"],
        autoHide: true,
        name: "Collège Abaquesne",
        city: "BOOS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "333",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE ABAQUESNE" },
            { font: "1508SUPX", text: "BOOS" },
          ],
        },
      },
      {
        id: ["Mairie LA NEUVILLE-CHANT-D'OISEL", "Mairie de La Neuville"],
        autoHide: true,
        alternate: "Mairie de La Neuville-Chant-d'Oisel",
        name: "Mairie",
        city: "LA NEUVILLE-CHANT-D'OISEL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "333",
          },
          pages: [
            { font: "1508SUPX", text: "MAIRIE" },
            { font: "1407SUPX", text: "LA NEUVILLE CHANT D'OISEL" },
          ],
        },
      },
      {
        id: ["La Providence MESNIL-ESNARD", "La Providence"],
        autoHide: true,
        name: "La Providence",
        city: "MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "333",
          },
          pages: [
            { font: "1508SUPX", text: "LA PROVIDENCE" },
            { font: "1508SUPX", text: "MESNIL-ESNARD" },
          ],
        },
      },
      {
        id: ["Lycée Galilée FRANQUEVILLE-SAINT-PIERRE", "Lycée Galilée"],
        autoHide: true,
        name: "Lycée Galilée",
        city: "FRANQUEVILLE-SAINT-PIERRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "333",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE GALILEE" },
            { font: "1407SUPX", text: "FRANQUEVILLE-ST-PIERRE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:334",
    routeIds: ["ASTUCE:334", "ASTUCE-TGR:334"],
    name: "334",
    colors: { background: "#D3D400", text: "#1D1D1B" },
    destinations: [
      {
        id: ["École Mendès-France QUÉVREVILLE-LA-POTERIE", "École Mendès-France"],
        autoHide: true,
        name: "École Mendès-France",
        city: "QUÉVREVILLE-LA-POTERIE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "334",
          },
          pages: [
            { font: "1507SUPX", text: "ECOLE MENDES-FRANCE" },
            { font: "1407SUPX", text: "QUEVREVILLE-LA-POTERIE" },
          ],
        },
      },
      {
        id: ["Lycée Galilée FRANQUEVILLE-SAINT-PIERRE", "Lycée Galilée"],
        autoHide: true,
        name: "Lycée Galilée",
        city: "FRANQUEVILLE-SAINT-PIERRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "334",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE GALILEE" },
            { font: "1407SUPX", text: "FRANQUEVILLE-ST-PIERRE" },
          ],
        },
      },
      {
        id: ["Collège Malot MESNIL-ESNARD", "Collège Malot"],
        autoHide: true,
        name: "Collège Malot",
        city: "MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "334",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE MALOT" },
            { font: "1508SUPX", text: "MESNIL-ESNARD" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:335",
    routeIds: ["ASTUCE:335", "ASTUCE-TGR:335"],
    name: "335",
    colors: { background: "#D3D400", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Allée du Couvent LES AUTHIEUX-SUR-LE-PORT-ST-OUEN", "Allée du Couvent"],
        autoHide: true,
        name: "Allée du Couvent",
        city: "LES AUTHIEUX-SUR-LE-PORT-SAINT-OUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "335",
          },
          pages: [
            { font: "1508SUPX", text: "ALLEE DU COUVENT" },
            [{ text: "LES AUTHIEUX" }, { text: "SUR-LE-PORT-SAINT-OUEN" }],
          ],
        },
      },
      {
        id: ["Lycée Galilée FRANQUEVILLE-SAINT-PIERRE", "Lycée Galilée"],
        autoHide: true,
        name: "Lycée Galilée",
        city: "FRANQUEVILLE-SAINT-PIERRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "335",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE GALILEE" },
            { font: "1407SUPX", text: "FRANQUEVILLE-ST-PIERRE" },
          ],
        },
      },
      {
        id: ["La Providence MESNIL-ESNARD", "La Providence"],
        autoHide: true,
        name: "La Providence",
        city: "MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "335",
          },
          pages: [
            { font: "1508SUPX", text: "LA PROVIDENCE" },
            { font: "1508SUPX", text: "MESNIL-ESNARD" },
          ],
        },
      },
      {
        id: ["Collège Malot MESNIL-ESNARD", "Collège Malot"],
        autoHide: true,
        name: "Collège Malot",
        city: "MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "335",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE MALOT" },
            { font: "1508SUPX", text: "MESNIL-ESNARD" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:336",
    routeIds: ["ASTUCE:336", "ASTUCE-TGR:336"],
    name: "336",
    colors: { background: "#008E5B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mairie BELBEUF", "Mairie de Belbeuf"],
        autoHide: true,
        alternate: "Mairie de Belbeuf",
        name: "Mairie",
        city: "BELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#008E5B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "336",
          },
          pages: [
            { font: "1508SUPX", text: "MAIRIE" },
            { font: "1508SUPX", text: "BELBEUF" },
          ],
        },
      },
      {
        id: ["Collège Verhaeren BONSECOURS", "Collège Verhaeren"],
        autoHide: true,
        name: "Collège Verhaeren",
        city: "BONSECOURS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#008E5B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "336",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE VERHAEREN" },
            { font: "1508SUPX", text: "BONSECOURS" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:340",
    name: "340",
    colors: { background: "#74B95B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Boulingrin ROUEN", "Boulingrin"],
        autoHide: true,
        name: "Boulingrin",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "340",
          },
          pages: [
            { font: "1508SUPX", text: "BOULINGRIN" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Forgettes SAINT-JACQUES-SUR-DARNÉTAL", "Forgettes"],
        autoHide: true,
        name: "Forgettes",
        city: "SAINT-JACQUES-SUR-DARNÉTAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "340",
          },
          pages: [
            { font: "1508SUPX", text: "FORGETTES" },
            { font: "1407SUPX", text: "ST-JACQUES-SUR-DARNETAL" },
          ],
        },
      },
      {
        id: ["Collège Rousseau DARNÉTAL", "Collège Rousseau"],
        autoHide: true,
        name: "Collège Rousseau",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "340",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE ROUSSEAU" },
            { font: "1508SUPX", text: "DARNETAL" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:341",
    routeIds: ["ASTUCE:341", "ASTUCE-TGR:341"],
    name: "341",
    colors: { background: "#0090D7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Rousseau DARNÉTAL", "Collège Rousseau"],
        autoHide: true,
        name: "Collège Rousseau",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "341",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE ROUSSEAU" },
            { font: "1508SUPX", text: "DARNETAL" },
          ],
        },
      },
      {
        id: ["Épinay SAINT-AUBIN-ÉPINAY", "Épinay"],
        autoHide: true,
        name: "Épinay",
        city: "SAINT-AUBIN-ÉPINAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0090D7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "341",
          },
          pages: [
            { font: "1508SUPX", text: "EPINAY" },
            { font: "1508SUPX", text: "SAINT-AUBIN-EPINAY" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:342",
    routeIds: ["ASTUCE:342", "ASTUCE-TGR:342"],
    name: "342",
    colors: { background: "#CA98C5", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Collège Rousseau DARNÉTAL", "Collège Rousseau"],
        autoHide: true,
        name: "Collège Rousseau",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#CA98C5",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "342",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE ROUSSEAU" },
            { font: "1508SUPX", text: "DARNETAL" },
          ],
        },
      },
      {
        id: ["Bois Breton RONCHEROLLES-SUR-LE-VIVIER", "Bois Breton"],
        autoHide: true,
        name: "Bois Breton",
        city: "RONCHEROLLES-SUR-LE-VIVIER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#CA98C5",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "342",
          },
          pages: [{ font: "1508SUPX", text: "BOIS BRETON" }, [{ text: "RONCHEROLLES" }, { text: "SUR-LE-VIVIER" }]],
        },
      },
    ],
  },
  {
    id: "ASTUCE:343",
    routeIds: ["ASTUCE:343", "ASTUCE-TGR:343"],
    name: "343",
    colors: { background: "#D3D400", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Mont Pilon DARNÉTAL", "Mont Pilon"],
        autoHide: true,
        name: "Mont Pilon",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "343",
          },
          pages: [
            { font: "1508SUPX", text: "MONT-PILON" },
            { font: "1508SUPX", text: "DARNETAL" },
          ],
        },
      },
      {
        id: ["Collège Chartier DARNÉTAL", "Collège Chartier"],
        autoHide: true,
        name: "Collège Chartier",
        city: "DARNÉTAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#D3D400",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "343",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE CHARTIER" },
            { font: "1508SUPX", text: "DARNETAL" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:350",
    routeIds: ["ASTUCE:350", "ASTUCE-TGR:350"],
    name: "350",
    colors: { background: "#008E5A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bac de Dieppedalle CANTELEU", "Bac de Dieppedalle"],
        autoHide: true,
        name: "Bac de Dieppedalle",
        city: "CANTELEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#008E5A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "350",
          },
          pages: [
            { font: "1508SUPX", text: "MONT-PILON" },
            { font: "1508SUPX", text: "DARNETAL" },
          ],
        },
      },
      {
        id: ["Place Alexandre SAHURS", "Place Alexandre"],
        autoHide: true,
        name: "Place Alexandre",
        city: "SAHURS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#008E5A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "350",
          },
          pages: [
            { font: "1508SUPX", text: "PLACE ALEXANDRE" },
            { font: "1508SUPX", text: "SAHURS" },
          ],
        },
      },
      {
        id: ["Collège Gounod CANTELEU", "Gounod"],
        autoHide: true,
        name: "Collège Gounod",
        city: "CANTELEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#008E5A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "350",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE GOUNOD" },
            { font: "1508SUPX", text: "DARNETAL" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:351",
    routeIds: ["ASTUCE:351", "ASTUCE-TGR:351"],
    name: "351",
    colors: { background: "#E6007D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["M.I.N. ROUEN", "MIN"],
        autoHide: true,
        name: "Marché d'Intérêt National",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#E6007D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "351",
          },
          pages: [
            { font: "1407SUPX", text: "MARCHE D'INTERET NATIONAL" },
            { font: "1508SUPX", text: "ROUEN" },
          ],
        },
      },
      {
        id: ["Collège Gounod CANTELEU", "Gounod"],
        autoHide: true,
        name: "Collège Gounod",
        city: "CANTELEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#E6007D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "351",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE GOUNOD" },
            { font: "1508SUPX", text: "DARNETAL" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:360",
    routeIds: ["ASTUCE:360", "ASTUCE-TGR:360"],
    name: "360",
    colors: { background: "#A2559D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Jean Zay LE HOULME", "Collège Jean Zay"],
        autoHide: true,
        name: "Collège Jean Zay",
        city: "LE HOULME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "360",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE JEAN ZAY" },
            { font: "1508SUPX", text: "LE HOULME" },
          ],
        },
      },
      {
        id: ["Place du Vivier HOUPPEVILLE", "Place du Vivier"],
        autoHide: true,
        name: "Place du Vivier",
        city: "HOUPPEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "360",
          },
          pages: [
            { font: "1508SUPX", text: "PLACE DU VIVIER" },
            { font: "1508SUPX", text: "HOUPPEVILLE" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:361",
    routeIds: ["ASTUCE:361", "ASTUCE-TGR:361"],
    name: "361",
    colors: { background: "#F8AE4C", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Hameau Saint-Maurice MALAUNAY", "Hameau Saint-Maurice"],
        autoHide: true,
        name: "Hameau Saint-Maurice",
        city: "MALAUNAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "361",
          },
          pages: [
            { font: "1507SUPX", text: "HAMEAU SAINT-MAURICE" },
            { font: "1508SUPX", text: "MALAUNAY" },
          ],
        },
      },
      {
        id: ["ollège Jean Zay LE HOULME", "Collège Jean Zay"],
        autoHide: true,
        name: "Collège Jean Zay",
        city: "Le HOULME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#F8AE4C",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "361",
          },
          pages: [
            { font: "1508SUPX", text: "COLLEGE JEAN ZAY" },
            { font: "1508SUPX", text: "LE HOULME" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:363",
    routeIds: ["ASTUCE:363", "ASTUCE-TGR:363"],
    name: "363",
    colors: { background: "#A2559D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Maromme La Maine", "La Maine"],
        autoHide: true,
        name: "Maromme La Maine",
        city: "MAROMME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "363",
          },
          pages: [
            { font: "1508SUPX", text: "LA MAINE" },
            { font: "1508SUPX", text: "MAROMME" },
          ],
        },
      },
      {
        id: ["Lycée du Cailly DÉVILLE-LES-ROUEN", "Lycée du Cailly"],
        autoHide: true,
        name: "Lycée du Cailly",
        city: "DÉVILLE-LES-ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#A2559D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "363",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE DU CAILLY" },
            { font: "1508SUPX", text: "DEVILLE-LES-ROUEN" },
          ],
        },
      },
    ],
  },
  {
    id: "ASTUCE:364",
    routeIds: ["ASTUCE:364", "ASTUCE-TGR:364"],
    name: "364",
    colors: { background: "#74B95B", text: "#1D1D1B" },
    destinations: [
      {
        id: ["Place du Vivier HOUPPEVILLE", "Place du Vivier"],
        autoHide: true,
        name: "Place du Vivier",
        city: "HOUPPEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "364",
          },
          pages: [
            { font: "1508SUPX", text: "PLACE DU VIVIER" },
            { font: "1508SUPX", text: "HOUPPEVILLE" },
          ],
        },
      },
      {
        id: ["Lycée du Cailly DÉVILLE-LES-ROUEN", "Lycée du Cailly"],
        autoHide: true,
        name: "Lycée du Cailly",
        city: "DÉVILLE-LES-ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#74B95B",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "364",
          },
          pages: [
            { font: "1508SUPX", text: "LYCEE DU CAILLY" },
            { font: "1508SUPX", text: "DEVILLE-LES-ROUEN" },
          ],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "reseau-astuce",
  name: "Réseau Astuce – Métropole Rouen Normandie",
  routes: astuceRoutes,
  color: "#B0105F",
  textColor: "#ffffff",
};

export default network;
