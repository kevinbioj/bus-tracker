import { brandColor } from "../../constants";

import { Network, Route } from "~/@types";
import diviaNetwork from "~/data/networks/divia";

export const networks: Network[] = [diviaNetwork];

export const routes = networks.flatMap((network) => network.routes);

export const unknownRoute: Route = {
  noCartridge: true,
  colors: { background: brandColor.DEFAULT, text: "#FFFFFF" },
  destinations: [],
  id: "?",
  name: "?",
};
