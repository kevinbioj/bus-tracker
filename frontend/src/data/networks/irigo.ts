import { Network, Route } from "~/@types";

const irigoRoutes: Route[] = [
  {
    id: "NUIT",
    name: "N",
    colors: { background: "#241D4C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Retour"],
        autoHide: true,
        name: "Mail Circulaire",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#241D4C", textColor: "#FFFFFF", outlineColor: "#000000", text: "N" },
          pages: [{ text: "IRIGO NUIT" }],
        },
      },
    ],
  },
  {
    id: "NavM",
    name: "M",
    colors: { background: "#DEDC03", text: "#484F54" },
    destinations: [
      {
        id: ["Navette Marché Monplaisir"],
        autoHide: true,
        name: "Navette Marché Monplaisir",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#DEDC03", textColor: "#484F54", outlineColor: "#FFFFFF", text: "M" },
          pages: [[{ text: "NAVETTE" }, { text: "MARCHE MONPLAISIR" }]],
        },
      },
    ],
  },
  {
    id: "Tbus",
    routeIds: ["Tbus", "Navette Tram Avrillé"],
    name: "Tbus",
    colors: { background: "#E6007E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["AVRILLE Ardenne <> Acacias <> Ardenne"],
        autoHide: true,
        name: "Ardenne <> Acacias",
        girouette: {
          routeNumber: {
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508C2E1",
            text: "Tbus",
          },
          pages: [[{ text: "REMPLACEMENT LIGNE A" }, { text: "Ardenne - Acacias - Ardenne" }]],
        },
      },
    ],
  },
  {
    id: "A",
    name: "A",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS ROSERAIE", "ROSERAIE"],
        name: "Roseraie",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "ROSERAIE" }],
        },
      },
      {
        id: ["VERNEAU"],
        autoHide: true,
        name: "Verneau",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "VERNEAU" }],
        },
      },
      {
        id: ["AVRILLE ACACIAS"],
        autoHide: true,
        name: "Acacias",
        city: "AVRILLÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "ACACIAS" }],
        },
      },
      {
        id: ["AVRILLE ARDENNE"],
        name: "Ardenne",
        city: "AVRILLÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "ARDENNE" }],
        },
      },
    ],
  },
  {
    id: "B",
    name: "B",
    colors: { background: "#00569D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MONPLAISIR"],
        name: "Monplaisir",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#00569D", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "MONPLAISIR" }],
        },
      },
      {
        id: ["SAINT SERGE"],
        autoHide: true,
        name: "Saint-Serge Université",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#00569D", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1508C2E1", text: "ST-SERGE UNIVERSITE" }],
        },
      },
      {
        id: ["MOLIERE"],
        autoHide: true,
        name: "Molière",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#00569D", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "MOLIERE" }],
        },
      },
      {
        id: ["BELLE BEILLE CAMPUS"],
        name: "Belle-Beille Campus",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#00569D", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1508C2E1", text: "BELLE-BEILLE CAMPUS" }],
        },
      },
    ],
  },
  {
    id: "C",
    name: "C",
    colors: { background: "#379E31", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ROSERAIE"],
        name: "Monplaisir",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#379E31", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ text: "ROSERAIE" }],
        },
      },
      {
        id: ["BELLE BEILLE CAMPUS"],
        name: "Belle-Beille Campus",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#379E31", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", text: "BELLE-BEILLE CAMPUS" }],
        },
      },
    ],
  },
  {
    id: "01",
    name: "1",
    colors: { background: "#008E8C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["TRÉLAZÉ Quantinière"],
        name: "Quantinière",
        city: "TRÉLAZÉ",
        girouette: {
          routeNumber: { backgroundColor: "#008E8C", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "QUANTINIERE" }],
        },
      },
      {
        id: ["ANGERS Lorraine"],
        name: "Lorraine",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#008E8C", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "LORRAINE" }],
        },
      },
    ],
  },
  {
    id: "02",
    name: "2",
    colors: { background: "#9B1670", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BEAUCOUZÉ Haute Roche"],
        name: "Haute Roche",
        city: "BEAUCOUZÉ",
        girouette: {
          routeNumber: { backgroundColor: "#9B1670", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "HAUTE ROCHE" }],
        },
      },
      {
        id: ["ANGERS Foch-Maison Bleue"],
        autoHide: true,
        name: "Foch-Maison Bleue",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#9B1670", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ font: "1508C2E1", text: "FOCH-MAISON BLEUE" }],
        },
      },
      {
        id: ["ST-BARTHÉLEMY Venaiserie"],
        name: "Venaiserie",
        city: "SAINT-BARTHÉLEMY-D'ANJOU",
        girouette: {
          routeNumber: { backgroundColor: "#9B1670", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "VENAISERIE" }],
        },
      },
    ],
  },
  {
    id: "03",
    name: "3",
    colors: { background: "#F18700", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MÛRS-ÉRIGNÉ Soland"],
        name: "Soland",
        city: "MÛRS-ÉRIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#F18700", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "SOLAND" }],
        },
      },
      {
        id: ["ANGERS Allard"],
        autoHide: true,
        name: "Allard",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#F18700", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "ALLARD" }],
        },
      },
      {
        id: ["ANGERS André Leroy"],
        autoHide: true,
        name: "André Leroy",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#F18700", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "ANDRE LEROY" }],
        },
      },
      {
        id: ["ANGERS Foch-Maison Bleue"],
        autoHide: true,
        name: "Foch-Maison Bleue",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#F18700", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ font: "1508C2E1", text: "FOCH-MAISON BLEUE" }],
        },
      },
      {
        id: ["ANGERS Lorraine"],
        autoHide: true,
        name: "Lorraine",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#F18700", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "LORRAINE" }],
        },
      },
      {
        id: ["AVRILLÉ Adézière"],
        name: "Adézière",
        city: "AVRILLÉ",
        girouette: {
          routeNumber: { backgroundColor: "#F18700", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "ADEZIERE" }],
        },
      },
    ],
  },
  {
    id: "04",
    name: "4",
    colors: { background: "#009EE1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BEAUCOUZÉ L'Hoirie", "BEAUCOUZÉ L'Hoirie via ZI"],
        name: "L'Hoirie",
        city: "BEAUCOUZÉ",
        girouette: {
          routeNumber: { backgroundColor: "#009EE1", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "L'HOIRIE" }],
        },
      },
      {
        id: ["ANGERS Foch-Maison Bleue"],
        autoHide: true,
        name: "Foch-Maison Bleue",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#009EE1", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ font: "1508C2E1", text: "FOCH-MAISON BLEUE" }],
        },
      },
      {
        id: ["ANGERS Lorraine"],
        autoHide: true,
        name: "Lorraine",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#009EE1", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "LORRAINE" }],
        },
      },
      {
        id: ["ANGERS Parc Expo"],
        name: "Parc des Expositions",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#009EE1", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "PARC EXPO" }],
        },
      },
    ],
  },
  {
    id: "05",
    name: "5",
    colors: { background: "#FFDD00", text: "#000000" },
    destinations: [
      {
        id: ["Sens A : 5A Aquavita"],
        name: "Sens A - Aquavita",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#000000", outlineColor: "#FFFFFF", text: "5A" },
          pages: [{ text: "AQUAVITA" }],
        },
      },
      {
        id: ["Sens B : 5B Aquavita"],
        name: "Sens B - Aquavita",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#000000", outlineColor: "#FFFFFF", text: "5B" },
          pages: [{ text: "AQUAVITA" }],
        },
      },
    ],
  },
  {
    id: "06",
    name: "6",
    colors: { background: "#291F6C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS CHU-Hôpital"],
        name: "CHU-Hôpital",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#291F6C", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "CHU-HOPITAL" }],
        },
      },
      {
        id: ["BOUCHEMAINE Chantourteau"],
        name: "Chantourteau",
        city: "BOUCHEMAINE",
        girouette: {
          routeNumber: { backgroundColor: "#291F6C", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "CHANTOURTEAU" }],
        },
      },
    ],
  },
  {
    id: "07",
    name: "7",
    colors: { background: "#AE0F0A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MONTREUIL-JUIGNÉ Béné", "MONTREUIL-JUIGNÉ Béné via ZI"],
        name: "Béné",
        city: "MONTREUIL-JUIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#AE0F0A", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "BENE" }],
        },
      },
      {
        id: ["AVRILLÉ Ardenne"],
        autoHide: true,
        name: "Ardenne",
        city: "AVRILLÉ",
        girouette: {
          routeNumber: { backgroundColor: "#AE0F0A", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "ARDENNE" }],
        },
      },
      {
        id: ["ST-SYLVAIN St-Aubin La Salle", "ST-SYLVAIN St-Aubin La Salle via ZI"],
        name: "Saint-Aubin La Salle",
        city: "SAINT-SYLVAIN-D'ANJOU",
        girouette: {
          routeNumber: { backgroundColor: "#AE0F0A", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "ST-AUBIN LA SALLE" }],
        },
      },
    ],
  },
  {
    id: "08",
    name: "8",
    colors: { background: "#E50076", text: "#FFFFFF" },
    destinations: [
      {
        id: ["STE-GEMMES Roche Morna"],
        name: "Roche Morna",
        city: "SAINTE-GEMMES",
        girouette: {
          routeNumber: { backgroundColor: "#E50076", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "ROCHE MORNA" }],
        },
      },
      {
        id: ["ANGERS Lorraine"],
        autoHide: true,
        name: "Lorraine",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#E50076", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "LORRAINE" }],
        },
      },
      {
        id: ["SORGES"],
        autoHide: true,
        name: "Sorges",
        city: "LES PONTS-DE-CÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E50076", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "SORGES" }],
        },
      },
      {
        id: ["LES PONTS-DE-CÉ Floriloire"],
        autoHide: true,
        name: "Floriloire",
        city: "LES PONTS-DE-CÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E50076", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "FLORILOIRE" }],
        },
      },
      {
        id: ["LES PONTS-DE-CÉ Moulin-Marcille"],
        name: "Moulin-Marcille",
        city: "LES PONTS-DE-CÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E50076", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ font: "1510N2E1", text: "MOULIN-MARCILLE" }],
        },
      },
    ],
  },
  {
    id: "09",
    name: "9",
    colors: { background: "#E94F35", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ÉCOUFLANT Éventard", "ÉCOUFLANT Éventard via Hippodrome", "ÉCOUFLANT Éventard via ZI"],
        name: "Éventard",
        city: "ÉCOUFLANT",
        girouette: {
          routeNumber: { backgroundColor: "#E94F35", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ text: "EVENTARD" }],
        },
      },
      {
        id: ["LES PONTS-DE-CÉ Moulin Marcille"],
        name: "Moulin-Marcille",
        city: "LES PONTS-DE-CÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E94F35", textColor: "#FFFFFF", outlineColor: "#000000", text: "9" },
          pages: [{ font: "1510N2E1", text: "MOULIN-MARCILLE" }],
        },
      },
    ],
  },
  {
    id: "10",
    name: "10",
    colors: { background: "#7263A9", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ST-SYLVAIN Chêne Vert"],
        name: "Chêne Vert",
        city: "SAINT-SYLVAIN-D'ANJOU",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "CHENE VERT" }],
        },
      },
      {
        id: ["PROVINS"],
        autoHide: true,
        name: "Provins",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "PROVINS" }],
        },
      },
      {
        id: ["LES PONTS-DE-CÉ Sorges"],
        name: "Sorges",
        city: "LES PONTS-DE-CÉ",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "SORGES" }],
        },
      },
      {
        id: ["TRÉLAZÉ St-Lézin"],
        name: "Saint-Lézin",
        city: "TRÉLAZÉ",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "SAINT-LEZIN" }],
        },
      },
      {
        id: ["TRÉLAZÉ Gare via ZI", "TRÉLAZÉ Gare via St Lézin et ZI"],
        autoHide: true,
        name: "Gare",
        city: "TRÉLAZÉ",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "TRELAZE GARE" }],
        },
      },
    ],
  },
  {
    id: "11",
    name: "11",
    colors: { background: "#7B5C4D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Parc Expo"],
        name: "Parc Expo",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#7B5C4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "PARC EXPO" }],
        },
      },
      {
        id: ["ANGERS Lorraine"],
        name: "Lorraine",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#7B5C4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "LORRAINE" }],
        },
      },
    ],
  },
  {
    id: "12",
    name: "12",
    colors: { background: "#127C29", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Monplaisir"],
        name: "Monplaisir",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#127C29", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "MONPLAISIR" }],
        },
      },
      {
        id: ["ÉCOUFLANT Veillère"],
        name: "Veillère",
        city: "ÉCOUFLANT",
        girouette: {
          routeNumber: { backgroundColor: "#127C29", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "VEILLERE" }],
        },
      },
    ],
  },
  {
    id: "20",
    name: "E20",
    colors: { background: "#E7343F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gares Papin"],
        name: "Gares Papin",
        city: "ANGERS",
        girouette: {
          routeNumber: {
            backgroundColor: "#E7343F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E20",
          },
          pages: [{ text: "GARES PAPIN" }],
        },
      },
      {
        id: ["BEAUCOUZÉ L'Atoll"],
        name: "L'Atoll",
        city: "BEAUCOUZÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#E7343F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E20",
          },
          pages: [{ text: "L'ATOLL" }],
        },
      },
    ],
  },
  {
    id: "21",
    name: "E21",
    colors: { background: "#95C11F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gares Papin"],
        name: "Gares Papin",
        city: "ANGERS",
        girouette: {
          routeNumber: {
            backgroundColor: "#95C11F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E21",
          },
          pages: [{ text: "GARES PAPIN" }],
        },
      },
      {
        id: ["MONTREUIL-JUIGNÉ Domaine du Val"],
        name: "Domaine du Val",
        city: "MONTREUIL-JUIGNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#95C11F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E21",
          },
          pages: [{ font: "1510N2E1", text: "DOMAINE DU VAL" }],
        },
      },
    ],
  },
  {
    id: "22",
    name: "E22",
    colors: { background: "#C94191", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gares Papin"],
        name: "Gares Papin",
        city: "ANGERS",
        girouette: {
          routeNumber: {
            backgroundColor: "#C94191",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E22",
          },
          pages: [{ text: "GARES PAPIN" }],
        },
      },
      {
        id: ["BOUCHEMAINE Chantourteau"],
        name: "Chantourteau",
        city: "BOUCHEMAINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#C94191",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E22",
          },
          pages: [{ text: "CHANTOURTEAU" }],
        },
      },
    ],
  },
  {
    id: "23",
    name: "E23",
    colors: { background: "#F08046", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "ANGERS",
        girouette: {
          routeNumber: {
            backgroundColor: "#F08046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E23",
          },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["MÛRS-ÉRIGNÉ Guicheteau"],
        name: "Guicheteau",
        city: "MÛRS-ÉRIGNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#F08046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E23",
          },
          pages: [{ text: "GUICHETEAU" }],
        },
      },
    ],
  },
  {
    id: "24",
    name: "E24",
    colors: { background: "#00A7A7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "ANGERS",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A7A7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E24",
          },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["CORNÉ Royale"],
        name: "Royale",
        city: "CORNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#00A7A7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "E24",
          },
          pages: [{ text: "ROYALE" }],
        },
      },
    ],
  },
  {
    id: "30",
    name: "30",
    colors: { background: "#E6007E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFFFFF", outlineColor: "#000000", text: "30" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["ST-SYLVAIN Pôle 49"],
        autoHide: true,
        name: "Pôle 49",
        city: "SAINT-SYLVAIN-D'ANJOU",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFFFFF", outlineColor: "#000000", text: "30" },
          pages: [{ text: "POLE 49" }],
        },
      },
      {
        id: ["SARRIGNÉ Les Plantes"],
        autoHide: true,
        name: "Les Plantes",
        city: "SARRIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFFFFF", outlineColor: "#000000", text: "30" },
          pages: [{ text: "LES PLANTES" }],
        },
      },
      {
        id: ["BAUNÉ Centre"],
        autoHide: true,
        name: "Centre",
        city: "BAUNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFFFFF", outlineColor: "#000000", text: "30" },
          pages: [{ text: "BEAUNE CENTRE" }],
        },
      },
      {
        id: ["BAUNÉ Louise Michel"],
        name: "Louise Michel",
        city: "BAUNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E6007E", textColor: "#FFFFFF", outlineColor: "#000000", text: "30" },
          pages: [{ text: "LOUISE MICHEL" }],
        },
      },
    ],
  },
  {
    id: "31",
    name: "31",
    colors: { background: "#008530", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#008530", textColor: "#FFFFFF", outlineColor: "#000000", text: "31" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["BRIOLLAY Vérigné"],
        autoHide: true,
        name: "Vérigné",
        city: "BRIOLLAY",
        girouette: {
          routeNumber: { backgroundColor: "#008530", textColor: "#FFFFFF", outlineColor: "#000000", text: "31" },
          pages: [{ text: "VERIGNE" }],
        },
      },
      {
        id: ["SOUCELLES Stade"],
        name: "Stade",
        city: "SOUCELLES",
        girouette: {
          routeNumber: { backgroundColor: "#008530", textColor: "#FFFFFF", outlineColor: "#000000", text: "31" },
          pages: [{ font: "1510N2E1", text: "SOUCELLES STADE" }],
        },
      },
    ],
  },
  {
    id: "32",
    name: "32",
    colors: { background: "#0063AF", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#0063AF", textColor: "#FFFFFF", outlineColor: "#000000", text: "32" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["SOUCELLES L'Hermitage"],
        name: "L'Hermitage",
        city: "SOUCELLES",
        girouette: {
          routeNumber: { backgroundColor: "#0063AF", textColor: "#FFFFFF", outlineColor: "#000000", text: "32" },
          pages: [{ text: "L'HERMITAGE" }],
        },
      },
    ],
  },
  {
    id: "33",
    name: "33",
    colors: { background: "#951B81", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Le Quai"],
        name: "Le Quai",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#951B81", textColor: "#FFFFFF", outlineColor: "#000000", text: "33" },
          pages: [{ text: "LE QUAI" }],
        },
      },
      {
        id: ["FENEU ZA Feneu"],
        autoHide: true,
        name: "ZA Feneu",
        city: "FENEU",
        girouette: {
          routeNumber: { backgroundColor: "#951B81", textColor: "#FFFFFF", outlineColor: "#000000", text: "33" },
          pages: [{ text: "ZA FENEU" }],
        },
      },
      {
        id: ["FENEU Croix de Beauvais"],
        name: "Croix de Beauvais",
        city: "FENEU",
        girouette: {
          routeNumber: { backgroundColor: "#951B81", textColor: "#FFFFFF", outlineColor: "#000000", text: "33" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "CROIX DE BEAUVAIS" }],
        },
      },
    ],
  },
  {
    id: "34",
    name: "34",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Le Quai"],
        name: "Le Quai",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "34" },
          pages: [{ text: "LE QUAI" }],
        },
      },
      {
        id: ["ANGERS Terra Botanica"],
        autoHide: true,
        name: "Terra Botanica",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "34" },
          pages: [{ font: "1510N2E1", text: "TERRA BOTANICA" }],
        },
      },
      {
        id: ["PRUILLÉ Bois des Dames"],
        name: "Bois des Dames",
        city: "PRUILLÉ",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "34" },
          pages: [{ text: "BOIS DES DAMES" }],
        },
      },
    ],
  },
  {
    id: "35",
    name: "35",
    colors: { background: "#00A6E2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Le Quai"],
        name: "Le Quai",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#00A6E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "35" },
          pages: [{ text: "LE QUAI" }],
        },
      },
      {
        id: ["ST-LÉGER La Coudre"],
        name: "La Coudre",
        city: "SAINT-LÉGER-DES-BOIS",
        girouette: {
          routeNumber: { backgroundColor: "#00A6E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "35" },
          pages: [{ text: "LA COUDRE" }],
        },
      },
      {
        id: ["ST-LÉGER Les Essarts"],
        autoHide: true,
        name: "Les Essarts",
        city: "SAINT-LÉGER-DES-BOIS",
        girouette: {
          routeNumber: { backgroundColor: "#00A6E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "35" },
          pages: [{ text: "LES ESSARTS" }],
        },
      },
    ],
  },
  {
    id: "36",
    name: "36",
    colors: { background: "#D2091E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Le Quai"],
        name: "Le Quai",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#D2091E", textColor: "#FFFFFF", outlineColor: "#000000", text: "36" },
          pages: [{ text: "LE QUAI" }],
        },
      },
      {
        id: ["ST-MARTIN Beau Soleil"],
        name: "Beau Soleil",
        city: "SAINT-MARTIN-DU-FOUILLOUX",
        girouette: {
          routeNumber: { backgroundColor: "#D2091E", textColor: "#FFFFFF", outlineColor: "#000000", text: "36" },
          pages: [{ text: "BEAU SOLEIL" }],
        },
      },
    ],
  },
  {
    id: "37",
    name: "37",
    colors: { background: "#9CA61F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Le Quai"],
        name: "Le Quai",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#9CA61F", textColor: "#FFFFFF", outlineColor: "#000000", text: "37" },
          pages: [{ text: "LE QUAI" }],
        },
      },
      {
        id: ["ECUILLÉ Mairie"],
        name: "Mairie",
        city: "ECUILLÉ",
        girouette: {
          routeNumber: { backgroundColor: "#9CA61F", textColor: "#FFFFFF", outlineColor: "#000000", text: "37" },
          pages: [{ font: "1510N2E1", text: "ECUILLE MAIRIE" }],
        },
      },
    ],
  },
  {
    id: "38",
    name: "38",
    colors: { background: "#008E8C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Le Quai"],
        name: "Le Quai",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#008E8C", textColor: "#FFFFFF", outlineColor: "#000000", text: "38" },
          pages: [{ text: "LE QUAI" }],
        },
      },
      {
        id: ["ST-CLÉMENT Moulin"],
        name: "Moulin",
        city: "SAINT-CLÉMENT",
        girouette: {
          routeNumber: { backgroundColor: "#008E8C", textColor: "#FFFFFF", outlineColor: "#000000", text: "38" },
          pages: [{ text: "MOULIN" }],
        },
      },
    ],
  },
  {
    id: "39",
    name: "39",
    colors: { background: "#E84E0F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gare routière Sémard"],
        name: "Gare Routière Sémard",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#E84E0F", textColor: "#FFFFFF", outlineColor: "#000000", text: "39" },
          pages: [{ font: "1508C2E1", text: "GARE ROUTIERE SEMARD" }],
        },
      },
      {
        id: ["BÉHUARD Bourg"],
        name: "Bourg",
        city: "BÉHUARD",
        girouette: {
          routeNumber: { backgroundColor: "#E84E0F", textColor: "#FFFFFF", outlineColor: "#000000", text: "39" },
          pages: [{ text: "BEHUARD BOURG" }],
        },
      },
    ],
  },
  {
    id: "40",
    name: "40",
    colors: { background: "#7263A9", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gare routière Esplanade"],
        name: "Gare Routière Esplanade",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "40" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "GARE ROUTIERE ESPLANADE" }],
        },
      },
      {
        id: ["CORNÉ Royale"],
        name: "Royale",
        city: "CORNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "40" },
          pages: [{ text: "ROYALE" }],
        },
      },
    ],
  },
  {
    id: "41",
    name: "41",
    colors: { background: "#DEA600", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gare routière Esplanade"],
        name: "Gare Routière Esplanade",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#DEA600", textColor: "#FFFFFF", outlineColor: "#000000", text: "41" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "GARE ROUTIERE ESPLANADE" }],
        },
      },
      {
        id: ["SOULAINES Haute-Marzelle"],
        name: "Haute-Marzelle",
        city: "SOULAINES",
        girouette: {
          routeNumber: { backgroundColor: "#DEA600", textColor: "#FFFFFF", outlineColor: "#000000", text: "41" },
          pages: [{ font: "1510N2E1", text: "HAUTE-MARZELLE" }],
        },
      },
    ],
  },
  {
    id: "42",
    name: "42",
    colors: { background: "#291F6C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gare routière Esplanade"],
        name: "Gare Routière Esplanade",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#291F6C", textColor: "#FFFFFF", outlineColor: "#000000", text: "42" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "GARE ROUTIERE ESPLANADE" }],
        },
      },
      {
        id: ["ST-MATHURIN Mairie"],
        autoHide: true,
        name: "Mairie",
        city: "SAINT-MATHURIN",
        girouette: {
          routeNumber: { backgroundColor: "#291F6C", textColor: "#FFFFFF", outlineColor: "#000000", text: "42" },
          pages: [{ font: "1508C2E1", text: "ST-MATHURIN MAIRIE" }],
        },
      },
      {
        id: ["ST-MATHURIN Grand Chemin"],
        name: "Grand Chemin",
        city: "SAINT-MATHURIN",
        girouette: {
          routeNumber: { backgroundColor: "#291F6C", textColor: "#FFFFFF", outlineColor: "#000000", text: "42" },
          pages: [{ text: "GRAND CHEMIN" }],
        },
      },
    ],
  },
  {
    id: "101",
    name: "101",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SOUCELLES"],
        autoHide: true,
        name: "SOUCELLES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "101",
          },
          pages: [{ text: "SOUCELLES" }],
        },
      },
      {
        id: ["Jeanne d'Arc"],
        autoHide: true,
        name: "Jeanne d'Arc",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "101",
          },
          pages: [{ text: "Jeanne d'Arc" }],
        },
      },
    ],
  },
  {
    id: "102",
    name: "102",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["PLESSIS GRAMMOIRE - SARRIGNÉ"],
        autoHide: true,
        name: "PLESSIS GRAMMOIRE - SARRIGNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "102",
          },
          pages: [{ text: "PLESSIS GRAMMOIRE - SARRIGNÉ" }],
        },
      },
      {
        id: ["Jeanne d'Arc"],
        autoHide: true,
        name: "Jeanne d'Arc",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "102",
          },
          pages: [{ text: "Jeanne d'Arc" }],
        },
      },
    ],
  },
  {
    id: "103",
    name: "103",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BRIOLLAY"],
        autoHide: true,
        name: "BRIOLLAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "103",
          },
          pages: [{ text: "BRIOLLAY" }],
        },
      },
      {
        id: ["Jeanne d'Arc"],
        autoHide: true,
        name: "Jeanne d'Arc",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "103",
          },
          pages: [{ text: "Jeanne d'Arc" }],
        },
      },
    ],
  },
  {
    id: "104",
    name: "104",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ECOUFLANT"],
        autoHide: true,
        name: "ECOUFLANT",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "104",
          },
          pages: [{ text: "ECOUFLANT" }],
        },
      },
      {
        id: ["Jeanne d'Arc"],
        autoHide: true,
        name: "Jeanne d'Arc",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "104",
          },
          pages: [{ text: "Jeanne d'Arc" }],
        },
      },
    ],
  },
  {
    id: "105",
    name: "105",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VILLEVÊQUE"],
        autoHide: true,
        name: "VILLEVÊQUE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "105",
          },
          pages: [{ text: "VILLEVÊQUE" }],
        },
      },
      {
        id: ["Jeanne d'Arc"],
        autoHide: true,
        name: "Jeanne d'Arc",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "105",
          },
          pages: [{ text: "Jeanne d'Arc" }],
        },
      },
    ],
  },
  {
    id: "106",
    name: "106",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BRIOLLAY"],
        autoHide: true,
        name: "BRIOLLAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "106",
          },
          pages: [{ text: "BRIOLLAY" }],
        },
      },
      {
        id: ["Jeanne d'Arc"],
        autoHide: true,
        name: "Jeanne d'Arc",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "106",
          },
          pages: [{ text: "Jeanne d'Arc" }],
        },
      },
    ],
  },
  {
    id: "111",
    name: "111",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS GARES"],
        autoHide: true,
        name: "ANGERS GARES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "111",
          },
          pages: [{ text: "ANGERS GARES" }],
        },
      },
      {
        id: ["St-Aubin-la-Salle"],
        autoHide: true,
        name: "St-Aubin-la-Salle",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "111",
          },
          pages: [{ text: "St-Aubin-la-Salle" }],
        },
      },
    ],
  },
  {
    id: "112",
    name: "112",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["TRELAZE GARE"],
        autoHide: true,
        name: "TRELAZE GARE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "112",
          },
          pages: [{ text: "TRELAZE GARE" }],
        },
      },
      {
        id: ["St-Aubin-la-Salle"],
        autoHide: true,
        name: "St-Aubin-la-Salle",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "112",
          },
          pages: [{ text: "St-Aubin-la-Salle" }],
        },
      },
    ],
  },
  {
    id: "113",
    name: "113",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ECOUFLANT"],
        autoHide: true,
        name: "ECOUFLANT",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "113",
          },
          pages: [{ text: "ECOUFLANT" }],
        },
      },
      {
        id: ["St-Aubin-la-Salle"],
        autoHide: true,
        name: "St-Aubin-la-Salle",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "113",
          },
          pages: [{ text: "St-Aubin-la-Salle" }],
        },
      },
    ],
  },
  {
    id: "114",
    name: "114",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["St-Aubin-la-Salle"],
        autoHide: true,
        name: "St-Aubin-la-Salle",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "114",
          },
          pages: [{ text: "St-Aubin-la-Salle" }],
        },
      },
      {
        id: ["SARRIGNÉ"],
        autoHide: true,
        name: "SARRIGNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "114",
          },
          pages: [{ text: "SARRIGNÉ" }],
        },
      },
    ],
  },
  {
    id: "121",
    name: "121",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ST SYLVAIN - PELLOUAILLES"],
        autoHide: true,
        name: "ST SYLVAIN - PELLOUAILLES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "121",
          },
          pages: [{ text: "ST SYLVAIN - PELLOUAILLES" }],
        },
      },
      {
        id: ["Debussy"],
        autoHide: true,
        name: "Debussy",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "121",
          },
          pages: [{ text: "Debussy" }],
        },
      },
    ],
  },
  {
    id: "123",
    name: "123",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BRIOLLAY"],
        autoHide: true,
        name: "BRIOLLAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "123",
          },
          pages: [{ text: "BRIOLLAY" }],
        },
      },
      {
        id: ["Debussy"],
        autoHide: true,
        name: "Debussy",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "123",
          },
          pages: [{ text: "Debussy" }],
        },
      },
    ],
  },
  {
    id: "131",
    name: "131",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mounier"],
        autoHide: true,
        name: "Mounier",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "131",
          },
          pages: [{ text: "Mounier" }],
        },
      },
      {
        id: ["VILLEVÊQUE - SOUCELLES"],
        autoHide: true,
        name: "VILLEVÊQUE - SOUCELLES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "131",
          },
          pages: [{ text: "VILLEVÊQUE - SOUCELLES" }],
        },
      },
    ],
  },
  {
    id: "132",
    name: "132",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LE PLESSIS GRAMMOIRE SARRIGNÉ BAUNÉ"],
        autoHide: true,
        name: "LE PLESSIS GRAMMOIRE SARRIGNÉ BAUNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "132",
          },
          pages: [{ text: "LE PLESSIS GRAMMOIRE SARRIGNÉ BAUNÉ" }],
        },
      },
      {
        id: ["Mounier"],
        autoHide: true,
        name: "Mounier",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "132",
          },
          pages: [{ text: "Mounier" }],
        },
      },
    ],
  },
  {
    id: "133",
    name: "133",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BRIOLLAY"],
        autoHide: true,
        name: "BRIOLLAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "133",
          },
          pages: [{ text: "BRIOLLAY" }],
        },
      },
      {
        id: ["Mounier"],
        autoHide: true,
        name: "Mounier",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "133",
          },
          pages: [{ text: "Mounier" }],
        },
      },
    ],
  },
  {
    id: "140",
    name: "140",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "140",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
    ],
  },
  {
    id: "141",
    name: "141",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SARRIGNÉ"],
        autoHide: true,
        name: "SARRIGNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "141",
          },
          pages: [{ text: "SARRIGNÉ" }],
        },
      },
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "141",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
    ],
  },
  {
    id: "142",
    name: "142",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "142",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
      {
        id: ["LE PLESSIS GRAMMOIRE"],
        autoHide: true,
        name: "LE PLESSIS GRAMMOIRE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "142",
          },
          pages: [{ text: "LE PLESSIS GRAMMOIRE" }],
        },
      },
    ],
  },
  {
    id: "143",
    name: "143",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "143",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
      {
        id: ["COLLÈGE VENAISERIE"],
        autoHide: true,
        name: "COLLÈGE VENAISERIE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "143",
          },
          pages: [{ text: "COLLÈGE VENAISERIE" }],
        },
      },
    ],
  },
  {
    id: "144",
    name: "144",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CORNÉ"],
        autoHide: true,
        name: "CORNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "144",
          },
          pages: [{ text: "CORNÉ" }],
        },
      },
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "144",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
    ],
  },
  {
    id: "145",
    name: "145",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CORNÉ"],
        autoHide: true,
        name: "CORNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "145",
          },
          pages: [{ text: "CORNÉ" }],
        },
      },
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "145",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
    ],
  },
  {
    id: "146",
    name: "146",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BRAIN"],
        autoHide: true,
        name: "BRAIN",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "146",
          },
          pages: [{ text: "BRAIN" }],
        },
      },
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "146",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
    ],
  },
  {
    id: "147",
    name: "147",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANDARD"],
        autoHide: true,
        name: "ANDARD",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "147",
          },
          pages: [{ text: "ANDARD" }],
        },
      },
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "147",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
    ],
  },
  {
    id: "148",
    name: "148",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LE PLESSIS GRAMMOIRE PELLOUAILLES"],
        autoHide: true,
        name: "LE PLESSIS GRAMMOIRE PELLOUAILLES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "148",
          },
          pages: [{ text: "LE PLESSIS GRAMMOIRE PELLOUAILLES" }],
        },
      },
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "148",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
    ],
  },
  {
    id: "149",
    name: "149",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SARRIGNÉ - AIGREFOIN"],
        autoHide: true,
        name: "SARRIGNÉ - AIGREFOIN",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "149",
          },
          pages: [{ text: "SARRIGNÉ - AIGREFOIN" }],
        },
      },
    ],
  },
  {
    id: "150",
    name: "150",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Jonchères"],
        autoHide: true,
        name: "Jonchères",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "150",
          },
          pages: [{ text: "Jonchères" }],
        },
      },
      {
        id: ["Guicheteau"],
        autoHide: true,
        name: "Guicheteau",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "150",
          },
          pages: [{ text: "Guicheteau" }],
        },
      },
      {
        id: ["Athlétis"],
        autoHide: true,
        name: "Athlétis",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "150",
          },
          pages: [{ text: "Athlétis" }],
        },
      },
      {
        id: ["Jean Bouin"],
        autoHide: true,
        name: "Jean Bouin",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "150",
          },
          pages: [{ text: "Jean Bouin" }],
        },
      },
      {
        id: ["Grand Claye"],
        autoHide: true,
        name: "Grand Claye",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "150",
          },
          pages: [{ text: "Grand Claye" }],
        },
      },
      {
        id: ["Collège St Laud"],
        autoHide: true,
        name: "Collège St Laud",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "150",
          },
          pages: [{ text: "Collège St Laud" }],
        },
      },
    ],
  },
  {
    id: "153",
    name: "153",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LE PLESSIS GRAMMOIRE"],
        autoHide: true,
        name: "LE PLESSIS GRAMMOIRE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "153",
          },
          pages: [{ font: "1507SUPX", text: "LE PLESSIS GRAMMOIRE" }],
        },
      },
      {
        id: ["Millot"],
        autoHide: true,
        name: "Millot",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "153",
          },
          pages: [{ text: "Millot" }],
        },
      },
    ],
  },
  {
    id: "154",
    name: "154",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ST BARTHÉLEMY"],
        autoHide: true,
        name: "ST BARTHÉLEMY",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "154",
          },
          pages: [{ text: "ST BARTHÉLEMY" }],
        },
      },
      {
        id: ["Millot"],
        autoHide: true,
        name: "Millot",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "154",
          },
          pages: [{ text: "Millot" }],
        },
      },
    ],
  },
  {
    id: "155",
    name: "155",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Millot"],
        autoHide: true,
        name: "Millot",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "155",
          },
          pages: [{ text: "Millot" }],
        },
      },
      {
        id: ["STE GEMMES - BOUCHEMAINE"],
        autoHide: true,
        name: "STE GEMMES - BOUCHEMAINE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "155",
          },
          pages: [{ text: "STE GEMMES - BOUCHEMAINE" }],
        },
      },
    ],
  },
  {
    id: "156",
    name: "156",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CORNÉ"],
        autoHide: true,
        name: "CORNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "156",
          },
          pages: [{ text: "CORNÉ" }],
        },
      },
      {
        id: ["Millot"],
        autoHide: true,
        name: "Millot",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "156",
          },
          pages: [{ text: "Millot" }],
        },
      },
    ],
  },
  {
    id: "158",
    name: "158",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Millot"],
        autoHide: true,
        name: "Millot",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "158",
          },
          pages: [{ text: "Millot" }],
        },
      },
      {
        id: ["SAINT MATHURIN"],
        autoHide: true,
        name: "SAINT MATHURIN",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "158",
          },
          pages: [{ text: "SAINT MATHURIN" }],
        },
      },
    ],
  },
  {
    id: "159",
    name: "159",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Millot"],
        autoHide: true,
        name: "Millot",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "159",
          },
          pages: [{ text: "Millot" }],
        },
      },
      {
        id: ["SAINT MATHURIN"],
        autoHide: true,
        name: "SAINT MATHURIN",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "159",
          },
          pages: [{ text: "SAINT MATHURIN" }],
        },
      },
    ],
  },
  {
    id: "161",
    name: "161",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Villon"],
        autoHide: true,
        name: "Villon",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "161",
          },
          pages: [{ text: "Villon" }],
        },
      },
      {
        id: ["SOULAINES"],
        autoHide: true,
        name: "SOULAINES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "161",
          },
          pages: [{ text: "SOULAINES" }],
        },
      },
    ],
  },
  {
    id: "163",
    name: "163",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Villon"],
        autoHide: true,
        name: "Villon",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "163",
          },
          pages: [{ text: "Villon" }],
        },
      },
      {
        id: ["BOURG LA CROIX"],
        autoHide: true,
        name: "BOURG LA CROIX",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "163",
          },
          pages: [{ text: "BOURG LA CROIX" }],
        },
      },
    ],
  },
  {
    id: "166",
    name: "166",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["STE GEMMES"],
        autoHide: true,
        name: "STE GEMMES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "166",
          },
          pages: [{ text: "STE GEMMES" }],
        },
      },
      {
        id: ["Villon"],
        autoHide: true,
        name: "Villon",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "166",
          },
          pages: [{ text: "Villon" }],
        },
      },
    ],
  },
  {
    id: "172",
    name: "172",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Chevrolier"],
        autoHide: true,
        name: "Chevrolier",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "172",
          },
          pages: [{ text: "Chevrolier" }],
        },
      },
      {
        id: ["TRÉLAZÉ"],
        autoHide: true,
        name: "TRÉLAZÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "172",
          },
          pages: [{ text: "TRÉLAZÉ" }],
        },
      },
    ],
  },
  {
    id: "173",
    name: "173",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mermoz"],
        autoHide: true,
        name: "Mermoz",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "173",
          },
          pages: [{ text: "Mermoz" }],
        },
      },
      {
        id: ["STE GEMMES SUR LOIRE"],
        autoHide: true,
        name: "STE GEMMES SUR LOIRE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "173",
          },
          pages: [{ text: "STE GEMMES SUR LOIRE" }],
        },
      },
    ],
  },
  {
    id: "176",
    name: "176",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gares"],
        autoHide: true,
        name: "ANGERS Gares",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "176",
          },
          pages: [{ text: "ANGERS Gares" }],
        },
      },
      {
        id: ["Narcé"],
        autoHide: true,
        name: "Narcé",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "176",
          },
          pages: [{ text: "Narcé" }],
        },
      },
    ],
  },
  {
    id: "181",
    name: "181",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Monprofit"],
        autoHide: true,
        name: "Monprofit",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "181",
          },
          pages: [{ text: "Monprofit" }],
        },
      },
      {
        id: ["MONTREUIL-JUIGNÉ"],
        autoHide: true,
        name: "MONTREUIL-JUIGNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "181",
          },
          pages: [{ text: "MONTREUIL-JUIGNÉ" }],
        },
      },
    ],
  },
  {
    id: "182",
    name: "182",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Monprofit"],
        autoHide: true,
        name: "Monprofit",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "182",
          },
          pages: [{ text: "Monprofit" }],
        },
      },
      {
        id: ["MONTREUIL-JUIGNE"],
        autoHide: true,
        name: "MONTREUIL-JUIGNE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "182",
          },
          pages: [{ text: "MONTREUIL-JUIGNE" }],
        },
      },
    ],
  },
  {
    id: "185",
    name: "185",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["AVRILLE"],
        autoHide: true,
        name: "AVRILLE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "185",
          },
          pages: [{ text: "AVRILLE" }],
        },
      },
      {
        id: ["Monprofit"],
        autoHide: true,
        name: "Monprofit",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "185",
          },
          pages: [{ text: "Monprofit" }],
        },
      },
    ],
  },
  {
    id: "192",
    name: "192",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SAVENNIÈRES"],
        autoHide: true,
        name: "SAVENNIÈRES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "192",
          },
          pages: [{ text: "SAVENNIÈRES" }],
        },
      },
      {
        id: ["La Barre"],
        autoHide: true,
        name: "La Barre",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "192",
          },
          pages: [{ text: "La Barre" }],
        },
      },
    ],
  },
  {
    id: "193",
    name: "193",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ST-CLÉMENT Moulin"],
        autoHide: true,
        name: "ST-CLÉMENT Moulin",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "193",
          },
          pages: [{ text: "ST-CLÉMENT Moulin" }],
        },
      },
      {
        id: ["La Barre"],
        autoHide: true,
        name: "La Barre",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "193",
          },
          pages: [{ text: "La Barre" }],
        },
      },
    ],
  },
  {
    id: "195",
    name: "195",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ST JEAN DE LINIÈRES"],
        autoHide: true,
        name: "ST JEAN DE LINIÈRES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "195",
          },
          pages: [{ text: "ST JEAN DE LINIÈRES" }],
        },
      },
      {
        id: ["Monnet"],
        autoHide: true,
        name: "Monnet",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "195",
          },
          pages: [{ text: "Monnet" }],
        },
      },
    ],
  },
  {
    id: "201",
    name: "201",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Jean Zay"],
        autoHide: true,
        name: "Jean Zay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "201",
          },
          pages: [{ text: "Jean Zay" }],
        },
      },
      {
        id: ["CANTENAY-ÉPINARD"],
        autoHide: true,
        name: "CANTENAY-ÉPINARD",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "201",
          },
          pages: [{ text: "CANTENAY-ÉPINARD" }],
        },
      },
    ],
  },
  {
    id: "202",
    name: "202",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Jean Zay"],
        autoHide: true,
        name: "Jean Zay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "202",
          },
          pages: [{ text: "Jean Zay" }],
        },
      },
      {
        id: ["LE PLESSIS MACÉ"],
        autoHide: true,
        name: "LE PLESSIS MACÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "202",
          },
          pages: [{ text: "LE PLESSIS MACÉ" }],
        },
      },
    ],
  },
  {
    id: "203",
    name: "203",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LA MEMBROLLE - PRUILLÉ"],
        autoHide: true,
        name: "LA MEMBROLLE - PRUILLÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "203",
          },
          pages: [{ text: "LA MEMBROLLE - PRUILLÉ" }],
        },
      },
      {
        id: ["Jean Zay"],
        autoHide: true,
        name: "Jean Zay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "203",
          },
          pages: [{ text: "Jean Zay" }],
        },
      },
    ],
  },
  {
    id: "204",
    name: "204",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Jean Zay"],
        autoHide: true,
        name: "Jean Zay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "204",
          },
          pages: [{ text: "Jean Zay" }],
        },
      },
      {
        id: ["SOULAIRE ET BOURG"],
        autoHide: true,
        name: "SOULAIRE ET BOURG",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "204",
          },
          pages: [{ text: "SOULAIRE ET BOURG" }],
        },
      },
    ],
  },
  {
    id: "205",
    name: "205",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SOULAIRE"],
        autoHide: true,
        name: "SOULAIRE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "205",
          },
          pages: [{ text: "SOULAIRE" }],
        },
      },
      {
        id: ["Jean Zay"],
        autoHide: true,
        name: "Jean Zay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "205",
          },
          pages: [{ text: "Jean Zay" }],
        },
      },
    ],
  },
  {
    id: "206",
    name: "206",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COLLÈGE JEAN ZAY"],
        autoHide: true,
        name: "COLLÈGE JEAN ZAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "206",
          },
          pages: [{ text: "COLLÈGE JEAN ZAY" }],
        },
      },
      {
        id: ["Jean Zay"],
        autoHide: true,
        name: "Jean Zay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "206",
          },
          pages: [{ text: "Jean Zay" }],
        },
      },
    ],
  },
  {
    id: "207",
    name: "207",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["FENEU"],
        autoHide: true,
        name: "FENEU",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "207",
          },
          pages: [{ text: "FENEU" }],
        },
      },
      {
        id: ["Jean Zay"],
        autoHide: true,
        name: "Jean Zay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "207",
          },
          pages: [{ text: "Jean Zay" }],
        },
      },
    ],
  },
  {
    id: "210",
    name: "210",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LA MEIGNANNE"],
        autoHide: true,
        name: "LA MEIGNANNE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "210",
          },
          pages: [{ text: "LA MEIGNANNE" }],
        },
      },
      {
        id: ["Janequin"],
        autoHide: true,
        name: "Janequin",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "210",
          },
          pages: [{ text: "Janequin" }],
        },
      },
    ],
  },
  {
    id: "211",
    name: "211",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CORNÉ"],
        autoHide: true,
        name: "CORNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "211",
          },
          pages: [{ text: "CORNÉ" }],
        },
      },
      {
        id: ["Joachim Du Bellay"],
        autoHide: true,
        name: "Joachim Du Bellay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "211",
          },
          pages: [{ text: "Joachim Du Bellay" }],
        },
      },
    ],
  },
  {
    id: "212",
    name: "212",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CORNÉ"],
        autoHide: true,
        name: "CORNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "212",
          },
          pages: [{ text: "CORNÉ" }],
        },
      },
      {
        id: ["Joachim Du Bellay"],
        autoHide: true,
        name: "Joachim Du Bellay",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "212",
          },
          pages: [{ text: "Joachim Du Bellay" }],
        },
      },
    ],
  },
  {
    id: "213",
    name: "213",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["St-Aubin-la-Salle"],
        autoHide: true,
        name: "St-Aubin-la-Salle",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "213",
          },
          pages: [{ text: "St-Aubin-la-Salle" }],
        },
      },
      {
        id: ["CORNÉ"],
        autoHide: true,
        name: "CORNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "213",
          },
          pages: [{ text: "CORNÉ" }],
        },
      },
    ],
  },
  {
    id: "220",
    name: "220",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MFR Meignanne"],
        autoHide: true,
        name: "MFR Meignanne",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "220",
          },
          pages: [{ text: "MFR Meignanne" }],
        },
      },
      {
        id: ["AVRILLÉ Terra Botanica"],
        autoHide: true,
        name: "AVRILLÉ Terra Botanica",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "220",
          },
          pages: [{ text: "AVRILLÉ Terra Botanica" }],
        },
      },
    ],
  },
  {
    id: "221",
    name: "221",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Cantenay Croix de Sarthe"],
        autoHide: true,
        name: "Cantenay Croix de Sarthe",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "221",
          },
          pages: [{ text: "Cantenay Croix de Sarthe" }],
        },
      },
      {
        id: ["Collège Janequin"],
        autoHide: true,
        name: "Collège Janequin",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "221",
          },
          pages: [{ text: "Collège Janequin" }],
        },
      },
    ],
  },
  {
    id: "301",
    name: "301",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ESAT Brunelleries"],
        autoHide: true,
        name: "ESAT Brunelleries",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "301",
          },
          pages: [{ font: "1510N2E1", text: "ESAT Brunelleries" }],
        },
      },
      {
        id: ["FOCH-MAISON BLEUE"],
        autoHide: true,
        name: "FOCH-MAISON BLEUE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "301",
          },
          pages: [{ text: "FOCH-MAISON BLEUE" }],
        },
      },
    ],
  },
  {
    id: "302",
    name: "302",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CORNÉ"],
        autoHide: true,
        name: "CORNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "302",
          },
          pages: [{ text: "CORNÉ" }],
        },
      },
      {
        id: ["ESAT Bejonnières"],
        autoHide: true,
        name: "ESAT Bejonnières",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "302",
          },
          pages: [{ font: "1510N2E1", text: "ESAT Bejonnieres" }],
        },
      },
    ],
  },
  {
    id: "351",
    name: "351",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Andard"],
        autoHide: true,
        name: "Andard",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "351",
          },
          pages: [{ text: "Andard" }],
        },
      },
      {
        id: ["ANDARD CLOTEAU"],
        autoHide: true,
        name: "ANDARD CLOTEAU",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "351",
          },
          pages: [{ text: "ANDARD CLOTEAU" }],
        },
      },
    ],
  },
  {
    id: "352",
    name: "352",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bauné"],
        autoHide: true,
        name: "Bauné",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "352",
          },
          pages: [{ text: "Bauné" }],
        },
      },
    ],
  },
  {
    id: "353",
    name: "353",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Villevèque"],
        autoHide: true,
        name: "Villevèque",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "353",
          },
          pages: [{ text: "Villevèque" }],
        },
      },
      {
        id: ["VILLEVÊQUE"],
        autoHide: true,
        name: "VILLEVÊQUE",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "353",
          },
          pages: [{ text: "VILLEVÊQUE" }],
        },
      },
    ],
  },
  {
    id: "354",
    name: "354",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SOUCELLES"],
        autoHide: true,
        name: "SOUCELLES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "354",
          },
          pages: [{ text: "SOUCELLES" }],
        },
      },
      {
        id: ["Soucelles"],
        autoHide: true,
        name: "Soucelles",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "354",
          },
          pages: [{ text: "Soucelles" }],
        },
      },
    ],
  },
  {
    id: "355",
    name: "355",
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Savennières"],
        autoHide: true,
        name: "Savennières",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "355",
          },
          pages: [{ text: "Savennières" }],
        },
      },
      {
        id: ["SAVENNIÈRES"],
        autoHide: true,
        name: "SAVENNIÈRES",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "355",
          },
          pages: [{ text: "SAVENNIÈRES" }],
        },
      },
    ],
  },
  {
    id: "356",
    name: "356",
    noCartridge: true,
    colors: { background: "#484F54", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Venaiserie"],
        autoHide: true,
        name: "Venaiserie",
        girouette: {
          routeNumber: {
            backgroundColor: "#484F54",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "356",
          },
          pages: [{ text: "Venaiserie" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "irigo",
  name: "Irigo - Angers Loire Métropole",
  routes: irigoRoutes,
  color: "#EB0F2D",
  textColor: "#FFFFFF",
};

export default network;
