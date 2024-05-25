"use client";

import { Tooltip } from "react-tooltip";

import { useVehicles } from "~/hooks/useVehicles";

import VehicleMarker from "./vehicle-marker";

type VehicleMarkersProps = { activeMarker: string | undefined; setActiveMarker: (id?: string) => any };

export default function VehicleMarkers({ activeMarker, setActiveMarker }: VehicleMarkersProps) {
  const vehicles = useVehicles();
  return (
    <>
      {vehicles.map((vehicle) => (
        <VehicleMarker key={vehicle.id} data={vehicle} activeMarker={activeMarker} setActiveMarker={setActiveMarker} />
      ))}
    </>
  );
}
