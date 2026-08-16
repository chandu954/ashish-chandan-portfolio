import Reveal from "./Reveal";

const STATS: [string, string][] = [
  ["15+", "months shipped work"],
  ["6+", "projects shipped"],
  ["4", "live apps deployed"],
  ["18", "GitHub repos"],
];

export default function Stats() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-4">
            {STATS.map(([value, label]) => (
              <div
                key={label}
                className="flex flex-col gap-1 border-b border-border py-8 sm:px-6"
              >
                <p className="font-mono text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
                  {value}
                </p>
                <p className="font-mono text-[11px] text-faint sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
