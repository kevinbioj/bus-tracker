"use client";

import { Fragment } from "react";

import { RouteTripDestination, VehicleData } from "~/@types";

import VehicleId from "./vehicle-id";

type RouteDestinationProps = {
  destination: RouteTripDestination;
  vehicles: VehicleData[];
};

export default function RouteDestination({ destination, vehicles }: RouteDestinationProps) {
  return (
    <section>
      <h4 className="hidden">
        {destination.name}
        {destination.city && ` ${destination.city}`}
      </h4>
      <div className="flex gap-1 font-[Achemine] leading-none text-lg">
        <div>➜</div>
        <div className="flex flex-col gap-0.5">
          <span className="font-bold">{destination.name}</span>
          {destination.city && <span className="text-xs uppercase">{destination.city}</span>}
        </div>
      </div>
      <p>
        {vehicles.length > 0 ? (
          vehicles.map((vehicle, index) => {
            const isNotFirst = index > 0;
            return (
              <Fragment key={vehicle.id}>
                {isNotFirst && " - "}
                <VehicleId key={vehicle.id} vehicle={vehicle} />
              </Fragment>
            );
          })
        ) : (
          <>Aucun véhicule en circulation.</>
        )}
      </p>
    </section>
  );
}
