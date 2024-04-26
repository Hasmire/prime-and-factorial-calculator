// Importing necessary types and libraries
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using Google's Inter font with the latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the webpage
export const metadata: Metadata = {
  title: "Prime Checker and Factorial Calculator",
  description: "Created by @hasmire",
};

/**
 * RootLayout is the main layout component.
 * It sets the webpage language and applies the Inter font.
 * It accepts and renders children components.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
