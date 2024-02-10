import dayjs from "dayjs";
import { Rss, X } from "tabler-icons-react";
import { P, match } from "ts-pattern";

import { StopTime } from "~/@types";

type NextStopsProps = { stopTimes: StopTime[]; width: number };

export default function NextStops({ stopTimes, width }: NextStopsProps) {
  if (stopTimes.length === 0) return null;
  return (
    <div className="-mb-2 px-2">
      <div className="font-[Rubik] max-h-24 min-w-44 mt-0.5 overflow-y-scroll w-full">
        {stopTimes.map((stopTime) => {
          return (
            <div className="grid grid-cols-[auto_1rem_2.35rem] font-medium mt-0.5" key={stopTime.id}>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap" title={stopTime.name}>
                {stopTime.name}
              </span>
              {stopTime.isRealtime ? <Rss className="ml-auto -rotate-90" color="green" size={8} /> : <div></div>}
              <div className="tabular-nums">
                {match([stopTime.timestamp, stopTime.isRealtime])
                  .with([null, P.boolean], () => (
                    <X className="mx-auto -mt-0.5" color="red" size={18} strokeWidth={3} />
                  ))
                  .with([P.number, false], ([time]) => <span>{dayjs.unix(time).format("HH:mm")}</span>)
                  .with([P.number, true], ([time]) => (
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
