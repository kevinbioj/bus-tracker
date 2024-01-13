"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map2, Table } from "tabler-icons-react";

import Preferences from "~/components/preferences/preferences";

export default function Header() {
  const pathname = usePathname();
  return (
    <>
      <header className="bg-brand grid grid-cols-[4rem_auto_4rem] py-1 text-white" id="header">
        <h1 className="col-start-2 font-[Rubik] font-medium select-none text-3xl text-center hover:cursor-default">
          Bus Tracker
        </h1>
        <Preferences />
      </header>
      <nav className="bg-brand text-white">
        <div className="border-t-[1px] flex justify-center mx-auto sm:border-x-[1px] sm:max-w-md sm:rounded-t-md">
          <Link
            className={clsx(
              "hover:bg-brand-hover border-white flex gap-1 justify-center p-1 w-full sm:rounded-tl-md",
              pathname.startsWith("/map") && "font-medium",
            )}
            href="/map"
          >
            <Map2 width={20} height={20} />
            Carte temps-réel
          </Link>
          <div className="border-l-[1px] border-white" />
          <Link
            className={clsx(
              "hover:bg-brand-hover border-white flex gap-1 justify-center p-1 w-full sm:rounded-tr-md",
              pathname.startsWith("/vehicles") && "font-medium",
            )}
            href="/vehicles"
          >
            <Table width={20} height={20} />
            Véhicules
          </Link>
        </div>
      </nav>
    </>
  );
}
