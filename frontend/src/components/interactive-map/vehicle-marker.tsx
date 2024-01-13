"use client";

import dayjs from "dayjs";
import { LatLngExpression } from "leaflet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Popup } from "react-leaflet";
import { Satellite as SatelliteIcon } from "tabler-icons-react";
import { match } from "ts-pattern";
import { useLocalStorage } from "usehooks-ts";

import { brandColor } from "~/../constants";
import { VehicleData } from "~/@types";
import { Girouette } from "~/components/interactive-map/girouette";
import NextStops from "~/components/interactive-map/next-stops";
import operators from "~/data/operators";
import routes from "~/data/routes";
import { useViewport } from "~/hooks/useViewport";
import { BusIcon } from "~/images/transport-modes/bus-icon";
import ReactMoveableCircleMarker, { MoveableCircleMarker } from "~/util/moveable-circler-marker";

const getNoise = () => (Math.random() - 0.5) * 0.000045;

type VehicleMarkerProps = { data: VehicleData };

export default function VehicleMarker({ data }: VehicleMarkerProps) {
  const route = routes.find((route) => route.id === data.trip.route);
  const destination = route?.destinations.find((destination) => destination.id.includes(data.trip.headsign ?? ""));

  const [showScheduledTrips] = useLocalStorage("show-scheduled-trips", true);
  const [showNextStops] = useLocalStorage("show-next-stops", true);

  const { width } = useViewport();

  const position = useMemo(() => {
    const applyNoise = data.trip.stopTimes.length === 0 || data.trip.stopTimes[0].sequence === 1 ? false : true;
    const { latitude, longitude, type } = data.vehicle.position;
    if (type === "GPS") return [latitude, longitude];
    return applyNoise ? [latitude, longitude] : [latitude + getNoise(), longitude + getNoise()];
  }, [data]) satisfies LatLngExpression;

  const ref = useRef<MoveableCircleMarker>(null);
  useEffect(() => {
    if (ref.current === null) return;
    // @ts-expect-error declare global etc.
    ref.current.options.id = data.id;
    ref.current.setStyle({
      color: route?.colors.text ?? "#FFFFFF",
      fillColor: route?.colors.background ?? brandColor.DEFAULT,
    });
  }, [data, ref, route]);

  const [isHovered, setHovered] = useState(false);

  if (!showScheduledTrips && data.vehicle.position.type === "SCHEDULED") return null;

  const timestamp = dayjs.unix(data.vehicle.position.timestamp);
  const operator = operators.find((operator) => operator.id === data.source)!;

  const girouetteWidth = Math.min(width - 50, 384);

  return (
    <ReactMoveableCircleMarker
      color={route?.colors ? route.colors.text : "#FFFFFF"}
      duration={1000}
      bubblingMouseEvents={false}
      eventHandlers={{
        click: () => setHovered(false),
        mouseover: (e) => {
          const target = e.target as MoveableCircleMarker;
          if (target.isPopupOpen()) return;
          setHovered(true);
          target.openPopup();
        },
        mouseout: (e) => {
          const target = e.target as MoveableCircleMarker;
          if (!isHovered) return;
          setTimeout(() => {
            setHovered(false);
            if (target.isPopupOpen()) {
              target.closePopup();
            }
          });
        },
      }}
      fillOpacity={1}
      fillColor={route?.colors ? route.colors.background : brandColor.DEFAULT}
      position={position}
      radius={8}
      ref={ref}
    >
      <Popup autoClose closeButton={false}>
        <div style={{ width: `${girouetteWidth + 1}px` }}>
          <div className="border-[1px] border-neutral-800">
            {destination?.girouette ? (
              <Girouette {...destination.girouette} width={girouetteWidth} />
            ) : (
              <Girouette
                routeNumber={{
                  backgroundColor: route?.colors.background,
                  textColor: route?.colors.text,
                  font: "1508SUPX",
                  text: route?.name ?? data.trip.route,
                }}
                pages={
                  destination
                    ? destination.alternate
                      ? [{ font: "1407SUPX", text: destination.alternate }]
                      : [
                          { font: "1407SUPX", text: destination.name },
                          ...(destination.city ? ([{ font: "1407SUPX", text: destination.city }] as const) : []),
                        ]
                    : [
                        {
                          text: [data.trip.headsign ?? "Destination inconnue", `COURSE:${data.id}`],
                        },
                      ]
                }
                width={girouetteWidth}
              />
            )}
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between gap-2 px-2 py-[1px]">
              <Image
                className="h-4 w-auto"
                src={operator.logo.href}
                alt={operator.name}
                width={operator.logo.size[0]}
                height={operator.logo.size[1]}
              />
              <span className="text-center">
                {data.vehicle.id ? `n°${data.vehicle.id}` : "N/A"} à{" "}
                {dayjs().diff(timestamp, "day") >= 1
                  ? timestamp.format("DD/MM à HH:mm:ss")
                  : timestamp.format("HH:mm:ss")}
              </span>
              <SatelliteIcon
                className="h-5 w-5"
                color={match(data.vehicle.position.type)
                  .with("GPS", () => "#00AA00")
                  .with("REALTIME", () => "#FF6600")
                  .with("SCHEDULED", () => "#DD0000")
                  .exhaustive()}
                size={20}
              />
            </div>
            {data.vehicle.id && (
              <Link
                className="bg-brand flex justify-center gap-2 pt-1 hover:bg-brand-hover"
                href={`/vehicles/${data.source.toLowerCase()}/${data.vehicle.id}`}
                target="_blank"
              >
                <BusIcon className="fill-white h-4 w-4" />
                <span className="font-[Rubik] font-medium text-sm text-white">Voir ce véhicule</span>
              </Link>
            )}
            {showNextStops && <NextStops stopTimes={data.trip.stopTimes} width={girouetteWidth + 1} />}
          </div>
        </div>
      </Popup>
    </ReactMoveableCircleMarker>
  );
}
