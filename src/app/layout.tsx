import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Changa } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Providers } from "./providers";
import MainContent from "@/components/MainContent";

const changa = Changa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Raj",
  description: `A digital space where I share my passions without social media algorithms`,
  keywords:
    "Aditya Raj, aditya raj, aditya, raj, adistrim, Adistrim, ADISTRIM, portfolio, aditya portfolio, adistrim portfolio",
};

const setInitialTheme = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.className = theme;
    } else {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.className = prefersDarkMode ? 'dark' : '';
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <head>
        <link rel="icon" href="/me.webp" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className="bg-[#fefbf6] dark:bg-[#111010]">
        <Providers>
          <MainContent changa={changa.className}>{children}</MainContent>
        </Providers>
      </body>
    </html>
  );
}
