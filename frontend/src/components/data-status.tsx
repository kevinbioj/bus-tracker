"use client";

import dayjs from "dayjs";
import { Refresh } from "tabler-icons-react";
import { match } from "ts-pattern";

import { REFRESH_INTERVAL, useVehiclesQuery } from "~/hooks/useVehicles";

export default function DataStatus() {
  const query = useVehiclesQuery();
  const canForceUpdate =
    !query.isLoading && (query.isError || dayjs(query.dataUpdatedAt).diff(dayjs(), "seconds") > REFRESH_INTERVAL);
  return (
    <div className="flex items-center justify-center gap-2 mb-1 mt-1.5">
      <p>
        {match(query.status)
          .with("error", () => <>Les dernières données n&apos;ont pas pu être obtenues.</>)
          .with("pending", () => <>Chargement des données en cours...</>)
          .with("success", () => (
            <>
              Données obtenues à <span className="font-medium">{dayjs(query.dataUpdatedAt).format("HH:mm:ss")}</span>
            </>
          ))
          .exhaustive()}
      </p>
      <button
        className="bg-brand p-1 rounded-md disabled:brightness-50 disabled:cursor-not-allowed"
        disabled={!canForceUpdate}
        onClick={() => query.refetch()}
        title={
          canForceUpdate
            ? "Forcer la mise à jour des données."
            : "Vous ne pouvez pas forcer la mise à jour des données."
        }
      >
        <Refresh color="white" size={19} />
      </button>
    </div>
  );
}
