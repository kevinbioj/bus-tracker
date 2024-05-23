import { defaultCenter, defaultZoom } from "../../../constants";
import "leaflet/dist/leaflet.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";

import Caption from "~/components/caption/caption";
import DataStatus from "~/components/data-status";
import Operators from "~/components/operators/operators";
import RouteList from "~/components/route-list/route-list";

export const metadata: Metadata = {
  title: "Bus Tracker",
  description: "Bus Tracker est une application de visualisation des véhicules de transport en commun.",
};

const MAP_HEIGHT = "h-[70vh]";

const InteractiveMap = dynamic(() => import("../../components/interactive-map/interactive-map"), {
  loading: () => <section className={MAP_HEIGHT} />,
  ssr: false,
});

export default async function Map() {
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
