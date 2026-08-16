import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const GUARANTEES = [
  "No experience fabricated",
  "No jobs you haven't held",
  "No skills you don't have",
];

export default function Showcase() {
  return (
    <section id="resume" className="scroll-mt-20 border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeader
            index="04"
            title="Resume Optimization in Action"
            subtitle="What Eleva does to a real resume — improve the signal, never invent the experience."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* BEFORE / AFTER DIFF */}
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">{"//"}</span>
                <h3 className="font-mono text-sm font-medium text-body">
                  before → after
                </h3>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>

              <div className="mt-5 rounded-lg border border-border bg-bg p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-faint">
                  original
                </p>
                <p className="mt-2 font-mono text-[13px] leading-relaxed text-muted line-through decoration-faint/60">
                  Worked on backend APIs.
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-indigo-400">
                  after · ai-suggested
                </p>
                <p className="mt-2 font-mono text-[13px] leading-relaxed text-body">
                  Built and maintained backend APIs supporting internal
                  application workflows and external integrations.
                </p>
                <p className="mt-3 border-t border-border pt-3 font-mono text-[10px] text-faint">
                  why: adds context and clarity without changing the factual
                  scope of the candidate&apos;s experience.
                </p>
              </div>

              <ul className="mt-5 flex list-none flex-col gap-2">
                {GUARANTEES.map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-2 font-mono text-[11px] text-muted"
                  >
                    <span className="flex size-4 items-center justify-center rounded border border-indigo-400/40 font-mono text-[9px] text-indigo-400">
                      ✓
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* ATS SCORE LIFT */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-indigo-400">{"//"}</span>
                <h3 className="font-mono text-sm font-medium text-body">
                  ats score lift
                </h3>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>

              <div className="mt-5 flex items-end gap-6">
                <p className="font-mono text-5xl font-semibold tracking-tight text-faint">
                  61
                </p>
                <span className="pb-2 font-mono text-xl text-indigo-400">→</span>
                <p className="font-mono text-5xl font-semibold tracking-tight text-indigo-400">
                  91
                </p>
              </div>

              <p className="mt-3 font-mono text-[10px] text-faint">
                measured on the demo resume · before / after one optimization pass
              </p>

              <a
                href="/Ashish_Chandan_ATS_Resume.pdf"
                download
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-indigo-400 px-4 py-2 pt-2.5 font-mono text-xs font-semibold text-bg transition-all hover:bg-indigo-400/90"
              >
                Download the optimized resume ↓
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
