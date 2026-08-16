"use client";

import { useEffect, useState } from "react";

const registry = new Map<string, (open: boolean) => void>();

export function openCollapse(id: string) {
  registry.get(id)?.(true);
}

export default function Collapse({
  label,
  hint,
  defaultOpen = false,
  id,
  children,
}: {
  label: string;
  hint: string;
  defaultOpen?: boolean;
  id?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => {
    if (!id) return;
    registry.set(id, setOpen);
    return () => {
      registry.delete(id);
    };
  }, [id]);

  return (
    <section className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 text-left transition-colors hover:border-accent/40 sm:px-6"
        >
          <div className="min-w-0">
            <p className="font-mono text-xs text-body transition-colors group-hover:text-accent">
              {label}
            </p>
            <p className="mt-1 font-mono text-[10px] text-faint">{hint}</p>
          </div>
          <span
            aria-hidden="true"
            className={`flex shrink-0 items-center gap-2 font-mono text-xs text-muted transition-colors group-hover:text-accent ${
              open ? "text-accent" : ""
            }`}
          >
            {open ? "collapse" : "read full case study"}
            <span
              className={`inline-block transition-transform duration-200 ${
                open ? "rotate-90" : ""
              }`}
            >
              →
            </span>
          </span>
        </button>
      </div>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </section>
  );
}
