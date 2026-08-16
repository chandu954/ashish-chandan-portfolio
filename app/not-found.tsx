import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-5 text-center">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div className="glow-hero absolute inset-x-0 top-0 h-[300px]" aria-hidden="true" />
      <div className="relative">
        <p className="font-mono text-7xl font-semibold tracking-tight text-accent">
          404
        </p>
        <p className="mt-4 font-mono text-sm text-muted">
          <span className="text-faint">$</span> cat missing-page.txt
          <br />
          <span className="text-faint">|</span> file not found — this route
          doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border border-accent/40 px-5 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          ~/ return home
        </Link>
      </div>
    </main>
  );
}