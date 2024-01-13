import { Satellite as SatelliteIcon } from "tabler-icons-react";

export default function Caption() {
  return (
    <section className="max-w-screen-xl mt-6 mx-auto px-2">
      <h2 className="font-medium text-center text-2xl">Légende</h2>
      <ul>
        <li className="flex gap-2 items-center mt-1">
          <div className="h-8 shrink-0 w-8">
            <SatelliteIcon color="#00AA00" size={32} />
          </div>
          La position du véhicule est issue des données GPS reçues pour celui-ci.
        </li>
        <li className="flex gap-2 items-center mt-1">
          <div className="h-8 shrink-0 w-8">
            <SatelliteIcon color="#FF6600" size={32} />
          </div>
          La position du véhicule a été déterminée à l&apos;aide des données de passage temps-réel.
        </li>
        <li className="flex gap-2 items-center mt-1">
          <div className="h-8 shrink-0 w-8">
            <SatelliteIcon color="#DD0000" size={32} />
          </div>
          La position du véhicule a été déterminée à l&apos;aide des données de passage théoriques.
        </li>
        <li className="flex gap-2 items-center mt-1">
          <div className="shrink-0 text-right w-8">*</div>
          <p>
            Une étoile indique qu&apos;il s&apos;agit du code de la course effectuée, lorsque le numéro de parc du
            véhicule n&apos;est pas disponible.
          </p>
        </li>
      </ul>
    </section>
  );
}
