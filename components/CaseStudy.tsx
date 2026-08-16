"use client";

import { useState } from "react";
import Reveal from "./Reveal";

function Label({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
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

function HyacinteStatus() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <p className="font-mono text-xs text-body">hyacinte</p>
        <span className="rounded-md bg-accent/15 px-2 py-0.5 font-mono text-[10px] text-accent">
          delivered
        </span>
      </div>
      <div className="space-y-2 p-4 font-mono text-[11px] leading-relaxed">
        <p className="text-faint">$ hyacinte --status</p>
        {[
          "prototype — working",
          "2-month freelance engagement",
          "tenant isolation — enforced at query layer",
          "source grounding — cited responses",
          "language support — EN / FR",
          "eval — RAGAS harness · bilingual set",
        ].map((line) => (
          <p key={line} className="text-accent">
            ✓ {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function HyacinteDemo() {
  const [lang, setLang] = useState<"en" | "fr">("en");
  const [active, setActive] = useState<number | null>(null);

  const question =
    lang === "en"
      ? "What changed in the regional market this quarter?"
      : "Qu&apos;est-ce qui a changé sur le marché régional ce trimestre ?";

  const sentences =
    lang === "en"
      ? [
          "The latest reports indicate a shift in regional trade priorities, driven by renewed infrastructure commitments.",
          "A revised ECOWAS framework reweights export partnerships across the region.",
          "Francophone news coverage adds sourcing depth in French-language markets.",
        ]
      : [
          "Les derniers rapports indiquent un changement de priorités commerciales régionales, porté par de nouveaux engagements d&apos;infrastructure.",
          "Un cadre révisé de la CEDEAO rééquilibre les partenariats d&apos;exportation dans la région.",
          "La couverture d&apos;actualité francophone renforce la profondeur des sources sur les marchés francophones.",
        ];

  const sources = ["Market Report · Q1", "Policy Brief · ECOWAS", "News Digest · FR"];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg text-left">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
        <p className="font-mono text-xs text-body">Executive Intelligence</p>
        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px]">
          <div className="flex overflow-hidden rounded-md border border-border">
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={[
                  "px-2 py-0.5 text-[10px] uppercase transition-colors",
                  lang === l ? "bg-accent text-bg" : "text-muted hover:text-body",
                ].join(" ")}
              >
                {l}
              </button>
            ))}
          </div>
          <span className="rounded-md bg-surface-2 px-1.5 py-0.5 text-muted">
            tenant scoped
          </span>
          <span className="rounded-md bg-surface-2 px-1.5 py-0.5 text-muted">
            3 sources
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="rounded-lg border border-border bg-surface-2 p-3">
          <p className="font-mono text-[10px] text-faint">question</p>
          <p className="mt-1.5 text-sm leading-relaxed text-body">
            &ldquo;{question}&rdquo;
          </p>
        </div>

        <div className="mt-4 rounded-lg border border-accent/25 bg-accent/5 p-3">
          <p className="flex items-center gap-1.5 font-mono text-[10px] text-accent">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            ai response
          </p>
          <div className="mt-1.5 flex flex-col gap-1 text-[13px] leading-relaxed">
            {sentences.map((s, i) => (
              <p
                key={i}
                className={[
                  "rounded-md px-2 py-1 transition-colors",
                  active === i ? "bg-accent/15 text-body" : "text-muted",
                ].join(" ")}
              >
                {s}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-3">
          <p className="font-mono text-[10px] text-faint">
            sources — click one to highlight the sentence it supports
          </p>
          <ul className="mt-2 flex list-none flex-col gap-1">
            {sources.map((s, i) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => setActive(active === i ? null : i)}
                  className={[
                    "flex w-full items-center gap-2 rounded-md px-2 py-1 text-left font-mono text-[11px] transition-colors",
                    active === i
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:bg-surface-2 hover:text-body",
                  ].join(" ")}
                >
                  <span className="text-faint">{String(i + 1).padStart(2, "0")}</span>
                  <span>{s}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const QUERY_PATH = [
  "User Query",
  "JWT + Tenant ID",
  "Retrieval — Qdrant",
  "Retrieved Context",
  "Mistral Large · AWS Bedrock",
  "Cited Response",
];

const INGESTION_PATH = ["Documents", "OCR", "Semantic Chunking", "Embeddings", "Qdrant"];

const HIGHLIGHTS = [
  {
    n: "01",
    title: "Tenant Isolation",
    text: "Every retrieval request is scoped to the authenticated organization — preventing cross-tenant data exposure.",
    chain: "JWT → RBAC → tenant metadata → filtered retrieval",
    foot: "",
  },
  {
    n: "02",
    title: "Async Ingestion",
    text: "Document processing never blocks the API — OCR, chunking, and embeddings run as background jobs.",
    chain: "upload → queue → OCR → chunk → embed → vector db",
    foot: "Redis + Dramatiq workers",
  },
  {
    n: "03",
    title: "Grounded Generation",
    text: "The model receives retrieved, cited context rather than answering from an unrestricted knowledge base.",
    chain: "question → retrieve → cite → generate",
    foot: "",
  },
];

const DECISIONS = [
  {
    q: "Why Qdrant?",
    a: "A vector store built for metadata filtering — every search can be scoped to an organization in the query itself.",
  },
  {
    q: "Why async workers?",
    a: "OCR, chunking, and embedding are expensive — background jobs keep ingestion off the request path.",
  },
  {
    q: "Why source-grounded generation?",
    a: "Generation is constrained to retrieved context with exposed citations, reducing unsupported answers.",
  },
];

const BUILT = [
  "Multi-tenant RAG backend — Qdrant retrieval, Sentence Transformers embeddings, Mistral Large 2 via AWS Bedrock.",
  "Tenant-isolated retrieval — JWT + RBAC scope every query; tenant IDs live in vector metadata.",
  "Async document pipeline — OCR, semantic chunking, and embeddings run as Redis + Dramatiq background jobs.",
  "Dockerized deployment — all services containerized with a runbook.",
];

const OUTCOME = [
  ["Working prototype", "2 months, delivered"],
  ["EN / FR", "bilingual intelligence"],
  ["Tenant isolated", "organization-scoped retrieval"],
  ["Async pipeline", "OCR → chunks → embeddings"],
  ["Source grounded", "cited responses"],
];

const EVALS = [
  ["RAGAS", "faithfulness + context precision"],
  ["0", "cross-tenant leaks · audit"],
  ["EN/FR", "bilingual eval set"],
  ["tracked", "cost per grounded query"],
];

const STACK = [
  ["AI", "Mistral Large · AWS Bedrock · Sentence Transformers"],
  ["Backend", "FastAPI · SQLAlchemy · asyncpg"],
  ["Data", "PostgreSQL · Qdrant · Redis"],
  ["Processing", "OCR · Semantic Chunking · Embeddings · Dramatiq"],
  ["Infrastructure", "Docker · Containerized Services"],
];

export default function CaseStudy() {
  return (
    <section id="case-study" className="scroll-mt-20 border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
            <span className="text-faint">{"//"}</span> client project · freelance
          </p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Hyacinte AI
              </h2>
              <p className="mt-3 text-lg font-medium text-body">
                Production RAG infrastructure for executive intelligence.
              </p>
              <p className="mt-2 leading-relaxed text-muted">
                A bilingual EN/FR AI platform that delivers source-grounded
                answers across organizations — with tenant-isolated retrieval
                and asynchronous document processing.
              </p>
              <p className="mt-4 font-mono text-xs text-faint">
                freelance full-stack developer · 2-month engagement
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["FastAPI", "Qdrant", "PostgreSQL", "Redis", "Mistral", "AWS Bedrock", "Docker"].map(
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
                  href="#projects"
                  className="rounded-lg border border-border bg-surface px-4 py-2.5 font-mono text-xs text-body transition-colors hover:border-accent/50 hover:text-accent"
                >
                  Back to Work ↑
                </a>
                <a
                  href="mailto:ashishchandan0425@gmail.com"
                  className="rounded-lg bg-accent px-4 py-2.5 font-mono text-xs font-semibold text-bg transition-all hover:bg-accent-strong"
                >
                  Ask me about this project ↗
                </a>
              </div>
            </div>
            <div>
              <HyacinteStatus />
            </div>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col gap-14">
          <Reveal>
            <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
              <Label>my contribution</Label>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Freelance Full-Stack Developer — I owned the backend prototype
                and AI infrastructure:
              </p>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-body">
                RAG retrieval · tenant isolation · document ingestion · async
                processing · API layer · LLM integration · containerized
                deployment
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Label>the problem</Label>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted">
              A bilingual executive-intelligence platform needed{" "}
              <strong className="font-semibold text-body">
                source-grounded answers across multiple organizations
              </strong>{" "}
              — with each tenant&apos;s data fully isolated from the others,
              and answers available in both English and French.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              <span className="font-mono text-[11px] text-accent">
                why it matters —{" "}
              </span>
              ungrounded answers in executive intelligence are worse than none;
              the architecture&apos;s whole job is making sure each response is
              traceable to the right tenant&apos;s sources, in either language.
            </p>
          </Reveal>

          <Reveal>
            <Label>what i built</Label>
            <ul className="mt-3 flex list-none flex-col gap-2.5 text-sm leading-relaxed text-muted">
              {BUILT.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    className="mt-2.5 size-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <Label>how it works</Label>
            <div className="mt-4 grid gap-8 sm:grid-cols-2">
              <FlowColumn label="query path" steps={QUERY_PATH} />
              <FlowColumn label="documents" steps={INGESTION_PATH} />
            </div>
          </Reveal>

          <Reveal>
            <Label>engineering highlights</Label>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.n}
                  className="flex flex-col rounded-xl border border-border bg-surface p-5"
                >
                  <p className="font-mono text-xs text-accent">{h.n}</p>
                  <h3 className="mt-1 text-sm font-semibold text-body">{h.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{h.text}</p>
                  <div className="mt-4 rounded-md border border-border bg-bg px-3 py-2 font-mono text-[10px] leading-relaxed text-accent">
                    {h.chain}
                  </div>
                  {h.foot ? (
                    <p className="mt-2.5 font-mono text-[10px] text-faint">{h.foot}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Label>technical decisions</Label>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {DECISIONS.map((d) => (
                <div key={d.q} className="rounded-xl border border-border bg-surface p-5">
                  <h3 className="font-mono text-sm text-accent">{d.q}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">{d.a}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Label>inside the system</Label>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
              The executive-intelligence interface — try the EN/FR toggle, and
              click a source to see the sentence it supports.
            </p>
            <div className="mt-4">
              <HyacinteDemo />
            </div>
          </Reveal>

          <Reveal>
            <Label>outcome</Label>
            <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
              {OUTCOME.map(([big, small]) => (
                <div key={big} className="bg-surface p-4">
                  <p className="font-mono text-sm font-semibold text-body">{big}</p>
                  <p className="mt-1 font-mono text-[10px] leading-relaxed text-faint">
                    {small}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              Delivered a working bilingual executive-intelligence prototype
              covering retrieval, ingestion, API infrastructure, and
              containerized deployment.
            </p>
          </Reveal>

          <Reveal>
            <Label>evaluation</Label>
            <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {EVALS.map(([big, small]) => (
                <div key={big} className="bg-surface p-4">
                  <p className="font-mono text-sm font-semibold text-accent">{big}</p>
                  <p className="mt-1 font-mono text-[10px] leading-relaxed text-faint">
                    {small}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
              Measured with RAGAS on the bilingual eval set — retrieval
              quality, grounding, and isolation are verified, not assumed.
              Costs reflect Bedrock on-demand pricing.
            </p>
          </Reveal>

          <Reveal>
            <Label>technical stack</Label>
            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface">
              {STACK.map(([group, items], i) => (
                <div
                  key={group}
                  className={
                    i > 0
                      ? "border-t border-border px-5 py-3.5 sm:px-6"
                      : "px-5 py-3.5 sm:px-6"
                  }
                >
                  <div className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-4">
                    <p className="font-mono text-[11px] text-accent">{group}</p>
                    <p className="font-mono text-[11px] leading-relaxed text-muted">
                      {items}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <a
                href="#projects"
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                ← Back to Work
              </a>
              <a
                href="mailto:ashishchandan0425@gmail.com"
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                ask me about this project ↗
              </a>
              <a
                href="#experience"
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                Next — my experience ↓
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}