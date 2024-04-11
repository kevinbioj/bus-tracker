import { Network, Route } from "~/@types";

const capCotentinRoutes: Route[] = [
  {
    id: "CAPCOT:N1",
    name: "N1",
    colors: { background: "#2e2c7d", text: "#FFDE00" },
    destinations: [
      {
        id: ["401"],
        autoHide: true,
        name: "N1 – Églantine Château",
        city: "LA GLACERIE",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N1" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "EGLANTINE CHATEAU" }],
        },
      },
      {
        id: ["400"],
        autoHide: true,
        name: "N1 – Schuman",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N1" },
          pages: [{ text: "SCHUMAN" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:N2",
    name: "N2",
    colors: { background: "#2e2c7d", text: "#FFDE00" },
    destinations: [
      {
        id: ["400"],
        autoHide: true,
        alternate: "Hôtel de Ville de Cherbourg",
        name: "N2 – Hôtel de Ville",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N2" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["402"],
        autoHide: true,
        name: "N2 – Les Mourets",
        city: "ÉQUEURDREVILLE-HAINNEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N2" },
          pages: [{ text: "LES MOURETS" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:01",
    name: "1",
    colors: { background: "#EB5D4D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["11", "17", "19"],
        name: "Schuman-Delaville",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#EB5D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["15"],
        autoHide: true,
        name: "Amont Quentin",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#EB5D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "AMONT QUENTIN" }],
        },
      },
      {
        id: ["10", "16"],
        name: "Les Fourches",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#EB5D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "LES FOURCHES" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:02",
    name: "2",
    colors: { background: "#E50063", text: "#FFFFFF" },
    destinations: [
      {
        id: ["23"],
        name: "Collignon",
        city: "TOURLAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#E50063", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "COLLIGNON" }],
        },
      },
      {
        id: ["21"],
        name: "Digard",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#E50063", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "DIGARD" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:03",
    name: "3",
    colors: { background: "#9E5049", text: "#FFFFFF" },
    destinations: [
      {
        id: ["30"],
        name: "Églantine Château",
        city: "TOURLAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#9E5049", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "EGLANTINE CHATEAU" }],
        },
      },
      {
        id: ["31"],
        name: "Brécourt",
        city: "ÉQUEURDREVILLE-HAINNEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#9E5049", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "BRECOURT" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:04",
    name: "4",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["46"],
        name: "Marettes",
        city: "LA GLACERIE",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "MARETTES" }],
        },
      },
      {
        id: ["44"],
        autoHide: true,
        name: "Schuman",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "SCHUMAN" }],
        },
      },
      {
        id: ["42"],
        name: "Amfreville",
        city: "QUERQUEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "AMFREVILLE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:05",
    name: "5",
    colors: { background: "#F8DA41", text: "#000000" },
    destinations: [
      {
        id: ["50"],
        name: "Flamands",
        city: "TOURLAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ text: "FLAMANDS" }],
        },
      },
      {
        id: ["51"],
        autoHide: true,
        name: "Chantier–Arsenal",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ font: "1510N2E1", text: "CHANTIER-ARSENAL" }],
        },
      },
      {
        id: ["55"],
        alternate: "Mairie de Querqueville",
        name: "Mairie",
        city: "QUERQUEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ font: "1508C2E1", text: "QUERQUEVILLE MAIRIE" }],
        },
      },
      {
        id: ["52"],
        autoHide: true,
        name: "Amfreville",
        city: "QUERQUEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ text: "AMFREVILLE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:06",
    name: "6",
    colors: { background: "#F5A681", text: "#FFFFFF" },
    destinations: [
      {
        id: ["61"],
        name: "Sauxmarais",
        city: "TOURLAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F5A681", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "SAUXMARAIS" }],
        },
      },
      {
        id: ["60"],
        name: "Polyclinique",
        city: "ÉQUEURDREVILLE-HAINNEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F5A681", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "POLYCLINIQUE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:07",
    name: "7",
    colors: { background: "#F195BF", text: "#FFFFFF" },
    destinations: [
      {
        id: ["70"],
        name: "Schuman-Delaville",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#F195BF", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["71"],
        name: "Collège Zola",
        city: "LA GLACERIE",
        girouette: {
          routeNumber: { backgroundColor: "#F195BF", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "COLLEGE ZOLA" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:A",
    name: "A",
    colors: { background: "#58529E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["606"],
        name: "Schuman-Delaville",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#58529E", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "SCHUMAN-DELAVILLE" }]],
        },
      },
      {
        id: ["603", "604"],
        name: "Orano",
        city: "LA HAGUE",
        girouette: {
          routeNumber: { backgroundColor: "#58529E", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [[{ text: "LA HAGUE" }, { text: "ORANO" }]],
        },
      },
      {
        id: ["605"],
        autoHide: true,
        name: "Cap de la Hague",
        city: "AUDERVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#58529E", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [[{ text: "AUDERVILLE" }, { text: "CAP DE LA HAGUE" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:B",
    name: "B",
    colors: { background: "#1EB8D1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["615", "616"],
        name: "Schuman-Delaville",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#1EB8D1", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "SCHUMAN-DELAVILLE" }]],
        },
      },
      {
        id: ["613"],
        autoHide: true,
        name: "Place des Tamaris",
        city: "SIOUVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#1EB8D1", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [[{ text: "SIOUVILLE" }, { text: "PLACE DES TAMARIS" }]],
        },
      },
      {
        id: ["614"],
        name: "EPR/CNPE – Entrée Nord",
        city: "FLAMANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#1EB8D1", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [[{ text: "FLAMANVILLE" }, { text: "EPR/CNPE ENTREE NORD" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:C",
    name: "C",
    colors: { background: "#86B5E2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["625"],
        name: "Schuman-Delaville",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "SCHUMAN-DELAVILLE" }]],
        },
      },
      {
        id: ["623"],
        autoHide: true,
        name: "Place Centrale",
        city: "SAINT-PIERRE-ÉGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [[{ text: "SAINT-PIERRE-EGLISE" }, { text: "PLACE CENTRALE" }]],
        },
      },
      {
        id: ["624"],
        autoHide: true,
        alternate: "Mairie de Barfleur",
        name: "Mairie",
        city: "BARFLEUR",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [[{ text: "BARFLEUR" }, { text: "MAIRIE" }]],
        },
      },
      {
        id: ["622"],
        alternate: "Gare SNCF de Valognes",
        name: "Gare SNCF",
        city: "VALOGNES",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [[{ text: "VALOGNES" }, { text: "GARE SNCF" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:D",
    name: "D",
    colors: { background: "#107974", text: "#FFFFFF" },
    destinations: [
      {
        id: ["633"],
        name: "Schuman-Delaville",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#107974", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "SCHUMAN-DELAVILLE" }]],
        },
      },
      {
        id: ["634"],
        name: "Place Albert Pelerin",
        city: "MONTEBOURG",
        girouette: {
          routeNumber: { backgroundColor: "#107974", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [[{ text: "MONTEBOURG" }, { text: "PLACE ALBERT PELERIN" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:E",
    name: "E",
    colors: { background: "#47B7A2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["643"],
        name: "Schuman-Delaville",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#47B7A2", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "SCHUMAN-DELAVILLE" }]],
        },
      },
      {
        id: ["644"],
        alternate: "Collège de Bricquebec",
        name: "Collège",
        city: "BRICQUEBEC-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#47B7A2", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [[{ text: "BRICQUEBEC-EN-COTENTIN" }, { text: "COLLEGE" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:F",
    name: "F",
    colors: { background: "#9774B1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["653"],
        name: "Place de la Lande",
        city: "LES PIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [[{ text: "LES PIEUX" }, { text: "PLACE DE LA LANDE" }]],
        },
      },
      {
        id: ["655"],
        autoHide: true,
        alternate: "Mairie de Barneville",
        name: "Mairie",
        city: "BARNEVILLE-CARTERET",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [[{ text: "BARNEVILLE-CARTERET" }, { text: "MAIRIE" }]],
        },
      },
      {
        id: ["654"],
        name: "Place Félix Buhot",
        city: "VALOGNES",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [[{ text: "VALOGNES" }, { text: "PLACE FELIX BUHOT" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:G",
    name: "G",
    colors: { background: "#C2DDB3", text: "#000000" },
    destinations: [
      {
        id: ["663"],
        name: "Z.A. Armanville",
        city: "VALOGNES",
        girouette: {
          routeNumber: { backgroundColor: "#C2DDB3", textColor: "#000000", text: "G" },
          pages: [{ text: "VALOGNES" }, { font: "1508C2E1", spacing: 3, text: "Z.A. ARMANVILLE" }],
        },
      },
      {
        id: ["664"],
        name: "Rue Lechevalier",
        city: "PORTBAIL",
        girouette: {
          routeNumber: { backgroundColor: "#C2DDB3", textColor: "#000000", text: "G" },
          pages: [[{ text: "PORTBAIL" }, { text: "RUE LECHEVALIER" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S1",
    name: "S1",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["702"],
        autoHide: true,
        name: "Le Valnotte",
        city: "BARNEVILLE-CARTERET",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S1" },
          pages: [[{ text: "BARNEVILLE-CARTERET" }, { text: "LE VALNOTTE" }]],
        },
      },
      {
        id: ["701"],
        autoHide: true,
        name: "Place Félix Buhot",
        city: "VALOGNES",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S1" },
          pages: [[{ text: "VALOGNES" }, { text: "PLACE FELIX BUHOT" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S2",
    name: "S2",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["703"],
        autoHide: true,
        name: "Collège Marcel Grillard",
        city: "BRICQUEBEC-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S2" },
          pages: [[{ text: "BRICQUEBEC-EN-COTENTIN" }, { text: "COLLEGE MARCEL GRILLARD" }]],
        },
      },
      {
        id: ["704"],
        autoHide: true,
        name: "Collège Barbey d’Aurevilly",
        city: "SAINT-SAUVEUR-LE-VICOMTE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S2" },
          pages: [[{ text: "ST-SAUVEUR-LE-VICOMTE" }, { text: "COLLEGE B. D'AUREVILLY" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S3",
    name: "S3",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["705"],
        autoHide: true,
        name: "Collège Buhot",
        city: "VALOGNES",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S3" },
          pages: [[{ text: "VALOGNES" }, { text: "COLLEGE BUHOT" }]],
        },
      },
      {
        id: ["707"],
        autoHide: true,
        name: "Rue de la Poste",
        city: "QUINEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S3" },
          pages: [[{ text: "QUINEVILLE" }, { text: "RUE DE LA POSTE" }]],
        },
      },
      {
        id: ["706"],
        autoHide: true,
        name: "Le Coup de Frein",
        city: "ÉMONDEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S3" },
          pages: [[{ text: "EMONDEVILLE" }, { text: "LE COUP DE FREIN" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S4",
    name: "S4",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["708"],
        autoHide: true,
        name: "Collège Diderot",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S4" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "COLLEGE DIDEROT" }]],
        },
      },
      {
        id: ["709"],
        autoHide: true,
        name: "Le Bas",
        city: "CRASVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S4" },
          pages: [[{ text: "CRASVILLE" }, { text: "LE BAS" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S5",
    name: "S5",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["713"],
        autoHide: true,
        alternate: "Église de Réville",
        name: "Église",
        city: "RÉVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [[{ text: "REVILLE" }, { text: "EGLISE" }]],
        },
      },
      {
        id: ["710"],
        autoHide: true,
        name: "Campus–Aragon",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "CAMPUS-ARAGON" }]],
        },
      },
      {
        id: ["714"],
        autoHide: true,
        alternate: "Mairie de Montfarville",
        name: "Mairie",
        city: "MONTFARVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [[{ text: "MONTFARVILLE" }, { text: "MAIRIE" }]],
        },
      },

      {
        id: ["712"],
        autoHide: true,
        name: "Place Centrale",
        city: "SAINT-PIERRE-ÉGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [[{ text: "SAINT-PIERRE-EGLISE" }, { text: "PLACE CENTRALE" }]],
        },
      },
      {
        id: ["711"],
        autoHide: true,
        name: "Huit mai",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "HUIT MAI" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S6",
    name: "S6",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["715"],
        autoHide: true,
        name: "Quai Collins",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S6" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "QUAI COLLINS" }]],
        },
      },
      {
        id: ["716"],
        autoHide: true,
        name: "Route du Val de Saire",
        city: "GATTEVILLE-LE-PHARE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S6" },
          pages: [[{ text: "GATTEVILLE LE PHARE" }, { text: "RTE VAL DE SAIRE" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S7",
    name: "S7",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["717"],
        autoHide: true,
        alternate: "École de Saint-Pierre",
        name: "École élémentaire",
        city: "SAINT-PIERRE-ÉGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S7" },
          pages: [[{ text: "SAINT-PIERRE-EGLISE" }, { text: "ECOLE ELEMENTAIRE" }]],
        },
      },
      {
        id: ["718"],
        autoHide: true,
        name: "Collège Gilles de Gouberville",
        city: "SAINT-PIERRE-ÉGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S7" },
          pages: [[{ text: "SAINT-PIERRE-EGLISE" }, { text: "COLLEGE DE GOUBERVILLE" }]],
        },
      },
      {
        id: ["719"],
        autoHide: true,
        name: "Église",
        city: "CLITOURPS",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S7" },
          pages: [[{ text: "CLITOURPS" }, { text: "EGLISE" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S8",
    name: "S8",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["720"],
        autoHide: true,
        alternate: "École de Saint-Pierre",
        name: "École élémentaire",
        city: "SAINT-PIERRE-ÉGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S8" },
          pages: [[{ text: "SAINT-PIERRE-EGLISE" }, { text: "ECOLE ELEMENTAIRE" }]],
        },
      },
      {
        id: ["721"],
        autoHide: true,
        name: "Collège Gilles de Gouberville",
        city: "SAINT-PIERRE-ÉGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S8" },
          pages: [[{ text: "SAINT-PIERRE-EGLISE" }, { text: "COLLEGE DE GOUBERVILLE" }]],
        },
      },
      {
        id: ["722"],
        autoHide: true,
        name: "Les Écoles",
        city: "LE THEIL",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S8" },
          pages: [[{ text: "LE THEIL" }, { text: "LES ECOLES" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S9",
    name: "S9",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["723"],
        autoHide: true,
        name: "Collège Marcel Grillard",
        city: "BRICQUEBEC-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S9" },
          pages: [[{ text: "BRICQUEBEC-EN-COTENTIN" }, { text: "COLLEGE MARCEL GRILLARD" }]],
        },
      },
      {
        id: ["724"],
        autoHide: true,
        name: "La Place",
        city: "FIERVILLE-LES-MINES",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S9" },
          pages: [[{ text: "FIERVILLE-LES-MINES" }, { text: "LA PLACE" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S10",
    name: "S10",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["725"],
        autoHide: true,
        alternate: "Mairie d'Équeurdreville",
        name: "Mairie",
        city: "ÉQUEURDREVILLE-HAINNEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S10" },
          pages: [[{ text: "ÉQUEURDREVILLE" }, { text: "MAIRIE" }]],
        },
      },
      {
        id: ["726"],
        autoHide: true,
        alternate: "Mairie de Grosville",
        name: "Mairie",
        city: "GROSVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S10" },
          pages: [{ text: "GROSVILLE" }, { text: "MAIRIE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S11",
    name: "S11",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["727"],
        autoHide: true,
        name: "Collège Hague Dick",
        city: "BEAUMONT-HAGUE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S11" },
          pages: [[{ text: "BEAUMONT-HAGUE" }, { text: "COLLEGE HAGUE DICK" }]],
        },
      },
      {
        id: ["728"],
        autoHide: true,
        name: "La Croix Frimot",
        city: "BIVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S11" },
          pages: [[{ text: "BIVILLE" }, { text: "LA CROIX FRIMOT" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S12",
    name: "S12",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["729"],
        autoHide: true,
        name: "Collège Marcel Grillard",
        city: "BRICQUEBEC-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S12" },
          pages: [[{ text: "BRICQUEBEC-EN-COTENTIN" }, { text: "COLLEGE MARCEL GRILLARD" }]],
        },
      },
      {
        id: ["730"],
        autoHide: true,
        alternate: "École d'Helleville",
        name: "École",
        city: "HELLEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S12" },
          pages: [[{ text: "HELLEVILLE" }, { text: "ECOLE" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S13",
    name: "S13",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["731"],
        autoHide: true,
        name: "Schuman",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S13" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "SCHUMAN" }]],
        },
      },
      {
        id: ["732"],
        autoHide: true,
        name: "Rue Lechevalier",
        city: "PORTBAIL",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S13" },
          pages: [[{ text: "PORTBAIL" }, { text: "RUE LECHEVALIER" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:S14",
    name: "S14",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["733"],
        autoHide: true,
        name: "Schuman",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S14" },
          pages: [[{ text: "CHERBOURG-EN-COTENTIN" }, { text: "SCHUMAN" }]],
        },
      },
      {
        id: ["734"],
        autoHide: true,
        name: "Place Albert Pelerin",
        city: "MONTEBOURG",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S14" },
          pages: [[{ text: "MONTEBOURG" }, { text: "PLACE ALBERT PELERIN" }]],
        },
      },
    ],
  },
  {
    id: "CAPCOT:SCO1",
    name: "D1",
    colors: { background: "#e5362a", text: "#FFFFFF" },
    destinations: [
      {
        id: ["200", "201", "202", "204", "205"],
        autoHide: true,
        name: "Lycées Tocqueville / Sauxmarais",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [[{ text: "LYCEES" }, { text: "TOCQUEVILLE/SAUXMARAIS" }]],
        },
      },
      {
        id: ["206"],
        autoHide: true,
        name: "Vindits (via Digard)",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [[{ text: "VINDITS" }, { text: "via Digard" }]],
        },
      },
      {
        id: ["207"],
        autoHide: true,
        name: "Bocage",
        city: "LA GLACERIE",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ text: "LE BOCAGE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:SCO2",
    name: "D2",
    colors: { background: "#e5362a", text: "#FFFFFF" },
    destinations: [
      {
        id: ["210", "211", "213"],
        autoHide: true,
        name: "Millet-IUT",
        city: "CHERBOURG-EN-COTENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [{ text: "MILLET-IUT" }],
        },
      },
      {
        id: ["214"],
        autoHide: true,
        name: "Mairie (par la Marche)",
        city: "QUERQUEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [[{ text: "QUERQUEVILLE MAIRIE" }, { text: "par la Marche" }]],
        },
      },
      {
        id: ["215"],
        autoHide: true,
        name: "Albert Thomas",
        city: "ÉQUEURDREVILLE-HAINNEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [{ text: "ALBERT THOMAS" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:SCO3",
    name: "D3",
    colors: { background: "#e5362a", text: "#FFFFFF" },
    destinations: [
      {
        id: ["223"],
        autoHide: true,
        name: "Hameau Pharès",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D3" },
          pages: [{ font: "1510N2E1", text: "HAMEAU PHARES" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:SCO4",
    name: "D4",
    colors: { background: "#e5362a", text: "#FFFFFF" },
    destinations: [
      {
        id: ["230"],
        autoHide: true,
        name: "Collège Jules Ferry",
        city: "QUERQUEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D4" },
          pages: [{ font: "1510N2E1", text: "COLLEGE FERRY" }],
        },
      },
      {
        id: ["231"],
        autoHide: true,
        name: "Terasses",
        city: "ÉQUEURDREVILLE-HAINNEVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D4" },
          pages: [{ text: "TERRASSES" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT:SCO6",
    name: "SCO6",
    colors: { background: "#e5362a", text: "#FFFFFF" },
    destinations: [
      {
        id: ["270"],
        autoHide: true,
        name: "Collège Diderot",
        city: "TOURLAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D6" },
          pages: [{ font: "1510N2E1", text: "COLLEGE DIDEROT" }],
        },
      },
      {
        id: ["271"],
        autoHide: true,
        name: "Églantine Château (via Becquet)",
        city: "LA GLACERIE",
        girouette: {
          routeNumber: { backgroundColor: "#e5362a", textColor: "#FFFFFF", outlineColor: "#000000", text: "D6" },
          pages: [[{ text: "EGLANTINE CHATEAU" }, { text: "via Becquet" }]],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "cap-cotentin",
  name: "Cap Cotentin – le Cotentin",
  routes: capCotentinRoutes,
  color: "#eb5c4a",
  textColor: "#ffffff",
};

export default network;
