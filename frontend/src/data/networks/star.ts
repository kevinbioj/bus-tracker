import { Network, Route } from "~/@types";

const starRoutes: Route[] = [
  {
    id: "STAR:4-0121",
    name: "N1",
    colors: { background: "#004F9E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes Kennedy Guyenne", "Kennedy Guyenne"],
        autoHide: true,
        name: "Kennedy Guyenne",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#004F9E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "N1",
          },
          pages: [{ font: "1510N2E1", text: "KENNEDY GUYENNE" }],
        },
      },
      {
        id: ["Rennes République", "République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#004F9E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "N1",
          },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0122",
    name: "N2",
    colors: { background: "#F39200", text: "#1A171B" },
    destinations: [
      {
        id: ["Rennes La Poterie", "La Poterie"],
        autoHide: true,
        name: "Kennedy Guyenne",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#F39200",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "N2",
          },
          pages: [{ font: "1510N2E1", text: "KENNEDY GUYENNE" }],
        },
      },
      {
        id: ["République", "Rennes République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#F39200",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "N2",
          },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0123",
    name: "N3",
    colors: { background: "#D39D2F", text: "#1A171B" },
    destinations: [
      {
        id: ["Bruz Ker Lann"],
        autoHide: true,
        name: "Ker Lann",
        city: "BRUZ",
        girouette: {
          routeNumber: {
            backgroundColor: "#D39D2F",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "N3",
          },
          pages: [{ text: "BRUZ KER LANN" }],
        },
      },
      {
        id: ["République", "Rennes République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#D39D2F",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "N3",
          },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0124",
    name: "N4",
    colors: { background: "#6F2282", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Atalante", "Rennes Atalante"],
        autoHide: true,
        name: "Atalante",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#6F2282",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "N4",
          },
          pages: [{ text: "ATALANTE" }],
        },
      },
      {
        id: ["République", "Rennes République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#6F2282",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "N4",
          },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0125",
    name: "N5",
    colors: { background: "#FFCC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Atalante", "Rennes Atalante"],
        autoHide: true,
        name: "Atalante",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#FFCC00",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "N5",
          },
          pages: [{ text: "ATALANTE" }],
        },
      },
      {
        id: ["Gayeulles", "Rennes Maurepas Gayeulles"],
        autoHide: true,
        name: "Maurepas-Gayeulles",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#FFCC00",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "N5",
          },
          pages: [{ font: "1508C2E1", text: "MAUREPAS-GAYEULLES" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-1001",
    name: "a",
    colors: { background: "#EE1D23", text: "#FFFFFF" },
    destinations: [
      {
        id: ["La Poterie"],
        name: "La Poterie",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#EE1D23",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "a",
          },
          pages: [{ text: "LA POTERIE" }],
        },
      },
      {
        id: ["Kennedy"],
        name: "Kennedy",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#EE1D23",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "a",
          },
          pages: [{ text: "KENNEDY" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0100",
    name: "NAV",
    colors: { background: "#009C99", text: "#FFFFFF" },
    destinations: [
      {
        id: ["République", "Rennes République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#009C99",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1310C2E1",
            text: "NAV",
          },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0001",
    name: "C1",
    colors: { background: "#95C11E", text: "#1A171B" },
    destinations: [
      {
        id: ["Chantepie"],
        name: "Rosa Parks",
        city: "CHANTEPIE",
        girouette: {
          routeNumber: {
            backgroundColor: "#95C11E",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C1",
          },
          pages: [{ text: "ROSA PARKS" }],
        },
      },
      {
        id: ["Cesson-Viasilva"],
        name: "Cesson-Viasilva",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#95C11E",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C1",
          },
          pages: [{ font: "1510N2E1", text: "CESSON-VIASILVA" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0002",
    name: "C2",
    colors: { background: "#008BD2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Haut Sancé"],
        name: "Haut Sancé",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#008BD2",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C2",
          },
          pages: [{ text: "HAUT SANCE" }],
        },
      },
      {
        id: ["Saint-Grégoire"],
        name: "Champ Daguet",
        city: "SAINT-GRÉGOIRE",
        girouette: {
          routeNumber: {
            backgroundColor: "#008BD2",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C2",
          },
          pages: [{ text: "CHAMP DAGUET" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0003",
    name: "C3",
    colors: { background: "#FFCC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Patton"],
        name: "Patton",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#FFCC00",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C3",
          },
          pages: [{ text: "PATTON" }],
        },
      },
      {
        id: ["Henri Fréville"],
        name: "Henri Fréville",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#FFCC00",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C3",
          },
          pages: [{ text: "HENRI FREVILLE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0004",
    name: "C4",
    colors: { background: "#6F2282", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ZA Saint-Sulpice"],
        name: "ZA Saint-Sulpice",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#6F2282",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C4",
          },
          pages: [{ font: "1510N2E1", spacing: 1, text: "ZA SAINT-SULPICE" }],
        },
      },
      {
        id: ["Plaine de Baud"],
        autoHide: true,
        name: "Plaine de Baud",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#6F2282",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C4",
          },
          pages: [{ font: "1510N2E1", text: "PLAINE DE BAUD" }],
        },
      },
      {
        id: ["République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#6F2282",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C4",
          },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["Grand Quartier"],
        name: "Grand Quartier",
        city: "SAINT-GRÉGOIRE",
        girouette: {
          routeNumber: {
            backgroundColor: "#6F2282",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C4",
          },
          pages: [{ font: "1510N2E1", text: "GRAND QUARTIER" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0005",
    name: "C5",
    colors: { background: "#F39200", text: "#1A171B" },
    destinations: [
      {
        id: ["Lycée Bréquigny"],
        name: "Lycée Bréquigny",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#F39200",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C5",
          },
          pages: [{ font: "1510N2E1", text: "LYCEE BREQUIGNY" }],
        },
      },
      {
        id: ["Joliot-Curie"],
        autoHide: true,
        name: "Joliot-Curie",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#F39200",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C5",
          },
          pages: [{ text: "JOLIOT-CURIE" }],
        },
      },
      {
        id: ["Saint-Laurent"],
        name: "Saint-Laurent",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#F39200",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C5",
          },
          pages: [{ text: "SAINT-LAURENT" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0006",
    name: "C6",
    colors: { background: "#61C3D9", text: "#1A171B" },
    destinations: [
      {
        id: ["Cesson-Sévigné"],
        name: "Rigourdière",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#61C3D9",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C6",
          },
          pages: [{ font: "1510N2E1", text: "CESSON-SEVIGNE" }],
        },
      },
      {
        id: ["Aéroport"],
        name: "Aéroport",
        city: "SAINT-JACQUES-DE-LA-LANDE",
        girouette: {
          routeNumber: {
            backgroundColor: "#61C3D9",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C6",
          },
          pages: [{ text: "AEROPORT" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0007",
    name: "C7",
    colors: { background: "#D39D2F", text: "#1A171B" },
    destinations: [
      {
        id: ["Ch de Gaulle"],
        name: "Charles de Gaulle",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#D39D2F",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C7",
          },
          pages: [{ font: "1508C2E1", spacing: 3, text: "CHARLES DE GAULLE" }],
        },
      },
      {
        id: ["Bruz"],
        name: "Centre",
        city: "BRUZ",
        girouette: {
          routeNumber: {
            backgroundColor: "#D39D2F",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C7",
          },
          pages: [{ text: "BRUZ CENTRE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0047",
    name: "C7ex",
    colors: { background: "#FFDD00", text: "#1A171B" },
    destinations: [
      {
        id: ["Ch de Gaulle"],
        autoHide: true,
        name: "Charles de Gaulle",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#FFDD00",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C7ex",
          },
          pages: [{ font: "1508C2E1", spacing: 3, text: "CHARLES DE GAULLE" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Centre",
        city: "BRUZ",
        girouette: {
          routeNumber: {
            backgroundColor: "#FFDD00",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "C7ex",
          },
          pages: [{ text: "BRUZ CENTRE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0308",
    name: "C8",
    colors: { background: "#00893E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Les Gayeulles"],
        name: "Les Gayeulles",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#00893E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C8",
          },
          pages: [{ text: "LES GAYEULLES" }],
        },
      },
      {
        id: ["Porte de Cleunay"],
        name: "Porte de Cleunay",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#00893E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C8",
          },
          pages: [{ font: "1508C2E1", spacing: 3, text: "PORTE DE CLEUNAY" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0010",
    name: "10",
    colors: { background: "#EF859D", text: "#1A171B" },
    destinations: [
      {
        id: ["Porte de Cleunay"],
        name: "Porte de Cleunay",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#EF859D",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "10",
          },
          pages: [{ font: "1510N2E1", text: "PORTE DE CLEUNAY" }],
        },
      },
      {
        id: ["Beaulieu Chimie"],
        name: "Beaulieu Chimie",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#EF859D",
            textColor: "#1A171B",
            outlineColor: "#FFFFFF",
            text: "10",
          },
          pages: [{ font: "1510N2E1", text: "BEAULIEU CHIMIE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0011",
    name: "11",
    colors: { background: "#004F9E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ZI Ouest"],
        name: "ZI Ouest",
        city: "VEZIN-LE-COQUET",
        girouette: {
          routeNumber: {
            backgroundColor: "#004F9E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [{ text: "ZI OUEST" }],
        },
      },
      {
        id: ["République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#004F9E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["Saint-Saëns"],
        autoHide: true,
        name: "Saint-Saëns",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#004F9E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [{ text: "SAINT-SAENS" }],
        },
      },
      {
        id: ["Anjou"],
        autoHide: true,
        name: "Anjou",
        city: "BRÉCÉ",
        girouette: {
          routeNumber: {
            backgroundColor: "#004F9E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [{ text: "ANJOU" }],
        },
      },
      {
        id: ["La Poterie"],
        name: "La Poterie",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#004F9E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [{ text: "LA POTERIE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0012",
    name: "12",
    colors: { background: "#BA65A5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Villejean-U"],
        name: "Villejean-Université",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA65A5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "12",
          },
          pages: [{ font: "1508C2E1", text: "VILLEJEAN-UNIVERSITE" }],
        },
      },
      {
        id: ["Grand Quartier"],
        autoHide: true,
        name: "Grand Quartier",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA65A5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "12",
          },
          pages: [{ font: "1510N2E1", text: "GRAND QUARTIER" }],
        },
      },
      {
        id: ["Jacques Cartier"],
        autoHide: true,
        name: "Jacques Cartier",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA65A5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "12",
          },
          pages: [{ font: "1510N2E1", text: "JACQUES CARTIER" }],
        },
      },
      {
        id: ["La Poterie"],
        autoHide: true,
        name: "La Poterie",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA65A5",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "12",
          },
          pages: [{ text: "LA POTERIE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0013",
    name: "13",
    colors: { background: "#6F2282", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Porte de Ker Lann"],
        name: "Porte de Ker Lann",
        city: "BRUZ",
        girouette: {
          routeNumber: {
            backgroundColor: "#6F2282",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "13",
          },
          pages: [{ font: "1508C2E1", spacing: 3, text: "PORTE DE KER LANN" }],
        },
      },
      {
        id: ["Chantepie"],
        name: "Cucé",
        city: "CHANTEPIE",
        girouette: {
          routeNumber: {
            backgroundColor: "#6F2282",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "13",
          },
          pages: [{ text: "CHANTEPIE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0014",
    name: "14",
    colors: { background: "#A96F23", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Roazhon Park"],
        name: "Roazhon Park",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#A96F23",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
          },
          pages: [{ text: "ROAZHON PARK" }],
        },
      },
      {
        id: ["Beaulieu Chimie"],
        name: "Beaulieu Chimie",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#A96F23",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
          },
          pages: [{ font: "1510N2E1", text: "BEAULIEU CHIMIE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0032",
    name: "32",
    colors: { background: "#61C3D9", text: "#1A171B" },
    destinations: [],
  },
  {
    id: "STAR:4-0034",
    name: "34",
    colors: { background: "#F39200", text: "#1A171B" },
    destinations: [],
  },
  {
    id: "STAR:4-0037",
    name: "37",
    colors: { background: "#E4003A", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "STAR:4-0038",
    name: "38",
    colors: { background: "#008BD2", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "STAR:4-0039",
    name: "39",
    colors: { background: "#BA65A5", text: "#FFFFFF" },
    destinations: [],
  },
  // {
  //   id: "STAR:4-0050",
  //   name: "50",
  //   colors: { background: "#FFCC00", text: "#1A171B" },
  //   destinations: [
  //     {
  //       id: ["Rennes Atalante"],
  //       name: "Atalante",
  //       city: "RENNES",
  //       girouette: {
  //         routeNumber: {
  //           backgroundColor: "#FFCC00",
  //           textColor: "#1A171B",
  //           outlineColor: "#FFFFFF",
  //           text: "50",
  //         },
  //         pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES ATALANTE" }],
  //       },
  //     },
  //     {
  //       id: ["Thorigné"],
  //       name: "Landelles",
  //       city: "THORIGNÉ",
  //       girouette: {
  //         routeNumber: {
  //           backgroundColor: "#FFCC00",
  //           textColor: "#1A171B",
  //           outlineColor: "#FFFFFF",
  //           text: "50",
  //         },
  //         pages: [{ text: "THORIGNE" }],
  //       },
  //     },
  //   ],
  // },
];

const network: Network = {
  slug: "star",
  name: "STAR - Rennes Métropole",
  routes: starRoutes,
  color: "#173166",
  textColor: "#FFFFFF",
};
export default network;
