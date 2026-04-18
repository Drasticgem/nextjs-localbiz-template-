import type { Metadata, Viewport } from "next";
import { Lora, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { buildMetadata, metadataDefaults } from "@/lib/metadata";
import "./globals.css";

const headingFont = Lora({
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(metadataDefaults.siteUrl),
  ...buildMetadata({
    title: "Home",
    description:
      "Client-agnostic Next.js starter template for local businesses. Replace branding, content, and assets for each new client site.",
    path: "/",
    image: metadataDefaults.ogImage,
  }),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
