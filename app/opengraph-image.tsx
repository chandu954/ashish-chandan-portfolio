import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ashish Chandan — AI Engineer & Full-Stack Developer";

export default function OgImage() {
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
        <div style={{ display: "flex", fontSize: 28, color: "#66666e" }}>
          ~/ashish — portfolio
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 24 }}>
          Ashish{" "}
          <span style={{ color: "#34d399" }}>&nbsp;Chandan</span>
        </div>
        <div style={{ display: "flex", fontSize: 40, color: "#38bdf8", marginTop: 16 }}>
          AI Engineer &amp; Full-Stack Developer
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa", marginTop: 40, gap: 28 }}>
          <span>RAG</span>
          <span>·</span>
          <span>Multi-Agent Systems</span>
          <span>·</span>
          <span>LLM Products</span>
          <span>·</span>
          <span>Full-Stack</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
