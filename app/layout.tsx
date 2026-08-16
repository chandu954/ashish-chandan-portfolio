import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, SOCIAL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "Portfolio of Ashish Chandan — AI Engineer and Full-Stack Developer building RAG systems, multi-agent applications, LLM workflows, and production-grade web products. Based in Pune, India.",
  keywords: [
    "Ashish Chandan",
    "AI Engineer",
    "LLM Engineer",
    "Full Stack Developer",
    "RAG",
    "Multi-Agent Systems",
    "Next.js",
    "FastAPI",
    "Pune",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "AI Engineer & Full-Stack Developer building RAG systems, multi-agent applications, and production-grade web products.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "RAG systems, multi-agent applications, and production-grade web products.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="light"){document.documentElement.classList.add("light")}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE_NAME,
              url: SITE_URL,
              image: `${SITE_URL}/opengraph-image`,
              jobTitle: SITE_TAGLINE,
              email: SOCIAL.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pune",
                addressCountry: "IN",
              },
              sameAs: [SOCIAL.github, SOCIAL.linkedin],
              knowsAbout: [
                "RAG",
                "LLM applications",
                "Multi-agent systems",
                "FastAPI",
                "Next.js",
                "TypeScript",
              ],
              alumniOf: "Ajeenkya DY Patil School of Engineering, Pune",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}