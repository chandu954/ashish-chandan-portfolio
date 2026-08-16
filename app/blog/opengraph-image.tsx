import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ashish Chandan — Blog";

export default function BlogListingOgImage() {
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
          style={{ display: "flex", fontSize: 88, fontWeight: 700, marginTop: 24 }}
        >
          Technical{" "}
          <span style={{ color: "#38bdf8" }}>&nbsp;write-ups</span>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a1a1aa", marginTop: 24 }}>
          RAG · Multi-agent systems · LLM products
        </div>
      </div>
    ),
    { ...size },
  );
}
