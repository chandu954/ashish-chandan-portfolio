import Reveal from "./Reveal";

const ITEMS = [
  { label: "paid client work", detail: "Hyacinte AI · RAG infra" },
  { label: "multi-agent research", detail: "Research Swarm · live demo" },
  { label: "LLM product", detail: "Eleva · ATS optimization" },
  { label: "AI code review", detail: "5 agents · GitHub" },
  { label: "full-stack apps", detail: "QuickCart · Khetika" },
  { label: "eval discipline", detail: "RAGAS harnesses" },
];

export default function QuickScan() {
  return (
    <section className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
              {"//"} quick scan
            </p>
            {ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-accent" aria-hidden="true" />
                <p className="font-mono text-xs text-body">{item.label}</p>
                <p className="hidden font-mono text-[10px] text-faint sm:inline">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
