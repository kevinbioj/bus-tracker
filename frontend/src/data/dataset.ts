import { brandColor } from "../../constants";

import { Network, Route } from "~/@types";
import astrobusNetwork from "~/data/networks/astrobus";
import astuceNetwork from "~/data/networks/astuce";
import bybusNetwork from "~/data/networks/bybus";
import capCotentinNetwork from "~/data/networks/cap-cotentin";
import deepMobNetwork from "~/data/networks/deepmob";
import ficibusNetwork from "~/data/networks/ficibus";
import hobusNetwork from "~/data/networks/hobus";
import lbusNetwork from "~/data/networks/lbus";
import lebusNetwork from "~/data/networks/lebus";
import liaNetwork from "~/data/networks/lia";
import mocaNetwork from "~/data/networks/moca";
import nemusNetwork from "~/data/networks/nemus";
import nevaNetwork from "~/data/networks/neva";
import nomadCarNetwork from "~/data/networks/nomad-car";
import nomadTrainNetwork from "~/data/networks/nomad-train";
import rezobusNetwork from "~/data/networks/rezobus";
import semoNetwork from "~/data/networks/semo";
import sngoNetwork from "~/data/networks/sngo";
import transurbainNetwork from "~/data/networks/transurbain";
import twistoNetwork from "~/data/networks/twisto";

export const networks: Network[] = [
  nomadTrainNetwork,
  nomadCarNetwork,
  astuceNetwork,
  twistoNetwork,
  liaNetwork,
  capCotentinNetwork,
  semoNetwork,
  transurbainNetwork,
  deepMobNetwork,
  sngoNetwork,
  astrobusNetwork,
  rezobusNetwork,
  nevaNetwork,
  nemusNetwork,
  bybusNetwork,
  mocaNetwork,
  ficibusNetwork,
  hobusNetwork,
  lbusNetwork,
  lebusNetwork,
];

export const routes = networks.flatMap((network) => network.routes);

export const unknownRoute: Route = {
  noCartridge: true,
  colors: { background: brandColor.DEFAULT, text: "#FFFFFF" },
  destinations: [],
  id: "?",
  name: "?",
};
