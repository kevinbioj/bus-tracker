import { Network, Route } from "~/@types";

const starRoutes: Route[] = [
  {
    id: "STAR:4-0121",
    name: "N1",
    colors: { background: "#004F9E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes Kennedy Guyenne"],
        autoHide: true,
        name: "Rennes Kennedy Guyenne",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "N1" },
          pages: [{ text: "Rennes Kennedy Guyenne" }],
        },
      },
      {
        id: ["Villejean"],
        autoHide: true,
        name: "Villejean",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "N1" },
          pages: [{ text: "Villejean" }],
        },
      },
      {
        id: ["Rennes République", "République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "N1" },
          pages: [{ text: "Rennes République" }],
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
        id: ["La Poterie"],
        autoHide: true,
        name: "La Poterie",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "N2" },
          pages: [{ text: "LA POTERIE" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Rennes République", "République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "N2" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
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
        id: ["Bruz Ker Lann", "Ker Lann"],
        autoHide: true,
        name: "Ker Lann",
        city: "BRUZ",
        girouette: {
          routeNumber: { backgroundColor: "#D39D2F", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "N3" },
          pages: [{ font: "1510N2E1", text: "BRUZ KER LANN" }],
        },
      },
      {
        id: ["République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#D39D2F", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "N3" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
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
        id: ["Rennes République", "République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "N4" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
        },
      },
      {
        id: ["Rennes Atalante", "Atalante"],
        autoHide: true,
        name: "Atalante",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "N4" },
          pages: [{ text: "ATALANTE" }, { text: "RENNES" }],
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
        id: ["Rennes République", "République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "N5" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
        },
      },
      {
        id: ["Rennes Maurepas Gayeulles", "Gayeulles"],
        autoHide: true,
        name: "Les Gayeulles",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "N5" },
          pages: [{ text: "LES GAYEULLES" }, { text: "RENNES" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0100",
    name: "Navette Centre-Ville",
    colors: { background: "#009C99", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: {
            backgroundColor: "#009C99",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508C2E1",
            text: "NAV",
          },
          pages: [[{ text: "NAVETTE CENTRE-VILLE" }, { text: "RENNES REPUBLIQUE" }]],
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
          routeNumber: { backgroundColor: "#EE1D23", textColor: "#FFFFFF", outlineColor: "#000000", text: "a" },
          pages: [{ text: "LA POTERIE" }],
        },
      },
      {
        id: ["Kennedy"],
        name: "Kennedy",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#EE1D23", textColor: "#FFFFFF", outlineColor: "#000000", text: "a" },
          pages: [{ text: "KENNEDY" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-1002",
    name: "b",
    colors: { background: "#108B40", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Cesson - Viasilva"],
        name: "Cesson - Viasilva",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#108B40", textColor: "#FFFFFF", outlineColor: "#000000", text: "b" },
          pages: [{ font: "1510N2E1", text: "CESSON-VIASILVA" }],
        },
      },
      {
        id: ["Saint-Jacques - Gaîté"],
        name: "Saint-Jacques - Gaîté",
        city: "SAINT-JACQUES-DE-LA-LANDE",
        girouette: {
          routeNumber: { backgroundColor: "#108B40", textColor: "#FFFFFF", outlineColor: "#000000", text: "b" },
          pages: [{ font: "1508C2E1", text: "SAINT-JACQUES - GAITE" }],
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
        id: ["Cesson-Sévigné - Viasilva", "Cesson-Viasilva"],
        name: "Cesson - Viasilva",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#95C11E", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C1" },
          pages: [{ font: "1510N2E1", text: "CESSON-VIASILVA" }],
        },
      },
      {
        id: ["Rennes République", "République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#95C11E", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C1" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
        },
      },
      {
        id: ["Rennes Gares"],
        autoHide: true,
        name: "Gares",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#95C11E", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C1" },
          pages: [{ text: "RENNES GARES" }],
        },
      },
      {
        id: ["Chantepie"],
        name: "Rosa Parks",
        city: "CHANTEPIE",
        girouette: {
          routeNumber: { backgroundColor: "#95C11E", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C1" },
          pages: [{ text: "ROSA PARKS" }, { text: "CHANTEPIE" }],
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
        id: ["Saint-Grégoire"],
        name: "Champ Daguet",
        city: "SAINT-GRÉGOIRE",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C2" },
          pages: [{ text: "CHAMP DAGUET" }, { font: "1510N2E1", text: "SAINT-GREGOIRE" }],
        },
      },
      {
        id: ["Anatole France"],
        autoHide: true,
        name: "Anatole France",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C2" },
          pages: [{ text: "ANATOLE FRANCE" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Rennes Gares"],
        autoHide: true,
        name: "Gares",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C2" },
          pages: [{ text: "RENNES GARES" }],
        },
      },
      {
        id: ["La Poterie"],
        autoHide: true,
        name: "La Poterie",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C2" },
          pages: [{ text: "LA POTERIE" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Rennes Haut Sancé", "Haut Sancé"],
        name: "Haut Sancé",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "C2" },
          pages: [{ text: "HAUT SANCE" }, { text: "RENNES" }],
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
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C3" },
          pages: [{ text: "RENNES PATTON" }],
        },
      },
      {
        id: ["Henri Fréville"],
        name: "Henri Fréville",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C3" },
          pages: [{ text: "HENRI FREVILLE" }, { text: "RENNES" }],
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
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "C4" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "ZA SAINT-SULPICE" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Plaine de Baud"],
        autoHide: true,
        name: "Plaine de Baud",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "C4" },
          pages: [{ text: "PLAINE DE BAUD" }, { text: "RENNES" }],
        },
      },
      {
        id: ["République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "C4" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
        },
      },
      {
        id: ["Grand Quartier"],
        name: "Grand Quartier",
        city: "SAINT-GRÉGOIRE",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "C4" },
          pages: [
            { font: "1510N2E1", text: "GRAND QUARTIER" },
            { font: "1510N2E1", text: "SAINT-GREGOIRE" },
          ],
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
        id: ["Joliot-Curie"],
        autoHide: true,
        name: "Joliot-Curie",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C5" },
          pages: [{ text: "JOLIOT-CURIE" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Saint-Laurent"],
        name: "Saint-Laurent",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C5" },
          pages: [{ text: "SAINT-LAURENT" }, { text: "RENNES" }],
        },
      },
      {
        id: ["République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C5" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
        },
      },
      {
        id: ["Lycée Bréquigny"],
        name: "Lycée Bréquigny",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C5" },
          pages: [{ font: "1510N2E1", text: "LYCEE BREQUIGNY" }, { text: "RENNES" }],
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
        id: ["Saint-Jacques Aéroport", "Aéroport"],
        name: "Aéroport",
        city: "SAINT-JACQUES-DE-LA-LANDE",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C6" },
          pages: [{ text: "AEROPORT" }, { text: "SAINT-JACQUES" }],
        },
      },
      {
        id: ["Rennes République", "République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C6" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
        },
      },
      {
        id: ["Cesson Rigourdière", "Cesson-Sévigné"],
        name: "Rigourdière",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C6" },
          pages: [{ text: "RIGOURDIERE" }, { font: "1510N2E1", text: "CESSON-SEVIGNE" }],
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
        id: ["Rennes Charles de Gaulle", "Ch de Gaulle"],
        name: "Charles de Gaulle",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#D39D2F", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C7" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "CHARLES DE GAULLE" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Saint-Jacques - Gaîté"],
        autoHide: true,
        name: "Saint-Jacques - Gaîté",
        city: "SAINT-JACQUES-DE-LA-LANDE",
        girouette: {
          routeNumber: { backgroundColor: "#D39D2F", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C7" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "SAINT-JACQUES - GAITE" }],
        },
      },
      {
        id: ["Bruz"],
        name: "Bruz Centre",
        city: "BRUZ",
        girouette: {
          routeNumber: { backgroundColor: "#D39D2F", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C7" },
          pages: [{ text: "BRUZ CENTRE" }],
        },
      },
      {
        id: ["Bruz Lavoisier"],
        autoHide: true,
        name: "Lavoisier",
        city: "BRUZ",
        girouette: {
          routeNumber: { backgroundColor: "#D39D2F", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "C7" },
          pages: [{ text: "BRUZ LAVOISIER" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0047",
    name: "C7ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Bruz Centre", "Bruz"],
        autoHide: true,
        name: "Bruz Centre",
        city: "BRUZ",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "C7ex" },
          pages: [{ text: "BRUZ CENTRE" }],
        },
      },
      {
        id: ["Bruz Ker Lann", "Ker Lann"],
        autoHide: true,
        name: "Ker Lann",
        city: "BRUZ",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "C7ex" },
          pages: [{ text: "BRUZ KER LANN" }],
        },
      },
      {
        id: ["Rennes Charles de Gaulle", "Ch de Gaulle"],
        autoHide: true,
        name: "Charles de Gaulle",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "C7ex" },
          pages: [{ font: "1508C2E1", text: "CHARLES DE GAULLE" }, { text: "RENNES" }],
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
        id: ["Porte de Cleunay"],
        name: "Porte de Cleunay",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "C8" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "PORTE DE CLEUNAY" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Les Gayeulles"],
        name: "Les Gayeulles",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "C8" },
          pages: [{ text: "LES GAYEULLES" }, { text: "RENNES" }],
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
        id: ["Rennes Porte de Cleunay"],
        name: "Porte de Cleunay",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "10" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "PORTE DE CLEUNAY" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Rennes Beaulieu Chimie"],
        name: "Beaulieu Chimie",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "10" },
          pages: [{ font: "1510N2E1", text: "BEAULIEU CHIMIE" }, { text: "RENNES" }],
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
        id: ["Saint-Saëns"],
        autoHide: true,
        name: "Saint-Saëns",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "SAINT-SAENS" }, { text: "RENNES" }],
        },
      },
      {
        id: ["La Poterie"],
        name: "La Poterie",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "LA POTERIE" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Cesson Rigourdière -Brécé", "Brécé"],
        autoHide: true,
        name: "Rigourdière - Brécé",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ font: "1510N2E1", text: "RIGOURDIERE - BRECE" }, { text: "CESSON-SEVIGNE" }],
        },
      },
      {
        id: ["République"],
        autoHide: true,
        name: "République",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "RENNES REPUBLIQUE" }],
        },
      },
      {
        id: ["Roazhon Park"],
        autoHide: true,
        name: "Roazhon Park",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "ROAZHON PARK" }, { text: "RENNES" }],
        },
      },
      {
        id: ["ZI Ouest"],
        name: "ZI Ouest",
        city: "VEZIN-LE-COQUET",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "ZI OUEST" }, { font: "1510N2E1", text: "VEZIN-LE-COQUET" }],
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
        id: ["Grand Quartier"],
        name: "Grand Quartier",
        city: "SAINT-GRÉGOIRE",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "GRAND QUARTIER" }, { font: "1510N2E1", text: "SAINT-GREGOIRE" }],
        },
      },
      {
        id: ["Rennes Villejean-Université", "Villejean-U"],
        name: "Rennes Villejean-Université",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ font: "1508C2E1", text: "VILLEJEAN-UNIVERSITE" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Jacques Cartier"],
        name: "Jacques Cartier",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "JACQUES CARTIER" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Rennes La Poterie", "La Poterie"],
        name: "Rennes La Poterie",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "LA POTERIE" }, { text: "RENNES" }],
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
        id: ["Bruz Porte de Ker Lann", "Porte de Ker Lann"],
        name: "Porte de Ker Lann",
        city: "BRUZ",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "PORTE DE KER LANN" }, { text: "BRUZ" }],
        },
      },
      {
        id: ["Saint-Jacques  Gaîté", "St-Jacques-Gaîté"],
        autoHide: true,
        name: "Saint-Jacques - Gaîté",
        city: "SAINT-JACQUES-DE-LA-LANDE",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ font: "1508C2E1", text: "SAINT-JACQUES - GAITE" }],
        },
      },
      {
        id: ["Chantepie"],
        name: "Cucé",
        city: "CHANTEPIE",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ text: "CUCE" }, { text: "CHANTEPIE" }],
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
        id: ["Rennes Roazhon Park", "Roazhon Park"],
        name: "Rennes Roazhon Park",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "ROAZHON PARK" }, { text: "RENNES" }],
        },
      },
      {
        id: ["Cesson-Sévigné Monniais", "Cesson Monniais"],
        autoHide: true,
        name: "Monniais",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "MONNIAIS" }, { font: "1510N2E1", text: "CESSON-SEVIGNE" }],
        },
      },
      {
        id: ["Rennes Beaulieu Chimie", "Beaulieu Chimie"],
        name: "Beaulieu Chimie",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ font: "1510N2E1", text: "BEAULIEU CHIMIE" }, { text: "RENNES" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0032",
    name: "32",
    colors: { background: "#61C3D9", text: "#1A171B" },
    destinations: [
      {
        id: ["Rennes Alma Sud"],
        name: "Alma Sud",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ text: "RENNES ALMA SUD" }],
        },
      },
      {
        id: ["Saint-Grégoire"],
        name: "Edonia",
        city: "SAINT-GRÉGOIRE",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "32" },
          pages: [{ text: "EDONIA" }, { text: "SAINT-GREGOIRE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0034",
    name: "34",
    colors: { background: "#F39200", text: "#1A171B" },
    destinations: [
      {
        id: ["Chantepie"],
        name: "Rosa Parks",
        city: "CHANTEPIE",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "34" },
          pages: [{ text: "ROSA PARKS" }, { text: "CHANTEPIE" }],
        },
      },
      {
        id: ["Cesson-Sévigné Monniais"],
        autoHide: true,
        name: "Monniais",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "34" },
          pages: [{ text: "MONNIAIS" }, { font: "1510N2E1", text: "CESSON-SEVIGNE" }],
        },
      },
      {
        id: ["Rennes ZA Saint-Sulpice"],
        name: "ZA Saint-Sulpice",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "34" },
          pages: [{ font: "1510N2E1", spacing: 1, text: "ZA SAINT-SULPICE" }, { text: "RENNES" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0037",
    name: "37",
    colors: { background: "#E4003A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Jacques"],
        name: "Morinais",
        city: "SAINT-JACQUES-DE-LA-LANDE",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "37" },
          pages: [{ text: "MORINAIS" }, { text: "SAINT-JACQUES" }],
        },
      },
      {
        id: ["Rennes Henri Fréville", "Rennes"],
        name: "Henri Fréville",
        city: "RENNES",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "37" },
          pages: [{ text: "HENRI FREVILLE" }, { text: "RENNES" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0038",
    name: "38",
    colors: { background: "#008BD2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Ménouriais"],
        name: "Ménouriais",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "38" },
          pages: [{ text: "MENOURIAIS" }, { font: "1510N2E1", text: "CESSON-SEVIGNE" }],
        },
      },
      {
        id: ["Monniais"],
        name: "Monniais",
        city: "CESSON-SÉVIGNÉ",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "38" },
          pages: [{ text: "MONNIAIS" }, { font: "1510N2E1", text: "CESSON-SEVIGNE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0039",
    name: "39",
    colors: { background: "#BA65A5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Paul-Emile Victor", "P.E. Victor"],
        name: "Paul-Émile Victor",
        city: "SAINT-GRÉGOIRE",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "39" },
          pages: [
            { font: "1508C2E1", spacing: 3, text: "PAUL-EMILE VICTOR" },
            { font: "1510N2E1", text: "SAINT-GREGOIRE" },
          ],
        },
      },
      {
        id: ["Maison Blanche"],
        name: "Maison Blanche",
        city: "SAINT-GRÉGOIRE",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "39" },
          pages: [{ text: "MAISON BLANCHE" }, { font: "1510N2E1", text: "SAINT-GREGOIRE" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0050",
    name: "50",
    colors: { background: "#FFCC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Rennes Atalante"],
        autoHide: true,
        name: "Rennes Atalante",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "50" },
          pages: [{ font: "1407SUPX", text: "Rennes Atalante" }],
        },
      },
      {
        id: ["Cesson - Viasilva"],
        autoHide: true,
        name: "Cesson - Viasilva",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "50" },
          pages: [{ font: "1407SUPX", text: "Cesson - Viasilva" }],
        },
      },
      {
        id: ["Cesson - Viasilva via Placis Vert"],
        autoHide: true,
        name: "Cesson - Viasilva via Placis Vert",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "50" },
          pages: [{ font: "1407SUPX", text: "Cesson - Viasilva via Placis Vert" }],
        },
      },
      {
        id: ["Thorigné-Fouillard"],
        autoHide: true,
        name: "Thorigné-Fouillard",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "50" },
          pages: [{ font: "1407SUPX", text: "Thorigné-Fouillard" }],
        },
      },
      {
        id: ["Thorigné"],
        autoHide: true,
        name: "Thorigné",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "50" },
          pages: [{ font: "1407SUPX", text: "Thorigné" }],
        },
      },
      {
        id: ["Thorigné-Fouillard via Placis Vert"],
        autoHide: true,
        name: "Thorigné-Fouillard via Placis Vert",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "50" },
          pages: [{ font: "1407SUPX", text: "Thorigné-Fouillard via Placis Vert" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0051",
    name: "51",
    colors: { background: "#6F2282", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes Les Gayeulles"],
        autoHide: true,
        name: "Rennes Les Gayeulles",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ font: "1407SUPX", text: "Rennes Les Gayeulles" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Rennes Les Gayeulles via Gentilhomière"],
        autoHide: true,
        name: "Rennes Les Gayeulles via Gentilhomière",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ font: "1407SUPX", text: "Rennes Les Gayeulles via Gentilhomière" }],
        },
      },
      {
        id: ["Betton"],
        autoHide: true,
        name: "Betton",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ font: "1407SUPX", text: "Betton" }],
        },
      },
      {
        id: ["Betton via Gentilhommière"],
        autoHide: true,
        name: "Betton via Gentilhommière",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ font: "1407SUPX", text: "Betton via Gentilhommière" }],
        },
      },
      {
        id: ["Betton - Chevaigné - Saint-Sulpice-la-Forêt"],
        autoHide: true,
        name: "Betton - Chevaigné - Saint-Sulpice-la-Forêt",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ font: "1407SUPX", text: "Betton - Chevaigné - Saint-Sulpice-la-Forêt" }],
        },
      },
      {
        id: ["Saint-Sulpice"],
        autoHide: true,
        name: "Saint-Sulpice",
        girouette: {
          routeNumber: { backgroundColor: "#6F2282", textColor: "#FFFFFF", outlineColor: "#000000", text: "51" },
          pages: [{ font: "1407SUPX", text: "Saint-Sulpice" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0052",
    name: "52",
    colors: { background: "#00893E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pacé - Saint-Gilles"],
        autoHide: true,
        name: "Pacé - Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Pacé - Saint-Gilles" }],
        },
      },
      {
        id: ["Saint-Gilles"],
        autoHide: true,
        name: "Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles" }],
        },
      },
      {
        id: ["Rennes Villejean - Université"],
        autoHide: true,
        name: "Rennes Villejean - Université",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean - Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Montgermont -  La Chapelle-des-Fougeretz"],
        autoHide: true,
        name: "Montgermont -  La Chapelle-des-Fougeretz",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Montgermont -  La Chapelle-des-Fougeretz" }],
        },
      },
      {
        id: ["Quatre vents- la Chapelle-des-Fougeretz"],
        autoHide: true,
        name: "Quatre vents- la Chapelle-des-Fougeretz",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Quatre vents- la Chapelle-des-Fougeretz" }],
        },
      },
      {
        id: [""],
        autoHide: true,
        name: "",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "" }],
        },
      },
      {
        id: ["La Chapelle Fgtz"],
        autoHide: true,
        name: "La Chapelle Fgtz",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "La Chapelle Fgtz" }],
        },
      },
      {
        id: ["Montgermont CFA"],
        autoHide: true,
        name: "Montgermont CFA",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Montgermont CFA" }],
        },
      },
      {
        id: ["Montgermont"],
        autoHide: true,
        name: "Montgermont",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Montgermont" }],
        },
      },
      {
        id: ["Montgermont - La Chapelle-des-Fougeretz - Gévezé"],
        autoHide: true,
        name: "Montgermont - La Chapelle-des-Fougeretz - Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Montgermont - La Chapelle-des-Fougeretz - Gévezé" }],
        },
      },
      {
        id: ["Gévezé"],
        autoHide: true,
        name: "Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "52" },
          pages: [{ font: "1407SUPX", text: "Gévezé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0053",
    name: "53",
    colors: { background: "#E4003A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Vezin - L'Hermitage -  La Chapelle-Thouarault"],
        autoHide: true,
        name: "Vezin - L'Hermitage -  La Chapelle-Thouarault",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Vezin - L'Hermitage -  La Chapelle-Thouarault" }],
        },
      },
      {
        id: ["La Chapelle-Th"],
        autoHide: true,
        name: "La Chapelle-Th",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "La Chapelle-Th" }],
        },
      },
      {
        id: ["Rennes Atalante Champeaux"],
        autoHide: true,
        name: "Rennes Atalante Champeaux",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Rennes Atalante Champeaux" }],
        },
      },
      {
        id: ["Atal. Champeaux"],
        autoHide: true,
        name: "Atal. Champeaux",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Atal. Champeaux" }],
        },
      },
      {
        id: ["Vezin Haie de Terre"],
        autoHide: true,
        name: "Vezin Haie de Terre",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Vezin Haie de Terre" }],
        },
      },
      {
        id: ["Vezin-le-Coquet"],
        autoHide: true,
        name: "Vezin-le-Coquet",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Vezin-le-Coquet" }],
        },
      },
      {
        id: ["Vezin L'Hermitage La Chapelle Th. Cintré Le Verger"],
        autoHide: true,
        name: "Vezin L'Hermitage La Chapelle Th. Cintré Le Verger",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Vezin L'Hermitage La Chapelle Th. Cintré Le Verger" }],
        },
      },
      {
        id: ["Le Verger"],
        autoHide: true,
        name: "Le Verger",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Le Verger" }],
        },
      },
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Rennes République" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "53" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0054",
    name: "54",
    colors: { background: "#BA65A5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Rheu - Cintré"],
        autoHide: true,
        name: "Le Rheu - Cintré",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Le Rheu - Cintré" }],
        },
      },
      {
        id: ["Le Rheu / Cintré"],
        autoHide: true,
        name: "Le Rheu / Cintré",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Le Rheu / Cintré" }],
        },
      },
      {
        id: ["Le Rheu"],
        autoHide: true,
        name: "Le Rheu",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Le Rheu" }],
        },
      },
      {
        id: ["Le Rheu -  Mordelles"],
        autoHide: true,
        name: "Le Rheu -  Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Le Rheu -  Mordelles" }],
        },
      },
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Le Rheu - Mordelles - Chavagne"],
        autoHide: true,
        name: "Le Rheu - Mordelles - Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Le Rheu - Mordelles - Chavagne" }],
        },
      },
      {
        id: ["Le Rheu/Chavagne"],
        autoHide: true,
        name: "Le Rheu/Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Le Rheu/Chavagne" }],
        },
      },
      {
        id: ["Rennes Charles de Gaulle"],
        autoHide: true,
        name: "Rennes Charles de Gaulle",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Rennes Charles de Gaulle" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "54" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0055",
    name: "55",
    colors: { background: "#F39200", text: "#1A171B" },
    destinations: [
      {
        id: ["Mordelles - Le Verger"],
        autoHide: true,
        name: "Mordelles - Le Verger",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "55" },
          pages: [{ font: "1407SUPX", text: "Mordelles - Le Verger" }],
        },
      },
      {
        id: ["Mordelles Le Verger"],
        autoHide: true,
        name: "Mordelles Le Verger",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "55" },
          pages: [{ font: "1407SUPX", text: "Mordelles Le Verger" }],
        },
      },
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "55" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Mordelles -  Chavagne"],
        autoHide: true,
        name: "Mordelles -  Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "55" },
          pages: [{ font: "1407SUPX", text: "Mordelles -  Chavagne" }],
        },
      },
      {
        id: ["Chavagne"],
        autoHide: true,
        name: "Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "55" },
          pages: [{ font: "1407SUPX", text: "Chavagne" }],
        },
      },
      {
        id: ["Rennes Charles de Gaulle"],
        autoHide: true,
        name: "Rennes Charles de Gaulle",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "55" },
          pages: [{ font: "1407SUPX", text: "Rennes Charles de Gaulle" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "55" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0056",
    name: "56",
    colors: { background: "#00893E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Chavagne"],
        autoHide: true,
        name: "Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "56" },
          pages: [{ font: "1407SUPX", text: "Chavagne" }],
        },
      },
      {
        id: ["Rennes Charles de Gaulle"],
        autoHide: true,
        name: "Rennes Charles de Gaulle",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "56" },
          pages: [{ font: "1407SUPX", text: "Rennes Charles de Gaulle" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "56" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0059",
    name: "59",
    colors: { background: "#EF859D", text: "#1A171B" },
    destinations: [
      {
        id: ["Bruz Gare"],
        autoHide: true,
        name: "Bruz Gare",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "59" },
          pages: [{ font: "1407SUPX", text: "Bruz Gare" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "59" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "59" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "59" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0061",
    name: "61",
    colors: { background: "#E4003A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Noyal-Châtillon-sur-Seiche - Saint-Erblon"],
        autoHide: true,
        name: "Noyal-Châtillon-sur-Seiche - Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon-sur-Seiche - Saint-Erblon" }],
        },
      },
      {
        id: ["Saint-Erblon"],
        autoHide: true,
        name: "Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ font: "1407SUPX", text: "Saint-Erblon" }],
        },
      },
      {
        id: ["Noyal-Châtillon - Saint-Erblon -Orgères Bourgbarré"],
        autoHide: true,
        name: "Noyal-Châtillon - Saint-Erblon -Orgères Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon - Saint-Erblon -Orgères Bourgbarré" }],
        },
      },
      {
        id: ["Bourgbarré"],
        autoHide: true,
        name: "Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ font: "1407SUPX", text: "Bourgbarré" }],
        },
      },
      {
        id: ["Noyal-Châtillon-sur-Seiche"],
        autoHide: true,
        name: "Noyal-Châtillon-sur-Seiche",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon-sur-Seiche" }],
        },
      },
      {
        id: ["Noyal-Châtillon"],
        autoHide: true,
        name: "Noyal-Châtillon",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "61" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0062",
    name: "62",
    colors: { background: "#004F9E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Vern-sur-Seiche"],
        autoHide: true,
        name: "Vern-sur-Seiche",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Vern-sur-Seiche" }],
        },
      },
      {
        id: ["Vern-sur-Seiche - Saint-Armel - Corps-Nuds"],
        autoHide: true,
        name: "Vern-sur-Seiche - Saint-Armel - Corps-Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Vern-sur-Seiche - Saint-Armel - Corps-Nuds" }],
        },
      },
      {
        id: ["Vern  Corps-Nuds"],
        autoHide: true,
        name: "Vern  Corps-Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Vern  Corps-Nuds" }],
        },
      },
      {
        id: ["Vern-sur-Seiche Nouvoitou"],
        autoHide: true,
        name: "Vern-sur-Seiche Nouvoitou",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Vern-sur-Seiche Nouvoitou" }],
        },
      },
      {
        id: ["Vern / Nouvoitou"],
        autoHide: true,
        name: "Vern / Nouvoitou",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Vern / Nouvoitou" }],
        },
      },
      {
        id: ["Vern-sur-Seiche - Nouvoitou Saint-Armel Corps-Nuds"],
        autoHide: true,
        name: "Vern-sur-Seiche - Nouvoitou Saint-Armel Corps-Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Vern-sur-Seiche - Nouvoitou Saint-Armel Corps-Nuds" }],
        },
      },
      {
        id: ["Vern/Corps-Nuds"],
        autoHide: true,
        name: "Vern/Corps-Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Vern/Corps-Nuds" }],
        },
      },
      {
        id: ["Rennes La Poterie"],
        autoHide: true,
        name: "Rennes La Poterie",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Rennes La Poterie" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "62" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0063",
    name: "63",
    colors: { background: "#8CA5D6", text: "#1A171B" },
    destinations: [
      {
        id: ["Bruz - Pont-Réan"],
        autoHide: true,
        name: "Bruz - Pont-Réan",
        girouette: {
          routeNumber: { backgroundColor: "#8CA5D6", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "63" },
          pages: [{ font: "1407SUPX", text: "Bruz - Pont-Réan" }],
        },
      },
      {
        id: ["Saint-Jacques - Gaîté"],
        autoHide: true,
        name: "Saint-Jacques - Gaîté",
        girouette: {
          routeNumber: { backgroundColor: "#8CA5D6", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "63" },
          pages: [{ font: "1407SUPX", text: "Saint-Jacques - Gaîté" }],
        },
      },
      {
        id: ["Rennes Gares"],
        autoHide: true,
        name: "Rennes Gares",
        girouette: {
          routeNumber: { backgroundColor: "#8CA5D6", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "63" },
          pages: [{ font: "1407SUPX", text: "Rennes Gares" }],
        },
      },
      {
        id: ["Rennes Lycée Bréquigny"],
        autoHide: true,
        name: "Rennes Lycée Bréquigny",
        girouette: {
          routeNumber: { backgroundColor: "#8CA5D6", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "63" },
          pages: [{ font: "1407SUPX", text: "Rennes Lycée Bréquigny" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0064",
    name: "64",
    colors: { background: "#008BD2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Cesson Viasilva"],
        autoHide: true,
        name: "Cesson Viasilva",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "64" },
          pages: [{ font: "1407SUPX", text: "Cesson Viasilva" }],
        },
      },
      {
        id: ["Cesson-Viasilva"],
        autoHide: true,
        name: "Cesson-Viasilva",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "64" },
          pages: [{ font: "1407SUPX", text: "Cesson-Viasilva" }],
        },
      },
      {
        id: ["Acigné"],
        autoHide: true,
        name: "Acigné",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "64" },
          pages: [{ font: "1407SUPX", text: "Acigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0065",
    name: "65",
    colors: { background: "#BA65A5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pacé - Parthenay-de-Bretagne"],
        autoHide: true,
        name: "Pacé - Parthenay-de-Bretagne",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "65" },
          pages: [{ font: "1407SUPX", text: "Pacé - Parthenay-de-Bretagne" }],
        },
      },
      {
        id: ["Pacé / Parthenay"],
        autoHide: true,
        name: "Pacé / Parthenay",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "65" },
          pages: [{ font: "1407SUPX", text: "Pacé / Parthenay" }],
        },
      },
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "65" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "65" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "65" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Rennes Lycée Basch via V.-U."],
        autoHide: true,
        name: "Rennes Lycée Basch via V.-U.",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "65" },
          pages: [{ font: "1407SUPX", text: "Rennes Lycée Basch via V.-U." }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0067",
    name: "67",
    colors: { background: "#E4003A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "67" },
          pages: [{ font: "1407SUPX", text: "Rennes République" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "67" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Brécé"],
        autoHide: true,
        name: "Brécé",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "67" },
          pages: [{ font: "1407SUPX", text: "Brécé" }],
        },
      },
      {
        id: ["Cesson-Sévigné - Brécé"],
        autoHide: true,
        name: "Cesson-Sévigné - Brécé",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "67" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné - Brécé" }],
        },
      },
      {
        id: ["Cesson Rigourdière"],
        autoHide: true,
        name: "Cesson Rigourdière",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "67" },
          pages: [{ font: "1407SUPX", text: "Cesson Rigourdière" }],
        },
      },
      {
        id: ["Cesson-Sévigné"],
        autoHide: true,
        name: "Cesson-Sévigné",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "67" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0068",
    name: "68",
    colors: { background: "#004F9E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "68" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "68" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Gévezé"],
        autoHide: true,
        name: "Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "68" },
          pages: [{ font: "1407SUPX", text: "Gévezé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0070",
    name: "70",
    colors: { background: "#EF859D", text: "#1A171B" },
    destinations: [
      {
        id: ["Rennes Atalante"],
        autoHide: true,
        name: "Rennes Atalante",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "70" },
          pages: [{ font: "1407SUPX", text: "Rennes Atalante" }],
        },
      },
      {
        id: ["Cesson-Sévigné Cesson - Vialsilva"],
        autoHide: true,
        name: "Cesson-Sévigné Cesson - Vialsilva",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "70" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné Cesson - Vialsilva" }],
        },
      },
      {
        id: ["Saint-Sulpice-la-Forêt"],
        autoHide: true,
        name: "Saint-Sulpice-la-Forêt",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "70" },
          pages: [{ font: "1407SUPX", text: "Saint-Sulpice-la-Forêt" }],
        },
      },
      {
        id: ["Saint-Sulpice"],
        autoHide: true,
        name: "Saint-Sulpice",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "70" },
          pages: [{ font: "1407SUPX", text: "Saint-Sulpice" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0071",
    name: "71",
    colors: { background: "#A96F23", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes Les Gayeulles"],
        autoHide: true,
        name: "Rennes Les Gayeulles",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "71" },
          pages: [{ font: "1407SUPX", text: "Rennes Les Gayeulles" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "71" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Chevaigné"],
        autoHide: true,
        name: "Chevaigné",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "71" },
          pages: [{ font: "1407SUPX", text: "Chevaigné" }],
        },
      },
      {
        id: ["Betton Chevaigné"],
        autoHide: true,
        name: "Betton Chevaigné",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "71" },
          pages: [{ font: "1407SUPX", text: "Betton Chevaigné" }],
        },
      },
      {
        id: ["Chevaigné - Saint-Sulpice-la-Forêt"],
        autoHide: true,
        name: "Chevaigné - Saint-Sulpice-la-Forêt",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "71" },
          pages: [{ font: "1407SUPX", text: "Chevaigné - Saint-Sulpice-la-Forêt" }],
        },
      },
      {
        id: ["Saint-Sulpice"],
        autoHide: true,
        name: "Saint-Sulpice",
        girouette: {
          routeNumber: { backgroundColor: "#A96F23", textColor: "#FFFFFF", outlineColor: "#000000", text: "71" },
          pages: [{ font: "1407SUPX", text: "Saint-Sulpice" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0072",
    name: "72",
    colors: { background: "#004F9E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Chartres de Bretagne - Pont-Péan"],
        autoHide: true,
        name: "Chartres de Bretagne - Pont-Péan",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Chartres de Bretagne - Pont-Péan" }],
        },
      },
      {
        id: ["Pont-Péan"],
        autoHide: true,
        name: "Pont-Péan",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Pont-Péan" }],
        },
      },
      {
        id: ["Chartres Pont-Péan via Mivoie"],
        autoHide: true,
        name: "Chartres Pont-Péan via Mivoie",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Chartres Pont-Péan via Mivoie" }],
        },
      },
      {
        id: ["Chartres Pont-Péan"],
        autoHide: true,
        name: "Chartres Pont-Péan",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Chartres Pont-Péan" }],
        },
      },
      {
        id: ["Chartres de B. Pont-Péan via Mivoie / T. Tizon"],
        autoHide: true,
        name: "Chartres de B. Pont-Péan via Mivoie / T. Tizon",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Chartres de B. Pont-Péan via Mivoie / T. Tizon" }],
        },
      },
      {
        id: ["Chartres-de-Bretagne - Pont-Péan - Laillé"],
        autoHide: true,
        name: "Chartres-de-Bretagne - Pont-Péan - Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Chartres-de-Bretagne - Pont-Péan - Laillé" }],
        },
      },
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Chartres-de-Bretagne"],
        autoHide: true,
        name: "Chartres-de-Bretagne",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Chartres-de-Bretagne" }],
        },
      },
      {
        id: ["Chartres-de-Bge"],
        autoHide: true,
        name: "Chartres-de-Bge",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Chartres-de-Bge" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Collège Fontenay"],
        autoHide: true,
        name: "Collège Fontenay",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "72" },
          pages: [{ font: "1407SUPX", text: "Collège Fontenay" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0073",
    name: "73",
    colors: { background: "#00893E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Armel - Corps-Nuds"],
        autoHide: true,
        name: "Saint-Armel - Corps-Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [{ font: "1407SUPX", text: "Saint-Armel - Corps-Nuds" }],
        },
      },
      {
        id: ["Corps-Nuds"],
        autoHide: true,
        name: "Corps-Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [{ font: "1407SUPX", text: "Corps-Nuds" }],
        },
      },
      {
        id: ["Saint-Armel Corps-Nuds. via Champ Martin"],
        autoHide: true,
        name: "Saint-Armel Corps-Nuds. via Champ Martin",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [{ font: "1407SUPX", text: "Saint-Armel Corps-Nuds. via Champ Martin" }],
        },
      },
      {
        id: ["Corps Nuds"],
        autoHide: true,
        name: "Corps Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [{ font: "1407SUPX", text: "Corps Nuds" }],
        },
      },
      {
        id: ["Rennes La Poterie"],
        autoHide: true,
        name: "Rennes La Poterie",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [{ font: "1407SUPX", text: "Rennes La Poterie" }],
        },
      },
      {
        id: ["Rennes La Poterie via Champ Martin"],
        autoHide: true,
        name: "Rennes La Poterie via Champ Martin",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [{ font: "1407SUPX", text: "Rennes La Poterie via Champ Martin" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#00893E", textColor: "#FFFFFF", outlineColor: "#000000", text: "73" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0074",
    name: "74",
    colors: { background: "#F39200", text: "#1A171B" },
    destinations: [
      {
        id: ["Orgères - Bourgbarré"],
        autoHide: true,
        name: "Orgères - Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "74" },
          pages: [{ font: "1407SUPX", text: "Orgères - Bourgbarré" }],
        },
      },
      {
        id: ["Orgères Bourgbarré"],
        autoHide: true,
        name: "Orgères Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "74" },
          pages: [{ font: "1407SUPX", text: "Orgères Bourgbarré" }],
        },
      },
      {
        id: ["Orgères"],
        autoHide: true,
        name: "Orgères",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "74" },
          pages: [{ font: "1407SUPX", text: "Orgères" }],
        },
      },
      {
        id: ["Orgères Moc Souris"],
        autoHide: true,
        name: "Orgères Moc Souris",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "74" },
          pages: [{ font: "1407SUPX", text: "Orgères Moc Souris" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "74" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "74" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0075",
    name: "75",
    colors: { background: "#F39200", text: "#201D21" },
    destinations: [
      {
        id: ["Rennes La Poterie"],
        autoHide: true,
        name: "Rennes La Poterie",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#201D21", outlineColor: "#FFFFFF", text: "75" },
          pages: [{ font: "1407SUPX", text: "Rennes La Poterie" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#201D21", outlineColor: "#FFFFFF", text: "75" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Vern-sur-Seiche - Nouvoitou"],
        autoHide: true,
        name: "Vern-sur-Seiche - Nouvoitou",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#201D21", outlineColor: "#FFFFFF", text: "75" },
          pages: [{ font: "1407SUPX", text: "Vern-sur-Seiche - Nouvoitou" }],
        },
      },
      {
        id: ["Vern Nouvoitou"],
        autoHide: true,
        name: "Vern Nouvoitou",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#201D21", outlineColor: "#FFFFFF", text: "75" },
          pages: [{ font: "1407SUPX", text: "Vern Nouvoitou" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0076",
    name: "76",
    colors: { background: "#61C3D9", text: "#1A171B" },
    destinations: [
      {
        id: ["Vezin-le-Coquet - Le Rheu - Mordelles"],
        autoHide: true,
        name: "Vezin-le-Coquet - Le Rheu - Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "76" },
          pages: [{ font: "1407SUPX", text: "Vezin-le-Coquet - Le Rheu - Mordelles" }],
        },
      },
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "76" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Mordelles via Lindon"],
        autoHide: true,
        name: "Mordelles via Lindon",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "76" },
          pages: [{ font: "1407SUPX", text: "Mordelles via Lindon" }],
        },
      },
      {
        id: ["Rennes Lycée Basch"],
        autoHide: true,
        name: "Rennes Lycée Basch",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "76" },
          pages: [{ font: "1407SUPX", text: "Rennes Lycée Basch" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "76" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Rennes Lycée Basch via Lindon"],
        autoHide: true,
        name: "Rennes Lycée Basch via Lindon",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "76" },
          pages: [{ font: "1407SUPX", text: "Rennes Lycée Basch via Lindon" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0077",
    name: "77",
    colors: { background: "#F39200", text: "#1A171B" },
    destinations: [
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "77" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Pacé - Saint-Gilles"],
        autoHide: true,
        name: "Pacé - Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "77" },
          pages: [{ font: "1407SUPX", text: "Pacé - Saint-Gilles" }],
        },
      },
      {
        id: ["Saint-Gilles"],
        autoHide: true,
        name: "Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "77" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles" }],
        },
      },
      {
        id: ["Pacé - Parthenay"],
        autoHide: true,
        name: "Pacé - Parthenay",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "77" },
          pages: [{ font: "1407SUPX", text: "Pacé - Parthenay" }],
        },
      },
      {
        id: ["Pacé-Parthenay"],
        autoHide: true,
        name: "Pacé-Parthenay",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "77" },
          pages: [{ font: "1407SUPX", text: "Pacé-Parthenay" }],
        },
      },
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "77" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "77" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0078",
    name: "78",
    colors: { background: "#E4003A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "78" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "78" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Saint-Grégoire - Betton"],
        autoHide: true,
        name: "Saint-Grégoire - Betton",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "78" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire - Betton" }],
        },
      },
      {
        id: ["Betton"],
        autoHide: true,
        name: "Betton",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "78" },
          pages: [{ font: "1407SUPX", text: "Betton" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0079",
    name: "79",
    colors: { background: "#61C3D9", text: "#26171B" },
    destinations: [
      {
        id: ["Pont-Péan - Laillé"],
        autoHide: true,
        name: "Pont-Péan - Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#26171B", outlineColor: "#FFFFFF", text: "79" },
          pages: [{ font: "1407SUPX", text: "Pont-Péan - Laillé" }],
        },
      },
      {
        id: ["Pont-Péan Laillé"],
        autoHide: true,
        name: "Pont-Péan Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#26171B", outlineColor: "#FFFFFF", text: "79" },
          pages: [{ font: "1407SUPX", text: "Pont-Péan Laillé" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#26171B", outlineColor: "#FFFFFF", text: "79" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#26171B", outlineColor: "#FFFFFF", text: "79" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0080",
    name: "80",
    colors: { background: "#BA65A5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "80" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Laillé - Bruz DGA-MI"],
        autoHide: true,
        name: "Laillé - Bruz DGA-MI",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "80" },
          pages: [{ font: "1407SUPX", text: "Laillé - Bruz DGA-MI" }],
        },
      },
      {
        id: ["Laillé DGA-MI"],
        autoHide: true,
        name: "Laillé DGA-MI",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "80" },
          pages: [{ font: "1407SUPX", text: "Laillé DGA-MI" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "80" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "80" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0081",
    name: "81",
    colors: { background: "#008BD2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Clayes - Romillé"],
        autoHide: true,
        name: "Clayes - Romillé",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "81" },
          pages: [{ font: "1407SUPX", text: "Clayes - Romillé" }],
        },
      },
      {
        id: ["Clayes-Romillé"],
        autoHide: true,
        name: "Clayes-Romillé",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "81" },
          pages: [{ font: "1407SUPX", text: "Clayes-Romillé" }],
        },
      },
      {
        id: ["Pacé - Clayes - Romillé"],
        autoHide: true,
        name: "Pacé - Clayes - Romillé",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "81" },
          pages: [{ font: "1407SUPX", text: "Pacé - Clayes - Romillé" }],
        },
      },
      {
        id: ["Romillé"],
        autoHide: true,
        name: "Romillé",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "81" },
          pages: [{ font: "1407SUPX", text: "Romillé" }],
        },
      },
      {
        id: ["Pacé - Saint-Gilles - Clayes - Romillé"],
        autoHide: true,
        name: "Pacé - Saint-Gilles - Clayes - Romillé",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "81" },
          pages: [{ font: "1407SUPX", text: "Pacé - Saint-Gilles - Clayes - Romillé" }],
        },
      },
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "81" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "81" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0082",
    name: "82",
    colors: { background: "#E4003A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Romillé - Langan Chapelle Chaussée Bécherel Miniac"],
        autoHide: true,
        name: "Romillé - Langan Chapelle Chaussée Bécherel Miniac",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "82" },
          pages: [{ font: "1407SUPX", text: "Romillé - Langan Chapelle Chaussée Bécherel Miniac" }],
        },
      },
      {
        id: ["Miniac"],
        autoHide: true,
        name: "Miniac",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "82" },
          pages: [{ font: "1407SUPX", text: "Miniac" }],
        },
      },
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "82" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "82" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Romillè"],
        autoHide: true,
        name: "Romillè",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "82" },
          pages: [{ font: "1407SUPX", text: "Romillè" }],
        },
      },
      {
        id: ["Romillé"],
        autoHide: true,
        name: "Romillé",
        girouette: {
          routeNumber: { backgroundColor: "#E4003A", textColor: "#FFFFFF", outlineColor: "#000000", text: "82" },
          pages: [{ font: "1407SUPX", text: "Romillé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0083",
    name: "83",
    colors: { background: "#004F9E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Betton"],
        autoHide: true,
        name: "Betton",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "83" },
          pages: [{ font: "1407SUPX", text: "Betton" }],
        },
      },
      {
        id: ["Thorigné-Fouillard"],
        autoHide: true,
        name: "Thorigné-Fouillard",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "83" },
          pages: [{ font: "1407SUPX", text: "Thorigné-Fouillard" }],
        },
      },
      {
        id: ["Thorigné"],
        autoHide: true,
        name: "Thorigné",
        girouette: {
          routeNumber: { backgroundColor: "#004F9E", textColor: "#FFFFFF", outlineColor: "#000000", text: "83" },
          pages: [{ font: "1407SUPX", text: "Thorigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0090",
    name: "90",
    colors: { background: "#008BD2", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bruz DGA-MI"],
        autoHide: true,
        name: "Bruz DGA-MI",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "90" },
          pages: [{ font: "1407SUPX", text: "Bruz DGA-MI" }],
        },
      },
      {
        id: ["DGA-MI"],
        autoHide: true,
        name: "DGA-MI",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "90" },
          pages: [{ font: "1407SUPX", text: "DGA-MI" }],
        },
      },
      {
        id: ["Bruz Lavoisier"],
        autoHide: true,
        name: "Bruz Lavoisier",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "90" },
          pages: [{ font: "1407SUPX", text: "Bruz Lavoisier" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#008BD2", textColor: "#FFFFFF", outlineColor: "#000000", text: "90" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0091",
    name: "91",
    colors: { background: "#AECC52", text: "#1A171B" },
    destinations: [
      {
        id: ["Bruz Cicé Blossac"],
        autoHide: true,
        name: "Bruz Cicé Blossac",
        girouette: {
          routeNumber: { backgroundColor: "#AECC52", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "91" },
          pages: [{ font: "1407SUPX", text: "Bruz Cicé Blossac" }],
        },
      },
      {
        id: ["Bruz Cicé-Blossac"],
        autoHide: true,
        name: "Bruz Cicé-Blossac",
        girouette: {
          routeNumber: { backgroundColor: "#AECC52", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "91" },
          pages: [{ font: "1407SUPX", text: "Bruz Cicé-Blossac" }],
        },
      },
      {
        id: ["Bruz Centre"],
        autoHide: true,
        name: "Bruz Centre",
        girouette: {
          routeNumber: { backgroundColor: "#AECC52", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "91" },
          pages: [{ font: "1407SUPX", text: "Bruz Centre" }],
        },
      },
      {
        id: ["Bruz Pont-Réan"],
        autoHide: true,
        name: "Bruz Pont-Réan",
        girouette: {
          routeNumber: { backgroundColor: "#AECC52", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "91" },
          pages: [{ font: "1407SUPX", text: "Bruz Pont-Réan" }],
        },
      },
      {
        id: ["Noyal-Châtillon-sur-Seiche"],
        autoHide: true,
        name: "Noyal-Châtillon-sur-Seiche",
        girouette: {
          routeNumber: { backgroundColor: "#AECC52", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "91" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon-sur-Seiche" }],
        },
      },
      {
        id: ["Noyal-Châtillon"],
        autoHide: true,
        name: "Noyal-Châtillon",
        girouette: {
          routeNumber: { backgroundColor: "#AECC52", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "91" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon" }],
        },
      },
      {
        id: ["Bruz Lavoisier"],
        autoHide: true,
        name: "Bruz Lavoisier",
        girouette: {
          routeNumber: { backgroundColor: "#AECC52", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "91" },
          pages: [{ font: "1407SUPX", text: "Bruz Lavoisier" }],
        },
      },
      {
        id: ["Chartres Collège"],
        autoHide: true,
        name: "Chartres Collège",
        girouette: {
          routeNumber: { backgroundColor: "#AECC52", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "91" },
          pages: [{ font: "1407SUPX", text: "Chartres Collège" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0152",
    noCartridge: true,
    mapOnly: true,
    name: "152ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Saint-Gilles"],
        autoHide: true,
        name: "Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "152ex" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles" }],
        },
      },
      {
        id: ["Rennes Lycée Basch"],
        autoHide: true,
        name: "Rennes Lycée Basch",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "152ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Lycée Basch" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "152ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0153",
    noCartridge: true,
    mapOnly: true,
    name: "153ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["L'Hermitage"],
        autoHide: true,
        name: "L'Hermitage",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "153ex" },
          pages: [{ font: "1407SUPX", text: "L'Hermitage" }],
        },
      },
      {
        id: ["Vezin L'Hermitage La Chapelle-Thouarault"],
        autoHide: true,
        name: "Vezin L'Hermitage La Chapelle-Thouarault",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "153ex" },
          pages: [{ font: "1407SUPX", text: "Vezin L'Hermitage La Chapelle-Thouarault" }],
        },
      },
      {
        id: ["La Chapelle-Th."],
        autoHide: true,
        name: "La Chapelle-Th.",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "153ex" },
          pages: [{ font: "1407SUPX", text: "La Chapelle-Th." }],
        },
      },
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "153ex" },
          pages: [{ font: "1407SUPX", text: "Rennes République" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "153ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0154",
    noCartridge: true,
    mapOnly: true,
    name: "154ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Le Rheu Cintré"],
        autoHide: true,
        name: "Le Rheu Cintré",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "154ex" },
          pages: [{ font: "1407SUPX", text: "Le Rheu Cintré" }],
        },
      },
      {
        id: ["Le Rheu / Cintré"],
        autoHide: true,
        name: "Le Rheu / Cintré",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "154ex" },
          pages: [{ font: "1407SUPX", text: "Le Rheu / Cintré" }],
        },
      },
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "154ex" },
          pages: [{ font: "1407SUPX", text: "Rennes République" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "154ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0155",
    noCartridge: true,
    mapOnly: true,
    name: "155ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "155ex" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Mordelles - Le Verger"],
        autoHide: true,
        name: "Mordelles - Le Verger",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "155ex" },
          pages: [{ font: "1407SUPX", text: "Mordelles - Le Verger" }],
        },
      },
      {
        id: ["Le Verger"],
        autoHide: true,
        name: "Le Verger",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "155ex" },
          pages: [{ font: "1407SUPX", text: "Le Verger" }],
        },
      },
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "155ex" },
          pages: [{ font: "1407SUPX", text: "Rennes République" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "155ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0156",
    noCartridge: true,
    mapOnly: true,
    name: "156ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Chavagne"],
        autoHide: true,
        name: "Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "156ex" },
          pages: [{ font: "1407SUPX", text: "Chavagne" }],
        },
      },
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "156ex" },
          pages: [{ font: "1407SUPX", text: "Rennes République" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "156ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0159",
    noCartridge: true,
    mapOnly: true,
    name: "159ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "159ex" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "159ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "159ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0161",
    noCartridge: true,
    mapOnly: true,
    name: "161ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Noyal-Châtillon Saint-Erblon Bourgbarré"],
        autoHide: true,
        name: "Noyal-Châtillon Saint-Erblon Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "161ex" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon Saint-Erblon Bourgbarré" }],
        },
      },
      {
        id: ["Bourgbarré"],
        autoHide: true,
        name: "Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "161ex" },
          pages: [{ font: "1407SUPX", text: "Bourgbarré" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "161ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes H. Fréville"],
        autoHide: true,
        name: "Rennes H. Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "161ex" },
          pages: [{ font: "1407SUPX", text: "Rennes H. Fréville" }],
        },
      },
      {
        id: ["Rennes Bréquigny"],
        autoHide: true,
        name: "Rennes Bréquigny",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "161ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Bréquigny" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0164",
    noCartridge: true,
    mapOnly: true,
    name: "164ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Cesson  Vialsiva"],
        autoHide: true,
        name: "Cesson  Vialsiva",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "164ex" },
          pages: [{ font: "1407SUPX", text: "Cesson  Vialsiva" }],
        },
      },
      {
        id: ["Cesson-Viasilva"],
        autoHide: true,
        name: "Cesson-Viasilva",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "164ex" },
          pages: [{ font: "1407SUPX", text: "Cesson-Viasilva" }],
        },
      },
      {
        id: ["Acigné"],
        autoHide: true,
        name: "Acigné",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "164ex" },
          pages: [{ font: "1407SUPX", text: "Acigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0165",
    noCartridge: true,
    mapOnly: true,
    name: "165ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Parthenay-de-Bretagne"],
        autoHide: true,
        name: "Parthenay-de-Bretagne",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "165ex" },
          pages: [{ font: "1407SUPX", text: "Parthenay-de-Bretagne" }],
        },
      },
      {
        id: ["Parthenay"],
        autoHide: true,
        name: "Parthenay",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "165ex" },
          pages: [{ font: "1407SUPX", text: "Parthenay" }],
        },
      },
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "165ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "165ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0167",
    noCartridge: true,
    mapOnly: true,
    name: "167ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "167ex" },
          pages: [{ font: "1407SUPX", text: "Rennes République" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "167ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Cesson-Sévigné Brécé"],
        autoHide: true,
        name: "Cesson-Sévigné Brécé",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "167ex" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné Brécé" }],
        },
      },
      {
        id: ["Brécé"],
        autoHide: true,
        name: "Brécé",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "167ex" },
          pages: [{ font: "1407SUPX", text: "Brécé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0168",
    noCartridge: true,
    mapOnly: true,
    name: "168ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "168ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "168ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Gévezé"],
        autoHide: true,
        name: "Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "168ex" },
          pages: [{ font: "1407SUPX", text: "Gévezé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0172",
    noCartridge: true,
    mapOnly: true,
    name: "172ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Chartres-de-Bretagne"],
        autoHide: true,
        name: "Chartres-de-Bretagne",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "172ex" },
          pages: [{ font: "1407SUPX", text: "Chartres-de-Bretagne" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "172ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes H. Fréville"],
        autoHide: true,
        name: "Rennes H. Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "172ex" },
          pages: [{ font: "1407SUPX", text: "Rennes H. Fréville" }],
        },
      },
      {
        id: ["Lycée Bréquigny"],
        autoHide: true,
        name: "Lycée Bréquigny",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "172ex" },
          pages: [{ font: "1407SUPX", text: "Lycée Bréquigny" }],
        },
      },
      {
        id: ["Rennes Bréquigny"],
        autoHide: true,
        name: "Rennes Bréquigny",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "172ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Bréquigny" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0173",
    noCartridge: true,
    mapOnly: true,
    name: "173ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Saint-Armel Corps-Nuds"],
        autoHide: true,
        name: "Saint-Armel Corps-Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "173ex" },
          pages: [{ font: "1407SUPX", text: "Saint-Armel Corps-Nuds" }],
        },
      },
      {
        id: ["Corps-Nuds"],
        autoHide: true,
        name: "Corps-Nuds",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "173ex" },
          pages: [{ font: "1407SUPX", text: "Corps-Nuds" }],
        },
      },
      {
        id: ["Rennes La Poterie"],
        autoHide: true,
        name: "Rennes La Poterie",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "173ex" },
          pages: [{ font: "1407SUPX", text: "Rennes La Poterie" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0175",
    noCartridge: true,
    mapOnly: true,
    name: "175ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Rennes La Poterie"],
        autoHide: true,
        name: "Rennes La Poterie",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "175ex" },
          pages: [{ font: "1407SUPX", text: "Rennes La Poterie" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "175ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Nouvoitou"],
        autoHide: true,
        name: "Nouvoitou",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "175ex" },
          pages: [{ font: "1407SUPX", text: "Nouvoitou" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0178",
    noCartridge: true,
    mapOnly: true,
    name: "178ex",
    colors: { background: "#FFDD00", text: "#3D3C3F" },
    destinations: [
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "178ex" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "178ex" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Saint-Grégoire Betton"],
        autoHide: true,
        name: "Saint-Grégoire Betton",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "178ex" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire Betton" }],
        },
      },
      {
        id: ["Betton"],
        autoHide: true,
        name: "Betton",
        girouette: {
          routeNumber: { backgroundColor: "#FFDD00", textColor: "#3D3C3F", outlineColor: "#FFFFFF", text: "178ex" },
          pages: [{ font: "1407SUPX", text: "Betton" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0707",
    noCartridge: true,
    mapOnly: true,
    name: "Bzh7",
    colors: { background: "#", text: "#" },
    destinations: [
      {
        id: ["Rennes Gares"],
        autoHide: true,
        name: "Rennes Gares",
        girouette: {
          routeNumber: { backgroundColor: "#", textColor: "#", outlineColor: "#FFFFFF", text: "Bzh7" },
          pages: [{ font: "1407SUPX", text: "Rennes Gares" }],
        },
      },
      {
        id: ["Bécherel Centre"],
        autoHide: true,
        name: "Bécherel Centre",
        girouette: {
          routeNumber: { backgroundColor: "#", textColor: "#", outlineColor: "#FFFFFF", text: "Bzh7" },
          pages: [{ font: "1407SUPX", text: "Bécherel Centre" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0801",
    noCartridge: true,
    mapOnly: true,
    name: "a relais",
    colors: { background: "#FFFF00", text: "#1A171B" },
    destinations: [
      {
        id: ["bus relais La Poterie"],
        autoHide: true,
        name: "bus relais La Poterie",
        girouette: {
          routeNumber: { backgroundColor: "#FFFF00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "a relais" },
          pages: [{ font: "1407SUPX", text: "bus relais La Poterie" }],
        },
      },
      {
        id: ["bus relais metro J.F. Kennedy"],
        autoHide: true,
        name: "bus relais metro J.F. Kennedy",
        girouette: {
          routeNumber: { backgroundColor: "#FFFF00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "a relais" },
          pages: [{ font: "1407SUPX", text: "bus relais metro J.F. Kennedy" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0802",
    noCartridge: true,
    mapOnly: true,
    name: "b relais",
    colors: { background: "#FFFF00", text: "#1A171B" },
    destinations: [
      {
        id: ["bus relais metro Gaîté"],
        autoHide: true,
        name: "bus relais metro Gaîté",
        girouette: {
          routeNumber: { backgroundColor: "#FFFF00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "b relais" },
          pages: [{ font: "1407SUPX", text: "bus relais metro Gaîté" }],
        },
      },
      {
        id: ["Bus relais métro Joliot-Curie"],
        autoHide: true,
        name: "Bus relais métro Joliot-Curie",
        girouette: {
          routeNumber: { backgroundColor: "#FFFF00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "b relais" },
          pages: [{ font: "1407SUPX", text: "Bus relais métro Joliot-Curie" }],
        },
      },
      {
        id: ["bus relais metro Cesson - Viasilva"],
        autoHide: true,
        name: "bus relais metro Cesson - Viasilva",
        girouette: {
          routeNumber: { backgroundColor: "#FFFF00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "b relais" },
          pages: [{ font: "1407SUPX", text: "bus relais metro Cesson - Viasilva" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0803",
    noCartridge: true,
    mapOnly: true,
    name: "API",
    colors: { background: "#009C99", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Etangs d'Apigné"],
        autoHide: true,
        name: "Etangs d'Apigné",
        girouette: {
          routeNumber: { backgroundColor: "#009C99", textColor: "#FFFFFF", outlineColor: "#000000", text: "API" },
          pages: [{ font: "1407SUPX", text: "Etangs d'Apigné" }],
        },
      },
      {
        id: ["Rennes République"],
        autoHide: true,
        name: "Rennes République",
        girouette: {
          routeNumber: { backgroundColor: "#009C99", textColor: "#FFFFFF", outlineColor: "#000000", text: "API" },
          pages: [{ font: "1407SUPX", text: "Rennes République" }],
        },
      },
      {
        id: ["République"],
        autoHide: true,
        name: "République",
        girouette: {
          routeNumber: { backgroundColor: "#009C99", textColor: "#FFFFFF", outlineColor: "#000000", text: "API" },
          pages: [{ font: "1407SUPX", text: "République" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0804",
    noCartridge: true,
    mapOnly: true,
    name: "TTZ",
    colors: { background: "#009C99", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Touche Tizon Janais"],
        autoHide: true,
        name: "Touche Tizon Janais",
        girouette: {
          routeNumber: { backgroundColor: "#009C99", textColor: "#FFFFFF", outlineColor: "#000000", text: "TTZ" },
          pages: [{ font: "1407SUPX", text: "Touche Tizon Janais" }],
        },
      },
      {
        id: ["Touche Tizon"],
        autoHide: true,
        name: "Touche Tizon",
        girouette: {
          routeNumber: { backgroundColor: "#009C99", textColor: "#FFFFFF", outlineColor: "#000000", text: "TTZ" },
          pages: [{ font: "1407SUPX", text: "Touche Tizon" }],
        },
      },
      {
        id: ["Rennes Henri Fréville"],
        autoHide: true,
        name: "Rennes Henri Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#009C99", textColor: "#FFFFFF", outlineColor: "#000000", text: "TTZ" },
          pages: [{ font: "1407SUPX", text: "Rennes Henri Fréville" }],
        },
      },
      {
        id: ["Rennes H. Fréville"],
        autoHide: true,
        name: "Rennes H. Fréville",
        girouette: {
          routeNumber: { backgroundColor: "#009C99", textColor: "#FFFFFF", outlineColor: "#000000", text: "TTZ" },
          pages: [{ font: "1407SUPX", text: "Rennes H. Fréville" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0200",
    noCartridge: true,
    mapOnly: true,
    name: "200",
    colors: { background: "#BA67A6", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes Lycée Assomption"],
        autoHide: true,
        name: "Rennes Lycée Assomption",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "200" },
          pages: [{ font: "1407SUPX", text: "Rennes Lycée Assomption" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "200" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Cesson-Sévigné - Acigné"],
        autoHide: true,
        name: "Cesson-Sévigné - Acigné",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "200" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné - Acigné" }],
        },
      },
      {
        id: ["Cesson Acigné"],
        autoHide: true,
        name: "Cesson Acigné",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "200" },
          pages: [{ font: "1407SUPX", text: "Cesson Acigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0201",
    noCartridge: true,
    mapOnly: true,
    name: "201",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "201" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Cesson-Sévigné - Thorigné-Fouillard"],
        autoHide: true,
        name: "Cesson-Sévigné - Thorigné-Fouillard",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "201" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné - Thorigné-Fouillard" }],
        },
      },
      {
        id: ["Cesson Thorigné"],
        autoHide: true,
        name: "Cesson Thorigné",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "201" },
          pages: [{ font: "1407SUPX", text: "Cesson Thorigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0202",
    noCartridge: true,
    mapOnly: true,
    name: "202",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "202" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Betton - Chevaigné"],
        autoHide: true,
        name: "Betton - Chevaigné",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "202" },
          pages: [{ font: "1407SUPX", text: "Betton - Chevaigné" }],
        },
      },
      {
        id: ["Betton Chevaigné"],
        autoHide: true,
        name: "Betton Chevaigné",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "202" },
          pages: [{ font: "1407SUPX", text: "Betton Chevaigné" }],
        },
      },
      {
        id: ["Betton"],
        autoHide: true,
        name: "Betton",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "202" },
          pages: [{ font: "1407SUPX", text: "Betton" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0204",
    noCartridge: true,
    mapOnly: true,
    name: "204",
    colors: { background: "#94C11F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "204" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Saint-Grégoire"],
        autoHide: true,
        name: "Saint-Grégoire",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "204" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0205",
    noCartridge: true,
    mapOnly: true,
    name: "205",
    colors: { background: "#C0087F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes Villejean-Université"],
        autoHide: true,
        name: "Rennes Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#C0087F", textColor: "#FFFFFF", outlineColor: "#000000", text: "205" },
          pages: [{ font: "1407SUPX", text: "Rennes Villejean-Université" }],
        },
      },
      {
        id: ["Villejean-Université"],
        autoHide: true,
        name: "Villejean-Université",
        girouette: {
          routeNumber: { backgroundColor: "#C0087F", textColor: "#FFFFFF", outlineColor: "#000000", text: "205" },
          pages: [{ font: "1407SUPX", text: "Villejean-Université" }],
        },
      },
      {
        id: ["Rennes Campus The Land"],
        autoHide: true,
        name: "Rennes Campus The Land",
        girouette: {
          routeNumber: { backgroundColor: "#C0087F", textColor: "#FFFFFF", outlineColor: "#000000", text: "205" },
          pages: [{ font: "1407SUPX", text: "Rennes Campus The Land" }],
        },
      },
      {
        id: ["The Land"],
        autoHide: true,
        name: "The Land",
        girouette: {
          routeNumber: { backgroundColor: "#C0087F", textColor: "#FFFFFF", outlineColor: "#000000", text: "205" },
          pages: [{ font: "1407SUPX", text: "The Land" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0206",
    noCartridge: true,
    mapOnly: true,
    name: "206",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Rennes Lycée Assomption"],
        autoHide: true,
        name: "Rennes Lycée Assomption",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "206" },
          pages: [{ font: "1407SUPX", text: "Rennes Lycée Assomption" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "206" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Cesson-Sévigné"],
        autoHide: true,
        name: "Cesson-Sévigné",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "206" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné" }],
        },
      },
      {
        id: ["Cesson"],
        autoHide: true,
        name: "Cesson",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "206" },
          pages: [{ font: "1407SUPX", text: "Cesson" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0208",
    noCartridge: true,
    mapOnly: true,
    name: "208",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "208" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Rennes Gares"],
        autoHide: true,
        name: "Rennes Gares",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "208" },
          pages: [{ font: "1407SUPX", text: "Rennes Gares" }],
        },
      },
      {
        id: ["Rennes Anatole France"],
        autoHide: true,
        name: "Rennes Anatole France",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "208" },
          pages: [{ font: "1407SUPX", text: "Rennes Anatole France" }],
        },
      },
      {
        id: ["Anatole France"],
        autoHide: true,
        name: "Anatole France",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "208" },
          pages: [{ font: "1407SUPX", text: "Anatole France" }],
        },
      },
      {
        id: ["Saint-Grégoire MFR Rabinardières"],
        autoHide: true,
        name: "Saint-Grégoire MFR Rabinardières",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "208" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire MFR Rabinardières" }],
        },
      },
      {
        id: ["Rabinardières"],
        autoHide: true,
        name: "Rabinardières",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "208" },
          pages: [{ font: "1407SUPX", text: "Rabinardières" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0209",
    noCartridge: true,
    mapOnly: true,
    name: "209",
    colors: { background: "#FFCC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Collège Jean Moulin"],
        autoHide: true,
        name: "Collège Jean Moulin",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "209" },
          pages: [{ font: "1407SUPX", text: "Collège Jean Moulin" }],
        },
      },
      {
        id: ["Jean Moulin"],
        autoHide: true,
        name: "Jean Moulin",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "209" },
          pages: [{ font: "1407SUPX", text: "Jean Moulin" }],
        },
      },
      {
        id: ["Rennes Mermoz"],
        autoHide: true,
        name: "Rennes Mermoz",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "209" },
          pages: [{ font: "1407SUPX", text: "Rennes Mermoz" }],
        },
      },
      {
        id: ["Mermoz"],
        autoHide: true,
        name: "Mermoz",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "209" },
          pages: [{ font: "1407SUPX", text: "Mermoz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0212",
    noCartridge: true,
    mapOnly: true,
    name: "212",
    colors: { background: "#BA67A6", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Noyal-Châtillon-sur-Seiche - Saint-Erblon"],
        autoHide: true,
        name: "Noyal-Châtillon-sur-Seiche - Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "212" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon-sur-Seiche - Saint-Erblon" }],
        },
      },
      {
        id: ["Saint-Erblon"],
        autoHide: true,
        name: "Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "212" },
          pages: [{ font: "1407SUPX", text: "Saint-Erblon" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "212" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Rennes Bréquigny"],
        autoHide: true,
        name: "Rennes Bréquigny",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "212" },
          pages: [{ font: "1407SUPX", text: "Rennes Bréquigny" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0213",
    noCartridge: true,
    mapOnly: true,
    name: "213",
    colors: { background: "#94C11F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Orgères - Bourgbarré"],
        autoHide: true,
        name: "Orgères - Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "213" },
          pages: [{ font: "1407SUPX", text: "Orgères - Bourgbarré" }],
        },
      },
      {
        id: ["Bourgbarré"],
        autoHide: true,
        name: "Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "213" },
          pages: [{ font: "1407SUPX", text: "Bourgbarré" }],
        },
      },
      {
        id: ["Lycée Bréquigny"],
        autoHide: true,
        name: "Lycée Bréquigny",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "213" },
          pages: [{ font: "1407SUPX", text: "Lycée Bréquigny" }],
        },
      },
      {
        id: [""],
        autoHide: true,
        name: "",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "213" },
          pages: [{ font: "1407SUPX", text: "" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0214",
    noCartridge: true,
    mapOnly: true,
    name: "214",
    colors: { background: "#94C11F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rennes La Poterie via champs Péans"],
        autoHide: true,
        name: "Rennes La Poterie via champs Péans",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "214" },
          pages: [{ font: "1407SUPX", text: "Rennes La Poterie via champs Péans" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "214" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: [""],
        autoHide: true,
        name: "",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "214" },
          pages: [{ font: "1407SUPX", text: "" }],
        },
      },
      {
        id: ["La Poterie"],
        autoHide: true,
        name: "La Poterie",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "214" },
          pages: [{ font: "1407SUPX", text: "La Poterie" }],
        },
      },
      {
        id: ["Cesson-Sévigné champs Péans"],
        autoHide: true,
        name: "Cesson-Sévigné champs Péans",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "214" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné champs Péans" }],
        },
      },
      {
        id: ["Cesson-Sévigné"],
        autoHide: true,
        name: "Cesson-Sévigné",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "214" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné" }],
        },
      },
      {
        id: ["Cesson-Sévigné Lycée Ozanam-direct"],
        autoHide: true,
        name: "Cesson-Sévigné Lycée Ozanam-direct",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "214" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné Lycée Ozanam-direct" }],
        },
      },
      {
        id: ["Lycée Ozanam"],
        autoHide: true,
        name: "Lycée Ozanam",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "214" },
          pages: [{ font: "1407SUPX", text: "Lycée Ozanam" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0216",
    noCartridge: true,
    mapOnly: true,
    name: "216",
    colors: { background: "#F29FC5", text: "#1A171B" },
    destinations: [
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#F29FC5", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "216" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Cesson-Sévigné"],
        autoHide: true,
        name: "Cesson-Sévigné",
        girouette: {
          routeNumber: { backgroundColor: "#F29FC5", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "216" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0218",
    noCartridge: true,
    mapOnly: true,
    name: "218",
    colors: { background: "#BA67A6", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Gilles"],
        autoHide: true,
        name: "Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "218" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles" }],
        },
      },
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "218" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0219",
    noCartridge: true,
    mapOnly: true,
    name: "219",
    colors: { background: "#EF859D", text: "#1A171B" },
    destinations: [
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "219" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Saint-Jacques-de-la-Lande"],
        autoHide: true,
        name: "Saint-Jacques-de-la-Lande",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "219" },
          pages: [{ font: "1407SUPX", text: "Saint-Jacques-de-la-Lande" }],
        },
      },
      {
        id: ["Saint-Jacques"],
        autoHide: true,
        name: "Saint-Jacques",
        girouette: {
          routeNumber: { backgroundColor: "#EF859D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "219" },
          pages: [{ font: "1407SUPX", text: "Saint-Jacques" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0220",
    noCartridge: true,
    mapOnly: true,
    name: "220",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Cesson-Sévigné"],
        autoHide: true,
        name: "Cesson-Sévigné",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "220" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné" }],
        },
      },
      {
        id: ["Lycée Sévigné"],
        autoHide: true,
        name: "Lycée Sévigné",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "220" },
          pages: [{ font: "1407SUPX", text: "Lycée Sévigné" }],
        },
      },
      {
        id: ["Acigné"],
        autoHide: true,
        name: "Acigné",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "220" },
          pages: [{ font: "1407SUPX", text: "Acigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0221",
    noCartridge: true,
    mapOnly: true,
    name: "221",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Cesson-Sévigné"],
        autoHide: true,
        name: "Cesson-Sévigné",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "221" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné" }],
        },
      },
      {
        id: ["Lycée Sévigné"],
        autoHide: true,
        name: "Lycée Sévigné",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "221" },
          pages: [{ font: "1407SUPX", text: "Lycée Sévigné" }],
        },
      },
      {
        id: ["Thorigné-Fouillard"],
        autoHide: true,
        name: "Thorigné-Fouillard",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "221" },
          pages: [{ font: "1407SUPX", text: "Thorigné-Fouillard" }],
        },
      },
      {
        id: ["Thorigné Portail"],
        autoHide: true,
        name: "Thorigné Portail",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "221" },
          pages: [{ font: "1407SUPX", text: "Thorigné Portail" }],
        },
      },
      {
        id: ["Thorigné-Cesson"],
        autoHide: true,
        name: "Thorigné-Cesson",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "221" },
          pages: [{ font: "1407SUPX", text: "Thorigné-Cesson" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0222",
    noCartridge: true,
    mapOnly: true,
    name: "222",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Betton"],
        autoHide: true,
        name: "Betton",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "222" },
          pages: [{ font: "1407SUPX", text: "Betton" }],
        },
      },
      {
        id: ["Chevaigné"],
        autoHide: true,
        name: "Chevaigné",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "222" },
          pages: [{ font: "1407SUPX", text: "Chevaigné" }],
        },
      },
      {
        id: ["Charles de Gaulle"],
        autoHide: true,
        name: "Charles de Gaulle",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "222" },
          pages: [{ font: "1407SUPX", text: "Charles de Gaulle" }],
        },
      },
      {
        id: [""],
        autoHide: true,
        name: "",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "222" },
          pages: [{ font: "1407SUPX", text: "" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0223",
    noCartridge: true,
    mapOnly: true,
    name: "223",
    colors: { background: "#94C11F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Grégoire"],
        autoHide: true,
        name: "Saint-Grégoire",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "223" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire" }],
        },
      },
      {
        id: ["Betton - Chevaigné"],
        autoHide: true,
        name: "Betton - Chevaigné",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "223" },
          pages: [{ font: "1407SUPX", text: "Betton - Chevaigné" }],
        },
      },
      {
        id: ["Betton"],
        autoHide: true,
        name: "Betton",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "223" },
          pages: [{ font: "1407SUPX", text: "Betton" }],
        },
      },
      {
        id: ["Chevaigné"],
        autoHide: true,
        name: "Chevaigné",
        girouette: {
          routeNumber: { backgroundColor: "#94C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "223" },
          pages: [{ font: "1407SUPX", text: "Chevaigné" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0224",
    noCartridge: true,
    mapOnly: true,
    name: "224",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montgermont - La-Chapelle-des-Fougeretz - Gévezé"],
        autoHide: true,
        name: "Montgermont - La-Chapelle-des-Fougeretz - Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "224" },
          pages: [{ font: "1407SUPX", text: "Montgermont - La-Chapelle-des-Fougeretz - Gévezé" }],
        },
      },
      {
        id: ["La Chapelle"],
        autoHide: true,
        name: "La Chapelle",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "224" },
          pages: [{ font: "1407SUPX", text: "La Chapelle" }],
        },
      },
      {
        id: ["Saint-Grégoire"],
        autoHide: true,
        name: "Saint-Grégoire",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "224" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0225",
    noCartridge: true,
    mapOnly: true,
    name: "225",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "225" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Saint-Grégoire"],
        autoHide: true,
        name: "Saint-Grégoire",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "225" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0226",
    noCartridge: true,
    mapOnly: true,
    name: "226",
    colors: { background: "#4465AD", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "226" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Montgermont - La Chapelle-des-Fougeretz"],
        autoHide: true,
        name: "Montgermont - La Chapelle-des-Fougeretz",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "226" },
          pages: [{ font: "1407SUPX", text: "Montgermont - La Chapelle-des-Fougeretz" }],
        },
      },
      {
        id: ["Montgermont"],
        autoHide: true,
        name: "Montgermont",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "226" },
          pages: [{ font: "1407SUPX", text: "Montgermont" }],
        },
      },
      {
        id: ["La Chapelle-des-Fougeretz  - Gévezé"],
        autoHide: true,
        name: "La Chapelle-des-Fougeretz  - Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "226" },
          pages: [{ font: "1407SUPX", text: "La Chapelle-des-Fougeretz  - Gévezé" }],
        },
      },
      {
        id: ["Gévezé"],
        autoHide: true,
        name: "Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "226" },
          pages: [{ font: "1407SUPX", text: "Gévezé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0227",
    noCartridge: true,
    mapOnly: true,
    name: "227",
    colors: { background: "#BCA3CE", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Vezin-le-Coquet"],
        autoHide: true,
        name: "Vezin-le-Coquet",
        girouette: {
          routeNumber: { backgroundColor: "#BCA3CE", textColor: "#FFFFFF", outlineColor: "#000000", text: "227" },
          pages: [{ font: "1407SUPX", text: "Vezin-le-Coquet" }],
        },
      },
      {
        id: ["Vezin-Le-Coquet"],
        autoHide: true,
        name: "Vezin-Le-Coquet",
        girouette: {
          routeNumber: { backgroundColor: "#BCA3CE", textColor: "#FFFFFF", outlineColor: "#000000", text: "227" },
          pages: [{ font: "1407SUPX", text: "Vezin-Le-Coquet" }],
        },
      },
      {
        id: ["Saint-Gilles"],
        autoHide: true,
        name: "Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#BCA3CE", textColor: "#FFFFFF", outlineColor: "#000000", text: "227" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles" }],
        },
      },
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#BCA3CE", textColor: "#FFFFFF", outlineColor: "#000000", text: "227" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0228",
    noCartridge: true,
    mapOnly: true,
    name: "228",
    colors: { background: "#71BF44", text: "#1A171B" },
    destinations: [
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "228" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
      {
        id: ["Montgermont - La-Chapelle-des-Fougeretz"],
        autoHide: true,
        name: "Montgermont - La-Chapelle-des-Fougeretz",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "228" },
          pages: [{ font: "1407SUPX", text: "Montgermont - La-Chapelle-des-Fougeretz" }],
        },
      },
      {
        id: ["La Chapelle"],
        autoHide: true,
        name: "La Chapelle",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "228" },
          pages: [{ font: "1407SUPX", text: "La Chapelle" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0229",
    noCartridge: true,
    mapOnly: true,
    name: "229",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Chavagne"],
        autoHide: true,
        name: "Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "229" },
          pages: [{ font: "1407SUPX", text: "Chavagne" }],
        },
      },
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "229" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "229" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0230",
    noCartridge: true,
    mapOnly: true,
    name: "230",
    colors: { background: "#009881", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Orgères - Bourgbarré"],
        autoHide: true,
        name: "Orgères - Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#009881", textColor: "#FFFFFF", outlineColor: "#000000", text: "230" },
          pages: [{ font: "1407SUPX", text: "Orgères - Bourgbarré" }],
        },
      },
      {
        id: ["Bourgbarré"],
        autoHide: true,
        name: "Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#009881", textColor: "#FFFFFF", outlineColor: "#000000", text: "230" },
          pages: [{ font: "1407SUPX", text: "Bourgbarré" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0231",
    noCartridge: true,
    mapOnly: true,
    name: "231",
    colors: { background: "#E5006D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pont-Péan"],
        autoHide: true,
        name: "Pont-Péan",
        girouette: {
          routeNumber: { backgroundColor: "#E5006D", textColor: "#FFFFFF", outlineColor: "#000000", text: "231" },
          pages: [{ font: "1407SUPX", text: "Pont-Péan" }],
        },
      },
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#E5006D", textColor: "#FFFFFF", outlineColor: "#000000", text: "231" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#E5006D", textColor: "#FFFFFF", outlineColor: "#000000", text: "231" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0232",
    noCartridge: true,
    mapOnly: true,
    name: "232",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Vern-sur-Seiche (Lycée Monod)"],
        autoHide: true,
        name: "Vern-sur-Seiche (Lycée Monod)",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "232" },
          pages: [{ font: "1407SUPX", text: "Vern-sur-Seiche (Lycée Monod)" }],
        },
      },
      {
        id: ["Vern"],
        autoHide: true,
        name: "Vern",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "232" },
          pages: [{ font: "1407SUPX", text: "Vern" }],
        },
      },
      {
        id: ["Charles de gaulle"],
        autoHide: true,
        name: "Charles de gaulle",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "232" },
          pages: [{ font: "1407SUPX", text: "Charles de gaulle" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0233",
    noCartridge: true,
    mapOnly: true,
    name: "233",
    colors: { background: "#4465AD", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Orgères"],
        autoHide: true,
        name: "Orgères",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "233" },
          pages: [{ font: "1407SUPX", text: "Orgères" }],
        },
      },
      {
        id: ["Collège Récipon"],
        autoHide: true,
        name: "Collège Récipon",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "233" },
          pages: [{ font: "1407SUPX", text: "Collège Récipon" }],
        },
      },
      {
        id: ["Collège Jean Moulin"],
        autoHide: true,
        name: "Collège Jean Moulin",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "233" },
          pages: [{ font: "1407SUPX", text: "Collège Jean Moulin" }],
        },
      },
      {
        id: ["Collège St-Paul"],
        autoHide: true,
        name: "Collège St-Paul",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "233" },
          pages: [{ font: "1407SUPX", text: "Collège St-Paul" }],
        },
      },
      {
        id: ["Bourgbarré"],
        autoHide: true,
        name: "Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "233" },
          pages: [{ font: "1407SUPX", text: "Bourgbarré" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0234",
    noCartridge: true,
    mapOnly: true,
    name: "234",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Pacé Pont Amelin"],
        autoHide: true,
        name: "Pacé Pont Amelin",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "234" },
          pages: [{ font: "1407SUPX", text: "Pacé Pont Amelin" }],
        },
      },
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "234" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Saint-Grégoire Jean-Paul II"],
        autoHide: true,
        name: "Saint-Grégoire Jean-Paul II",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "234" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire Jean-Paul II" }],
        },
      },
      {
        id: ["Saint-Grégoire"],
        autoHide: true,
        name: "Saint-Grégoire",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "234" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0235",
    noCartridge: true,
    mapOnly: true,
    name: "235",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Orgères"],
        autoHide: true,
        name: "Orgères",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "235" },
          pages: [{ font: "1407SUPX", text: "Orgères" }],
        },
      },
      {
        id: ["Pont-Péan"],
        autoHide: true,
        name: "Pont-Péan",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "235" },
          pages: [{ font: "1407SUPX", text: "Pont-Péan" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0236",
    noCartridge: true,
    mapOnly: true,
    name: "236",
    colors: { background: "#F29FC5", text: "#1A171B" },
    destinations: [
      {
        id: ["Parthenay-de-Bretagne"],
        autoHide: true,
        name: "Parthenay-de-Bretagne",
        girouette: {
          routeNumber: { backgroundColor: "#F29FC5", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "236" },
          pages: [{ font: "1407SUPX", text: "Parthenay-de-Bretagne" }],
        },
      },
      {
        id: ["Parthenay-de-Bretagne - Clayes"],
        autoHide: true,
        name: "Parthenay-de-Bretagne - Clayes",
        girouette: {
          routeNumber: { backgroundColor: "#F29FC5", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "236" },
          pages: [{ font: "1407SUPX", text: "Parthenay-de-Bretagne - Clayes" }],
        },
      },
      {
        id: ["Parthenay"],
        autoHide: true,
        name: "Parthenay",
        girouette: {
          routeNumber: { backgroundColor: "#F29FC5", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "236" },
          pages: [{ font: "1407SUPX", text: "Parthenay" }],
        },
      },
      {
        id: ["Parthenay-Clayes"],
        autoHide: true,
        name: "Parthenay-Clayes",
        girouette: {
          routeNumber: { backgroundColor: "#F29FC5", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "236" },
          pages: [{ font: "1407SUPX", text: "Parthenay-Clayes" }],
        },
      },
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#F29FC5", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "236" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Collèges Pacé"],
        autoHide: true,
        name: "Collèges Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#F29FC5", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "236" },
          pages: [{ font: "1407SUPX", text: "Collèges Pacé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0237",
    noCartridge: true,
    mapOnly: true,
    name: "237",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Rheu"],
        autoHide: true,
        name: "Le Rheu",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "237" },
          pages: [{ font: "1407SUPX", text: "Le Rheu" }],
        },
      },
      {
        id: ["Chavagne"],
        autoHide: true,
        name: "Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "237" },
          pages: [{ font: "1407SUPX", text: "Chavagne" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0238",
    noCartridge: true,
    mapOnly: true,
    name: "238",
    colors: { background: "#BA67A6", text: "#FFFFFF" },
    destinations: [
      {
        id: ["L'Hermitage - La-Chapelle-Thouarault"],
        autoHide: true,
        name: "L'Hermitage - La-Chapelle-Thouarault",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "238" },
          pages: [{ font: "1407SUPX", text: "L'Hermitage - La-Chapelle-Thouarault" }],
        },
      },
      {
        id: ["La Chapelle Th"],
        autoHide: true,
        name: "La Chapelle Th",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "238" },
          pages: [{ font: "1407SUPX", text: "La Chapelle Th" }],
        },
      },
      {
        id: ["Le Rheu"],
        autoHide: true,
        name: "Le Rheu",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "238" },
          pages: [{ font: "1407SUPX", text: "Le Rheu" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0239",
    noCartridge: true,
    mapOnly: true,
    name: "239",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "239" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Le Rheu"],
        autoHide: true,
        name: "Le Rheu",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "239" },
          pages: [{ font: "1407SUPX", text: "Le Rheu" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0240",
    noCartridge: true,
    mapOnly: true,
    name: "240",
    colors: { background: "#005BAB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Rheu"],
        autoHide: true,
        name: "Le Rheu",
        girouette: {
          routeNumber: { backgroundColor: "#005BAB", textColor: "#FFFFFF", outlineColor: "#000000", text: "240" },
          pages: [{ font: "1407SUPX", text: "Le Rheu" }],
        },
      },
      {
        id: ["L'Hermitage - Saint-Gilles"],
        autoHide: true,
        name: "L'Hermitage - Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#005BAB", textColor: "#FFFFFF", outlineColor: "#000000", text: "240" },
          pages: [{ font: "1407SUPX", text: "L'Hermitage - Saint-Gilles" }],
        },
      },
      {
        id: ["Saint-Gilles"],
        autoHide: true,
        name: "Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#005BAB", textColor: "#FFFFFF", outlineColor: "#000000", text: "240" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0241",
    noCartridge: true,
    mapOnly: true,
    name: "241",
    colors: { background: "#71BF44", text: "#1A171B" },
    destinations: [
      {
        id: ["Chavagne"],
        autoHide: true,
        name: "Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "241" },
          pages: [{ font: "1407SUPX", text: "Chavagne" }],
        },
      },
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "241" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0242",
    noCartridge: true,
    mapOnly: true,
    name: "242",
    colors: { background: "#F7941D", text: "#1A171B" },
    destinations: [
      {
        id: ["Romillé"],
        autoHide: true,
        name: "Romillé",
        girouette: {
          routeNumber: { backgroundColor: "#F7941D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "242" },
          pages: [{ font: "1407SUPX", text: "Romillé" }],
        },
      },
      {
        id: ["Miniac-sous-Bécherel"],
        autoHide: true,
        name: "Miniac-sous-Bécherel",
        girouette: {
          routeNumber: { backgroundColor: "#F7941D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "242" },
          pages: [{ font: "1407SUPX", text: "Miniac-sous-Bécherel" }],
        },
      },
      {
        id: ["Miniac"],
        autoHide: true,
        name: "Miniac",
        girouette: {
          routeNumber: { backgroundColor: "#F7941D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "242" },
          pages: [{ font: "1407SUPX", text: "Miniac" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0243",
    noCartridge: true,
    mapOnly: true,
    name: "243",
    colors: { background: "#F7941D", text: "#1A171B" },
    destinations: [
      {
        id: ["Montgermont - Pacé"],
        autoHide: true,
        name: "Montgermont - Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#F7941D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "243" },
          pages: [{ font: "1407SUPX", text: "Montgermont - Pacé" }],
        },
      },
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#F7941D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "243" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Saint-Grégoire"],
        autoHide: true,
        name: "Saint-Grégoire",
        girouette: {
          routeNumber: { backgroundColor: "#F7941D", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "243" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0245",
    noCartridge: true,
    mapOnly: true,
    name: "245",
    colors: { background: "#005BAB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["vers Bruz (Bruz Centre)"],
        autoHide: true,
        name: "vers Bruz (Bruz Centre)",
        girouette: {
          routeNumber: { backgroundColor: "#005BAB", textColor: "#FFFFFF", outlineColor: "#000000", text: "245" },
          pages: [{ font: "1407SUPX", text: "vers Bruz (Bruz Centre)" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#005BAB", textColor: "#FFFFFF", outlineColor: "#000000", text: "245" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Rennes (Foyer Rennais)"],
        autoHide: true,
        name: "Rennes (Foyer Rennais)",
        girouette: {
          routeNumber: { backgroundColor: "#005BAB", textColor: "#FFFFFF", outlineColor: "#000000", text: "245" },
          pages: [{ font: "1407SUPX", text: "Rennes (Foyer Rennais)" }],
        },
      },
      {
        id: ["Rennes"],
        autoHide: true,
        name: "Rennes",
        girouette: {
          routeNumber: { backgroundColor: "#005BAB", textColor: "#FFFFFF", outlineColor: "#000000", text: "245" },
          pages: [{ font: "1407SUPX", text: "Rennes" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0320",
    noCartridge: true,
    mapOnly: true,
    name: "20B",
    colors: { background: "#FFCC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Cesson Chalotais"],
        autoHide: true,
        name: "Cesson Chalotais",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "20B" },
          pages: [{ font: "1407SUPX", text: "Cesson Chalotais" }],
        },
      },
      {
        id: ["Cesson - Viasilva"],
        autoHide: true,
        name: "Cesson - Viasilva",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "20B" },
          pages: [{ font: "1407SUPX", text: "Cesson - Viasilva" }],
        },
      },
      {
        id: ["Cesson-Viasilva"],
        autoHide: true,
        name: "Cesson-Viasilva",
        girouette: {
          routeNumber: { backgroundColor: "#FFCC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "20B" },
          pages: [{ font: "1407SUPX", text: "Cesson-Viasilva" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0321",
    noCartridge: true,
    mapOnly: true,
    name: "21B",
    colors: { background: "#BA65A5", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Chantepie"],
        autoHide: true,
        name: "Chantepie",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "21B" },
          pages: [{ font: "1407SUPX", text: "Chantepie" }],
        },
      },
      {
        id: ["Cesson Collège"],
        autoHide: true,
        name: "Cesson Collège",
        girouette: {
          routeNumber: { backgroundColor: "#BA65A5", textColor: "#FFFFFF", outlineColor: "#000000", text: "21B" },
          pages: [{ font: "1407SUPX", text: "Cesson Collège" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0322",
    noCartridge: true,
    mapOnly: true,
    name: "22B",
    colors: { background: "#61C3D9", text: "#1A171B" },
    destinations: [
      {
        id: ["Villebois Mareuil"],
        autoHide: true,
        name: "Villebois Mareuil",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "22B" },
          pages: [{ font: "1407SUPX", text: "Villebois Mareuil" }],
        },
      },
      {
        id: ["Villebois M."],
        autoHide: true,
        name: "Villebois M.",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "22B" },
          pages: [{ font: "1407SUPX", text: "Villebois M." }],
        },
      },
      {
        id: ["Durafour Leclerc"],
        autoHide: true,
        name: "Durafour Leclerc",
        girouette: {
          routeNumber: { backgroundColor: "#61C3D9", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "22B" },
          pages: [{ font: "1407SUPX", text: "Durafour Leclerc" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0401",
    noCartridge: true,
    mapOnly: true,
    name: "Ts1",
    colors: { background: "#702283", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#702283", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts1" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Noyal-Châtillon-sur-Seiche"],
        autoHide: true,
        name: "Noyal-Châtillon-sur-Seiche",
        girouette: {
          routeNumber: { backgroundColor: "#702283", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts1" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon-sur-Seiche" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0403",
    noCartridge: true,
    mapOnly: true,
    name: "Ts3",
    colors: { background: "#5DC4E1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#5DC4E1", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts3" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Noyal-Châtillon-sur-Seiche"],
        autoHide: true,
        name: "Noyal-Châtillon-sur-Seiche",
        girouette: {
          routeNumber: { backgroundColor: "#5DC4E1", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts3" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon-sur-Seiche" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0404",
    noCartridge: true,
    mapOnly: true,
    name: "Ts4",
    colors: { background: "#76B729", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#76B729", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts4" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Orgères Bourgbarré"],
        autoHide: true,
        name: "Orgères Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#76B729", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts4" },
          pages: [{ font: "1407SUPX", text: "Orgères Bourgbarré" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0405",
    noCartridge: true,
    mapOnly: true,
    name: "Ts5",
    colors: { background: "#BA67A6", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Orgères Bourgbarré Saint-Erblon"],
        autoHide: true,
        name: "Orgères Bourgbarré Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts5" },
          pages: [{ font: "1407SUPX", text: "Orgères Bourgbarré Saint-Erblon" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts5" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0406",
    noCartridge: true,
    mapOnly: true,
    name: "Ts6",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Laillé Orgères Saint-Erblon"],
        autoHide: true,
        name: "Laillé Orgères Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts6" },
          pages: [{ font: "1407SUPX", text: "Laillé Orgères Saint-Erblon" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts6" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0407",
    noCartridge: true,
    mapOnly: true,
    name: "Ts7",
    colors: { background: "#4465AD", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts7" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Bourgbarré Pont-Péan Saint-Erblon"],
        autoHide: true,
        name: "Bourgbarré Pont-Péan Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts7" },
          pages: [{ font: "1407SUPX", text: "Bourgbarré Pont-Péan Saint-Erblon" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0408",
    noCartridge: true,
    mapOnly: true,
    name: "Ts8",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mordelles Chavagne"],
        autoHide: true,
        name: "Mordelles Chavagne",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts8" },
          pages: [{ font: "1407SUPX", text: "Mordelles Chavagne" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts8" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0409",
    noCartridge: true,
    mapOnly: true,
    name: "Ts9",
    colors: { background: "#13A0DB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#13A0DB", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts9" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#13A0DB", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts9" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0410",
    noCartridge: true,
    mapOnly: true,
    name: "Ts10",
    colors: { background: "#E99D3A", text: "#1A171B" },
    destinations: [
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#E99D3A", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts10" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#E99D3A", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts10" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0411",
    noCartridge: true,
    mapOnly: true,
    name: "Ts11",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts11" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts11" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0412",
    noCartridge: true,
    mapOnly: true,
    name: "Ts12",
    colors: { background: "#336699", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#336699", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts12" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#336699", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts12" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0413",
    noCartridge: true,
    mapOnly: true,
    name: "Ts13",
    colors: { background: "#009881", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Bruz"],
        autoHide: true,
        name: "Bruz",
        girouette: {
          routeNumber: { backgroundColor: "#009881", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts13" },
          pages: [{ font: "1407SUPX", text: "Bruz" }],
        },
      },
      {
        id: ["Chartres-de-Bretagne"],
        autoHide: true,
        name: "Chartres-de-Bretagne",
        girouette: {
          routeNumber: { backgroundColor: "#009881", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts13" },
          pages: [{ font: "1407SUPX", text: "Chartres-de-Bretagne" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0420",
    noCartridge: true,
    mapOnly: true,
    name: "Ts20",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Collège Théodore Monod"],
        autoHide: true,
        name: "Collège Théodore Monod",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts20" },
          pages: [{ font: "1407SUPX", text: "Collège Théodore Monod" }],
        },
      },
      {
        id: ["Nouvoitou"],
        autoHide: true,
        name: "Nouvoitou",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts20" },
          pages: [{ font: "1407SUPX", text: "Nouvoitou" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0422",
    noCartridge: true,
    mapOnly: true,
    name: "Ts22",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Collè Landry et Saint-Hélier"],
        autoHide: true,
        name: "Collè Landry et Saint-Hélier",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts22" },
          pages: [{ font: "1407SUPX", text: "Collè Landry et Saint-Hélier" }],
        },
      },
      {
        id: ["Chantepie"],
        autoHide: true,
        name: "Chantepie",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts22" },
          pages: [{ font: "1407SUPX", text: "Chantepie" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0432",
    noCartridge: true,
    mapOnly: true,
    name: "Ts32",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts32" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["L'Hermitage Saint-Gilles Chapelle-des-Fgtz"],
        autoHide: true,
        name: "L'Hermitage Saint-Gilles Chapelle-des-Fgtz",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts32" },
          pages: [{ font: "1407SUPX", text: "L'Hermitage Saint-Gilles Chapelle-des-Fgtz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0433",
    noCartridge: true,
    mapOnly: true,
    name: "Ts33",
    colors: { background: "#BA67A6", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts33" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Le Rheu"],
        autoHide: true,
        name: "Le Rheu",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts33" },
          pages: [{ font: "1407SUPX", text: "Le Rheu" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0434",
    noCartridge: true,
    mapOnly: true,
    name: "Ts34",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts34" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["L'Hermitage"],
        autoHide: true,
        name: "L'Hermitage",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts34" },
          pages: [{ font: "1407SUPX", text: "L'Hermitage" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0435",
    noCartridge: true,
    mapOnly: true,
    name: "Ts35",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Verger"],
        autoHide: true,
        name: "Le Verger",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts35" },
          pages: [{ font: "1407SUPX", text: "Le Verger" }],
        },
      },
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts35" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0436",
    noCartridge: true,
    mapOnly: true,
    name: "Ts36",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts36" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Cintré"],
        autoHide: true,
        name: "Cintré",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts36" },
          pages: [{ font: "1407SUPX", text: "Cintré" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0437",
    noCartridge: true,
    mapOnly: true,
    name: "Ts37",
    colors: { background: "#4465AD", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts37" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["La Chapelle-Thouarault"],
        autoHide: true,
        name: "La Chapelle-Thouarault",
        girouette: {
          routeNumber: { backgroundColor: "#4465AD", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts37" },
          pages: [{ font: "1407SUPX", text: "La Chapelle-Thouarault" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0438",
    noCartridge: true,
    mapOnly: true,
    name: "Ts38",
    colors: { background: "#702283", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mordelles"],
        autoHide: true,
        name: "Mordelles",
        girouette: {
          routeNumber: { backgroundColor: "#702283", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts38" },
          pages: [{ font: "1407SUPX", text: "Mordelles" }],
        },
      },
      {
        id: ["Cintré"],
        autoHide: true,
        name: "Cintré",
        girouette: {
          routeNumber: { backgroundColor: "#702283", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts38" },
          pages: [{ font: "1407SUPX", text: "Cintré" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0441",
    noCartridge: true,
    mapOnly: true,
    name: "Ts41",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts41" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["La Chapelle-des-Fougeretz"],
        autoHide: true,
        name: "La Chapelle-des-Fougeretz",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts41" },
          pages: [{ font: "1407SUPX", text: "La Chapelle-des-Fougeretz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0443",
    noCartridge: true,
    mapOnly: true,
    name: "Ts43",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Saint-Gilles"],
        autoHide: true,
        name: "Saint-Gilles",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts43" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles" }],
        },
      },
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts43" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0444",
    noCartridge: true,
    mapOnly: true,
    name: "Ts44",
    colors: { background: "#96C11F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#96C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts44" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Gévezé"],
        autoHide: true,
        name: "Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#96C11F", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts44" },
          pages: [{ font: "1407SUPX", text: "Gévezé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0445",
    noCartridge: true,
    mapOnly: true,
    name: "Ts45",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts45" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
      {
        id: ["Gévezé La Chapelle-des-Fougeretz"],
        autoHide: true,
        name: "Gévezé La Chapelle-des-Fougeretz",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts45" },
          pages: [{ font: "1407SUPX", text: "Gévezé La Chapelle-des-Fougeretz" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0446",
    noCartridge: true,
    mapOnly: true,
    name: "Ts46",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Vezin-le-Coquet"],
        autoHide: true,
        name: "Vezin-le-Coquet",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts46" },
          pages: [{ font: "1407SUPX", text: "Vezin-le-Coquet" }],
        },
      },
      {
        id: ["Pacé"],
        autoHide: true,
        name: "Pacé",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts46" },
          pages: [{ font: "1407SUPX", text: "Pacé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0451",
    noCartridge: true,
    mapOnly: true,
    name: "Ts51",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Orgères"],
        autoHide: true,
        name: "Orgères",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts51" },
          pages: [{ font: "1407SUPX", text: "Orgères" }],
        },
      },
      {
        id: ["Bourgbarré"],
        autoHide: true,
        name: "Bourgbarré",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts51" },
          pages: [{ font: "1407SUPX", text: "Bourgbarré" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0452",
    noCartridge: true,
    mapOnly: true,
    name: "Ts52",
    colors: { background: "#FECC00", text: "#1A171B" },
    destinations: [
      {
        id: ["Saint-Erblon"],
        autoHide: true,
        name: "Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts52" },
          pages: [{ font: "1407SUPX", text: "Saint-Erblon" }],
        },
      },
      {
        id: ["Noyal-Châtillon-sur-Seiche"],
        autoHide: true,
        name: "Noyal-Châtillon-sur-Seiche",
        girouette: {
          routeNumber: { backgroundColor: "#FECC00", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts52" },
          pages: [{ font: "1407SUPX", text: "Noyal-Châtillon-sur-Seiche" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0453",
    noCartridge: true,
    mapOnly: true,
    name: "Ts53",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts53" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0454",
    noCartridge: true,
    mapOnly: true,
    name: "Ts54",
    colors: { background: "#F39200", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Orgères"],
        autoHide: true,
        name: "Orgères",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts54" },
          pages: [{ font: "1407SUPX", text: "Orgères" }],
        },
      },
      {
        id: ["Saint-Erblon"],
        autoHide: true,
        name: "Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#F39200", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts54" },
          pages: [{ font: "1407SUPX", text: "Saint-Erblon" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0455",
    noCartridge: true,
    mapOnly: true,
    name: "Ts55",
    colors: { background: "#36742F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#36742F", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts55" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Laillé collège"],
        autoHide: true,
        name: "Laillé collège",
        girouette: {
          routeNumber: { backgroundColor: "#36742F", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts55" },
          pages: [{ font: "1407SUPX", text: "Laillé collège" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0457",
    noCartridge: true,
    mapOnly: true,
    name: "Ts57",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Laillé"],
        autoHide: true,
        name: "Laillé",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts57" },
          pages: [{ font: "1407SUPX", text: "Laillé" }],
        },
      },
      {
        id: ["Laillé Collège"],
        autoHide: true,
        name: "Laillé Collège",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts57" },
          pages: [{ font: "1407SUPX", text: "Laillé Collège" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0461",
    noCartridge: true,
    mapOnly: true,
    name: "Ts61",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Cesson-Sévigné Forges"],
        autoHide: true,
        name: "Cesson-Sévigné Forges",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts61" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné Forges" }],
        },
      },
      {
        id: ["Cesson-Sévigné Collège Bourgchevreuil"],
        autoHide: true,
        name: "Cesson-Sévigné Collège Bourgchevreuil",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts61" },
          pages: [{ font: "1407SUPX", text: "Cesson-Sévigné Collège Bourgchevreuil" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0466",
    noCartridge: true,
    mapOnly: true,
    name: "Ts66",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Rheu"],
        autoHide: true,
        name: "Le Rheu",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts66" },
          pages: [{ font: "1407SUPX", text: "Le Rheu" }],
        },
      },
      {
        id: ["Saint-Gilles L'Hermitage"],
        autoHide: true,
        name: "Saint-Gilles L'Hermitage",
        girouette: {
          routeNumber: { backgroundColor: "#009FE3", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts66" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles L'Hermitage" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0467",
    noCartridge: true,
    mapOnly: true,
    name: "Ts67",
    colors: { background: "#71BF44", text: "#1A171B" },
    destinations: [
      {
        id: ["Le Rheu"],
        autoHide: true,
        name: "Le Rheu",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts67" },
          pages: [{ font: "1407SUPX", text: "Le Rheu" }],
        },
      },
      {
        id: ["Saint-Gilles La Chapelle-Thouarault"],
        autoHide: true,
        name: "Saint-Gilles La Chapelle-Thouarault",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#1A171B", outlineColor: "#FFFFFF", text: "Ts67" },
          pages: [{ font: "1407SUPX", text: "Saint-Gilles La Chapelle-Thouarault" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0470",
    noCartridge: true,
    mapOnly: true,
    name: "RPI-1",
    colors: { background: "#6F2B91", text: "#FFFFFF" },
    destinations: [
      {
        id: ["La Chapelle-Chaussée"],
        autoHide: true,
        name: "La Chapelle-Chaussée",
        girouette: {
          routeNumber: { backgroundColor: "#6F2B91", textColor: "#FFFFFF", outlineColor: "#000000", text: "RPI-1" },
          pages: [{ font: "1407SUPX", text: "La Chapelle-Chaussée" }],
        },
      },
      {
        id: ["Bécherel"],
        autoHide: true,
        name: "Bécherel",
        girouette: {
          routeNumber: { backgroundColor: "#6F2B91", textColor: "#FFFFFF", outlineColor: "#000000", text: "RPI-1" },
          pages: [{ font: "1407SUPX", text: "Bécherel" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0471",
    noCartridge: true,
    mapOnly: true,
    name: "Ts71",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Romillé"],
        autoHide: true,
        name: "Romillé",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts71" },
          pages: [{ font: "1407SUPX", text: "Romillé" }],
        },
      },
      {
        id: ["Romillé Langan"],
        autoHide: true,
        name: "Romillé Langan",
        girouette: {
          routeNumber: { backgroundColor: "#E30613", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts71" },
          pages: [{ font: "1407SUPX", text: "Romillé Langan" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0475",
    noCartridge: true,
    mapOnly: true,
    name: "Ts75",
    colors: { background: "#BA67A6", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Grégoire"],
        autoHide: true,
        name: "Saint-Grégoire",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts75" },
          pages: [{ font: "1407SUPX", text: "Saint-Grégoire" }],
        },
      },
      {
        id: ["La Chapelle-Chaussée Gévezé"],
        autoHide: true,
        name: "La Chapelle-Chaussée Gévezé",
        girouette: {
          routeNumber: { backgroundColor: "#BA67A6", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts75" },
          pages: [{ font: "1407SUPX", text: "La Chapelle-Chaussée Gévezé" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0482",
    noCartridge: true,
    mapOnly: true,
    name: "Ts82",
    colors: { background: "#96BF0D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Saint-Erblon"],
        autoHide: true,
        name: "Saint-Erblon",
        girouette: {
          routeNumber: { backgroundColor: "#96BF0D", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts82" },
          pages: [{ font: "1407SUPX", text: "Saint-Erblon" }],
        },
      },
      {
        id: ["Chartres-de-Bretagne"],
        autoHide: true,
        name: "Chartres-de-Bretagne",
        girouette: {
          routeNumber: { backgroundColor: "#96BF0D", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts82" },
          pages: [{ font: "1407SUPX", text: "Chartres-de-Bretagne" }],
        },
      },
    ],
  },
  {
    id: "STAR:4-0491",
    noCartridge: true,
    mapOnly: true,
    name: "Ts91",
    colors: { background: "#B269AB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Vezin-le-Coquet"],
        autoHide: true,
        name: "Vezin-le-Coquet",
        girouette: {
          routeNumber: { backgroundColor: "#B269AB", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts91" },
          pages: [{ font: "1407SUPX", text: "Vezin-le-Coquet" }],
        },
      },
      {
        id: ["Rennes Rosa Parks"],
        autoHide: true,
        name: "Rennes Rosa Parks",
        girouette: {
          routeNumber: { backgroundColor: "#B269AB", textColor: "#FFFFFF", outlineColor: "#000000", text: "Ts91" },
          pages: [{ font: "1407SUPX", text: "Rennes Rosa Parks" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "star",
  name: "STAR - Rennes Métropole",
  routes: starRoutes,
  color: "#173166",
  textColor: "#FFFFFF",
};
export default network;
