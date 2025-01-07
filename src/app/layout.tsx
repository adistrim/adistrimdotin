import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Changa } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Head from "next/head";

const changa = Changa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Raj",
  description: `A digital space where I share my passions without social media algorithms`,
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
      <Head>
        <link rel="icon" href="/me.webp" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A digital space where I share my passions without social media algorithms" />
        <meta property="og:title" content="Aditya Raj" />
        <meta property="og:description" content="A digital space where I share my passions without social media algorithms" />
        <meta property="og:image" content="/me.webp" />
        <meta property="og:url" content="https://adistrim.in" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className={`min-h-screen bg-background ${changa.className} max-w-3xl mx-4 mt-4 sm:mx-auto`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
