import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import logoSmall from "~/images/icon.png";
import Header from "~/layout/header";
import "~/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bus-tracker.fr"),
  title: "Bus Tracker",
  description: "Bus Tracker est une application de visualisation des véhicules de transport en commun.",
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
    description: "Bus Tracker est une application de visualisation des véhicules de transport en commun.",
    locale: "fr-FR",
    countryName: "France",
    images: [logoSmall.src],
    url: "https://www.bus-tracker.fr",
  },
};

type LayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fr">
      <body className="bg-neutral-100 text-black dark:bg-neutral-900 dark:text-white font-[Achemine] mb-12">
        <NextTopLoader color="#FFFFFF" showSpinner={false} />
        <Header />
        {children}
      </body>
    </html>
  );
}
