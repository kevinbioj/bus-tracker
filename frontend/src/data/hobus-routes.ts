import { Route } from "~/@types";

const hobusRoutes: Route[] = [
  {
    id: "HOBUS-zenbus:Line:363100001:LOC",
    mapOnly: true,
    noCartridge: true,
    name: "A",
    colors: { background: "#71BF44", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHAMPLAIN"],
        name: "Champlain",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "CHAMPLAIN" }],
        },
      },
      {
        id: ["LA CLAIRE"],
        name: "La Claire",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "LA CLAIRE" }],
        },
      },
      {
        id: ["GARE"],
        name: "Gare Routière",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "GARE ROUTIERE" }],
        },
      },
    ],
  },
  {
    id: "HOBUS-zenbus:Line:401040001:LOC",
    mapOnly: true,
    noCartridge: true,
    name: "B",
    colors: { background: "#00A0E3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["EIDER"],
        name: "Eider",
        girouette: {
          routeNumber: { backgroundColor: "#00A0E3", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "EIDER" }],
        },
      },
      {
        id: ["PHARE NATUROSPACE"],
        name: "Phare – Naturospace",
        girouette: {
          routeNumber: { backgroundColor: "#00A0E3", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1510N2E1", text: "PHARE - NATUROSPACE" }],
        },
      },
      {
        id: ["GARE"],
        name: "Gare Routière",
        girouette: {
          routeNumber: { backgroundColor: "#00A0E3", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "GARE ROUTIERE" }],
        },
      },
    ],
  },
];

export default hobusRoutes;
