import { ImageResponse } from "next/og";
import { POST_BY_SLUG } from "../posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  const title = post?.title ?? "Blog post";
  const tag = post ? `${post.date} · ${post.status}` : "ashish — blog";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 80px",
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#34d399" }}>
          ~/ashish — blog
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            marginTop: 32,
          }}
        >
          {title}
        </div>
        <div
          style={{ display: "flex", fontSize: 28, color: "#a1a1aa", marginTop: 40 }}
        >
          {tag} · Ashish Chandan
        </div>
      </div>
    ),
    { ...size },
  );
}
