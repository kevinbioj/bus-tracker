import { notFound } from "next/navigation";
import { NextResponse } from "next/server";

import { fetchVehicles } from "~/data/fetch";

export const revalidate = 0;

export async function GET() {
  try {
    const vehicles = await fetchVehicles();
    return NextResponse.json(vehicles);
  } catch {
    notFound();
  }
}
