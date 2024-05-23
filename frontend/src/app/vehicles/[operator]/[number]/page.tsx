import dayjs from "dayjs";
import dayjsFrench from "dayjs/locale/fr";
import dayjsCustomParseFormat from "dayjs/plugin/customParseFormat";
import Image from "next/image";
import Link from "next/link";
import { RedirectType, notFound, redirect } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight } from "tabler-icons-react";
import { P, match } from "ts-pattern";

import { ActivityCard } from "~/components/vehicle-history/ActivityCard";
import { fetchOperatorVehicle } from "~/data/fetch";
import operators from "~/data/operators";
import tcInfos from "~/images/tc-infos.png";
import { BusIcon } from "~/images/transport-modes/bus-icon";
import { TramwayIcon } from "~/images/transport-modes/tramway-icon";
import { groupBy } from "~/util/group-by";

dayjs.extend(dayjsCustomParseFormat);
dayjs.locale(dayjsFrench);

type VehicleEntryPageProps = { params: { operator?: string; number: string }; searchParams: { period?: string } };

export function generateMetadata({ params }: VehicleEntryPageProps) {
  const operator = operators.find((o) => o.id === params.operator?.toUpperCase());
  if (typeof operator === "undefined") return {};
  return {
    title: `${operator.name} n°${params.number} | Bus Tracker`,
    description: `Retrouvez les détails du véhicule ${operator.name} n°${params.number} ainsi que ses activités.`,
  };
}

export default async function VehicleEntryPage({ params, searchParams }: VehicleEntryPageProps) {
  const operator = operators.find((o) => o.id === params.operator?.toUpperCase());
  if (typeof operator === "undefined") notFound();

  const period = searchParams.period ? dayjs(searchParams.period, "YYYY-MM") : dayjs();
  if (!period.isValid()) redirect(`/vehicles/${operator.id}/${params.number}`, RedirectType.replace);
  const periodAsString = period.format("YYYY-MM");

  const vehicle = await fetchOperatorVehicle(operator.id, params.number, periodAsString);
  if (vehicle === null) notFound();

  if (vehicle.activeOn.length > 0 && !vehicle.activeOn.includes(periodAsString))
    redirect(`?period=${vehicle.activeOn.at(-1)}`, RedirectType.replace);
  const currentMonthIdx = vehicle.activeOn.indexOf(periodAsString);

  const activitiesByDay = groupBy(vehicle.activities, (data) => dayjs(data.startTime).format("DD/MM/YYYY"));

  return (
    <main className="max-w-screen-lg mt-3 mx-auto px-2">
      <section className="mb-2">
        <Image
          className="h-16 mx-auto my-3 w-auto"
          alt={operator.name}
          src={operator.logo.href}
          width={operator.logo.size[0]}
          height={operator.logo.size[1]}
        />
        <div className="flex items-start gap-4">
          <Link
            className="bg-brand rounded-md text-white hover:brightness-90"
            href={`/vehicles/${operator.id.toLowerCase()}#${vehicle.number}`}
          >
            <ArrowLeft className="h-8 w-8" />
          </Link>
          <div className="flex items-start justify-between w-full">
            <h3 className="flex flex-col">
              <div className="flex gap-2">
                {match(vehicle.type)
                  .with("BUS", () => <BusIcon className="fill-black h-6 w-6 dark:fill-white" />)
                  .with(P.union("SUBWAY", "TRAMWAY"), () => (
                    <TramwayIcon className="fill-black h-6 w-6 dark:fill-white" />
                  ))
                  .exhaustive()}
                <span className="font-bold text-2xl">Véhicule n°{vehicle.number}</span>
              </div>
              {vehicle.name && <span className="text-xl">{vehicle.name}</span>}
            </h3>
            {vehicle.tcId !== null && (
              <Link href={`https://tc-infos.fr/id/${vehicle.tcId}`} target="_blank">
                <Image
                  className="rounded-md hover:brightness-90"
                  alt="Voir sur TC-Infos"
                  src={tcInfos}
                  height={40}
                  width={40}
                />
              </Link>
            )}
          </div>
        </div>
      </section>
      {activitiesByDay.size > 0 ? (
        <>
          <section>
            <div className="bg-brand grid grid-cols-[3rem_1fr_3rem] px-3 py-2 rounded-md">
              {currentMonthIdx > 0 ? (
                <Link
                  className="hover:brightness-75 hover:transition"
                  href={`?period=${vehicle.activeOn.at(currentMonthIdx - 1)}`}
                >
                  <ChevronLeft className="mx-auto" color="white" width={32} height={32} strokeWidth={2.5} />
                </Link>
              ) : (
                <div></div>
              )}
              <p className="font-bold my-auto select-none text-2xl text-center text-white">
                {period.format("MMMM YYYY")}
              </p>
              {currentMonthIdx < vehicle.activeOn.length - 1 ? (
                <Link
                  className="hover:brightness-75 hover:transition"
                  href={`?period=${vehicle.activeOn.at(currentMonthIdx + 1)}`}
                >
                  <ChevronRight className="mx-auto" color="white" width={32} height={32} strokeWidth={2.5} />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </section>
          <section className="flex flex-col gap-3 mt-5 w-full">
            {[...activitiesByDay.entries()]
              .sort(([a], [b]) => dayjs(b, "DD/MM/YYYY").unix() - dayjs(a, "DD/MM/YYYY").unix())
              .map(([date, activities]) => (
                <div className="flex flex-col gap-2 items-center sm:flex-row sm:items-start" key={date}>
                  <h4 className="text-center text-xl sm:text-right sm:w-72">
                    {dayjs(date, "DD/MM/YYYY").format("dddd DD MMMM")}
                  </h4>
                  <div className="flex flex-col gap-2 w-full">
                    {activities.map((activity) => (
                      <ActivityCard data={activity} key={activity.startTime} />
                    ))}
                  </div>
                </div>
              ))}
          </section>
        </>
      ) : (
        <p className="mt-3 text-center text-muted-foreground text-xl">
          Ce véhicule n&apos;a pas encore été observé en circulation.
        </p>
      )}
    </main>
  );
}
