const SOCIALS = [
  { label: "GitHub", href: "https://github.com/chandu954" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ashish-chandan" },
  { label: "Blog", href: "/blog" },
  { label: "Email", href: "mailto:ashishchandan0425@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-body">~/ashish</p>
          <p className="mt-1 font-mono text-xs text-faint">
            AI Engineer · Full-Stack Developer
          </p>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-1 text-muted transition-colors hover:text-accent"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
        <a
          href="#top"
          className="font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          ↑ back to top
        </a>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-4 sm:flex-row sm:justify-between sm:px-8">
          <p className="font-mono text-[11px] text-faint sm:text-left">
            © {year} Ashish Chandan · Built with Next.js · TypeScript · Tailwind CSS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-2 py-1 font-mono text-[10px] text-muted">
              <span className="size-1.5 rounded-full bg-teal-400" aria-hidden="true" />
              Lighthouse · SEO 100
            </span>
            <span className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[10px] text-muted">
              Next.js 15
            </span>
            <span className="rounded-md border border-border bg-surface px-2 py-1 font-mono text-[10px] text-muted">
              Vercel · zero CMS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}