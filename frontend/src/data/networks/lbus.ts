import { Route } from "~/@types";

const lbusRoutes: Route[] = [
  {
    id: "LBUS:zenbus:Line:30030155:LOC",
    name: "L'Bus",
    mapOnly: true,
    noCartridge: true,
    colors: { background: "#FFE264", text: "#000000" },
    destinations: [
      {
        id: [
          "ZA la Semaille > Centre hospitalier Anne de Ticheville",
          "ZA du Bois du cours > Centre hospitalier Anne de Ticheville",
          "254",
        ],
        name: "ZA la Semaille > Centre hospitalier Anne de Ticheville",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#FFE264",
            textColor: "#000000",
            font: "1508C2E1",
            text: "l'Bus",
          },
          pages: [{ text: ["CENTRE HOSPITALIER", "ANNE DE TICHEVILLE"] }],
        },
      },
      {
        id: ["Centre hospitalier Anne de Ticheville > ZA du Bois du cours", "255"],
        name: "Z.A. du Bois du cours",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#FFE264",
            textColor: "#000000",
            font: "1508C2E1",
            text: "l'Bus",
          },
          pages: [{ font: "1508C2E1", text: "Z.A. DU BOIS DU COURS" }],
        },
      },
    ],
  },
];

export default lbusRoutes;
