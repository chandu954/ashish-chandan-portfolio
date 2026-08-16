"use client";

import { useState } from "react";

export default function Details({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 border-t border-border">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full items-center justify-between gap-4 py-3.5 text-left"
      >
        <span className="font-mono text-xs text-body transition-colors group-hover:text-accent">
          {label}
        </span>
        <span
          aria-hidden="true"
          className={`font-mono text-xs text-faint transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          →
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
