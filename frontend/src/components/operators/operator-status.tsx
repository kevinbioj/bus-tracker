"use client";

import { P, match } from "ts-pattern";

import { useVehicles } from "~/hooks/useVehicles";

type OperatorStatusProps = { id: string };

export default function OperatorStatus({ id }: OperatorStatusProps) {
  const vehicles = useVehicles().filter((vehicle) => vehicle.source === id);
  const scheduledVehicles = vehicles.filter((vehicle) => vehicle.vehicle.position.type === "SCHEDULED");
  return (
    <div>
      {match([vehicles.length, scheduledVehicles.length])
        .with([0, 0], () => <span className="font-bold text-red-500">Aucun véhicule en circulation</span>)
        .with([1, 0], () => <span className="font-bold text-green-500">1 véhicule en circulation</span>)
        .with([P.number, 0], ([total]) => (
          <span className="font-bold text-green-500">{total} véhicules en circulation</span>
        ))
        .with([1, 1], () => (
          <span className="font-bold text-orange-500">1 véhicule en circulation (dont 1 course théorique)</span>
        ))
        .with([P.number, 1], ([total]) => (
          <span className="font-bold text-green-500">{total} véhicules en circulation (dont 1 course théorique)</span>
        ))
        .with([P.number, P.number], ([total, scheduled]) => (
          <span className="font-bold text-green-500">
            {total} véhicules en circulation (dont {scheduled} courses théoriques)
          </span>
        ))
        .exhaustive()}
    </div>
  );
}
