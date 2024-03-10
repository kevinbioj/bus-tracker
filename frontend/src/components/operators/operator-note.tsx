type OperatorNoteProps = { note?: string };

export default function OperatorNote({ note }: OperatorNoteProps) {
  if (typeof note === "undefined") return null;
  return (
    <div className="mt-2">
      <h4 className="font-bold underline">Informations complémentaires</h4>
      <p dangerouslySetInnerHTML={{ __html: note }} />
    </div>
  );
}
