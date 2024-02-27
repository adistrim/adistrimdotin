import React from 'react';

interface Recommendation {
  id: number;
  text: string;
  author: string;
  type: string;
  profileLink: string;
}

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 my-2 md:my-4 shadow-md">
      <p className="text-base dark:text-gray-300">{recommendation.text}</p>
      <p className="text-sm text-right mt-2 italic text-gray-600 dark:text-gray-400">- <a href={recommendation.profileLink} className="text-blue-500 dark:text-blue-300" target="_blank" rel="noopener noreferrer">{recommendation.author}</a> ({recommendation.type})</p>
    </div>
  );
};

export default RecommendationCard;
