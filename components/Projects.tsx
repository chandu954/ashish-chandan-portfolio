import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import DemoPlayer from "./DemoPlayer";
import Collapse from "./Collapse";
import OpenCaseStudy from "./OpenCaseStudy";
import CaseStudy from "./CaseStudy";
import CaseStudyEleva from "./CaseStudyEleva";
import Link from "next/link";

function ElevaApp() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="font-mono text-xs text-body">Resume Optimization</p>
        <span className="rounded-md bg-indigo-400/15 px-2 py-0.5 font-mono text-[10px] text-indigo-400">
          tailored
        </span>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-[10px] text-faint">ats analysis</p>
            <p className="font-mono text-[10px] text-indigo-400">optimized</p>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full w-[78%] rounded-full bg-indigo-400/70" />
          </div>
        </div>

        <div className="border-t border-border pt-3">
          <p className="font-mono text-[10px] text-faint">stack match</p>
          <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
            {([
              ["Next.js", true],
              ["TypeScript", true],
              ["React", true],
              ["Supabase", true],
              ["Tailwind", true],
              ["Kubernetes", false],
            ] as const).map(([skill, matched]) => (
              <p key={skill} className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
                <span className={matched ? "text-indigo-400" : "text-faint"}>
                  {matched ? "✓" : "○"}
                </span>
                {skill}
              </p>
            ))}
          </div>
          <p className="mt-2.5 font-mono text-[10px] text-faint">
            missing keywords: Kubernetes · CI/CD
          </p>
        </div>

        <div className="border-t border-border pt-3">
          <p className="font-mono text-[10px] text-faint">improvements applied</p>
          <ul className="mt-2 flex list-none flex-col gap-1.5">
            {[
              "+ stronger project impact",
              "+ clearer technical skills",
              "+ keyword coverage",
            ].map((line) => (
              <li key={line} className="font-mono text-[11px] text-body">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="https://eleva-beige.vercel.app/eleva"
          target="_blank"
          rel="noreferrer"
          className="block w-full rounded-lg border border-indigo-400/40 bg-indigo-400/10 py-2 text-center font-mono text-xs text-indigo-400 transition-colors hover:bg-indigo-400/20"
        >
          View Analysis ↗
        </a>
      </div>
    </div>
  );
}

function SwarmApp() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="font-mono text-xs text-body">Research Swarm</p>
        <span className="flex items-center gap-1.5 rounded-md bg-accent-2/15 px-2 py-0.5 font-mono text-[10px] text-accent-2">
          <span className="size-1.5 rounded-full bg-accent-2" />
          shipped
        </span>
      </div>

      <div className="space-y-4 p-4">
        <div className="rounded-lg border border-border bg-surface-2 p-3">
          <p className="font-mono text-[10px] text-faint">research objective</p>
          <p className="mt-1.5 text-sm leading-relaxed text-body">
            &quot;Compare approaches to persistent memory in AI agents.&quot;
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] text-faint">capabilities</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              ["Persistent memory", "context across runs"],
              ["Parallel agents", "delegated research"],
              ["Source grounding", "citable basis"],
              ["Result synthesis", "final report"],
            ].map(([title, sub]) => (
              <div
                key={title}
                className="rounded-md border border-border bg-surface-2 p-2.5"
              >
                <p className="font-mono text-[10px] text-accent-2">{title}</p>
                <p className="mt-0.5 font-mono text-[9px] text-faint">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-3">
          <p className="font-mono text-[10px] text-faint">insights</p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">
            Persistent memory improves cross-task context retention. Agent
            coordination reduces duplicate research work.
          </p>
        </div>

        <a
          href="https://research-swarm-omega.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="block w-full rounded-lg border border-accent-2/40 bg-accent-2/10 py-2 text-center font-mono text-xs text-accent-2 transition-colors hover:bg-accent-2/20"
        >
          Open Research Report ↗
        </a>
      </div>
    </div>
  );
}

function HyacinteApp() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="font-mono text-xs text-body">Executive Intelligence</p>
        <div className="flex items-center gap-2 font-mono text-[10px] text-faint">
          <span>EN</span>
          <span className="rounded-md bg-surface-2 px-1.5 py-0.5 text-muted">tenant-scoped</span>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="rounded-lg border border-border bg-surface-2 p-3">
          <p className="font-mono text-[10px] text-faint">question</p>
          <p className="mt-1.5 text-sm leading-relaxed text-body">
            &quot;What changed in the regional market this quarter?&quot;
          </p>
        </div>

        <div className="rounded-lg border border-accent/25 bg-accent/5 p-3">
          <p className="flex items-center gap-1.5 font-mono text-[10px] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            ai response
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-body">
            The latest reports indicate a shift in regional trade priorities,
            driven by...
          </p>
          <p className="mt-2 font-mono text-[10px] text-faint">
            grounded in 3 sources · cited below
          </p>
        </div>

        <div className="border-t border-border pt-3">
          <p className="font-mono text-[10px] text-faint">sources</p>
          <ul className="mt-2 flex list-none flex-col gap-1.5">
            {["Market report · Q1", "Policy brief · ECOWAS", "News digest · FR"].map(
              (s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 font-mono text-[11px] text-muted"
                >
                  <span className="text-faint">•</span>
                  {s}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ReviewApp() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <p className="font-mono text-xs text-body">PR Review · #142</p>
          <span className="rounded-md bg-violet-400/15 px-2 py-0.5 font-mono text-[10px] text-violet-400">
            5 agents
          </span>
        </div>
        <span className="flex items-center gap-1.5 rounded-md bg-rose-400/15 px-2 py-0.5 font-mono text-[10px] text-rose-400">
          <span className="size-1.5 rounded-full bg-rose-400" />
          2 critical
        </span>
      </div>

      <div className="space-y-4 p-4">
        <div className="rounded-lg border border-rose-400/30 bg-rose-400/5 p-3">
          <p className="font-mono text-[10px] text-rose-400">
            security agent · packages/agents/security.py:42
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-body">
            Hardcoded API key detected — move to environment variables.
          </p>
        </div>

        <div>
          <p className="font-mono text-[10px] text-faint">agent findings</p>
          <ul className="mt-2 flex list-none flex-col gap-1.5">
            {([
              ["security agent", "cvss score 9.1"],
              ["performance agent", "n+1 query"],
              ["quality agent", "duplicate logic"],
              ["testing agent", "missing edge case"],
              ["architect agent", "service boundary"],
            ] as const).map(([agent, finding]) => (
              <li
                key={agent}
                className="flex items-center gap-2 font-mono text-[11px] text-muted"
              >
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-violet-400" aria-hidden="true" />
                  {agent}
                </span>
                <span className="text-faint">·</span>
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-border pt-3">
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-[10px] text-faint">overall quality</p>
            <p className="font-mono text-[10px] text-violet-400">87 / 100</p>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full w-[87%] rounded-full bg-violet-400/70" />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickCartApp() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="font-mono text-xs text-body">QuickCart</p>
        <span className="rounded-md bg-teal-400/15 px-2 py-0.5 font-mono text-[10px] text-teal-400">
          in stock
        </span>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex items-center gap-3 rounded-lg border border-border bg-surface-2 p-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-bg font-mono text-[10px] text-faint">
            1:1
          </div>
          <div className="flex-1">
            <p className="font-mono text-[11px] text-body">Wireless Headphones</p>
            <p className="mt-0.5 font-mono text-[10px] text-faint">₹2,499</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex size-6 items-center justify-center rounded border border-border font-mono text-[10px] text-muted">−</span>
            <span className="w-4 text-center font-mono text-[11px] text-body">1</span>
            <span className="flex size-6 items-center justify-center rounded border border-border font-mono text-[10px] text-muted">+</span>
          </div>
        </div>

        <div className="border-t border-border pt-3">
          <p className="font-mono text-[10px] text-faint">cart summary</p>
          <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-body">
            <span>3 items</span>
            <span className="text-teal-400">₹7,199</span>
          </div>
          <div className="mt-3 rounded-lg border border-teal-400/40 bg-teal-400/10 py-2 text-center font-mono text-xs text-teal-400">
            Checkout
          </div>
        </div>
      </div>
    </div>
  );
}

function KhetikaApp() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="font-mono text-xs text-body">Khetika</p>
        <span className="rounded-md bg-orange-400/15 px-2 py-0.5 font-mono text-[10px] text-orange-400">
          voice enabled
        </span>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2">
          <span className="font-mono text-[11px] text-faint">search…</span>
          <span className="ml-auto rounded-md border border-orange-400/40 bg-orange-400/10 px-2 py-0.5 font-mono text-[9px] text-orange-400">
            mic
          </span>
        </div>

        <div className="rounded-lg border border-border bg-surface-2 p-3">
          <p className="font-mono text-[10px] text-faint">voice query</p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-body">
            &quot;order 2 packs of dosa batter&quot;
          </p>
          <p className="mt-2 font-mono text-[10px] text-orange-400">→ 2 × Dosa Batter · ₹180 added</p>
        </div>

        <div className="border-t border-border pt-3">
          <p className="font-mono text-[10px] text-faint">order tracking</p>
          <div className="mt-2 flex items-center gap-1.5">
            {["received", "preparing", "out for delivery", "delivered"].map((stage, i) => (
              <div key={stage} className="flex-1">
                <div
                  className={`h-1.5 rounded-full ${i < 3 ? "bg-orange-400/70" : "bg-surface-2"}`}
                />
                <p className="mt-1 font-mono text-[9px] text-faint">{stage}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 font-mono text-[10px] text-faint">ORD1694441234567</p>
        </div>
      </div>
    </div>
  );
}

function QuickChatApp() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <p className="font-mono text-xs text-body">QuickChat</p>
          <span className="rounded-md bg-amber-400/15 px-2 py-0.5 font-mono text-[10px] text-amber-400">
            live
          </span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-faint">
          <span className="size-1.5 rounded-full bg-teal-400" aria-hidden="true" />
          socket connected
        </span>
      </div>

      <div className="flex min-h-[220px]">
        <div className="w-16 shrink-0 border-r border-border bg-surface-2/60 p-2 sm:w-24">
          {["DC", "AM", "SR", "KB"].map((initials, i) => (
            <div
              key={initials}
              className={`mb-1.5 flex size-9 items-center justify-center rounded-lg font-mono text-[10px] sm:size-12 ${
                i === 0 ? "bg-amber-400/20 text-amber-400" : "bg-surface-2 text-faint"
              }`}
            >
              {initials}
            </div>
          ))}
        </div>

        <div className="flex flex-1 flex-col">
          <div className="space-y-2.5 p-3 sm:p-4">
            <div className="flex justify-end">
              <p className="max-w-[75%] rounded-lg rounded-tr-sm bg-amber-400/20 px-3 py-1.5 text-[11px] leading-relaxed text-body">
                pushed the auth middleware — reconnecting sockets now
              </p>
            </div>
            <div className="flex justify-start">
              <p className="max-w-[75%] rounded-lg rounded-tl-sm bg-surface-2 px-3 py-1.5 text-[11px] leading-relaxed text-muted">
                nice — JWT re-checked on every handshake?
              </p>
            </div>
            <div className="flex justify-end">
              <p className="max-w-[75%] rounded-lg rounded-tr-sm bg-amber-400/20 px-3 py-1.5 text-[11px] leading-relaxed text-body">
                yep, plus bcrypt hashes on login
              </p>
            </div>
            <div className="flex justify-start">
              <div className="rounded-lg rounded-tl-sm bg-surface-2 px-3 py-1.5">
                <p className="font-mono text-[9px] text-faint">image</p>
                <div className="mt-1 flex size-14 items-center justify-center rounded-md bg-bg font-mono text-[9px] text-faint">
                  via cloudinary
                </div>
              </div>
            </div>
            <div className="flex justify-start">
              <p className="flex items-center gap-1.5 text-[10px] text-faint">
                <span className="size-1.5 animate-pulse rounded-full bg-amber-400" aria-hidden="true" />
                asha is typing…
              </p>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 border-t border-border px-3 py-2.5">
            <p className="flex-1 rounded-md bg-surface-2 px-3 py-1.5 font-mono text-[10px] text-faint">
              message…
            </p>
            <span className="flex size-7 items-center justify-center rounded-md bg-amber-400 text-[11px] font-semibold text-bg">
              ↵
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeader
            index="01"
            title="Selected Work"
            subtitle="Seven systems spanning multi-agent AI, production RAG, LLM products, code review, and full-stack web apps."
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          {/* 01 RESEARCH SWARM */}
          <Reveal delay={0.05}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent-2/40">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-faint">01</span>
                    <span className="rounded-md bg-accent-2/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-accent-2">
                      multi-agent research
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent-2">
                    Research Swarm
                  </h3>
                  <p className="mt-1 font-mono text-xs text-faint">
                    Multi-Agent AI Research System
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-body">
                    Autonomous research workflow with specialized agents,
                    parallel execution, persistent memory, and
                    source-grounded synthesis.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Python", "LLMs", "AI Agents", "Multi-Agent Systems"].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-accent-2/25 bg-accent-2/5 px-4 py-3">
                    <p className="font-mono text-[11px] text-accent-2">{"/// shipped"}</p>
                    <ul className="mt-1.5 flex list-none flex-col gap-1.5 text-sm leading-relaxed text-body">
                      {[
                        "Task decomposition + specialized agents with persistent memory.",
                        "Parallel execution path from objective to synthesized report.",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent-2" aria-hidden="true" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["3", "specialized agents"],
                      ["1", "persistent memory"],
                      ["cited", "every claim grounded"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
                        <p className="font-mono text-sm font-semibold text-accent-2">{v}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-faint">{l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="https://research-swarm-omega.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-accent-2 px-4 py-2 font-mono text-xs font-semibold text-bg transition-all hover:bg-accent-2/90"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href="https://github.com/chandu954/Research-Swarm"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-border bg-bg px-4 py-2 font-mono text-xs text-body transition-colors hover:border-accent-2/50 hover:text-accent-2"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
                <div className="flex items-center border-t border-border bg-bg/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <SwarmApp />
                </div>
              </div>
              <div className="border-t border-border p-5 sm:p-6">
                <div className="mb-3 flex items-center gap-2">
                  <span className="size-1.5 animate-pulse rounded-full bg-rose-400" aria-hidden="true" />
                  <p className="font-mono text-[10px] text-faint">
                    {"//"} auto-playing demo — 52s walkthrough
                  </p>
                </div>
                <DemoPlayer />
              </div>
            </article>
          </Reveal>

          {/* 02 HYACINTE AI */}
          <Reveal delay={0.05}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/40">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-faint">02</span>
                    <span className="rounded-md bg-accent/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                      freelance · client project
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                    Hyacinte AI
                  </h3>
                  <p className="mt-1 font-mono text-xs text-faint">
                    Production RAG Infrastructure
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-body">
                    Tenant-isolated RAG infrastructure for a bilingual
                    executive-intelligence platform.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["FastAPI", "Qdrant", "PostgreSQL", "Redis", "Docker"].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-accent/25 bg-accent/5 px-4 py-3">
                    <p className="font-mono text-[11px] text-accent">{"/// outcomes"}</p>
                    <ul className="mt-1.5 flex list-none flex-col gap-1.5 text-sm leading-relaxed text-body">
                      {[
                        "Source-grounded EN/FR responses with cited sources.",
                        "Tenant-isolated retrieval — JWT-scoped, no cross-org leakage.",
                        "Async OCR + embedding pipeline; Dockerized handoff.",
                        "RAGAS eval harness — faithfulness and grounding measured on the bilingual eval set.",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["EN/FR", "bilingual answers"],
                      ["2-layer", "tenant isolation"],
                      ["JWT", "scoped retrieval"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
                        <p className="font-mono text-sm font-semibold text-accent">{v}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-faint">{l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <OpenCaseStudy target="hyacinte-case">
                      View full case study ↓
                    </OpenCaseStudy>
                  </div>
                </div>
                <div className="flex items-center border-t border-border bg-bg/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <HyacinteApp />
                </div>
              </div>
            </article>
          </Reveal>

          <Collapse
            id="hyacinte-case"
            label="Case study 01 — Hyacinte AI · client RAG infrastructure"
            hint="tenant isolation · async ingestion · RAGAS evals — 2 min read"
          >
            <CaseStudy />
          </Collapse>

          {/* 03 ELEVA */}
          <Reveal delay={0.05}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-indigo-400/40">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-faint">03</span>
                    <span className="rounded-md bg-indigo-400/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-indigo-400">
                      llm product
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-indigo-400">
                    Eleva
                  </h3>
                  <p className="mt-1 font-mono text-xs text-faint">
                    AI Career Workspace
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-body">
                    AI career workspace built around a multi-stage resume
                    optimization and evaluation pipeline.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "TypeScript", "React", "Supabase", "LLM APIs"].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-indigo-400/25 bg-indigo-400/5 px-4 py-3">
                    <p className="font-mono text-[11px] text-indigo-400">{"/// engineering"}</p>
                    <ul className="mt-1.5 flex list-none flex-col gap-1.5 text-sm leading-relaxed text-body">
                      {[
                        "Multi-stage AI workflow with ATS optimization.",
                        "Provider routing + automatic fallback — rate limits fail over, workflows continue.",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["61→91", "ATS score lift"],
                      ["4", "keyword gaps fixed"],
                      ["0", "facts fabricated"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
                        <p className="font-mono text-sm font-semibold text-indigo-400">{v}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-faint">{l}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 font-mono text-[10px] text-faint">
                    before / after measured on the same resume —{" "}
                    <Link
                      href="/blog/building-elevas-ats-pipeline"
                      className="text-indigo-400 underline-offset-2 hover:underline"
                    >
                      methodology
                    </Link>{" "}
                    ·{" "}
                    <a
                      href="/eleva-ats-eval.json"
                      download="eleva-ats-eval.json"
                      className="text-indigo-400 underline-offset-2 hover:underline"
                    >
                      eval artifact ↓
                    </a>
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href="https://eleva-beige.vercel.app/eleva"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-indigo-400 px-4 py-2 font-mono text-xs font-semibold text-bg transition-all hover:bg-indigo-400/90"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href="https://github.com/chandu954/Eleva"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-border bg-bg px-4 py-2 font-mono text-xs text-body transition-colors hover:border-indigo-400/50 hover:text-indigo-400"
                    >
                      GitHub ↗
                    </a>
                    <Link
                      href="/blog/building-elevas-ats-pipeline"
                      className="rounded-lg border border-border bg-bg px-4 py-2 font-mono text-xs text-body transition-colors hover:border-indigo-400/50 hover:text-indigo-400"
                    >
                      How the scoring works →
                    </Link>
                  </div>
                </div>
                <div className="flex items-center border-t border-border bg-bg/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <ElevaApp />
                </div>
              </div>
            </article>
          </Reveal>

          <Collapse
            id="eleva-case"
            label="Case study 02 — Eleva · LLM product engineering"
            hint="ATS pipeline · honest-AI guardrails · provider failover — 2 min read"
          >
            <CaseStudyEleva />
          </Collapse>

          {/* 04 AI CODE REVIEW PLATFORM */}
          <Reveal delay={0.05}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-violet-400/40">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-faint">04</span>
                    <span className="rounded-md bg-violet-400/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-violet-400">
                      multi-agent code review
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-violet-400">
                    AI Code Review Platform
                  </h3>
                  <p className="mt-1 font-mono text-xs text-faint">
                    Enterprise PR Review System
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-body">
                    Production-grade AI code review platform where five
                    specialized agents — security, performance, quality,
                    testing, and architecture — review every pull request.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["FastAPI", "LangGraph", "Next.js 15", "Qdrant", "Celery", "Kubernetes"].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-violet-400/25 bg-violet-400/5 px-4 py-3">
                    <p className="font-mono text-[11px] text-violet-400">{"/// engineering"}</p>
                    <ul className="mt-1.5 flex list-none flex-col gap-1.5 text-sm leading-relaxed text-body">
                      {[
                        "Five specialized review agents orchestrated via LangGraph with a team-memory learning system.",
                        "RAG over the codebase + AST analysis — reviews are context-aware, not just LLM prompts.",
                        "Full GitHub integration: webhooks, inline comments, approvals, and observability stack.",
                        "Eval harness on a labeled PR set — recall and false positives tracked per agent.",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-violet-400" aria-hidden="true" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["5", "agents per review"],
                      ["webhook", "auto-triggered"],
                      ["inline", "GitHub comments"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
                        <p className="font-mono text-sm font-semibold text-violet-400">{v}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-faint">{l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://github.com/chandu954/ai-workflow-infrastructure-platform"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-border bg-bg px-4 py-2 font-mono text-xs text-body transition-colors hover:border-violet-400/50 hover:text-violet-400"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
                <div className="flex items-center border-t border-border bg-bg/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <ReviewApp />
                </div>
              </div>
            </article>
          </Reveal>

          {/* 05 QUICKCART */}
          <Reveal delay={0.05}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-teal-400/40">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-faint">05</span>
                    <span className="rounded-md bg-teal-400/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-teal-400">
                      full-stack e-commerce
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-teal-400">
                    QuickCart
                  </h3>
                  <p className="mt-1 font-mono text-xs text-faint">
                    Next.js Storefront
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-body">
                    Full-stack e-commerce storefront with cart state
                    management, product catalog, and middleware-protected
                    checkout flows built for the edge.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "React", "Tailwind", "Middleware"].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-teal-400/25 bg-teal-400/5 px-4 py-3">
                    <p className="font-mono text-[11px] text-teal-400">{"/// outcomes"}</p>
                    <ul className="mt-1.5 flex list-none flex-col gap-1.5 text-sm leading-relaxed text-body">
                      {[
                        "Global cart state across catalog and checkout via React context.",
                        "Route protection with Next.js middleware for order flows.",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["1", "global cart state"],
                      ["3", "checkout flows"],
                      ["edge", "middleware routes"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
                        <p className="font-mono text-sm font-semibold text-teal-400">{v}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-faint">{l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="https://quick-cart-woad-omega.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-teal-400 px-4 py-2 font-mono text-xs font-semibold text-bg transition-all hover:bg-teal-400/90"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href="https://github.com/chandu954/QuickCart"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-border bg-bg px-4 py-2 font-mono text-xs text-body transition-colors hover:border-teal-400/50 hover:text-teal-400"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
                <div className="flex items-center border-t border-border bg-bg/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <QuickCartApp />
                </div>
              </div>
            </article>
          </Reveal>

          {/* 06 KHETIKA */}
          <Reveal delay={0.05}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-orange-400/40">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-faint">06</span>
                    <span className="rounded-md bg-orange-400/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-orange-400">
                      voice-first web
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-orange-400">
                    Khetika
                  </h3>
                  <p className="mt-1 font-mono text-xs text-faint">
                    Voice-Enabled Retail Web
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-body">
                    Voice-first grocery shopping — NLP text search and Web
                    Speech API voice commands drive search, cart, checkout,
                    and order tracking in one lightweight storefront.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Next.js", "Web Speech API", "NLP", "Serverless"].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-orange-400/25 bg-orange-400/5 px-4 py-3">
                    <p className="font-mono text-[11px] text-orange-400">{"/// outcomes"}</p>
                    <ul className="mt-1.5 flex list-none flex-col gap-1.5 text-sm leading-relaxed text-body">
                      {[
                        "Voice checkout — \"order 2 packs of dosa batter\" adds to cart and places the order.",
                        "Keyword extraction + filters for natural-language product queries.",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["2", "search modes"],
                      ["3-step", "voice checkout"],
                      ["live", "order tracking"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
                        <p className="font-mono text-sm font-semibold text-orange-400">{v}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-faint">{l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="https://khetika-webapp.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-orange-400 px-4 py-2 font-mono text-xs font-semibold text-bg transition-all hover:bg-orange-400/90"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href="https://github.com/chandu954/khetika-webapp"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-border bg-bg px-4 py-2 font-mono text-xs text-body transition-colors hover:border-orange-400/50 hover:text-orange-400"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
                <div className="flex items-center border-t border-border bg-bg/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <KhetikaApp />
                </div>
              </div>
            </article>
          </Reveal>
        {/* 07 QUICKCHAT */}
          <Reveal delay={0.05}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-amber-400/40">
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                <div className="p-7 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-faint">07</span>
                    <span className="rounded-md bg-amber-400/15 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-400">
                      real-time chat
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-amber-400">
                    QuickChat
                  </h3>
                  <p className="mt-1 font-mono text-xs text-faint">
                    Monorepo Chat App — Socket.io + MongoDB
                  </p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-body">
                    Real-time chat application with JWT-protected auth,
                    persistent conversations, and Cloudinary media
                    sharing across a two-app monorepo.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "Socket.io", "Express", "MongoDB", "JWT"].map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-amber-400/25 bg-amber-400/5 px-4 py-3">
                    <p className="font-mono text-[11px] text-amber-400">{"/// engineering"}</p>
                    <ul className="mt-1.5 flex list-none flex-col gap-1.5 text-sm leading-relaxed text-body">
                      {[
                        "Real-time messaging over Socket.io — no polling, events broadcast to connected clients.",
                        "JWT auth on every API and socket handshake with bcrypt-hashed credentials.",
                        "Persistent conversation history in MongoDB (Mongoose) and media uploads via Cloudinary.",
                      ].map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="mt-2.5 size-1 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["socket", "realtime events"],
                      ["JWT", "auth-gated chat"],
                      ["∞", "persistent history"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-lg border border-border bg-surface-2 px-3 py-2">
                        <p className="font-mono text-sm font-semibold text-amber-400">{v}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-faint">{l}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="https://quick-chat-client.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-amber-400 px-4 py-2 font-mono text-xs font-semibold text-bg transition-all hover:bg-amber-400/90"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href="https://github.com/chandu954/QuickChat"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-border bg-bg px-4 py-2 font-mono text-xs text-body transition-colors hover:border-amber-400/50 hover:text-amber-400"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
                <div className="flex items-center border-t border-border bg-bg/50 p-7 sm:p-9 lg:border-l lg:border-t-0">
                  <QuickChatApp />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}