import React from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";

async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin")?.value;

  if (!token) {
    redirect("/auth/login");
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 left-0 w-full flex h-16 border-b shrink-0 items-center justify-between px-4 z-10">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AdminLayout;
