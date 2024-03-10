import operators from "~/data/operators";

import OperatorCard from "./operator-card";

export default function Operators() {
  return (
    <section className="mt-6">
      <h2 className="font-bold text-2xl text-center">Transporteurs</h2>
      <div className="flex flex-col gap-8 max-w-screen-xl mt-3 mx-auto px-2">
        {operators.map((operator, index) => (
          <OperatorCard key={index} operator={operator} />
        ))}
      </div>
    </section>
  );
}
