import React from "react";
import "./globals.css";
import { Changa } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { siteMetadata } from "./metadata";

export const metadata = siteMetadata;
const changa = Changa({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background ${changa.className} max-w-3xl mx-4 mt-4 sm:mx-auto`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
