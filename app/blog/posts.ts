export type Post = {
  slug: string;
  title: string;
  desc: string;
  date: string;
  status: "published" | "drafting";
  accent: "indigo" | "accent";
  blocks: (
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  )[];
};

export const POSTS: Post[] = [
  {
    slug: "building-elevas-ats-pipeline",
    title: "How I built Eleva's ATS scoring pipeline",
    desc: "Weighted keyword analysis, real parser simulation, and honest-AI guardrails — notes from a resume-optimization engine.",
    date: "Aug 2026",
    status: "published",
    accent: "indigo",
    blocks: [
      {
        type: "p",
        text: "Eleva's core loop is simple on paper: paste a job description, get a match score, tailor the resume, apply. The hard parts are in the middle — turning a resume into a score that actually tracks what screening systems care about, and rewriting content without inventing facts.",
      },
      {
        type: "h2",
        text: "Weighted keywords, not a word blender",
      },
      {
        type: "p",
        text: "The earliest version counted keyword overlaps between the JD and the resume. The result was a score that went up when you spammed terms, whether or not they belonged. The real system uses a weighted analysis: skills are scored by seniority signal, job-required proficiency, and how central they are to the role. A 3-line 'Kubernetes' mention under a project matters less than a 'distributed systems' section — and the parser should act like a recruiter, not a diff tool.",
      },
      {
        type: "h2",
        text: "Simulate the parser, don't approximate it",
      },
      {
        type: "ul",
        items: [
          "Parse structure: sections, headers, dates, skills lists are extracted first.",
          "Score across four axes: keyword alignment, experience relevance, formatting, recruiter signals.",
          "Expose the gaps directly — 'missing keywords: Kubernetes · CI/CD' — so the user knows what to fix.",
        ],
      },
      {
        type: "p",
        text: "Showing the per-axis breakdown matters more than the headline number. Users trust a 61 → 91 lift when they can see which keyword gaps closed and which bullets were strengthened.",
      },
      {
        type: "h2",
        text: "Honest AI as a product constraint",
      },
      {
        type: "p",
        text: "The tailoring step rewrites bullets, reorders skills, and strengthens impact language — but every suggestion must trace back to the resume. No fabricated employers, titles, projects, or metrics. Every change ships with a 'why', and the diff is reviewed before it's saved. That constraint is a feature: it's what makes the tailored versions safe to actually send.",
      },
      {
        type: "h2",
        text: "The provider router is the reliability story",
      },
      {
        type: "p",
        text: "Every LLM call goes through a provider-agnostic router with automatic fallback. When one provider rate-limits, the next takes over and the workflow continues. It's invisible when it works — and it's the difference between a demo and something you depend on during a search.",
      },
    ],
  },
  {
    slug: "what-career-systems-taught-me",
    title: "What building career software taught me about resumes",
    desc: "Hundreds of resumes parsed, scored, and tailored — the patterns that actually move the needle.",
    date: "Aug 2026",
    status: "published",
    accent: "accent",
    blocks: [
      {
        type: "p",
        text: "After building parsing, matching, and tailoring engines against hundreds of resumes and job descriptions, a few patterns keep showing up. These are the ones I'd put in front of anyone preparing a resume — including my own.",
      },
      {
        type: "h2",
        text: "1. Formatting is a signal, not decoration",
      },
      {
        type: "p",
        text: "Parsers extract text in order — sections, headers, dates, skills. Two-column layouts and infographic resumes scramble that order and lose real content. A clean single-column structure consistently scores higher across every axis we track.",
      },
      {
        type: "h2",
        text: "2. Missing keywords are cheaper to fix than missing experience",
      },
      {
        type: "p",
        text: "When a role requires distributed systems and your resume says 'backend', the gap is a phrasing problem — usually fixable in one pass with no fabrication. When a role requires a skill you don't have, no tailoring fixes it. Knowing which gap you're looking at saves hours.",
      },
      {
        type: "h2",
        text: "3. Impact verbs scale with seniority",
      },
      {
        type: "ul",
        items: [
          "'Worked on' buries the scale of your contribution.",
          "'Built and maintained backend APIs supporting internal workflows and external integrations' carries the same fact with context.",
          "Numbers matter — but only numbers the resume can support.",
        ],
      },
      {
        type: "h2",
        text: "4. The score is a mirror, not a target",
      },
      {
        type: "p",
        text: "A 91 doesn't mean you'll get the job — it means the resume passes the screen. That's the point: get past the machine fairly, then let the real conversation begin.",
      },
    ],
  },
  {
    slug: "tenant-isolated-rag-in-practice",
    title: "Building tenant-isolated RAG in practice",
    desc: "JWT scoping, metadata filters, and the security review that held up — how I kept one organization's data out of another's retrieval.",
    date: "Aug 2026",
    status: "published",
    accent: "accent",
    blocks: [
      {
        type: "p",
        text: "The Hyacinte AI backend serves bilingual (EN/FR) executive intelligence to multiple organizations. One hard requirement drove most of the architecture: no organization's documents could ever surface in another's answers. Tenant isolation isn't a feature you bolt on — it has to live at every layer, especially retrieval.",
      },
      {
        type: "h2",
        text: "Isolation starts before the vector store",
      },
      {
        type: "p",
        text: "Every request carries a JWT. The token's claims resolve to a tenant ID, and that ID must thread through authentication (RBAC in PostgreSQL), through the API layer, and into the retrieval query itself. If any layer drops the tenant context, the whole guarantee is gone — so the tenant ID is passed explicitly on every request object, never read from the body.",
      },
      {
        type: "h2",
        text: "Metadata filters do the heavy lifting",
      },
      {
        type: "ul",
        items: [
          "Every document chunk is embedded with tenant_id in its vector metadata.",
          "Every search query filters on tenant_id — not just in application code, but inside the Qdrant query itself.",
          "Retrieval is scoped to the authenticated organization at the query layer, so even a misrouted request can't cross boundaries.",
        ],
      },
      {
        type: "h2",
        text: "The review that mattered",
      },
      {
        type: "p",
        text: "The client ran their own security review against the isolation model. The test: load documents into two tenants, query as tenant A, and look for tenant B content. Zero leaks across every attempt. That review result is worth more than any architecture diagram — it's the claim verified by someone with a stake in it being true.",
      },
      {
        type: "p",
        text: "The pattern generalizes: whenever you build multi-tenant AI systems, treat the tenant boundary as a security control, design the query path so it cannot be bypassed, and then prove it with a red-team style test.",
      },
    ],
  },
  {
    slug: "why-i-eval-everything",
    title: "Why I eval every AI system before I call it done",
    desc: "RAGAS faithfulness, context precision, and the discipline of measuring before claiming — a case for evals as a deliverable, not an afterthought.",
    date: "Aug 2026",
    status: "published",
    accent: "accent",
    blocks: [
      {
        type: "p",
        text: "Anyone can demo a RAG pipeline. The gap between demo and production is whether the system's claims are measured. I started treating evals as a deliverable on Hyacinte: the backend ships with a RAGAS harness, and every change to retrieval or generation has to move the numbers before it ships.",
      },
      {
        type: "h2",
        text: "What I measure and why",
      },
      {
        type: "ul",
        items: [
          "Faithfulness — are the answers grounded in the retrieved context? (RAGAS)",
          "Context precision — does the retrieved context contain what the answer needs? (RAGAS)",
          "Cross-tenant leakage — the security eval that never gets skipped.",
          "Cost per query — tracked on every run; when it drifts, something changed.",
        ],
      },
      {
        type: "h2",
        text: "Evals change what gets shipped",
      },
      {
        type: "p",
        text: "Before the harness, I shipped features and hoped. After it, a chunking change that moved faithfulness several points was a decision with evidence. A reranker that added latency but gained context precision was a trade-off I could defend. Without numbers, those are opinions.",
      },
      {
        type: "h2",
        text: "The honest part",
      },
      {
        type: "p",
        text: "Evals are only as good as the eval set. A hand-built bilingual question set is better than a synthetic one that mirrors your own biases — and the benchmark should be extended every time a user asks a question that fails. The discipline is boring, and that's exactly why most teams skip it.",
      },
    ],
  },
  {
    slug: "provider-failover-without-downtime",
    title: "Provider failover without downtime: routing LLM calls like traffic",
    desc: "Rate limits happen, providers go down, and workflows still finish — how Eleva's provider-agnostic router keeps LLM calls moving.",
    date: "Aug 2026",
    status: "drafting",
    accent: "indigo",
    blocks: [
      {
        type: "p",
        text: "A resume optimization workflow makes several LLM calls per run. If any single call dies to a rate limit, the user's session is toast — mid-tailoring, with no result. Eleva routes every call through a provider-agnostic layer with automatic failover: when one provider says no, the next one takes the request and the workflow continues.",
      },
      {
        type: "h2",
        text: "Failover is a routing problem, not a retry problem",
      },
      {
        type: "p",
        text: "A naive retry loop waits, fails, and eventually errors out. A router treats providers as interchangeable capacity: it tracks which provider is healthy, retries on another provider when one rate-limits, and never lets a single vendor outage kill a user's run.",
      },
      {
        type: "ul",
        items: [
          "Requests carry a provider-agnostic intent; the router picks the provider at call time.",
          "Rate-limit responses trigger failover, not user-visible errors.",
          "Timeouts and retries are per-provider, so a slow provider doesn't stall the workflow.",
          "The router is invisible when it works — which is the point.",
        ],
      },
      {
        type: "h2",
        text: "The demo vs. production difference",
      },
      {
        type: "p",
        text: "I've watched a provider outage hit during a live walkthrough and the workflow just… continued. That moment is why the router exists: users don't care which model answered — they care that the run finished.",
      },
    ],
  },
];

export const POST_BY_SLUG = Object.fromEntries(
  POSTS.map((p) => [p.slug, p]),
);