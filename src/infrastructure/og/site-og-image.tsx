/**
 * Shared JSX + config for the site's social-share image, consumed by
 * both `opengraph-image.tsx` and `twitter-image.tsx` so there's a
 * single place that defines what link previews (Slack, X, WhatsApp,
 * LinkedIn, ...) show. Rendered through `next/og`'s ImageResponse
 * (Satori under the hood), which only supports a flexbox subset of
 * CSS — no `filter`, no custom fonts unless loaded manually — hence
 * the soft "glow" being a radial-gradient rather than a blurred div.
 *
 * Satori's built-in fallback font renders fine but has awkward
 * kerning around some word boundaries, so we ship a real typeface
 * (Liberation Sans, bundled under assets/fonts/, see LICENSE.txt
 * there) instead of fetching one at runtime — this project avoids
 * network requests at build/runtime for fonts, same reasoning as
 * globals.css not using next/font/google.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const [regularFont, boldFont] = await Promise.all([
  readFile(join(process.cwd(), "assets/fonts/LiberationSans-Regular.ttf")),
  readFile(join(process.cwd(), "assets/fonts/LiberationSans-Bold.ttf")),
]);

export const SITE_OG_FONTS = [
  { name: "Liberation Sans", data: regularFont, style: "normal" as const, weight: 400 as const },
  { name: "Liberation Sans", data: boldFont, style: "normal" as const, weight: 700 as const },
];

const BACKGROUND = "#08070c";
const FOREGROUND = "#f4f2fb";
const MUTED = "#a9a3bd";
const ACCENT = "#0ea5ff";
const ACCENT_STRONG = "#38bdff";
const ACCENT_SECONDARY = "#22d3ee";
const BORDER_STRONG = "rgba(245, 243, 255, 0.16)";

export const OG_ALT = "José Luis Cazal — Arquitecto Frontend & Mobile";
export const OG_SIZE = { width: 1200, height: 630 };

const TAGS = ["10+ años", "Flutter", "Clean Architecture", "Banca & Fintech"];

export function renderSiteOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: BACKGROUND,
        position: "relative",
        fontFamily: "Liberation Sans",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: -180,
          right: -160,
          width: 560,
          height: 560,
          borderRadius: 9999,
          background: `radial-gradient(circle, ${ACCENT} 0%, rgba(14,165,255,0) 70%)`,
          opacity: 0.35,
        }}
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: -220,
          left: -140,
          width: 480,
          height: 480,
          borderRadius: 9999,
          background: `radial-gradient(circle, ${ACCENT_SECONDARY} 0%, rgba(34,211,238,0) 70%)`,
          opacity: 0.2,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 16,
            background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_SECONDARY} 100%)`,
            color: "#080e1c",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          JL
        </div>
        <div style={{ display: "flex", fontSize: 22, color: MUTED, letterSpacing: 1 }}>JL.Cazal</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 66, fontWeight: 700, color: FOREGROUND, letterSpacing: -1 }}>
          José Luis Cazal
        </div>
        <div style={{ display: "flex", fontSize: 33, fontWeight: 700, color: ACCENT_STRONG, marginTop: 10 }}>
          Arquitecto Frontend & Mobile
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 23,
            color: MUTED,
            marginTop: 20,
            maxWidth: 760,
            lineHeight: 1.4,
          }}
        >
          Construyo productos móviles escalables con Flutter y Clean Architecture.
        </div>
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        {TAGS.map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "10px 20px",
              borderRadius: 9999,
              border: `1px solid ${BORDER_STRONG}`,
              color: MUTED,
              fontSize: 19,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
