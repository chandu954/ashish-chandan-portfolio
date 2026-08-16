"use client";

import { openCollapse } from "./Collapse";

export default function OpenCaseStudy({
  target,
  className,
  children,
}: {
  target: string;
  className?: string;
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
      className={className}
    >
      {children}
    </a>
  );
}