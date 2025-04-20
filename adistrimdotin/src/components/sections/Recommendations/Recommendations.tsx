"use client";
import React, { useState, useEffect } from "react";
import { RecommendationSkeleton } from "./RecommendationSkeleton";
import RecommendationCard from "./RecommendationCard";

export interface Recommendation {
  _id: string;
  text: string;
  author: string;
  type: string;
  profileLink: string;
}

export default function Recommendations() {
  const [recommendationsData, setRecommendationsData] = useState<
    Recommendation[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/recommendations");
        if (!response.ok) {
          throw new Error("Failed to fetch recommendations");
        }
        const data = await response.json();
        setRecommendationsData(data);
        setError(null);
      } catch (error) {
        setError("Could not load recommendations. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecommendations();
  }, []);

  return (
    <section className="mt-16">
      <div className="mb-8">
        <h1 className="font-bold dark:text-gray-100 text-2xl mb-3 inline-block border-b-2 border-gray-300 dark:border-zinc-700 pb-1">
          What People Say
        </h1>
      </div>

      {isLoading && <RecommendationSkeleton />}

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
          {error}
        </div>
      )}

      {!isLoading && !error && recommendationsData.length === 0 && (
        <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-300">
            No recommendations yet. Check back soon!
          </p>
        </div>
      )}

      {!isLoading && !error && recommendationsData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendationsData.map((recommendation) => (
            <RecommendationCard
              key={recommendation._id}
              recommendation={recommendation}
            />
          ))}
        </div>
      )}
    </section>
  );
}
