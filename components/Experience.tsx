import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import StackBlock from "./StackBlock";
import Details from "./Details";

function Bullet({ children }: { children: string }) {
  const parts = children.split(/(\d+(?:\.\d+)?%|~\d+ms|\d+ms|\d+\+ REST APIs|15\+)/g);
  return (
    <li className="flex gap-3">
      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
      <span>
        {parts.map((part, i) =>
          /^~?\d+(?:\.\d+)?%$|^~?\d+ms$|^\d+\+ REST APIs$|^15\+$/.test(part) ? (
            <strong key={i} className="font-semibold text-accent">
              {part}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    </li>
  );
}

function MonoLabel({ children }: { children: string }) {
  return <p className="font-mono text-[11px] uppercase tracking-wider text-faint">{children}</p>;
}

const IMPACT = [
  { value: "10+", label: "REST APIs" },
  { value: "<200ms", label: "average response time" },
  { value: "60%", label: "faster issue resolution" },
  { value: "15+", label: "websites automated" },
  { value: "80%", label: "less manual data entry" },
  { value: "50%", label: "fewer environment issues" },
];

type Role = {
  role: string;
  company: string;
  meta: string;
  summary: string;
  bullets: string[];
  extra?: string[];
  stack: [string, string][];
};

const ROLES: Role[] = [
  {
    role: "Freelance Full Stack Developer",
    company: "Hyacinte AI",
    meta: "May – Jun 2026 · Remote · Ghana-based client",
    summary:
      "Owned the complete backend for a bilingual (EN/FR) AI executive-intelligence platform serving the ECOWAS region — retrieval, APIs, ingestion, and deployment.",
    bullets: [
      "Built the backend prototype — multi-tenant RAG on FastAPI, Qdrant, PostgreSQL, and Redis.",
      "Enforced tenant isolation at the query layer — JWT + RBAC scoping with tenant IDs in vector metadata, so no organization's data crossed into another's retrieval.",
      "Engineered source-grounded responses — generation on Mistral Large 2 via AWS Bedrock, grounded strictly in retrieved, cited context.",
      "Implemented async document ingestion — OCR, semantic chunking, and embedding generation running as Redis + Dramatiq background jobs.",
      "Built the API layer on async FastAPI + SQLAlchemy 2.0 + asyncpg for non-blocking request handling.",
      "Measured retrieval quality with a RAGAS harness — faithfulness and context precision tracked on the bilingual eval set.",
      "Containerized all services with Docker and shipped a runbook for clean handoff.",
    ],
    extra: [
      "Authentication & authorization — PostgreSQL-backed RBAC with JWT-issued tenant context on every request.",
      "Coordinated four services (API, workers, Qdrant, PostgreSQL) behind containerized deployment.",
    ],
    stack: [
      ["backend", "FastAPI · SQLAlchemy 2.0 · asyncpg"],
      ["ai / retrieval", "Qdrant · Sentence Transformers · AWS Bedrock · Mistral Large 2"],
      ["data & access", "PostgreSQL · RBAC · JWT"],
      ["async processing", "Redis · Dramatiq"],
      ["infrastructure", "Docker"],
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Urbanroof Pvt. Ltd.",
    meta: "Oct 2025 – Feb 2026",
    summary:
      "Shipped full-stack product features and AI support systems — frontend, backend APIs, and data automation — to production.",
    bullets: [
      "Built a RAG-based AI support chatbot — Next.js with Claude / OpenAI APIs and Pinecone retrieval.",
      "Developed 10+ REST APIs on FastAPI for product workflows, holding average response time under 200ms.",
      "Cut issue resolution time by 60% via tighter integration between the AI answer path and existing workflows.",
      "Automated data collection across 15+ websites with Selenium + BeautifulSoup, cutting manual data entry by 80%.",
      "Standardized scraped data into JSON consumed by 3 downstream services.",
      "Containerized services with Docker and integrated AWS S3 — environment-related issues down 50%.",
    ],
    extra: [
      "Implemented responsive Next.js 15 interfaces from Figma designs.",
      "Collaborated across frontend and backend teams on production releases.",
    ],
    stack: [
      ["frontend", "Next.js 15 · React"],
      ["backend", "FastAPI · REST APIs"],
      ["ai / rag", "Pinecone · Claude · OpenAI APIs"],
      ["automation", "Selenium · BeautifulSoup"],
      ["infrastructure", "AWS S3 · Docker"],
    ],
  },
  {
    role: "Software Intern",
    company: "ScaleFull Technologies",
    meta: "Mar – Aug 2025",
    summary:
      "Early-career frontend engineering — the foundation the later full-stack and AI work builds on.",
    bullets: [
      "Built responsive websites and reusable UI components from business and client requirements.",
      "Debugged cross-browser compatibility issues across delivered interfaces.",
      "Collaborated on planning and delivery within a cross-functional team.",
    ],
    stack: [
      ["frontend", "JavaScript · HTML/CSS"],
      ["tools", "Git · Jira"],
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeader
            index="02"
            title="Experience"
            subtitle="Internship to freelance — three roles, shipped to production."
          />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent">{"//"}</span>
              <p className="font-mono text-sm font-medium text-body">
                selected engineering impact
              </p>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
              {IMPACT.map((m) => (
                <div key={m.label} className="min-w-0">
                  <dd className="text-2xl font-semibold tracking-tight text-accent">
                    {m.value}
                  </dd>
                  <dt className="mt-1 text-xs leading-snug text-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-4 font-mono text-[10px] text-faint">
              from my work at Urbanroof — shipped to production
            </p>
          </div>
        </Reveal>

        <div className="relative ml-1 mt-12 border-l border-border pl-8 sm:ml-2 sm:pl-10">
          {ROLES.map((r, i) => (
            <Reveal key={r.company} delay={i * 0.06}>
              <article className="relative pb-14 last:pb-0">
                <span
                  className="absolute top-1.5 -left-[41px] size-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[49px]"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {r.role}
                  </h3>
                  <span className="text-accent">@ {r.company}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-faint">{r.meta}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                  {r.summary}
                </p>

                <div className="mt-5">
                  <MonoLabel>key contributions</MonoLabel>
                  <ul className="mt-2.5 flex list-none flex-col gap-2 text-sm leading-relaxed text-muted">
                    {r.bullets.map((b) => (
                      <Bullet key={b}>{b}</Bullet>
                    ))}
                  </ul>
                </div>

                {r.extra ? (
                  <Details label="engineering details">
                    <div className="flex flex-col gap-5">
                      <div>
                        <MonoLabel>implementation</MonoLabel>
                        <ul className="mt-2.5 flex list-none flex-col gap-2 text-sm leading-relaxed text-muted">
                          {r.extra.map((b) => (
                            <Bullet key={b}>{b}</Bullet>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <MonoLabel>technical environment</MonoLabel>
                        <div className="mt-2.5">
                          <StackBlock groups={r.stack} />
                        </div>
                      </div>
                    </div>
                  </Details>
                ) : (
                  <div className="mt-5">
                    <MonoLabel>technical environment</MonoLabel>
                    <div className="mt-2.5">
                      <StackBlock groups={r.stack} />
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}