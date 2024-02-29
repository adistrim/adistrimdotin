"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";

interface Commit {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
}

const Changelog: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/adistrim/adistrim.me/commits")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch commits");
        }
        return response.json();
      })
      .then((data: Commit[]) => {
        setCommits(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch commits. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen mb-20 px-1">
      <h2 className="font-medium text-xl mb-8 tracking-tighter">Changelog</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {commits.map((commit) => (
            <li key={commit.sha} className="my-[2rem]">
              <div className="mb-2">
                <strong>{commit.commit.author.name}</strong> committed on{" "}
                {moment(commit.commit.author.date).format("MMMM D, YYYY")}:
              </div>
              <div className="mb-2">{commit.commit.message}</div>
              <div>
                <a
                  href={`https://github.com/adistrim/adistrim.me/commit/${commit.sha}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Changelog;
