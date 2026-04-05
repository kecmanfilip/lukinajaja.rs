import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const alt = "Lukina Jaja - Domaca jaja iz Opova";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoPath = path.join(process.cwd(), "public", "images", "logo.png");
  const logoData = fs.readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FDFAF5 0%, #F5EFE3 100%)",
          fontFamily: "serif",
          gap: 40,
          padding: 60,
        }}
      >
        <img
          src={logoBase64}
          width={280}
          height={280}
          style={{ borderRadius: "50%" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#2C2416",
              marginBottom: 10,
            }}
          >
            Lukina Jaja
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#6B5D4F",
              marginBottom: 16,
            }}
          >
            Sveza domaca jaja iz Opova
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#5B7C3D",
              fontWeight: 600,
            }}
          >
            lukinajaja.rs
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
