import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.theexpshop.com"),
  title: "The Experience Barber & Beauty Shop | Best Cuts in Downtown Akron",
  description:
    "Premium grooming and styling for the modern gentleman in downtown Akron. Precision haircuts, beard detailing, and a welcoming barbershop experience.",
  authors: [{ name: "The Experience Barber Shop" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  verification: {
    google: "yg1HAPOu_5PdHoZ28ehDNi5MgnXCu0aLNp5_VktPUyo",
  },
  openGraph: {
    type: "website",
    title: "The Experience Barber Shop - Best Cuts in Town",
    description:
      "Get the best haircuts and grooming services with our expert barbers.",
    url: "https://www.theexpshop.com",
    images: [
      "https://www.theexpshop.com/assets/images/theExperienceBarberShopAndSalon3.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#2563eb" />
        {/* Font Awesome (icon webfont) — works with static export */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
