"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface BlogPost {
  title: string;
  brief: string;
  url: string;
  readTimeInMinutes: number;
  publishedAt: string;
}

export default function LatestBlogPost() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestPost() {
      try {
        const response = await fetch("/api/blogs");
        const posts = await response.json();
        if (posts && posts.length > 0) {
          setPost(posts[0]);
        }
      } catch {
        setError("Failed to load latest post");
      } finally {
        setIsLoading(false);
      }
    }

    fetchLatestPost();
  }, []);

  if (isLoading) {
    return (
      <Card className="w-full h-full">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center gap-2 text-base text-muted-foreground">
            <BookOpen className="h-5 w-5" />
            <span>Latest Blog Post</span>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex items-center justify-between pt-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-16" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !post) {
    return (
      <Card className="w-fit">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-base text-muted-foreground mb-3">
            <BookOpen className="h-5 w-5" />
            <span>Latest Blog Post</span>
          </div>
          <Alert variant="destructive">
            <AlertDescription className="text-sm">
              {error || "No posts found"}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="w-fit bg-primary-background">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-base text-muted-foreground">
          <BookOpen className="h-5 w-5" />
          <span>Latest Blog Post</span>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-base text-foreground leading-tight line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {post.brief}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTimeInMinutes} min read</span>
            </div>
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <Link
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Read more <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
