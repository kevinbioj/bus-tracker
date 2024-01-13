import Image from "next/image";

import { Route } from "~/@types";

type RouteLogoProps = { route: Route };

export default function RouteLogo({ route }: RouteLogoProps) {
  return (
    <h3 className="h-12 w-12 sm:h-16 sm:w-16 relative">
      <Image src={`/assets/routes/${route.id}.svg`} alt={route.name} fill />
    </h3>
  );
}
