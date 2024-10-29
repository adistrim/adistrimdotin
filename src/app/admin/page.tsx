import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/auth";
import AdminDashboard from "./AdminDashboard";
import { Session } from "next-auth";

interface CustomSession extends Session {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
  };
}

export default async function AdminPage() {
  const session = (await getServerSession(authOptions)) as CustomSession | null;

  if (!session) {
    redirect("/signin");
  }

  if (!session.user.role || session.user.role !== "admin") {
    redirect("/signin");
  }

  return <AdminDashboard initialSession={session} />;
}
