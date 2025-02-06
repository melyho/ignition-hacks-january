import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: 'Ignition Hacks v.6'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/satoshi" // Correct CDN URL for Satoshi
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
