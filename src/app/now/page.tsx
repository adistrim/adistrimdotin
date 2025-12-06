import { getNow } from "@/lib/now";
import type { ContactItem } from "@/models/now";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default async function NowPage() {
    const data = await getNow();

    if (!data) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <p className="text-muted-foreground">
                    Unable to load now page.
                </p>
            </div>
        );
    }

    return (
        <main className="prose prose-gray dark:prose-invert max-w-none py-8">
            <div className="space-y-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2">
                        What I&apos;m Doing Now
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Last updated: {data.last_update}
                    </p>
                </div>

                <div className="prose-lg">
                    <ReactMarkdown>{data.content}</ReactMarkdown>
                </div>

                {data.contact?.length > 0 && (
                    <section className="border-t pt-8">
                        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                        <ul className="space-y-2 list-none pl-0">
                            {data.contact.map((c: ContactItem, i: number) => (
                                <li key={i} className="flex gap-2">
                                    <span className="font-medium text-muted-foreground">
                                        {c.label}:
                                    </span>
                                    {c.link ? (
                                        <Link
                                            href={c.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {c.text}
                                        </Link>
                                    ) : (
                                        <span>{c.text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <footer className="text-sm text-muted-foreground border-t pt-6">
                    <p>
                        This is a{" "}
                        <Link
                            href="https://nownownow.com/about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-muted-foreground hover:text-foreground transition-colors"
                        >
                            now page
                        </Link>
                        , inspired by{" "}
                        <Link
                            href="https://nownownow.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-muted-foreground hover:text-foreground transition-colors"
                        >
                            nownownow.com
                        </Link>
                    </p>
                </footer>
            </div>
        </main>
    );
}
