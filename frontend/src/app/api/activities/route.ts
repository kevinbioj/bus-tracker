import { NextResponse } from "next/server";

import { fetchVehicleList } from "~/data/fetch";

export const revalidate = 0;

export async function GET() {
  const vehicles = await fetchVehicleList();
  return NextResponse.json(vehicles);
}
