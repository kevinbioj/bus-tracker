import { Trip } from "~/@types";
import { TripUpdateEntity, VehicleDescriptor, VehiclePositionEntity } from "~/yabs/decode-gtfsrt";

export type Source = {
  id: string;
  staticResourceHref: string;
  tripUpdateHref?: string;
  vehiclePositionHref?: string;
  refreshCron: string;
  routePrefix?: string;
  filters?: {
    scheduled?: (trip: Trip, index: number, array: Trip[]) => boolean;
    tripUpdate?: (tripUpdate: TripUpdateEntity, index: number, array: TripUpdateEntity[]) => boolean;
    vehiclePosition?: (tripUpdate: VehiclePositionEntity, index: number, array: VehiclePositionEntity[]) => boolean;
  };
  getOperator?: (trip: Trip) => string;
  getVehicleNumber?: (descriptor: VehicleDescriptor) => string | null;
  generateShapes?: boolean;
  propagateDelays?: boolean;
};

const sources: Source[] = [
  {
    id: "TCAR",
    staticResourceHref: "http://exs.tcar.cityway.fr/gtfs.aspx?key=OPENDATA&operatorCode=ASTUCE&companyCode=ASTUCE:002",
    tripUpdateHref: "https://tsi.tcar.cityway.fr/ftp/gtfsrt/Astuce.TripUpdate.pb",
    vehiclePositionHref: "https://tsi.tcar.cityway.fr/ftp/gtfsrt/Astuce.VehiclePosition.pb",
    refreshCron: "0,15,30,45 * * * * *",
    filters: {
      scheduled: (trip) => (trip.calendar.id.startsWith("IST") && trip.route !== "06") || trip.route === "529",
    },
    getOperator: (trip: Trip) =>
      trip.route === "06" || trip.route === "529" || trip.calendar.id.startsWith("IST") ? "TNI" : "TCAR",
    generateShapes: true,
    propagateDelays: true,
  },
  {
    id: "TAE",
    staticResourceHref: "https://gtfs.tae76.fr/gtfs/feed.zip",
    tripUpdateHref: "https://gtfs.tae76.fr/gtfs-rt.bin",
    refreshCron: "5,20,35,50 * * * * *",
    generateShapes: true,
    filters: {
      scheduled: () => false,
      tripUpdate: (trip, index, array) => {
        if (typeof trip.tripUpdate.vehicle?.id !== "string") return false;
        return index === array.findIndex((item) => trip.tripUpdate.vehicle!.id === item.tripUpdate.vehicle?.id);
      },
    },
  },
  {
    id: "TNI",
    staticResourceHref: "https://www.data.gouv.fr/fr/datasets/r/e39d7fe1-8c0c-4273-9236-d7c458add7a0",
    tripUpdateHref: "https://proxy.transport.data.gouv.fr/resource/astuce-26-30-rouen-gtfs-rt-trip-update",
    vehiclePositionHref: "https://proxy.transport.data.gouv.fr/resource/astuce-26-30-rouen-gtfs-rt-vehicle-position",
    refreshCron: "10,25,40,55 * * * * *",
    generateShapes: true,
  },
  {
    id: "HANGA",
    staticResourceHref: "http://exs.tcar.cityway.fr/gtfs.aspx?key=OPENDATA&operatorCode=ASTUCE&companyCode=ASTUCE:004",
    refreshCron: "10,40 * * * * *",
    generateShapes: true,
  },
  {
    id: "LNR",
    staticResourceHref: "https://gtfs.kevinbioj.fr/nomad.zip",
    tripUpdateHref: "https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates",
    vehiclePositionHref: "https://lrn.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions",
    refreshCron: "10,40 * * * * * ",
    filters: { scheduled: () => false },
    getOperator: () => "LNR",
  },
  {
    id: "SNGO",
    staticResourceHref: "https://www.data.gouv.fr/fr/datasets/r/71bf48f1-178e-4ce3-ba9d-361cc5be76a7",
    tripUpdateHref: "https://tnvs.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates",
    vehiclePositionHref: "https://tnvs.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions",
    refreshCron: "0 * * * * *",
    routePrefix: "SNGO",
    getOperator: () => "TNVS",
  },
  {
    id: "TUD",
    staticResourceHref: "https://www.data.gouv.fr/fr/datasets/r/62248658-0eba-4f4e-b367-aaea635ecd38",
    tripUpdateHref: "https://tud.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/trip-updates",
    vehiclePositionHref: "https://tud.geo3d.hanoverdisplays.com/api-1.0/gtfs-rt/vehicle-positions",
    refreshCron: "0 * * * * *",
    routePrefix: "DEEPMOB",
    filters: {
      scheduled: (trip) => ["1", "2", "3", "97", "14"].includes(trip.route),
    },
    getOperator: () => "TUD",
  },
];

export default sources;
