import type { Metadata } from "next";
import { Inter, Kantumruy_Pro } from "next/font/google"; // Kantumruy Pro is available in Google Fonts
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kantumruy = Kantumruy_Pro({
  variable: "--font-kantumruy",
  subsets: ["khmer", "latin"], // Important for Khmer support
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
    <html lang="en">
      <body
        className={`${inter.variable} ${kantumruy.variable} antialiased bg-[#0D1117] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
