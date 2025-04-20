import { Skeleton } from "@/components/ui/skeleton";

export function RecommendationSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-zinc-700 rounded-xl p-6"
          >
            <Skeleton className="h-5 w-5 mb-4" />
            <div className="space-y-2 mb-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-zinc-800 flex justify-between items-center">
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
          </div>
        ))}
    </div>
  );
}
