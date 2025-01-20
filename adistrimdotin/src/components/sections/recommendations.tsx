"use client";
import React, { useState, useEffect } from 'react';

interface Recommendation {
  _id: string;
  text: string;
  author: string;
  type: string;
  profileLink: string;
}

const RecommendationCard: React.FC<{ recommendation: Recommendation }> = ({ recommendation }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 my-2 md:my-4 shadow-md">
      <p className="text-base dark:text-gray-300">{recommendation.text}</p>
      <p className="text-sm text-right mt-2 italic text-gray-700 dark:text-gray-400">
        - <a href={recommendation.profileLink} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{recommendation.author}</a> ({recommendation.type})
      </p>
    </div>
  );
};

export const Recommendation: React.FC = () => {
  const [recommendationsData, setRecommendationsData] = useState<Recommendation[]>([]);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const response = await fetch('/api/recommendations');
        if (!response.ok) {
          throw new Error('Failed to fetch recommendations');
        }
        const data = await response.json();
        setRecommendationsData(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    }

    fetchRecommendations();
  }, []);

  return (
    <div className="my-10">
      <h1 className="font-medium dark:text-gray-100 mt-4 text-xl mb-4 tracking-tighter">Recommendations</h1>
      {recommendationsData.map((recommendation) => (
        <RecommendationCard
          key={recommendation._id}
          recommendation={recommendation}
        />
      ))}
    </div>
  );
};
