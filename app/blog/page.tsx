import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { POSTS } from "./posts";

export const metadata: Metadata = {
  title: "Blog — Ashish Chandan",
  description:
    "Technical write-ups on RAG pipelines, multi-agent orchestration, and backend architecture by Ashish Chandan.",
};

export default function BlogPage() {
  const published = POSTS.filter((p) => p.status === "published");
  const drafting = POSTS.filter((p) => p.status !== "published");

  return (
    <main id="main" className="relative min-h-screen bg-bg">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div className="glow-hero absolute inset-x-0 top-0 h-[300px]" aria-hidden="true" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: `${SITE_URL}/blog`,
              },
            ],
          }),
        }}
      />

      <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <p className="font-mono text-sm text-accent">
          <span className="text-faint">{"//"}</span> blog
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Technical write-ups
        </h1>
        <p className="mt-3 text-muted leading-relaxed">
          Notes from production: RAG systems, multi-agent orchestration, LLM
          product engineering.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {published.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs text-faint">
                  posts/{String(i + 1).padStart(2, "0")}.md
                </p>
                <span className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
                  {post.date} · {post.status}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                {post.title} ↗
              </h2>
              <p className="mt-2 text-sm text-muted">{post.desc}</p>
            </Link>
          ))}

          {drafting.map((post, i) => (
            <article
              key={post.title}
              className="rounded-xl border border-border bg-surface p-6 opacity-70"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-xs text-faint">
                  posts/{String(published.length + i + 1).padStart(2, "0")}.md
                </p>
                <span className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[10px] text-faint">
                  {post.status}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold tracking-tight">{post.title}</h2>
              <p className="mt-2 text-sm text-muted">{post.desc}</p>
            </article>
          ))}
        </div>

        <Link
          href="/"
          className="mt-10 inline-block font-mono text-sm text-muted transition-colors hover:text-accent"
        >
          ← back to portfolio
        </Link>
      </div>
    </main>
  );
}
