import { Metadata, Viewport } from "next";
import NextTopLoader from "nextjs-toploader";

import { brandColor } from "~/../constants";
import Providers from "~/app/providers";
import logoSmall from "~/images/icon.png";
import Header from "~/layout/header";
import "~/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bus-tracker.xyz"),
  title: "Bus Tracker",
  description: "Application de suivi des véhicules de transports en commun.",
  icons: { apple: logoSmall.src, icon: logoSmall.src },
  keywords: ["bus", "tracker"],
  robots: "index, follow",
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Bus Tracker",
    capable: true,
    statusBarStyle: "default",
    startupImage: [{ url: logoSmall.src }],
  },
  openGraph: {
    type: "website",
    siteName: "Bus Tracker",
    description: "Application de suivi des véhicules de transports en commun.",
    locale: "fr-FR",
    countryName: "France",
    images: [logoSmall.src],
    url: "https://www.bus-tracker.xyz",
  },
};

type LayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr">
      <body className="bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white font-[Achemine] mb-12">
        <NextTopLoader color="#FFFFFF" showSpinner={false} />
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
