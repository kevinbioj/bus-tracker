"use client";

import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { useLocalStorage } from "usehooks-ts";

import Geolocate from "~/components/interactive-map/geolocate";
import LocationSaver from "~/components/interactive-map/location-saver";

import VehicleHightlight from "./vehicle-highlight";
import VehicleMarkers from "./vehicle-markers";

type InteractiveMapProps = {
  className?: string;
  defaultCenter: LatLngExpression;
  defaultZoom: number;
};

export default function InteractiveMap({ className, defaultCenter, defaultZoom }: InteractiveMapProps) {
  const darkMode = false; /*useMediaQuery("(prefers-color-scheme: dark)", { defaultValue: false });*/
  const [lastLocation] = useLocalStorage<[number, number, number] | null>("last-location", null);
  return (
    <section>
      <h2 className="font-bold sr-only text-2xl text-center">Carte interactive</h2>
      <MapContainer
        center={lastLocation ? [lastLocation[0], lastLocation[1]] : defaultCenter}
        className={className}
        id="interactive-map"
        zoom={lastLocation?.[2] ?? defaultZoom}
      >
        {darkMode ? (
          <TileLayer
            attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=2fe3ce6a-fb74-4ce7-bf3d-48419d25b1eb"
          />
        ) : (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        )}
        <LocationSaver />
        <VehicleMarkers />
        <VehicleHightlight />
        <Geolocate />
      </MapContainer>
    </section>
  );
}
