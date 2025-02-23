import { LightVehicleDto, VehicleDto } from "~/@types";

const YABS_URL = process.env.YABS_URL ?? "http://127.0.0.1:13337";

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
