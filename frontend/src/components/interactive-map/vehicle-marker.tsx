"use client";

import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import { LatLngExpression } from "leaflet";
import Image from "next/image";
import Link from "next/link";
import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Popup } from "react-leaflet";
import { Satellite as SatelliteIcon } from "tabler-icons-react";
import { match } from "ts-pattern";
import { useLocalStorage } from "usehooks-ts";

import { brandColor } from "~/../constants";
import { VehicleData } from "~/@types";
import { Girouette } from "~/components/interactive-map/girouette";
import NextStops from "~/components/interactive-map/next-stops";
import { routes } from "~/data/dataset";
import operators from "~/data/operators";
import { useViewport } from "~/hooks/useViewport";
import { BusIcon } from "~/images/transport-modes/bus-icon";
import ReactMoveableCircleMarker, { MoveableCircleMarker } from "~/util/moveable-circler-marker";

dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
  relativeTime: {
    future: "dans %s",
    past: "il y a %s",
    s: "%d secondes",
    m: "une minute",
    mm: "%d minutes",
    h: "une heure",
  },
});

const getNoise = () => (Math.random() - 0.5) * 0.000045;

const isTouchScreen = window.matchMedia("(pointer: coarse)").matches;

type VehicleMarkerProps = {
  data: VehicleData;
  activeMarker: string | undefined;
  setActiveMarker: (id?: string) => any;
};

export default function VehicleMarker({ data, activeMarker, setActiveMarker }: VehicleMarkerProps) {
  const route = routes.find((route) => route.routeIds?.includes(data.trip.route) || route.id === data.trip.route);
  const destination = route?.destinations.find((destination) => destination.id.includes(data.trip.headsign ?? ""));

  const [showScheduledTrips] = useLocalStorage("show-scheduled-trips", true);
  const [showNextStops] = useLocalStorage("show-next-stops", true);
  const [useAbsoluteTime] = useLocalStorage("use-absolute-time", false);
  const [devMode] = useLocalStorage("dev-mode", false);
  const [positionTime, setPositionTime] = useState("");

  const { width } = useViewport();

  const updatePositionTime = useCallback(() => {
    const timestamp = dayjs.unix(data.vehicle.position.timestamp);
    if (!useAbsoluteTime && dayjs().diff(timestamp, "hours") < 1) return timestamp.fromNow();
    return dayjs().diff(timestamp, "day") >= 1
      ? `le ${timestamp.format("DD/MM à HH:mm:ss")}`
      : `à ${timestamp.format("HH:mm:ss")}`;
  }, [data, useAbsoluteTime]);

  const position = useMemo(() => {
    const applyNoise = data.trip.status !== "ONGOING";
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

  const adjustPan = useCallback((ref: RefObject<MoveableCircleMarker>) => {
    if (ref.current === null) return;
    const { _popup } = ref.current as unknown as { _popup: { options: { autoPan: boolean }; _adjustPan: () => void } };
    _popup.options.autoPan = true;
    _popup._adjustPan();
    _popup.options.autoPan = false;
  }, []);

  useEffect(() => {
    setPositionTime(updatePositionTime());
    const interval = setInterval(() => setPositionTime(updatePositionTime()), 3000);
    return () => clearInterval(interval);
  }, [data, useAbsoluteTime, updatePositionTime]);

  if (!showScheduledTrips && data.vehicle.position.type === "SCHEDULED") return null;

  const operator = operators.find((operator) => operator.id === data.source)!;

  const girouetteWidth = Math.min(width - 50, destination?.girouette?.width ?? 384);
  const ledColor = data.vehicle.ledColor ?? destination?.girouette?.ledColor ?? "YELLOW";
  const tooltipId = data.id;

  return (
    <ReactMoveableCircleMarker
      color={route?.colors ? route.colors.text : "#FFFFFF"}
      duration={1000}
      bubblingMouseEvents={false}
      eventHandlers={{
        click: (e) => {
          const target = e.target as MoveableCircleMarker;
          setActiveMarker(data.id);
          if (!target.isPopupOpen()) target.openPopup();
          if (!isTouchScreen) {
            adjustPan(ref);
          }
        },
        moveend: (e) => {
          const target = e.target as MoveableCircleMarker;
          if (target.isPopupOpen()) {
            adjustPan(ref);
          }
        },
        mouseover: (e) => {
          if (isTouchScreen) return;
          const target = e.target as MoveableCircleMarker;
          if (activeMarker !== data.id) {
            target.openPopup();
          }
        },
        mouseout: (e) => {
          if (isTouchScreen) return;
          const target = e.target as MoveableCircleMarker;
          if (activeMarker !== data.id) {
            target.closePopup();
          }
        },
      }}
      fillOpacity={1}
      fillColor={route?.colors ? route.colors.background : brandColor.DEFAULT}
      position={position}
      radius={8}
      ref={ref}
    >
      <Popup autoClose autoPan={false} closeButton={false} closeOnClick={false}>
        <div style={{ width: `${girouetteWidth + 1}px` }}>
          <div className="border-[1px] border-neutral-800">
            {destination?.girouette ? (
              <Girouette {...destination.girouette} ledColor={ledColor} width={girouetteWidth} />
            ) : (
              <Girouette
                ledColor={ledColor}
                routeNumber={{
                  backgroundColor: route?.colors.background,
                  textColor: route?.colors.text,
                  font: "1508SUPX",
                  text: route?.name ?? "?",
                }}
                pages={
                  route
                    ? destination
                      ? destination.alternate
                        ? [{ font: "1407SUPX", text: destination.alternate }]
                        : [
                            { font: "1407SUPX", text: destination.name },
                            ...(destination.city ? ([{ font: "1407SUPX", text: destination.city }] as const) : []),
                          ]
                      : [{ font: "1407SUPX", text: data.trip.headsign ?? "Destination inconnue" }]
                    : [
                        [
                          {
                            text: data.trip.headsign ?? "Destination inconnue",
                          },
                          { text: `LIGNE ${data.trip.route}` },
                        ],
                        [
                          {
                            text: data.trip.headsign ?? "Destination inconnue",
                          },
                          { text: `COURSE ${data.trip.id}` },
                        ],
                      ]
                }
                width={girouetteWidth}
              />
            )}
          </div>
          <div className="flex flex-col font-[Achemine] w-full">
            <div className="flex items-center justify-between gap-2 px-2 py-[1px]">
              <Image
                className="h-4 w-auto"
                src={operator.logo.href}
                alt={operator.name}
                width={operator.logo.size[0]}
                height={operator.logo.size[1]}
              />
              <span className="text-center">
                {data.vehicle.id ? `n°${data.vehicle.id}` : "N/A"} {positionTime}
                {devMode && ` / ${data.trip.id}`}
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
            {data.vehicle.id && data.activityRegistered && (
              <Link
                className="bg-brand flex items-center justify-center gap-2 py-0.5 hover:bg-brand-hover"
                href={`/vehicles/${data.source.toLowerCase()}/${data.vehicle.id}`}
                target="_blank"
              >
                <BusIcon className="fill-white h-4 w-4" />
                <span className="font-[Achemine] font-bold flex text-sm text-white">Détails du véhicule</span>
              </Link>
            )}
            {showNextStops && <NextStops stopTimes={data.trip.stopTimes} tooltipId={tooltipId} />}
          </div>
        </div>
      </Popup>
    </ReactMoveableCircleMarker>
  );
}
