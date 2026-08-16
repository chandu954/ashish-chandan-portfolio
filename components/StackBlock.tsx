export default function StackBlock({ groups }: { groups: [string, string][] }) {
  return (
    <div className="grid gap-x-10 gap-y-2.5 sm:grid-cols-2">
      {groups.map(([label, techs]) => (
        <p key={label} className="font-mono text-[11px] leading-relaxed">
          <span className="text-accent">{label} — </span>
          <span className="text-muted">{techs}</span>
        </p>
      ))}
    </div>
  );
}