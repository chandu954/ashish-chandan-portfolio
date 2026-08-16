"use client";

import Terminal from "./Terminal";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/chandu954",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-chandan",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ashishchandan0425@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div className="glow-hero absolute -top-24 left-0 right-0 h-[420px]" aria-hidden="true" />
      <div className="glow-accent absolute -right-24 top-40 h-[380px] w-full" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-12 pb-14 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:pt-16 lg:pb-16">
        <div className="hero-rise">
          <p className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="animate-ping-dot inline-block size-2 rounded-full bg-accent" />
            Available for AI / Full-Stack opportunities · Pune, India
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
            Ashish <span className="text-accent">Chandan</span>
          </h1>

          <p className="mt-3 font-mono text-sm text-accent-2 sm:text-base">
            AI Engineer &amp; Full-Stack Developer
          </p>
          <p className="mt-2 font-mono text-xs text-faint sm:text-[13px]">
            targeting — AI Engineer · ML Engineer · AI-focused Full-Stack Engineer
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build production-oriented AI systems — RAG pipelines,
            multi-agent workflows, LLM applications, and{" "}
            <span className="text-body">scalable APIs</span>.
          </p>

          <p className="mt-5 font-mono text-xs text-faint sm:text-[13px]">
            RAG · LLMs · AI Agents · Python · TypeScript · FastAPI · Next.js
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:bg-accent-strong hover:shadow-lg hover:shadow-accent/20"
            >
              View Selected Work
              <svg
                className="size-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="/Ashish_Chandan_ATS_Resume.pdf"
              download
              className="rounded-lg border border-border bg-surface px-5 py-2.5 font-mono text-sm text-body transition-colors hover:border-accent/50"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                {s.icon}
              </a>
            ))}
            <span className="ml-2 hidden font-mono text-xs text-faint sm:inline">
              github.com/chandu954 · Ashish Chandan
            </span>
          </div>
        </div>

        <div className="hero-rise hidden sm:block" style={{ animationDelay: "0.2s" }}>
          <Terminal />
        </div>
      </div>

      <div className="relative border-t border-border">
        <p className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1.5 px-5 py-4 font-mono text-[11px] text-muted sm:px-8 sm:text-xs">
          <span className="text-accent">{"// current focus"}</span>
          <span>AI Systems</span>
          <span className="text-faint">·</span>
          <span>RAG</span>
          <span className="text-faint">·</span>
          <span>Agent Workflows</span>
          <span className="text-faint">·</span>
          <span>LLM Products</span>
          <span className="text-faint">·</span>
          <span>Full-Stack Engineering</span>
        </p>
      </div>
    </section>
  );
}