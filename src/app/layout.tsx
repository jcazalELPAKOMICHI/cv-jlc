import type { Metadata } from "next";
import "./globals.css";

// Matches the live Vercel deployment — must stay in sync with whatever
// domain actually serves the site, since it's used to build the
// absolute og:image URL that link previews (Slack, WhatsApp, X...) fetch.
const SITE_URL = "https://cv-jlc.vercel.app";
const TITLE = "José Luis Cazal — Frontend & Mobile Architect";
const DESCRIPTION =
  "Arquitecto Frontend & Mobile con 10+ años de experiencia en Flutter y Clean Architecture, liderando productos de banca y fintech.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "José Luis Cazal",
    "Frontend Architect",
    "Mobile Architect",
    "Flutter",
    "Clean Architecture",
    "Next.js",
  ],
  authors: [{ name: "José Luis Cazal" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "José Luis Cazal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
