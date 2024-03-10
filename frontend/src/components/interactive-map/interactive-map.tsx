"use client";

import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useLocalStorage } from "usehooks-ts";

import Geolocate from "~/components/interactive-map/geolocate";
import LocationSaver from "~/components/interactive-map/location-saver";

import VehicleHightlight from "./vehicle-highlight";
import VehicleMarkers from "./vehicle-markers";

type InteractiveMapProps = {
  center: LatLngExpression;
  className?: string;
};

export default function InteractiveMap({ center, className }: InteractiveMapProps) {
  const [lastLocation] = useLocalStorage<[number, number, number] | null>("last-location", null);
  return (
    <section>
      <h2 className="font-bold sr-only text-2xl text-center">Carte interactive</h2>
      <MapContainer
        center={lastLocation ? [lastLocation[0], lastLocation[1]] : center}
        className={className}
        id="interactive-map"
        zoom={lastLocation?.[2] ?? 12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationSaver />
        <VehicleMarkers />
        <VehicleHightlight />
        <Geolocate />
      </MapContainer>
    </section>
  );
}
