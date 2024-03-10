import { CloudStorm, SquareCheck } from "tabler-icons-react";
import { match } from "ts-pattern";

import { Operator } from "~/@types";

type OperatorIssuesProps = { issues: Operator["issues"] };

export default function OperatorIssues({ issues }: OperatorIssuesProps) {
  return (
    <ul className="mt-0.5">
      {issues.map((issue, index) => (
        <li className="" key={index}>
          {match(issue.status)
            .with("ONGOING", () => (
              <span className="font-bold text-orange-500">
                <CloudStorm aria-label="Problème" className="inline-flex" /> En cours :
              </span>
            ))
            .with("RESOLVED", () => (
              <span className="font-bold text-green-500">
                <SquareCheck aria-label="Problème" className="inline-flex" /> Résolu :
              </span>
            ))
            .exhaustive()}{" "}
          {issue.message}
        </li>
      ))}
    </ul>
  );
}
