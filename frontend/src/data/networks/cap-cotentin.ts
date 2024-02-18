import { Route } from "~/@types";

const capCotentinRoutes: Route[] = [
  {
    id: "CAPCOT-01",
    mapOnly: true,
    name: "1",
    colors: { background: "#EB5D4D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SCHUMAN-DELAVILLE", "SCHUMAN DELAVILLE"],
        name: "SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#EB5D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["LES FOURCHES"],
        name: "LES FOURCHES",
        girouette: {
          routeNumber: { backgroundColor: "#EB5D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "LES FOURCHES" }],
        },
      },
      {
        id: ["AMONT QUENTIN"],
        name: "AMONT QUENTIN",
        girouette: {
          routeNumber: { backgroundColor: "#EB5D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "AMONT QUENTIN" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-02",
    mapOnly: true,
    name: "2",
    colors: { background: "#E50063", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COLLIGNON"],
        name: "COLLIGNON",
        girouette: {
          routeNumber: { backgroundColor: "#E50063", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "COLLIGNON" }],
        },
      },
      {
        id: ["DIGARD"],
        name: "DIGARD",
        girouette: {
          routeNumber: { backgroundColor: "#E50063", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "DIGARD" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-03",
    mapOnly: true,
    name: "3",
    colors: { background: "#9E5049", text: "#FFFFFF" },
    destinations: [
      {
        id: ["EGLANTINE CHATEAU"],
        name: "EGLANTINE CHATEAU",
        girouette: {
          routeNumber: { backgroundColor: "#9E5049", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "EGLANTINE CHATEAU" }],
        },
      },
      {
        id: ["BRECOURT"],
        name: "BRECOURT",
        girouette: {
          routeNumber: { backgroundColor: "#9E5049", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "BRECOURT" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-04",
    mapOnly: true,
    name: "4",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LA GLACERIE MARETTES"],
        name: "LA GLACERIE MARETTES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ font: "1508C2E1", text: "LA GLACERIE MARETTES" }],
        },
      },
      {
        id: ["SCHUMAN"],
        name: "SCHUMAN",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "SCHUMAN" }],
        },
      },
      {
        id: ["AMFREVILLE"],
        name: "AMFREVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "AMFREVILLE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-05",
    mapOnly: true,
    name: "5",
    colors: { background: "#F8DA41", text: "#000000" },
    destinations: [
      {
        id: ["FLAMANDS"],
        name: "FLAMANDS",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ text: "FLAMANDS" }],
        },
      },
      {
        id: ["AMFREVILLE"],
        name: "AMFREVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ text: "AMFREVILLE" }],
        },
      },
      {
        id: ["QUERQUEVILLE MAIRIE"],
        name: "QUERQUEVILLE MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ font: "1508C2E1", text: "QUERQUEVILLE MAIRIE" }],
        },
      },
      {
        id: ["CHANTIER-ARSENAL"],
        name: "CHANTIER-ARSENAL",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ font: "1510N2E1", text: "CHANTIER-ARSENAL" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-06",
    mapOnly: true,
    name: "6",
    colors: { background: "#F5A681", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SAUXMARAIS"],
        name: "SAUXMARAIS",
        girouette: {
          routeNumber: { backgroundColor: "#F5A681", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "SAUXMARAIS" }],
        },
      },
      {
        id: ["POLYCLINIQUE"],
        name: "POLYCLINIQUE",
        girouette: {
          routeNumber: { backgroundColor: "#F5A681", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "POLYCLINIQUE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-07",
    mapOnly: true,
    name: "7",
    colors: { background: "#F195BF", text: "#FFFFFF" },
    destinations: [
      {
        id: ["SCHUMAN-DELAVILLE"],
        name: "SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F195BF", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["COLLEGE ZOLA"],
        name: "COLLEGE ZOLA",
        girouette: {
          routeNumber: { backgroundColor: "#F195BF", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ text: "COLLEGE ZOLA" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-A",
    mapOnly: true,
    name: "A",
    colors: { background: "#58529E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#58529E", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["CAP DE LA HAGUE"],
        name: "CAP DE LA HAGUE",
        girouette: {
          routeNumber: { backgroundColor: "#58529E", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "CAP DE LA HAGUE" }],
        },
      },
      {
        id: ["LA HAGUE ORANO"],
        name: "LA HAGUE ORANO",
        girouette: {
          routeNumber: { backgroundColor: "#58529E", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1510N2E1", text: "LA HAGUE ORANO" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-B",
    mapOnly: true,
    name: "B",
    colors: { background: "#1EB8D1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#1EB8D1", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["SIOUVILLE PLACE DES TAMARIS"],
        name: "SIOUVILLE PLACE DES TAMARIS",
        girouette: {
          routeNumber: { backgroundColor: "#1EB8D1", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "SIOUVILLE" }, { font: "1508C2E1", textSpacing: 3, text: "PLACE DES TAMARIS" }],
        },
      },
      {
        id: ["FLAMANVILLE EPR/CNPE ENTREE NORD"],
        name: "FLAMANVILLE EPR/CNPE ENTREE NORD",
        girouette: {
          routeNumber: { backgroundColor: "#1EB8D1", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "FLAMANVILLE" }, { font: "1508C2E1", text: "EPR/CNPE ENTREE NORD" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-C",
    mapOnly: true,
    name: "C",
    colors: { background: "#86B5E2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["VALOGNES GARE SNCF"],
        name: "VALOGNES GARE SNCF",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "VALOGNES GARE SNCF" }],
        },
      },
      {
        id: ["BARFLEUR MAIRIE"],
        name: "BARFLEUR MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "BARFLEUR MAIRIE" }],
        },
      },
      {
        id: ["SAINT PIERRE EGLISE PLACE CENTRALE"],
        name: "SAINT PIERRE EGLISE PLACE CENTRALE",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", text: "SAINT-PIERRE-EGLISE" }, { text: "PLACE CENTRALE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-D",
    mapOnly: true,
    name: "D",
    colors: { background: "#107974", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#107974", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["MONTEBOURG PLACE ALBERT PELERIN"],
        name: "MONTEBOURG PLACE ALBERT PELERIN",
        girouette: {
          routeNumber: { backgroundColor: "#107974", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [{ text: "MONTEBOURG" }, { font: "1508C2E1", text: "PLACE ALBERT PELERIN" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-E",
    mapOnly: true,
    name: "E",
    colors: { background: "#47B7A2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#47B7A2", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["BRICQUEBEC EN COTENTIN COLLEGE"],
        name: "BRICQUEBEC EN COTENTIN COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#47B7A2", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [{ text: ["BRICQUEBEC EN COTENTIN", "COLLEGE"] }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-F",
    mapOnly: true,
    name: "F",
    colors: { background: "#9774B1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LES PIEUX PLACE DE LA LANDE"],
        name: "LES PIEUX PLACE DE LA LANDE",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [{ text: "LES PIEUX" }, { font: "1508C2E1", textSpacing: 3, text: "PLACE DE LA LANDE" }],
        },
      },
      {
        id: ["VALOGNES PLACE FELIX BUHOT"],
        name: "VALOGNES PLACE FELIX BUHOT",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [{ text: "VALOGNES" }, { font: "1508C2E1", textSpacing: 3, text: "PLACE FELIX BUHOT" }],
        },
      },
      {
        id: ["BARNEVILLE CARTERET MAIRIE"],
        name: "BARNEVILLE CARTERET MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [{ text: "BARNEVILLE" }, { font: "1508C2E1", textSpacing: 3, text: "CARTERET MAIRIE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-G",
    mapOnly: true,
    name: "G",
    colors: { background: "#C2DDB3", text: "#000000" },
    destinations: [
      {
        id: ["VALOGNES Z.A. ARMANVILLE"],
        name: "VALOGNES Z.A. ARMANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#C2DDB3", textColor: "#000000", text: "G" },
          pages: [{ text: "VALOGNES" }, { font: "1508C2E1", textSpacing: 3, text: "Z.A. ARMANVILLE" }],
        },
      },
      {
        id: ["PORTBAIL RUE LECHEVALIER"],
        name: "PORTBAIL RUE LECHEVALIER",
        girouette: {
          routeNumber: { backgroundColor: "#C2DDB3", textColor: "#000000", text: "G" },
          pages: [{ text: "PORTBAIL" }, { font: "1510N2E1", text: "RUE LECHEVALIER" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-N1",
    mapOnly: true,
    name: "N1",
    colors: { background: "#29235C", text: "#FFDE00" },
    destinations: [
      {
        id: ["EGLANTINE CHATEAU-LA GLACERIE"],
        name: "EGLANTINE CHATEAU-LA GLACERIE",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N1" },
          pages: [{ font: "1508C2E1", text: "EGLANTINE CHATEAU" }, { text: "LA GLACERIE" }],
        },
      },
      {
        id: ["HOTEL DE VILLE"],
        name: "HOTEL DE VILLE",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N1" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-N2",
    mapOnly: true,
    name: "N2",
    colors: { background: "#29235C", text: "#FFDE00" },
    destinations: [
      {
        id: ["HOTEL DE VILLE"],
        name: "HOTEL DE VILLE",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N2" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["LES MOURETS"],
        name: "LES MOURETS",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N2" },
          pages: [{ text: "LES MOURETS" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S1",
    mapOnly: true,
    name: "S1",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["BARNEVILLE CARTERET"],
        name: "BARNEVILLE CARTERET",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S1" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "BARNEVILLE-CARTERET" }],
        },
      },
      {
        id: ["BARNEVILLE CARTERET LE VALNOTTE"],
        name: "BARNEVILLE CARTERET LE VALNOTTE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S1" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "BARNEVILLE-CARTERET" }, { text: "LE VALNOTTE" }],
        },
      },
      {
        id: ["VALOGNES PLACE FELIX BUHOT"],
        name: "VALOGNES PLACE FELIX BUHOT",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S1" },
          pages: [{ text: "VALOGNES" }, { font: "1508C2E1", textSpacing: 3, text: "PLACE FELIX BUHOT" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S2",
    mapOnly: true,
    name: "S2",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["BRICQUEBEC EN COTENTIN COLLEGE"],
        name: "BRICQUEBEC EN COTENTIN COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S2" },
          pages: [{ text: ["BRICQUEBEC EN COTENTIN", "COLLEGE"] }],
        },
      },
      {
        id: ["SAINT SAUVEUR LE VICOMTE COLLEGE"],
        name: "SAINT SAUVEUR LE VICOMTE COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S2" },
          pages: [{ text: ["SAINT SAUVEUR LE VICOMTE", "COLLEGE"] }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S3",
    mapOnly: true,
    name: "S3",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["VALOGNES COLLEGE"],
        name: "VALOGNES COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S3" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "VALOGNES COLLEGE" }],
        },
      },
      {
        id: ["EMONDEVILLE LE COUP DE FREIN"],
        name: "EMONDEVILLE LE COUP DE FREIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S3" },
          pages: [{ text: "EMONDEVILLE" }, { font: "1508C2E1", text: "LE COUP DE FREIN" }],
        },
      },
      {
        id: ["QUINEVILLE LA POSTE"],
        name: "QUINEVILLE LA POSTE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S3" },
          pages: [{ font: "1508C2E1", text: "QUINEVILLE LA POSTE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S4",
    mapOnly: true,
    name: "S4",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN COLLEGE DIDEROT"],
        name: "CHERBOURG EN COTENTIN COLLEGE DIDEROT",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S4" },
          pages: [{ text: "CHERBOURG" }, { font: "1510N2E1", text: "COLLEGE DIDEROT" }],
        },
      },
      {
        id: ["CRASVILLE LE BAS"],
        name: "CRASVILLE LE BAS",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S4" },
          pages: [{ text: "CRASVILLE LE BAS" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S5",
    mapOnly: true,
    name: "S5",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN IUT"],
        name: "CHERBOURG EN COTENTIN IUT",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ font: "1510N2E1", text: "CHERBOURG IUT" }],
        },
      },
      {
        id: ["MONTFARVILLE MAIRIE"],
        name: "MONTFARVILLE MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ font: "1508C2E1", text: "MONTFARVILLE MAIRIE" }],
        },
      },
      {
        id: ["REVILLE EGLISE"],
        name: "REVILLE EGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ font: "1510N2E1", text: "REVILLE EGLISE" }],
        },
      },
      {
        id: ["SAINT PIERRE EGLISE PLACE CENTRALE"],
        name: "SAINT PIERRE EGLISE PLACE CENTRALE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ font: "1508C2E1", text: "SAINT-PIERRE-EGLISE" }, { text: "PLACE CENTRALE" }],
        },
      },
      {
        id: ["CHERBOURG EN COTENTIN LYCEE DOUCET"],
        name: "CHERBOURG EN COTENTIN LYCEE DOUCET",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ text: "CHERBOURG" }, { text: "LYCEE DOUCET" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S6",
    mapOnly: true,
    name: "S6",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN QUAI COLLINS"],
        name: "CHERBOURG EN COTENTIN QUAI COLLINS",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S6" },
          pages: [{ text: "CHERBOURG" }, { text: "QUAI COLLINS" }],
        },
      },
      {
        id: ["GATTEVILLE LE PHARE RTE DU VAL DE SAIRE"],
        name: "GATTEVILLE LE PHARE RTE DU VAL DE SAIRE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S6" },
          pages: [{ font: "1508C2E1", text: "GATTEVILLE LE PHARE" }, { text: ["ROUTE DU", "VAL DE SAIRE"] }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S7",
    mapOnly: true,
    name: "S7",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["SAINT PIERRE EGLISE ECOLE ELEMENTAIRE"],
        name: "SAINT PIERRE EGLISE ECOLE ELEMENTAIRE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S7" },
          pages: [
            { font: "1508C2E1", text: "SAINT-PIERRE-EGLISE" },
            { font: "1508C2E1", textSpacing: 3, text: "ECOLE ELEMENTAIRE" },
          ],
        },
      },
      {
        id: ["CLITOURPS EGLISE"],
        name: "CLITOURPS EGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S7" },
          pages: [{ font: "1510N2E1", text: "CLITOURPS EGLISE" }],
        },
      },
      {
        id: ["SAINT PIERRE EGLISE COLLEGE"],
        name: "SAINT PIERRE EGLISE COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S7" },
          pages: [{ font: "1508C2E1", text: "SAINT-PIERRE-EGLISE" }, { text: "COLLEGE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S8",
    mapOnly: true,
    name: "S8",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["SAINT PIERRE EGLISE ECOLE ELEMENTAIRE"],
        name: "SAINT PIERRE EGLISE ECOLE ELEMENTAIRE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S8" },
          pages: [
            { font: "1508C2E1", text: "SAINT-PIERRE-EGLISE" },
            { font: "1508C2E1", textSpacing: 3, text: "ECOLE ELEMENTAIRE" },
          ],
        },
      },
      {
        id: ["LE THEIL LES ECOLES"],
        name: "LE THEIL LES ECOLES",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S8" },
          pages: [{ text: "LE THEIL" }, { text: "LES ECOLES" }],
        },
      },
      {
        id: ["SAINT PIERRE EGLISE COLLEGE"],
        name: "SAINT PIERRE EGLISE COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S8" },
          pages: [{ font: "1508C2E1", text: "SAINT-PIERRE-EGLISE" }, { text: "COLLEGE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S9",
    mapOnly: true,
    name: "S9",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["BRICQUEBEC EN COTENTIN COLLEGE"],
        name: "BRICQUEBEC EN COTENTIN COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S9" },
          pages: [{ text: ["BRICQUEBEC EN COTENTIN", "COLLEGE"] }],
        },
      },
      {
        id: ["FIERVILLE LES MINES LA PLACE"],
        name: "FIERVILLE LES MINES LA PLACE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S9" },
          pages: [{ font: "1508C2E1", text: "FIERVILLE LES MINES" }, { text: "LA PLACE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S10",
    mapOnly: true,
    name: "S10",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN LYCEE DOUCET"],
        name: "CHERBOURG EN COTENTIN LYCEE DOUCET",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S10" },
          pages: [{ text: "CHERBOURG" }, { text: "LYCEE DOUCET" }],
        },
      },
      {
        id: ["GROSVILLE MAIRIE"],
        name: "GROSVILLE MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S10" },
          pages: [{ text: "GROSVILLE" }, { text: "MAIRIE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S11",
    mapOnly: true,
    name: "S11",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["LA HAGUE COLLEGE"],
        name: "LA HAGUE COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S11" },
          pages: [{ text: "LA HAGUE" }, { text: "COLLEGE" }],
        },
      },
      {
        id: ["BIVILLE LA CROIX FRIMOT"],
        name: "BIVILLE LA CROIX FRIMOT",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S11" },
          pages: [{ text: "BIVILLE" }, { font: "1508C2E1", textSpacing: 3, text: "LA CROIX FRIMOT" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S12",
    mapOnly: true,
    name: "S12",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["BRICQUEBEC EN COTENTIN COLLEGE"],
        name: "BRICQUEBEC EN COTENTIN COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S12" },
          pages: [{ text: ["BRICQUEBEC EN COTENTIN", "COLLEGE"] }],
        },
      },
      {
        id: ["HELLEVILLE ECOLE"],
        name: "HELLEVILLE ECOLE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S12" },
          pages: [{ text: "HELLEVILLE" }, { text: "ECOLE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S13",
    mapOnly: true,
    name: "S13",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN SCHUMAN"],
        name: "CHERBOURG EN COTENTIN SCHUMAN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S13" },
          pages: [{ text: "CHERBOURG" }, { text: "SCHUMAN" }],
        },
      },
      {
        id: ["PORTBAIL RUE LECHEVALIER"],
        name: "PORTBAIL RUE LECHEVALIER",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S13" },
          pages: [{ text: "PORTBAIL" }, { text: "RUE LECHEVALIER" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-S14",
    mapOnly: true,
    name: "S14",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: ["CHERBOURG EN COTENTIN SCHUMAN"],
        name: "CHERBOURG EN COTENTIN SCHUMAN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S14" },
          pages: [{ text: "CHERBOURG" }, { text: "SCHUMAN" }],
        },
      },
      {
        id: ["MONTEBOURG PLACE ALBERT PELERIN"],
        name: "MONTEBOURG PLACE ALBERT PELERIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S14" },
          pages: [{ text: "MONTEBOURG" }, { font: "1508C2E1", text: "PLACE ALBERT PELERIN" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-SCO1",
    mapOnly: true,
    name: "D1",
    colors: { background: "#D34536", text: "#FFFFFF" },
    destinations: [
      {
        id: ["TOCQUEVILLE/SAUXMARAIS"],
        name: "TOCQUEVILLE/SAUXMARAIS",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ font: "1508C2E1", text: "TOCQUEVILLE/SAUXMARAIS" }],
        },
      },
      {
        id: ["VINDITS VIA DIGARD"],
        name: "VINDITS VIA DIGARD",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ font: "1508C2E1", text: "VINDITS VIA DIGARD" }],
        },
      },
      {
        id: ["BOCAGE"],
        name: "BOCAGE",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ text: "BOCAGE" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-SCO2",
    mapOnly: true,
    name: "D2",
    colors: { background: "#D34536", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MILLET/IUT"],
        name: "MILLET/IUT",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [{ text: "MILLET/IUT" }],
        },
      },
      {
        id: ["QUERQUEVILLE MAIRIE PAR LA MARCHE"],
        name: "QUERQUEVILLE MAIRIE PAR LA MARCHE",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [{ text: "QUERQUEVILLE" }, { font: "1508C2E1", text: "MAIRIE PAR LA MARCHE" }],
        },
      },
      {
        id: ["A. THOMAS"],
        name: "A. THOMAS",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [{ text: "A. THOMAS" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-SCO3",
    mapOnly: true,
    name: "D3",
    colors: { background: "#D34536", text: "#FFFFFF" },
    destinations: [
      {
        id: ["HAMEAU PHARES"],
        name: "HAMEAU PHARES",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D3" },
          pages: [{ font: "1510N2E1", text: "HAMEAU PHARES" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-SCO4",
    mapOnly: true,
    name: "D4",
    colors: { background: "#D34536", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COLLEGE FERRY"],
        name: "COLLEGE FERRY",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D4" },
          pages: [{ font: "1510N2E1", text: "COLLEGE FERRY" }],
        },
      },
      {
        id: ["TERRASSES"],
        name: "TERRASSES",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D4" },
          pages: [{ text: "TERRASSES" }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-SCO6",
    mapOnly: true,
    name: "SCO6",
    colors: { background: "#D34536", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COLLEGE DIDEROT"],
        name: "COLLEGE DIDEROT",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D6" },
          pages: [{ font: "1510N2E1", text: "COLLEGE DIDEROT" }],
        },
      },
      {
        id: ["EGLANTINE CHATEAU VIA BECQUET"],
        name: "EGLANTINE CHATEAU VIA BECQUET",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D6" },
          pages: [{ text: ["EGLANTINE CHATEAU", "VIA BECQUET"] }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-SCO6",
    mapOnly: true,
    name: "SCO6",
    colors: { background: "#D34536", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COLLEGE DIDEROT"],
        name: "COLLEGE DIDEROT",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D6" },
          pages: [{ font: "1510N2E1", text: "COLLEGE DIDEROT" }],
        },
      },
      {
        id: ["EGLANTINE CHATEAU VIA BECQUET"],
        name: "EGLANTINE CHATEAU VIA BECQUET",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D6" },
          pages: [{ text: ["EGLANTINE CHATEAU", "VIA BECQUET"] }],
        },
      },
    ],
  },
  {
    id: "CAPCOT-822",
    mapOnly: true,
    noCartridge: true,
    name: "Cherbourg / Rennes",
    colors: { background: "#FFFFFF", text: "#000000" },
    destinations: [
      {
        id: [""],
        name: "RENNES / CHERBOURG",
        girouette: {
          routeNumber: { font: "1510N2E1", textColor: "#FF6A00", text: "REN" },
          pages: [{ font: "1510N2E1", text: "NES / CHERBOURG" }],
        },
      },
    ],
  },
];

export default capCotentinRoutes;
