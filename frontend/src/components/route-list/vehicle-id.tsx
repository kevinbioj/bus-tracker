"use client";

import { VehicleData } from "~/@types";

type VehicleIdProps = { vehicle: VehicleData };

export default function VehicleId({ vehicle }: VehicleIdProps) {
  const sendEvent = () => {
    const element = document.getElementById("interactive-map");
    if (element === null) return;
    element.dispatchEvent(new CustomEvent("highlightvehicle", { detail: vehicle }));
  };
  const children = (
    <>
      {vehicle.vehicle.id ? vehicle.vehicle.id : vehicle.id}
      {!vehicle.vehicle.id && "*"}
    </>
  );
  return vehicle.trip ? (
    <span className="hover:cursor-pointer hover:underline" onClick={sendEvent} title="Voir sur la carte">
      {children}
    </span>
  ) : (
    <>{children}</>
  );
}
