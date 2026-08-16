import { POSTS } from "../blog/posts";

export const dynamic = "force-static";

const BASE = "https://ashish-chandan.vercel.app";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET() {
  const items = POSTS.filter((p) => p.status === "published")
    .map(
      (p) => `<item>
    <title>${esc(p.title)}</title>
    <link>${BASE}/blog/${p.slug}</link>
    <guid>${BASE}/blog/${p.slug}</guid>
    <pubDate>${p.date}</pubDate>
    <description>${esc(p.desc)}</description>
  </item>`,
    )
    .join("\n  ");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Ashish Chandan — Blog</title>
    <link>${BASE}/blog</link>
    <description>Technical write-ups on RAG pipelines, multi-agent systems, and LLM products.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}