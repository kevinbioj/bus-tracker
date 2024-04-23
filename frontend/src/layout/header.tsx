"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { Map2, Table } from "tabler-icons-react";
import { useLocalStorage } from "usehooks-ts";

import NetworkSelector from "~/components/network-selector";
import Preferences from "~/components/preferences/preferences";
import { useActiveNetwork } from "~/hooks/useActiveNetwork";

export default function Header() {
  const [network] = useActiveNetwork();
  const pathname = usePathname();
  const [alertSeen, setAlertSeen] = useLocalStorage("alertSeen", typeof window === "undefined" ? true : false, {
    initializeWithValue: false,
  });
  const [alertBlink, setAlertBlink] = useState(true);
  useEffect(() => {
    const stopBlink = () => setAlertBlink(false);
    const timeout = setTimeout(stopBlink, 5000);
    return () => clearTimeout(timeout);
  }, [alertBlink]);
  useEffect(() => {
    const themeColor = document.head.querySelector('meta[name="theme-color"]');
    if (themeColor !== null) {
      themeColor.setAttribute("content", network?.color ?? "#FFFFFF");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      meta.setAttribute("content", network?.color ?? "#FFFFFF");
      document.head.appendChild(meta);
    }
  }, [network]);
  return (
    <>
      <header
        className="grid grid-cols-[4rem_auto_4rem] py-1 transition-colors"
        id="header"
        style={{ backgroundColor: network?.color ?? "#ffffff", color: network?.textColor ?? "#000000" }}
      >
        <NetworkSelector />
        <h1 className="col-start-2 font-[Achemine] font-bold select-none text-3xl text-center hover:cursor-default">
          Bus Tracker
        </h1>
        <Preferences />
      </header>
      {!alertSeen && (
        <div
          className="transition-colors py-0.5 text-center"
          style={{ backgroundColor: network?.color ?? "#ffffff", color: network?.textColor ?? "#000000" }}
        >
          <span className={clsx(alertBlink && "animate-pulse duration-700")}>
            <span className="font-bold">IMPORTANT :</span> Changement d&apos;adresse le 22 mai 2024 &gt;{" "}
            <button
              onClick={() => {
                setAlertSeen(true);
                alert(
                  "bus-tracker.xyz devient définitivement bus-tracker.fr à partir du 22 mai 2024\n\nEn Normandie sur normandie.bus-tracker.fr\nÀ Dijon sur dijon.bus-tracker.fr\n\nBien que vous ayez été automatiquement redirigé•e vers la nouvelle adresse, pensez à mettre vos favoris à jour 😉",
                );
              }}
            >
              + d&apos;infos
            </button>
          </span>
        </div>
      )}
      <nav
        className="transition-colors"
        style={{ backgroundColor: network?.color ?? "#ffffff", color: network?.textColor ?? "#000000" }}
      >
        <div className="border-t-[1px] flex justify-center mx-auto sm:border-x-[1px] sm:max-w-md sm:rounded-t-md">
          <Link
            className={clsx(
              "border-white flex gap-1 justify-center p-1 w-full hover:brightness-90 sm:rounded-tl-md",
              pathname.startsWith("/map") && "font-bold",
            )}
            href="/map"
          >
            <Map2 width={20} height={20} className="my-auto" />
            Carte temps-réel
          </Link>
          <div className="border-l-[1px] border-white" />
          <Link
            className={clsx(
              "border-white flex gap-1 justify-center p-1 w-full hover:brightness-90 sm:rounded-tr-md",
              pathname.startsWith("/vehicles") && "font-bold",
            )}
            href="/vehicles"
          >
            <Table width={20} height={20} className="my-auto" />
            Véhicules
          </Link>
        </div>
      </nav>
    </>
  );
}
