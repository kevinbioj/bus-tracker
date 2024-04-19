"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import PlausibleProvider from "next-plausible";
import { ReactNode, useState } from "react";

type ProvidersProps = { children: ReactNode };

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <PlausibleProvider
      customDomain="https://plausible.bus-tracker.fr"
      domain="bus-tracker.fr"
      enabled
      selfHosted
      trackOutboundLinks
    >
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      </QueryClientProvider>
    </PlausibleProvider>
  );
}
