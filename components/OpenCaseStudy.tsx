"use client";

import { openCollapse } from "./Collapse";

export default function OpenCaseStudy({
  target,
  children,
}: {
  target: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={`#${target}`}
      onClick={(e) => {
        e.preventDefault();
        openCollapse(target);
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }}
      className="rounded-lg border border-border bg-bg px-4 py-2 font-mono text-xs text-body transition-colors hover:border-accent/50 hover:text-accent"
    >
      {children}
    </a>
  );
}