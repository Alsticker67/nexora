import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";

/* Link-preview card (LinkedIn / WhatsApp / X etc.), generated at build time.
 * Mirrors the site: near-black base, sky accent, two-tone name — so a shared
 * link reads as the same brand as the page it opens. 1200×630 is the standard
 * Open Graph size. */
export const alt = `${personal.name} — ${personal.designation}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#070809",
          color: "#fafafa",
        }}
      >
        {/* soft sky wash in the corner for depth */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(56,189,248,0.16)",
          }}
        />

        {/* eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 9999,
              background: "#38bdf8",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#7dd3fc",
            }}
          >
            SAP Integration Developer
          </div>
        </div>

        {/* name — two-tone, matching the hero */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 800, lineHeight: 1 }}>
            <span style={{ color: "#fafafa" }}>{personal.firstName}</span>
          </div>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 800, lineHeight: 1 }}>
            <span style={{ color: "#71717a" }}>{personal.lastName}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginTop: 34,
            }}
          >
            <div style={{ width: 56, height: 4, background: "#38bdf8" }} />
            <div style={{ fontSize: 32, color: "#a1a1aa" }}>
              SAP CPI · PI/PO · BTP · REST &amp; SOAP · Groovy
            </div>
          </div>
        </div>

        {/* footer — live URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#52525b",
          }}
        >
          <span style={{ color: "#7dd3fc" }}>bhairav-portfolio.vercel.app</span>
          <span>Enterprise Integration Portfolio</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
