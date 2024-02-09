import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle } from "tabler-icons-react";

import operators from "~/data/operators";

export const metadata: Metadata = {
  title: "Historique – Bus Tracker",
  description: "Historique des services effectués par tous les véhicules géolocalisés.",
};

export default function OperatorsList() {
  return (
    <main className="max-w-screen-lg mt-4 mx-auto px-2">
      <h2 className="font-medium text-center text-2xl">Historique des véhicules</h2>
      <p className="text-center text-muted-foreground">Sélectionnez un opérateur de transport ci-dessous.</p>
      <section className="grid grid-cols-2 gap-2 mt-3 sm:grid-cols-4">
        {operators
          .filter((operator) => operator.hasHistory)
          .map((operator) => (
            <Link
              className="bg-neutral-200 h-20 relative rounded-md dark:bg-neutral-800 hover:brightness-90"
              href={`/vehicles/${operator.id.toLowerCase()}`}
              key={operator.id}
            >
              <Image className="object-contain p-2 w-full" src={operator.logo.href} alt={operator.name} fill />
            </Link>
          ))}
      </section>
    </main>
  );
}
