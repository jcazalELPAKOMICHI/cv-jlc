import { ImageResponse } from "next/og";
import { OG_ALT, OG_SIZE, SITE_OG_FONTS, renderSiteOgImage } from "@/infrastructure/og/site-og-image";

export const alt = OG_ALT;
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(renderSiteOgImage(), { ...OG_SIZE, fonts: SITE_OG_FONTS });
}
