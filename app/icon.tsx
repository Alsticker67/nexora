import { ImageResponse } from "next/og";
import { personal } from "@/data/personal";

/* Browser-tab favicon, generated at build time so there's no binary asset to
 * ship. A "BH" monogram in the site's sky accent on a near-black tile — the
 * same brand language as the header. */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
          color: "#0a0a0a",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 7,
        }}
      >
        {personal.shortName}
      </div>
    ),
    { ...size }
  );
}
