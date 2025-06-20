import type { Metadata } from "next";
import { satoshi } from "./fonts/satoshi";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ignition Hacks V.6",
  description: "A hackathon at the intersection of technology and entrepeneurship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${satoshi.variable} font-sans antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
