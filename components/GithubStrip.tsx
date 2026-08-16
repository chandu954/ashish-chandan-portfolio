"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Repo = {
  full_name: string;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
};

const WANTED = [
  "Research-Swarm",
  "Eleva",
  "ai-workflow-infrastructure-platform",
  "QuickCart",
  "khetika-webapp",
  "QuickChat",
];

export default function GithubStrip() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/users/chandu954/repos?per_page=100&sort=pushed")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((all: Repo[]) => {
        if (cancelled) return;
        const picked = WANTED.map((name) => all.find((r) => r.name === name))
          .filter((r): r is Repo => Boolean(r));
        setRepos(picked);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="scroll-mt-20 border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <SectionHeader
            index="03"
            title="Open source"
            subtitle="Live data pulled from the GitHub API — stars and activity change as the repos do."
          />
        </Reveal>

        {failed ? (
          <Reveal>
            <p className="rounded-xl border border-border bg-surface p-6 font-mono text-xs text-faint">
              {"//"} github api unreachable — the repos live at{" "}
              <a
                href="https://github.com/chandu954"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                github.com/chandu954
              </a>
            </p>
          </Reveal>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(repos ?? Array.from({ length: 6 })).map((r, i) => (
              <Reveal key={r && typeof r === "object" ? r.full_name : `skeleton-${i}`} delay={i * 0.04}>
                {r ? (
                  <a
                    href={`https://github.com/${r.full_name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-mono text-xs text-accent">
                        {r.name.replace(/-/g, " ")}
                      </p>
                      <span className="flex shrink-0 items-center gap-1 font-mono text-[10px] text-muted">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="size-3" aria-hidden="true">
                          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                        </svg>
                        {r.stargazers_count}
                      </span>
                    </div>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted">
                      {r.description ?? "Repository"}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-muted">
                        {r.language ?? "—"}
                      </span>
                      <span className="font-mono text-[10px] text-faint">
                        pushed {r.pushed_at.slice(0, 10)}
                      </span>
                    </div>
                  </a>
                ) : (
                  <div className="h-full animate-pulse rounded-2xl border border-border bg-surface p-5">
                    <div className="h-3 w-1/2 rounded bg-surface-2" />
                    <div className="mt-3 h-3 w-full rounded bg-surface-2" />
                    <div className="mt-2 h-3 w-3/4 rounded bg-surface-2" />
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
