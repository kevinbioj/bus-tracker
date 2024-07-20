import { Network, Route } from "~/@types";

const hobusRoutes: Route[] = [
  {
    id: "HOBUS:zenbus:Line:363100001:LOC",
    noCartridge: true,
    name: "A",
    colors: { background: "#71BF44", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CHAMPLAIN"],
        name: "Champlain",
        city: "HONFLEUR",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "CHAMPLAIN" }],
        },
      },
      {
        id: ["GARE"],
        autoHide: true,
        name: "Gare Routière",
        city: "HONFLEUR",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "GARE ROUTIERE" }],
        },
      },
      {
        id: ["LA CLAIRE"],
        name: "La Claire",
        city: "HONFLEUR",
        girouette: {
          routeNumber: { backgroundColor: "#71BF44", textColor: "#FFFFFF", outlineColor: "#000000", text: "A" },
          pages: [{ text: "LA CLAIRE" }],
        },
      },
    ],
  },
  {
    id: "HOBUS:zenbus:Line:401040001:LOC",
    noCartridge: true,
    name: "B",
    colors: { background: "#00A0E3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["EIDER"],
        name: "Eider",
        city: "HONFLEUR",
        girouette: {
          routeNumber: { backgroundColor: "#00A0E3", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "EIDER" }],
        },
      },
      {
        id: ["GARE"],
        autoHide: true,
        name: "Gare Routière",
        city: "HONFLEUR",
        girouette: {
          routeNumber: { backgroundColor: "#00A0E3", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "GARE ROUTIERE" }],
        },
      },
      {
        id: ["PHARE NATUROSPACE"],
        name: "Phare – Naturospace",
        city: "HONFLEUR",
        girouette: {
          routeNumber: { backgroundColor: "#00A0E3", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ font: "1508C2E1", text: "PHARE-NATUROSPACE" }],
        },
      },
      {
        id: ["PLAGE"],
        name: "Plage",
        city: "HONFLEUR",
        girouette: {
          routeNumber: { backgroundColor: "#00A0E3", textColor: "#FFFFFF", outlineColor: "#000000", text: "B" },
          pages: [{ text: "PLAGE" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "hobus",
  name: "Hobus – Pays de Honfleur-Beuzeville",
  routes: hobusRoutes,
  color: "#d15946",
  textColor: "#ffffff",
};

export default network;
