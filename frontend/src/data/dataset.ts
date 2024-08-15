import { brandColor } from "../../constants";

import { Network, Route } from "~/@types";
import palmbusNetwork from "~/data/networks/palmbus";

export const networks: Network[] = [palmbusNetwork];

export const routes = networks.flatMap((network) => network.routes);

export const unknownRoute: Route = {
  noCartridge: true,
  colors: { background: brandColor.DEFAULT, text: "#FFFFFF" },
  destinations: [],
  id: "?",
  name: "?",
};
