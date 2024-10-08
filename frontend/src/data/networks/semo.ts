import { Network, Route } from "~/@types";

const semoRoutes: Route[] = [
  {
    id: "SEMO:C1",
    noCartridge: true,
    name: "C1",
    colors: { background: "#E85117", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LOUVIERS - Rendez-Vous Bus"],
        name: "Rendez-Vous Bus",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#E85117", textColor: "#FFFFFF", outlineColor: "#000000", text: "C1" },
          pages: [{ text: "LOUVIERS" }, { font: "1510N2E1", text: "RENDEZ-VOUS BUS" }],
        },
      },
      {
        id: ["VAL-DE-REUIL - Pasteur"],
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
        id: ["VAL-DE-REUIL - Gare S.N.C.F."],
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
    noCartridge: true,
    name: "E1",
    colors: { background: "#F5C626", text: "#000000" },
    destinations: [
      {
        id: ["ST-AUBIN-LES-ELBEUF - Hôpital", "SAINT-AUBIN-LES-ELBEUF - Hôpital"],
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
          pages: [{ font: "1508C2E1", spacing: 1, text: "SAINT-AUBIN-LES-ELBEUF" }, { text: "HOPITAL" }],
        },
      },
      {
        id: ["VAL-DE-REUIL - Pasteur"],
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
        id: ["VAL-DE-REUIL - Voie Babeurre"],
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
        id: ["LE-VAL-D'HAZEY - Gaillon-Aubevoye SNCF"],
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
          pages: [{ text: "LE-VAL-D'HAZEY" }, [{ text: "GARE SNCF" }, { text: "GAILLON-AUBEVOYE" }]],
        },
      },
    ],
  },
  {
    id: "SEMO:2",
    noCartridge: true,
    name: "2",
    colors: { background: "#F39207", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LOUVIERS - Lycée Les Fontenelles"],
        name: "Lycée Les Fontenelles",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#F39207", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "LOUVIERS" }, { font: "1508C2E1", text: "LYCEE LES FONTENELLES" }],
        },
      },
      {
        id: ["INCARVILLE - La Source"],
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
        id: ["VAL-DE-REUIL - Gare S.N.C.F."],
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
        id: ["INCARVILLE - Mairie"],
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
        id: ["LOUVIERS - Rendez-Vous Bus"],
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
    id: "SEMO:3",
    noCartridge: true,
    name: "3",
    colors: { background: "#A1DAF8", text: "#000000" },
    destinations: [
      {
        id: ["LOUVIERS - Glacéo"],
        name: "Glacéo",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#A1DAF8",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "3",
          },
          pages: [{ text: "LOUVIERS" }, { text: "GLACEO" }],
        },
      },
      {
        id: ["LOUVIERS - Rendez-Vous Bus"],
        name: "Rendez-Vous Bus",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#A1DAF8",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "3",
          },
          pages: [{ text: "LOUVIERS" }, { font: "1510N2E1", text: "RENDEZ-VOUS BUS" }],
        },
      },
    ],
  },
  {
    id: "SEMO:4",
    noCartridge: true,
    name: "4",
    colors: { background: "#954B97", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VAL-DE-REUIL - Gare S.N.C.F."],
        name: "Gare SNCF",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#954B97", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "GARE SNCF" }],
        },
      },
    ],
  },
  {
    id: "SEMO:5",
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
          pages: [{ text: "PITRES" }, { font: "1508C2E1", spacing: 1, text: "ESPACE DES DEUX-RIVES" }],
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
    noCartridge: true,
    name: "6a",
    colors: { background: "#83BC2A", text: "#000000" },
    destinations: [
      {
        id: ["6a Circulaire Gaillon Sens Horaire", "Aller"],
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
          pages: [[{ text: "CIRCULAIRE DE GAILLON" }, { text: "SENS HORAIRE" }]],
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
            [{ text: "CIRCULAIRE DE GAILLON" }, { text: "SENS HORAIRE" }],
            [{ text: "CIRCULAIRE DE GAILLON" }, { text: "DESSERTE DU MARCHE" }],
          ],
        },
      },
    ],
  },
  {
    id: "SEMO:6b",
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
          pages: [[{ text: "CIRCULAIRE DE GAILLON" }, { text: "SENS ANTI-HORAIRE" }]],
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
            [{ text: "CIRCULAIRE DE GAILLON" }, { text: "SENS ANTI-HORAIRE" }],
            [{ text: "CIRCULAIRE DE GAILLON" }, { text: "DESSERTE DU MARCHE" }],
          ],
        },
      },
    ],
  },
  {
    id: "SEMO:7a",
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
          pages: [[{ text: "CIRCULAIRE DE POSES" }, { text: "SENS HORAIRE" }]],
        },
      },
    ],
  },
  {
    id: "SEMO:7b",
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
          pages: [[{ text: "CIRCULAIRE DE POSES" }, { text: "SENS ANTI-HORAIRE" }]],
        },
      },
    ],
  },
  {
    id: "SEMO:8",
    noCartridge: true,
    name: "8",
    colors: { background: "#114184", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VAL-DE-REUIL - Gare S.N.C.F."],
        name: "Gare SNCF",
        city: "VAL-DE-REUIL",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#114184", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "VAL-DE-REUIL" }, { text: "GARE SNCF" }],
        },
      },
      {
        id: ["CONNELLES - Mairie"],
        autoHide: true,
        name: "Mairie",
        city: "CONNELLES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#114184", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "CONNELLES" }, { text: "MAIRIE" }],
        },
      },
      {
        id: ["ANDE - Le Moulin", " ANDE - Le Moulin"],
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
    noCartridge: true,
    name: "9",
    colors: { background: "#277632", text: "#FFFFFF" },
    destinations: [
      {
        id: ["HEUDEBOUVILLE - Clos Desruets"],
        name: "Clos Desruets",
        city: "HEUDEBOUVILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#277632", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ text: "HEUDEBOUVILLE" }, { text: "CLOS DESRUETS" }],
        },
      },
      {
        id: ["LOUVIERS - Rendez-Vous Bus"],
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
    noCartridge: true,
    name: "10",
    colors: { background: "#EA4E6E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LOUVIERS - Lycée Les Fontenelles"],
        name: "Lycée les Fontenelles",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#EA4E6E", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "LOUVIERS" }, { font: "1508C2E1", text: "LYCEE LES FONTENELLES" }],
        },
      },
      {
        id: ["ACQUIGNY - Les Sablons"],
        name: "Les Sablons",
        city: "ACQUIGNY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#EA4E6E", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "ACQUIGNY" }, { text: "LES SABLONS" }],
        },
      },
    ],
  },
  {
    id: "SEMO:D1",
    noCartridge: true,
    name: "D1",
    colors: { background: "#848484", text: "#FFFFFF" },
    destinations: [
      {
        id: [" LOUVIERS - Lycée Les Fontenelles"],
        name: "Les Fontenelles",
        city: "LOUVIERS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#848484", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ text: "LOUVIERS" }, { font: "1508C2E1", text: "LYCEE LES FONTENELLES" }],
        },
      },
      {
        id: ["VAL-DE-REUIL - Gare S.N.C.F."],
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

const network: Network = {
  slug: "semo",
  name: "Semo – Agglo Seine-Eure",
  routes: semoRoutes,
  color: "#007bff",
  textColor: "#ffffff",
};

export default network;
