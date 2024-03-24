"use client";

import { Settings as SettingsIcon } from "tabler-icons-react";

import GeolocationPreference from "~/components/preferences/geolocation";
import NextStopsPreference from "~/components/preferences/next-stops";
import ScheduledTripsPreference from "~/components/preferences/scheduled-trips";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "~/components/ui/dialog";

export default function Preferences() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button aria-label="Ouvrir les préférences" variant="inherit">
          <SettingsIcon size={32} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Paramètres de la carte</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <GeolocationPreference />
          <ScheduledTripsPreference />
          <NextStopsPreference />
        </div>
      </DialogContent>
    </Dialog>
  );
}
