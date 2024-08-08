import { Network, Route } from "~/@types";

const diviaRoutes: Route[] = [
  {
    id: "DIVIA:4-PL",
    name: "PL",
    colors: { background: "#142477", text: "#ffffff" },
    destinations: [
      {
        id: ["République"],
        autoHide: true,
        name: "République",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#142477", textColor: "#ffffff", text: "PL", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["Université"],
        autoHide: true,
        name: "Université",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#142477", textColor: "#ffffff", text: "PL", outlineColor: "#000000" },
          pages: [{ text: "UNIVERSITE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-CITY",
    name: "CITY",
    colors: { background: "#e63312", text: "#ffffff" },
    destinations: [
      {
        id: ["République"],
        name: "République",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#e63312",
            textColor: "#ffffff",
            font: "1310C2E1",
            text: "CITY",
            outlineColor: "#000000",
          },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["Monge Cité de la gastronomie"],
        name: "Monge Cité de la gastronomie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#e63312",
            textColor: "#ffffff",
            font: "1310C2E1",
            text: "CITY",
            outlineColor: "#000000",
          },
          pages: [[{ text: "MONGE" }, { text: "CITE DE LA GASTRONOMIE" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-T1",
    name: "T1",
    colors: { background: "#ab0070", text: "#ffffff" },
    destinations: [
      {
        id: ["QUETIGNY Centre"],
        name: "QUETIGNY Centre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T1", outlineColor: "#000000" },
          pages: [{ font: "1510N2E1", text: "QUETIGNY CENTRE" }],
        },
      },
      {
        id: ["DARCY"],
        autoHide: true,
        name: "Darcy",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T1", outlineColor: "#000000" },
          pages: [{ text: "DARCY" }],
        },
      },
      {
        id: ["Foch Gare"],
        autoHide: true,
        name: "Foch Gare",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T1", outlineColor: "#000000" },
          pages: [{ text: "FOCH GARE" }],
        },
      },
      {
        id: ["DIJON Gare"],
        name: "DIJON Gare",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T1", outlineColor: "#000000" },
          pages: [{ text: "DIJON GARE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-T2",
    name: "T2",
    colors: { background: "#ab0070", text: "#ffffff" },
    destinations: [
      {
        id: ["DIJON Valmy"],
        name: "DIJON Valmy",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T2", outlineColor: "#000000" },
          pages: [{ text: "DIJON VALMY" }],
        },
      },
      {
        id: ["Bourroches"],
        autoHide: true,
        name: "Bourroches",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T2", outlineColor: "#000000" },
          pages: [{ text: "BOURROCHES" }],
        },
      },
      {
        id: ["Monge"],
        autoHide: true,
        name: "Monge Cité de la gastronomie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T2", outlineColor: "#000000" },
          pages: [[{ text: "MONGE" }, { text: "CITE DE LA GASTRONOMIE" }]],
        },
      },
      {
        id: ["DARCY"],
        autoHide: true,
        name: "Darcy",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T2", outlineColor: "#000000" },
          pages: [{ text: "DARCY" }],
        },
      },
      {
        id: ["CHENOVE Centre"],
        name: "CHENOVE Centre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ab0070", textColor: "#ffffff", text: "T2", outlineColor: "#000000" },
          pages: [{ font: "1510N2E1", text: "CHENOVE CENTRE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-L3",
    name: "L3",
    colors: { background: "#e7619c", text: "#ffffff" },
    destinations: [
      {
        id: ["Fontaine d'Ouche"],
        name: "Fontaine d'Ouche",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L3", outlineColor: "#000000" },
          pages: [{ font: "1510N2E1", text: "FONTAINE D'OUCHE" }],
        },
      },
      {
        id: ["Epirey Capnord"],
        name: "Epirey Capnord",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L3", outlineColor: "#000000" },
          pages: [{ font: "1510N2E1", text: "EPIREY CAPNORD" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-L4",
    name: "L4",
    colors: { background: "#e7619c", text: "#ffffff" },
    destinations: [
      {
        id: ["Monge Cité de la gastronomie"],
        name: "Monge Cité de la gastronomie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L4", outlineColor: "#000000" },
          pages: [[{ text: "MONGE" }, { text: "CITE DE LA GASTRONOMIE" }]],
        },
      },
      {
        id: ["MARSANNAY Portes du Sud"],
        name: "MARSANNAY Portes du Sud",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L4", outlineColor: "#000000" },
          pages: [{ text: "MARSANNAY" }, { text: "PORTES DU SUD" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-L5",
    name: "L5",
    colors: { background: "#e7619c", text: "#ffffff" },
    destinations: [
      {
        id: ["TALANT Dullin"],
        name: "TALANT Dullin",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L5", outlineColor: "#000000" },
          pages: [{ text: "TALANT DULLIN" }],
        },
      },
      {
        id: ["Université"],
        name: "Université",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L5", outlineColor: "#000000" },
          pages: [{ text: "UNIVERSITE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-L6",
    name: "L6",
    colors: { background: "#e7619c", text: "#ffffff" },
    destinations: [
      {
        id: ["Toison d'Or"],
        name: "Toison d'Or",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L6", outlineColor: "#000000" },
          pages: [{ text: "TOISON D'OR" }],
        },
      },
      {
        id: ["LONGVIC"],
        name: "LONGVIC",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L6", outlineColor: "#000000" },
          pages: [{ text: "LONGVIC" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-L7",
    name: "L7",
    colors: { background: "#e7619c", text: "#ffffff" },
    destinations: [
      {
        id: ["QUETIGNY Europe"],
        name: "QUETIGNY Europe",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L7", outlineColor: "#000000" },
          pages: [{ font: "1510N2E1", text: "QUETIGNY EUROPE" }],
        },
      },
      {
        id: ["CHEVIGNY"],
        name: "CHEVIGNY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L7", outlineColor: "#000000" },
          pages: [{ text: "CHEVIGNY" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-L8",
    name: "L8",
    colors: { background: "#e7619c", text: "#ffffff" },
    destinations: [
      {
        id: ["ST-APOLLINAIRE Val Sully"],
        name: "ST-APOLLINAIRE Val Sully",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L8", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "SAINT-APOLLINAIRE" }, { text: "VAL SULLY" }],
        },
      },
      {
        id: ["Chicago"],
        name: "Chicago",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L8", outlineColor: "#000000" },
          pages: [{ text: "CHICAGO" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-L9",
    name: "L9",
    colors: { background: "#e7619c", text: "#ffffff" },
    destinations: [
      {
        id: ["Monge Cité de la gastronomie"],
        name: "Monge Cité de la gastronomie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L9", outlineColor: "#000000" },
          pages: [[{ text: "MONGE" }, { text: "CITE DE LA GASTRONOMIE" }]],
        },
      },
      {
        id: ["Toison d'Or"],
        name: "Toison d'Or",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#e7619c", textColor: "#ffffff", text: "L9", outlineColor: "#000000" },
          pages: [{ text: "TOISON D'OR" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-CO",
    name: "COROL",
    colors: { background: "#00b1eb", text: "#ffffff" },
    destinations: [
      {
        id: ["Marmuzots"],
        name: "Marmuzots",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#00b1eb",
            textColor: "#ffffff",
            font: "1310C2E1",
            spacing: 1,
            text: "Corol",
            outlineColor: "#000000",
          },
          pages: [{ text: "MARMUZOTS" }],
        },
      },
      {
        id: ["Fontaine d'Ouche"],
        name: "Fontaine d'Ouche",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#00b1eb",
            textColor: "#ffffff",
            font: "1310C2E1",
            spacing: 1,
            text: "Corol",
            outlineColor: "#000000",
          },
          pages: [{ font: "1510N2E1", text: "FONTAINE D'OUCHE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-10",
    name: "10",
    colors: { background: "#005da7", text: "#ffffff" },
    destinations: [
      {
        id: ["AHUY"],
        name: "AHUY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "10", outlineColor: "#000000" },
          pages: [{ text: "AHUY" }],
        },
      },
      {
        id: ["DARCY"],
        autoHide: true,
        name: "DARCY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "10", outlineColor: "#000000" },
          pages: [{ text: "DARCY" }],
        },
      },
      {
        id: ["TALANT Citadelle", "Talant"],
        name: "TALANT Citadelle",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "10", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "TALANT CITADELLE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-12",
    name: "12",
    colors: { background: "#005da7", text: "#ffffff" },
    destinations: [
      {
        id: ["PLOMBIERES"],
        name: "PLOMBIERES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "12", outlineColor: "#000000" },
          pages: [{ text: "PLOMBIERES" }],
        },
      },
      {
        id: ["Parc de la Colombière"],
        name: "Parc de la Colombière",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "12", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", text: "PARC DE LA COLOMBIERE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-13",
    name: "13",
    colors: { background: "#005da7", text: "#ffffff" },
    destinations: [
      {
        id: ["Motte Giron"],
        name: "Motte Giron",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "13", outlineColor: "#000000" },
          pages: [{ text: "MOTTE GIRON" }],
        },
      },
      {
        id: ["Darcy"],
        autoHide: true,
        name: "Darcy",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "13", outlineColor: "#000000" },
          pages: [{ text: "DARCY" }],
        },
      },
      {
        id: ["FONTAINE Village"],
        name: "FONTAINE Village",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "13", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "FONTAINE VILLAGE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-14",
    name: "14",
    colors: { background: "#005da7", text: "#ffffff" },
    destinations: [
      {
        id: ["MARSANNAY Charon"],
        name: "MARSANNAY Charon",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "14", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "MARSANNAY CHARON" }],
        },
      },
      {
        id: ["Charet"],
        name: "Charet",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "14", outlineColor: "#000000" },
          pages: [{ text: "CHARET" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-15",
    name: "15",
    colors: { background: "#005da7", text: "#ffffff" },
    destinations: [
      {
        id: ["PERRIGNY"],
        name: "PERRIGNY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "15", outlineColor: "#000000" },
          pages: [{ text: "PERRIGNY" }],
        },
      },
      {
        id: ["Carraz"],
        name: "Carraz",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "15", outlineColor: "#000000" },
          pages: [{ text: "CARRAZ" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-16",
    name: "16",
    colors: { background: "#005da7", text: "#ffffff" },
    destinations: [
      {
        id: ["QUETIGNY Allées Cavalières"],
        name: "QUETIGNY Allées Cavalières",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "16", outlineColor: "#000000" },
          pages: [{ text: "QUETIGNY" }, { font: "1508C2E1", spacing: 3, text: "ALLEES CAVALIERES" }],
        },
      },
      {
        id: ["NEUILLY-CRIMOLOIS"],
        name: "NEUILLY-CRIMOLOIS",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "16", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "NEUILLY-CRIMOLOIS" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-18",
    name: "18",
    colors: { background: "#005da7", text: "#ffffff" },
    destinations: [
      {
        id: ["Darcy"],
        name: "Darcy",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "18", outlineColor: "#000000" },
          pages: [{ text: "DARCY" }],
        },
      },
      {
        id: ["Ecole des Métiers"],
        autoHide: true,
        name: "Ecole des Métiers",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "18", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "ECOLE DES METIERS" }],
        },
      },
      {
        id: ["LONGVIC Carmélites"],
        name: "LONGVIC Carmélites",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "18", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "LONGVIC CARMELITES" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-19",
    name: "19",
    colors: { background: "#005da7", text: "#ffffff" },
    destinations: [
      {
        id: ["Grésilles Trimolet"],
        name: "Grésilles Trimolet",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "19", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "GRESILLES TRIMOLET" }],
        },
      },
      {
        id: ["ST-APOLLINAIRE Pré Thomas"],
        name: "ST-APOLLINAIRE Pré Thomas",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#005da7", textColor: "#ffffff", text: "19", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "SAINT-APOLLINAIRE" }, { text: "PRE THOMAS" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-30",
    name: "30",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Darcy"],
        name: "Darcy",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "30", outlineColor: "#000000" },
          pages: [{ text: "DARCY" }],
        },
      },
      {
        id: ["HAUTEVILLE"],
        name: "HAUTEVILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "30", outlineColor: "#000000" },
          pages: [{ text: "HAUTEVILLE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-31",
    name: "31",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["LONGVIC Centre"],
        name: "LONGVIC Centre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "31", outlineColor: "#000000" },
          pages: [{ font: "1510N2E1", text: "LONGVIC CENTRE" }],
        },
      },
      {
        id: ["BRETENIERE"],
        name: "BRETENIERE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "31", outlineColor: "#000000" },
          pages: [{ text: "BRETENIERE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-32",
    name: "32",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["LONGVIC Centre"],
        name: "LONGVIC Centre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "32", outlineColor: "#000000" },
          pages: [{ font: "1510N2E1", text: "LONGVIC CENTRE" }],
        },
      },
      {
        id: ["FENAY"],
        name: "FENAY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "32", outlineColor: "#000000" },
          pages: [{ text: "FENAY" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-33",
    name: "33",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Monge Cité de la gastronomie"],
        name: "Monge Cité de la gastronomie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "33", outlineColor: "#000000" },
          pages: [[{ text: "MONGE" }, { text: "CITE DE LA GASTRONOMIE" }]],
        },
      },
      {
        id: ["FLAVIGNEROT"],
        name: "FLAVIGNEROT",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "33", outlineColor: "#000000" },
          pages: [{ text: "FLAVIGNEROT" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-34",
    name: "34",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Sainte-Anne"],
        name: "Sainte-Anne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "34", outlineColor: "#000000" },
          pages: [{ text: "SAINTE-ANNE" }],
        },
      },
      {
        id: ["Monge Cité de la gastronomie"],
        name: "Monge Cité de la gastronomie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "34", outlineColor: "#000000" },
          pages: [[{ text: "MONGE" }, { text: "CITE DE LA GASTRONOMIE" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-35",
    name: "35",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Montagne de Larrey"],
        name: "Montagne de Larrey",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "35", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", text: "MONTAGNE DE LARREY" }],
        },
      },
      {
        id: ["Monge Cité de la gastronomie"],
        name: "Monge Cité de la gastronomie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "35", outlineColor: "#000000" },
          pages: [[{ text: "MONGE" }, { text: "CITE DE LA GASTRONOMIE" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-36",
    name: "36",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["BRESSEY"],
        name: "BRESSEY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "36", outlineColor: "#000000" },
          pages: [{ text: "BRESSEY" }],
        },
      },
      {
        id: ["Grand Marché"],
        name: "Grand Marché",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "36", outlineColor: "#000000" },
          pages: [{ text: "GRAND MARCHE" }],
        },
      },
      {
        id: ["Bus Class' Rostand Boivin"],
        autoHide: true,
        name: "Bus Class' Rostand Boivin",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "36", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "ROSTAND BOIVIN" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-37",
    name: "37",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Grand Marché"],
        name: "Grand Marché",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "37", outlineColor: "#000000" },
          pages: [{ text: "GRAND MARCHÉ" }],
        },
      },
      {
        id: ["MAGNY"],
        name: "MAGNY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "37", outlineColor: "#000000" },
          pages: [{ text: "MAGNY" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-38",
    name: "38",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Ecole de Gendarmerie"],
        name: "Ecole de Gendarmerie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "38", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", text: "ECOLE DE GENDARMERIE" }],
        },
      },
      {
        id: ["Gare SNCF"],
        name: "Gare SNCF",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "38", outlineColor: "#000000" },
          pages: [{ text: "GARE SNCF" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-39",
    name: "39",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["DARCY"],
        name: "DARCY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "39", outlineColor: "#000000" },
          pages: [{ text: "DARCY" }],
        },
      },
      {
        id: ["Divia"],
        name: "Divia",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "39", outlineColor: "#000000" },
          pages: [{ text: "DIVIA" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-FNI",
    name: "F'Ni",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Chevigny-Saint-Sauveur"],
        name: "Chevigny-Saint-Sauveur",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#ee8250",
            textColor: "#ffffff",
            font: "1508C2E1",
            text: "F'Ni",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508C2E1", text: "CHEVIGNY-ST-SAUVEUR" }],
        },
      },
      {
        id: ["Cap Vert"],
        name: "Cap Vert",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#ee8250",
            textColor: "#ffffff",
            font: "1508C2E1",
            text: "F'Ni",
            outlineColor: "#000000",
          },
          pages: [{ text: "CAP VERT" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-40",
    name: "40",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["République"],
        name: "République",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "40", outlineColor: "#000000" },
          pages: [{ text: "REPUBLIQUE" }],
        },
      },
      {
        id: ["Toison d'Or"],
        name: "Toison d'Or",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "40", outlineColor: "#000000" },
          pages: [{ text: "TOISON D'OR" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-41",
    name: "41",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["CHEVIGNY Z.I."],
        name: "CHEVIGNY Z.I.",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "41", outlineColor: "#000000" },
          pages: [{ text: "CHEVIGNY Z.I." }],
        },
      },
      {
        id: ["Grand Marché"],
        name: "Grand Marché",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "41", outlineColor: "#000000" },
          pages: [{ text: "GRAND MARCHE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-42",
    name: "42",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["CHENOVE C. Cial"],
        name: "CHENOVE C. Cial",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "42", outlineColor: "#000000" },
          pages: [{ text: "CHENOVE" }, { font: "1508C2E1", spacing: 3, text: "CENTRE COMMERCIAL" }],
        },
      },
      {
        id: ["Les Ateliers"],
        name: "Les Ateliers",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "42", outlineColor: "#000000" },
          pages: [{ text: "LES ATELIERS" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-43",
    name: "43",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Ecoparc Dijon Bourgogne"],
        name: "Ecoparc Dijon Bourgogne",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "43", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 1, text: "ECOPARC DIJON BOURGOGNE" }],
        },
      },
      {
        id: ["Grésilles Trimolet"],
        name: "Grésilles Trimolet",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "43", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "GRESILLES TRIMOLET" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-44",
    name: "44",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Les Parcs d'Oscara"],
        name: "Les Parcs d'Oscara",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "44", outlineColor: "#000000" },
          pages: [{ font: "1508C2E1", spacing: 3, text: "LES PARCS D'OSCARA" }],
        },
      },
      {
        id: ["LONGVIC Centre"],
        name: "LONGVIC Centre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "44", outlineColor: "#000000" },
          pages: [{ font: "1510N2E1", text: "LONGVIC CENTRE" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-45",
    name: "45",
    colors: { background: "#ee8250", text: "#ffffff" },
    destinations: [
      {
        id: ["Carraz"],
        name: "Carraz",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "45", outlineColor: "#000000" },
          pages: [{ text: "CARRAZ" }],
        },
      },
      {
        id: ["Les Ateliers"],
        name: "Les Ateliers",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#ee8250", textColor: "#ffffff", text: "45", outlineColor: "#000000" },
          pages: [{ text: "LES ATELIERS" }],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-61",
    name: "61",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' FENAY"],
        autoHide: true,
        name: "Bus Class' FENAY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "61", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "FENAY" }]],
        },
      },
      {
        id: ["Bus Class' Collège Dorgelès"],
        autoHide: true,
        name: "Bus Class' Collège Dorgelès",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "61", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "COLLEGE DORGELES" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-62",
    name: "62",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' FENAY"],
        autoHide: true,
        name: "Bus Class' FENAY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "62", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "FENAY" }]],
        },
      },
      {
        id: ["Bus Class' Lycée H. Fontaine"],
        autoHide: true,
        name: "Bus Class' Lycée H. Fontaine",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "62", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "LYCÉE H. FONTAINE" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-63",
    name: "63",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' BRETENIERE"],
        autoHide: true,
        name: "Bus Class' BRETENIERE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "63", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "BRETENIERE" }]],
        },
      },
      {
        id: ["Bus Class' Collège Dorgelès"],
        autoHide: true,
        name: "Bus Class' Collège Dorgelès",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "63", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "COLLEGE DORGELES" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-64",
    name: "64",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' BRESSEY"],
        autoHide: true,
        name: "Bus Class' BRESSEY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "64", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "BRESSEY" }]],
        },
      },
      {
        id: ["Ne prend pas de voyageurs"],
        autoHide: true,
        name: "Ne prend pas de voyageurs",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { text: "" },
          pages: [[{ text: "CE VEHICULE NE PREND" }, { text: "PAS DE VOYAGEUR" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-65",
    name: "65",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' HAUTEVILLE"],
        autoHide: true,
        name: "Bus Class' HAUTEVILLE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "65", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "HAUTEVILLE" }]],
        },
      },
      {
        id: ["Bus Class' Collège Vian"],
        autoHide: true,
        name: "Bus Class' Collège Vian",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "65", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "COLLEGE VIAN" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-66",
    name: "66",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' NEUILLY CRI"],
        autoHide: true,
        name: "Bus Class' NEUILLY CRI",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "66", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "NEUILLY CRI" }]],
        },
      },
      {
        id: ["Bus Class' Collège Dorgelès"],
        autoHide: true,
        name: "Bus Class' Collège Dorgelès",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "66", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "COLLEGE DORGELES" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-67",
    name: "67",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' NEUILLY CRI"],
        autoHide: true,
        name: "Bus Class' NEUILLY CRI",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "67", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "NEUILLY CRI" }]],
        },
      },
      {
        id: ["Bus Class' 30 Octobre"],
        autoHide: true,
        name: "Bus Class' 30 Octobre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "67", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "30 OCTOBRE" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-68",
    name: "68",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' BRETENIERE"],
        autoHide: true,
        name: "Bus Class' BRETENIERE",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "68", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "BRETENIERE" }]],
        },
      },
      {
        id: ["Bus Class' Lycée H. Fontaine"],
        autoHide: true,
        name: "Bus Class' Lycée H. Fontaine",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "68", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "LYCEE H. FONTAINE" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-69",
    name: "69",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' NEUILLY CRI"],
        autoHide: true,
        name: "Bus Class' NEUILLY CRI",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "69", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "NEUILLY CRI" }]],
        },
      },
      {
        id: ["Bus Class' Lycée Boivin"],
        autoHide: true,
        name: "Bus Class' Lycée Boivin",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "69", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "LYCEE BOIVIN" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-70",
    name: "70",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' PLOMBIERES"],
        autoHide: true,
        name: "Bus Class' PLOMBIERES",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "70", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "PLOMBIERES" }]],
        },
      },
      {
        id: ["Bus Class' Collège Rameau"],
        autoHide: true,
        name: "Bus Class' Collège Rameau",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "70", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "COLLEGE RAMEAU" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-71",
    name: "71",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' Roosevelt"],
        autoHide: true,
        name: "Bus Class' Roosevelt",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "71", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "ROOSEVELT" }]],
        },
      },
      {
        id: ["Bus Class' Collège Malraux"],
        autoHide: true,
        name: "Bus Class' Collège Malraux",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "71", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "COLLEGE MALRAUX" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-72",
    name: "72",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' MAGNY"],
        autoHide: true,
        name: "Bus Class' MAGNY",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "72", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "MAGNY" }]],
        },
      },
      {
        id: ["Bus Class' Lycée Boivin"],
        autoHide: true,
        name: "Bus Class' Lycée Boivin",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "72", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "LYCEE BOIVIN" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-73",
    name: "73",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["Bus Class' Lycée Boivin"],
        autoHide: true,
        name: "Bus Class' Lycée Boivin",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "73", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "LYCEE BOIVIN" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-74",
    name: "74",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["ST-APOLLINAIRE Pré Thomas"],
        autoHide: true,
        name: "Bus Class' ST-APOLLINAIRE Pré Thomas",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "74", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "ST-APO. PRE THOMAS" }]],
        },
      },
      {
        id: ["Bus Class' Lycée Le Castel"],
        autoHide: true,
        name: "Bus Class' Lycée Le Castel",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "74", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "LYCEE LE CASTEL" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-75",
    name: "75",
    colors: { background: "#3793ac", text: "#ffffff" },
    destinations: [
      {
        id: ["FLAVIGNEROT"],
        autoHide: true,
        name: "Bus Class' FLAVIGNEROT",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "75", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "FLAVIGNEROT" }]],
        },
      },
      {
        id: ["Collège Dunant"],
        autoHide: true,
        name: "Bus Class' Collège Dunant",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#3793ac", textColor: "#ffffff", text: "75", outlineColor: "#000000" },
          pages: [[{ text: "BUS CLASS'" }, { text: "COLLÈGE DUNANT" }]],
        },
      },
    ],
  },
  {
    id: "DIVIA:4-NAVC",
    noCartridge: true,
    name: "NC",
    colors: { background: "#000000", text: "#ffffff" },
    destinations: [
      {
        id: ["Carraz"],
        autoHide: true,
        name: "Carraz",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#000000",
            textColor: "#ffffff",
            font: "1508C2E1",
            text: "NAVC",
            outlineColor: "#000000",
          },
          pages: [[{ text: "NAVETTE DU DIMANCHE" }, { text: "DIRECTION> CARRAZ" }]],
        },
      },
      {
        id: ["Les Ateliers"],
        autoHide: true,
        name: "Les Ateliers",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#000000",
            textColor: "#ffffff",
            font: "1508C2E1",
            text: "NAVC",
            outlineColor: "#000000",
          },
          pages: [[{ text: "NAVETTE DU DIMANCHE" }, { text: "DIRECTION> LES ATELIERS" }]],
        },
      },
    ],
  },
  { id: "DIVIA:4-89", name: "PL.B", colors: { background: "#000000", text: "#ffffff" }, destinations: [] },
  {
    id: "DIVIA:4-93",
    noCartridge: true,
    name: "NP",
    colors: { background: "#000000", text: "#ffffff" },
    destinations: [
      {
        id: ["Dépôt"],
        autoHide: true,
        name: "Dépôt",
        girouette: {
          ledColor: "WHITE",
          routeNumber: { backgroundColor: "#000000", textColor: "#ffffff", text: "93", outlineColor: "#000000" },
          pages: [[{ text: "NAVETTE PERSONNEL" }, { text: "DIRECTION> DEPOT" }]],
        },
      },
    ],
  },
  { id: "DIVIA:4-98", name: "AT", colors: { background: "#000000", text: "#ffffff" }, destinations: [] },
  {
    id: "DIVIA:4-99",
    noCartridge: true,
    name: "SP",
    colors: { background: "#000000", text: "#ffffff" },
    destinations: [],
  },
];

const network: Network = {
  slug: "divia",
  name: "Divia – Dijon Métropole",
  routes: diviaRoutes,
  color: "#ce007c",
  textColor: "#ffffff",
};

export default network;
