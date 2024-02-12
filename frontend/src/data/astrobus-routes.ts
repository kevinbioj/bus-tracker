import { Route } from "~/@types";

const astrobusRoutes: Route[] = [
  {
    id: "ASTROBUS-zenbus:Line:5131776580124672:LOC",
    name: "1",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#FECA05", text: "#FFFFFF" },
    destinations: [
      {
        id: ["FOLLETIERE"],
        name: "FOLLETIERE",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "FOLLETIERE" }],
        },
      },
      {
        id: ["GARE SNCF"],
        name: "GARE SNCF",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "GARE SNCF" }],
        },
      },
      {
        id: ["GALOTERIE"],
        name: "GALOTERIE",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "GALOTERIE" }],
        },
      },
      {
        id: ["ESAT"],
        name: "ESAT",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "ESAT" }],
        },
      },
      {
        id: ["LISIEUX SNCF"],
        name: "LISIEUX SNCF",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "LISIEUX SNCF" }],
        },
      },
      {
        id: ["CORNU"],
        name: "CORNU",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "CORNU" }],
        },
      },
      {
        id: ["MICHELET"],
        name: "MICHELET",
        girouette: {
          routeNumber: { backgroundColor: "#FECA05", textColor: "#FFFFFF", outlineColor: "#000000", text: "1" },
          pages: [{ text: "MICHELET" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:5089173048393728:LOC",
    name: "2",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#009640", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND VIA CAMP FRANC"],
        name: "MITTERRAND VIA CAMP FRANC",
        girouette: {
          routeNumber: { backgroundColor: "#009640", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: ["MITTERRAND", "VIA CAMP FRANC"] }],
        },
      },
      {
        id: ["MITTERRAND"],
        name: "MITTERRAND",
        girouette: {
          routeNumber: { backgroundColor: "#009640", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "MITTERRAND" }],
        },
      },
      {
        id: ["QUEBEC"],
        name: "QUEBEC",
        girouette: {
          routeNumber: { backgroundColor: "#009640", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: "QUEBEC" }],
        },
      },
      {
        id: ["QUEBEC VIA CAMP FRANC"],
        name: "QUEBEC VIA CAMP FRANC",
        girouette: {
          routeNumber: { backgroundColor: "#009640", textColor: "#FFFFFF", outlineColor: "#000000", text: "2" },
          pages: [{ text: ["QUEBEC", "VIA CAMP FRANC"] }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:4841323284660224:LOC",
    name: "3",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#327BBF", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LISIEUX"],
        name: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#327BBF", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "LISIEUX" }],
        },
      },
      {
        id: ["LISIEUX PROVIDENCE"],
        name: "LISIEUX PROVIDENCE",
        girouette: {
          routeNumber: { backgroundColor: "#327BBF", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ font: "1508C2E1", textSpacing: 3, text: "LISIEUX PROVIDENCE" }],
        },
      },
      {
        id: ["VIMOUTIERS"],
        name: "VIMOUTIERS",
        girouette: {
          routeNumber: { backgroundColor: "#327BBF", textColor: "#FFFFFF", outlineColor: "#000000", text: "3" },
          pages: [{ text: "VIMOUTIERS" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:5182404740251648:LOC",
    name: "4",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#E83279", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LISIEUX"],
        name: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#E83279", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ text: "LISIEUX" }],
        },
      },
      {
        id: ["ST PIERRE SUR DIVES"],
        name: "SAINT-PIERRE-SUR-DIVES",
        girouette: {
          routeNumber: { backgroundColor: "#E83279", textColor: "#FFFFFF", outlineColor: "#000000", text: "4" },
          pages: [{ font: "1508C2E1", textSpacing: 1, text: "SAINT-PIERRE-SUR-DIVES" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:5118765622624256:LOC",
    name: "5",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#A74E97", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LISIEUX"],
        name: "LISIEUX",
        girouette: {
          routeNumber: { backgroundColor: "#A74E97", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "LISIEUX" }],
        },
      },
      {
        id: ["ORBEC"],
        name: "ORBEC",
        girouette: {
          routeNumber: { backgroundColor: "#A74E97", textColor: "#FFFFFF", outlineColor: "#000000", text: "5" },
          pages: [{ text: "ORBEC" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:5089804213551104:LOC",
    name: "6",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#EA5254", text: "#FFFFFF" },
    destinations: [
      {
        id: ["GARE SNCF"],
        name: "GARE SNCF",
        girouette: {
          routeNumber: { backgroundColor: "#EA5254", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "GARE SNCF" }],
        },
      },
      {
        id: ["FLEMING"],
        name: "FLEMING",
        girouette: {
          routeNumber: { backgroundColor: "#EA5254", textColor: "#FFFFFF", outlineColor: "#000000", text: "6" },
          pages: [{ text: "FLEMING" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:5102078626103296:LOC",
    name: "10",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#F7A942", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LES SUEDOISES"],
        name: "LES SUEDOISES",
        girouette: {
          routeNumber: { backgroundColor: "#F7A942", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "LES SUEDOISES" }],
        },
      },
      {
        id: ["MITTERRAND"],
        name: "MITTERRAND",
        girouette: {
          routeNumber: { backgroundColor: "#F7A942", textColor: "#FFFFFF", outlineColor: "#000000", text: "10" },
          pages: [{ text: "MITTERRAND" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:5205031542325248:LOC",
    name: "11",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#00AFCB", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "MITTERRAND",
        girouette: {
          routeNumber: { backgroundColor: "#00AFCB", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "MITTERRAND" }],
        },
      },
      {
        id: ["LES BOSQUETS"],
        name: "LES BOSQUETS",
        girouette: {
          routeNumber: { backgroundColor: "#00AFCB", textColor: "#FFFFFF", outlineColor: "#000000", text: "11" },
          pages: [{ text: "LES BOSQUETS" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:5151678110105600:LOC",
    name: "12",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#94AD23", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "MITTERRAND",
        girouette: {
          routeNumber: { backgroundColor: "#94AD23", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "MITTERRAND" }],
        },
      },
      {
        id: ["BEUVILLERS"],
        name: "BEUVILLERS",
        girouette: {
          routeNumber: { backgroundColor: "#94AD23", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "BEUVILLERS" }],
        },
      },
      {
        id: ["HENRI DUNANT"],
        name: "HENRI DUNANT",
        girouette: {
          routeNumber: { backgroundColor: "#94AD23", textColor: "#FFFFFF", outlineColor: "#000000", text: "12" },
          pages: [{ text: "HENRI DUNANT" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:5126752804274176:LOC",
    name: "13",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#ED6F9B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "MITTERRAND",
        girouette: {
          routeNumber: { backgroundColor: "#ED6F9B", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ text: "MITTERRAND" }],
        },
      },
      {
        id: ["POMPIDOU"],
        name: "POMPIDOU",
        girouette: {
          routeNumber: { backgroundColor: "#ED6F9B", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ text: "POMPIDOU" }],
        },
      },
      {
        id: ["WICART"],
        name: "WICART",
        girouette: {
          routeNumber: { backgroundColor: "#ED6F9B", textColor: "#FFFFFF", outlineColor: "#000000", text: "13" },
          pages: [{ text: "WICART" }],
        },
      },
    ],
  },
  {
    id: "ASTROBUS-zenbus:Line:6325671926169600:LOC",
    name: "14",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#D2A070", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MITTERRAND"],
        name: "MITTERRAND",
        girouette: {
          routeNumber: { backgroundColor: "#D2A070", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "MITTERRAND" }],
        },
      },
      {
        id: ["ST DESIR"],
        name: "ST DESIR",
        girouette: {
          routeNumber: { backgroundColor: "#D2A070", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "SAINT-DESIR" }],
        },
      },
      {
        id: ["ADELINE"],
        name: "ADELINE",
        girouette: {
          routeNumber: { backgroundColor: "#D2A070", textColor: "#FFFFFF", outlineColor: "#000000", text: "14" },
          pages: [{ text: "ADELINE" }],
        },
      },
    ],
  },
];

export default astrobusRoutes;
