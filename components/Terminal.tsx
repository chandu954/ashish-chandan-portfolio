"use client";

import { useEffect, useState } from "react";

type CmdLine = { type: "cmd" | "out" | "ok"; text: string };

const SCRIPT: CmdLine[] = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Ashish Chandan" },
  { type: "cmd", text: "role" },
  { type: "out", text: "AI Engineer · Full-Stack Developer" },
  { type: "cmd", text: "focus" },
  { type: "out", text: "RAG / Multi-Agent Systems / LLM Products" },
  { type: "cmd", text: "stack" },
  { type: "out", text: "Python · TypeScript · Next.js · FastAPI" },
  { type: "cmd", text: "status" },
  { type: "ok", text: "✓ Research Swarm — shipped" },
  { type: "cmd", text: "eleva --score" },
  { type: "ok", text: "✓ ATS 61 → 91 · 4 keyword gaps closed" },
  { type: "cmd", text: "projects --count" },
  { type: "ok", text: "✓ 6 shipped · 4 live on vercel" },
  { type: "cmd", text: "contact" },
  { type: "out", text: "ashishchandan0425@gmail.com" },
];

const TYPING_MS = 26;
const LINE_GAP_MS = 320;

export default function Terminal() {
  const [visible, setVisible] = useState(0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    const current = SCRIPT[visible - 1];
    if (current && current.type === "cmd" && typed < current.text.length) {
      const t = setTimeout(() => setTyped((n) => n + 1), TYPING_MS);
      return () => clearTimeout(t);
    }
    if (visible >= SCRIPT.length) return;
    const t = setTimeout(() => {
      setTyped(0);
      setVisible((n) => n + 1);
    }, LINE_GAP_MS);
    return () => clearTimeout(t);
  }, [visible, typed]);

  const prompt = <span className="text-accent">➜</span>;

  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40"
      role="img"
      aria-label="Terminal showing Ashish's tech stack"
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="font-mono text-[10px] text-faint">ashish@dev: ~/portfolio</p>
      </div>

      <div className="min-h-[220px] px-4 py-4 font-mono text-[13px] leading-7">
        {SCRIPT.slice(0, visible).map((line, i) => {
          const isCurrent = i === visible - 1 && line.type === "cmd";
          const shown = isCurrent ? line.text.slice(0, typed) : line.text;
          return (
            <p
              key={i}
              className={
                line.type === "out"
                  ? "text-muted"
                  : line.type === "ok"
                    ? "text-accent"
                    : "text-body"
              }
            >
              {line.type === "cmd" ? (
                <span className="mr-2 select-none">{prompt}</span>
              ) : (
                <span className="mr-2 select-none text-faint">|</span>
              )}
              {shown}
              {isCurrent ? (
                <span className="animate-caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent" />
              ) : null}
            </p>
          );
        })}
      </div>
    </div>
  );
}