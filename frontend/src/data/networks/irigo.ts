import { Network, Route } from "~/@types";

const irigoRoutes: Route[] = [
  {
    id: "NUIT",
    name: "N",
    noCartridge: true,
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
    noCartridge: true,
    colors: { background: "#DEDC03", text: "#484F54" },
    destinations: [
      {
        id: ["Navette Marché Monplaisir"],
        autoHide: true,
        name: "Navette Marché Monplaisir",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#DEDC03", textColor: "#484F54", outlineColor: "#000000", text: "M" },
          pages: [[{ text: "NAVETTE" }, { text: "MARCHE MONPLAISIR" }]],
        },
      },
    ],
  },
  {
    id: "A",
    name: "A",
    noCartridge: true,
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
        id: ["LES GARES"],
        autoHide: true,
        name: "Les Gares",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "LES GARES" }],
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
    noCartridge: true,
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
    noCartridge: true,
    colors: { background: "#379E31", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS ROSERAIE", "ROSERAIE"],
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
    noCartridge: true,
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
        id: ["ANGERS André Leroy"],
        autoHide: true,
        name: "André Leroy",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#008E8C", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "ANDRE LEROY" }],
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
    noCartridge: true,
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
        city: "SAINT-BARTHÉLEMY",
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
    noCartridge: true,
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
    noCartridge: true,
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
        id: ["ANGERS Les Gares"],
        autoHide: true,
        name: "Les Gares",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#009EE1", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "LES GARES" }],
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
    noCartridge: true,
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
    noCartridge: true,
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
        id: ["ANGERS La Barre"],
        autoHide: true,
        name: "La Barre",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#291F6C", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "LA BARRE" }],
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
    noCartridge: true,
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
        city: "SAINT-SYLVAIN",
        girouette: {
          routeNumber: { backgroundColor: "#AE0F0A", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1508C2E1", text: "ST-AUBIN LA SALLE" }],
        },
      },
    ],
  },
  {
    id: "08",
    name: "8",
    noCartridge: true,
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
        id: ["ANGERS Gares Papin"],
        autoHide: true,
        name: "Gares Papin",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#E50076", textColor: "#FFFFFF", outlineColor: "#000000", text: "8" },
          pages: [{ text: "GARES PAPIN" }],
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
    noCartridge: true,
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
    noCartridge: true,
    colors: { background: "#7263A9", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ST-SYLVAIN Chêne Vert"],
        name: "Chêne Vert",
        city: "SAINT-SYLVAIN",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "CHENE VERT" }],
        },
      },
      {
        id: ["ANGERS Parc Expo"],
        autoHide: true,
        name: "Parc Expo",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "PARC EXPO" }],
        },
      },
      {
        id: ["ANGERS Lorraine"],
        autoHide: true,
        name: "Lorraine",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "LORRAINE" }],
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
    noCartridge: true,
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
    noCartridge: true,
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
    noCartridge: true,
    colors: { background: "#E7343F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gares Papin"],
        name: "Gares Papin",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#E7343F", textColor: "#FFFFFF", outlineColor: "#000000", text: "E20" },
          pages: [{ text: "GARES PAPIN" }],
        },
      },
      {
        id: ["BEAUCOUZÉ L'Atoll"],
        name: "L'Atoll",
        city: "BEAUCOUZÉ",
        girouette: {
          routeNumber: { backgroundColor: "#E7343F", textColor: "#FFFFFF", outlineColor: "#000000", text: "E20" },
          pages: [{ text: "L'ATOLL" }],
        },
      },
    ],
  },
  {
    id: "21",
    name: "E21",
    noCartridge: true,
    colors: { background: "#95C11F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gares Papin"],
        name: "Gares Papin",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#95C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "E21" },
          pages: [{ text: "GARES PAPIN" }],
        },
      },
      {
        id: ["MONTREUIL-JUIGNÉ Domaine du Val"],
        name: "Domaine du Val",
        city: "MONTREUIL-JUIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#95C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "E21" },
          pages: [{ font: "1510N2E1", text: "DOMAINE DU VAL" }],
        },
      },
    ],
  },
  {
    id: "22",
    name: "E22",
    noCartridge: true,
    colors: { background: "#C94191", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Gares Papin"],
        name: "Gares Papin",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#C94191", textColor: "#FFFFFF", outlineColor: "#000000", text: "E22" },
          pages: [{ text: "GARES PAPIN" }],
        },
      },
      {
        id: ["BOUCHEMAINE Chantourteau"],
        name: "Chantourteau",
        city: "BOUCHEMAINE",
        girouette: {
          routeNumber: { backgroundColor: "#C94191", textColor: "#FFFFFF", outlineColor: "#000000", text: "E22" },
          pages: [{ text: "CHANTOURTEAU" }],
        },
      },
    ],
  },
  {
    id: "23",
    name: "E23",
    noCartridge: true,
    colors: { background: "#F08046", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#F08046", textColor: "#FFFFFF", outlineColor: "#000000", text: "E23" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["MÛRS-ÉRIGNÉ Guicheteau"],
        name: "Guicheteau",
        city: "MÛRS-ÉRIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#F08046", textColor: "#FFFFFF", outlineColor: "#000000", text: "E23" },
          pages: [{ text: "GUICHETEAU" }],
        },
      },
    ],
  },
  {
    id: "24",
    name: "E24",
    noCartridge: true,
    colors: { background: "#00A7A7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ANGERS Hôtel de Ville"],
        name: "Hôtel de Ville",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#00A7A7", textColor: "#FFFFFF", outlineColor: "#000000", text: "E24" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["CORNÉ Royale"],
        name: "Royale",
        city: "CORNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#00A7A7", textColor: "#FFFFFF", outlineColor: "#000000", text: "E24" },
          pages: [{ text: "ROYALE" }],
        },
      },
    ],
  },
  {
    id: "30",
    name: "30",
    noCartridge: true,
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
          pages: [{ text: "Louise Michel" }],
        },
      },
    ],
  },
  {
    id: "31",
    name: "31",
    noCartridge: true,
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
          pages: [{ text: "SOUCELLES STADE" }],
        },
      },
    ],
  },
  {
    id: "32",
    name: "32",
    noCartridge: true,
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
    noCartridge: true,
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
        id: ["FENEU Croix de Beauvais", "FENEU ZA Feuneu / Croix de Beauvais"],
        name: "Croix de Beauvais",
        city: "FENEU",
        girouette: {
          routeNumber: { backgroundColor: "#951B81", textColor: "#FFFFFF", outlineColor: "#000000", text: "33" },
          pages: [{ font: "1510N2E1", text: "CROIX DE BEAUVAIS" }],
        },
      },
    ],
  },
  {
    id: "34",
    name: "34",
    noCartridge: true,
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
          pages: [{ text: "TERRA BOTANICA" }],
        },
      },
      {
        id: ["LE PLESSIS-MACÉ L'Orée"],
        autoHide: true,
        name: "L'Orée",
        city: "LE PLESSIS-MACÉ",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "34" },
          pages: [{ text: "L'OREE" }],
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
    noCartridge: true,
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
        autoHide: true,
        name: "La Coudre",
        city: "ST-LÉGER",
        girouette: {
          routeNumber: { backgroundColor: "#00A6E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "35" },
          pages: [{ text: "LA COUDRE" }],
        },
      },
      {
        id: ["ST-LÉGER Les Essarts"],
        name: "Les Essarts",
        city: "SAINT-LÉGER",
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
    noCartridge: true,
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
        id: ["ST-LÉGER Les Essarts"],
        name: "Les Essarts",
        city: "SAINT-LÉGER",
        girouette: {
          routeNumber: { backgroundColor: "#D2091E", textColor: "#FFFFFF", outlineColor: "#000000", text: "36" },
          pages: [{ text: "LES ESSARTS" }],
        },
      },
    ],
  },
  {
    id: "37",
    name: "37",
    noCartridge: true,
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
          pages: [{ text: "ECUILLE MAIRIE" }],
        },
      },
    ],
  },
  {
    id: "38",
    name: "38",
    noCartridge: true,
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
    noCartridge: true,
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
    noCartridge: true,
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
        id: ["ANGERS Saumuroise"],
        autoHide: true,
        name: "Saumuroise",
        city: "ANGERS",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "40" },
          pages: [{ text: "SAUMUROISE" }],
        },
      },
      {
        id: ["TRÉLAZÉ Gare", "ANGERS Gare routière Esplanade / Saumuroise / TRÉLAZÉ Gare"],
        autoHide: true,
        name: "Gare",
        city: "TRÉLAZÉ",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "40" },
          pages: [{ text: "TRELAZE GARE" }],
        },
      },
      {
        id: ["ANDARD Jeanne de Laval"],
        autoHide: true,
        name: "Jeanne de Laval",
        city: "ANDARD",
        girouette: {
          routeNumber: { backgroundColor: "#7263A9", textColor: "#FFFFFF", outlineColor: "#000000", text: "40" },
          pages: [{ font: "1510N2E1", text: "JEANNE DE LAVAL" }],
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
    noCartridge: true,
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
        id: ["BÉHUARD Bourg"],
        name: "Bourg",
        city: "BÉHUARD",
        girouette: {
          routeNumber: { backgroundColor: "#DEA600", textColor: "#FFFFFF", outlineColor: "#000000", text: "41" },
          pages: [{ text: "BEHUARD BOURG" }],
        },
      },
    ],
  },
  {
    id: "42",
    name: "42",
    noCartridge: true,
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
];

const network: Network = {
  slug: "irigo",
  name: "Irigo - Angers Loire Métropole",
  routes: irigoRoutes,
  color: "#EB0F2D",
  textColor: "#FFFFFF",
};

export default network;
