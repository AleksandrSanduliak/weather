import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "XWEAR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
