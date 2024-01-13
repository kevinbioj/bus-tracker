import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { Zzz } from "tabler-icons-react";
import { P, match } from "ts-pattern";

import { LightVehicleDto } from "~/@types";
import routes, { unknownRoute } from "~/data/routes";
import { BusIcon } from "~/images/transport-modes/bus-icon";
import { TramwayIcon } from "~/images/transport-modes/tramway-icon";

export function VehicleCard({ vehicle }: { vehicle: LightVehicleDto }) {
  const route = vehicle.currentRouteId ? routes.find((r) => r.id === vehicle.currentRouteId) ?? unknownRoute : null;
  return (
    <Link
      className={`flex flex-col sm:flex-row py-1 px-2 rounded-md hover:brightness-90 ${
        !route && "bg-neutral-200 text-black dark:bg-neutral-800 dark:text-white"
      }`}
      id={vehicle.number.toString()}
      href={`/vehicles/${vehicle.operator.toLowerCase()}/${vehicle.number}`}
      style={route ? { backgroundColor: route.colors.background, color: route.colors.text } : {}}
    >
      <div className="flex justify-center">
        {match(vehicle.type)
          .with("BUS", () => (
            <BusIcon
              className="fill-black dark:fill-white h-6 my-auto w-6 sm:h-8 sm:w-8"
              style={{ fill: route?.colors.text }}
            />
          ))
          .with(P.union("SUBWAY", "TRAMWAY"), () => (
            <TramwayIcon
              className="fill-black dark:fill-white h-6 my-auto w-6 sm:h-8 sm:w-8"
              style={{ fill: route?.colors.text }}
            />
          ))
          .exhaustive()}
        <div
          className="border-l-[1px] border-black dark:border-white mx-2 my-1"
          style={route ? { borderColor: route.colors.text } : {}}
        />
        <h3 className="flex font-medium gap-1.5 justify-center ml-1 text-2xl sm:my-auto sm:text-4xl sm:w-24">
          {vehicle.number}
        </h3>
      </div>
      <div
        className="border-t-[1px] sm:border-l-[1px] border-black dark:border-white mx-2"
        style={route ? { borderColor: route.colors.text } : {}}
      />
      <div className="flex gap-2 flex-1 mt-2 mx-2 sm:mt-0 sm:mx-0">
        <div className="h-12 w-12 relative">
          {route ? (
            <Image src={`/assets/routes/${route.id}.svg`} alt={route.name} fill />
          ) : (
            <Zzz className="mx-auto" width={48} height={48} />
          )}
        </div>
        <div className="flex flex-col justify-center">
          {vehicle.name && <p className="font-medium">{vehicle.name}</p>}
          {vehicle.currentRouteId !== null ? (
            <p>
              En circulation depuis <span className="font-medium">{dayjs(vehicle.sinceTime!).format("HH:mm")}</span>
            </p>
          ) : (
            <p>
              Hors-ligne
              {vehicle.sinceTime !== null && (
                <>
                  {" "}
                  depuis le <span className="font-medium">{dayjs(vehicle.sinceTime).format("DD/MM")}</span> à{" "}
                  <span className="font-medium">{dayjs(vehicle.sinceTime).format("HH:mm")}</span>
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
