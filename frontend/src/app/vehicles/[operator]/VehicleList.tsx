"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Filter } from "tabler-icons-react";
import { match } from "ts-pattern";

import { LightVehicleDto, Operator } from "~/@types";
import { VehicleCard } from "~/components/vehicle-history/VehicleCard";

type VehicleList = { operator: Operator; vehicles: LightVehicleDto[] };

export default function VehicleList({ operator, vehicles }: VehicleList) {
  const [filter, setFilter] = useState("");

  const filtered = useMemo(() => {
    if (filter === "") return vehicles;
    const pattern = new RegExp(filter.replaceAll("_", "\\d"));
    return vehicles.filter((v) => pattern.test(v.number.toString()) || pattern.test(v.name ?? ""));
  }, [filter, vehicles]);

  const activeCount = useMemo(() => filtered.filter((v) => v.currentRouteId !== null).length, [filtered]);

  return (
    <main className="max-w-screen-lg mt-3 mx-auto px-2 scroll-my-72 scroll-smooth">
      <section className="mb-2">
        <Image
          className="h-16 mx-auto my-2 w-auto"
          alt={operator.name}
          src={operator.logo.href}
          width={operator.logo.size[0]}
          height={operator.logo.size[1]}
        />
        <div className="flex flex-col sm:flex-row gap-1">
          <div className="flex flex-1 items-start gap-4">
            <Link
              className="bg-brand rounded-md text-white hover:brightness-90"
              href="/vehicles"
              title="Revenir à la liste des opérateurs"
            >
              <ArrowLeft className="h-8 w-8" />
            </Link>
            <div className="flex flex-col">
              <h3 className="font-medium text-2xl">Liste des véhicules</h3>
              {filtered.length > 1 && (
                <p className="text-muted-foreground">
                  {match(activeCount)
                    .with(0, () => `Aucun véhicule sur ${filtered.length} en circulation.`)
                    .with(1, () => `1/${filtered.length} véhicule en circulation.`)
                    .otherwise(() => `${activeCount}/${filtered.length} véhicules en circulation.`)}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-start justify-end gap-2">
            <Filter width={32} height={32} />
            <input
              className="bg-neutral-100 border-[1px] border-neutral-700 px-1 py-0.5 rounded-md w-full dark:bg-neutral-700 dark:border-neutral-300"
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Filter les véhicules..."
              type="text"
              value={filter}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-2 mt-3">
        {filtered.length > 0 ? (
          filtered.map((vehicle) => <VehicleCard key={vehicle.number} vehicle={vehicle} />)
        ) : (
          <p className="text-center text-muted-foreground">Aucun véhicule à afficher.</p>
        )}
      </section>
    </main>
  );
}
