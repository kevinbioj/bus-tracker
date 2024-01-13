import { useQuery } from "@tanstack/react-query";

import { VehicleData } from "~/@types";
import fetcher from "~/hooks/fetcher";

export const REFRESH_INTERVAL = 10;

export function useVehiclesQuery() {
  return useQuery({
    queryKey: ["vehicles"],
    queryFn: () => fetcher<VehicleData[]>("/api/vehicles"),
    refetchInterval: REFRESH_INTERVAL * 1000,
    retry: false,
  });
}

export function useVehicles() {
  return useVehiclesQuery().data ?? [];
}
