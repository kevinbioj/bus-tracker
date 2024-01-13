"use client";

import { useLocalStorage } from "usehooks-ts";

import { Route } from "~/@types";
import { useVehicles } from "~/hooks/useVehicles";

import RouteDestination from "./route-destination";
import RouteLogo from "./route-logo";

type RouteCardProps = { route: Route };

export default function RouteCard({ route }: RouteCardProps) {
  const [showScheduledTrips] = useLocalStorage("show-scheduled-trips", true);
  const vehicles = useVehicles().filter((data) => {
    if (data.trip.route !== route.id) return false;
    if (!showScheduledTrips && data.vehicle.position.type === "SCHEDULED") return false;
    return true;
  });

  if (vehicles.length === 0 && route.destinations.every((destination) => destination.autoHide)) return null;

  const destinations = route.destinations.map((destination) => destination.id).flat();
  const unknownVehicles = vehicles.filter((data) =>
    destinations.every((destination) => destination !== data.trip.headsign),
  );

  return (
    <article
      className="flex gap-2 p-1 rounded-md"
      style={{
        backgroundColor: route.colors.background,
        color: route.colors.text,
      }}
    >
      <div className="my-auto">
        <RouteLogo route={route} />
      </div>
      <div className="flex flex-col gap-y-2 mt-1.5">
        {route.destinations.map((destination, index) => {
          const targetVehicles = vehicles.filter((data) => destination.id.some((id) => data.trip.headsign === id));
          if (targetVehicles.length === 0 && destination.autoHide) return null;
          return <RouteDestination destination={destination} key={index} vehicles={targetVehicles} />;
        })}
        {unknownVehicles.length > 0 && (
          <RouteDestination
            destination={{
              id: [],
              autoHide: true,
              name: "Terminus inconnu",
            }}
            vehicles={unknownVehicles}
          />
        )}
      </div>
    </article>
  );
}
