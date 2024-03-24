"use client";

import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { Network } from "~/@types";
import { networks } from "~/data/dataset";

import RouteCard from "./route-card";

export default function RouteList() {
  const [activeNetworkSlug] = useLocalStorage("active-network", "reseau-astuce");
  const [network, setNetwork] = useState<Network | null>(null);
  useEffect(() => {
    setNetwork(networks.find((n) => n.slug === activeNetworkSlug) ?? null);
  }, [activeNetworkSlug]);
  return (
    <section>
      <h2 className="font-bold sr-only text-2xl text-center">Lignes du réseau</h2>
      <div className="flex flex-col gap-2 max-w-screen-xl mx-auto px-2">
        {network?.routes.filter((route) => !route.mapOnly).map((route) => <RouteCard key={route.id} route={route} />)}
      </div>
    </section>
  );
}
