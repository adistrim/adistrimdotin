"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Binary, Users, FileClock, LogOut } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AdminAction {
  name: string;
  icon: React.ElementType;
}

interface CustomUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role?: string;
}

interface CustomSession {
  user?: CustomUser;
}

interface AdminDashboardProps {
  initialSession: CustomSession;
}

export default function AdminDashboard({
  initialSession,
}: AdminDashboardProps) {
  const { data: session } = useSession() as { data: CustomSession | null };
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/signin");
  };

  const currentSession = session || initialSession;

  if (!currentSession?.user?.role || currentSession.user.role !== "admin") {
    return <p className="text-center">Access Denied</p>;
  }

  const adminActions: AdminAction[] = [
    {
      name: "Projects",
      icon: Binary,
    },
    {
      name: "Recommendations",
      icon: Users,
    },
    {
      name: "ChangeLog",
      icon: FileClock,
    },
  ];

  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card className="bg-card">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, {currentSession.user.name || "Admin"}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {adminActions.map((action, index) => (
          <Card
            key={index}
            className="hover:bg-accent transition-colors cursor-pointer"
          >
            <CardContent className="flex flex-col items-center justify-center p-6">
              <action.icon className="h-8 w-8 mb-2" />
              <span className="text-lg hidden sm:block font-semibold">
                {action.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" /> Account
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
