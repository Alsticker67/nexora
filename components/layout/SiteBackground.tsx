/* One continuous canvas behind the whole page.
 *
 * Every section used to paint its own opaque #0a0b0d block, so the page read
 * as separate panels stitched together. Instead the sections are now
 * transparent and float on this single layer: a soft vertical spectrum that
 * follows the scroll order (sky → cyan → violet → indigo → blue → amber → sky)
 * plus a few large radial glows that bleed across the section seams, so the
 * colours melt into one another instead of resetting at each boundary.
 *
 * Rendered once in page.tsx as an absolute layer sized to the full page
 * height, sitting behind the z-10 content. Kept very low-alpha so it reads as
 * an ambient wash, never a flat band. */
export default function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Radial glows drifting down alternating sides — the organic blend.
          Positions are % of the full page so they land roughly per-section. */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(760px circle at 12% 6%, rgba(56,189,248,0.12), transparent 60%)", // Hero · sky
            "radial-gradient(720px circle at 88% 20%, rgba(34,211,238,0.10), transparent 60%)", // About · cyan
            "radial-gradient(760px circle at 15% 36%, rgba(167,139,250,0.10), transparent 60%)", // Skills · violet
            "radial-gradient(780px circle at 85% 50%, rgba(129,140,248,0.10), transparent 60%)", // Projects · indigo
            "radial-gradient(760px circle at 18% 64%, rgba(96,165,250,0.10), transparent 60%)", // Experience · blue
            "radial-gradient(720px circle at 84% 78%, rgba(251,191,36,0.08), transparent 60%)", // Certifications · amber
            "radial-gradient(760px circle at 20% 92%, rgba(56,189,248,0.10), transparent 60%)", // Contact · sky
          ].join(","),
        }}
      />

      {/* Faint vertical spectrum tint so even the gaps between glows carry a
          trace of the section colour and dissolve into the next. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(56,189,248,0.05) 0%, rgba(34,211,238,0.04) 15%, rgba(167,139,250,0.04) 30%, rgba(129,140,248,0.04) 45%, rgba(96,165,250,0.04) 60%, rgba(251,191,36,0.035) 74%, rgba(56,189,248,0.04) 88%, rgba(7,8,9,0.5) 100%)",
        }}
      />

      {/* Full-page fine grid, unified so it no longer restarts each section. */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />
    </div>
  );
}
