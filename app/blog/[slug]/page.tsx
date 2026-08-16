import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { POST_BY_SLUG } from "../posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.entries(POST_BY_SLUG)
    .filter(([, post]) => post.status === "published")
    .map(([slug]) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} — ${SITE_NAME}`,
    description: post.desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} — ${SITE_NAME}`,
      description: post.desc,
      type: "article",
      url,
      siteName: SITE_NAME,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — ${SITE_NAME}`,
      description: post.desc,
    },
  };
}

function Block({ post }: { post: (typeof POST_BY_SLUG)[string] }) {
  const accented = post.accent === "indigo" ? "text-indigo-400" : "text-accent";
  const accentedSoft = post.accent === "indigo" ? "text-indigo-400/60" : "text-accent/60";
  return (
    <div className="flex flex-col gap-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.desc,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: SITE_NAME,
              url: SITE_URL,
            },
            publisher: {
              "@type": "Person",
              name: SITE_NAME,
            },
            mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          }),
        }}
      />
      {post.blocks.map((b, i) =>
        b.type === "h2" ? (
          <h2 key={i} className="pt-3 text-xl font-semibold tracking-tight">
            {b.text}
          </h2>
        ) : b.type === "ul" ? (
          <ul key={i} className="flex list-none flex-col gap-2.5">
            {b.items.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span className={`mt-2.5 size-1 shrink-0 rounded-full ${accented}`} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p key={i} className="text-[15px] leading-relaxed text-muted">
            {b.text}
          </p>
        ),
      )}
      <div className="mt-2 flex items-center gap-3 border-t border-border pt-6">
        <span className={`font-mono text-xs ${accented}`}>✦</span>
        <p className={`font-mono text-[11px] ${accentedSoft}`}>
          {post.date} · {post.status} · by Ashish Chandan
        </p>
      </div>
    </div>
  );
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  if (!post) notFound();

  const accented = post.accent === "indigo" ? "text-indigo-400" : "text-accent";

  return (
    <main id="main" className="relative min-h-screen bg-bg">
      <div className="bg-dots absolute inset-0" aria-hidden="true" />
      <div className="glow-hero absolute inset-x-0 top-0 h-[300px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <Reveal>
          <Link
            href="/blog"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            ← all posts
          </Link>
          <p className={`mt-10 font-mono text-sm ${accented}`}>
            <span className="text-faint">{"//"}</span> {post.date}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-muted leading-relaxed">{post.desc}</p>
          <div className="mt-10">
            <Block post={post} />
          </div>
        </Reveal>
      </div>
    </main>
  );
}