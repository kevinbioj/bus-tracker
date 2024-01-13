import { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

import Caption from "~/components/caption/caption";
import DataStatus from "~/components/data-status";
import Operators from "~/components/operators/operators";
import RouteList from "~/components/route-list/route-list";

const MAP_CENTER = [49.443232, 1.099971] satisfies LatLngTuple;
const MAP_HEIGHT = "h-[70vh]";

const InteractiveMap = dynamic(() => import("../../components/interactive-map/interactive-map"), {
  loading: () => <section className={MAP_HEIGHT} />,
  ssr: false,
});

export default function Vehicles() {
  return (
    <main>
      <InteractiveMap center={MAP_CENTER} className={MAP_HEIGHT} />
      <DataStatus />
      <RouteList />
      <Caption />
      <Operators />
    </main>
  );
}
