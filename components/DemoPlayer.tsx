"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL = 52;
const OBJECTIVE = "Compare approaches to persistent memory in AI agents.";
const SUBTASKS = ["review memory patterns", "compare implementations", "assess trade-offs"];
const AGENTS = [
  { name: "research · memory", detail: "retrieved 12 sources" },
  { name: "research · eval", detail: "compared 3 frameworks" },
  { name: "research · synthesis", detail: "ranking hypotheses" },
];
const REPORT = [
  "Persistent memory retains context across runs — follow-ups skip re-searching.",
  "Agent coordination cuts duplicate retrieval via parallel delegation.",
  "Recommendation: memory-backed orchestration for multi-step research.",
];
const CITATIONS = ["[1]", "[2]", "[3]"];

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export default function DemoPlayer() {
  const [t, setT] = useState(0);
  const [userPlaying, setUserPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const last = useRef<number | null>(null);

  const playing = userPlaying && visible;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setVisible(e.isIntersecting);
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) {
      last.current = null;
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      return;
    }
    const loop = (now: number) => {
      if (last.current === null) last.current = now;
      const dt = (now - last.current) / 1000;
      last.current = now;
      setT((prev) => {
        const next = prev + dt;
        return next >= TOTAL ? 0 : next;
      });
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [playing]);

  const typedChars = clamp(Math.floor((t - 1) * 13), 0, OBJECTIVE.length);
  const typing = t >= 1 && t < 6;
  const subtaskIn = t >= 6;
  const planningDone = t >= 10;
  const agentStart = t >= 13;
  const agentProgress = AGENTS.map((_, i) =>
    agentStart ? clamp((t - 13 - i * 4) / 9, 0, 1) : 0
  );
  const memoryStart = t >= 30;
  const synthesisStart = t >= 34;
  const reportLines = REPORT.map((_, i) => (synthesisStart && t >= 34 + i * 3.5 ? i : null));
  const done = t >= 45;
  const pct = (t / TOTAL) * 100;

  return (
    <div ref={rootRef} className="overflow-hidden rounded-2xl border border-border bg-bg">
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-rose-400/70" />
            <span className="size-2.5 rounded-full bg-amber-400/70" />
            <span className="size-2.5 rounded-full bg-teal-400/70" />
          </span>
          <p className="font-mono text-xs text-body">research-swarm --demo</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`font-mono text-[10px] ${done ? "text-accent-2" : "text-faint"}`}>
            {done ? "rendered" : "recording"} · {fmt(t)} / {fmt(TOTAL)}
          </span>
          <span className="size-1.5 animate-pulse rounded-full bg-rose-400" aria-hidden="true" />
        </div>
      </div>

      <div className="space-y-4 p-4 font-mono text-[11px] leading-relaxed sm:p-5">
        <div>
          <p className="text-faint">$ swarm run --objective</p>
          <p className="mt-1 text-body">
            {OBJECTIVE.slice(0, typedChars)}
            {typing ? <span className="animate-pulse text-accent-2">▌</span> : null}
          </p>
        </div>

        {subtaskIn ? (
          <div>
            <p className="text-accent-2">
              {planningDone ? "✓" : "→"} planner · task decomposition
            </p>
            <div className="mt-2 grid gap-1.5 sm:grid-cols-3">
              {SUBTASKS.map((s, i) => (
                <div
                  key={s}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1.5 text-[10px] text-muted transition-opacity duration-500"
                  style={{ opacity: t >= 7 + i ? 1 : 0.25 }}
                >
                  <span className="text-faint">0{i + 1}</span> {s}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {agentStart ? (
          <div>
            <p className="text-accent-2">→ agents · running in parallel</p>
            <div className="mt-2 flex flex-col gap-2">
              {AGENTS.map((a, i) => {
                const p = agentProgress[i];
                const complete = p >= 1;
                return (
                  <div key={a.name} className="flex items-center gap-3">
                    <p className={`w-36 shrink-0 text-[10px] ${complete ? "text-accent-2" : "text-muted"}`}>
                      {complete ? "✓" : "●"} {a.name}
                    </p>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                      <div
                        className="h-full rounded-full bg-accent-2/70 transition-[width] duration-150"
                        style={{ width: `${p * 100}%` }}
                      />
                    </div>
                    <p className="w-32 shrink-0 text-right text-[10px] text-faint">
                      {complete ? a.detail : `${Math.round(p * 100)}%`}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {memoryStart ? (
          <p className="rounded-md border border-accent-2/25 bg-accent-2/5 px-3 py-2 text-[10px] text-accent-2">
            ✓ persistent memory — context from previous run loaded (2 prior sessions)
          </p>
        ) : null}

        {synthesisStart ? (
          <div>
            <p className="text-accent-2">→ synthesizing · source-grounded</p>
            <div className="mt-2 flex flex-col gap-1.5">
              {REPORT.map((line, i) =>
                reportLines[i] !== null ? (
                  <p key={line} className="rounded-md bg-surface-2 px-3 py-1.5 text-[11px] text-body">
                    {line}{" "}
                    <span className="text-faint">{CITATIONS[i]}</span>
                  </p>
                ) : null
              )}
            </div>
          </div>
        ) : null}

        {done ? (
          <p className="rounded-md border border-accent-2/40 bg-accent-2/10 px-3 py-2 text-[10px] text-accent-2">
            ✓ report ready — 100% of claims cited · replaying demo
          </p>
        ) : null}
      </div>

      <div className="flex items-center gap-3 border-t border-border px-4 py-3">
        <button
          type="button"
          onClick={() => setUserPlaying((p) => !p)}
          aria-label={playing ? "Pause demo" : "Play demo"}
          className="flex size-8 items-center justify-center rounded-lg border border-border bg-surface text-body transition-colors hover:border-accent-2/50 hover:text-accent-2"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86a1 1 0 0 0-1.5.86Z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          onClick={() => {
            setT(0);
            setUserPlaying(true);
          }}
          className="rounded-lg border border-border bg-surface px-2.5 py-1.5 font-mono text-[10px] text-muted transition-colors hover:border-accent-2/50 hover:text-accent-2"
        >
          ↺ restart
        </button>
        <div
          role="progressbar"
          aria-label="Demo progress"
          aria-valuemin={0}
          aria-valuemax={TOTAL}
          aria-valuenow={Math.floor(t)}
          className="h-1.5 flex-1 cursor-pointer overflow-hidden rounded-full bg-surface-2"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const ratio = clamp((e.clientX - rect.left) / rect.width, 0, 1);
            setT(ratio * TOTAL);
            setUserPlaying(true);
          }}
        >
          <div className="h-full rounded-full bg-accent-2/70" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
