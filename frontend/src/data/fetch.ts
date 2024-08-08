import { LightVehicleDto, TripData, VehicleData, VehicleDto } from "~/@types";

const YABS_URL = process.env.YABS_URL ?? "http://192.168.1.10:15020";

export async function fetchTrip(tripId: string) {
  const response = await fetch(`${YABS_URL}/trip/${tripId}`);
  const data = (await response.json()) as TripData;
  return data;
}

export async function fetchVehicles() {
  const response = await fetch(`${YABS_URL}/vehicles`);
  const data = (await response.json()) as VehicleData[];
  return data.sort((a, b) => +(a.vehicle.id ?? Infinity) - +(b.vehicle.id ?? Infinity));
}

export async function fetchVehicleList() {
  const response = await fetch(`${YABS_URL}/history`);
  return response.json() as Promise<LightVehicleDto[]>;
}

export async function fetchOperatorVehicles(operator: string) {
  const response = await fetch(`${YABS_URL}/history/${operator}`);
  if (!response.ok) return null;
  return response.json() as Promise<LightVehicleDto[]>;
}

export async function fetchOperatorVehicle(operator: string, number: string, period?: string) {
  const response = await fetch(`${YABS_URL}/history/${operator}/${number}${period ? `?period=${period}` : ""}`);
  if (!response.ok) return null;
  return response.json() as Promise<VehicleDto>;
}
