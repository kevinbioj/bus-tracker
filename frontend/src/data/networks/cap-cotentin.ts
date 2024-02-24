import { Route } from "~/@types";

const capCotentinRoutes: Route[] = [
  {
    id: "CAPCOT-01",
    mapOnly: true,
    name: "1",
    colors: { background: "#EB5D4D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["11", "17", "19"],
        name: "SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#EB5D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["10", "16"],
        name: "LES FOURCHES",
        girouette: {
          routeNumber: { backgroundColor: "#EB5D4D", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "LES FOURCHES" }],
        },
      },
      {
        id: ["15"],
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
        id: ["23"],
        name: "COLLIGNON",
        girouette: {
          routeNumber: { backgroundColor: "#E50063", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "COLLIGNON" }],
        },
      },
      {
        id: ["21"],
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
        id: ["30"],
        name: "EGLANTINE CHATEAU",
        girouette: {
          routeNumber: { backgroundColor: "#9E5049", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "EGLANTINE CHATEAU" }],
        },
      },
      {
        id: ["31"],
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
        id: ["46"],
        name: "LA GLACERIE MARETTES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ font: "1508C2E1", text: "LA GLACERIE MARETTES" }],
        },
      },
      {
        id: ["44"],
        name: "SCHUMAN",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "SCHUMAN" }],
        },
      },
      {
        id: ["42"],
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
        id: ["50"],
        name: "FLAMANDS",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ text: "FLAMANDS" }],
        },
      },
      {
        id: ["52"],
        name: "AMFREVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ text: "AMFREVILLE" }],
        },
      },
      {
        id: ["55"],
        name: "QUERQUEVILLE MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#F8DA41", textColor: "#000000", text: "5" },
          pages: [{ font: "1508C2E1", text: "QUERQUEVILLE MAIRIE" }],
        },
      },
      {
        id: ["51"],
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
        id: ["61"],
        name: "SAUXMARAIS",
        girouette: {
          routeNumber: { backgroundColor: "#F5A681", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "SAUXMARAIS" }],
        },
      },
      {
        id: ["60"],
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
        id: ["70"],
        name: "SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#F195BF", textColor: "#FFFFFF", outlineColor: "#000000", text: "7" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["71"],
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
        id: ["606"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#58529E", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["605"],
        name: "CAP DE LA HAGUE",
        girouette: {
          routeNumber: { backgroundColor: "#58529E", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "CAP DE LA HAGUE" }],
        },
      },
      {
        id: ["603", "604"],
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
        id: ["615", "616"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#1EB8D1", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["613"],
        name: "SIOUVILLE PLACE DES TAMARIS",
        girouette: {
          routeNumber: { backgroundColor: "#1EB8D1", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "SIOUVILLE" }, { font: "1508C2E1", textSpacing: 3, text: "PLACE DES TAMARIS" }],
        },
      },
      {
        id: ["614"],
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
        id: ["625"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["622"],
        name: "VALOGNES GARE SNCF",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "VALOGNES GARE SNCF" }],
        },
      },
      {
        id: ["624"],
        name: "BARFLEUR MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#86B5E2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "BARFLEUR MAIRIE" }],
        },
      },
      {
        id: ["623"],
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
        id: ["633"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#107974", textColor: "#FFFFFF", outlineColor: "#000000", text: "D" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["634"],
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
        id: ["643"],
        name: "CHERBOURG EN COTENTIN SCHUMAN-DELAVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#47B7A2", textColor: "#FFFFFF", outlineColor: "#000000", text: "E" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "SCHUMAN-DELAVILLE" }],
        },
      },
      {
        id: ["644"],
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
        id: ["653"],
        name: "LES PIEUX PLACE DE LA LANDE",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [{ text: "LES PIEUX" }, { font: "1508C2E1", textSpacing: 3, text: "PLACE DE LA LANDE" }],
        },
      },
      {
        id: ["654"],
        name: "VALOGNES PLACE FELIX BUHOT",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [{ text: "VALOGNES" }, { font: "1508C2E1", textSpacing: 3, text: "PLACE FELIX BUHOT" }],
        },
      },
      {
        id: ["655"],
        name: "BARNEVILLE CARTERET MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#9774B1", textColor: "#FFFFFF", outlineColor: "#000000", text: "F" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "BARNEVILLE-CARTERET MAIRIE" }],
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
        id: ["663"],
        name: "VALOGNES Z.A. ARMANVILLE",
        girouette: {
          routeNumber: { backgroundColor: "#C2DDB3", textColor: "#000000", text: "G" },
          pages: [{ text: "VALOGNES" }, { font: "1508C2E1", textSpacing: 3, text: "Z.A. ARMANVILLE" }],
        },
      },
      {
        id: ["664"],
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
        id: ["401"],
        name: "EGLANTINE CHATEAU-LA GLACERIE",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N1" },
          pages: [{ font: "1508C2E1", text: "EGLANTINE CHATEAU" }, { text: "LA GLACERIE" }],
        },
      },
      {
        id: ["400"],
        name: "SCHUMAN",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N1" },
          pages: [{ text: "SCHUMAN" }],
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
        id: ["400"],
        name: "HOTEL DE VILLE",
        girouette: {
          routeNumber: { backgroundColor: "#29235C", textColor: "#FFDE00", outlineColor: "#000000", text: "N2" },
          pages: [{ text: "HOTEL DE VILLE" }],
        },
      },
      {
        id: ["402"],
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
        id: ["702"],
        name: "BARNEVILLE CARTERET LE VALNOTTE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S1" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "BARNEVILLE-CARTERET" }, { text: "LE VALNOTTE" }],
        },
      },
      {
        id: ["701"],
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
        id: ["703"],
        name: "BRICQUEBEC EN COTENTIN COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S2" },
          pages: [{ text: ["BRICQUEBEC EN COTENTIN", "COLLEGE"] }],
        },
      },
      {
        id: ["704"],
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
        id: ["705"],
        name: "VALOGNES COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S3" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "VALOGNES COLLEGE" }],
        },
      },
      {
        id: ["706"],
        name: "EMONDEVILLE LE COUP DE FREIN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S3" },
          pages: [{ text: "EMONDEVILLE" }, { font: "1508C2E1", text: "LE COUP DE FREIN" }],
        },
      },
      {
        id: ["707"],
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
        id: ["708"],
        name: "CHERBOURG EN COTENTIN COLLEGE DIDEROT",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S4" },
          pages: [{ text: "CHERBOURG" }, { font: "1510N2E1", text: "COLLEGE DIDEROT" }],
        },
      },
      {
        id: ["709"],
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
        id: ["710"],
        name: "CAMPUS-ARAGON",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ text: "CHERBOURG" }, { text: "CAMPUS-ARAGON" }],
        },
      },
      {
        id: ["714"],
        name: "MONTFARVILLE MAIRIE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ font: "1508C2E1", text: "MONTFARVILLE MAIRIE" }],
        },
      },
      {
        id: ["713"],
        name: "REVILLE EGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ font: "1510N2E1", text: "REVILLE EGLISE" }],
        },
      },
      {
        id: ["712"],
        name: "SAINT PIERRE EGLISE PLACE CENTRALE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ font: "1508C2E1", text: "SAINT-PIERRE-EGLISE" }, { text: "PLACE CENTRALE" }],
        },
      },
      {
        id: ["711"],
        name: "CHERBOURG EN COTENTIN HUIT MAI",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S5" },
          pages: [{ text: "CHERBOURG" }, { text: "HUIT MAI" }],
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
        id: ["715"],
        name: "CHERBOURG EN COTENTIN QUAI COLLINS",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S6" },
          pages: [{ text: "CHERBOURG" }, { text: "QUAI COLLINS" }],
        },
      },
      {
        id: ["716"],
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
        id: ["717"],
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
        id: ["719"],
        name: "CLITOURPS EGLISE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S7" },
          pages: [{ font: "1510N2E1", text: "CLITOURPS EGLISE" }],
        },
      },
      {
        id: ["718"],
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
        id: ["720"],
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
        id: ["722"],
        name: "LE THEIL LES ECOLES",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S8" },
          pages: [{ text: "LE THEIL" }, { text: "LES ECOLES" }],
        },
      },
      {
        id: ["721"],
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
        id: ["723"],
        name: "BRICQUEBEC EN COTENTIN COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S9" },
          pages: [{ text: ["BRICQUEBEC EN COTENTIN", "COLLEGE"] }],
        },
      },
      {
        id: ["724"],
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
        id: ["725"],
        name: "CHERBOURG EN COTENTIN HUIT MAI",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S10" },
          pages: [{ text: "CHERBOURG" }, { text: "HUIT MAI" }],
        },
      },
      {
        id: ["726"],
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
        id: ["727"],
        name: "LA HAGUE COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S11" },
          pages: [{ text: "LA HAGUE" }, { text: "COLLEGE" }],
        },
      },
      {
        id: ["728"],
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
        id: ["729"],
        name: "BRICQUEBEC EN COTENTIN COLLEGE",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S12" },
          pages: [{ text: ["BRICQUEBEC EN COTENTIN", "COLLEGE"] }],
        },
      },
      {
        id: ["730"],
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
        id: ["731"],
        name: "CHERBOURG EN COTENTIN SCHUMAN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S13" },
          pages: [{ text: "CHERBOURG" }, { text: "SCHUMAN" }],
        },
      },
      {
        id: ["732"],
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
        id: ["733"],
        name: "CHERBOURG EN COTENTIN SCHUMAN",
        girouette: {
          routeNumber: { backgroundColor: "#FFFFFF", textColor: "#000000", text: "S14" },
          pages: [{ text: "CHERBOURG" }, { text: "SCHUMAN" }],
        },
      },
      {
        id: ["734"],
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
        id: ["200", "201", "202", "204", "205"],
        name: "TOCQUEVILLE/SAUXMARAIS",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ font: "1508C2E1", text: "TOCQUEVILLE/SAUXMARAIS" }],
        },
      },
      {
        id: ["206"],
        name: "VINDITS VIA DIGARD",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ font: "1508C2E1", text: "VINDITS VIA DIGARD" }],
        },
      },
      {
        id: ["207"],
        name: "BOCAGE",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D1" },
          pages: [{ text: "LE BOCAGE" }],
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
        id: ["210", "211", "213"],
        name: "MILLET/IUT",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [{ text: "MILLET/IUT" }],
        },
      },
      {
        id: ["214"],
        name: "QUERQUEVILLE MAIRIE PAR LA MARCHE",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [{ text: "QUERQUEVILLE" }, { font: "1508C2E1", text: "MAIRIE PAR LA MARCHE" }],
        },
      },
      {
        id: ["215"],
        name: "ALBERT THOMAS",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D2" },
          pages: [{ text: "ALBERT THOMAS" }],
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
        id: ["223"],
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
        id: ["230"],
        name: "COLLEGE FERRY",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D4" },
          pages: [{ font: "1510N2E1", text: "COLLEGE FERRY" }],
        },
      },
      {
        id: ["231"],
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
        id: ["270"],
        name: "COLLEGE DIDEROT",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D6" },
          pages: [{ font: "1510N2E1", text: "COLLEGE DIDEROT" }],
        },
      },
      {
        id: ["271"],
        name: "EGLANTINE CHATEAU VIA BECQUET",
        girouette: {
          routeNumber: { backgroundColor: "#D34536", textColor: "#FFFFFF", outlineColor: "#000000", text: "D6" },
          pages: [{ text: ["EGLANTINE CHATEAU", "VIA BECQUET"] }],
        },
      },
    ],
  },
];

export default capCotentinRoutes;
