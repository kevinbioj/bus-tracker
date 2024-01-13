"use client";

import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";

import Geolocate from "~/components/interactive-map/geolocate";

import VehicleHightlight from "./vehicle-highlight";
import VehicleMarkers from "./vehicle-markers";

type InteractiveMapProps = {
  center: LatLngExpression;
  className?: string;
};

export default function InteractiveMap({ center, className }: InteractiveMapProps) {
  return (
    <section>
      <h2 className="font-medium sr-only text-2xl text-center">Carte interactive</h2>
      <MapContainer center={center} className={className} id="interactive-map" zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <VehicleMarkers />
        <VehicleHightlight />
        <Geolocate />
      </MapContainer>
    </section>
  );
}
