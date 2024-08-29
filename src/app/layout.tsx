import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import React from "react";
import { Changa } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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
        <main
          className={`${changa.className} antialiasing max-w-3xl mx-4 mt-4 sm:mx-auto`}
        >
          <div className="flex-auto min-w-0 mt-6 flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
