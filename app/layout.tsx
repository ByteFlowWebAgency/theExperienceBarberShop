import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="The Experience Barber Shop" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Experience Barber Shop - Best Cuts in Town" />
        <meta property="og:description" content="Get the best haircuts and grooming services with our expert barbers." />
        <meta property="og:image" content="https://www.theexpshop.com/assets/images/theExperienceBarberShopAndSalon3.jpg" />
        <meta property="og:url" content="https://www.theexpshop.com" />
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
