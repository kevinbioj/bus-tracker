import Image from "next/image";

import { Operator } from "~/@types";
import OperatorIssues from "~/components/operators/operator-issues";

import OperatorNote from "./operator-note";
import OperatorStatus from "./operator-status";

type OperatorCardProps = { operator: Operator };

export default function OperatorCard({ operator }: OperatorCardProps) {
  const [width, height] = operator.logo.size;
  return (
    <article className="flex flex-col sm:flex-row gap-x-6 gap-y-2">
      <div className="mx-auto w-52 relative">
        <Image className="mx-auto" src={operator.logo.href} alt={operator.name} width={width} height={height} />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-bold text-lg">{operator.name}</h3>
        <OperatorStatus id={operator.id} />
        <OperatorNote note={operator.note} />
        <OperatorIssues issues={operator.issues} />
      </div>
    </article>
  );
}
