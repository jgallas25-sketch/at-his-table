import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://at-his-table.vercel.app"),
  title: "At His Table – A devotional journal built around you",
  description:
    "A devotional journal built around your life and grounded in His Word, so you can sit at the table with Jesus every day.",
  openGraph: {
    title: "At His Table",
    description:
      "A devotional journal built around your life and grounded in His Word.",
    images: ["/images/hero.jpg"],
  },
  appleWebApp: {
    title: "At His Table",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Karla:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
