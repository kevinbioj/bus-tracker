import { useEffect } from "react";
import { useMap } from "react-leaflet";

import { VehicleData } from "~/@types";

export default function VehicleHightlight() {
  const map = useMap();
  const onHighlight = ({ detail }: { detail: VehicleData }) => {
    map.eachLayer((layer) => {
      if (!("id" in layer.options)) return;
      if (layer.options.id === detail.id) {
        const header = document.getElementById("header")!;
        header.scrollIntoView({ behavior: "smooth" });
        map.setView([detail.vehicle.position!.latitude, detail.vehicle.position!.longitude], 12);
        layer.openPopup();
      } else {
        layer.closePopup();
      }
    });
  };
  useEffect(() => {
    const element = document.getElementById("interactive-map")!;
    // @ts-expect-error blablabla
    element.addEventListener("highlightvehicle", onHighlight);
    return () =>
      // @ts-expect-error blablabla
      void element.removeEventListener("highlightvehicle", onHighlight);
  });
  return null;
}
