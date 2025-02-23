import Link from "next/link";
import { Table } from "tabler-icons-react";

export default function Header() {
  return (
    <>
      <header
        className="py-1 transition-colors bg-[#B0105F] text-white"
        id="header"
      >
        <h1 className="col-start-2 font-[Achemine] font-bold select-none text-3xl text-center hover:cursor-default">
          Bus Tracker
        </h1>
      </header>
      <nav
        className="transition-colors bg-[#B0105F] text-white"
      >
        <div className="border-t-[1px] flex justify-center mx-auto sm:border-x-[1px] sm:max-w-md sm:rounded-t-md">
          <Link
            className={"border-white font-bold flex gap-1 justify-center p-1 w-full hover:brightness-90 sm:rounded-tr-md"}
            href="/vehicles"
          >
            <Table width={20} height={20} className="my-auto" />
            Véhicules
          </Link>
        </div>
      </nav>
      <div className="mt-3 bg-[#B0105F] p-3 text-lg text-white max-w-screen-lg mx-auto rounded-md">
        Pour continuer à utiliser l'application, rendez-vous sur :<br />
        <a className="font-bold hover:underline" href="https://bus-tracker.fr" target="_blank">https://bus-tracker.fr</a><br />
      </div>
    </>
  );
}
