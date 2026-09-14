import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://josecazal.dev";
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
