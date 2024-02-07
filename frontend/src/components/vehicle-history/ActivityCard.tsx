import dayjs from "dayjs";
import Image from "next/image";

import { VehicleActivityDto } from "~/@types";
import routes, { unknownRoute } from "~/data/routes";

export function ActivityCard({ data }: { data: VehicleActivityDto }) {
  const route = routes.find((r) => r.id === data.routeId) ?? unknownRoute;
  return (
    <article
      className="flex min-h-12 px-2 py-1 rounded-md"
      style={{ backgroundColor: route.colors.background, color: route.colors.text }}
    >
      {route.id === "?" ? (
        <p className="font-medium my-auto pt-[1px] text-2xl text-center w-12">{data.routeId}</p>
      ) : route.mapOnly ? (
        <h3 className="flex font-semibold items-center justify-center text-3xl w-12">{route.name}</h3>
      ) : (
        <Image alt={route.name} src={`/assets/routes/${route.id}.svg`} width={48} height={48} />
      )}
      <div className="border-l-[1px] mx-2" style={{ borderColor: route.colors.text }} />
      <p className="my-auto text-2xl">
        {data.endTime !== null ? (
          <>
            <span className="font-medium tabular-nums">{dayjs(data.startTime).format("HH:mm")}</span> à{" "}
            <span className="font-medium tabular-nums">{dayjs(data.endTime).format("HH:mm")}</span>
          </>
        ) : (
          <>
            depuis <span className="font-medium tabular-nums">{dayjs(data.startTime).format("HH:mm")}</span>
          </>
        )}
      </p>
    </article>
  );
}
