import { brandColor } from "../../constants";

import { Network, Route } from "~/@types";

import tagNetwork from "./networks/tag";

export const networks: Network[] = [tagNetwork];

export const routes = networks.flatMap((network) => network.routes);

export const unknownRoute: Route = {
  noCartridge: true,
  colors: { background: brandColor.DEFAULT, text: "#FFFFFF" },
  destinations: [],
  id: "?",
  name: "?",
};
