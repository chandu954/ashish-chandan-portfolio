import Reveal from "./Reveal";
import Link from "next/link";

function Label({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
      <span className="text-faint">{"//"}</span> {children}
    </p>
  );
}

function FlowColumn({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div>
      <p className="font-mono text-[11px] text-faint">{label}</p>
      <div className="mt-2 flex flex-col">
        {steps.map((step, i) => (
          <div key={step}>
            <div className="rounded-md border border-border bg-surface px-3 py-2 text-center font-mono text-[11px] text-body">
              {step}
            </div>
            {i < steps.length - 1 ? (
              <p className="py-1 text-center font-mono text-[10px] text-faint">↓</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

const WORKFLOW = ["paste jd or url", "match analysis", "tailor resume", "review diff", "apply & track"];
const GUARDRAILS = [
  "no fabricated employers or titles",
  "no invented projects or degrees",
  "no unsupported performance metrics",
  "every rewrite grounded in real experience",
];
const OUTCOME: [string, string][] = [
  ["61→91", "ATS score lift"],
  ["4", "keyword gaps fixed"],
  ["0", "facts fabricated"],
  ["5-step", "job-to-application pipeline"],
  ["3×", "provider failover paths"],
];

export default function CaseStudyEleva() {
  return (
    <section className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-widest text-indigo-400">
            <span className="text-faint">{"//"}</span> product engineering · llm product
          </p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Eleva
              </h2>
              <p className="mt-3 text-lg font-medium text-body">
                AI Career Operating System — one workspace for an entire job
                search.
              </p>
              <p className="mt-2 leading-relaxed text-muted">
                From a pasted job description to a tracked application: parse,
                score, tailor, review, and apply — all on one shared resume
                context, with an honest-AI constraint that never fabricates
                experience.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <span className="font-mono text-[11px] text-indigo-400">
                  why it matters —{" "}
                </span>
                resumes are judged in seconds; the product&apos;s job is turning
                the rewrite from a gamble into a scored, diff-reviewed,
                traceable process.
              </p>
              <p className="mt-4 font-mono text-xs text-faint">
                product · end-to-end · live at eleva-beige.vercel.app/eleva
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "React", "Supabase", "LLM APIs", "ATS simulation"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://eleva-beige.vercel.app/eleva"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-indigo-400 px-4 py-2.5 font-mono text-xs font-semibold text-bg transition-all hover:bg-indigo-400/90"
                >
                  Open live demo ↗
                </a>
                <a
                  href="https://github.com/chandu954/Eleva"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs text-body transition-colors hover:border-indigo-400/50 hover:text-indigo-400"
                >
                  GitHub ↗
                </a>
                <Link
                  href="/blog/building-elevas-ats-pipeline"
                  className="rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs text-body transition-colors hover:border-indigo-400/50 hover:text-indigo-400"
                >
                  How the scoring works →
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-bg text-left">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <p className="font-mono text-xs text-body">eleva --status</p>
                <span className="rounded-md bg-indigo-400/15 px-2 py-0.5 font-mono text-[10px] text-indigo-400">
                  live
                </span>
              </div>
              <div className="space-y-2 p-4 font-mono text-[11px] leading-relaxed">
                <p className="text-faint">$ eleva --status</p>
                {[
                  "ats parsing — real parser simulation",
                  "tailoring — rewrites grounded in facts",
                  "provider routing — auto fallback on rate limits",
                  "kanban — every application tracked",
                  "score — 61 → 91 on the demo resume",
                  "evals — every rewrite diff-reviewed",
                ].map((line) => (
                  <p key={line} className="text-indigo-400">
                    ✓ {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-14">
          <Reveal>
            <Label>the workflow</Label>
            <div className="mt-4">
              <FlowColumn label="five steps, no context switching" steps={WORKFLOW} />
            </div>
          </Reveal>

          <Reveal>
            <Label>engineering highlights</Label>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "ATS parser simulation",
                  text: "Scores come from a structured parser analysis — weighted keywords, formatting, and recruiter signals — not a keyword-count blender.",
                  foot: "keyword alignment measured before → after on the demo resume",
                },
                {
                  n: "02",
                  title: "Honest AI constraints",
                  text: "Rewrites may restructure and re-emphasize supported facts only. Employers, titles, projects, degrees, and metrics must exist in the resume.",
                  foot: "every diff shown with a why",
                },
                {
                  n: "03",
                  title: "Provider-agnostic LLM routing",
                  text: "Requests route across providers with automatic fallback — rate limits fail over instead of failing the workflow.",
                  foot: "workflows continue under provider outages",
                },
              ].map((h) => (
                <div
                  key={h.n}
                  className="flex flex-col rounded-xl border border-border bg-surface p-5"
                >
                  <p className="font-mono text-xs text-indigo-400">{h.n}</p>
                  <h3 className="mt-1 text-sm font-semibold text-body">{h.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{h.text}</p>
                  <p className="mt-auto pt-3 font-mono text-[10px] leading-relaxed text-faint">
                    {h.foot}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Label>guardrails</Label>
            <ul className="mt-3 grid list-none gap-2.5 sm:grid-cols-2">
              {GUARDRAILS.map((g) => (
                <li
                  key={g}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-4 py-3 font-mono text-xs text-muted"
                >
                  <span className="flex size-4 shrink-0 items-center justify-center rounded border border-indigo-400/40 text-[9px] text-indigo-400">
                    ✓
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <Label>outcome</Label>
            <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
              {OUTCOME.map(([big, small]) => (
                <div key={big} className="bg-surface p-4">
                  <p className="font-mono text-sm font-semibold text-indigo-400">{big}</p>
                  <p className="mt-1 font-mono text-[10px] leading-relaxed text-faint">
                    {small}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              Shipped a complete product surface — marketing site, auth,
              dashboard, and the five-step optimization workspace — from spec
              to production deployment.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              Every rewrite is diff-reviewed for factual integrity before it&apos;s
              saved — the honest-AI guardrail means 0 fabricated facts on the
              eval set, and provider failover is exercised under injected rate
              limits.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <a
                href="#projects"
                className="font-mono text-xs text-muted transition-colors hover:text-indigo-400"
              >
                ← Back to Work
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
