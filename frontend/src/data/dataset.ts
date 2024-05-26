import { brandColor } from "../../constants";

import { Network, Route } from "~/@types";

import irigoNetwork from "./networks/irigo";

export const networks: Network[] = [irigoNetwork];

export const routes = networks.flatMap((network) => network.routes);

export const unknownRoute: Route = {
  noCartridge: true,
  colors: { background: brandColor.DEFAULT, text: "#FFFFFF" },
  destinations: [],
  id: "?",
  name: "?",
};
