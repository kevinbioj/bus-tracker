"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Map2, Table } from "tabler-icons-react";

import NetworkSelector from "~/components/network-selector";
import Preferences from "~/components/preferences/preferences";
import { useActiveNetwork } from "~/hooks/useActiveNetwork";

export default function Header() {
  const [network] = useActiveNetwork();
  const pathname = usePathname();
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
