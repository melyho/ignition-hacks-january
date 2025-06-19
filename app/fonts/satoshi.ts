// app/fonts/satoshi.ts
import localFont from "next/font/local";

export const satoshi = localFont({
  src: "./Satoshi-Variable.ttf", // or .woff2 if available
  variable: "--font-satoshi",
  display: "swap",
});
