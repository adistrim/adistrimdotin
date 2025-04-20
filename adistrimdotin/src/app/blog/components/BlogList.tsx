"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
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
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {loading ? (
        <>
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </>
      ) : (
        blogs.map((blog) => (
          <Link href={blog.url} key={blog.url}>
            <div className="p-4 md:space-x-4 border rounded-lg shadow-md cursor-pointer flex flex-col md:flex-row h-full">
              <div>
                <h2 className="text-2xl font-bold mb-1 dark:text-white">
                  {blog.title}
                </h2>
                <h3 className="text-lg text-gray-600 mb-1 dark:text-gray-300">
                  {blog.subtitle}
                </h3>
                <div className="flex items-center text-gray-500 mb-4 dark:text-gray-400">
                  <span>{dayjs(blog.publishedAt).format("MMMM D, YYYY")}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTimeInMinutes} min read</span>
                </div>
                <p className="text-gray-700 mb-4 md:mb-0 dark:text-gray-300">
                  {truncateText(blog.brief, 150)}
                </p>
              </div>
              {blog.coverImage?.url && (
                <div>
                  <Image
                    src={blog.coverImage.url}
                    alt={blog.title}
                    width={1000}
                    height={525}
                    className="rounded-md"
                  />
                </div>
              )}
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
