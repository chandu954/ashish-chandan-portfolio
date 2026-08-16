import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const SKILL_GROUPS: [string, [string, number][]][] = [
  [
    "ai / llm",
    [
      ["RAG pipelines", 5],
      ["LLM applications", 5],
      ["Multi-agent systems", 4],
      ["Embeddings", 4],
    ],
  ],
    [
      "backend",
      [
        ["Python", 5],
        ["FastAPI", 5],
        ["SQLAlchemy", 4],
        ["API design", 5],
      ],
    ],
  [
    "frontend",
    [
      ["TypeScript", 4],
      ["React", 4],
      ["Next.js", 4],
      ["Tailwind", 4],
    ],
  ],
  [
    "data / infra",
    [
      ["PostgreSQL", 4],
      ["Redis", 4],
      ["Vector DBs", 4],
      ["Docker", 4],
    ],
  ],
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeader
            index="05"
            title="Technical Stack"
            subtitle="Evidence over claims — the stack behind the projects above."
          />
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">{"//"}</span>
              <p className="font-mono text-sm font-medium text-body">
                skill matrix
              </p>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SKILL_GROUPS.map(([group, skills]) => (
                <div key={group}>
                  <p className="font-mono text-[11px] text-accent">{group}</p>
                  <ul className="mt-3 flex list-none flex-col gap-2.5">
                    {skills.map(([skill, level]) => (
                      <li key={skill}>
                        <div className="flex items-center justify-between font-mono text-[11px]">
                          <span className="text-body">{skill}</span>
                          <span className="flex gap-0.5" aria-hidden="true">
                            {[1, 2, 3, 4, 5].map((n) => (
                              <span
                                key={n}
                                className={`size-1.5 rounded-full ${
                                  n <= level ? "bg-accent" : "bg-surface-2"
                                }`}
                              />
                            ))}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-border pt-4 font-mono text-[11px] text-faint">
              more projects —{" "}
              <a
                href="https://github.com/chandu954"
                target="_blank"
                rel="noreferrer"
                className="text-muted transition-colors hover:text-accent"
              >
                github.com/chandu954 ↗
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}