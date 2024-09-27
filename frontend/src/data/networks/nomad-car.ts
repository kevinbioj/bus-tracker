import { Network, Route } from "~/@types";

const nomadCar: Route[] = [
  {
    id: "NOMAD:NAV",
    routeIds: ["NOMAD:NAV", "NOMAD:ATOUMOD040:Line:1010148:LOC"],
    name: "NAV",
    colors: { background: "#402673", text: "#F49517" },
    destinations: [
      {
        id: ["D-DAY COURSEULLES-SUR-MER / GRANDCAMP-MAISY", "D-DAY PORT-EN-BESSIN-HUPPAIN / GRANDCAMP-MAISY"],
        name: "Grandcamp-Maisy",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            font: "1310C2E1",
            backgroundColor: "#402673",
            textColor: "#F49517",
            text: "NAV",
            outlineColor: "#000000",
          },
          pages: [[{ text: "NAVETTE D-DAY" }, { text: "GRANDCAMP-MAISY" }]],
        },
      },
      {
        id: ["D-DAY PORT-EN-BESSIN-HUPPAIN / COLLEVILLE-SUR-MER"],
        autoHide: true,
        name: "Colleville-sur-Mer",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            font: "1310C2E1",
            backgroundColor: "#402673",
            textColor: "#F49517",
            text: "NAV",
            outlineColor: "#000000",
          },
          pages: [[{ text: "NAVETTE D-DAY" }, { text: "COLLEVILLE-SUR-MER" }]],
        },
      },
      {
        id: ["D-DAY GRANDCAMP-MAISY / PORT-EN-BESSIN-HUPPAIN", "D-DAY COURSEULLES-SUR-MER / PORT-EN-BESSIN-HUPPAIN"],
        autoHide: true,
        name: "Port-en-Bessin-Huppain",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            font: "1310C2E1",
            backgroundColor: "#402673",
            textColor: "#F49517",
            text: "NAV",
            outlineColor: "#000000",
          },
          pages: [[{ text: "NAVETTE D-DAY" }, { text: "PORT-EN-BESSIN-HUPPAIN" }]],
        },
      },
      {
        id: ["D-DAY GRANDCAMP-MAISY / COURSEULLES-SUR-MER", "D-DAY PORT-EN-BESSIN-HUPPAIN / COURSEULLES-SUR-MER"],
        name: "Courseulles-sur-Mer",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            font: "1310C2E1",
            backgroundColor: "#402673",
            textColor: "#F49517",
            text: "NAV",
            outlineColor: "#000000",
          },
          pages: [[{ text: "NAVETTE D-DAY" }, { text: "COURSEULLES-SUR-MER" }]],
        },
      },
    ],
  },
  {
    id: "NOMAD:112",
    routeIds: ["NOMAD:112", "NOMAD:ATOUMOD040:Line:1004452:LOC"],
    noCartridge: true,
    name: "112",
    colors: { background: "#0080c5", text: "#ffffff" },
    destinations: [
      {
        id: ["TOUQUES / DEAUVILLE"],
        name: "Deauville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0080c5",
            textColor: "#ffffff",
            text: "112",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["DEAUVILLE / TOUQUES"],
        name: "Touques",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0080c5",
            textColor: "#ffffff",
            text: "112",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TOUQUES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:113",
    routeIds: ["NOMAD:113", "NOMAD:ATOUMOD040:Line:1004453:LOC"],
    noCartridge: true,
    name: "113",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["TOUQUES / DEAUVILLE"],
        name: "Deauville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "113",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["DEAUVILLE / TOUQUES"],
        name: "Touques",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "113",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TOUQUES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:114",
    routeIds: ["NOMAD:114", "NOMAD:ATOUMOD040:Line:1004454:LOC"],
    noCartridge: true,
    name: "114",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["CAEN / BAYEUX"],
        name: "Bayeux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["CAEN / PUTOT EN BESSIN"],
        autoHide: true,
        name: "Putot-en-Bessin",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PUTOT EN BESSIN" }],
        },
      },
      {
        id: ["CAEN / BRETTEVILLE L'ORGUEILLEUSE"],
        autoHide: true,
        name: "Bretteville l'Orgueilleuse",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BRETTEVILLE" }],
        },
      },
      {
        id: ["BAYEUX / CAEN", "PUTOT EN BESSIN / CAEN"],
        name: "Caen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:122",
    routeIds: ["NOMAD:122", "NOMAD:ATOUMOD040:Line:1004459:LOC"],
    noCartridge: true,
    name: "122",
    colors: { background: "#007dc5", text: "#ffffff" },
    destinations: [
      {
        id: ["LE HAVRE / CAEN EXPRESS"],
        name: "Caen (Express)",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "122",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN EXPRESS" }],
        },
      },
      {
        id: ["CAEN / LE HAVRE EXPRESS"],
        name: "Le Havre (Express)",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "122",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE EXPRESS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:124",
    routeIds: ["NOMAD:124", "NOMAD:ATOUMOD040:Line:1004467:LOC"],
    noCartridge: true,
    name: "124",
    colors: { background: "#808080", text: "#ffffff" },
    destinations: [
      {
        id: ["DEAUVILLE / DIVES-SUR-MER"],
        name: "Dives-sur-Mer",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#808080",
            textColor: "#ffffff",
            text: "124",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIVES-SUR-MER" }],
        },
      },
      {
        id: ["LISIEUX / DEAUVILLE", "DIVES-SUR-MER / DEAUVILLE"],
        name: "Deauville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#808080",
            textColor: "#ffffff",
            text: "124",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:201",
    routeIds: ["NOMAD:201", "NOMAD:ATOUMOD040:Line:1003275:LOC"],
    noCartridge: true,
    name: "201",
    colors: { background: "#df1614", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-OUEN-DE-THOUBERVILLE / ELBEUF", "HONGUEMARE-GUENOUVILLE / ELBEUF"],
        name: "Elbeuf-sur-Seine",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#df1614",
            textColor: "#ffffff",
            text: "201",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / HONGUEMARE-GUENOUVILLE"],
        name: "Honguemare-Guenouville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#df1614",
            textColor: "#ffffff",
            text: "201",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "HONGUEMARE-GUENOUVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:202",
    routeIds: ["NOMAD:202", "NOMAD:ATOUMOD040:Line:1003276:LOC"],
    noCartridge: true,
    name: "202",
    colors: { background: "#32b5b0", text: "#000000" },
    destinations: [
      {
        id: ["LOUVIERS / VERNON"],
        name: "Vernon",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#32b5b0",
            textColor: "#000000",
            text: "202",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["VERNON / LOUVIERS"],
        name: "Louviers",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#32b5b0",
            textColor: "#000000",
            text: "202",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:203",
    routeIds: ["NOMAD:203", "NOMAD:ATOUMOD040:Line:1003277:LOC"],
    noCartridge: true,
    name: "203",
    colors: { background: "#31a8df", text: "#000000" },
    destinations: [
      {
        id: ["LOUVIERS / ELBEUF"],
        name: "Elbeuf-sur-Seine",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#31a8df",
            textColor: "#000000",
            text: "203",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["SAINT-PIERRE-LÈS-ELBEUF / MARTOT"],
        autoHide: true,
        name: "Martot",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#31a8df",
            textColor: "#000000",
            text: "203",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MARTOT" }],
        },
      },
      {
        id: ["ELBEUF / LOUVIERS"],
        name: "Louviers",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#31a8df",
            textColor: "#000000",
            text: "203",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:204",
    routeIds: ["NOMAD:204", "NOMAD:ATOUMOD040:Line:1003278:LOC"],
    noCartridge: true,
    name: "204",
    colors: { background: "#e6ce08", text: "#000000" },
    destinations: [
      {
        id: [
          "BOURGTHEROULDE-INFREVILLE / ELBEUF",
          "LE BOSC-ROGER-EN-ROUMOIS / ELBEUF",
          "BOSGUERARD-DE-MARCOUVILLE / ELBEUF",
          "THENOUVILLE / ELBEUF",
          "BOISSEY-LE-CHATEL / ELBEUF",
        ],
        name: "Elbeuf-sur-Seine",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / THENOUVILLE"],
        autoHide: true,
        name: "Thénouville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "THENOUVILLE" }],
        },
      },
      {
        id: ["ELBEUF / LE BOSC-ROGER-EN-ROUMOIS", "ELBEUF / LE BOSC ROGER EN ROUMOIS"],
        autoHide: true,
        name: "Le Bosc-Roger-en-Roumois",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LE BOSC-ROGER-EN-ROUMOIS" }],
        },
      },
      {
        id: ["ELBEUF / BOSGUERARD-DE-MARCOUVILLE"],
        autoHide: true,
        name: "Bosguérard-de-Marcouville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOSGUERARD" }],
        },
      },
      {
        id: ["ELBEUF / BOURGTHEROULDE-INFREVILLE"],
        autoHide: true,
        name: "Bourgtheroulde-Infreville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOURGTHEROULDE" }],
        },
      },
      {
        id: ["ELBEUF / BOISSEY-LE-CHATEL"],
        name: "Boissey-le-Châtel",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOISSEY-LE-CHATEL" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:205",
    routeIds: ["NOMAD:205", "NOMAD:ATOUMOD040:Line:1003279:LOC"],
    noCartridge: true,
    name: "205",
    colors: { background: "#a31968", text: "#ffffff" },
    destinations: [
      {
        id: ["BEAUMONT-LE-ROGER / VAL-DE-REUIL", "LE NEUBOURG / VAL-DE-REUIL"],
        name: "Val-de-Reuil",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VAL-DE-REUIL" }],
        },
      },
      {
        id: ["VAL-DE-REUIL / LE NEUBOURG", "BEAUMONT-LE-ROGER / LE NEUBOURG"],
        autoHide: true,
        name: "Le Neubourg",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE NEUBOURG" }],
        },
      },
      {
        id: ["LE NEUBOURG / BEAUMONT-LE-ROGER", "VAL-DE-REUIL / BEAUMONT-LE-ROGER"],
        name: "Beaumont-le-Roger",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BEAUMONT-LE-ROGER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:206",
    routeIds: ["NOMAD:206", "NOMAD:ATOUMOD040:Line:1003280:LOC"],
    noCartridge: true,
    name: "206",
    colors: { background: "#835f34", text: "#ffffff" },
    destinations: [
      {
        id: ["ÉVREUX / GISORS", "LES ANDELYS / GISORS"],
        name: "Gisors",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["ÉVREUX / LES ANDELYS", "GISORS / LES ANDELYS"],
        autoHide: true,
        name: "Les Andelys",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
      {
        id: ["LES ANDELYS / ÉVREUX", "AUBEVOYE / ÉVREUX", "GISORS / ÉVREUX"],
        name: "Évreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:207",
    routeIds: ["NOMAD:207", "NOMAD:ATOUMOD040:Line:1003281:LOC"],
    noCartridge: true,
    name: "207",
    colors: { background: "#e9a255", text: "#000000" },
    destinations: [
      {
        id: ["TOURNY / VERNON", "LES ANDELYS / VERNON"],
        name: "Vernon",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["VERNON / GAILLON"],
        autoHide: true,
        name: "Gaillon",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GAILLON" }],
        },
      },
      {
        id: ["VERNON / LES ANDELYS"],
        autoHide: true,
        name: "Les Andelys",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
      {
        id: ["VERNON / TOURNY"],
        name: "Tourny",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TOURNY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:208",
    routeIds: ["NOMAD:208", "NOMAD:ATOUMOD040:Line:1003282:LOC"],
    noCartridge: true,
    name: "208",
    colors: { background: "#afca17", text: "#000000" },
    destinations: [
      {
        id: ["ÉTRÉPAGNY / VERNON", "GISORS / VERNON"],
        name: "Vernon",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#afca17",
            textColor: "#000000",
            text: "208",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["VERNON / GISORS"],
        autoHide: true,
        name: "Gisors",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#afca17",
            textColor: "#000000",
            text: "208",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["VERNON / ÉTRÉPAGNY"],
        name: "Étrépagny",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#afca17",
            textColor: "#000000",
            text: "208",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ETREPAGNY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:209",
    routeIds: ["NOMAD:209", "NOMAD:ATOUMOD040:Line:1003283:LOC"],
    noCartridge: true,
    name: "209",
    colors: { background: "#122e68", text: "#ffffff" },
    destinations: [
      {
        id: ["LES ANDELYS / AUBEVOYE"],
        name: "Aubevoye",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#122e68",
            textColor: "#ffffff",
            text: "209",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AUBEVOYE" }],
        },
      },
      {
        id: ["AUBEVOYE / LES ANDELYS"],
        name: "Les Andelys",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#122e68",
            textColor: "#ffffff",
            text: "209",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:210",
    routeIds: ["NOMAD:210", "NOMAD:ATOUMOD040:Line:1003284:LOC"],
    noCartridge: true,
    name: "210",
    colors: { background: "#eb3a4c", text: "#ffffff" },
    destinations: [
      {
        id: ["ÉVREUX / GISORS"],
        name: "Gisors",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#ffffff",
            text: "210",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["ÉVREUX / VERNON"],
        autoHide: true,
        name: "Vernon",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#ffffff",
            text: "210",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["ÉVREUX / CAILLOUET-ORGEVILLE"],
        autoHide: true,
        name: "Caillouet-Orgeville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#ffffff",
            text: "210",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "CAILLOUET-ORGEVILLE" }],
        },
      },
      {
        id: ["VERNON / ÉVREUX", "GISORS / ÉVREUX", "CAILLOUET-ORGEVILLE / EVREUX"],
        name: "Évreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#ffffff",
            text: "210",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:211",
    routeIds: ["NOMAD:211", "NOMAD:ATOUMOD040:Line:1003289:LOC"],
    noCartridge: true,
    name: "211",
    colors: { background: "#722f82", text: "#ffffff" },
    destinations: [
      {
        id: ["ÉVREUX / DREUX"],
        autoHide: true,
        name: "Dreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#722f82",
            textColor: "#ffffff",
            text: "211",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DREUX" }],
        },
      },
      {
        id: ["DREUX / ÉVREUX", "MESNIL-SUR-L'ESTRÉE / ÉVREUX"],
        autoHide: true,
        name: "Évreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#722f82",
            textColor: "#ffffff",
            text: "211",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:212",
    routeIds: ["NOMAD:212", "NOMAD:ATOUMOD040:Line:1003291:LOC"],
    noCartridge: true,
    name: "212",
    colors: { background: "#83d4ed", text: "#000000" },
    destinations: [
      {
        id: ["VERNEUIL-SUR-AVRE / ÉVREUX", "DAMVILLE / ÉVREUX", "BRETEUIL-SUR-ITON / ÉVREUX"],
        name: "Évreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["VERNEUIL-SUR-AVRE / CONDÉ-SUR-ITON"],
        autoHide: true,
        name: "Condé-sur-Iton",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CONDE-SUR-ITON" }],
        },
      },
      {
        id: ["VERNEUIL-SUR-AVRE / DAMVILLE", "ÉVREUX / DAMVILLE"],
        autoHide: true,
        name: "Damville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DAMVILLE" }],
        },
      },
      {
        id: ["DAMVILLE / VERNEUIL-SUR-AVRE", "CONDÉ-SUR-ITON / VERNEUIL-SUR-AVRE", "ÉVREUX / VERNEUIL-SUR-AVRE"],
        name: "Verneuil-sur-Avre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNEUIL-SUR-AVRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:213",
    routeIds: ["NOMAD:213", "NOMAD:ATOUMOD040:Line:1003292:LOC"],
    noCartridge: true,
    name: "213",
    colors: { background: "#ef8464", text: "#000000" },
    destinations: [
      {
        id: ["ÉVREUX / L'AIGLE"],
        name: "L'Aigle",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ef8464",
            textColor: "#000000",
            text: "213",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / ÉVREUX"],
        name: "Évreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ef8464",
            textColor: "#000000",
            text: "213",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:214",
    routeIds: ["NOMAD:214", "NOMAD:ATOUMOD040:Line:1003293:LOC"],
    noCartridge: true,
    name: "214",
    colors: { background: "#e7adcf", text: "#000000" },
    destinations: [
      {
        id: ["LE NEUBOURG / ÉVREUX", "HONFLEUR / ÉVREUX", "BRIONNE / ÉVREUX", "PONT-AUDEMER / ÉVREUX"],
        name: "Évreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["ÉVREUX / LE NEUBOURG"],
        autoHide: true,
        name: "Le Neubourg",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE NEUBOURG" }],
        },
      },
      {
        id: ["HONFLEUR / PONT-AUDEMER", "ÉVREUX / PONT-AUDEMER"],
        autoHide: true,
        name: "Pont-Audemer",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["PONT-AUDEMER / HONFLEUR", "PONT AUDEMER / HONFLEUR", "ÉVREUX / HONFLEUR"],
        name: "Honfleur",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:215",
    routeIds: ["NOMAD:215", "NOMAD:ATOUMOD040:Line:1003294:LOC"],
    noCartridge: true,
    name: "215",
    colors: { background: "#719152", text: "#ffffff" },
    destinations: [
      {
        id: ["ÉVREUX / ROUEN", "LOUVIERS / ROUEN"],
        name: "Rouen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ÉVREUX / ELBEUF", "VAL-DE-REUIL / ELBEUF", "PONT-DE-L'ARCHE / ELBEUF"],
        autoHide: true,
        name: "Elbeuf-sur-Seine",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / PONT-DE-L'ARCHE"],
        autoHide: true,
        name: "Pont-de-l'Arche",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONT-DE-L'ARCHE" }],
        },
      },
      {
        id: ["ÉVREUX / LOUVIERS", "ELBEUF / LOUVIERS", "ROUEN / LOUVIERS"],
        autoHide: true,
        name: "Louviers",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIERS" }],
        },
      },
      {
        id: ["ELBEUF / ÉVREUX", "ROUEN / ÉVREUX", "ROUEN / EVREUX", "LOUVIERS / ÉVREUX"],
        name: "Évreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:216",
    routeIds: ["NOMAD:216", "NOMAD:ATOUMOD040:Line:1006979:LOC"],
    name: "216",
    colors: { background: "#4A2999", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rouen > Évreux (via Technopôle)"],
        autoHide: true,
        name: "Évreux (via Technopôle)",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [
            [
              { font: "1107SUPX", text: "ROUEN > EVREUX" },
              { font: "0505SUPX", text: "VIA TECHNOPOLE" },
            ],
          ],
        },
      },
      {
        id: ["Rouen > Évreux"],
        name: "Évreux",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN > EVREUX" }],
        },
      },
      {
        id: ["Évreux > Rouen"],
        name: "Rouen",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX > ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:217",
    routeIds: ["NOMAD:217", "NOMAD:ATOUMOD040:Line:1003295:LOC"],
    noCartridge: true,
    name: "217",
    colors: { background: "#b72a41", text: "#ffffff" },
    destinations: [
      {
        id: ["BERNAY / PONT-AUDEMER"],
        name: "Pont-Audemer",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b72a41",
            textColor: "#ffffff",
            text: "217",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["PONT-AUDEMER / BERNAY"],
        name: "Bernay",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b72a41",
            textColor: "#ffffff",
            text: "217",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BERNAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:218",
    routeIds: ["NOMAD:218", "NOMAD:ATOUMOD040:Line:1003296:LOC"],
    noCartridge: true,
    name: "218",
    colors: { background: "#b26bc1", text: "#ffffff" },
    destinations: [
      {
        id: ["ROUEN / PERRIERS-SUR-ANDELLE", "ROUEN / PERRIERS SUR ANDELLE"],
        name: "Perriers-sur-Andelle",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b26bc1",
            textColor: "#ffffff",
            text: "218",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "PERRIERS-SUR-ANDELLE" }],
        },
      },
      {
        id: ["ROUEN / CHARLEVAL"],
        autoHide: true,
        name: "Charleval",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b26bc1",
            textColor: "#ffffff",
            text: "218",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CHARLEVAL" }],
        },
      },
      {
        id: ["ROUEN / VASCOEUIL"],
        autoHide: true,
        name: "Vascœuil",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b26bc1",
            textColor: "#ffffff",
            text: "218",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VASCOEUIL" }],
        },
      },
      {
        id: ["VASCOEUIL / ROUEN", "CHARLEVAL / ROUEN", "PERRIERS-SUR-ANDELLE / ROUEN", "PERRIERS SUR ANDELLE / ROUEN"],
        name: "Rouen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b26bc1",
            textColor: "#ffffff",
            text: "218",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:219",
    routeIds: ["NOMAD:219", "NOMAD:ATOUMOD040:Line:1003297:LOC"],
    noCartridge: true,
    name: "219",
    colors: { background: "#7a79b6", text: "#ffffff" },
    destinations: [
      {
        id: ["GISORS / ROUEN", "SAUSSAY-LA-CAMPAGNE / ROUEN"],
        name: "Rouen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#ffffff",
            text: "219",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["GISORS / FLEURY-SUR-ANDELLE", "ROUEN / FLEURY-SUR-ANDELLE"],
        autoHide: true,
        name: "Fleury-sur-Andelle",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#ffffff",
            text: "219",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FLEURY-SUR-ANDELLE" }],
        },
      },
      {
        id: ["GISORS / SAUSSAY-LA-CAMPAGNE"],
        autoHide: true,
        name: "Saussay-la-Campagne",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#ffffff",
            text: "219",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "SAUSSAY-LA-CAMPAGNE" }],
        },
      },
      {
        id: ["GISORS / ÉTRÉPAGNY"],
        autoHide: true,
        name: "Étrépagny",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#ffffff",
            text: "219",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ETREPAGNY" }],
        },
      },
      {
        id: [
          "SAUSSAY-LA-CAMPAGNE / GISORS",
          "FLEURY-SUR-ANDELLE / GISORS",
          "ROUEN / GISORS",
          "LE MESNIL-ESNARD / GISORS",
        ],
        name: "Gisors",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#ffffff",
            text: "219",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:220",
    routeIds: ["NOMAD:220", "NOMAD:ATOUMOD040:Line:1003298:LOC"],
    noCartridge: true,
    name: "220",
    colors: { background: "#fdcb36", text: "#000000" },
    destinations: [
      {
        id: ["LES ANDELYS / ROUEN"],
        name: "Rouen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fdcb36",
            textColor: "#000000",
            text: "220",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / LES ANDELYS"],
        name: "Les Andelys",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fdcb36",
            textColor: "#000000",
            text: "220",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:221",
    routeIds: ["NOMAD:221", "NOMAD:ATOUMOD040:Line:1003299:LOC"],
    noCartridge: true,
    name: "221",
    colors: { background: "#ed1d8a", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ROUEN / ALIZAY"],
        name: "Alizay",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ed1d8a",
            textColor: "#FFFFFF",
            text: "221",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALIZAY" }],
        },
      },
      {
        id: ["ALIZAY / ROUEN"],
        name: "Rouen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ed1d8a",
            textColor: "#FFFFFF",
            text: "221",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:222",
    routeIds: ["NOMAD:222", "NOMAD:ATOUMOD040:Line:1003300:LOC"],
    noCartridge: true,
    name: "222",
    colors: { background: "#33a739", text: "#ffffff" },
    destinations: [
      {
        id: ["LE BOSC-ROGER-EN-ROUMOIS / ROUEN"],
        name: "Rouen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#33a739",
            textColor: "#ffffff",
            text: "222",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / LE BOSC-ROGER-EN-ROUMOIS"],
        name: "Le Bosc-Roger-en-Roumois",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#33a739",
            textColor: "#ffffff",
            text: "222",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "LE BOSC-ROGER-EN-ROUMOIS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:223",
    routeIds: ["NOMAD:223", "NOMAD:ATOUMOD040:Line:1003301:LOC"],
    noCartridge: true,
    name: "223",
    colors: { background: "#5688c6", text: "#FFFFFF" },
    destinations: [
      {
        id: [
          "ROUTOT / PONT-AUDEMER",
          "BARNEVILLE-SUR-SEINE / PONT-AUDEMER",
          "BOURG-ACHARD / PONT-AUDEMER",
          "LA HAYE-DE-ROUTOT / PONT-AUDEMER",
          "ST-OUEN-DE-THOUBERVILLE / PONT-AUDEMER",
        ],
        name: "Pont-Audemer",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#FFFFFF",
            text: "223",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["PONT-AUDEMER / LA HAYE-DE-ROUTOT"],
        autoHide: true,
        name: "La Haye-de-Routot",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#FFFFFF",
            text: "223",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA HAYE-DE-ROUTOT" }],
        },
      },
      {
        id: ["PONT-AUDEMER / BOUQUETOT"],
        autoHide: true,
        name: "Bouquetot",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#FFFFFF",
            text: "223",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BOUQUETOT" }],
        },
      },
      {
        id: ["PONT-AUDEMER / BOURG-ACHARD"],
        autoHide: true,
        name: "Bourg-Achard",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#FFFFFF",
            text: "223",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BOURG-ACHARD" }],
        },
      },
      {
        id: ["PONT-AUDEMER / BARNEVILLE-SUR-SEINE"],
        autoHide: true,
        name: "Barneville-sur-Seine",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#FFFFFF",
            text: "223",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "BARNEVILLE-SUR-SEINE" }],
        },
      },
      {
        id: ["PONT-AUDEMER / ST-OUEN-DE-THOUBERVILLE"],
        name: "Saint-Ouen-de-Thouberville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#FFFFFF",
            text: "223",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "ST-OUEN-DE-THOUBERVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:224",
    routeIds: ["NOMAD:224", "NOMAD:ATOUMOD040:Line:1003302:LOC"],
    noCartridge: true,
    name: "224",
    colors: { background: "#a9b76a", text: "#000000" },
    destinations: [
      {
        id: ["LISIEUX / PONT-AUDEMER"],
        name: "Pont-Audemer",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a9b76a",
            textColor: "#000000",
            text: "224",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["PONT-AUDEMER / LISIEUX"],
        name: "Lisieux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a9b76a",
            textColor: "#000000",
            text: "224",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:225",
    routeIds: ["NOMAD:225", "NOMAD:ATOUMOD040:Line:1003303:LOC"],
    noCartridge: true,
    name: "225",
    colors: { background: "#512b0f", text: "#ffffff" },
    destinations: [
      {
        id: ["BREVAL / MARCILLY-SUR-EURE", "BUEIL / MARCILLY-SUR-EURE", "EZY-SUR-EURE / MARCILLY-SUR-EURE"],
        name: "Marcilly-sur-Eure",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MARCILLY-SUR-EURE" }],
        },
      },
      {
        id: ["MARCILLY-SUR-EURE / EZY-SUR-EURE", "BUEIL / EZY-SUR-EURE"],
        autoHide: true,
        name: "Ezy-sur-Eure",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EZY-SUR-EURE" }],
        },
      },
      {
        id: ["BUEIL / IVRY-LA-BATAILLE"],
        autoHide: true,
        name: "Ivry-la-Bataille",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "IVRY-LA-BATAILLE" }],
        },
      },
      {
        id: ["BUEIL / GARENNES-SUR-EURE"],
        autoHide: true,
        name: "Garennes-sur-Eure",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GARENNES-SUR-EURE" }],
        },
      },
      {
        id: [
          "EZY-SUR-EURE / BUEIL",
          "MARCILLY-SUR-EURE / BUEIL",
          "IVRY-LA-BATAILLE / BUEIL",
          "GARENNES-SUR-EURE / BUEIL",
        ],
        autoHide: true,
        name: "Bueil",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BUEIL" }],
        },
      },
      {
        id: ["MARCILLY-SUR-EURE / BRÉVAL"],
        name: "Bréval",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BREVAL" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:226",
    routeIds: ["NOMAD:226", "NOMAD:ATOUMOD040:Line:1003304:LOC"],
    noCartridge: true,
    name: "226",
    colors: { background: "#b75858", text: "#ffffff" },
    destinations: [
      {
        id: ["BOURTH / L'AIGLE", "VERNEUIL-SUR-AVRE / L'AIGLE"],
        name: "L'Aigle",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b75858",
            textColor: "#ffffff",
            text: "226",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / CHANDAI"],
        autoHide: true,
        name: "Chandai",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b75858",
            textColor: "#ffffff",
            text: "226",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CHANDAI" }],
        },
      },
      {
        id: ["L'AIGLE / VERNEUIL-SUR-AVRE"],
        name: "Verneuil-sur-Avre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b75858",
            textColor: "#ffffff",
            text: "226",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VERNEUIL-SUR-AVRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:227",
    routeIds: ["NOMAD:227", "NOMAD:ATOUMOD040:Line:1003305:LOC"],
    noCartridge: true,
    name: "227",
    colors: { background: "#b3549a", text: "#FFFFFF" },
    destinations: [
      {
        id: ["PONT-AUDEMER / LE HAVRE"],
        name: "Le Havre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b3549a",
            textColor: "#FFFFFF",
            text: "227",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["LE HAVRE / PONT-AUDEMER"],
        name: "Pont-Audemer",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b3549a",
            textColor: "#FFFFFF",
            text: "227",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:228",
    routeIds: ["NOMAD:228", "NOMAD:ATOUMOD040:Line:1006959:LOC"],
    name: "228",
    colors: { background: "#BA941C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rouen > Pont-Audemer (Express)"],
        autoHide: true,
        name: "Pont-Audemer (Express)",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [
            [
              { font: "1107SUPX", text: "ROUEN > PONT-AUDEMER" },
              { font: "0505SUPX", spacing: 4, text: "EXPRESS" },
            ],
          ],
        },
      },
      {
        id: ["Rouen > Pont-Audemer"],
        name: "Pont-Audemer",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [
            [
              { font: "1107SUPX", text: "ROUEN > PONT-AUDEMER" },
              { font: "0505SUPX", spacing: 2, text: "DESSERTE OMNIBUS" },
            ],
          ],
        },
      },
      {
        id: ["Pont-Audemer > Rouen"],
        name: "Rouen",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [
            [
              { font: "1107SUPX", text: "PONT-AUDEMER > ROUEN" },
              { font: "0505SUPX", spacing: 2, text: "DESSERTE OMNIBUS" },
            ],
          ],
        },
      },
      {
        id: ["Pont-Audemer > Rouen (Express)"],
        autoHide: true,
        name: "Rouen (Express)",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [
            [
              { font: "1107SUPX", text: "PONT-AUDEMER > ROUEN" },
              { font: "0505SUPX", spacing: 4, text: "EXPRESS" },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "NOMAD:301",
    routeIds: ["NOMAD:301", "NOMAD:ATOUMOD040:Line:1002019:LOC"],
    noCartridge: true,
    name: "301",
    colors: { background: "#7ab929", text: "#ffffff" },
    destinations: [
      {
        id: ["CARENTAN / CHERBOURG", "ST-LO / CHERBOURG"],
        name: "Cherbourg-en-Cotentin",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7ab929",
            textColor: "#ffffff",
            text: "301",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CHERBOURG" }],
        },
      },
      {
        id: ["CHERBOURG / CARENTAN", "CHERBOURG / ST-LÔ"],
        name: "Carentan",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7ab929",
            textColor: "#ffffff",
            text: "301",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CARENTAN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:302",
    routeIds: ["NOMAD:302", "NOMAD:ATOUMOD040:Line:1007402:LOC"],
    noCartridge: true,
    name: "302",
    colors: { background: "#ecce00", text: "#000000" },
    destinations: [
      {
        id: ["SANT-LO / CARENTAN"],
        name: "Carentan",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ecce00",
            textColor: "#000000",
            text: "302",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CARENTAN" }],
        },
      },
      {
        id: ["CARENTAN / SAINT-LO"],
        name: "Saint-Lô",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ecce00",
            textColor: "#000000",
            text: "302",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:303",
    routeIds: ["NOMAD:303", "NOMAD:ATOUMOD040:Line:1002037:LOC"],
    noCartridge: true,
    name: "303",
    colors: { background: "#ff0009", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-SAUVEUR / COUTANCES", "LA HAYE-DU-PUITS / COUTANCES", "VALOGNES / COUTANCES"],
        name: "Coutances",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#ffffff",
            text: "303",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
      {
        id: ["COUTANCES (SNCF) / LESSAY"],
        autoHide: true,
        name: "Lessay",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#ffffff",
            text: "303",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LESSAY" }],
        },
      },
      {
        id: ["COUTANCES (WOOD) / LA HAYE"],
        autoHide: true,
        name: "La Haye",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#ffffff",
            text: "303",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA HAYE" }],
        },
      },
      {
        id: ["COUTANCES / SAINT-SAUVEUR"],
        autoHide: true,
        name: "Saint-Sauveur-le-Vicomte",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#ffffff",
            text: "303",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-SAUVEUR" }],
        },
      },
      {
        id: ["COUTANCES / VALOGNES", "LA HAYE-DU-PUITS / VALOGNES"],
        name: "Valognes",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#ffffff",
            text: "303",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VALOGNES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:304",
    routeIds: ["NOMAD:304", "NOMAD:ATOUMOD040:Line:1007442:LOC"],
    noCartridge: true,
    name: "304",
    colors: { background: "#209645", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-LO / VIRE"],
        name: "Vire",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#209645",
            textColor: "#ffffff",
            text: "304",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE" }],
        },
      },
      {
        id: ["VIRE / SAINT-LO"],
        name: "Saint-Lô",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#209645",
            textColor: "#ffffff",
            text: "304",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:305",
    routeIds: ["NOMAD:305", "NOMAD:ATOUMOD040:Line:1002025:LOC"],
    noCartridge: true,
    name: "305",
    colors: { background: "#f39200", text: "#000000" },
    destinations: [
      {
        id: ["GRANVILLE / LISON", "COUTANCES / LISON"],
        name: "Lison",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISON" }],
        },
      },
      {
        id: ["GRANVILLE / SAINT-LO"],
        autoHide: true,
        name: "Saint-Lô",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
      {
        id: ["GRANVILLE / SAINT-LO [MDD]"],
        autoHide: true,
        name: "Saint-Lô",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
      {
        id: ["GRANVILLE / COUTANCES", "LISON / COUTANCES"],
        autoHide: true,
        name: "Coutances",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
      {
        id: ["COUTANCES / GRANVILLE", "LISON / GRANVILLE", "SAINT-LO / GRANVILLE"],
        name: "Granville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:306",
    routeIds: ["NOMAD:306", "NOMAD:ATOUMOD040:Line:1002026:LOC"],
    noCartridge: true,
    name: "306",
    colors: { background: "#a0519a", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-LO / AVRANCHES"],
        name: "Avranches",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["SAINT-LO / PERCY"],
        autoHide: true,
        name: "Percy",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PERCY" }],
        },
      },
      {
        id: ["AVRANCHES / SAINT-LO"],
        name: "Saint-Lô",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
      {
        id: ["VILLEDIEU-LES-POELES / SAINT-LO [MDD]", "AVRANCHES / SAINT-LO [MDD]"],
        name: "Saint-Lô",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:307",
    routeIds: ["NOMAD:307", "NOMAD:ATOUMOD040:Line:1002035:LOC"],
    noCartridge: true,
    name: "307",
    colors: { background: "#e52725", text: "#ffffff" },
    destinations: [
      {
        id: ["SARTILLY / AVRANCHES", "GRANVILLE / AVRANCHES"],
        name: "Avranches",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52725",
            textColor: "#ffffff",
            text: "307",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["AVRANCHES / GRANVILLE"],
        name: "Granville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52725",
            textColor: "#ffffff",
            text: "307",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:308",
    routeIds: ["NOMAD:308", "NOMAD:ATOUMOD040:Line:1002027:LOC"],
    noCartridge: true,
    name: "308",
    colors: { background: "#907d24", text: "#ffffff" },
    destinations: [
      {
        id: ["GRANVILLE / AVRANCHES"],
        name: "Avranches",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#907d24",
            textColor: "#ffffff",
            text: "308",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["AVRANCHES / GRANVILLE", "BEAUVOIR / GRANVILLE"],
        autoHide: true,
        name: "Granville",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#907d24",
            textColor: "#ffffff",
            text: "308",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
      {
        id: ["GRANVILLE / BEAUVOIR"],
        name: "Beauvoir – le Mont-Saint-Michel",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#907d24",
            textColor: "#ffffff",
            text: "308",
            outlineColor: "#000000",
          },
          pages: [[{ text: "BEAUVOIR" }, { text: "MONT-SAINT-MICHEL" }]],
        },
      },
    ],
  },
  {
    id: "NOMAD:309",
    routeIds: ["NOMAD:309", "NOMAD:ATOUMOD040:Line:1002036:LOC"],
    noCartridge: true,
    name: "309",
    colors: { background: "#c44e23", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-HILAIRE-DU-HARCOUET / VIRE", "AVRANCHES / VIRE"],
        name: "Vire",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE" }],
        },
      },
      {
        id: ["AVRANCHES / MORTAIN"],
        autoHide: true,
        name: "Mortain-Bocage",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAIN" }],
        },
      },
      {
        id: ["VIRE / SAINT-HILAIRE-DU-HARCOUET"],
        autoHide: true,
        name: "Saint-Hilaire-du-Harcouët",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "ST-HILAIRE-DU-HARCOUET" }],
        },
      },
      {
        id: ["AVRANCHES / DUCEY"],
        autoHide: true,
        name: "Ducey-les-Chéris",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DUCEY-LES-CHERIS" }],
        },
      },
      {
        id: ["AVRANCHES / PONTAUBAULT"],
        autoHide: true,
        name: "Pontaubault",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONTAUBAULT" }],
        },
      },
      {
        id: ["VIRE / AVRANCHES", "MORTAIN / AVRANCHES", "DUCEY / AVRANCHES", "SAINT-HILAIRE-DU-HARCOUET / AVRANCHES"],
        name: "Avranches",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:310",
    routeIds: ["NOMAD:310", "NOMAD:ATOUMOD040:Line:1002031:LOC"],
    noCartridge: true,
    name: "310",
    colors: { background: "#8CC4D1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COUTANCES / LES PLAGES"],
        name: "Les Plages",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8CC4D1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "310",
          },
          pages: [{ font: "1508SUPX", text: "LES PLAGES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:311",
    routeIds: ["NOMAD:311", "NOMAD:ATOUMOD040:Line:1002032:LOC"],
    noCartridge: true,
    name: "311",
    colors: { background: "#EF9EC1", text: "#000000" },
    destinations: [
      {
        id: ["COUTANCES / GRANVILLAIS"],
        name: "Granvillais",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#EF9EC1",
            textColor: "#000000",
            text: "311",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLAIS" }],
        },
      },
      {
        id: ["GRANVILLAIS / COUTANCES"],
        name: "Coutances",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#EF9EC1",
            textColor: "#000000",
            text: "311",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:401",
    routeIds: ["NOMAD:401", "NOMAD:ATOUMOD040:Line:1008217:LOC"],
    noCartridge: true,
    name: "401",
    colors: { background: "#f18665", text: "#000000" },
    destinations: [
      {
        id: ["PUTANGES / BRIOUZE / FLERS"],
        name: "Flers",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f18665",
            textColor: "#000000",
            text: "401",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["FLERS / BRIOUZE / PUTANGES"],
        name: "Putanges",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f18665",
            textColor: "#000000",
            text: "401",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PUTANGES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:402",
    routeIds: ["NOMAD:402", "NOMAD:ATOUMOD040:Line:1008219:LOC"],
    noCartridge: true,
    name: "402",
    colors: { background: "#d1b706", text: "#000000" },
    destinations: [
      {
        id: ["LANDISACQ / FLERS", "TINCHEBRAY / FLERS"],
        name: "Flers",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#d1b706",
            textColor: "#000000",
            text: "402",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["FLERS / LANDISACQ", "TINCHEBRAY / LANDISACQ"],
        autoHide: true,
        name: "Landisacq",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#d1b706",
            textColor: "#000000",
            text: "402",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LANDISACQ" }],
        },
      },
      {
        id: ["LANDISACQ / TINCHEBRAY"],
        name: "Tinchebray",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#d1b706",
            textColor: "#000000",
            text: "402",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TINCHEBRAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:408",
    routeIds: ["NOMAD:408", "NOMAD:ATOUMOD040:Line:1008231:LOC"],
    noCartridge: true,
    name: "408",
    colors: { background: "#f87479", text: "#000000" },
    destinations: [
      {
        id: ["FALAISE / OCCAGNES / ARGENTAN"],
        name: "Argentan",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "408",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / OCCAGNES / FALAISE"],
        name: "Falaise",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "408",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FALAISE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:411",
    routeIds: ["NOMAD:411", "NOMAD:ATOUMOD040:Line:1008237:LOC"],
    noCartridge: true,
    name: "411",
    colors: { background: "#fecd38", text: "#000000" },
    destinations: [
      {
        id: ["GACÉ / EXMES / ARGENTAN"],
        name: "Argentan",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fecd38",
            textColor: "#000000",
            text: "411",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / EXMES / GACÉ"],
        name: "Gacé",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fecd38",
            textColor: "#000000",
            text: "411",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GACE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:413",
    routeIds: ["NOMAD:413", "NOMAD:ATOUMOD040:Line:1008241:LOC"],
    noCartridge: true,
    name: "413",
    colors: { background: "#ea5984", text: "#000000" },
    destinations: [
      {
        id: ["LA FERTÉ-EN-OUCHE / L'AIGLE", "VIMOUTIERS / LA FERTÉ-EN-OUCHE / L'AIGLE"],
        name: "L'Aigle",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5984",
            textColor: "#000000",
            text: "413",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / LA FERTÉ-EN-OUCHE"],
        name: "La Ferté-en-Ouche",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5984",
            textColor: "#000000",
            text: "413",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE-EN-OUCHE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:416",
    routeIds: ["NOMAD:416", "NOMAD:ATOUMOD040:Line:1008185:LOC"],
    noCartridge: true,
    name: "416",
    colors: { background: "#33a8e0", text: "#000000" },
    destinations: [
      {
        id: ["L'AIGLE / SAINT-MAURICE-LÈS-CHARENCEY"],
        name: "Saint-Maurice-lès-Charencey",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#33a8e0",
            textColor: "#000000",
            text: "416",
            outlineColor: "#FFFFFF",
          },
          pages: [[{ text: "SAINT-MAURICE" }, { text: "LES-CHARENCEY" }]],
        },
      },
      {
        id: ["SAINT-MAURICE-LÈS-CHARENCEY / L'AIGLE"],
        name: "L'Aigle",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#33a8e0",
            textColor: "#000000",
            text: "416",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:420",
    routeIds: ["NOMAD:420", "NOMAD:ATOUMOD040:Line:1008183:LOC"],
    noCartridge: true,
    name: "420",
    colors: { background: "#b82b41", text: "#ffffff" },
    destinations: [
      {
        id: ["IGE / BELLÊME"],
        name: "Bellême",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b82b41",
            textColor: "#ffffff",
            text: "420",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BELLEME" }],
        },
      },
      {
        id: ["BELLÊME / IGE"],
        name: "Ige",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b82b41",
            textColor: "#ffffff",
            text: "420",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "IGE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:421",
    routeIds: ["NOMAD:421", "NOMAD:ATOUMOD040:Line:1008187:LOC"],
    noCartridge: true,
    name: "421",
    colors: { background: "#35b6b2", text: "#000000" },
    destinations: [
      {
        id: ["SERIGNY / MAMERS"],
        name: "Mamers",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#35b6b2",
            textColor: "#000000",
            text: "421",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MAMERS" }],
        },
      },
      {
        id: ["MAMERS / SERIGNY"],
        name: "Serigny",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#35b6b2",
            textColor: "#000000",
            text: "421",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SERIGNY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:422",
    routeIds: ["NOMAD:422", "NOMAD:ATOUMOD040:Line:1008253:LOC"],
    noCartridge: true,
    name: "422",
    colors: { background: "#164194", text: "#ffffff" },
    destinations: [
      {
        id: ["LONGNY-AU-PERCHE / MORTAGNE-AU-PERCHE", "LA LOUPE / LONGNY / MORTAGNE-AU-PERCHE"],
        name: "Mortagne-au-Perche",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["LA LOUPE / LONGNY-AU-PERCHE", "MORTAGNE-AU-PERCHE / LONGNY-AU-PERCHE"],
        autoHide: true,
        name: "Longny-au-Perche",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LONGNY-AU-PERCHE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LA LOUPE", "LONGNY-AU-PERCHE / LA LOUPE"],
        name: "La Loupe",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA LOUPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:423",
    routeIds: ["NOMAD:423", "NOMAD:ATOUMOD040:Line:1009747:LOC"],
    name: "423",
    colors: { background: "#5E8786", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BAGNOLES DE L'ORNE / BRIOUZE", "Bagnoles de l'Orne > Briouze"],
        name: "Briouze",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#5E8786",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "423",
          },
          pages: [{ font: "1508SUPX", text: "BAGNOLES > BRIOUZE" }],
        },
      },
      {
        id: ["BRIOUZE / BAGNOLES DE L'ORNE", "Briouze > Bagnoles de l'Orne"],
        name: "Bagnoles de l'Orne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#5E8786",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "423",
          },
          pages: [{ font: "1508SUPX", text: "BRIOUZE > BAGNOLES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:424",
    routeIds: ["NOMAD:424", "NOMAD:ATOUMOD040:Line:1009928:LOC"],
    name: "424",
    colors: { background: "#4A2999", text: "#FFFFFF" },
    destinations: [
      {
        id: ["FLERS / ARGENTAN", "Flers > Argentan"],
        name: "Argentan",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "424",
          },
          pages: [{ font: "1508SUPX", text: "FLERS > ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / FLERS", "Argentan > Flers"],
        name: "Flers",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "424",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN > FLERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:425",
    routeIds: ["NOMAD:425", "NOMAD:ATOUMOD040:Line:1009929:LOC"],
    noCartridge: true,
    name: "425",
    colors: { background: "#f87479", text: "#000000" },
    destinations: [
      {
        id: ["L'AIGLE / DREUX"],
        name: "Dreux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "425",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DREUX" }],
        },
      },
      {
        id: ["L'AIGLE / SURDON", "ALENCON / SURDON"],
        autoHide: true,
        name: "Surdon",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "425",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SURDON" }],
        },
      },
      {
        id: ["SURDON / ALENCON"],
        name: "Alençon",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "425",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:502",
    routeIds: ["NOMAD:502", "NOMAD:ATOUMOD040:Line:1003060:LOC"],
    noCartridge: true,
    name: "502",
    colors: { background: "#e4ca12", text: "#000000" },
    destinations: [
      {
        id: ["LE TRÉPORT / LE TRÉPORT"],
        name: "Le Tréport",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e4ca12",
            textColor: "#000000",
            text: "502",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE TREPORT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:505",
    routeIds: ["NOMAD:505", "NOMAD:ATOUMOD040:Line:1003050:LOC"],
    noCartridge: true,
    name: "505",
    colors: { background: "#f58966", text: "#000000" },
    destinations: [
      {
        id: ["ROUEN / BOISSAY"],
        name: "Boissay",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f58966",
            textColor: "#000000",
            text: "505",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOISSAY" }],
        },
      },
      {
        id: ["BOISSAY / ROUEN"],
        name: "Rouen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f58966",
            textColor: "#000000",
            text: "505",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:510",
    routeIds: ["NOMAD:510", "NOMAD:ATOUMOD040:Line:1003056:LOC"],
    noCartridge: true,
    name: "510",
    colors: { background: "#864595", text: "#ffffff" },
    destinations: [
      {
        id: ["FÉCAMP / YVETOT"],
        name: "Yvetot",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#864595",
            textColor: "#ffffff",
            text: "510",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["YVETOT / FÉCAMP"],
        name: "Fécamp",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#864595",
            textColor: "#ffffff",
            text: "510",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:511",
    routeIds: ["NOMAD:511", "NOMAD:ATOUMOD040:Line:1003063:LOC"],
    noCartridge: true,
    name: "511",
    colors: { background: "#ba4d95", text: "#ffffff" },
    destinations: [
      {
        id: ["ROUEN / ROUMARE"],
        name: "Roumare",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ba4d95",
            textColor: "#ffffff",
            text: "511",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUMARE" }],
        },
      },
      {
        id: ["ROUMARE / ROUEN"],
        name: "Rouen",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ba4d95",
            textColor: "#ffffff",
            text: "511",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:512",
    routeIds: ["NOMAD:512", "NOMAD:ATOUMOD040:Line:1003065:LOC"],
    noCartridge: true,
    name: "512",
    colors: { background: "#5665ab", text: "#ffffff" },
    destinations: [
      {
        id: ["FRESNE-LE-PLAN / LE MESNIL-ESNARD", "PERRIERS-SUR-A / LE MESNIL-ESNARD"],
        name: "Mesnil-Esnard",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE MESNIL-ESNARD" }],
        },
      },
      {
        id: ["PERRIERS-SUR-A / FRANQUEVILLE-ST-PIERRE"],
        autoHide: true,
        name: "Franqueville-Saint-Pierre",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "FRANQUEVILLE-ST-PIERRE" }],
        },
      },
      {
        id: ["LE MESNIL-ESNARD / MESNIL-RAOUL"],
        autoHide: true,
        name: "Mesnil-Raoul",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MESNIL-RAOUL" }],
        },
      },
      {
        id: ["LE MESNIL-ESNARD / PERRIERS-SUR-A", "FRANQUEVILLE-ST-PIERRE / PERRIERS-SUR-A"],
        name: "Perriers-sur-Andelle",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "PERRIERS-SUR-ANDELLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:513",
    routeIds: ["NOMAD:513", "NOMAD:ATOUMOD040:Line:1003066:LOC"],
    noCartridge: true,
    name: "513",
    colors: { background: "#9ac63f", text: "#000000" },
    destinations: [
      {
        id: ["ST-VALÉRY-EN-C / FÉCAMP"],
        name: "Fécamp",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63f",
            textColor: "#000000",
            text: "513",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["FÉCAMP / ST-VALÉRY-EN-C"],
        name: "Saint-Valéry-en-Caux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63f",
            textColor: "#000000",
            text: "513",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-VALERY-EN-CAUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:514",
    routeIds: ["NOMAD:514", "NOMAD:ATOUMOD040:Line:1003067:LOC"],
    noCartridge: true,
    name: "514",
    colors: { background: "#ea5284", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / ST-VALÉRY-EN-C"],
        name: "Saint-Valéry-en-Caux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5284",
            textColor: "#000000",
            text: "514",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-VALERY-EN-CAUX" }],
        },
      },
      {
        id: ["ST-VALÉRY-EN-C / DIEPPE"],
        name: "Dieppe",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5284",
            textColor: "#000000",
            text: "514",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:521",
    routeIds: ["NOMAD:521", "NOMAD:ATOUMOD040:Line:1003075:LOC"],
    noCartridge: true,
    name: "521",
    colors: { background: "#c895bf", text: "#000000" },
    destinations: [
      {
        id: ["NEUFCHÂTEL-EN-B / GAMACHES"],
        name: "Gamaches",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c895bf",
            textColor: "#000000",
            text: "521",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GAMACHES" }],
        },
      },
      {
        id: ["NEUFCHÂTEL-EN-B / BLANGY-SUR-BRESLE"],
        autoHide: true,
        name: "Bangy-sur-Bresle",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c895bf",
            textColor: "#000000",
            text: "521",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BLANGY-SUR-BRESLE" }],
        },
      },
      {
        id: ["GAMACHES / NEUFCHÂTEL-EN-B"],
        name: "Neufchâtel-en-Bray",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c895bf",
            textColor: "#000000",
            text: "521",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "NEUFCHATEL-EN-BRAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:525",
    routeIds: ["NOMAD:525", "NOMAD:ATOUMOD040:Line:1006899:LOC"],
    noCartridge: true,
    name: "525",
    colors: { background: "#292f6a", text: "#ffffff" },
    destinations: [
      {
        id: ["YVETOT / ST-VALÉRY-EN-C"],
        name: "Saint-Valéry-en-Caux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#292f6a",
            textColor: "#ffffff",
            text: "525",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-VALERY-EN-CAUX" }],
        },
      },
      {
        id: ["ST-VALÉRY-EN-C / YVETOT"],
        name: "Yvetot",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#292f6a",
            textColor: "#ffffff",
            text: "525",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:527",
    routeIds: ["NOMAD:527", "NOMAD:ATOUMOD040:Line:1006919:LOC"],
    name: "527",
    colors: { background: "#9E6A9A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Forges-les-Eaux > Dieppe"],
        name: "Dieppe",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["Dieppe > Serqueux", "Gisors > Serqueux"],
        name: "Serqueux",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "SERQUEUX" }],
        },
      },
      {
        id: ["Dieppe > Forges-les-Eaux"],
        autoHide: true,
        name: "Forges-les-Eaux",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "FORGES-LES-EAUX" }],
        },
      },
      {
        id: ["Serqueux > Gisors"],
        name: "Gisors",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
    ],
  },

  //
  // ZONE A NETTOYER :
  //

  {
    id: "NOMAD:FAUSSELIGNE",
    noCartridge: true,
    name: "! >",
    colors: { background: "#ffffff", text: "#000000" },
    destinations: [
      {
        id: [],
        name: "LES LIGNES SUIVANTES N'ONT PAS ÉTÉ NETTOYÉES/MISES EN FORME",
      },
    ],
  },

  {
    id: "NOMAD:101R",
    routeIds: ["NOMAD:101R", "NOMAD:ATOUMOD040:Line:1009907:LOC"],
    noCartridge: true,
    name: "101",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["CAEN / COURSEULLES-SUR-MER"],
        name: "COURSEULLES-SUR-MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "COURSEULLES-SUR-MER" }],
        },
      },
      {
        id: ["CAEN / LANGRUNE SUR MER"],
        name: "LANGRUNE SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LANGRUNE SUR MER" }],
        },
      },
      {
        id: ["CAEN / VER SUR MER EXPRESS"],
        name: "VER SUR MER EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VER SUR MER EXPRESS" }],
        },
      },
      {
        id: ["CAEN / LUC SUR MER"],
        name: "LUC SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LUC SUR MER" }],
        },
      },
      {
        id: ["CAEN / DOUVRES LA DELIVRANDE"],
        name: "DOUVRES LA DELIVRANDE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "DOUVRES-LA-DELIVRANDE" }],
        },
      },
      {
        id: ["CAEN / BERNIERES SUR MER"],
        name: "BERNIERES SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BERNIERES-SUR-MER" }],
        },
      },
      {
        id: ["CAEN / ASNELLES"],
        name: "ASNELLES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ASNELLES" }],
        },
      },
      {
        id: ["CAEN / ASNELLES EXPRESS"],
        name: "ASNELLES EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ASNELLES EXPRESS" }],
        },
      },
      {
        id: ["CAEN / VER SUR MER"],
        name: "VER SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VER SUR MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:101A",
    routeIds: ["NOMAD:101A", "NOMAD:ATOUMOD040:Line:1004440:LOC"],
    noCartridge: true,
    name: "101",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: [
          "COURSEULLES-SUR-MER / CAEN",
          "BERNIERES-SUR-MER / CAEN",
          "DOUVRES-LA-DELIVRANDE / CAEN",
          "LANGRUNE-SUR-MER / CAEN",
          "VER-SUR-MER / CAEN",
        ],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["COURSEULLES-SUR-MER / CAEN [EXPRESS]", "ASNELLES / CAEN [EXPRESS]", "ASNELLES / CAEN EXPRESS"],
        name: "CAEN [EXPRESS]",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN [EXPRESS]" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:102",
    routeIds: ["NOMAD:102", "NOMAD:ATOUMOD040:Line:1004441:LOC"],
    noCartridge: true,
    name: "102",
    colors: { background: "#f7941d", text: "#000000" },
    destinations: [
      {
        id: ["BENY SUR MER / CAEN", "CRESSERONS / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / CRESSERONS"],
        name: "CRESSERONS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CRESSERONS" }],
        },
      },
      {
        id: ["CAEN / BENY SUR MER"],
        name: "BENY SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BENY SUR MER" }],
        },
      },
      {
        id: ["CAEN / MATHIEU"],
        name: "MATHIEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MATHIEU" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:103",
    routeIds: ["NOMAD:103", "NOMAD:ATOUMOD040:Line:1004442:LOC"],
    noCartridge: true,
    name: "103",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: [
          "CREULLY / CAEN",
          "SAINTE-CROIX-SUR-MER / CAEN",
          "THAON / CAEN",
          "LE FRESNE CAMILLY / CAEN",
          "CAIRON / CAEN",
          "BANVILLE / CAEN",
          "LANTHEUIL / CAEN",
        ],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / BANVILLE"],
        name: "BANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BANVILLE" }],
        },
      },
      {
        id: ["CAEN / CREULLY"],
        name: "CREULLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CREULLY" }],
        },
      },
      {
        id: ["CAEN / LASSON"],
        name: "LASSON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LASSON" }],
        },
      },
      {
        id: ["CAEN / SAINTE CROIX SUR MER"],
        name: "SAINTE CROIX SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "SAINTE-CROIX-SUR-MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:104",
    routeIds: ["NOMAD:104", "NOMAD:ATOUMOD040:Line:1004444:LOC"],
    noCartridge: true,
    name: "104",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["VERSON / CAEN", "FONTAINE ETOUPEFOUR / CAEN", "BARON SUR ODON / CAEN", "BOUGY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / VERSON"],
        name: "VERSON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VERSON" }],
        },
      },
      {
        id: ["CAEN / FONTAINE ETOUPEFOUR"],
        name: "FONTAINE ETOUPEFOUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "FONTAINE-ETOUPEFOUR" }],
        },
      },
      {
        id: ["CAEN / BARON SUR ODON"],
        name: "BARON SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BARON SUR ODON" }],
        },
      },
      {
        id: ["CAEN / BOUGY"],
        name: "BOUGY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BOUGY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:105",
    routeIds: ["NOMAD:105", "NOMAD:ATOUMOD040:Line:1004445:LOC"],
    noCartridge: true,
    name: "105",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: [
          "LA CAINE / CAEN",
          "AUNAY SUR ODON / CAEN",
          "VACOGNES NEUILLY / CAEN",
          "EVRECY / CAEN",
          "SAINTE HONORINE DU FAY / CAEN",
        ],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / SAINTE HONORINE DU FAY"],
        name: "SAINTE HONORINE DU FAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SAINTE-HONORINE-DU-FAY" }],
        },
      },
      {
        id: ["CAEN / AUNAY SUR ODON"],
        name: "AUNAY SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AUNAY SUR ODON" }],
        },
      },
      {
        id: ["CAEN / BANNEVILLE SUR AJON"],
        name: "BANNEVILLE SUR AJON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "BANNEVILLE-SUR-AJON" }],
        },
      },
      {
        id: ["CAEN / ESQUAY NOTRE DAME"],
        name: "ESQUAY NOTRE DAME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ESQUAY-NOTRE-DAME" }],
        },
      },
      {
        id: ["CAEN / LA CAINE"],
        name: "LA CAINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA CAINE" }],
        },
      },
      {
        id: ["CAEN / VACOGNES NEUILLY"],
        name: "VACOGNES NEUILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VACOGNES NEUILLY" }],
        },
      },
      {
        id: ["CAEN / LES MONTS D'AUNAY"],
        name: "LES MONTS D'AUNAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LES MONTS D'AUNAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:106",
    routeIds: ["NOMAD:106", "NOMAD:ATOUMOD040:Line:1004446:LOC"],
    noCartridge: true,
    name: "106",
    colors: { background: "#f7941d", text: "#000000" },
    destinations: [
      {
        id: ["FEUGUEROLLES BULLY / CAEN", "HAMARS / CAEN", "AMAYE SUR ORNE / CAEN", "VIEUX / CAEN", "AVENAY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / MALTOT"],
        name: "MALTOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MALTOT" }],
        },
      },
      {
        id: ["CAEN / HAMARS", "CAEN / HAMARS LE HOM"],
        name: "HAMARS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HAMARS" }],
        },
      },
      {
        id: ["CAEN / AMAYE SUR ORNE"],
        name: "AMAYE SUR ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "AMAYE SUR ORNE" }],
        },
      },
      {
        id: ["CAEN / OUFFIERES"],
        name: "OUFFIERES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "OUFFIERES" }],
        },
      },
      {
        id: ["CAEN / AVENAY"],
        name: "AVENAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "AVENAY" }],
        },
      },
      {
        id: ["CAEN / VIEUX"],
        name: "VIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIEUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:107",
    routeIds: ["NOMAD:107", "NOMAD:ATOUMOD040:Line:1004447:LOC"],
    noCartridge: true,
    name: "107",
    colors: { background: "#007dc5", text: "#ffffff" },
    destinations: [
      {
        id: ["MUTRECY / CAEN", "ROCQUANCOURT / CAEN", "SAINT ANDRE SUR ORNE / CAEN", "LAIZE LA VILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / MUTRECY"],
        name: "MUTRECY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MUTRECY" }],
        },
      },
      {
        id: ["CAEN / ROCQUANCOURT"],
        name: "ROCQUANCOURT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROCQUANCOURT" }],
        },
      },
      {
        id: ["CAEN / MAY SUR ORNE"],
        name: "MAY SUR ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MAY SUR ORNE" }],
        },
      },
      {
        id: ["CAEN / LAIZE LA VILLE"],
        name: "LAIZE LA VILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LAIZE LA VILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:108",
    routeIds: ["NOMAD:108", "NOMAD:ATOUMOD040:Line:1004448:LOC"],
    noCartridge: true,
    name: "108",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["MOULINES / CAEN", "CESNY BOIS HALBOUT / CAEN", "SAINT GERMAIN LE VASSON / CAEN", "GOUVIX / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / MOULINES"],
        name: "MOULINES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MOULINES" }],
        },
      },
      {
        id: ["CAEN / CESNY BOIS HALBOUT"],
        name: "CESNY BOIS HALBOUT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CESNY-BOIS-HALBOUT" }],
        },
      },
      {
        id: ["CAEN / GOUVIX"],
        name: "GOUVIX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GOUVIX" }],
        },
      },
      {
        id: ["CAEN / CAUVICOURT"],
        name: "CAUVICOURT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAUVICOURT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:109",
    routeIds: ["NOMAD:109", "NOMAD:ATOUMOD040:Line:1004450:LOC"],
    noCartridge: true,
    name: "109",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["MERY CORBON / CAEN", "MOULT / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "109",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / MOULT"],
        name: "MOULT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "109",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MOULT" }],
        },
      },
      {
        id: ["CAEN / MERY CORBON"],
        name: "MERY CORBON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "109",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MERY CORBON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:110",
    routeIds: ["NOMAD:110", "NOMAD:ATOUMOD040:Line:1004473:LOC"],
    noCartridge: true,
    name: "110",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: [
          "CONTEVILLE / CAEN",
          "MOULT / CAEN",
          "CAGNY / CAEN",
          "FRENOUVILLE / CAEN",
          "VIMONT / CAEN",
          "MERY CORBON / CAEN",
          "MEZIDON CANON / CAEN",
          "CHICHEBOVILLE / CAEN",
        ],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / BELLENGREVILLE"],
        name: "BELLENGREVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BELLENGREVILLE" }],
        },
      },
      {
        id: ["CAEN / CAGNY"],
        name: "CAGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAGNY" }],
        },
      },
      {
        id: ["CAEN / FRENOUVILLE"],
        name: "FRENOUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FRENOUVILLE" }],
        },
      },
      {
        id: ["CAEN / MEZIDON CANON"],
        name: "MEZIDON CANON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MEZIDON CANON" }],
        },
      },
      {
        id: ["CAEN / BILLY"],
        name: "BILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BILLY" }],
        },
      },
      {
        id: ["CAEN / CONTEVILLE"],
        name: "CONTEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CONTEVILLE" }],
        },
      },
      {
        id: ["CAEN / MERY CORBON"],
        name: "MERY CORBON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MERY CORBON" }],
        },
      },
      {
        id: ["CAEN / MOULT"],
        name: "MOULT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MOULT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:111R",
    routeIds: ["NOMAD:111R", "NOMAD:ATOUMOD040:Line:1009867:LOC"],
    noCartridge: true,
    name: "111",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["HONFLEUR / LE HAVRE", "CAEN / LE HAVRE", "DEAUVILLE / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["CABOURG / DEAUVILLE", "CAEN / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["DEAUVILLE / HONFLEUR", "CAEN / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["CAEN / LA RIVIERE SAINT SAUVEUR", "DEAUVILLE / LA RIVIERE SAINT SAUVEUR"],
        name: "LA RIVIERE SAINT SAUVEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "LA RIVIERE SAINT-SAUVEUR" }],
        },
      },
      {
        id: ["CAEN / CABOURG"],
        name: "CABOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CABOURG" }],
        },
      },
      {
        id: ["CAEN / DIVES SUR MER"],
        name: "DIVES SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIVES SUR MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:111A",
    routeIds: ["NOMAD:111A", "NOMAD:ATOUMOD040:Line:1004451:LOC"],
    noCartridge: true,
    name: "111",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: [
          "BAVENT / CAEN",
          "DIVES SUR MER / CAEN",
          "DEAUVILLE / CAEN",
          "HONFLEUR / CAEN",
          "LE HAVRE / CAEN",
          "LA RIVIERE SAINT SAUVEUR / CAEN",
        ],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["HONFLEUR / CABOURG", "DEAUVILLE / CABOURG"],
        name: "CABOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CABOURG" }],
        },
      },
      {
        id: ["LE HAVRE / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["HONFLEUR / DEAUVILLE", "LA RIVIERE SAINT SAUVEUR / DEAUVILLE", "LE HAVRE / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["LE HAVRE / HONFLEUR EXPRESS"],
        name: "HONFLEUR EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR EXPRESS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:115",
    routeIds: ["NOMAD:115", "NOMAD:ATOUMOD040:Line:1004477:LOC"],
    noCartridge: true,
    name: "115",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["HOTTOT LES BAGUES / CAEN", "CAUMONT L'EVENTE / CAEN", "VILLERS BOCAGE / CAEN", "NOYERS BOCAGE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / VILLERS BOCAGE"],
        name: "VILLERS BOCAGE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VILLERS BOCAGE" }],
        },
      },
      {
        id: ["CAEN / CAUMONT L'EVENTE"],
        name: "CAUMONT L'EVENTE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAUMONT L'EVENTE" }],
        },
      },
      {
        id: ["CAEN / HOTTOT LES BAGUES"],
        name: "HOTTOT LES BAGUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HOTTOT LES BAGUES" }],
        },
      },
      {
        id: ["CAEN / TOURNAY SUR ODON"],
        name: "TOURNAY SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TOURNAY SUR ODON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:116",
    routeIds: ["NOMAD:116", "NOMAD:ATOUMOD040:Line:1004455:LOC"],
    noCartridge: true,
    name: "116",
    colors: { background: "#007dc5", text: "#ffffff" },
    destinations: [
      {
        id: ["AUNAY SUR ODON / CAEN", "VILLERS BOCAGE / CAEN", "VIRE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["VIRE / CAEN EXPRESS"],
        name: "CAEN EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN EXPRESS" }],
        },
      },
      {
        id: ["CAEN / VIRE EXPRESS"],
        name: "VIRE EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE EXPRESS" }],
        },
      },
      {
        id: ["CAEN / AUNAY SUR ODON"],
        name: "AUNAY SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AUNAY SUR ODON" }],
        },
      },
      {
        id: ["CAEN / TOURNAY SUR ODON"],
        name: "TOURNAY SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TOURNAY SUR ODON" }],
        },
      },
      {
        id: ["CAEN / VILLERS BOCAGE"],
        name: "VILLERS BOCAGE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VILLERS BOCAGE" }],
        },
      },
      {
        id: ["CAEN / VIRE"],
        name: "VIRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:117",
    routeIds: ["NOMAD:117", "NOMAD:ATOUMOD040:Line:1004456:LOC"],
    noCartridge: true,
    name: "117",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: [
          "CONDE SUR NOIREAU / CAEN",
          "SAINT LAURENT DE CONDEL / CAEN",
          "THURY HARCOURT / CAEN",
          "FLERS / CAEN",
          "CALIGNY / CAEN",
        ],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["CAEN / CONDE SUR NOIREAU"],
        name: "CONDE SUR NOIREAU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CONDE SUR NOIREAU" }],
        },
      },
      {
        id: ["CAEN / LAIZE LA VILLE"],
        name: "LAIZE LA VILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LAIZE LA VILLE" }],
        },
      },
      {
        id: ["CAEN / THURY-HARCOURT"],
        name: "THURY-HARCOURT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "THURY-HARCOURT" }],
        },
      },
      {
        id: ["CAEN / THURY HARCOURT"],
        name: "THURY HARCOURT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "THURY HARCOURT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:118",
    routeIds: ["NOMAD:118", "NOMAD:ATOUMOD040:Line:1004457:LOC"],
    noCartridge: true,
    name: "118",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["FALAISE / CAEN", "FLERS / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "118",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / FALAISE"],
        name: "FALAISE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "118",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FALAISE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:119",
    routeIds: ["NOMAD:119", "NOMAD:ATOUMOD040:Line:1004458:LOC"],
    noCartridge: true,
    name: "119",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["BURES SUR DIVES / CAEN", "PONT L'EVEQUE / CAEN", "DOZULE / CAEN", "TROARN / CAEN", "ESCOVILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / PONT L'EVEQUE"],
        name: "PONT L'EVEQUE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONT L'EVEQUE" }],
        },
      },
      {
        id: ["CAEN / DOZULE"],
        name: "DOZULE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DOZULE" }],
        },
      },
      {
        id: ["CAEN / ESCOVILLE"],
        name: "ESCOVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ESCOVILLE" }],
        },
      },
      {
        id: ["CAEN / TROARN"],
        name: "TROARN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TROARN" }],
        },
      },
      {
        id: ["CAEN / BURES SUR DIVES"],
        name: "BURES SUR DIVES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BURES SUR DIVES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:120",
    routeIds: ["NOMAD:120", "NOMAD:ATOUMOD040:Line:1004464:LOC"],
    noCartridge: true,
    name: "120",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: [
          "COLLEVILLE SUR MER / BAYEUX",
          "GRANDCAMP MAISY / BAYEUX",
          "PORT EN BESSIN HUPPAIN / BAYEUX",
          "SAINTE HONORINE DES PERTES / BAYEUX",
        ],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["BAYEUX / GRANDCAMP MAISY"],
        name: "GRANDCAMP MAISY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GRANDCAMP MAISY" }],
        },
      },
      {
        id: ["BAYEUX / SAINTE HONORINE DES PERTES"],
        name: "SAINTE HONORINE DES PERTES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "ST-HONORINE-DES-PERTES" }],
        },
      },
      {
        id: ["BAYEUX / PORT EN BESSIN HUPPAIN"],
        name: "PORT EN BESSIN HUPPAIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "PORT-EN-BESSIN-HUPPAIN" }],
        },
      },
      {
        id: ["BAYEUX / COLLEVILLE SUR MER"],
        name: "COLLEVILLE SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "COLLEVILLE-SUR-MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:121",
    routeIds: ["NOMAD:121", "NOMAD:ATOUMOD040:Line:1004465:LOC"],
    noCartridge: true,
    name: "121",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: [
          "TRACY SUR MER / BAYEUX",
          "COURSEULLES SUR MER / BAYEUX",
          "COLLEVILLE SUR MER / BAYEUX",
          "OUISTREHAM / BAYEUX",
          "BERNIERES SUR MER / BAYEUX",
        ],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["BAYEUX / COURSEULLES SUR MER"],
        name: "COURSEULLES SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "COURSEULLES-SUR-MER" }],
        },
      },
      {
        id: ["BAYEUX / SOMMERVIEU"],
        name: "SOMMERVIEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SOMMERVIEU" }],
        },
      },
      {
        id: ["BAYEUX / OUISTREHAM"],
        name: "OUISTREHAM",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "OUISTREHAM" }],
        },
      },
      {
        id: ["BAYEUX / LUC SUR MER"],
        name: "LUC SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LUC SUR MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:123",
    routeIds: ["NOMAD:123", "NOMAD:ATOUMOD040:Line:1004460:LOC"],
    noCartridge: true,
    name: "123",
    colors: { background: "#f7941d", text: "#000000" },
    destinations: [
      {
        id: ["LA RIVIERE-SAINT-SAUVEUR / LISIEUX", "LE HAVRE / LISIEUX", "HONFLEUR / LISIEUX"],
        name: "LISIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISIEUX" }],
        },
      },
      {
        id: ["LISIEUX / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["LISIEUX / LA RIVIERE SAINT SAUVEUR"],
        name: "LA RIVIERE SAINT SAUVEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LA RIVIERE SAINT-SAUVEUR" }],
        },
      },
      {
        id: ["HONFLEUR / LE HAVRE EXPRESS"],
        name: "LE HAVRE EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE EXPRESS" }],
        },
      },
      {
        id: ["LISIEUX / HONFLEUR", "LE HAVRE / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:403",
    routeIds: ["NOMAD:403", "NOMAD:ATOUMOD040:Line:1008221:LOC"],
    noCartridge: true,
    name: "403",
    colors: { background: "#e8afd0", text: "#000000" },
    destinations: [
      {
        id: [
          "FLERS / MESSEI / LA FERTÉ MACÉ",
          "MESSEI / LA FERTÉ MACÉ",
          "COUTERNE / LA FERTÉ MACÉ",
          "BAGNOLES DE L'ORNE / LA FERTÉ MACÉ",
        ],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
      {
        id: [
          "BAGNOLES DE L'ORNE / ALENÇON",
          "SAINT-DENIS-SUR-SARTHON / ALENÇON",
          "FLERS / LA FERTÉ MACÉ / ALENÇON",
          "FLERS / BAGNOLES DE L'ORNE / ALENÇON",
          "LALACELLE / ALENÇON",
        ],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["FLERS / BAGNOLES DE L'ORNE", "LA FERTÉ MACÉ / BAGNOLES DE L'ORNE"],
        name: "BAGNOLES DE L'ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BAGNOLES DE L'ORNE" }],
        },
      },
      {
        id: ["ALENÇON / CONDE-SUR-SARTHE"],
        name: "CONDE-SUR-SARTHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CONDE-SUR-SARTHE" }],
        },
      },
      {
        id: [
          "ALENÇON / LA FERTÉ MACÉ / FLERS",
          "LA FERTÉ MACÉ / MESSEI / FLERS",
          "BAGNOLES DE L'ORNE / LA FERTÉ / FLERS",
          "LA SAUVAGÈRE / FLERS",
          "ALENÇON / COUTERNE / FLERS",
          "BAGNOLES DE L'ORNE / MESSEI / FLERS",
          "ALENÇON / BAGNOLES / FLERS",
          "COUTERNE / LA FERTÉ MACÉ / FLERS",
        ],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["ALENÇON / PACE / LALACELLE"],
        name: "LALACELLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LALACELLE" }],
        },
      },
      {
        id: ["ALENÇON / PACE / SAINT-DENIS-SUR-SARTHON"],
        name: "SAINT-DENIS-SUR-SARTHON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-DENIS-SUR-SARTHON" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / COUTERNE"],
        name: "COUTERNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTERNE" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / MEHOUDIN", "FLERS / LA FERTÉ MACÉ / MEHOUDIN"],
        name: "MEHOUDIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MEHOUDIN" }],
        },
      },
      {
        id: ["FLERS / MESSEI / LA FERRIÈRE AUX ETANGS"],
        name: "LA FERRIÈRE AUX ETANGS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LA FERRIERE AUX ETANGS" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / LA SAUVAGÈRE"],
        name: "LA SAUVAGÈRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA SAUVAGERE" }],
        },
      },
      {
        id: ["FLERS / MESSEI"],
        name: "MESSEI",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MESSEI" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:404",
    routeIds: ["NOMAD:404", "NOMAD:ATOUMOD040:Line:1008223:LOC"],
    noCartridge: true,
    name: "404",
    colors: { background: "#845f34", text: "#ffffff" },
    destinations: [
      {
        id: [
          "CUISSAI / LONRAI / ALENÇON",
          "LA FERTÉ MACÉ / CARROUGES / ALENÇON",
          "LA FERTÉ MACÉ / DAMIGNY / ALENÇON",
          "LA FERTÉ MACÉ / LONRAI / ALENÇON",
        ],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["ALENÇON / LONRAI / CUISSAI"],
        name: "CUISSAI",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CUISSAI" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / CARROUGES / SEES"],
        name: "SEES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SEES" }],
        },
      },
      {
        id: [
          "ALENÇON / CARROUGES / LA FERTÉ MACÉ",
          "ALENÇON / LONRAI / LA FERTÉ MACÉ",
          "SEES / CARROUGES / LA FERTÉ MACÉ",
        ],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:405",
    routeIds: ["NOMAD:405", "NOMAD:ATOUMOD040:Line:1008225:LOC"],
    noCartridge: true,
    name: "405",
    colors: { background: "#abb96b", text: "#000000" },
    destinations: [
      {
        id: ["DOMFRONT / BAGNOLES / LA FERTÉ-MACÉ"],
        name: "LA FERTÉ-MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#abb96b",
            textColor: "#000000",
            text: "405",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE-MACE" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / BAGNOLES / DOMFRONT", "LA FERTÉ MACÉ / CHAMPSECRET / DOMFRONT"],
        name: "DOMFRONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#abb96b",
            textColor: "#000000",
            text: "405",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DOMFRONT" }],
        },
      },
      {
        id: ["DOMFRONT / BAGNOLES / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#abb96b",
            textColor: "#000000",
            text: "405",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:406",
    routeIds: ["NOMAD:406", "NOMAD:ATOUMOD040:Line:1008227:LOC"],
    noCartridge: true,
    name: "406",
    colors: { background: "#7a7ab8", text: "#000000" },
    destinations: [
      {
        id: ["LONLAY-L'ABBAYE / DOMFRONT / FLERS", "DOMFRONT / LE CHATELLIER / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["LONLAY-L'ABBAYE / DOMFRONT", "FLERS / LE CHATELLIER / DOMFRONT"],
        name: "DOMFRONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DOMFRONT" }],
        },
      },
      {
        id: [
          "FLERS / LE CHATELLIER / LONLAY-L'ABBAYE",
          "FLERS / DOMFRONT / LONLAY-L'ABBAYE",
          "DOMFRONT / LONLAY-L'ABBAYE",
        ],
        name: "LONLAY-L'ABBAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LONLAY-L'ABBAYE" }],
        },
      },
      {
        id: ["DOMFRONT / ST-BOMER-LES-FORGES"],
        name: "ST-BOMER-LES-FORGES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-BOMER-LES-FORGES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:407",
    routeIds: ["NOMAD:407", "NOMAD:ATOUMOD040:Line:1008229:LOC"],
    noCartridge: true,
    name: "407",
    colors: { background: "#c69615", text: "#000000" },
    destinations: [
      {
        id: ["LA FERTÉ MACÉ / SAINT-GEORGES-D'ANNEBECQ"],
        name: "SAINT-GEORGES-D'ANNEBECQ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "ST-GEORGES-D'ANNEBECQ" }],
        },
      },
      {
        id: ["BAGNOLES DE L'ORNE / LA FERTÉ / ARGENTAN", "Bagnoles de l'Orne > Argentan"],
        name: "ARGENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / RANES / BAGNOLES DE L'ORNE", "ARGENTAN / BAGNOLES DE L'ORNE", "Argentan > Bagnoles de l'Orne"],
        name: "BAGNOLES DE L'ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BAGNOLES DE L'ORNE" }],
        },
      },
      {
        id: ["ARGENTAN / ÉCOUCHÉ"],
        name: "ÉCOUCHÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ECOUCHE" }],
        },
      },
      {
        id: ["ARGENTAN / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:409",
    routeIds: ["NOMAD:409", "NOMAD:ATOUMOD040:Line:1008233:LOC"],
    noCartridge: true,
    name: "409",
    colors: { background: "#b0cb1d", text: "#000000" },
    destinations: [
      {
        id: ["VIMOUTIERS / GACÉ"],
        name: "GACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GACE" }],
        },
      },
      {
        id: ["VIMOUTIERS / SEES / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["CHAILLOUÉ / SEES", "NONANT-LE-PIN / CHAILLOUÉ / SEES"],
        name: "SEES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SEES" }],
        },
      },
      {
        id: [
          "GACÉ / NEUVILLE-SUR-TOUQUES / VIMOUTIERS",
          "SÉES / GACÉ / VIMOUTIERS",
          "ALENÇON / SEES / VIMOUTIERS",
          "ALENÇON / GACÉ / VIMOUTIERS",
        ],
        name: "VIMOUTIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIMOUTIERS" }],
        },
      },
      {
        id: ["SEES / CHAILLOUÉ"],
        name: "CHAILLOUÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CHAILLOUE" }],
        },
      },
      {
        id: ["SEES / NONANT-LE-PIN"],
        name: "NONANT-LE-PIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NONANT-LE-PIN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:410",
    routeIds: ["NOMAD:410", "NOMAD:ATOUMOD040:Line:1008235:LOC"],
    noCartridge: true,
    name: "410",
    colors: { background: "#eba457", text: "#000000" },
    destinations: [
      {
        id: ["VIMOUTIERS / TRUN / ARGENTAN", "TRUN / ARGENTAN"],
        name: "ARGENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / TRUN / VIMOUTIERS"],
        name: "VIMOUTIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIMOUTIERS" }],
        },
      },
      {
        id: ["ARGENTAN / BAILLEUL / TRUN"],
        name: "TRUN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TRUN" }],
        },
      },
      {
        id: ["ARGENTAN / BAILLEUL"],
        name: "BAILLEUL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BAILLEUL" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:412",
    routeIds: ["NOMAD:412", "NOMAD:ATOUMOD040:Line:1008239:LOC"],
    noCartridge: true,
    name: "412",
    colors: { background: "#b4569b", text: "#000000" },
    destinations: [
      {
        id: [
          "GACÉ / SAINTE-GAUBURGE / L'AIGLE",
          "RAI / AUBE / L'AIGLE",
          "AUBE / L'AIGLE",
          "SAINTE-GAUBURGE-SAINTE-COLOMBE / L'AIGLE",
        ],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / RAI / AUBE"],
        name: "AUBE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "AUBE" }],
        },
      },
      {
        id: ["L'AIGLE / SAINTE-GAUBURGE / GACÉ"],
        name: "GACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GACE" }],
        },
      },
      {
        id: ["L'AIGLE / SAINTE-GAUBURGE-SAINTE-COLOMBE"],
        name: "SAINTE-GAUBURGE-SAINTE-COLOMBE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [[{ text: "SAINTE-GAUBURGE" }, { text: "SAINTE-COLOMBE" }]],
        },
      },
    ],
  },
  {
    id: "NOMAD:414",
    routeIds: ["NOMAD:414", "NOMAD:ATOUMOD040:Line:1008243:LOC"],
    noCartridge: true,
    name: "414",
    colors: { background: "#e96c0f", text: "#000000" },
    destinations: [
      {
        id: [
          "TOUROUVRE AU PERCHE / L'AIGLE",
          "MORTAGNE-AU-PERCHE / TOUROUVRE / L'AIGLE",
          "MORTAGNE-AU-PERCHE / CRULAI / L'AIGLE",
        ],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LA VENTROUZE"],
        name: "LA VENTROUZE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA VENTROUZE" }],
        },
      },
      {
        id: ["L'AIGLE / TOUROUVRE / RANDONNAI"],
        name: "RANDONNAI",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "RANDONNAI" }],
        },
      },
      {
        id: [
          "L'AIGLE / TOUROUVRE / MORTAGNE-AU-PERCHE",
          "LA VENTROUZE / MORTAGNE-AU-PERCHE",
          "L'AIGLE / MORTAGNE-AU-PERCHE",
        ],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / TOUROUVRE"],
        name: "TOUROUVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TOUROUVRE" }],
        },
      },
      {
        id: ["L'AIGLE / SAINT-LANGIS-LES-MORTAGNE"],
        name: "SAINT-LANGIS-LES-MORTAGNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-LANGIS-LES-MORTAGNE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:415",
    routeIds: ["NOMAD:415", "NOMAD:ATOUMOD040:Line:1008245:LOC"],
    noCartridge: true,
    name: "415",
    colors: { background: "#588ac7", text: "#000000" },
    destinations: [
      {
        id: ["MOULINS-LA-MARCHE / L'AIGLE", "ALENÇON / MOULINS-LA-MARCHE / L'AIGLE", "ALENÇON / LARRE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["ALENÇON / LARRE / MENIL-ERREUX"],
        name: "MENIL-ERREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MENIL-ERREUX" }],
        },
      },
      {
        id: ["ALENÇON / LARRE / ESSAY"],
        name: "ESSAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ESSAY" }],
        },
      },
      {
        id: ["L'AIGLE / MOULINS-LA-MARCHE"],
        name: "MOULINS-LA-MARCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MOULINS-LA-MARCHE" }],
        },
      },
      {
        id: ["L'AIGLE / ESSAY / ALENÇON", "MENIL-ERREUX / SEMALLE / ALENÇON", "COURTOMER / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
    ],
  },

  {
    id: "NOMAD:417",
    routeIds: ["NOMAD:417", "NOMAD:ATOUMOD040:Line:1008247:LOC"],
    noCartridge: true,
    name: "417",
    colors: { background: "#7bb92d", text: "#ffffff" },
    destinations: [
      {
        id: [
          "MORTAGNE-AU-PERCHE / LE MÊLE / ALENÇON",
          "MORTAGNE-AU-PERCHE / ALENÇON",
          "NOGENT-LE-ROTROU / MORTAGNE / ALENÇON",
        ],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: [
          "ALENÇON / LE MÊLE / MORTAGNE-AU-PERCHE",
          "NOGENT-LE-ROTROU / MORTAGNE-AU-PERCHE",
          "LE MÊLE-SUR-SARTHE / MORTAGNE-AU-PERCHE",
        ],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: [
          "ALENÇON / MORTAGNE / NOGENT-LE-ROTROU",
          "MORTAGNE / REMALARD / NOGENT-LE-ROTROU",
          "REMALARD / CONDE / NOGENT-LE-ROTROU",
        ],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / REMALARD"],
        name: "REMALARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "REMALARD" }],
        },
      },
      {
        id: ["LA CHAPELLE-MONTLIGEON / MORTAGNE"],
        name: "MORTAGNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LE MÊLE"],
        name: "LE MÊLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE MELE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / CONDE-SUR-HUISNE", "REMALARD / CONDE-SUR-HUISNE"],
        name: "CONDE-SUR-HUISNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CONDE-SUR-HUISNE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-P / LA CHAPELLE-MONTLIGEON"],
        name: "LA CHAPELLE-MONTLIGEON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "LA CHAPELLE-MONTLIGEON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:418",
    routeIds: ["NOMAD:418", "NOMAD:ATOUMOD040:Line:1008249:LOC"],
    noCartridge: true,
    name: "418",
    colors: { background: "#e5d461", text: "#000000" },
    destinations: [
      {
        id: ["BELLÊME / MAMERS / ALENÇON", "NOGENT-LE-ROTROU / BELLEME / ALENÇON", "MAMERS / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["ALENÇON / MAMERS / BELLÊME", "NOGENT-LE-ROTROU / BERD'HUIS / BELLÊME"],
        name: "BELLÊME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELLEME" }],
        },
      },
      {
        id: ["ALENÇON / MAMERS", "NOGENT-LE-ROTROU / BELLÊME / MAMERS"],
        name: "MAMERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MAMERS" }],
        },
      },
      {
        id: [
          "ALENÇON / MAMERS / NOGENT-LE-ROTROU",
          "MAMERS / BELLÊME / NOGENT-LE-ROTROU",
          "BERD'HUIS / NOGENT-LE-ROTROU",
          "BELLÊME / NOGENT-LE-ROTROU",
        ],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / BERD'HUIS"],
        name: "BERD'HUIS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BERD'HUIS" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / NOCE"],
        name: "NOCE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOCE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:419",
    routeIds: ["NOMAD:419", "NOMAD:ATOUMOD040:Line:1008251:LOC"],
    noCartridge: true,
    name: "419",
    colors: { background: "#147684", text: "#ffffff" },
    destinations: [
      {
        id: [
          "CETON / BELLÊME / MORTAGNE-AU-PERCHE",
          "IGÉ / BELLÊME / MORTAGNE-AU-PERCHE",
          "LE GUÉ-DE-LA-CHÂINE / MORTAGNE-AU-PERCHE",
        ],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / BELLÊME / CETON"],
        name: "CETON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CETON" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LE GUÉ-DE-LA-CHÂINE"],
        name: "LE GUÉ-DE-LA-CHÂINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE GUE-DE-LA-CHAINE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / BELLÊME"],
        name: "BELLÊME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BELLEME" }],
        },
      },
    ],
  },

  {
    id: "NOMAD:501",
    routeIds: ["NOMAD:501", "NOMAD:ATOUMOD040:Line:1003047:LOC"],
    noCartridge: true,
    name: "501",
    colors: { background: "#42539e", text: "#ffffff" },
    destinations: [
      {
        id: ["DIEPPE / LUNERAY"],
        name: "LUNERAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LUNERAY" }],
        },
      },
      {
        id: ["DIEPPE / CRASVILLE-LA-R"],
        name: "CRASVILLE-LA-R",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "CRASVILLE-LA-ROCQUEFORT" }],
        },
      },
      {
        id: ["DIEPPE / BRACHY"],
        name: "BRACHY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BRACHY" }],
        },
      },
      {
        id: ["LUNERAY / DIEPPE", "LA GAILLARDE / DIEPPE", "BRACHY / DIEPPE", "FONTAINE-LE-DUN / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / LA GAILLARDE"],
        name: "LA GAILLARDE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA GAILLARDE" }],
        },
      },
      {
        id: ["DIEPPE / ST-PIERRE-LE-VIEUX"],
        name: "ST-PIERRE-LE-VIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "ST-PIERRE-LE-VIEUX" }],
        },
      },
      {
        id: ["DIEPPE / FONTAINE-LE-DUN"],
        name: "FONTAINE-LE-DUN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FONTAINE-LE-DUN" }],
        },
      },
    ],
  },

  {
    id: "NOMAD:503",
    routeIds: ["NOMAD:503", "NOMAD:ATOUMOD040:Line:1003048:LOC"],
    noCartridge: true,
    name: "503",
    colors: { background: "#cab100", text: "#000000" },
    destinations: [
      {
        id: ["YVETOT / VILLEQUIER"],
        name: "VILLEQUIER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VILLEQUIER" }],
        },
      },
      {
        id: ["YVETOT / CAUDEBEC-EN-C"],
        name: "CAUDEBEC-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAUDEBEC-EN-CAUX" }],
        },
      },
      {
        id: ["YVETOT / BOIS-HIMONT"],
        name: "BOIS-HIMONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOIS-HIMONT" }],
        },
      },
      {
        id: [
          "ANQUETIERVILLE / YVETOT",
          "SAINT-WANDRILLE-R / YVETOT",
          "CAUDEBEC-EN-C / YVETOT",
          "VILLEQUIER / YVETOT",
          "BOIS-HIMONT / YVETOT",
        ],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:504",
    routeIds: ["NOMAD:504", "NOMAD:ATOUMOD040:Line:1003049:LOC"],
    noCartridge: true,
    name: "504",
    colors: { background: "#dcadcd", text: "#000000" },
    destinations: [
      {
        id: ["BRÉAUTÉ / ÉTRETAT"],
        name: "Étretat",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#dcadcd",
            textColor: "#000000",
            text: "504",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ETRETAT" }],
        },
      },
      {
        id: ["ÉTRETAT / BRÉAUTÉ"],
        name: "Bréauté",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#dcadcd",
            textColor: "#000000",
            text: "504",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BREAUTE" }],
        },
      },
    ],
  },

  {
    id: "NOMAD:506",
    routeIds: ["NOMAD:506", "NOMAD:ATOUMOD040:Line:1003051:LOC", "NOMAD:ATOUMOD040:Line:1010307:LOC"],
    noCartridge: true,
    name: "506",
    colors: { background: "#5665ab", text: "#ffffff" },
    destinations: [
      {
        id: ["LE HAVRE / CAUDEBEC-EN-C"],
        name: "CAUDEBEC-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAUDEBEC-EN-CAUX" }],
        },
      },
      {
        id: ["LE HAVRE / BOLBEC"],
        name: "BOLBEC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
      {
        id: ["LE HAVRE / NOTRE-DAME-DE-GRAVENCHON"],
        name: "NOTRE-DAME-DE-GRAVENCHON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "N.-D.-DE-GRAVENCHON" }],
        },
      },
      {
        id: ["LE HAVRE / LILLEBONNE"],
        name: "LILLEBONNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LILLEBONNE" }],
        },
      },
      {
        id: ["LE HAVRE / LA FRÉNAYE"],
        name: "LA FRÉNAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA FRENAYE" }],
        },
      },
      {
        id: [
          "LILLEBONNE / LE HAVRE",
          "CAUDEBEC-EN-C / LE HAVRE",
          "BOLBEC / LE HAVRE",
          "NOTRE-DAME-DE-GRAVENCHON / LE HAVRE",
        ],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:507",
    routeIds: ["NOMAD:507", "NOMAD:ATOUMOD040:Line:1003053:LOC"],
    noCartridge: true,
    name: "507",
    colors: { background: "#9ab36c", text: "#000000" },
    destinations: [
      {
        id: [
          "BOLBEC / FÉCAMP",
          "BRETTEVILLE-DU-GRAND-CAUX / FÉCAMP",
          "HOUQUETOT / FÉCAMP",
          "MANNEVILLE-LA-G / FÉCAMP",
          "ANNOUVILLE-VILMESNIL / FÉCAMP",
          "VATTETOT-SOUS-B / FÉCAMP",
        ],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["FÉCAMP / AUBERVILLE-LA-R"],
        name: "AUBERVILLE-LA-R",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "AUBERVILLE-LA-RENAULT" }],
        },
      },
      {
        id: ["FÉCAMP / BOLBEC", "GODERVILLE / BOLBEC"],
        name: "BOLBEC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
      {
        id: ["FÉCAMP / BRÉAUTÉ"],
        name: "BRÉAUTÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BREAUTE" }],
        },
      },
      {
        id: ["FÉCAMP / BRETTEVILLE-DU-GRAND-CAUX"],
        name: "BRETTEVILLE-DU-GRAND-CAUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BRETTEVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / HOUQUETOT"],
        name: "HOUQUETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HOUQUETOT" }],
        },
      },
      {
        id: ["FÉCAMP / VATTETOT-SOUS-B"],
        name: "VATTETOT-SOUS-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "VATTETOT-SOUS-BEAUMONT" }],
        },
      },
      {
        id: ["FÉCAMP / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:508",
    routeIds: ["NOMAD:508", "NOMAD:ATOUMOD040:Line:1003054:LOC"],
    noCartridge: true,
    name: "508",
    colors: { background: "#ec413d", text: "#000000" },
    destinations: [
      {
        id: ["FÉCAMP / ÉPREVILLE"],
        name: "ÉPREVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EPREVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / HERMEVILLE"],
        name: "HERMEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HERMEVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / LE HAVRE", "ST-SAUVEUR-D'ÉMALLEVILLE / LE HAVRE", "VALMONT / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["FÉCAMP / MONTIVILLIERS", "GODERVILLE / MONTIVILLIERS"],
        name: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS" }],
        },
      },
      {
        id: ["FÉCAMP / TURRETOT"],
        name: "TURRETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TURRETOT" }],
        },
      },
      {
        id: [
          "ANGERVILLE-L'ORCHER / FÉCAMP",
          "GODERVILLE / FÉCAMP",
          "HERMEVILLE / FÉCAMP",
          "LE HAVRE / FÉCAMP",
          "MANIQUERVILLE / FÉCAMP",
          "MONTIVILLIERS / FÉCAMP",
          "ST-MARTIN-DU-BEC / FÉCAMP",
          "TURRETOT / FÉCAMP",
        ],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["LE HAVRE / VALMONT"],
        name: "VALMONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VALMONT" }],
        },
      },
      {
        id: ["MONTIVILLIERS / ST-SAUVEUR-D'ÉMALLEVILLE"],
        name: "ST-SAUVEUR-D'ÉMALLEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [[{ text: "SAINT-SAUVEUR" }, { text: "D'EMALLEVILLE" }]],
        },
      },
      {
        id: ["FÉCAMP / ANGERVILLE-L'ORCHER"],
        name: "ANGERVILLE-L'ORCHER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "ANGERVILLE-L'ORCHER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:509R",
    routeIds: ["NOMAD:509R", "NOMAD:ATOUMOD040:Line:1009847:LOC"],
    noCartridge: true,
    name: "509",
    colors: { background: "#bf922a", text: "#000000" },
    destinations: [
      {
        id: [
          "BEAUREPAIRE / FÉCAMP",
          "BÉNOUVILLE / FÉCAMP",
          "GERVILLE / FÉCAMP",
          "CRIQUEBEUF-EN-C / FÉCAMP",
          "CUVERVILLE / FÉCAMP",
          "ÉTRETAT / FÉCAMP",
          "HEUQUEVILLE / FÉCAMP",
          "LE HAVRE / FÉCAMP",
          "LES LOGES / FÉCAMP",
          "VATTETOT-SUR-M / FÉCAMP",
          "VILLAINVILLE / FÉCAMP",
          "YPORT / FÉCAMP",
          "FROBERVILLE / FÉCAMP",
          "OCTEVILLE-SUR-M / FÉCAMP",
        ],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["LE HAVRE / VATTETOT-SUR-M"],
        name: "VATTETOT-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VATTETOT-SUR-MER" }],
        },
      },
      {
        id: ["LE HAVRE / YPORT"],
        name: "YPORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YPORT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:509A",
    routeIds: ["NOMAD:509A", "NOMAD:ATOUMOD040:Line:1003055:LOC"],
    noCartridge: true,
    name: "509",
    colors: { background: "#bf922a", text: "#000000" },
    destinations: [
      {
        id: ["FÉCAMP / BÉNOUVILLE"],
        name: "BÉNOUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BENOUVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / CUVERVILLE"],
        name: "CUVERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CUVERVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / ÉCRAINVILLE"],
        name: "ÉCRAINVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ECRAINVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / GONNEVILLE-LA-MALLET"],
        name: "GONNEVILLE-LA-MALLET",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "GONNEVILLE-LA-MALLET" }],
        },
      },
      {
        id: ["FÉCAMP / HEUQUEVILLE"],
        name: "HEUQUEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HEUQUEVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["FÉCAMP / LES LOGES"],
        name: "LES LOGES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES LOGES" }],
        },
      },
      {
        id: ["FÉCAMP / VATTETOT-SUR-M"],
        name: "VATTETOT-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VATTETOT-SUR-MER" }],
        },
      },
      {
        id: ["FÉCAMP / VILLAINVILLE"],
        name: "VILLAINVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VILLAINVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / YPORT"],
        name: "YPORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YPORT" }],
        },
      },
      {
        id: ["FÉCAMP / FROBERVILLE"],
        name: "FROBERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FROBERVILLE" }],
        },
      },
      {
        id: ["FROBERVILLE / MONTIVILLIERS"],
        name: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS" }],
        },
      },
    ],
  },

  {
    id: "NOMAD:515",
    routeIds: ["NOMAD:515", "NOMAD:ATOUMOD040:Line:1003068:LOC"],
    noCartridge: true,
    name: "515",
    colors: { background: "#ec7223", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / BELLENCOMBRE"],
        name: "BELLENCOMBRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELLENCOMBRE" }],
        },
      },
      {
        id: ["DIEPPE / ST-AUBIN-SUR-S", "ST-SAËNS / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
      {
        id: ["ST-AUBIN-SUR-S / LA CHAPELLE-DU-BOURGAY", "DIEPPE / LA CHAPELLE-DU-BOURGAY"],
        name: "LA CHAPELLE-DU-BOURGAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LA CHAPELLE-DU-BOURGAY" }],
        },
      },
      {
        id: [
          "MONTREUIL-EN-C / DIEPPE",
          "TORCY-LE-PETIT / DIEPPE",
          "BELLENCOMBRE / DIEPPE",
          "ST-SAËNS / DIEPPE",
          "LA CHAUSSÉE / DIEPPE",
        ],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / NOTRE-DAME-DU-PARC"],
        name: "NOTRE-DAME-DU-PARC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOTRE-DAME-DU-PARC" }],
        },
      },
      {
        id: ["DIEPPE / LES GDES-VENTES"],
        name: "LES GDES-VENTES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES GDES-VENTES" }],
        },
      },
      {
        id: ["DIEPPE / ST-SAËNS"],
        name: "ST-SAËNS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-SAENS" }],
        },
      },
      {
        id: ["DIEPPE / TOURVILLE-SUR-ARQUES"],
        name: "TOURVILLE-SUR-ARQUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "TOURVILLE-SUR-ARQUES" }],
        },
      },
      {
        id: ["DIEPPE / LA CHAUSSÉE"],
        name: "LA CHAUSSÉE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA CHAUSSEE" }],
        },
      },
      {
        id: ["DIEPPE / MONTREUIL-EN-C"],
        name: "MONTREUIL-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTREUIL-EN-CAUX" }],
        },
      },
      {
        id: ["DIEPPE / CROPUS"],
        name: "CROPUS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CROPUS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:516",
    routeIds: ["NOMAD:516", "NOMAD:ATOUMOD040:Line:1003069:LOC"],
    noCartridge: true,
    name: "516",
    colors: { background: "#73bb45", text: "#ffffff" },
    destinations: [
      {
        id: ["DIEPPE / ST-OUEN-SOUS-BAILLY"],
        name: "ST-OUEN-SOUS-BAILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-OUEN-SOUS-BAILLY" }],
        },
      },
      {
        id: ["DIEPPE / BAILLY-EN-R"],
        name: "BAILLY-EN-R",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAILLY-EN-RIVIERE" }],
        },
      },
      {
        id: ["DIEPPE / ENVERMEU"],
        name: "ENVERMEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ENVERMEU" }],
        },
      },
      {
        id: ["DIEPPE / FRESNOY-FOLNY"],
        name: "FRESNOY-FOLNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FRESNOY-FOLNY" }],
        },
      },
      {
        id: ["DIEPPE / LONDINIÈRES"],
        name: "LONDINIÈRES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LONDINIERES" }],
        },
      },
      {
        id: ["DIEPPE / BRUNVILLE"],
        name: "BRUNVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BRUNVILLE" }],
        },
      },
      {
        id: [
          "BRUNVILLE / DIEPPE",
          "ENVERMEU / DIEPPE",
          "LONDINIÈRES / DIEPPE",
          "ST-OUEN-SOUS-BAILLY / DIEPPE",
          "FRESNOY-FOLNY / DIEPPE",
        ],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ENVERMEU / ST-AUBIN-SUR-S", "FRESNOY-FOLNY / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:517",
    routeIds: ["NOMAD:517", "NOMAD:ATOUMOD040:Line:1003070:LOC"],
    noCartridge: true,
    name: "517",
    colors: { background: "#e9d461", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / DERCHIGNY"],
        name: "DERCHIGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DERCHIGNY" }],
        },
      },
      {
        id: ["DIEPPE / BELLEVILLE-SUR-M"],
        name: "BELLEVILLE-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELLEVILLE-SUR-MER" }],
        },
      },
      {
        id: ["DIEPPE / BERNEVAL-LE-GRAND"],
        name: "BERNEVAL-LE-GRAND",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BERNEVAL-LE-GRAND" }],
        },
      },
      {
        id: ["DIEPPE / PENLY", "ST-AUBIN-SUR-S / PENLY"],
        name: "PENLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PENLY" }],
        },
      },
      {
        id: ["DIEPPE / ST-MARTIN-EN-C"],
        name: "ST-MARTIN-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-MARTIN-EN-CAUX" }],
        },
      },
      {
        id: [
          "BELLEVILLE-SUR-M / DIEPPE",
          "BERNEVAL-LE-GRAND / DIEPPE",
          "BRACQUEMONT / DIEPPE",
          "PENLY / DIEPPE",
          "ST-MARTIN-EN-C / DIEPPE",
          "DERCHIGNY / DIEPPE",
        ],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ST-MARTIN-EN-C / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:518",
    routeIds: ["NOMAD:518", "NOMAD:ATOUMOD040:Line:1003071:LOC"],
    noCartridge: true,
    name: "518",
    colors: { background: "#e7accc", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / ENVERMEU"],
        name: "ENVERMEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ENVERMEU" }],
        },
      },
      {
        id: ["DIEPPE / ST-JACQUES-D'A"],
        name: "ST-JACQUES-D'A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-JACQUES-D'A" }],
        },
      },
      {
        id: ["DIEPPE / ST-NICOLAS-D'A", "ST-AUBIN-SUR-S / ST-NICOLAS-D'A"],
        name: "ST-NICOLAS-D'A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-NICOLAS-D'A" }],
        },
      },
      {
        id: ["ST-JACQUES-D'A / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
      {
        id: ["ST-JACQUES-D'A / DIEPPE", "ST-NICOLAS-D'A / DIEPPE", "ENVERMEU / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:519",
    routeIds: ["NOMAD:519", "NOMAD:ATOUMOD040:Line:1003072:LOC"],
    noCartridge: true,
    name: "519",
    colors: { background: "#af599e", text: "#000000" },
    destinations: [
      {
        id: ["BIVILLE-SUR-M / EU", "TOCQUEVILLE-SUR-EU / EU", "DIEPPE / EU"],
        name: "EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EU" }],
        },
      },
      {
        id: ["BIVILLE-SUR-M / LE TRÉPORT", "CRIEL-SUR-M / LE TRÉPORT"],
        name: "LE TRÉPORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE TREPORT" }],
        },
      },
      {
        id: ["EU / BIVILLE-SUR-M", "LE TRÉPORT / BIVILLE-SUR-M"],
        name: "BIVILLE-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BIVILLE-SUR-MER" }],
        },
      },
      {
        id: ["EU / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["LE TRÉPORT / CRIEL-SUR-M"],
        name: "CRIEL-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CRIEL-SUR-MER" }],
        },
      },
      {
        id: ["LE TRÉPORT / FLOCQUES"],
        name: "FLOCQUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLOCQUES" }],
        },
      },
      {
        id: ["LE TRÉPORT / TOCQUEVILLE-SUR-EU"],
        name: "TOCQUEVILLE-SUR-EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TOCQUEVILLE-SUR-EU" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:520",
    routeIds: ["NOMAD:520", "NOMAD:ATOUMOD040:Line:1003073:LOC", "NOMAD:ATOUMOD040:Line:1010308:LOC"],
    noCartridge: true,
    name: "520",
    colors: { background: "#5187c2", text: "#000000" },
    destinations: [
      {
        id: [
          "MAUCOMBLE / ROUEN",
          "NEUFCHÂTEL-EN-B / ROUEN",
          "ST-SAËNS / ROUEN",
          "BUCHY / ROUEN",
          "CAILLY / ROUEN",
          "LA RUE-ST-PIERRE / ROUEN",
          "QUINCAMPOIX / ROUEN",
          "ESTEVILLE / ROUEN",
        ],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / NEUFCHÂTEL-EN-B"],
        name: "NEUFCHÂTEL-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NEUFCHATEL-EN-BRAY" }],
        },
      },
      {
        id: ["FONTAINE-LE-B / ST-GEORGES-SUR-F"],
        name: "ST-GEORGES-SUR-F",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-GEORGES-SUR-FONTAINE" }],
        },
      },
      {
        id: ["ROUEN / BUCHY"],
        name: "BUCHY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BUCHY" }],
        },
      },
      {
        id: ["ROUEN / CAILLY"],
        name: "CAILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAILLY" }],
        },
      },
      {
        id: ["ROUEN / FONTAINE-LE-B"],
        name: "FONTAINE-LE-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FONTAINE-LE-BOURG" }],
        },
      },
      {
        id: ["ROUEN / LA RUE-ST-PIERRE"],
        name: "LA RUE-ST-PIERRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA RUE-ST-PIERRE" }],
        },
      },
      {
        id: ["ROUEN / QUINCAMPOIX"],
        name: "QUINCAMPOIX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "QUINCAMPOIX" }],
        },
      },
      {
        id: ["ROUEN / ST-MARTIN-O"],
        name: "ST-MARTIN-O",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "ST-MARTIN-OSMONVILLE" }],
        },
      },
      {
        id: ["ROUEN / ST-SAËNS"],
        name: "ST-SAËNS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-SAENS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:522",
    routeIds: ["NOMAD:522", "NOMAD:ATOUMOD040:Line:1003076:LOC"],
    noCartridge: true,
    name: "522",
    colors: { background: "#e52227", text: "#ffffff" },
    destinations: [
      {
        id: ["ELBEUF-SUR-A / MARTAINVILLE-É"],
        name: "MARTAINVILLE-É",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "MARTAINVILLE-EPREVILLE" }],
        },
      },
      {
        id: ["ROUEN / CROISY-SUR-A"],
        name: "CROISY-SUR-A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CROISY-SUR-ANDELLE" }],
        },
      },
      {
        id: ["ROUEN / GOURNAY-EN-B"],
        name: "GOURNAY-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GOURNAY-EN-BRAY" }],
        },
      },
      {
        id: ["ELBEUF-SUR-A / SERVAVILLE-S", "GRAINVILLE-SUR-R / SERVAVILLE-S", "CROISY-SUR-A / SERVAVILLE-S"],
        name: "SERVAVILLE-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SERVAVILLE-SALMONVILLE" }],
        },
      },
      {
        id: ["SERVAVILLE-S / ELBEUF-SUR-A"],
        name: "ELBEUF-SUR-A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF-SUR-ANDELLE" }],
        },
      },
      {
        id: ["ROUEN / LA FEUILLIE"],
        name: "LA FEUILLIE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA FEUILLIE" }],
        },
      },
      {
        id: ["CROISY-SUR-A / ROUEN", "VASCOEUIL / ROUEN", "GOURNAY-EN-B / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / VASCOEUIL"],
        name: "VASCOEUIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VASCOEUIL" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:523",
    routeIds: ["NOMAD:523", "NOMAD:ATOUMOD040:Line:1003078:LOC"],
    noCartridge: true,
    name: "523",
    colors: { background: "#9ac63d", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / ST-MACLOU-DE-FOLLEVILLE"],
        name: "ST-MACLOU-DE-FOLLEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-MACLOU-DE-FOLLEVILLE" }],
        },
      },
      {
        id: [
          "ST-MACLOU-DE-FOLLEVILLE / DIEPPE",
          "VAL-DE-SAÂNE / DIEPPE",
          "BERTRIMONT / DIEPPE",
          "HEUGLEVILLE SUR SCIE / DIEPPE",
        ],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / ST-VICTOR l'ABBAYE"],
        name: "ST-VICTOR l'ABBAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-VICTOR-L'ABBAYE" }],
        },
      },
      {
        id: ["DIEPPE / ST MACLOU DE FOLLEVILLE"],
        name: "ST MACLOU DE FOLLEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-MACLOU-DE-FOLLEVILLE" }],
        },
      },
      {
        id: ["DIEPPE / ETAIMPUIS"],
        name: "ETAIMPUIS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ETAIMPUIS" }],
        },
      },
      {
        id: ["DIEPPE / BERTRIMONT"],
        name: "BERTRIMONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BERTRIMONT" }],
        },
      },
      {
        id: ["DIEPPE / ST-DENIS-SUR-S"],
        name: "ST-DENIS-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-DENIS-SUR-SCIE" }],
        },
      },
      {
        id: ["DIEPPE / VAL-DE-SAÂNE"],
        name: "VAL-DE-SAÂNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VAL-DE-SAANE" }],
        },
      },
      {
        id: ["DIEPPE / AUFFAY"],
        name: "AUFFAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "AUFFAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:524",
    routeIds: ["NOMAD:524", "NOMAD:ATOUMOD040:Line:1003079:LOC"],
    noCartridge: true,
    name: "524",
    colors: { background: "#fbc134", text: "#000000" },
    destinations: [
      {
        id: [
          "BACQUEVILLE-EN-C / DIEPPE",
          "LONGUEVILLE-SUR-S / DIEPPE",
          "VÉNESTANVILLE / DIEPPE",
          "BELMESNIL / DIEPPE",
          "SAÂNE-ST-JUST / DIEPPE",
        ],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / BACQUEVILLE-EN-C"],
        name: "BACQUEVILLE-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "BACQUEVILLE-EN-CAUX" }],
        },
      },
      {
        id: ["DIEPPE / BELMESNIL", "ST AUBIN SUR SCIE/ BELMESNIL"],
        name: "BELMESNIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELMESNIL" }],
        },
      },
      {
        id: ["ST-OUEN-LE-M / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
      {
        id: ["DIEPPE / LAMMERVILLE"],
        name: "LAMMERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LAMMERVILLE" }],
        },
      },
      {
        id: ["DIEPPE / VÉNESTANVILLE"],
        name: "VÉNESTANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VENESTANVILLE" }],
        },
      },
      {
        id: ["DIEPPE / SAÂNE-ST-JUST"],
        name: "SAÂNE-ST-JUST",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAANE-SAINT-JUST" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:526",
    routeIds: ["NOMAD:526", "NOMAD:ATOUMOD040:Line:1003057:LOC"],
    noCartridge: true,
    name: "526",
    colors: { background: "#a6cc3a", text: "#000000" },
    destinations: [
      {
        id: ["ROUEN / PAVILLY", "YVETOT / PAVILLY", "YERVILLE / PAVILLY"],
        name: "PAVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PAVILLY" }],
        },
      },
      {
        id: ["PAVILLY / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["BARENTIN / YERVILLE", "PAVILLY / YERVILLE"],
        name: "YERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YERVILLE" }],
        },
      },
      {
        id: ["PAVILLY / ROUEN", "MOTTEVILLE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["YERVILLE / BARENTIN"],
        name: "BARENTIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BARENTIN" }],
        },
      },
      {
        id: ["ST-JEAN-DU-CARDONNAY / ROUMARE"],
        name: "ROUMARE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUMARE" }],
        },
      },
      {
        id: ["ROUMARE / ST-JEAN-DU-CARDONNAY"],
        name: "ST-JEAN-DU-CARDONNAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-JEAN-DU-CARDONNAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:528",
    routeIds: ["NOMAD:528", "NOMAD:ATOUMOD040:Line:1003043:LOC"],
    noCartridge: true,
    name: "528",
    colors: { background: "#78bbe1", text: "#000000" },
    destinations: [
      {
        id: ["BRÉAUTÉ / NOINTOT"],
        name: "Nointot",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOINTOT" }],
        },
      },
      {
        id: ["BRÉAUTÉ / BOLBEC"],
        autoHide: true,
        name: "Bolbec",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
      {
        id: ["BRÉAUTÉ / FAUVILLE-EN-CAUX"],
        autoHide: true,
        name: "Fauville-en-Caux",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FAUVILLE-EN-CAUX" }],
        },
      },
      {
        id: ["BOLBEC / BRÉAUTÉ", "NOINTOT / BRÉAUTÉ"],
        name: "Bréauté",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BREAUTE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:529",
    routeIds: ["NOMAD:529", "NOMAD:ATOUMOD040:Line:1003059:LOC"],
    noCartridge: true,
    name: "529",
    colors: { background: "#f4a94e", text: "#000000" },
    destinations: [
      {
        id: ["GRUGNY / ROUEN", "FONTAINE-LE-B / ROUEN", "CLÈRES / ROUEN", "BOSC-LE-HARD / ROUEN", "MONTVILLE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / MONTVILLE"],
        name: "MONTVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTVILLE" }],
        },
      },
      {
        id: ["ROUEN / FONTAINE-LE-B"],
        name: "FONTAINE-LE-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FONTAINE-LE-BOURG" }],
        },
      },
      {
        id: ["ROUEN / CLÈRES"],
        name: "CLÈRES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CLERES" }],
        },
      },
      {
        id: ["ROUEN / LE BOCASSE"],
        name: "LE BOCASSE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE BOCASSE" }],
        },
      },
      {
        id: ["ROUEN / GRUGNY"],
        name: "GRUGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GRUGNY" }],
        },
      },
      {
        id: ["ROUEN / BOSC-LE-HARD"],
        name: "BOSC-LE-HARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOSC-LE-HARD" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:531",
    routeIds: ["NOMAD:531", "NOMAD:ATOUMOD040:Line:1003058:LOC"],
    noCartridge: true,
    name: "531",
    colors: { background: "#c56927", text: "#ffffff" },
    destinations: [
      {
        id: ["BARENTIN / BARENTIN", "LE TRAIT / BARENTIN"],
        name: "Barentin",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c56927",
            textColor: "#ffffff",
            text: "531",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BARENTIN" }],
        },
      },
      {
        id: ["BARENTIN / LE TRAIT"],
        name: "Le Trait",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c56927",
            textColor: "#ffffff",
            text: "531",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE TRAIT" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "nomad",
  name: "NOMAD Car – Région Normandie",
  routes: nomadCar,
  color: "#ef434d",
  textColor: "#ffffff",
};

export default network;
