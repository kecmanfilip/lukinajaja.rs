import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lukina Jaja — Domaća jaja iz Opova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FDFAF5 0%, #F5EFE3 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 80,
            marginBottom: 20,
          }}
        >
          🥚
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#2C2416",
            marginBottom: 10,
          }}
        >
          Lukina Jaja
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#6B5D4F",
          }}
        >
          Sveža domaća jaja iz Opova
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#5B7C3D",
            marginTop: 20,
          }}
        >
          lukinajaja.rs
        </div>
      </div>
    ),
    { ...size }
  );
}
