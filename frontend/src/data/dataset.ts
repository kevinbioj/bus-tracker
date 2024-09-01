import { brandColor } from "../../constants";

import { Network, Route } from "~/@types";
import tbmNetwork from "~/data/networks/tbm";

export const networks: Network[] = [tbmNetwork];

export const routes = networks.flatMap((network) => network.routes);

export const unknownRoute: Route = {
  noCartridge: true,
  colors: { background: brandColor.DEFAULT, text: "#FFFFFF" },
  destinations: [],
  id: "?",
  name: "?",
};
