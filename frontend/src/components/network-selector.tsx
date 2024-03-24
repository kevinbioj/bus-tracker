"use client";

import { useState } from "react";
import { ArrowRight, Route2 as Route2Icon } from "tabler-icons-react";
import { useLocalStorage } from "usehooks-ts";

import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";
import { networks } from "~/data/dataset";

export default function NetworkSelector() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [_, setActiveNetwork] = useLocalStorage<string | null>("active-network", null);
  const switchNetwork = (slug: string) => {
    setActiveNetwork(slug);
    setDialogOpen(false);
  };
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button aria-label="Sélectionner un réseau" variant="brand">
          <Route2Icon color="white" size={32} />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-[100dvh]">
        <DialogHeader>
          <DialogTitle>Sélection du réseau</DialogTitle>
        </DialogHeader>
        <ul className="flex flex-col gap-1">
          {networks.map((network) => (
            <li
              className="flex justify-between px-2 py-2 rounded-md hover:cursor-pointer"
              onClick={() => switchNetwork(network.slug)}
              key={network.slug}
              style={{ backgroundColor: network.color, color: network.textColor }}
            >
              <span className="font-bold">{network.name}</span>
              <ArrowRight className="my-auto" size={20} />
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
