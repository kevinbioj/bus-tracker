"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PlausibleProvider from "next-plausible";
import { ReactNode, useState } from "react";

type ProvidersProps = { children: ReactNode };

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <PlausibleProvider
      customDomain="https://plausible.bus-tracker.fr"
      domain="angers.bus-tracker.fr"
      enabled
      selfHosted
      trackOutboundLinks
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PlausibleProvider>
  );
}
