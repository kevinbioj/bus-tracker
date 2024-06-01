import { brandColor } from "../../constants";

import { Network, Route } from "~/@types";

import starNetwork from "./networks/star";

export const networks: Network[] = [starNetwork];

export const routes = networks.flatMap((network) => network.routes);

export const unknownRoute: Route = {
  noCartridge: true,
  colors: { background: brandColor.DEFAULT, text: "#FFFFFF" },
  destinations: [],
  id: "?",
  name: "?",
};
