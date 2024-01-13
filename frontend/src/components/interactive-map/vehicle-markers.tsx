"use client";

import { useVehicles } from "~/hooks/useVehicles";

import VehicleMarker from "./vehicle-marker";

export default function VehicleMarkers() {
  const vehicles = useVehicles();
  return (
    <>
      {vehicles.map((vehicle) => (
        <VehicleMarker key={vehicle.id} data={vehicle} />
      ))}
    </>
  );
}
