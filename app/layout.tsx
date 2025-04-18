import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RIDE JOB FOR SSW",
  description: "特定技能合格者向けタクシードライバー専門求人サービス",
  openGraph: {
    title: "RIDE JOB FOR SSW",
    description: "特定技能合格者向けタクシードライバー専門求人サービス",
    url: "https://ssw.ridejob.com",
    siteName: "RIDE JOB FOR SSW",
    images: [
      {
        url: "/ogp-image.png",
        width: 1200,
        height: 630,
        alt: "RIDE JOB FOR SSW OGP Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIDE JOB FOR SSW",
    description: "特定技能合格者向けタクシードライバー専門求人サービス",
    images: ["/ogp-image.png"],
  },
};

// No generateStaticParams needed here if handled by locale layout

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
