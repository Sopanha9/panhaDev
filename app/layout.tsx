import type { Metadata } from "next";
import { Inter, Noto_Sans_Khmer } from "next/font/google"; // Using Noto Sans Khmer as a reliable fallback
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoKhmer = Noto_Sans_Khmer({
  variable: "--font-khmer-font", // Renaming to avoid confusion
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Panha.dev - Portfolio",
  description: "Portfolio of Panha, Backend Developer & Cybersecurity Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoKhmer.variable} antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

