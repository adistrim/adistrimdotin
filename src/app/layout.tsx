import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Changa } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const changa = Changa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Raj",
  description: "A digital space where I share my passions without social media algorithms",
  keywords:
    "Aditya Raj, aditya raj, aditya, raj, adistrim, Adistrim, ADISTRIM, portfolio, aditya portfolio, adistrim portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-background ${changa.className} max-w-3xl mx-4 mt-4 sm:mx-auto`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <>
            <Header />
            {children || <div>No content available</div>}
            <Footer />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
