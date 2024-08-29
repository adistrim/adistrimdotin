"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MainContent({
  children,
  changa,
}: {
  children: React.ReactNode;
  changa: string;
}) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/signin" || pathname === "/admin";

  return (
    <main className={`${changa} antialiasing max-w-3xl mx-4 mt-4 sm:mx-auto`}>
      <div className="flex-auto min-w-0 mt-6 flex flex-col">
        {!isAuthRoute && <Header />}
        {children}
        {!isAuthRoute && <Footer />}
      </div>
    </main>
  );
}
