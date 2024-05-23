import { notFound } from "next/navigation";

import VehicleList from "~/app/vehicles/[operator]/VehicleList";
import { fetchOperatorVehicles } from "~/data/fetch";
import operators from "~/data/operators";

type VehicleListPageProps = { params: { operator?: string } };

export function generateMetadata({ params }: VehicleListPageProps) {
  const operator = operators.find((o) => o.id === params.operator?.toUpperCase());
  if (typeof operator === "undefined") return {};
  return {
    title: `${operator.name} | Bus Tracker`,
    description: `Retrouvez l'ensemble des véhicules du réseau ${operator.name} répertoriés sur Bus Tracker.`,
  };
}

export default async function VehicleListPage({ params }: VehicleListPageProps) {
  const operator = operators.find((o) => o.id === params.operator?.toUpperCase());
  if (typeof operator === "undefined") notFound();
  const vehicles = await fetchOperatorVehicles(operator.id);
  if (vehicles === null) notFound();
  return <VehicleList operator={operator} vehicles={vehicles} />;
}
