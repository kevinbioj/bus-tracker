import { loadSync } from 'protobufjs';

import { GtfsRtTripUpdate, GtfsRtVehiclePosition } from '~/yabs/fetcher/gtfs/@types';

const proto = loadSync('gtfsrt.proto').root.lookupType('transit_realtime.FeedMessage');

export function decodeTripUpdate(input: Buffer): GtfsRtTripUpdate {
  const data = proto.decode(input).toJSON() as GtfsRtTripUpdate;
  return {
    ...data,
    entity: data.entity?.filter((entity) => typeof entity.tripUpdate !== 'undefined') ?? [],
  };
}

export function decodeVehiclePosition(input: Buffer): GtfsRtVehiclePosition {
  const data = proto.decode(input).toJSON() as GtfsRtVehiclePosition;
  return {
    ...data,
    entity: data.entity?.filter((entity) => typeof entity.vehicle !== 'undefined') ?? [],
  };
}
