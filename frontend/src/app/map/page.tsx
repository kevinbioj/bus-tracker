import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

import getQueryClient from "~/app/getQueryClient";
import Vehicles from "~/app/map/vehicles";
import { fetchVehicles } from "~/data/fetch";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Carte – Bus Tracker",
  description: "Carte temps-réel des véhicules en circulation.",
};

export default async function HydratedVehicles() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ["vehicles"], queryFn: fetchVehicles });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <Vehicles />
    </HydrationBoundary>
  );
}
