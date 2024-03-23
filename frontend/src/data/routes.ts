import { brandColor } from "../../constants";

import { Route } from "~/@types";
import astrobusRoutes from "~/data/networks/astrobus";
import astuceRoutes from "~/data/networks/astuce";
import bybusRoutes from "~/data/networks/bybus";
import capCotentinRoutes from "~/data/networks/cap-cotentin";
import deepMobRoutes from "~/data/networks/deepmob";
import hobusRoutes from "~/data/networks/hobus";
import lbusRoutes from "~/data/networks/lbus";
import lebusRoutes from "~/data/networks/lebus";
import liaRoutes from "~/data/networks/lia";
import mocaRoutes from "~/data/networks/moca";
import nevaRoutes from "~/data/networks/neva";
import nomadRegionRoutes from "~/data/networks/nomad-region";
import rezobusRoutes from "~/data/networks/rezobus";
import semoRoutes from "~/data/networks/semo";
import sngoRoutes from "~/data/networks/sngo";
import twistoRoutes from "~/data/networks/twisto";

const routes: Route[] = [
  ...astrobusRoutes,
  ...astuceRoutes,
  ...capCotentinRoutes,
  ...bybusRoutes,
  ...deepMobRoutes,
  ...hobusRoutes,
  ...lebusRoutes,
  ...lbusRoutes,
  ...liaRoutes,
  ...mocaRoutes,
  ...nevaRoutes,
  ...nomadRegionRoutes,
  ...rezobusRoutes,
  ...semoRoutes,
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
