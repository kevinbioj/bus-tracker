"use client";

import { isServer } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import { Network } from "~/@types";
import { networks } from "~/data/dataset";
import diviaNetwork from "~/data/networks/divia";

export function useActiveNetwork() {
  const [activeNetwork, setActiveNetwork] = useLocalStorage("active-network", null);
  const [network, setNetwork] = useState<Network | null>(null);
  useEffect(() => {
    setNetwork(networks.find((n) => n.slug === activeNetwork) ?? diviaNetwork);
  }, [activeNetwork]);
  return [isServer ? null : network, setActiveNetwork] as const;
}
