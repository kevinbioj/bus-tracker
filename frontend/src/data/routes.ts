import { brandColor } from "../../constants";

import { Route } from "~/@types";
import astrobusRoutes from "~/data/networks/astrobus";
import astuceRoutes from "~/data/networks/astuce";
import capCotentinRoutes from "~/data/networks/cap-cotentin";
import deepMobRoutes from "~/data/networks/deepmob";
import hobusRoutes from "~/data/networks/hobus";
import lbusRoutes from "~/data/networks/lbus";
import nevaRoutes from "~/data/networks/neva";
import nomadRegionRoutes from "~/data/networks/nomad-region";
import rezobusRoutes from "~/data/networks/rezobus";
import sngoRoutes from "~/data/networks/sngo";
import twistoRoutes from "~/data/networks/twisto";

const routes: Route[] = [
  ...astrobusRoutes,
  ...astuceRoutes,
  ...capCotentinRoutes,
  ...deepMobRoutes,
  ...hobusRoutes,
  ...lbusRoutes,
  ...nevaRoutes,
  ...nomadRegionRoutes,
  ...rezobusRoutes,
  ...sngoRoutes,
  ...twistoRoutes,
];

export const unknownRoute: Route = {
  noCartridge: true,
  colors: { background: brandColor.DEFAULT, text: "#FFFFFF" },
  destinations: [],
  id: "?",
  name: "?",
};

export default routes;
