import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/home-sections";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Sewar Al-Shorman — Full Stack Developer", template: "%s | Sewar Al-Shorman" },
  description: "Full Stack Developer based in Jordan specializing in React, Next.js, TypeScript, Node.js and PostgreSQL.",
  applicationName: "Sewar Al-Shorman Portfolio",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_US", url: "/", siteName: "Sewar Al-Shorman", title: "Sewar Al-Shorman — Full Stack Developer", description: "Full Stack Developer based in Jordan. Building complete products from database to interface.", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Sewar Al-Shorman — Full Stack Developer", description: "Building complete products from database to interface.", images: ["/opengraph-image"] },
  icons: { icon: "/icon.svg" },
  manifest: "/manifest.webmanifest",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b0d11" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: portfolio.name, jobTitle: "Full Stack Developer", homeLocation: { "@type": "Place", name: "Jordan" }, url: siteUrl, sameAs: [portfolio.socials.github, ...(portfolio.socials.linkedin ? [portfolio.socials.linkedin] : [])] };
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.theme=localStorage.getItem('theme')||'dark'}catch(e){document.documentElement.dataset.theme='dark'}" }}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}/></head><body className={`${geist.variable} ${geistMono.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader/>{children}<Footer/></body></html>;
}
