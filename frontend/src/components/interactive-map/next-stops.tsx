import dayjs from "dayjs";
import dayjsDurationPlugin, { Duration } from "dayjs/plugin/duration";
import dayjsRelativeTimePlugin from "dayjs/plugin/relativeTime";
import { Rss, X } from "tabler-icons-react";
import { P, match } from "ts-pattern";

import { StopTime } from "~/@types";

dayjs.extend(dayjsDurationPlugin);
dayjs.extend(dayjsRelativeTimePlugin);

type NextStopsProps = { stopTimes: StopTime[] };

const humanizeDuration = (duration: Duration) =>
  duration.asSeconds() < 60
    ? `${duration.asSeconds()} seconde${duration.asSeconds() > 1 ? "s" : ""}`
    : `${Math.floor(duration.asMinutes())} minute${Math.floor(duration.asMinutes()) > 1 ? "s" : ""}`;

export default function NextStops({ stopTimes }: NextStopsProps) {
  if (stopTimes.length === 0) return null;
  return (
    <div className="-mb-2 px-2">
      <div className="font-[Achemine] max-h-24 min-w-44 mt-0.5 overflow-y-scroll w-full">
        {stopTimes.map((stopTime) => {
          return (
            <div className="grid grid-cols-[auto_1rem_2.1rem] font-bold mt-0.5" key={stopTime.id}>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap" title={stopTime.name}>
                {stopTime.name}
              </span>
              {stopTime.timestamp !== null && stopTime.isRealtime ? (
                <Rss className="ml-auto -rotate-90 stroke-green-700 dark:stroke-green-500" size={8} />
              ) : (
                <div></div>
              )}
              {match([stopTime.timestamp, stopTime.isRealtime])
                .with([null, P.boolean], () => (
                  <span title="Arrêt non desservi">
                    <X className="mx-auto -mt-0.5 stroke-red-500" size={18} strokeWidth={3} />
                  </span>
                ))
                .with([P.number, false], ([time]) => (
                  <span className="tabular-nums" title="Horaire théorique">
                    {dayjs.unix(time).format("HH:mm")}
                  </span>
                ))
                .with([P.number, true], ([time]) => {
                  return (
                    <span
                      className="tabular-nums text-green-700 dark:text-green-500 hover:cursor-default"
                      title={
                        stopTime.delta !== null
                          ? stopTime.delta === 0
                            ? "À l'heure"
                            : stopTime.delta < 0
                              ? `Avance de ${humanizeDuration(dayjs.duration(Math.abs(stopTime.delta), "seconds"))}`
                              : `Retard de ${humanizeDuration(dayjs.duration(Math.abs(stopTime.delta), "seconds"))}`
                          : "Horaire temps-réel"
                      }
                    >
                      {dayjs.unix(time).format("HH:mm")}
                    </span>
                  );
                })
                .exhaustive()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
