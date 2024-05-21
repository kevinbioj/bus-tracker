import { defaultCenter, defaultZoom } from "../../../constants";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

import Caption from "~/components/caption/caption";
import DataStatus from "~/components/data-status";
import Operators from "~/components/operators/operators";
import RouteList from "~/components/route-list/route-list";

const MAP_HEIGHT = "h-[70vh]";

const InteractiveMap = dynamic(() => import("../../components/interactive-map/interactive-map"), {
  loading: () => <section className={MAP_HEIGHT} />,
  ssr: false,
});

export default function Vehicles() {
  return (
    <main>
      <InteractiveMap className={MAP_HEIGHT} defaultCenter={defaultCenter} defaultZoom={defaultZoom} />
      <DataStatus />
      <RouteList />
      <Caption />
      <Operators />
    </main>
  );
}
