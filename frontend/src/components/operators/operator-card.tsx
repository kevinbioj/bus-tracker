import Image from "next/image";

import { Operator } from "~/@types";
import OperatorIssues from "~/components/operators/operator-issues";

import OperatorNote from "./operator-note";
import OperatorStatus from "./operator-status";

type OperatorCardProps = { operator: Operator };

export default function OperatorCard({ operator }: OperatorCardProps) {
  return (
    <article className="flex flex-col sm:flex-row gap-x-6 gap-y-2">
      <div className="min-h-20 mx-auto w-52 relative">
        <Image className="object-contain mx-auto" src={operator.logo.href} alt={operator.name} fill />
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
