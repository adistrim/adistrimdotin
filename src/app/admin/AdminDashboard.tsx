"use client";

import React, { useMemo } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Binary, Users, FileClock, LogOut, Loader2 } from "lucide-react";
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
import { ErrorBoundary } from "react-error-boundary";
import ProjectsManagement from "./ProjectsManagement";
import RecommendationsManagement from "./RecommendationsManagement";

// Improved type definitions
interface AdminAction {
  name: string;
  icon: React.ElementType;
  component?: React.ReactNode;
  description: string;
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

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div role="alert" className="p-4 text-center">
      <p className="text-red-500">Something went wrong:</p>
      <pre className="text-sm">{error.message}</pre>
      <Button onClick={resetErrorBoundary} className="mt-4">Try again</Button>
    </div>
  );
}

export default function AdminDashboard({
  initialSession,
}: AdminDashboardProps) {
  const { data: session, status } = useSession() as { data: CustomSession | null; status: string };
  const router = useRouter();
  const [selectedAction, setSelectedAction] = React.useState<string | null>(() => {
    // Persist selected action in localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedAction');
    }
    return null;
  });

  // Memoize admin actions
  const adminActions: AdminAction[] = useMemo(() => [
    {
      name: "Projects",
      icon: Binary,
      component: <ProjectsManagement />,
      description: "Manage your projects and tasks"
    },
    {
      name: "Recommendations",
      icon: Users,
      component: <RecommendationsManagement />,
      description: "View and manage user recommendations"
    },
    {
      name: "ChangeLog",
      icon: FileClock,
      description: "Track system changes and updates"
    },
  ], []);

  const handleActionSelect = (actionName: string) => {
    setSelectedAction(actionName);
    localStorage.setItem('selectedAction', actionName);
  };

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/signin");
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const currentSession = session || initialSession;

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!currentSession?.user?.role || currentSession.user.role !== "admin") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-red-500">Access Denied</p>
        <p className="text-muted-foreground mt-2">You don't have permission to access this page.</p>
        <Button onClick={() => router.push("/")} className="mt-4">
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <nav className="border-b bg-card" role="navigation" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="flex items-center gap-2"
                aria-label="User menu"
              >
                {currentSession.user.name || "Admin"}
                <LogOut className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside 
          className="w-64 border-r bg-card min-h-[calc(100vh-4rem)] p-4"
          role="navigation"
          aria-label="Admin sections"
        >
          <nav className="space-y-2">
            {adminActions.map((action) => (
              <Button
                key={action.name}
                variant={selectedAction === action.name ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleActionSelect(action.name)}
                aria-selected={selectedAction === action.name}
                aria-label={`Navigate to ${action.name} section`}
              >
                <action.icon className="mr-2 h-4 w-4" />
                {action.name}
              </Button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6" role="main">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            {!selectedAction ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {adminActions.map((action) => (
                  <Card
                    key={action.name}
                    className="hover:bg-accent transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:outline-none"
                    onClick={() => handleActionSelect(action.name)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleActionSelect(action.name);
                      }
                    }}
                    role="button"
                    aria-label={`Select ${action.name} section`}
                  >
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <action.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{action.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {action.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div>
                {adminActions.find(action => action.name === selectedAction)?.component || (
                  <div className="text-center text-muted-foreground">
                    <p>{selectedAction} section coming soon...</p>
                    <Button 
                      onClick={() => setSelectedAction(null)}
                      className="mt-4"
                    >
                      Return to Dashboard
                    </Button>
                  </div>
                )}
              </div>
            )}
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}
