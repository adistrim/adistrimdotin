"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function MainContent({
  children,
  changa,
}: {
  children: React.ReactNode;
  changa: string;
}) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/signin" || pathname === "/admin";
  const isAdminRoute = pathname === "/admin";

  return (
    <main className={`${changa} antialiasing ${!isAdminRoute ? "max-w-3xl mx-4 mt-4 sm:mx-auto" : ""}`}>
      <div className={`flex-auto min-w-0 flex flex-col ${!isAdminRoute ? "mt-6" : ""}`}>
        {!isAuthRoute && <Header />}
        {children}
        {!isAuthRoute && <Footer />}
      </div>
    </main>
  );
}
