"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { openCollapse } from "./Collapse";

type Action =
  | { kind: "section"; id: string; label: string; hint: string }
  | { kind: "link"; href: string; label: string; hint: string }
  | { kind: "download"; label: string; hint: string };

export const ACTIONS: Action[] = [
  { kind: "section", id: "top", label: "Go to hero", hint: "start" },
  { kind: "section", id: "projects", label: "View projects", hint: "01 · selected work" },
  { kind: "section", id: "resume", label: "Resume optimization demo", hint: "04 · before / after" },
  { kind: "section", id: "case-study", label: "Read the case study", hint: "hyacinte ai" },
  { kind: "section", id: "experience", label: "View experience", hint: "02 · work history" },
  { kind: "section", id: "skills", label: "Technical stack", hint: "06 · skill matrix" },
  { kind: "section", id: "education", label: "Education", hint: "07 · background" },
  { kind: "section", id: "contact", label: "Contact me", hint: "08 · let's talk" },
  {
    kind: "link",
    href: "https://eleva-beige.vercel.app/eleva",
    label: "Open Eleva — live demo",
    hint: "AI career workspace ↗",
  },
  {
    kind: "link",
    href: "https://research-swarm-omega.vercel.app/",
    label: "Open Research Swarm",
    hint: "multi-agent research ↗",
  },
  {
    kind: "link",
    href: "https://quick-cart-woad-omega.vercel.app",
    label: "Open QuickCart",
    hint: "e-commerce storefront ↗",
  },
  {
    kind: "link",
    href: "https://khetika-webapp.vercel.app",
    label: "Open Khetika",
    hint: "voice-enabled retail ↗",
  },
  {
    kind: "link",
    href: "https://github.com/chandu954",
    label: "GitHub profile",
    hint: "chandu954 ↗",
  },
  {
    kind: "link",
    href: "https://www.linkedin.com/in/ashish-chandan-4421a2259",
    label: "LinkedIn",
    hint: "ashish-chandan ↗",
  },
  {
    kind: "download",
    label: "Download ATS resume",
    hint: "Ashish_Chandan_ATS_Resume.pdf",
  },
];

function run(action: Action) {
  if (action.kind === "section") {
    if (action.id === "case-study") openCollapse("hyacinte-case");
    document.getElementById(action.id)?.scrollIntoView({ behavior: "smooth" });
  } else if (action.kind === "link") {
    window.open(action.href, "_blank", "noreferrer");
  } else {
    const a = document.createElement("a");
    a.href = "/Ashish_Chandan_ATS_Resume.pdf";
    a.download = "Ashish_Chandan_ATS_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const paletteRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement;
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (lastFocused.current) {
      lastFocused.current.focus();
      lastFocused.current = null;
    }
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ACTIONS;
    return ACTIONS.filter((a) =>
      `${a.label} ${a.hint}`.toLowerCase().includes(q),
    );
  }, [query]);

  useEffect(() => setActive(0), [results.length]);

  if (!open) return null;

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((n) => Math.min(n + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((n) => Math.max(n - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      run(results[active]);
      setOpen(false);
    }
  };

  const onDialogKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const container = paletteRef.current;
    if (!container) return;
    const focusables = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const activeEl = document.activeElement as HTMLElement | null;
    if (e.shiftKey) {
      if (activeEl === first || !container.contains(activeEl)) {
        e.preventDefault();
        last.focus();
      }
    } else if (activeEl === last || !container.contains(activeEl)) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={paletteRef}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm"
      onMouseDown={() => setOpen(false)}
      onKeyDown={onDialogKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/50"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <span className="font-mono text-xs text-faint">⌘</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            className="w-full bg-transparent font-mono text-sm text-body outline-none placeholder:text-faint"
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={
              results[active] ? `palette-opt-${active}` : undefined
            }
            aria-label="Search commands"
          />
          <span className="rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px] text-faint">
            esc
          </span>
        </div>

        <ul id="palette-list" role="listbox" aria-label="Commands" className="max-h-[45vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-3 py-4 text-center font-mono text-xs text-faint">
              no commands match “{query}”
            </li>
          ) : (
            results.map((a, i) => (
              <li
                key={`${a.label}-${i}`}
                id={`palette-opt-${i}`}
                role="option"
                aria-selected={i === active}
              >
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => {
                    run(a);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    i === active ? "bg-accent/10" : ""
                  }`}
                >
                  <span
                    className={`font-mono text-sm ${
                      i === active ? "text-accent" : "text-body"
                    }`}
                  >
                    {a.label}
                  </span>
                  <span className="font-mono text-[10px] text-faint">{a.hint}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
