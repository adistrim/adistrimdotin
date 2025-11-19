import { GITHUB } from "@/constants";
import { Commit } from "@/types/github.type";

export async function fetchCommits(): Promise<Commit[] | null> {
  try {
    const res = await fetch(GITHUB.commitsApi, {
      headers: { "User-Agent": "adistrim-site" },
      next: { revalidate: 86400 }
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
