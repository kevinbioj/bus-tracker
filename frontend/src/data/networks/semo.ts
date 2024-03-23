import { Route } from "~/@types";

const semoRoutes: Route[] = [
  {
    id: "SEMO:C1",
    mapOnly: true,
    noCartridge: true,
    name: "C1",
    colors: { background: "#E85117", text: "#FFFFFF" },
    destinations: [
      {
        id: ["C1 LOUVIERS - Rendez-Vous Bus"],
        name: "Rendez-Vous Bus",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E85117", textColor: "#FFFFFF", outlineColor: "#000000", text: "C1" },
          pages: [{ text: "LOUVIERS" }, { font: "1510N2E1", text: "RENDEZ-VOUS BUS" }],
        },
      },
      {
        id: ["C1 VAL-DE-REUIL - Voie Babeurre"],
        autoHide: true,
        name: "Voie Babeurre",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E85117", textColor: "#FFFFFF", outlineColor: "#000000", text: "C1" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "VOIE BABEURRE" }],
        },
      },
      {
        id: ["C1 VAL-DE-REUIL - Pasteur"],
        autoHide: true,
        name: "Pasteur",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E85117", textColor: "#FFFFFF", outlineColor: "#000000", text: "C1" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "PASTEUR" }],
        },
      },
      {
        id: ["C1 VAL-DE-REUIL - Gare S.N.C.F."],
        alternate: "Gare SNCF de Val-de-Reuil",
        name: "Gare SNCF",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E85117", textColor: "#FFFFFF", outlineColor: "#000000", text: "C1" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "GARE SNCF" }],
        },
      },
    ],
  },
  {
    id: "SEMO:E1",
    mapOnly: true,
    noCartridge: true,
    name: "E1",
    colors: { background: "#F5C626", text: "#000000" },
    destinations: [
      {
        id: ["E1 ST-AUBIN-LES-ELBEUF - Hôpital", "E1 SAINT-AUBIN-LES-ELBEUF - Hôpital"],
        alternate: "Hôpital de Saint-Aubin-lès-Elbeuf",
        name: "Hôpital",
        city: "SAINT-AUBIN-LÈS-ELBEUF",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#F5C626",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "E1",
          },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "SAINT-AUBIN-LES-ELBEUF" }, { text: "HOPITAL" }],
        },
      },
      {
        id: ["E1 VAL-DE-REUIL - Pasteur"],
        autoHide: true,
        name: "Pasteur",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#F5C626",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "E1",
          },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "PASTEUR" }],
        },
      },
      {
        id: ["E1 VAL-DE-REUIL - Voie Babeurre"],
        autoHide: true,
        name: "Voie Babeurre",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#F5C626",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "E1",
          },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "VOIE BABEURRE" }],
        },
      },
      {
        id: ["E1 LE-VAL-D'HAZEY - Gaillon-Abvye SNCF"],
        name: "Gare de Gaillon-Aubevoye",
        city: "LE-VAL-D'HAZEY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#F5C626",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "E1",
          },
          pages: [{ text: "LE-VAL-D'HAZEY" }, { text: ["GARE SNCF", "GAILLON-AUBEVOYE"] }],
        },
      },
    ],
  },
  {
    id: "SEMO:2",
    mapOnly: true,
    noCartridge: true,
    name: "2",
    colors: { background: "#F39207", text: "#FFFFFF" },
    destinations: [
      {
        id: ["2 LOUVIERS - Lycée Les Fontenelles"],
        name: "Lycée Les Fontenelles",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F39207", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "LOUVIERS" }, { font: "1508C2E1", text: "LYCEE LES FONTENELLES" }],
        },
      },
      {
        id: ["2 INCARVILLE - La Source"],
        autoHide: true,
        name: "La Source",
        city: "INCARVILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F39207", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "INCARVILLE" }, { text: "LA SOURCE" }],
        },
      },
      {
        id: ["2 VAL-DE-REUIL - Gare S.N.C.F."],
        autoHide: true,
        alternate: "Gare SNCF de Val-de-Reuil",
        name: "Gare SNCF",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F39207", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "GARE SNCF" }],
        },
      },
      {
        id: ["2 INCARVILLE - Mairie"],
        autoHide: true,
        alternate: "Mairie d'Incarville",
        name: "Mairie",
        city: "INCARVILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F39207", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "INCARVILLE" }, { text: "MAIRIE" }],
        },
      },
      {
        id: ["2 LOUVIERS - Rendez-Vous Bus"],
        name: "Rendez-Vous Bus",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F39207", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "LOUVIERS" }, { font: "1510N2E1", text: "RENDEZ-VOUS BUS" }],
        },
      },
    ],
  },
  {
    id: "SEMO:3a",
    mapOnly: true,
    noCartridge: true,
    name: "3a",
    colors: { background: "#A1DAF8", text: "#000000" },
    destinations: [
      {
        id: ["3a Circulaire Louviers Sens Horaire"],
        name: "Sens horaire",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#A1DAF8",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "3",
          },
          pages: [{ text: ["CIRCULAIRE DE LOUVIERS", "SENS HORAIRE"] }],
        },
      },
    ],
  },
  {
    id: "SEMO:3b",
    mapOnly: true,
    noCartridge: true,
    name: "3b",
    colors: { background: "#A1DAF8", text: "#000000" },
    destinations: [
      {
        id: ["3b Circulaire Louviers Sens Anti-Horaire"],
        name: "Sens anti-horaire",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#A1DAF8",
            textColor: "#000000",
            text: "3",
            outlineColor: "#FFFFFF",
          },
          pages: [{ text: ["CIRCULAIRE DE LOUVIERS", "SENS ANTI-HORAIRE"] }],
        },
      },
    ],
  },
  {
    id: "SEMO:4a",
    mapOnly: true,
    noCartridge: true,
    name: "4a",
    colors: { background: "#954B97", text: "#FFFFFF" },
    destinations: [
      {
        id: ["4a Circulaire Val-de-Reuil Sens Horaire"],
        name: "Sens horaire",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#954B97", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: ["CIRCULAIRE VAL-DE-REUIL", "SENS HORAIRE"] }],
        },
      },
    ],
  },
  {
    id: "SEMO:4b",
    mapOnly: true,
    noCartridge: true,
    name: "4b",
    colors: { background: "#954B97", text: "#FFFFFF" },
    destinations: [
      {
        id: ["4a Circulaire Val-de-Reuil Sens Horaire"],
        name: "Sens anti-horaire",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#954B97", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: ["CIRCULAIRE VAL-DE-REUIL", "SENS ANTI-HORAIRE"] }],
        },
      },
    ],
  },
  {
    id: "SEMO:5",
    mapOnly: true,
    noCartridge: true,
    name: "5",
    colors: { background: "#63BBE4", text: "#FFFFFF" },
    destinations: [
      {
        id: ["5 VAL-DE-REUIL - Gare S.N.C.F."],
        alternate: "Gare SNCF de Val-de-Reuil",
        name: "Gare SNCF",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#63BBE4", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "GARE SNCF" }],
        },
      },
      {
        id: ["5 PONT-DE-L'ARCHE - Aristide BRIAND"],
        autoHide: true,
        name: "Aristide Briand",
        city: "PONT-DE-L'ARCHE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#63BBE4", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [
            { font: "1510N2E1", text: "PONT-DE-L'ARCHE" },
            { font: "1510N2E1", text: "ARISTIDE BRIAND" },
          ],
        },
      },
      {
        id: ["5 PITRES - Espace des Deux-Rives"],
        autoHide: true,
        name: "Espace des Deux-Rives",
        city: "PITRES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#63BBE4", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "PITRES" }, { font: "1508C2E1", textSpacing: 1, text: "ESPACE DES DEUX-RIVES" }],
        },
      },
      {
        id: ["5 PONT-DE-L'ARCHE - Mairie"],
        alternate: "Mairie de Pont-de-l'Arche",
        name: "Mairie",
        city: "PONT-DE-L'ARCHE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#63BBE4", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ font: "1510N2E1", text: "PONT-DE-L'ARCHE" }, { text: "MAIRIE" }],
        },
      },
    ],
  },
  {
    id: "SEMO:6a",
    mapOnly: true,
    noCartridge: true,
    name: "6a",
    colors: { background: "#83BC2A", text: "#000000" },
    destinations: [
      {
        id: ["6a Circulaire Gaillon Sens Horaire"],
        name: "Sens horaire",
        city: "GAILLON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#83BC2A",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "6",
          },
          pages: [{ text: ["CIRCULAIRE DE GAILLON", "SENS HORAIRE"] }],
        },
      },
      {
        id: ["6aCirculaire Gaillon Sens Horaire Marché"],
        autoHide: true,
        name: "Sens horaire (dessert le marché)",
        city: "GAILLON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#83BC2A",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "6",
          },
          pages: [
            { text: ["CIRCULAIRE DE GAILLON", "SENS HORAIRE"] },
            { text: ["CIRCULAIRE DE GAILLON", "DESSERTE DU MARCHE"] },
          ],
        },
      },
    ],
  },
  {
    id: "SEMO:6b",
    mapOnly: true,
    noCartridge: true,
    name: "6b",
    colors: { background: "#83BC2A", text: "#000000" },
    destinations: [
      {
        id: ["6b Circulaire Gaillon Sens Anti-Horaire"],
        name: "Sens anti-horaire",
        city: "GAILLON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#83BC2A",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "6",
          },
          pages: [{ text: ["CIRCULAIRE DE GAILLON", "SENS ANTI-HORAIRE"] }],
        },
      },
      {
        id: ["6bCirculaire Gaillon Sens Anti-Horaire M"],
        autoHide: true,
        name: "Sens anti-horaire (dessert le marché)",
        city: "GAILLON",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#83BC2A",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "6",
          },
          pages: [
            { text: ["CIRCULAIRE DE GAILLON", "SENS ANTI-HORAIRE"] },
            { text: ["CIRCULAIRE DE GAILLON", "DESSERTE DU MARCHE"] },
          ],
        },
      },
    ],
  },
  {
    id: "SEMO:7a",
    mapOnly: true,
    noCartridge: true,
    name: "7a",
    colors: { background: "#A76F23", text: "#FFFFFF" },
    destinations: [
      {
        id: ["7a Circulaire Poses Sens Horaire"],
        name: "Sens horaire",
        city: "POSES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#A76F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: ["CIRCULAIRE DE POSES", "SENS HORAIRE"] }],
        },
      },
    ],
  },
  {
    id: "SEMO:7b",
    mapOnly: true,
    noCartridge: true,
    name: "7b",
    colors: { background: "#A76F23", text: "#FFFFFF" },
    destinations: [
      {
        id: ["7b Circulaire Poses Sens Anti-Horaire"],
        name: "Sens anti-horaire",
        city: "POSES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#A76F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: ["CIRCULAIRE DE POSES", "SENS ANTI-HORAIRE"] }],
        },
      },
    ],
  },
  {
    id: "SEMO:8",
    mapOnly: true,
    noCartridge: true,
    name: "8",
    colors: { background: "#114184", text: "#FFFFFF" },
    destinations: [
      {
        id: ["8 VAL-DE-REUIL - Gare S.N.C.F."],
        name: "Gare SNCF",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#114184", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "GARE SNCF" }],
        },
      },
      {
        id: ["8 ANDE - Le Moulin"],
        name: "Le Moulin",
        city: "ANDE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#114184", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "ANDE" }, { text: "LE MOULIN" }],
        },
      },
    ],
  },
  {
    id: "SEMO:9",
    mapOnly: true,
    noCartridge: true,
    name: "9",
    colors: { background: "#277632", text: "#FFFFFF" },
    destinations: [
      {
        id: ["9 HEUDEBOUVILLE - Clos Desruets"],
        name: "Clos Desruets",
        city: "HEUDEBOUVILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#277632", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ text: "HEUDEBOUVILLE" }, { text: "CLOS DESRUETS" }],
        },
      },
      {
        id: ["9 LOUVIERS - Rendez-Vous Bus"],
        name: "Rendez-Vous Bus",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#277632", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ text: "LOUVIERS" }, { font: "1510N2E1", text: "RENDEZ-VOUS BUS" }],
        },
      },
    ],
  },
  {
    id: "SEMO:10",
    mapOnly: true,
    noCartridge: true,
    name: "10",
    colors: { background: "#EA4E6E", text: "#" },
    destinations: [
      {
        id: ["10 LE-VAL-D'HAZEY - Gaillon-Abvye SNCF"],
        name: "Gare SNCF de Gaillon-Aubevoye",
        city: "LE-VAL-D'HAZEY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#EA4E6E", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "LE-VAL-D'HAZEY" }, { text: ["GARE SNCF", "GAILLON-AUBEVOYE"] }],
        },
      },
      {
        id: ["10 COURCELLES S./SEINE - Coiffeur"],
        name: "Coiffeur",
        city: "COURCELLES-SUR-SEINE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#EA4E6E", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ font: "1508C2E1", text: "COURCELLES-SUR-SEINE" }, { text: "COIFFEUR" }],
        },
      },
    ],
  },
  {
    id: "SEMO:D1",
    mapOnly: true,
    noCartridge: true,
    name: "D1",
    colors: { background: "#848484", text: "#FFFFFF" },
    destinations: [
      {
        id: ["D1 LOUVIERS - Les Fontenelles"],
        name: "Les Fontenelles",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#848484", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ text: "LOUVIERS" }, { text: "LES FONTENELLES" }],
        },
      },
      {
        id: ["D1 VAL-DE-REUIL - Gare S.N.C.F."],
        alternate: "Gare SNCF de Val-de-Reuil",
        name: "Gare SNCF",
        city: "VAL-DE-RUEIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#848484", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "GARE SNCF" }],
        },
      },
    ],
  },
];

export default semoRoutes;
