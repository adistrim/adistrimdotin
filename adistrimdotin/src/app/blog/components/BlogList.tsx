"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import BlogSkeleton from "./BlogSkeleton";

interface Blog {
  title: string;
  subtitle: string;
  brief: string;
  url: string;
  readTimeInMinutes: number;
  publishedAt: string;
  coverImage: {
    url: string;
  };
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Error loading blogs: {error}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {loading ? (
        <>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </>
      ) : (
        blogs.map((blog) => (
          <Link href={blog.url} key={blog.url} className="block no-underline">
            <Card className="group hover:shadow-md transition-shadow duration-200 cursor-pointer">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-foreground transition-colors">
                      {blog.title}
                    </h2>
                    
                    {blog.subtitle && (
                      <p className="text-md font-normal text-foreground mt-0 mb-3">
                        {blog.subtitle}
                      </p>
                    )}
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{dayjs(blog.publishedAt).format("MMMM D, YYYY")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{blog.readTimeInMinutes} min read</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {truncateText(blog.brief, 150)}
                    </p>
                  </div>
                  
                  {blog.coverImage?.url && (
                    <div className="w-full md:w-64 h-36 md:h-auto md:flex-shrink-0">
                      <Image
                        src={blog.coverImage.url}
                        alt={blog.title}
                        width={256}
                        height={144}
                        className="w-full h-full object-cover rounded-md"
                        unoptimized
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))
      )}
    </div>
  );
}
