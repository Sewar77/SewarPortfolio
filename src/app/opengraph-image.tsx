import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", background: "#0b0d11", color: "#f3f4f6", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", fontFamily: "Arial, sans-serif", backgroundImage: "radial-gradient(circle at 82% 25%, #283863 0%, transparent 38%)" }}>
      <div style={{ display: "flex", fontSize: 32, fontWeight: 700 }}>Sewar<span style={{ color: "#8daaff" }}>.</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 700, letterSpacing: "-4px", lineHeight: 1.08 }}><span>I build the whole</span><span>product.</span></div>
        <div style={{ fontSize: 26, color: "#a6adbb", marginTop: 30 }}>Sewar Al-Shorman | Full Stack Developer | Jordan</div>
      </div>
      <div style={{ width: "100%", height: 2, background: "#29303c" }}/>
    </div>, size
  );
}
