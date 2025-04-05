"use client";
import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

interface Recommendation {
  _id: string;
  text: string;
  author: string;
  type: string;
  profileLink: string;
}

const RecommendationCard: React.FC<{ recommendation: Recommendation }> = ({ recommendation }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <FaQuoteLeft className="text-gray-300 dark:text-gray-700 text-xl mb-4" />
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{recommendation.text}</p>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800 flex justify-between items-center">
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">{recommendation.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{recommendation.type}</p>
        </div>
        <a 
          href={recommendation.profileLink} 
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {recommendation.profileLink.includes('linkedin') ? (
            <FaLinkedin className="text-lg" />
          ) : (
            <FaExternalLinkAlt className="text-sm" />
          )}
        </a>
      </div>
    </div>
  );
};

export const Recommendation: React.FC = () => {
  const [recommendationsData, setRecommendationsData] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/recommendations');
        if (!response.ok) {
          throw new Error('Failed to fetch recommendations');
        }
        const data = await response.json();
        setRecommendationsData(data);
        setError(null);
      } catch (error) {
        setError('Could not load recommendations. Please try again later.');
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

      {isLoading && (
        <div className="flex justify-center my-12">
          <div className="animate-pulse text-gray-500 dark:text-gray-400">Loading recommendations...</div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
          {error}
        </div>
      )}

      {!isLoading && !error && recommendationsData.length === 0 && (
        <div className="bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-300">No recommendations yet. Check back soon!</p>
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
};
