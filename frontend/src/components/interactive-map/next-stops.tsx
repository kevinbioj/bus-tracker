import dayjs from "dayjs";
import { Rss, X } from "tabler-icons-react";
import { P, match } from "ts-pattern";

import { StopTime } from "~/@types";

type NextStopsProps = { stopTimes: StopTime[]; width: number };

export default function NextStops({ stopTimes, width }: NextStopsProps) {
  if (stopTimes.length === 0) return null;
  return (
    <div className="mt-0.5 -mb-1.5 px-2">
      <div className="font-[Rubik] min-w-44 mt-0.5 w-full">
        {stopTimes.map((stopTime) => {
          const isRealtime = stopTime.delta !== null;
          return (
            <div className="flex font-medium justify-between mt-0.5" key={stopTime.id}>
              <div className="flex-1 flex justify-between">
                <span
                  className="mr-2 overflow-hidden text-ellipsis whitespace-nowrap"
                  style={{ width: `${width - 16 - 38 - 8 - (isRealtime ? 8 : 0)}px` }}
                >
                  {stopTime.name}
                </span>
                {isRealtime && <Rss className="-rotate-90" color="green" size={8} />}
              </div>
              <div className="tabular-nums text-center w-[38px]">
                {match([stopTime.timestamp, stopTime.delta])
                  .with([null, P.any], () => <X className="mx-auto -mt-0.5" color="red" size={18} strokeWidth={3} />)
                  .with([P.number, null], ([time]) => <span>{dayjs.unix(time).format("HH:mm")}</span>)
                  .with([P.number, P.number], ([time]) => (
                    <span className="text-green-700">{dayjs.unix(time).format("HH:mm")}</span>
                  ))
                  .exhaustive()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
