import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#181310",
          color: "#faf5ec",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#c9a227",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Darim Luxe Cosmetics
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 54,
            fontFamily: "serif",
            textAlign: "center",
            maxWidth: 920,
            lineHeight: 1.15,
          }}
        >
          Luxury beauty, made for every Kenyan skin and hair story.
        </div>
      </div>
    ),
    { ...size }
  );
}
