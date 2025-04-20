import { FaQuoteLeft, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { Recommendation } from "./Recommendations";

interface RecommendationCardProps {
  recommendation: Recommendation;
}

export default function RecommendationCard({
  recommendation,
}: RecommendationCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <FaQuoteLeft className="text-gray-300 dark:text-gray-700 text-xl mb-4" />
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {recommendation.text}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800 flex justify-between items-center">
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">
            {recommendation.author}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {recommendation.type}
          </p>
        </div>
        <a
          href={recommendation.profileLink}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          {recommendation.profileLink.includes("linkedin") ? (
            <FaLinkedin className="text-lg" />
          ) : (
            <FaExternalLinkAlt className="text-sm" />
          )}
        </a>
      </div>
    </div>
  );
}
