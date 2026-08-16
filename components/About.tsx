import Reveal from "./Reveal";

const SNAPSHOT: [string, string][] = [
  ["ai / llm", "RAG · Agents · Multi-Agent Systems"],
  ["backend", "Python · FastAPI · SQLAlchemy"],
  ["frontend", "TypeScript · React · Next.js"],
  ["data", "PostgreSQL · Redis · Vector Databases"],
  ["infrastructure", "Docker · AWS · Vercel"],
];

export default function About() {
  return (
    <section className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <Reveal>
          <p className="font-mono text-sm text-accent">
            <span className="text-faint">{"//"}</span> about
          </p>
          <h2 className="mt-2 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
            AI Engineer focused on building{" "}
            <span className="text-accent">
              production-oriented LLM applications
            </span>
            , RAG systems, multi-agent workflows, and full-stack products.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            I build AI systems that combine LLMs with retrieval, agent
            orchestration, and production APIs. My work spans RAG pipelines,
            multi-agent workflows, and full-stack AI products — with a focus on
            reliability, grounding, and scalable backend systems.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">~/</span>
              <p className="font-mono text-sm font-medium text-body">
                technical snapshot
              </p>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <dl className="mt-4 grid gap-x-8 gap-y-2.5 font-mono text-xs leading-relaxed sm:grid-cols-2">
              {SNAPSHOT.map(([label, items]) => (
                <div key={label} className="flex flex-wrap gap-x-3 gap-y-1">
                  <dt className="shrink-0 text-accent">{label}</dt>
                  <dd className="text-muted">{items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}