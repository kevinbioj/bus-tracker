import routes from "~/data/routes";

import RouteCard from "./route-card";

export default function RouteList() {
  return (
    <section>
      <h2 className="font-medium sr-only text-2xl text-center">Lignes du réseau</h2>
      <div className="flex flex-col gap-2 max-w-screen-xl mx-auto px-2">
        {routes
          .filter((route) => !route.mapOnly)
          .map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
      </div>
    </section>
  );
}
